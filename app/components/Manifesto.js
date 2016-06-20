import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Manifesto.css';

class Manifesto extends Component {

  render() {
    const { removeView } = this.props;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <p onClick={removeView} >ux manifesto view</p>
      </div>
    );
  }
}

export default Manifesto;
