import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  }
});

Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    if (!text.length) {
      window.alert('Type Something')

      return false;
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    target.text.value = '';
  }
});
