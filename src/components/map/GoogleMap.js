import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { getData } from "../../utils";

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentMarkerTitle: "" };
  }

  static propTypes = {
    center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onHoverKeyChange: PropTypes.func, // @controllable generated fn
    greatPlaces: PropTypes.array,
  };

  renderMarker(item) {
    return (
      <Marker
        key={item.id}
        lat={item.acf && item.acf.lat}
        lng={(item.acf && item.acf.lon) || ""}
        addr={item.acf && item.acf.address}
        title={item.acf && item.acf.name}
        img={item.acf && item.acf.image.sizes.medium}
        onClick={this.onClickMarker}
        currentMarkerTitle={this.state.currentMarkerTitle}
      />
    );
  }

  onClickMarker = (currentMarkerTitle) => {
    this.setState({ currentMarkerTitle });
  };

  renderContent() {
    const { items } = this.props;
    console.log(items, "items");
    if (!items || items.length === 0) {
      return null;
    }
    return items.map((item) => this.renderMarker(item));
  }

  render() {
    let center = {
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
        {this.renderContent()}
        {/* <Marker
          title="hi"
          lat={47.89000063039751}
          lng={106.90697601853734}
          img={
            "http://yoshinaya.nmma.co/wp/wp-content/uploads/2021/11/xasleasing.jpg"
          }
          addr="hadsfkjasdh asdf"
          key="1"
          currentMarkerTitle="hi"
          onClick={this.onClickMarker}
          currentMarkerTitle={this.state.currentMarkerTitle}
        /> */}
      </GoogleMapReact>
    );
  }
}

export default GoogleMapComponent;
