import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    ['2', 'b', '3', '3', 'e', 'e', 'c', '5', '6']

    return [
      { keys: ["g/5/d0"], duration: "q"},
      { keys: ["g/5/d1"], duration: "q"},
      { keys: ["g/5/d2"], duration: "q"},
      { keys: ["g/5/d3"], duration: "q"},

      { keys: ["g/5/t0"], duration: "w"},
      { keys: ["g/5/t1"], duration: "q"},
      { keys: ["g/5/t2"], duration: "q"},
      { keys: ["g/5/t3"], duration: "q"},

      { keys: ["g/5/x0"], duration: "w"},
      { keys: ["g/5/x1"], duration: "q"},
      { keys: ["g/5/x2"], duration: "q"},
      { keys: ["g/5/x3"], duration: "q"}
    ]
  }
});
