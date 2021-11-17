import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
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
    ></GoogleMapReact>
  );
};

MyGoogleMap.PropTypes = {
  center: PropTypes.array, // @controllable
  zoom: PropTypes.number, // @controllable
  hoverKey: PropTypes.string, // @controllable
  clickKey: PropTypes.string, // @controllable
  onCenterChange: PropTypes.func, // @controllable generated fn
  onZoomChange: PropTypes.func, // @controllable generated fn
  onHoverKeyChange: PropTypes.func, // @controllable generated fn
  greatPlaces: PropTypes.array,
};

export default MyGoogleMap;
