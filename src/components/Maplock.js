import React from "react";

export default function Maplock() {
  const mapValue =
    "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1765301365280!5m2!1sen!2sin!6m8!1m7!1skoidRkinIIATJawuvvCfxQ!2m2!1d8.4785938704449!2d76.9708059719253!3f277.6054!4f0!5f0.7820865974627469";

  return (
    <div className="container-fluid" >
      <iframe
        src={mapValue}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}
