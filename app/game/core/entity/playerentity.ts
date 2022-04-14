import { Location } from '../util/location'
import { TileSet } from '../util/tileset'
import { Entity } from './entity'

export class PlayerEntity extends Entity {
  constructor(id: string, location: Location) {
    super(id, location)
    this.tileset = new TileSet('/boy_run.png', 32, 48)
  }
}
