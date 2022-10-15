import { Container } from "../../styles/global";
import { StyledDetailsMovieContainer } from "./styles";

export const DetailsMovie = ({ movie }) => {
  let { title, overview, release_date, genres, poster_path, certification } =
    movie;

  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  release_date = release_date.split("-").reverse().join("/");
  genres = genres.map(({ name }) => name).join(", ");

  return (
    <>
      <StyledDetailsMovieContainer>
        <Container className="container">
          <div className="poster__container">
            <img src={poster} alt={title} />
          </div>

          <div className="info__container">
            <div className="title-feats__container">
              <h2>{title}</h2>
              <div className="facts__container">
                <div className="age">
                  <p>{certification}</p>
                </div>
                <div className="release">
                  <p>{release_date}</p>
                </div>
                <div className="genres">
                  <p>{genres}</p>
                </div>
              </div>
            </div>

            <div className="sinopse__container">
              <h3>Sinopse</h3>
              <p>{overview}</p>
            </div>
          </div>
        </Container>
      </StyledDetailsMovieContainer>
    </>
  );
};
