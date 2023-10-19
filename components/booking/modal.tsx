import React from "react";
import { Button } from "../ui/button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const BookingModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-70">
      <div className="relative w-full max-w-md p-6 mx-auto my-10 bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 p-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            X
          </Button>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default BookingModal;
