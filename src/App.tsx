/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Booking from './pages/Booking';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-midnight-ink bg-canvas-white selection:bg-bubblegum-pink selection:text-midnight-ink">
      {currentPath === '#/booking' ? <Booking /> : <Home />}
    </div>
  );
}
