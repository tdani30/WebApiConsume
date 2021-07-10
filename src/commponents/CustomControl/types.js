/* @flow */

/* Body Component */
export const BodyProps = {
    columns: "",
    data: [],
    arrayOption:[],
  }
  
  /* Title Component */
  export const TitlesProps = {
    title:'',
    subTitle: '',
    className: '',
  }
  
  /* Header Component */
  export const HeaderProps = {
    headers: [],
    className: "",
  }
  
  export const TablePaginationProps = {
    title: '',
    subTitle:'',
    data: [],
    columns: '',
    headers: [],
    arrayOption: [],
    nextPageText:"",
    prePageText: "",
    paginationClassName:"",
    className: "",
    perPageItemCount:"",
    partialPageCount: "",
    totalCount: "",
  }


  export const TablePaginationDefaultProps = {
    title:'',
    subTitle: '',
    arrayOption: '',
    perPageItemCount:0,
    partialPageCount: 0,
    totalCount: 0,
    className: '',
    nextPageText: '',
    prePageText: '',
    paginationClassName:'',
  }
  
  export const TablePaginationState = {
    activePage: 0,
    pageCount: 0,
  }


  export const TableProps = {
    title: '',
    subTitle: '',
    data: [],
    columns: '',
    headers: [],
    arrayOption: [],
    className: '',
  }
  
  export const TableDefaultProps = {
    title: '',
    subTitle: '',
    arrayOption: [],
    className: '',
  }
  