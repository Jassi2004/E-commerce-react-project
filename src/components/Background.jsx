import React from 'react';
import './Background.css';

export default function Background  ({ children }) {
  return (
    <div>
      <div className="rainbow-background" />
      {children}
    </div>
  );
};
