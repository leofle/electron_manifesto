import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Ux Manifesto</h2>
          <Link to="/counter">Counter</Link>
          <Link to="/manifesto"> Manifesto</Link>
        </div>
      </div>
    );
  }
}
