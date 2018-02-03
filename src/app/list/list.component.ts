import {Component} from '@angular/core';
import _= require('lodash');
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../css/trello.css', '../../css/normalize.css', '../../css/foundation.min.css']
})


export class ListComponent {
  lists = [];
  cards = [];
  getCards (list) {
    return _.filter(this.cards, {list_id: list.idList});

  }

  addlist(listName) {
    this.lists.push({
      idList: _.uniqueId('list_'),
      listName: listName
    });
  }

  removeList(list1) {
    _.pull(this.lists, list1);
  }

  createCard(list) {
    this.cards.push({
      id: _.uniqueId('list_'),
      description: list.description,
      list_id: list.idList
    });
  }


  editCard(card) {
    card.editing = true;
  }

  updateCard(card) {
    card.editing = false;
  }

  deleteCard(cards) {
    return _.pull(this.cards, cards);
  }
}
