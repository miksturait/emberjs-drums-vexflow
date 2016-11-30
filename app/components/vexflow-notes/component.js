import Ember from 'ember';
import Vex from 'npm:vexflow';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.set('vf', Vex.Flow);
  },
  didInsertElement() {
    this._super(...arguments);

    this.set('renderer', new this.vf.Renderer(this.element, this.vf.Renderer.Backends.SVG));
    this.renderer.resize(500, 500);
    this.set('vfContext', this.renderer.getContext());
    this.vfContext.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  },
  didRender() {
    this._super(...arguments);

    let stave = new this.vf.Stave(10, 40, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(this.vfContext).draw();
  }
});
