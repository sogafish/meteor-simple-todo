import { Template } from 'meteor/templating';
import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'TEXT1____________________________' },
    { text: 'TEXT2____________________________' },
    { text: 'TEXT3____________________________' },
  ],
});
