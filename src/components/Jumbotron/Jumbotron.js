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
                  <h2 className="hero__title">Contrate freelancers especialistas para qualquer trabalho, on-line.</h2>
                  <p className="hero__description">
                    Milhões de pequenos negócios usam o Freelancer.com para tornar suas ideias realidade.
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
