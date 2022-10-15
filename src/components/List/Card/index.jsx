import { StyledCard } from "./styles";
import star from "../../../assets/star.svg";

export const Card = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <StyledCard>
      <div className="poster__container">
        <img src={poster} alt="" />
      </div>
      <div className="info__container">
        <p>{title}</p>
        <div className="rating__container">
          <img src={star} alt="" />
          <span>{vote_average.toFixed(1)}/10</span>
        </div>
      </div>
    </StyledCard>
  );
};
