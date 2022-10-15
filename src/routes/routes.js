import { Route, Routes } from "react-router-dom";
import { DetailsMovieProvider } from "../contexts/DetailsMovieContext";
import { HomePage } from "../pages/home";
import { MoviePage } from "../pages/movie";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<DetailsMovieProvider />}>
        <Route path="/movie/:id/:title" element={<MoviePage />} />
      </Route>
    </Routes>
  );
};
