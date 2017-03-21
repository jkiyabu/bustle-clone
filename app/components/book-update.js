import Ember from 'ember';

export default Ember.Component.extend({
  updateBookForm: false,
  actions: {
    updateBookForm() {
      this.set('updateBookForm', true);
    },
    update(book) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        description: this.get('description'),
        story: this.get('story')
      };
      this.set('updateBookForm', false);
      this.sendAction('update', book, params);
    }
  }
});
