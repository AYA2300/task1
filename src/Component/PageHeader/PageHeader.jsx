import "./PageHeader.css";
function pageHeader(props) {
  return (
    <div>
    <div className="page-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <span className="breadcrumb"><a href="#">Home</a> {props.title}</span>
       
        <h3>{props.title}</h3>
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}

export default pageHeader


