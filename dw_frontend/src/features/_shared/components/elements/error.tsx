import React from "react";
import CenterDivContainer from "../templates/center-div-container";

interface IErrorElement {
  error: Error & { digest?: string };
  handleReset(): void;
}

const ErrorElement = ({  }: IErrorElement) => {
  return (
    <CenterDivContainer>
      <></>
    </CenterDivContainer>
  );
};

export default ErrorElement;
