/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import  { HeaderProps } from './types';

const Header = (HeaderProps) => {
  if (Array.isArray(HeaderProps.headers) && HeaderProps.headers.length > 0) {
    return (
      <thead className={ `${HeaderProps.className}__header` }>
        <tr>
          {
            HeaderProps.headers.map(header =>
              <th key={ `Header-${header}` }>{ header }</th>,
            )
          }
        </tr>
      </thead>
    );
  }
  return null;
};

Header.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

export default Header;
