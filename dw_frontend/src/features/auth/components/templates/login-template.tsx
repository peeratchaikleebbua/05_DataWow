import CenterDivContainer from "@/features/_shared/components/templates/center-div-container";
import React from "react";

interface ILoginTemplate {
  renderLoginSection: React.ReactNode;
  renderLoginButton: React.ReactNode;
}

const LoginTemplate = ({
  renderLoginButton,
  renderLoginSection,
}: ILoginTemplate) => {
  return (
    <CenterDivContainer>
      {renderLoginSection}
      {renderLoginButton}
    </CenterDivContainer>
  );
};

export default LoginTemplate;
