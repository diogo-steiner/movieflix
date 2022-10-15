import styled from "styled-components";

export const StyledCard = styled.li`
  width: 220px;
  transition-duration: 0.4s;

  &:hover {
    transform: scale(1.01);
  }

  .poster__container img {
    width: 100%;
  }

  .info__container {
    padding: 10px 0;
    color: var(--text-color);

    p {
      font-size: var(--sz-text-1);
      line-height: 1.3;
      font-weight: var(--font-weg-2);
    }
  }

  .rating__container {
    margin-top: 8px;
    display: flex;
    align-items: center;

    img {
      width: 16px;
      margin-right: 6px;
    }

    span {
      font-size: var(--sz-text-2);
      font-weight: var(--font-weg-3);
    }
  }
`;
