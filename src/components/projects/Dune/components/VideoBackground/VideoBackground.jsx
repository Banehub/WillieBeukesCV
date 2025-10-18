import './VideoBackground.css'
import Background from '../../assets/Background.mp4'

function VideoBackground() {
  return (
    <>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </>
  )
}

export default VideoBackground

