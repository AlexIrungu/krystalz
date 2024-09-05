import React from "react";

function MapAsteroids() {
  return (
    <div id="map-asteroids" className="w-full h-screen relative overflow-hidden">
      <iframe 
        className="absolute top-0 left-0 w-full h-full border-0"
        src="https://eyes.nasa.gov/apps/asteroids/"
        title="NASA Asteroids Map"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MapAsteroids;