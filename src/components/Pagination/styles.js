import styled from "styled-components";

export const StyledPagination = styled.ul`
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 16px;

  button {
    font-size: var(--sz-text-2);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--color-primary-10);
    border: none;
    outline: none;
    cursor: pointer;
  }

  .pagination__current--active {
    background-color: var(--color-primary-25);
  }
`;
