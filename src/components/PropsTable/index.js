import React from 'react';
import PropTypes from 'prop-types';
import { propTypesToObject } from '../../utils'
import { parse } from 'react-docgen'

const getRows = propTypes => Object.keys(propTypes).map(prop => {
  const { type, required, defaultValue, description } = propTypes[prop]
  return (
    <tr key={prop}>
      <td>{prop}</td>
      <td>
        {type && type.name}
        {type.value && Array.isArray(type.value) && type.value.map(v => v.value)}
        {type.value && !Array.isArray(type.value) && JSON.stringify(type.value)}
      </td>
      <td>{required.toString()}</td>
      <td>{defaultValue && defaultValue.value}</td>
      <td>{description}</td>
    </tr>
  )
});

const Table = ({ demonstrating, raw }) => {
  const propTypes = parse(raw).props

  if (!propTypes) return null;
  console.log(propTypes)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required?</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {getRows(propTypes)}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  demonstrating: PropTypes.func.isRequired,
  raw: PropTypes.string.isRequired
}

export default Table;
