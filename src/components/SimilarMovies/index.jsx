import { useContext } from "react";
import { StyledSimilarMoviesContainer } from "./styles";
import { List } from "../List";
import { DetailsMovieContext } from "../../contexts/DetailsMovieContext";

export const SimilarMovies = () => {
  const { similarMovies } = useContext(DetailsMovieContext);

  return (
    <StyledSimilarMoviesContainer>
      <h2>Semelhantes</h2>

      <List movies={similarMovies} />
    </StyledSimilarMoviesContainer>
  );
};
