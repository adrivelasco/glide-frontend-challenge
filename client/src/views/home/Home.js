/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { getEmployeesByManager } from '../../services';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [

      ]
    }
  }

  componentDidMount() {
    getEmployeesByManager(0)
  }

  render() {
    return (
      <div>
        hola
      </div>
    )
  }
}

export default Home;