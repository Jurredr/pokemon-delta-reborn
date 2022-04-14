import { PlayerEntity } from './entity/playerentity'
import { Direction } from './util/direction'
import { Location } from './util/location'
import { Position } from './util/position'

export class Client {
  player: PlayerEntity

  constructor() {
    this.player = new PlayerEntity('jurre', new Location(new Position(0, 0), Direction.DOWN))
  }
}
