import React, { Component } from "react";
import _startCase from "lodash/startCase";
import Loader from "./Loader";
import { defaultImg } from "../helpers/utils";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    };
    this.pokeImage = new Image();
    this.pokeImage.src = this.props.img ? this.props.img : defaultImg;
  }

  componentDidMount() {
    this.pokeImage.onload = () => {
      this.setState({ imageLoaded: true });
    };
  }

  render() {
    return (
      <div className="m-2 flex flex-col items-center rounded-lg w-32 h-40 bg-yellow-300">
        {!this.state.imageLoaded ? (
          <Loader />
        ) : (
          <div className="flex flex-col items-center">
            <div className="h-5/6">
              <img src={this.pokeImage.src} alt={this.props.name} />
            </div>
            <div className="h-1/6">
              <b>{_startCase(this.props.name)}</b>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Pokemon;
