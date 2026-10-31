// BMG chapter on the shared book engine
import { startBook } from '../engine/book.js';
import { buildWorld } from './world.js';
import { PAGES } from './pages.js';
import * as M from './model.js';

startBook({
  no: 1,
  PAGES,
  PLATES: {},
  clock0: 0,
  buildWorld(E) {
    const W = buildWorld(E);
    return { update: (s, look) => W.update(s.t, look), labels: [] };
  },
  state: (clock) => ({ t: clock * M.SLOW, step: M.stepAt(clock) }),
  readout(s) {
    return `step: ${s.step}   t ${s.t.toFixed(1)} s`;
  },
});
