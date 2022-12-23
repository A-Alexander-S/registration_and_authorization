import React from 'react';
import { Outlet } from 'react-router-dom';
import './app.scss';

const App = () => {
  return (
    <div className="App">
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default React.memo(App);