import { useEffect, useRef } from 'react'
import { Game } from '../core/game'

const GameCanvas: React.FC = () => {
  const canvas = useRef(null)
  useEffect(() => {
    const currentCanvas = canvas.current
    if (currentCanvas != null) {
      const game = new Game(currentCanvas, 60)
      game.start()

      return () => game.stop()
    }
  }, [canvas])

  return (
    <canvas
      ref={canvas}
      className="h-full w-full relative"
      style={{ imageRendering: 'pixelated', touchAction: 'manipulation' }}
    ></canvas>
  )
}

export default GameCanvas
