import { TileSet } from '../util/tileset'

export class Map {
  tileset: TileSet

  render(context: CanvasRenderingContext2D) {
    const image = new Image()
    image.src = '/29.png'
    image.onload = () => {
      context.drawImage(image, 0, 0)
    }
  }
}
