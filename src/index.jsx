import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Player from './components/Player/Player';
import './index.scss';
import Topbar from './components/Topbar/Topbar';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Sidebar />
      <Topbar />
      <Home />
      <Player />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
