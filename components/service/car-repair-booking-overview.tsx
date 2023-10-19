import React from "react";

const CarRepairBookingOverview: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">
        Car Repair Booking Overview
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          The Car Repair Booking React component is an essential feature of any
          modern automotive service or repair management system. It simplifies
          the process of scheduling appointments for vehicle maintenance or
          repair, providing a user-friendly interface that streamlines the
          entire experience. This component plays a pivotal role in improving
          customer satisfaction and operational efficiency within the automotive
          service industry.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside">
          <li className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              User-Friendly Interface
            </h3>
            <p>
              The component offers a clean and intuitive user interface, making
              it easy for customers to schedule their car repair services.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              Appointment Scheduling
            </h3>
            <p>
              Users can select a preferred date and time for their car repair
              appointment. Real-time availability of service slots ensures
              convenience for both customers and service providers.
            </p>
          </li>
          {/* Include other key features here */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
        <ul className="list-disc list-inside">
          <li className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              Improved User Experience
            </h3>
            <p>
              The component provides a hassle-free experience for customers,
              increasing their likelihood of booking and returning for future
              services.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              Reduced Administrative Work
            </h3>
            <p>
              Service providers benefit from automated appointment scheduling
              and fewer phone inquiries.
            </p>
          </li>
          {/* Include other advantages here */}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p>
          The Car Repair Booking React component is an integral part of
          automotive service management systems. It brings convenience to both
          customers and service providers by offering an efficient and
          user-friendly booking process. By streamlining appointment scheduling
          and enhancing customer satisfaction, this component plays a crucial
          role in the success of modern automotive service businesses.
        </p>
      </section>
    </div>
  );
};

export default CarRepairBookingOverview;
