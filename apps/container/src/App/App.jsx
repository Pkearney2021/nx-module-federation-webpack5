import React from 'react';

const RemoteHome = React.lazy(() => import('home/Home'));

export const App = () => (
  <div>
    <h2>Container</h2>
    <React.Suspense fallback="Noope">
      <RemoteHome/>
    </React.Suspense>
  </div>
);
