import React from 'react';

const RemoteHome = React.lazy(() => import('home/Home'));

export const App = () => (
  <div>
    <h2>Container App</h2>
    <React.Suspense fallback="Loading...">
      <RemoteHome />
    </React.Suspense>
  </div>
);
