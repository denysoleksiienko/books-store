import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../../route/Routes';

export const Layout = () => {
  return (
    <>
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </>
  );
};
