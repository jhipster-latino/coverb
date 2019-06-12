import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompanyTest = props => (
  <NavItem>
    <NavLink tag={Link} to="/company-test" className="d-flex align-items-center">
      <FontAwesomeIcon icon="cube" />
      <span>
        CompanyTest
      </span>
    </NavLink>
  </NavItem>
);

export default CompanyTest;
