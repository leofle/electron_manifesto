import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Other.css';

class Other extends Component {

  render() {
    const { removeView } = this.props;

    return (
      <div className={styles.other}>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
          <h4>Other page</h4>
      </div>
    );
  }
}

export default Other;
