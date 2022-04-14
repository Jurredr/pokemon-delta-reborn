import { Location } from '../util/location'
import { TileSet } from '../util/tileset'
import { Entity } from './entity'

export class PlayerEntity extends Entity {
  constructor(id: string, location: Location) {
    super(id, location)
    this.tileset = new TileSet('/boy_run.png', 32, 48, 0, -16)

    window.onkeydown = (ev: KeyboardEvent) => {
      if (ev.key === 'w') {
        this.location.position.y -= 1
      } else if (ev.key === 'a') {
        this.location.position.x -= 1
      } else if (ev.key === 's') {
        this.location.position.y += 1
      } else if (ev.key === 'd') {
        this.location.position.x += 1
      }
    }
  }
}
