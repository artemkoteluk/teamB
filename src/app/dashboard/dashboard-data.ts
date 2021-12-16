import {SingleDataInterface} from "./single-data-interface";
import {MultiDataInterface} from "./multi-data-inteface";
import {RecentSalesInterface} from "./recent-sales-inteface";

export let single: SingleDataInterface[] = [
  {
    "name": "1/11",
    "value": 234
  },
  {
    "name": "2/11",
    "value": 123
  },
  {
    "name": "3/11",
    "value": 345
  },
  {
    "name": "4/11",
    "value": 23
  },
  {
    "name": "5/11",
    "value": 245
  },
  {
    "name": "6/11",
    "value": 12
  },
  {
    "name": "7/11",
    "value": 234
  },
  {
    "name": "8/11",
    "value": 44
  },
  {
    "name": "9/11",
    "value": 87
  },
  {
    "name": "10/11",
    "value": 100
  },
  {
    "name": "11/11",
    "value": 146
  },
  {
    "name": "12/11",
    "value": 25
  },
  {
    "name": "13/11",
    "value": 68
  },
  {
    "name": "14/11",
    "value": 98
  },
  {
    "name": "15/11",
    "value": 74
  },
  {
    "name": "16/11",
    "value": 155
  },
  {
    "name": "17/11",
    "value": 221
  },
  {
    "name": "18/11",
    "value": 111
  },
  {
    "name": "19/11",
    "value": 87
  },
  {
    "name": "20/11",
    "value": 98
  },
  {
    "name": "21/11",
    "value": 48
  },
  {
    "name": "22/11",
    "value": 56
  },
  {
    "name": "23/11",
    "value": 34
  },
  {
    "name": "24/11",
    "value": 150
  },
  {
    "name": "25/11",
    "value": 189
  },

  {
    "name": "26/11",
    "value": 94
  },
  {
    "name": "27/11",
    "value": 93
  },
  {
    "name": "28/11",
    "value": 129
  },
  {
    "name": "29/11",
    "value": 165
  },
  {
    "name": "30/11",
    "value": 203
  }

];
export let multi: MultiDataInterface[] = [
  {
    "name": "Tonga",
    "series": [
      {
        "name": "1/11",
        "value": 234
      },
      {
        "name": "2/11",
        "value": 123
      },
      {
        "name": "3/11",
        "value": 345
      },
      {
        "name": "4/11",
        "value": 23
      },
      {
        "name": "5/11",
        "value": 245
      },
      {
        "name": "6/11",
        "value": 12
      },
      {
        "name": "7/11",
        "value": 234
      },
      {
        "name": "8/11",
        "value": 44
      },
      {
        "name": "9/11",
        "value": 87
      },
      {
        "name": "10/11",
        "value": 100
      },
      {
        "name": "11/11",
        "value": 146
      },
      {
        "name": "12/11",
        "value": 25
      },
      {
        "name": "13/11",
        "value": 68
      },
      {
        "name": "14/11",
        "value": 98
      },
      {
        "name": "15/11",
        "value": 74
      },
      {
        "name": "16/11",
        "value": 155
      },
      {
        "name": "17/11",
        "value": 221
      },
      {
        "name": "18/11",
        "value": 111
      },
      {
        "name": "19/11",
        "value": 87
      },
      {
        "name": "20/11",
        "value": 98
      },
      {
        "name": "21/11",
        "value": 48
      },
      {
        "name": "22/11",
        "value": 56
      },
      {
        "name": "23/11",
        "value": 34
      },
      {
        "name": "24/11",
        "value": 150
      },
      {
        "name": "25/11",
        "value": 189
      },

      {
        "name": "26/11",
        "value": 94
      },
      {
        "name": "27/11",
        "value": 93
      },
      {
        "name": "28/11",
        "value": 129
      },
      {
        "name": "29/11",
        "value": 165
      },
      {
        "name": "30/11",
        "value": 203
      }
    ]
  }
];
export let use: MultiDataInterface[] = [{

  "name": "Users",
  "series": [
    {
      "name": "1/11",
      "value": 234
    },
    {
      "name": "2/11",
      "value": 123
    },
    {
      "name": "3/11",
      "value": 345
    },
    {
      "name": "4/11",
      "value": 83
    },
    {
      "name": "5/11",
      "value": 245
    },
    {
      "name": "6/11",
      "value": 93
    },
    {
      "name": "7/11",
      "value": 234
    }
  ],


},
  {

    "name": "Users-Last Week",
    "series": [
      {
        "name": "1/11",
        "value": 134
      },
      {
        "name": "2/11",
        "value": 231
      },
      {
        "name": "3/11",
        "value": 234
      },
      {
        "name": "4/11",
        "value": 54
      },
      {
        "name": "5/11",
        "value": 68
      },
      {
        "name": "6/11",
        "value": 156
      },
      {
        "name": "7/11",
        "value": 303
      }
    ],


  }
];
export let salesByCountry: SingleDataInterface[] = [
  {
    "name": "Germany",
    "value": 1012,
    "extra": {
      "code": "de"
    }
  },
  {
    "name": "USA",
    "value": 1656,
    "extra": {
      "code": "us"
    }
  },
  {
    "name": "France",
    "value": 1132,
    "extra": {
      "code": "fr"
    }
  },
  {
    "name": "Spain",
    "value": 1025,
    "extra": {
      "code": "es"
    }
  },
  {
    "name": "Italy",
    "value": 655,
    "extra": {
      "code": "it"
    }
  },
  {
    "name": "China",
    "value": 453,
    "extra": {
      "code": "ch"
    }
  }
];
export let salesSummary:MultiDataInterface[]=[
  {
    "name": "Revenue",
    "series": [
      {
        "name": "1",
        "value": 6
      },
      {
        "name": "2",
        "value": 4
      },
      {
        "name": "3",
        "value": 8
      },
      {
        "name": "4",
        "value": 3
      },
      {
        "name": "5",
        "value": 10
      },
      {
        "name": "6",
        "value": 8
      },
      {
        "name": "7",
        "value": 4
      }
    ],


  },
  {

    "name": "Expenses",
    "series": [
      {
        "name": "1",
        "value": 6
      },
      {
        "name": "2",
        "value": 4
      },
      {
        "name": "3",
        "value": 8
      },
      {
        "name": "4",
        "value": 3
      },
      {
        "name": "5",
        "value": 10
      },
      {
        "name": "6",
        "value": 8
      },
      {
        "name": "7",
        "value": 4
      }
    ],


  }];
export let  topCategories:SingleDataInterface[]=[{
  "name": "DvDs",
  "value": 19
},
  {
    "name": "Scanners",
    "value": 24
  },
  {
    "name": "Smartphones",
    "value": 33
  },
  {
    "name": "Printers",
    "value": 16
  },
  {
    "name": "Tvs",
    "value": 33
  }
];
export let  recentSales:MultiDataInterface[]=[ {
  "name": "Sales",
  "series": [
    {
      "name": "2",
      "value": 11
    },
    {
      "name": "25",
      "value": 15
    },
    {
      "name": "42",
      "value": 32
    },
    {
      "name": "60",
      "value": 10
    },
    {
      "name": "84",
      "value": 23
    },
    {
      "name": "120",
      "value": 14
    },
    {
      "name": "154",
      "value": 26
    },
    {
      "name": "180",
      "value": 4
    },
    {
      "name": "210",
      "value": 8
    },
    {
      "name": "240",
      "value": 13
    },
    {
      "name": "264",
      "value": 17
    },
    {
      "name": "300",
      "value": 5
    },
    {
      "name": "343",
      "value": 27
    },
    {
      "name": "360",
      "value": 30
    },
    {
      "name": "385",
      "value": 10
    },
    {
      "name": "420",
      "value": 15
    },
    {
      "name": "443",
      "value": 16
    },
    {
      "name": "480",
      "value": 3
    },
    {
      "name": "520",
      "value": 14
    }

  ]
}];
export let recentSalesData:RecentSalesInterface[]=[
  {
    "product": "Apple iPhone 8",
    "price": 899.99,
    "timeAgo":"2 minutes ago"
  },
  {
    "product": "USB-C Cable",
    "price": 8.99	,
    "timeAgo":"6 minutes ago"
  },
  {
    "product": "Apple MacBook Pro",
    "price": 1299.99,
    "timeAgo":"14 minutes ago"
  },
  {
    "product": "Samsung Galaxy S9",
    "price": 799.99,
    "timeAgo":"17 minutes ago"
  },
  {
    "product": "Lightning to USB-C Adapter",
    "price": 16.99,
    "timeAgo":"25 minutes ago"
  },
  {
    "product": "Samsung Galaxy S8 256GB",
    "price": 599.99,
    "timeAgo":"42 minutes ago"
  },
  {
    "product": "Apple iPhone X",
    "price": 1099.99,
    "timeAgo":"an hour ago"
  },
  {
    "product": "Apple iPhone 7 128GB",
    "price": 699.99,
    "timeAgo":"2 hours ago"
  },
  {
    "product": "Apple Mac Pro",
    "price": 999.99,
    "timeAgo":"2 hours ago"
  },
  {
    "product": "Samsung DEX",
    "price": 54.99,
    "timeAgo":"3 hours ago"
  },
];
