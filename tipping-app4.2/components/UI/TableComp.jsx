import React from "react";

const TableComp = () => {
  return (
    <section>
      <h2 className="secondary-heading | u-mb-1">Comp Table</h2>
      <table className="table table__striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" />
            <th scope="col">Name</th>

            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>

            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableComp;
