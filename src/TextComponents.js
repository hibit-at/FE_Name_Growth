import React from 'react';

const TextComponents = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-dark">
        <tbody>
          <tr>
            {data.map((item, index) => (
              <th key={index}>{item.name}</th>
            ))}
          </tr>
          <tr>
            {data.map((item, index) => (
              <td key={index}>{item.value} %</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextComponents;
