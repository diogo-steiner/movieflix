import styled from "styled-components";

export const StyledBanner = styled.section`
  height: 390px;
  background-image: linear-gradient(
      to right,
      var(--color-primary-90) 100%,
      var(--color-primary-90) 100%
    ),
    url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: var(--sz-title-1);
    color: white;
    font-weight: var(--font-weg-1);
    text-align: center;
    line-height: 1.2;
    width: 590px;
  }
`;
