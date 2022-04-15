import { Direction } from './direction'
import { Position } from './position'

export class Location {
  position: Position
  facing: Direction | undefined
  imgOffsetX: number
  imgOffsetY: number

  constructor(position: Position, facing: Direction | undefined) {
    this.position = position
    this.facing = facing
    this.imgOffsetX = 0
    this.imgOffsetY = 0
  }
}
