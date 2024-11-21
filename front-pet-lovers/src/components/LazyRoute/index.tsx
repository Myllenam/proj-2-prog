import { CircularProgress } from '@mui/material';
import  { FC, lazy, Suspense } from 'react';

type LazyRouteProps = {
    loader: () => Promise<{ default: React.ComponentType<any> }>;
  };

const LazyRoute:FC<LazyRouteProps> = ({ loader }) => {
  const Component = lazy(loader);

  return (
    <Suspense fallback={<div className='w-[100vw] h-[100vh] flex items-center justify-center'><CircularProgress className='text-rosa2'/></div>}>
      <Component />
    </Suspense>
  );
};

export default LazyRoute;