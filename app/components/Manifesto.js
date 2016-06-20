import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Manifesto.css';

class Manifesto extends Component {

  render() {
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <p>ux manifesto view</p>
      </div>
    );
  }
}

export default Manifesto;
