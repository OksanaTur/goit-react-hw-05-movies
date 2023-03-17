import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './shared/loader/Loader';
import Layout from './modules/Layout/Layout';

const Navbar = lazy(() => import('./modules/Layout/Navbar/Navbar'));
const HomePage = lazy(() => import('./pages/CastPage/HomePage/HomePage'));
const MoviePage = lazy(() => import('./pages/CastPage/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/CastPage/MovieDetailsPage/MovieDetailsPage'));
const CastPage = lazy(() => import('./pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./pages/CastPage/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
              <Route path="movies" element={<MoviePage />} />
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
                </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
       <ToastContainer theme="colored" />
    </>
  );
};
