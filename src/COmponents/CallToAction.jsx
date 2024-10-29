import React, { Component } from 'react'

export default class CallToAction extends Component {
  render() {
    return <div>
  
  {/* Start Call to action */}
  <section className="call-action overlay" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="content">
            <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec.</p>
            <div className="button">
              <a href="#" className="btn">Contact Now</a>
              <a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ End Call to action */}
  
</div>

  }
}
