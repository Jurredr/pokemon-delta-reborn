import { Entity } from '../entity/entity'
import { TileSet } from '../util/tileset'
import { Camera } from '../view/camera'
import { Map } from './map'

export class World {
  map: Map
  entities: Entity[]

  constructor() {
    this.map = new Map(new TileSet('/29.png', 16, 16, 0, 0))
    this.entities = []
  }

  spawnEntity(entity: Entity) {
    this.entities.push(entity)
  }

  update() {}

  draw(context: CanvasRenderingContext2D, camera: Camera) {
    // Draw the map
    this.map.draw(context, camera)

    // Draw the entities
    this.entities.forEach((entity) => entity.draw(context, camera))
  }
}
