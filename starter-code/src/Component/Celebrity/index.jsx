import React, { Component } from 'react';
import './style.css';

class Celebrity extends Component {
  render() {
    console.log(this.props);
    return (
      <tr>
        <td>
          <img src={this.props.info.pictureUrl} />
        </td>
        <td>{this.props.info.name}</td>
        <td>{this.props.info.popularity}</td>
      </tr>
    );
  }
}

export default Celebrity;
