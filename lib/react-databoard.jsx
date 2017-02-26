import React, { Component } from 'react'

class BoardHead extends Component {
  render() {
    return (
      <thead>
        <td>Hello</td>
        <td>World</td>
      </thead>
    )
  }
}

class DataBoard extends Component {
  render() {
    return (
      <table>
        { this.props.children }
      </table>
    )
  }
}

export { BoardHead };
export { DataBoard };
