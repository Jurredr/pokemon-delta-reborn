import { Entity } from '../entity/entity'
import { TileSet } from '../util/tileset'
import { Camera } from '../view/camera'
import { Map } from './map'

export class World {
  map: Map
  entities: Entity[]

  constructor() {
    this.map = new Map(new TileSet('/29.png', 16, 16))
    this.entities = []
  }

  spawnEntity(entity: Entity) {
    this.entities.push(entity)
  }

  update(deltaTime: number) {
    this.entities.forEach((entity) => entity.update(deltaTime))
  }

  draw(context: CanvasRenderingContext2D, camera: Camera, deltaTime: number, fps: number) {
    // Draw the map
    this.map.draw(context, camera, deltaTime)

    // Draw the entities
    this.entities.forEach((entity) => entity.draw(context, camera, deltaTime, fps))
  }
}
