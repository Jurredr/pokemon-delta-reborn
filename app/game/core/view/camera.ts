import { Entity } from '../entity/entity'

export class Camera {
  zoom: number
  x: number
  y: number
  follow: Entity | undefined

  constructor() {
    this.zoom = 1.0
    this.x = 0
    this.y = 0
  }
}
