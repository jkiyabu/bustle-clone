import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,
  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    saveBook() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        description: this.get('description'),
        story: this.get('story'),
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook', params);
    }
  }
});
