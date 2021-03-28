import React from "react";
import HashLoader from "react-spinners/HashLoader";
import colors from "shared/colors";
import * as Styles from "./styles";

const LoadingScreen: React.FC = () => {
  return (
    <Styles.Container>
      <HashLoader color={colors.primary} />
    </Styles.Container>
  );
};

export default LoadingScreen;
