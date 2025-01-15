import React from "react";
import AuthCardBoard from "../fragments/auth-card/auth-card-board";
import { Label } from "@/features/_shared/components/elements/label";

interface ILoginTemplate {
  renderLoginSection: React.ReactNode;
  renderLoginButton: React.ReactNode;
}

const LoginTemplate = ({
  renderLoginButton,
  renderLoginSection,
}: ILoginTemplate) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 h-screen">
      <div className="order-1 md:order-2">
        <AuthCardBoard />
      </div>
      <div className="flex md:col-span-2 justify-center items-center order-2 md:order-1">
        <div className="flex w-[340px] flex-col gap-5">
          <Label className="text-white font-bold text-2xl">Sign In</Label>
          {renderLoginSection}
          {renderLoginButton}
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
