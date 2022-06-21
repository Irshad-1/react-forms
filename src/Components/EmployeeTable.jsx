import React from "react";

export const EmployeeTable = ({ userData }) => {
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Id</th>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Age</th>
            <th style={{ border: "1px solid black" }}>Address</th>
            <th style={{ border: "1px solid black" }}>Department</th>
            <th style={{ border: "1px solid black" }}>Salary</th>
            <th style={{ border: "1px solid black" }}>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
              <td>{data.department}</td>
              <td>{data.salary}</td>
              <td>{data.maritalStatus ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
