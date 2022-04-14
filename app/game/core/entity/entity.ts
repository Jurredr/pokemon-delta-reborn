import { Location } from '../util/location'
import { TileSet } from '../util/tileset'
import { Camera } from '../view/camera'

export class Entity {
  id: string
  location: Location
  tileset: TileSet

  constructor(id: string, location: Location) {
    this.id = id
    this.location = location
  }

  draw(context: CanvasRenderingContext2D, camera: Camera) {
    context.drawImage(
      this.tileset.image,
      0,
      0,
      this.tileset.tileWidth,
      this.tileset.tileHeight,
      -camera.x,
      -camera.y,
      this.tileset.tileWidth,
      this.tileset.tileHeight
    )
  }
}
