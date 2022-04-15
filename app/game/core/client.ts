import { PlayerEntity } from './entity/player/playerentity'
import { Direction } from './util/direction'
import { Location } from './util/location'
import { Position } from './util/position'

export class Client {
  player: PlayerEntity

  constructor() {
    const location = new Location(new Position(0, 0), Direction.DOWN)
    location.imgOffsetX = 0
    location.imgOffsetY = -8
    this.player = new PlayerEntity('jurre', location)
  }
}
