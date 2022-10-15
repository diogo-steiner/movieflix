import { StyledBanner } from "./styles";
import banner from "../../assets/banner.svg";

export const Banner = () => {
  return (
    <StyledBanner img={banner}>
      <h2> Saiba tudo sobre os últimos lançamentos</h2>
    </StyledBanner>
  );
};
