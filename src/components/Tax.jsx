'use client'
// components/Tax.js

// components/Tax.js

import React, { useState, useEffect } from 'react';

const Tax = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Content hidden on mobile */}
      {!isMobile && <p>This content is hidden on mobile.</p>}

      {/* Content visible on mobile */}
      {isMobile && <p>This content is visible on mobile.</p>}

      {/* Content for desktop */}
      <p>This content is for desktop.</p>
    </div>
  );
};

export default Tax;
