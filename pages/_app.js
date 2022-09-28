import Header from '../components/Layout/Header'
import Main from '../components/Layout/Main'
import Tetris from '../components/Tetris'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
    <Header/>
    <Component {...pageProps} />
    {/* <Tetris/> */}
    {/* <Content/> */}
    </div>
  )
}

export default MyApp
