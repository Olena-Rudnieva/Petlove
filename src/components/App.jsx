import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home/Home'));
const News = lazy(() => import('../pages/News/News'));
const Notices = lazy(() => import('../pages/Notices/Notices'));
const Friends = lazy(() => import('../pages/Friends/Friends'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Profile = lazy(() => import('../pages/Profile/Profile'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};