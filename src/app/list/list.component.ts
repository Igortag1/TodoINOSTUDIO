import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import _ = require('lodash');
console.log('listCtrl');
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../css/trello.css', '../../css/normalize.css', '../../css/foundation.min.css']
})

export class ListComponent {
  list = [
    // {
    //   id: 'list_001',
    //   listName: 'Todo'
    // },
    // {
    //   id: 'list_002',
    //   listName: 'Doing'
    // },
    // {
    //   id: 'list_003',
    //   listName: 'Done'
    // }
  ];
  addlist(listName) {
    this.list.push({
      id: _.uniqueId('list_'),
      listName: listName
    });
    console.log('listName', listName);
  }
}
