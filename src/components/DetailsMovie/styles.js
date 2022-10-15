import styled from "styled-components";

export const StyledDetailsMovieContainer = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);

  .container {
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    color: white;
  }

  .poster__container {
    max-width: 360px;
    max-height: 500px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .title-feats__container {
    margin-top: 40px;

    h2 {
      font-size: var(--sz-title-2);
      line-height: 1.3;
    }
  }

  .facts__container {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 26px;

    p {
      font-size: var(--sz-text-1);
      font-weight: var(--font-weg-3);
    }
  }

  .sinopse__container {
    max-width: 500px;
    margin-top: 32px;

    h3 {
      font-size: var(--sz-title-3);
      margin-bottom: 10px;
    }

    p {
      font-size: var(--sz-text-1);
      line-height: 1.4;
    }
  }

  @media screen and (min-width: 848px) {
    height: 520px;

    .container {
      flex-direction: row;
      align-items: flex-start;
    }

    .facts__container {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 16px;
    }
  }
`;
