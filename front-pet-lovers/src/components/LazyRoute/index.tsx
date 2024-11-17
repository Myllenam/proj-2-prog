import  { FC, lazy, Suspense } from 'react';

type LazyRouteProps = {
    loader: () => Promise<{ default: React.ComponentType<any> }>;
  };

const LazyRoute:FC<LazyRouteProps> = ({ loader }) => {
  const Component = lazy(loader);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Component />
    </Suspense>
  );
};

export default LazyRoute;