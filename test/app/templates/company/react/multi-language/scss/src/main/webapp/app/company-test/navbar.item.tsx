import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';

const CompanyTest = props => (
  <NavItem>
    <NavLink tag={Link} to="/company-test" className="d-flex align-items-center">
      <FontAwesomeIcon icon="cube" />
      <span>
        <Translate contentKey="global.menu.company-test">CompanyTest</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export default CompanyTest;
