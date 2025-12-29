import { useState, useEffect, useRef } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const effectInstanceRef = useRef(null);

  useEffect(() => {
    // Only initialize if not already initialized
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0d1f1a,
          color: 0x25d366
        });
        setVantaEffect(effect);
        effectInstanceRef.current = effect;
      } catch (err) {
        console.error("Failed to init Vanta:", err);
      }
    }

    // Cleanup function
    return () => {
      if (effectInstanceRef.current) {
        effectInstanceRef.current.destroy();
        effectInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  return (
    <div ref={vantaRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;