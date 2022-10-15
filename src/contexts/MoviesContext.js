import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../services/api";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [UrlCurrentPage, setUrlCurrentPage] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const UrlParamPage = UrlCurrentPage.get("page");

  if (UrlParamPage && UrlParamPage != currentPage) {
    setCurrentPage(Number(UrlParamPage));
  }

  useEffect(() => {
    const getPopularMovies = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/popular", {
          params: {
            page: currentPage,
          },
        });
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPopularMovies();
  }, [currentPage]);

  return (
    <MoviesContext.Provider
      value={{
        popularMovies,
        currentPage,
        setCurrentPage,
        setUrlCurrentPage,
        isLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
