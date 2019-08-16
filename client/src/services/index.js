/* eslint-disable import/prefer-default-export */
import request from '../utils/request';

const apiBasePath = 'http://localhost:3001/api/employees'

export function getEmployeesByManager(level) {
  return request(`${apiBasePath}`, {
    queryParams: {
      manager: level
    }
  })
}