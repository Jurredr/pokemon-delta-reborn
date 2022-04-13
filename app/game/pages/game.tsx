import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import GameCanvas from 'app/game/components/GameCanvas'

const GamePage: BlitzPage = () => {
  return (
    <div className="bg-black relative h-screen w-screen max-h-screen max-w-screen">
      <GameCanvas />
    </div>
  )
}

GamePage.suppressFirstRenderFlicker = true
GamePage.getLayout = (page) => <Layout title="Game">{page}</Layout>

export default GamePage
