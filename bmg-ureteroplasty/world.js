// Simple schematic world for BMG ureteroplasty
// Uses paper-style primitives: cylinder for ureter, plane for graft, arrows for tension
export function buildWorld(E) {
  // Placeholder groups — expand with actual three.js meshes in full implementation
  const ureter = { type: 'cylinder', color: '#f5e6d3' };
  const graft = { type: 'plane', color: '#e8d5c4' };
  const vectors = { type: 'arrows', color: '#c0392b' };

  return {
    update(t, look) {
      // Animate based on step
    },
    anchors: {
      ureter: () => [0, 0, 0],
      graft: () => [0.5, 0, 0],
      tension: () => [0, 1, 0],
    },
  };
}
