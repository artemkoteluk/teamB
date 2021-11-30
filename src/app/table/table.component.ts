import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {KeyValue} from "@angular/common";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['checkbox', 'image', 'FullName', 'FirstName', 'LastName', 'Street', 'Zipcode', 'City', 'Phone', 'actions'];
  isDisplayed = {
    'checkbox': false,
    'image': true,
    'FullName': true,
    'FirstName': false,
    'LastName': false,
    'Street': true,
    'Zipcode': true,
    'City': true,
    'Phone': true,
    'Actions': true
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:MatTableDataSource<UserData>;

  allSelected: boolean=false;
  selectedId=0;
  // animal: string;
  // name: string;

  constructor(public dialog: MatDialog) {
    const users: UserData[] = [
      {
        id: 0,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Fuller',
        LastName: 'Espinoza',
        Street: 'Dooley Street',
        Zipcode: '9034',
        City: 'Maybell',
        Phone: '+1 (807) 417-3508'
      },
      {
        id: 1,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Cooper',
        LastName: 'Odom',
        Street: 'Shale Street',
        Zipcode: '5286',
        City: 'Joes',
        Phone: '+1 (812) 535-2368'
      },
      {
        id: 2,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Avila',
        LastName: 'Lancaster',
        Street: 'Kay Court',
        Zipcode: '9294',
        City: 'Welch',
        Phone: '+1 (817) 412-3752'
      },
      {
        id: 3,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Lucile',
        LastName: 'Harding',
        Street: 'Division Place',
        Zipcode: '8572',
        City: 'Celeryville',
        Phone: '+1 (823) 429-3500'
      },
      {
        id: 4,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Deborah',
        LastName: 'Weiss',
        Street: 'Haring Street',
        Zipcode: '2989',
        City: 'Barstow',
        Phone: '+1 (833) 465-3036'
      },
      {
        id: 5,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Kirby',
        LastName: 'Hardin',
        Street: 'Rodney Street',
        Zipcode: '4864',
        City: 'Finzel',
        Phone: '+1 (838) 519-3416'
      },
      {
        id: 6,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Susanna',
        LastName: 'Kidd',
        Street: 'Loring Avenue',
        Zipcode: '6432',
        City: 'Cascades',
        Phone: '+1 (854) 456-2734'
      },
      {
        id: 7,
        checkbox: false,
        image: 'Pikachu.png',
        FullName:'',
        FirstName: 'Carrie',
        LastName: 'Bond',
        Street: 'Bushwick Court',
        Zipcode: '4345',
        City: 'Colton',
        Phone: '+1 (854) 556-2844'
      },
    ];
    for (const item of users) {
      item.FullName=item.FirstName+' '+item.LastName;
    }
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  allCheckboxToggle() {
    if(this.allSelected)
    {
      for (const item of this.dataSource.filteredData) {
        item.checkbox=true;
      }
    }
    else {
      for (const item of this.dataSource.filteredData) {
        item.checkbox=false;
      }
    }
  }

  onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }

  selectUser(id: number) {
    this.selectedId=id;
  }

  deleteUser() {
    let id = this.dataSource.filteredData.findIndex((item)=>item.id==this.selectedId);
    if(id!=undefined)
    {
      this.dataSource.filteredData.splice(id,1);
      this.dataSource.paginator = this.paginator;
    }
  }

  openEditDialog(): void {
    let id = this.dataSource.filteredData.findIndex((item)=>item.id==this.selectedId);
    console.log(id)
    let User:UserData={
      id: this.dataSource.filteredData[id].id,
      checkbox: false,
      image: 'Pikachu.png',
      FullName: '',
      FirstName: this.dataSource.filteredData[id].FirstName,
      LastName: this.dataSource.filteredData[id].LastName,
      Street: this.dataSource.filteredData[id].Street,
      Zipcode: this.dataSource.filteredData[id].Zipcode,
      City: this.dataSource.filteredData[id].City,
      Phone: this.dataSource.filteredData[id].Phone
    };
    const dialogRef = this.dialog.open(TableDialog, {
      width: '500px',
      data: User,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        User.FullName=User.FirstName+' '+User.LastName;
        this.dataSource.filteredData[id]=User;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  openAddDialog(): void {
    let newUser: UserData={
      id: this.dataSource.filteredData.length,
      checkbox: false,
      image: 'Pikachu.png',
      FullName:'',
      FirstName: '',
      LastName: '',
      Street: '',
      Zipcode: '',
      City: '',
      Phone: ''
    };
    const dialogRef = this.dialog.open(TableDialog, {
      width: '250px',
      data: newUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        newUser.FullName=newUser.FirstName+' '+newUser.LastName;
        this.dataSource.filteredData.push(newUser);
        this.dataSource.paginator = this.paginator;
        console.log(newUser.id)
      }
    });
  }
}

@Component({
  selector: 'table-dialog',
  templateUrl: './table.dialog.html'
})
export class TableDialog {
  isChanged=false;
  constructor(
    public dialogRef: MatDialogRef<TableDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
  ) {}

  saveUser(): void {
    this.dialogRef.close(true);
    this.isChanged=true;
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
export interface UserData {
  id:number,
  checkbox: boolean;
  image: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  Street: string;
  Zipcode: string;
  City: string;
  Phone: string;
}

