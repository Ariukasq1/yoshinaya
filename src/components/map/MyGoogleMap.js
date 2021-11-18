import React from "react";
import propTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
const MyGoogleMap = () => {
  const center = {
    lat: 47.8920382,
    lng: 106.9082375,
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyA9JxzKBkv9-MGOSfmAgEiw0bxmvKUwe-Q",
        language: "en",
        region: "US",
      }}
      center={center}
      zoom={12}
      className="google-map"
      fullscreenControl={false}
      debounced={true}
      yesIWantToUseGoogleMapApiInternals
    >
      <Marker lat={center.lat} lng={center.lng} />
    </GoogleMapReact>
  );
};

MyGoogleMap.propTypes = {
  center: propTypes.array, // @controllable
  zoom: propTypes.number, // @controllable
  hoverKey: propTypes.string, // @controllable
  clickKey: propTypes.string, // @controllable
  onCenterChange: propTypes.func, // @controllable generated fn
  onZoomChange: propTypes.func, // @controllable generated fn
  onHoverKeyChange: propTypes.func, // @controllable generated fn
  greatPlaces: propTypes.array,
};

export default MyGoogleMap;
