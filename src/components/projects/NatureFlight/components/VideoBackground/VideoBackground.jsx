import './VideoBackground.css'
import BackgroundVideo from '../../assets/20251013_1043_New Video_simple_compose_01k7ebtcv6etgs0aggy7s15h4f.mp4'

function VideoBackground() {
  return (
    <>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </>
  )
}

export default VideoBackground

