import { Link } from "react-router-dom";
import { Card } from "./Card";
import { StyledList } from "./styles";

export const List = ({ movies }) => {
  return (
    <StyledList>
      {movies.map((movie) => {
        const { id, title } = movie;

        const UrlParamTitle = title.toLowerCase().replaceAll(" ", "-");

        return (
          <Link reloadDocument key={id} to={`/movie/${id}/${UrlParamTitle}`}>
            <Card movie={movie} />
          </Link>
        );
      })}
    </StyledList>
  );
};
