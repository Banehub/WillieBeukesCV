import Hero from '../components/hero/Hero'
import VideoBackground from '../components/VideoBackground/VideoBackground'
import About from '../components/about/About'
import Story from '../components/story/Story'
import Credits from '../components/credits/Credits'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <div>
      <VideoBackground />
      <Navbar />
      <Hero />
      <About />
      <Story />
      <Credits />
    </div>
  )
}