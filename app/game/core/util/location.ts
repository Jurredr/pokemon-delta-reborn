import { Direction } from './direction'
import { Position } from './position'

export class Location {
  position: Position
  facing: Direction | undefined

  constructor(position: Position, facing: Direction | undefined) {
    this.position = position
    this.facing = facing
  }
}
