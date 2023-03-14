import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import LOCATIONS from 'constants/index';

const Layout = React.lazy(() => import('Layout'));
const HomePage = React.lazy(() => import('pages/HomePage/HomePage'));
const CamerasPage = React.lazy(() => import('pages/CamerasPage/CamerasPage'));
const WarningPage = React.lazy(() => import('pages/WarningPage/WarningPage'));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path={LOCATIONS.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path={LOCATIONS.CAMERAS}
            element={<CamerasPage />}
          />

          <Route
            path={LOCATIONS.WARNING}
            element={<WarningPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
