import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './tasks.html';

Template.task.events({
  'click .toggle-checked'() {
    console.log(this._id, '============================================');
    Tasks.update(this._id, {
      $set: { checked: !this.checked },
    });
  },

  'click .delete'() {
    console.log(this._id, ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
    Tasks.remove(this._id)
  }
})