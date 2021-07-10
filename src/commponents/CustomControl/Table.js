/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';

import  { TableProps, TableDefaultProps } from './types';

export default class TableSimple extends Component {

   propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.string.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    arrayOption: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string),
    ),
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    subTitle: '',
    arrayOption: [''],
    className: 'react-pagination-table',
  };

  render() {
    const {
      headers,
      className,
      title,
      subTitle,
      arrayOption,
      columns,
      data,
    } = TableProps;
    const Table= Body({ arrayOption, columns, data });
    
    return (
      <div className={ className }>
        <table className={ `${className}__table` }>
          <Header headers={ headers } className={ className } />
          <tbody>
            { Table }
          </tbody>
        </table>
      </div>
    );
  }
}
