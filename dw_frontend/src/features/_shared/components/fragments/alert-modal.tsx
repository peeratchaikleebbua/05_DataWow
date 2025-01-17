import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../elements/alert-dialog";

interface IAlertModal {
  isOpenModal: boolean;
  closeModal: () => void;
  renderingTrigger: React.ReactNode;
  renderingAction: React.ReactNode;
  title: string;
  content: string;
}

const AlertModal = ({
  renderingTrigger,
  renderingAction,
  title,
  content,
  isOpenModal,
  closeModal,
}: IAlertModal) => {
  return (
    <AlertDialog
      open={isOpenModal}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <AlertDialogTrigger asChild>{renderingTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          {renderingAction}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
