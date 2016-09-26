import { run, createComponent } from 'tinier'
import { render } from 'tinier-dom'

import * as d3 from 'd3'

import { Board } from './Board'

d3.json('data/points.json', (error, points) => {
  if (error) {
    throw new Error(error)
  }
  const { width, height } = points.reduce((accum, val) => {
    return {
      width: val.x > accum.width ? val.x : accum.width,
      height: val.y > accum.height ? val.y : accum.height,
    }
  }, { width: 0, height: 0 })
  run(Board, document.body, {
    initialState: Board.init(points, width, height, 15),
    verbose: false,
  })
})
