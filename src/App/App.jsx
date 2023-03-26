import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import LOCATIONS from 'constants/index';

import LoginPage from 'pages/LoginPage/LoginPage';
import Pages404 from 'pages/Pages404/Pages404';

import Layout from 'Layout/Layout';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import RouteWrapper from 'components/RouteWrapper/RouteWrapper';

import './index.css';

const CamerasPage = React.lazy(() => import('pages/CamerasPage/CamerasPage'));
const ContactPage = React.lazy(() => import('pages/ContactPage/ContactPage'));
const HomePage = React.lazy(() => import('pages/HomePage/HomePage'));
const LocationPage = React.lazy(() => import('pages/LocationPage/LocationPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage/RegisterPage'));
const StatisticPage = React.lazy(() => import('pages/StatisticPage/StatisticPage'));
const SettingPage = React.lazy(() => import('pages/SettingPage/SettingPage'));
const WarningPage = React.lazy(() => import('pages/WarningPage/WarningPage'));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path={LOCATIONS.LOGIN} element={<LoginPage />} />

        <Route path={LOCATIONS.HOME} element={<Layout />}>
          <Route index exact="true" element={RouteWrapper(HomePage, 'Trang chủ')} />

          <Route path={LOCATIONS.CAMERAS} exact="true" element={RouteWrapper(CamerasPage, 'Quản lí Camera')} />

          <Route path={LOCATIONS.WARNING} exact="true" element={RouteWrapper(WarningPage, 'Cảnh báo')} />

          <Route path={LOCATIONS.LOCATION} exact="true" element={RouteWrapper(LocationPage, 'Khu vực')} />

          <Route path={LOCATIONS.STATISTIC} exact="true" element={RouteWrapper(StatisticPage, 'Thống kê')} />

          <Route path={LOCATIONS.CONTACT} exact="true" element={RouteWrapper(ContactPage, 'Liên hệ')} />

          <Route path={LOCATIONS.SETTING} exact="true" element={RouteWrapper(SettingPage, 'Cài đặt')} />

          <Route path={LOCATIONS.REGISTER} exact="true" element={RouteWrapper(RegisterPage, 'Đăng kí')} />
        </Route>
        <Route element={<Pages404 />} key="not-found" />
      </Routes>
    </Suspense>
  );
}

export default App;
