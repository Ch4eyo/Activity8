import { useState, useEffect, useRef } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';

const VantaBackground = ({ children }) => {
  // Simple static background - no animations
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      zIndex: 0,
      background: '#0d1f1a'  // Static dark green background
    }}>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;