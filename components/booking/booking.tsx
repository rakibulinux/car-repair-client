"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import BookingModal from "./modal";
import ModalContent from "./modal-content";

type IBookingProps = {
  id: string;
};

const Booking = ({ id }: IBookingProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="text-center">
        <Button
          variant="default"
          onClick={handleOpenModal}
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          data-hs-overlay="#hs-bg-gray-on-hover-cards"
        >
          Open modal
        </Button>
      </div>

      <BookingModal
        title="Booking"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <ModalContent serviceId={id} />
      </BookingModal>
    </div>
  );
};

export default Booking;
