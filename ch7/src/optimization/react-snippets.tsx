import React, { Suspense, lazy, useEffect } from 'react';

export function MyComponent({ count }: { count: number }) {
  return <div>Count: {count}</div>;
}

export const MemoizedComponent = React.memo(({ count }: { count: number }) => {
  return <div>Count: {count}</div>;
});

export function LeakyResizeEffect() {
  useEffect(() => {
    window.addEventListener('resize', () => console.log('Resized!'));
  }, []);

  return null;
}

export function SafeResizeEffect() {
  useEffect(() => {
    const handleResize = () => console.log('Resized!');
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}

const Dashboard = lazy(() => import('./react-stubs/Dashboard'));
const Settings = lazy(() => import('./react-stubs/Settings'));

export function AppWithLazyLoading() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Settings />
      </Suspense>
    </div>
  );
}
