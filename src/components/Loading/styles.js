import styled from "styled-components";

export const StyledLoading = styled.div`
  background-color: var(--color-primary-90);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 30px;
    height: 30px;
    border: 5px solid transparent;
    border-top-color: white;
    border-left-color: white;
    border-radius: 50%;
    animation: spin 0.8s infinite ease-in;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
