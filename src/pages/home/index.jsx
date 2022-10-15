import { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Container } from "../../styles/global";
import { Header } from "../../components/header";
import { Banner } from "../../components/Banner";
import { List } from "../../components/List";
import { Pagination } from "../../components/Pagination";
import { Loading } from "../../components/Loading";

export const HomePage = () => {
  const { popularMovies } = useContext(MoviesContext);
  const { isLoading } = useContext(MoviesContext);

  return (
    <>
      {isLoading && <Loading />}

      <Container>
        <Header />
      </Container>
      <Banner />

      <Container>
        <List movies={popularMovies} />
        <Pagination />
      </Container>
    </>
  );
};
