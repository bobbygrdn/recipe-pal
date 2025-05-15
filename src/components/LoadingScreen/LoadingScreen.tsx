import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => (
  <div className="loading-screen">
    <div className="spinner"></div>
    <h2>Loading Recipe Pal...</h2>
  </div>
);

export default LoadingScreen;
