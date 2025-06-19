import { LoadingContainer, LoadingImage, LoadingText } from "./styles";
import loadingImage from "../../assets/img/loading.png";

export function Loading() {
  return (
    <LoadingContainer>
      <LoadingImage src={loadingImage} alt="Loading..." />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
}
