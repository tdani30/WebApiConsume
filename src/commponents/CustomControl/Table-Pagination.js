
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-pagination-status';
import Header from './Header';
import Body from './Body';

import { TablePaginationProps, TablePaginationDefaultProps, TablePaginationState } from './types';

export default class TablePagination extends Component {

  static defaultProps=TablePaginationDefaultProps;
  state= TablePaginationState;

  static defaultProps = {
    arrayOption: [''],
    perPageItemCount: 0,
    partialPageCount: 5,
    totalCount: 0,
    className: 'react-pagination-table',
    nextPageText: 'Next',
    prePageText: 'Prev',
    paginationClassName: 'pagination-status',
  };


  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pageCount: Math.ceil(props.totalCount / props.perPageItemCount),
    };
  }

  handleChangePage=(status) =>{
    this.setState({
      activePage: status,
    });
  }

  renderPartialTable(defaultTable) {
    const { perPageItemCount } = this.props;
    const { activePage, pageCount } = this.state;
    let start;
    if (pageCount > activePage) {
      start = perPageItemCount * activePage;
    } else {
      start = perPageItemCount * 0;
    }
    return defaultTable.slice(start, start + perPageItemCount);
  }

  renderTable(isPaginationTable){
    const { arrayOption = [], columns, data } = this.props;
    const defaultTable = Body({ arrayOption, columns, data });
    return isPaginationTable
      ? this.renderPartialTable(defaultTable)
      : defaultTable;
  }

  render() {
    const { headers,
            perPageItemCount,
            partialPageCount,
            totalCount,
            className,
            paginationClassName,
            title,
            subTitle,
            nextPageText,
            prePageText } = this.props;
    const { pageCount } = this.state;
    const isPaginationTable = pageCount > 1;
    const Table = this.renderTable(isPaginationTable);

    return (
      <div className={ className }>
       
        <table className={ `${className}__table` }>
          <Header className={ className } headers={ headers } />
          <tbody>
            { Table }
          </tbody>
        </table>
        <div className="clearfix">
          {
            isPaginationTable &&
              <Pagination
                handleChangePage={ this.handleChangePage }
                activePage={ this.state.activePage }
                totalCount={ totalCount }
                partialPageCount={ partialPageCount }
                perPageItemCount={ perPageItemCount }
                className={ paginationClassName }
                nextPageText={ nextPageText }
                prePageText={ prePageText }
              />
           }
        </div>
      </div>
    );
  }
}
