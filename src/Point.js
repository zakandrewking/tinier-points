import { createComponent } from 'tinier'
import { render, h } from 'tinier-dom'

import * as d3 from 'd3'

export const Point = createComponent({
  displayName: 'Point',

  init: ({ x, y, radius }) => ({ x, y, radius }),

  reducers: {
    changeCoord: ({ state, x, y }) => ({ ...state, x, y }),
  },

  render: ({ state, el, reducers }) => {
    const drag = d3.drag().on('drag', () => {
      reducers.changeCoord({ x: d3.event.x, y: d3.event.y })
    })
    return render(
      el,
      <circle fill='green' cx={ state.x } cy={ state.y } r={ state.radius }
       then={ el => d3.select(el).call(drag) }/>
    )
  },
})
