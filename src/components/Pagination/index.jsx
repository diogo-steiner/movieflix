import { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { StyledPagination } from "./styles";

export const Pagination = () => {
  const qtButtons = 5;

  const { currentPage, setCurrentPage, setUrlCurrentPage } =
    useContext(MoviesContext);

  const handlePrevPage = () => {
    const page = currentPage - 1;

    if (page > 0) {
      setCurrentPage(page);
      handleUrlParams(page);
    }
  };

  const handleNextPage = () => {
    const page = currentPage + 1;
    setCurrentPage(page);
    handleUrlParams(page);
  };

  const handleClickPage = (e) => {
    const page = Number(e.target.value);
    setCurrentPage(page);
    handleUrlParams(page);
  };

  const handleUrlParams = (page) => {
    setUrlCurrentPage({
      page: page,
    });
  };

  return (
    <StyledPagination>
      <li>
        <button type="button" onClick={handlePrevPage}>
          &lt;
        </button>
      </li>

      {Array.from({ length: qtButtons })
        .map((_, index) => index + (currentPage - 2))
        .map((page) => {
          if (page > 0) {
            return (
              <li key={page}>
                <button
                  className={
                    currentPage == page ? "pagination__current--active" : null
                  }
                  type="button"
                  value={page}
                  onClick={handleClickPage}
                >
                  {page}
                </button>
              </li>
            );
          }
        })}

      <li>
        <button type="button" onClick={handleNextPage}>
          &gt;
        </button>
      </li>
    </StyledPagination>
  );
};
