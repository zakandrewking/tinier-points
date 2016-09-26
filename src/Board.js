import { createComponent, arrayOf, } from 'tinier'
import { render, h, bind } from 'tinier-dom'

import { Point } from './Point'

export const Board = createComponent({
  displayName: 'Board',

  model: {
    points: arrayOf(Point),
  },

  init: (pointsIn, width, height, radius) => {
    return {
      width,
      height,
      points: pointsIn.map(({ x, y }) => Point.init({ x, y, radius })),
    }
  },

  shouldUpdate: () => false,

  render: ({ state, el }) => {
    const points = state.points.map((p, i) => <g>{ bind([ 'points', i ]) }</g>)
    return render(
      el,
      <p>
        Hi!<br/>
        <svg width={ state.width } height={ state.height }>
            { points }
        </svg>
        Wooorld
      </p>
    )
  },
})
