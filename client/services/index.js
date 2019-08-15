/* eslint-disable import/prefer-default-export */
import request from '../utils/request';

const apiBasePath = '/employees'

export function getEmployeesByManager(level) {
  return request(`${apiBasePath}`, {
    queryParams: {
      manager: level
    }
  })
}