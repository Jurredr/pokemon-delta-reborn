import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import GameCanvas from 'app/game/components/GameCanvas'

const GamePage: BlitzPage = () => {
  return (
    <div className="bg-black relative h-screen w-screen max-h-screen max-w-screen">
      <GameCanvas />
      {/* <div className="absolute z-10 bg-red-500 w-1 h-1 top-1/2 left-1/2" /> */}
    </div>
  )
}

GamePage.suppressFirstRenderFlicker = true
GamePage.getLayout = (page) => <Layout title="Pokémon Delta - Play">{page}</Layout>

export default GamePage
