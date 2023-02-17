import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

const HomePage = lazy(()=> import('./pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(()=> import('./pages/MoviesSearchPage/MoviesSearchPage'));
const SingleMoviePage = lazy(()=> import('./pages/SingleMoviePage/SingleMoviePage'));
const SingleMovieCommentsPage = lazy(() => import('./pages/SingleMovieCommentsPage/SingleMovieCommentsPage'));
const MovieCredits = lazy(()=> import('./pages/MovieCredits/MovieCredits'));
const NotFoundPage = lazy(()=> import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes> 
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesSearchPage />} />
                <Route path="/movies/:id" element={<SingleMoviePage />}>
                    <Route path="reviews" element={<SingleMovieCommentsPage />} />
                    <Route path="cast" element={<MovieCredits />} />
                </Route>
                               
                <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    )
};

export default UserRoutes;