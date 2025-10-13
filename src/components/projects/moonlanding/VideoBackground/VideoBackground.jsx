import './VideoBackground.css'

function VideoBackground() {
  return (
    <>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src="/images/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </>
  )
}

export default VideoBackground

