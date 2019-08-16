import React from 'react';

import OrgChart from '../../components/OrgChart';
import { getEmployeesByManager } from '../../services';

const Home = () => {
  return (
    <OrgChart
      title="Organization Chart"
      getEmployeesByManager={getEmployeesByManager}
    />
  )
}

export default Home;