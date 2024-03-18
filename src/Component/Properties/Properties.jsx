
import "./Proerties.css"

function Properties(props) {
  return (
    
     
        <div className="col-lg-4 col-md-6">
          <div className="item">
            <a href="property-details.html"><img src={props.img} alt=""/></a>
            <span className="category">{props.category}</span>
            <h6>{props.price}</h6>
            <h4><a href="property-details.html">{props.address}</a></h4>
            <ul>
              <li>Bedrooms: <span>{props.Bedrooms}</span></li>
              <li>Bathrooms: <span>{props.Bathrooms}</span></li>
              <li>Area: <span>{props.Area}</span></li>
              <li>Floor: <span>{props.Floor}</span></li>
              <li>Parking: <span>{props.Parking}</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>

  )
}

export default Properties