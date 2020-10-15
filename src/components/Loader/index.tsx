import React, { FC } from 'react';

export const Loader: FC = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      textAlign: 'center',
      fontSize: '80px',
      background: '#fff',
    }}
  >
    Loading...
  </div>
);
