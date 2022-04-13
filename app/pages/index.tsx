import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'

const Home: BlitzPage = () => {
  return (
    <div className="bg-black relative h-screen w-screen max-h-screen max-w-screen">
      {/* <Game />
      <ChatUI /> */}
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
