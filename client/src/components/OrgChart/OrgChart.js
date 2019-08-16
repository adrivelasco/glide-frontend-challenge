/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { func, string } from 'prop-types';
import cs from 'classnames';

import Icon from '../Icon';
import flatten from '../../utils/flatten';
import './OrgChart.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      org: [],
      requestedManagerIds: []
    };
  }

  componentDidMount() {
    this.getFirstEmployees();
  }

  /**
   * Get first and second level of the organization tree
   */
  async getFirstEmployees() {
    const { getEmployeesByManager } = this.props;
    const firstLevel = 0;
    const employeesFirstLevel = await getEmployeesByManager(firstLevel);
    const requestedManagerIds = [];

    try {
      Promise.all(employeesFirstLevel.map(employee => {
        requestedManagerIds.push(employee.id);
        return getEmployeesByManager(employee.id);
      }))
      .then(employees => {
        const org = this.modelOrg([
          ...employeesFirstLevel,
          ...flatten(employees)
        ]);

        this.setState({
          org,
          requestedManagerIds
        });
      })
    } catch(err) {
      console.log(err);
    }
  }

  /**
   * Show and hide children
   */
  handleClickToggleChildren = employeeId => () => {
    this.setState(prevState => ({
      org: prevState.org.map(employee => {
        if(employee.id === employeeId) {
          return {
            ...employee,
            toggled: !employee.toggled
          }
        }
        return employee;
      })
    }));
  }

  /**
   * Load children using the ID of the employee
   */
  handleClickToLoadChildren = employeeId => async() => {
    this.setState(prevState => ({
      requestedManagerIds: [ ...prevState.requestedManagerIds, employeeId],
      org: prevState.org.map(employee => {
        if(employeeId === employee.id) {
          return {
            ...employee,
            loading: true
          }
        }
        return employee;
      })
    }));

    const employees = await this.props.getEmployeesByManager(employeeId);

    this.setState(prevState => {
      return {
        org: this.modelOrg([
          ...prevState.org,
          ...employees
        ])
      };
    });
  }

  /**
   * Model organization tree adding to each employee object two new properties
   * @param {array} orgTree - organization tree
   */
  modelOrg(orgTree) {
    return orgTree.map(employee => ({
      ...employee,
      toggled: !!employee.toggled,
      loading: false
    }));
  }

  /**
   * Return children of employee by id
   * @param {number} employeeId
   */
  childrenOfEmployee(employeeId) {
    return this.state.org.filter(employee => employee.manager === employeeId)
  }

  /**
   * Check if employee has children
   * @param {number} employeeId
   */
  hasChildren(employeeId) {
    return this.state.org.find(employee => employee.manager === employeeId);
  }

  renderEmployeeItem(employee) {
    if(this.renderedItems.includes(employee.id))
      return null

    this.renderedItems.push(employee.id);

    const hasChildren = this.hasChildren(employee.id);
    const childrenAlreadyRequested = this.state.requestedManagerIds.includes(employee.id);

    return (
      <div key={employee.id} className="org-employee">
        <div
          role='button'
          className={cs({
            'org-employee-box': true,
            'active': childrenAlreadyRequested,
            'loading': employee.loading
          })}
          onClick={!childrenAlreadyRequested
            ? this.handleClickToLoadChildren(employee.id)
            : hasChildren && this.handleClickToggleChildren(employee.id)
          }
        >
          <span className="name primary-color">
            <strong>{employee.first} {employee.last}</strong>
          </span>
          <span>DP: <strong>{employee.department || '-'}</strong></span>
          <span>O: <strong>{employee.office || '-'}</strong></span>
          {employee.manager !== 0 && (
            <div className="org-employee-box-arrow">
              <Icon name="arrow-down-angle" />
            </div>
          )}
        </div>
        {hasChildren && (
          <div
            className={cs({
              'org-employee-children': true,
              'toggled': employee.toggled
            })}>
            {this.childrenOfEmployee(employee.id)
              .map(child => this.renderEmployeeItem(child))}
          </div>
        )}
      </div>
    )
  }

  render() {
    const { title } = this.props;
    const { org } = this.state

    this.renderedItems = [];

    return (
      <div className="org">
        <h1 className="org-title">{title}</h1>
        {org && org.map(employee => {
          return this.renderEmployeeItem(employee)
        })}
      </div>
    )
  }
}

Home.propTypes = {
  title: string.isRequired,
  getEmployeesByManager: func.isRequired
};

export default Home;