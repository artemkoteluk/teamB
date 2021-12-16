import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {KeyValue} from "@angular/common";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserInterface} from "./userdatainterface";
import {tabledata} from "./tabledata"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['checkbox', 'image', 'FullName', 'FirstName', 'LastName', 'Street', 'Zipcode', 'City', 'Phone', 'actions'];
  public isDisplayed = {
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
  public dataSource: MatTableDataSource<UserInterface>;

  public allSelected: boolean = false;
  public selectedId: number = 0;


  constructor(public dialog: MatDialog) {
    const users: UserInterface[] = tabledata;
    for (const item of users) {
      item.FullName = item.FirstName + ' ' + item.LastName;
    }
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public allCheckboxToggle(): void {
    if (this.allSelected) {
      for (const item of this.dataSource.filteredData) {
        item.checkbox = true;
      }
    } else {
      for (const item of this.dataSource.filteredData) {
        item.checkbox = false;
      }
    }
  }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }

  public selectUser(id: number): void {
    this.selectedId = id;
  }

  public deleteUser(): void {
    let id = this.dataSource.filteredData.findIndex((item) => item.id == this.selectedId);
    if (id != undefined) {
      this.dataSource.filteredData.splice(id, 1);
      this.dataSource.paginator = this.paginator;
    }
  }

  public openEditDialog(): void {
    let id = this.dataSource.filteredData.findIndex((item) => item.id == this.selectedId);
    console.log(id)
    let User: UserInterface = {
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
    const dialogRef: MatDialogRef<TableDialog, any> = this.dialog.open(TableDialog, {
      width: '500px',
      data: User,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        User.FullName = User.FirstName + ' ' + User.LastName;
        this.dataSource.filteredData[id] = User;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  public openAddDialog(): void {
    let newUser: UserInterface = {
      id: this.dataSource.filteredData.length,
      checkbox: false,
      image: 'Pikachu.png',
      FullName: '',
      FirstName: '',
      LastName: '',
      Street: '',
      Zipcode: '',
      City: '',
      Phone: ''
    };
    const dialogRef: MatDialogRef<TableDialog, any> = this.dialog.open(TableDialog, {
      width: '500px',
      data: newUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        newUser.FullName = newUser.FirstName + ' ' + newUser.LastName;
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
  isChanged = false;

  constructor(
    public dialogRef: MatDialogRef<TableDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserInterface,
  ) {
  }

  saveUser(): void {
    this.dialogRef.close(true);
    this.isChanged = true;
  }
}

//
// export interface DialogData {
//   animal: string;
//   name: string;
// }


