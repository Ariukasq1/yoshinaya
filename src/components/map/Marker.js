import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import RoomIcon from "@mui/icons-material/Room";

class Marker extends React.Component {
  renderContent() {
    const { title, addr, img } = this.props;
    return (
      <div className="branch-info">
        <div className="flex">
          <img src={img} alt={title} />
          <div
            className="branch-descr"
            dangerouslySetInnerHTML={{ __html: addr }}
          />
        </div>
      </div>
    );
  }
  render() {
    const { currentMarkerTitle, key } = this.props;
    return (
      <div>
        <RoomIcon
          className="marker"
          alt={this.props.title}
          onClick={this.props.onClick.bind(this, this.props.title)}
        />
        <div
          className="marker-content"
          style={{
            display: currentMarkerTitle === this.props.title ? "block" : "none",
          }}
        >
          <div className="arrow" />
          <CloseIcon
            className="close"
            onClick={this.props.onClick.bind(this, "")}
          />
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Marker;
