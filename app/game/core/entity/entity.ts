import { Location } from '../util/location'
import { TileSet } from '../util/tileset'

export class Entity {
  id: string
  location: Location
  tileset: TileSet

  constructor(id: string, location: Location) {
    this.id = id
    this.location = location
    this.tileset = new TileSet('/boy_run.png', 128, 192, 32, 48)
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.tileset.image,
      0,
      0,
      this.tileset.tileWidth,
      this.tileset.tileHeight,
      0,
      0,
      this.tileset.tileWidth,
      this.tileset.tileHeight
    )
  }
}
