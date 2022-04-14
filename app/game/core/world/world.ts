import { Entity } from '../entity/entity'
import { Map } from './map'

export class World {
  map: Map
  entities: Entity[]

  constructor() {
    this.map = new Map()
    this.entities = []
  }

  spawnEntity(entity: Entity) {
    this.entities.push(entity)
  }

  render(context: CanvasRenderingContext2D) {
    // Render the map
    this.map.render(context)

    // Render the entities
    this.entities.forEach((entity) => entity.render(context))
  }
}
