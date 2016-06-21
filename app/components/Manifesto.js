import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Manifesto.css';

class Manifesto extends Component {

  render() {
    const { removeView } = this.props;

    return (
      <div className={styles.manifesto}>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
          <h4>What is Experience for us</h4>
          <p>Experience is the combination of 
          perceptions, emotions, memories, responses 
          and knowledge that result from an interaction, 
          actual or expected, with a product, a system, 
          a service or a brand. It concerns everything 
          that a person feels before (expectation), 
          during (the proper experience) and after 
          (memories) this interaction. 
          We are in the Customer Age. 
          Today people want enriched experiences 
          that improve their lives. 
          Customers reward companies whose products 
          exceed their expectations. 
          Brands that address this shift 
          by building their business around a 
          brand of listening and working 
          with customers become and stay profitable over time.</p>
      </div>
    );
  }
}

export default Manifesto;
