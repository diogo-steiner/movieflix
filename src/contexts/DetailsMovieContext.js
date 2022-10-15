import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { api } from "../services/api";

export const DetailsMovieContext = createContext();

export const DetailsMovieProvider = () => {
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    handleGetMovie();
    handleGetSimilar();
  }, [id]);

  const handleGetMovie = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(id);
      handleGetCertification(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetSimilar = async () => {
    try {
      const response = await api.get(`${id}/similar`);
      setSimilarMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetCertification = async (response) => {
    setIsLoading(true);
    const data = response.data;
    const { id } = data;

    try {
      const response = await api.get(`${id}/release_dates`);
      const { results } = response.data;

      const hasCertification = results.find((element) => {
        const { iso_3166_1 } = element;
        if (iso_3166_1 == "BR") {
          return true;
        }
      });

      if (hasCertification) {
        let { certification } = hasCertification.release_dates[0];
        if (certification == "L") {
          certification = "Livre";
        } else {
          certification = `${certification} Anos`;
        }
        setMovie({ ...data, certification: certification });
      } else {
        let certification = "Não informado";
        setMovie({ ...data, certification: certification });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DetailsMovieContext.Provider value={{ movie, similarMovies, isLoading }}>
      <Outlet />
    </DetailsMovieContext.Provider>
  );
};
