import Ember from 'ember';
import Vex from 'npm:vexflow';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('vf', Vex.Flow);
  },
  didInsertElement() {
    this._super(...arguments);

    this.set('vfRenderer', new this.vf.Renderer(this.element, this.vf.Renderer.Backends.SVG));
    this.vfRenderer.resize(500, 500);
    this.set('vfContext', this.vfRenderer.getContext());
    this.vfContext.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    this.set('formatter', new this.vf.Formatter());
  },
  didRender() {
    this._super(...arguments);

    let voice = new this.vf.Voice({num_beats: 4, beat_value: 4});

    let stave = new this.vf.Stave(10, 40, 400);
    stave.addClef("percussion").addTimeSignature("4/4");
    stave.setContext(this.vfContext).draw();

    let notes = this.dataNotes.slice(0,4).map(_note => new this.vf.StaveNote(_note));

    voice.addTickables(notes);
    this.formatter.joinVoices([voice]).format([voice], 400);

    voice.draw(this.vfContext, stave);

    stave = new this.vf.Stave(410, 40, 800);
    stave.setContext(this.vfContext).draw();

    voice = new this.vf.Voice({num_beats: 4, beat_value: 4});
    notes = this.dataNotes.slice(4,5).map(_note => new this.vf.StaveNote(_note));

    voice.addTickables(notes);
    this.formatter.joinVoices([voice]).format([voice], 400);

    voice.draw(this.vfContext, stave);

  }
});
