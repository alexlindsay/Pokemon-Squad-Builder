import React, {Component} from 'react';

class Pokemon extends Component {

    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <b>{this.props.name}</b>
            </div>
        )
    }
}

export default Pokemon;