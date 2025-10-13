import './LandingPage.css'
import VideoBackground from '../VideoBackground/VideoBackground'
import Hero from '../Hero/Hero'
import ChatWidget from '../ChatWidget/ChatWidget'
import Navbar from '../Navbar/Navbar'

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <VideoBackground />
      <div className="content">
        <Hero />
      </div>
      <ChatWidget />
    </div>
  )
}

export default LandingPage

