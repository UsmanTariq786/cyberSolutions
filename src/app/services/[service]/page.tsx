import React from "react";

interface ServicePageProps {
  params: { service: string };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  const { service } = params;
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Service: {service.charAt(0).toUpperCase() + service.slice(1)}</h1>
      <p>This is the page for the <strong>{service}</strong> service.</p>
    </main>
  );
};

export default ServicePage; 