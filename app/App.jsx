import React, { Component } from 'react';
import Menu from './Components/Menu/Menu';
import MenuToggle from './Components/Menu/MenuToggle';
import Header from './Components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className='site' role='main'>
          <h1>Hello Word</h1>
        </main>
        <MenuToggle />
        <Menu />
      </div>
  );
  }
}
