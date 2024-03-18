
import video from "../../../public/assets/video-frame.jpg"

function VideoFram() {
  return (
    <div className="video-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="video-frame">
          <img src={video} alt=""/>
          <i className="fa fa-play"></i>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default VideoFram