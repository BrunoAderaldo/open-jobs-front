import React, { Component } from 'react';
import heroImage from  '../../images/digital-nomad.svg';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="hero__wrapper">
                <div className="hero__content">
                  <h2 className="hero__title">Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta.</h2>
                  <p className="hero__description">
                    Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
