import deal1 from "../../../public/assets/deal-01.jpg";

function BestDeal() {
  return (


<div className="section best-deal">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="section-heading">
          <h6>| Best Deal</h6>
          <h2>Find Your Best Deal Right Now!</h2>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="tabs-content">
          <div className="row">
            <div className="nav-wrapper ">
              <ul className="nav nav-tabs" >
                <li className="nav-item">
                  <button className="nav-link active" type="button" >Appartment</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" type="button">Villa House</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" type="button">Penthouse</button>
                </li>
              </ul>
            </div>              
            <div className="tab-content">
              <div className="tab-pane fade show active" >
                <div className="row">
                  <div className="col-lg-3">
                    <div className="info-table">
                      <ul>
                        <li>Total Flat Space <span>185 m2</span></li>
                        <li>Floor number <span>26th</span></li>
                        <li>Number of rooms <span>4</span></li>
                        <li>Parking Available <span>Yes</span></li>
                        <li>Payment Process <span>Bank</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src={deal1} alt=""/>
                  </div>
                  <div className="col-lg-3">
                    <h4>Extra Info About Property</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. 
                    <br/><br/>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                    <div className="icon-button">
                      <a href="property-details.html"><i className="fa fa-calendar"></i> Schedule a visit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="info-table">
                      <ul>
                        <li>Total Flat Space <span>250 m2</span></li>
                        <li>Floor number <span>26th</span></li>
                        <li>Number of rooms <span>5</span></li>
                        <li>Parking Available <span>Yes</span></li>
                        <li>Payment Process <span>Bank</span></li>
                      </ul>
                    </div>
                  </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                
  )
}

export default BestDeal