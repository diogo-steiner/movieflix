import { useContext } from "react";
import { DetailsMovie } from "../../components/DetailsMovie";
import { Header } from "../../components/header";
import { Loading } from "../../components/Loading";
import { SimilarMovies } from "../../components/SimilarMovies";
import { DetailsMovieContext } from "../../contexts/DetailsMovieContext";

import { Container } from "../../styles/global";

export const MoviePage = () => {
  const { movie } = useContext(DetailsMovieContext);
  const { isLoading } = useContext(DetailsMovieContext);

  return (
    <>
      {isLoading && <Loading />}

      <Container>
        <Header />
      </Container>
      {movie && <DetailsMovie movie={movie} />}
      <Container>
        <SimilarMovies />
      </Container>
    </>
  );
};
