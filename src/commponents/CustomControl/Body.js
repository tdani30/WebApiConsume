/* eslint-disable react/no-array-index-key */

/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import handleArrayOption from './helpers';

import { BodyProps } from './types';

const Body = (BodyProps) => {
  const columnsArr = BodyProps.columns.split('.');
  let optionHandlers={
    handlers: [{}],
    propNames: [{}],
  };

  if (columnsArr.length === 0) {
    throw new Error('Can\'t reslove columns');
  }

  if (Array.isArray(BodyProps.arrayOption) && BodyProps.arrayOption.length > 0) {
    optionHandlers = BodyProps.arrayOption.reduce((prev, opt) => {
      prev.handlers.push(handleArrayOption(...opt));
      prev.propNames.push(opt[0]);
      return prev;
    }, { handlers: [], propNames: [] });
  }

  return BodyProps.data.map((single, i) =>
    <tr key={ `row-${i}` }>
      {
        columnsArr.map((col) => {
          let arrPropVal;

          if (optionHandlers) {
            const { handlers, propNames } = optionHandlers;
            const propNameIndex = propNames.indexOf(col);
            const handleOptFunc = propNameIndex >= 0 && handlers[propNameIndex];
            arrPropVal = typeof handleOptFunc === 'function' && handleOptFunc(single);
          }

          return (
            <td className="rowFont" key={ `col-${col}` }>
              {
                arrPropVal || single[col]
              }
            </td>
          );
        })
      }
    </tr>,
  );
};

Body.propTypes = {
  arrayOption: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string),
  ),
  columns: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Body;
