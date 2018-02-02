import {Component} from '@angular/core';
import _= require('lodash');
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../css/trello.css', '../../css/normalize.css', '../../css/foundation.min.css']
})

export class ListComponent {
  list = [
    {
      idList: 'list_001',
      listName: 'Todo #1'
    },
    {
      idList: 'list_002',
      listName: 'Todo #2'
    },
    {
      idList: 'list_003',
      listName: 'Todo #3'
    }
  ];
  cards = [
    {
      id: 'card_001',
      description: '#1',
      list_id: 1
    },
    {
      id: 'card_002',
      description: '#2',
      list_id: 2
    },
    {
      id: 'card_003',
      description: '#3',
      list_id: 3
    }
  ];
  getCards (list) {
    return _.filter(this.cards, {list_id: list.idList});

  }


  addlist(listName) {
    this.list.push({
      idList: _.uniqueId('list_'),
      listName: listName
    });
    console.log('listName:', listName);
  }
  removeList(list1) {
    _.pull(this.list, list1);
  }

  createCard(list, cardDescription) {
    this.cards.push({
      id: _.uniqueId('list_'),
      description: cardDescription,
      list_id: list.idList
    });
  }
}
