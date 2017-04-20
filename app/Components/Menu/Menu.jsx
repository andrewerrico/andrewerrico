import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='menu-content'>
          <h2 className='menu-title'>Where would you like to go?</h2>
          <nav className='site-navigation' role='navigation'>
            Links
          </nav>
        </div>
      </div>
    );
  }
}
