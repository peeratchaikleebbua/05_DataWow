import React from "react";
import CenterDivContainer from "../templates/center-div-container";

interface IErrorElement {
  error: Error & { digest?: string };
  handleReset(): void;
}

const ErrorElement = ({ error, handleReset }: IErrorElement) => {
  return (
    <CenterDivContainer>
      <></>
    </CenterDivContainer>
  );
};

export default ErrorElement;
