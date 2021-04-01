import React from "react";
import styled, { keyframes } from "styled-components";
import GoogleMapReact from "google-map-react";


const keyBounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-25px);
  }
`;
const exampleMapStyles = [
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#e0efef"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#1e1e20"
          },
          {
              "color": "#c0e8e8"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 0
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "lightness": 0
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#7dcdcd"
          }
      ]
  }
];

const MapStyled = styled.div`
  width: 100%;
  height: 100%;
  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);
    animation: ${keyBounce} 0.5s infinite alternate;
  }
`;

const LocationPin = () => (
  <div className="pin">
    <img
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
      className="pin-icon"
      alt="rewood"
    />
  </div>
);

const MapGoogle = () => {
  const location = {
    lat: 42.37624296577567,
    lng: 21.172083040561684,
    
  };

  return (
    <>
      <MapStyled>
        <GoogleMapReact
        options={{
          styles: exampleMapStyles,
      }}
          bootstrapURLKeys={{ key: `AIzaSyCY7bZOLpbjMIcARwQ8X5WsxmDXsnWZ9nM` }}
          defaultCenter={location}
          defaultZoom={18}
          className="h-100 w-100"
          disableDefaultUI= {true}
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </MapStyled>
    </>
  );
};

export default MapGoogle;