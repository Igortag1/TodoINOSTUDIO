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
    console.log('listName:', listName);
  }
  removeList(list1) {
    _.pull(this.lists, list1);
  }

  createCard(list) {
    this.cards.push({
      id: _.uniqueId('list_'),
      description: list.Description,
      list_id: list.idList
    });
  }
  isEditing = false;
  EditingCard = null;
  card = null;
  editCard(cards) {
  this.isEditing = true;
  this.EditingCard = _.cloneDeep(cards);
  }
  updateCard(updatingCard) {
   this.card = _.find(this.cards, {id: updatingCard.id});
   this.card.description = updatingCard.description;
   this.isEditing = false;
   this.EditingCard = null;
  }

  deleteCard(cards) {
    return _.pull(this.cards, cards);
  }
}
