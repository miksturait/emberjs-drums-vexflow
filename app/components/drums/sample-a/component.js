import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'g',
  classNames: ['sample_a'],

  click() {
    $('.animation', this.element).attr('fill', 'red');
  }

});
