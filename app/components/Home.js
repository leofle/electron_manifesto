import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';



export default class Home extends Component {

  render() {
    var heartStyle = {
      color: 'red'
    }
    return (
      <div>
        <div className={styles.container}>
          <h2>Ux Manifesto</h2>
          <Link to="/manifesto"> Manifesto</Link>
          </div>
          <p className={styles.paragraph}>Made with <span style={heartStyle} className="fa fa-heart" ></span> by Lio Fleishman all rights reserved to ClickSoftware Inc. 2016</p>
      </div>
    );
  }
}
