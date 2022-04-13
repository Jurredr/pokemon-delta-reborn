import { BlitzPage, useRouter } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useEffect } from 'react'

const Home: BlitzPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/game')
  }, [router])
  return <div></div>
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
