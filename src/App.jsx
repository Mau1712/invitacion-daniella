
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Intro from './components/intro/intro'
import { TimerSection } from './components/timerSection/timerSection'
import { SwiperContainer } from './components/swiper/swiper'
import Divider from './components/divider/divider'
import Actions from './components/actions/actions'
import Confirmation from './components/confirmation/confirmation'
import Gift from './components/gift/gift'
import Footer from './components/footer/footer'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      // once: true,     // animación solo una vez
      offset: 100     // offset en px desde el trigger point
    })
  }, [])


  return (
    <>
      <Intro />
      <TimerSection />
      <Divider />
      <SwiperContainer />
      <Divider />
      <Actions />
      <Divider />
      <Confirmation />
      <Divider />
      <Gift />
      <Footer />
    </>
  )
}

export default App
