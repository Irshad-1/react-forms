import React from "react";
import { v4 as uuid } from "uuid";

export const EmployeeForm = ({ setUserData }) => {
  const [data, setData] = React.useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: 0,
    maritalStatus: false,
  });

  const { name, age, address, department, salary, maritalStatus } = data;

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "checkbox") value = checked;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: uuid(),
      name,
      age,
      address,
      department,
      salary,
      maritalStatus,
    };
    try {
      setUserData((prev) => [...prev, payload]);
      console.log(payload);
      let res = await fetch(`http://localhost:3001/employee`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name :{" "}
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Your Name"
          />
        </label>
        <br />
        <label>
          Age :{" "}
          <input
            value={age}
            onChange={handleChange}
            name="age"
            type="number"
            placeholder="Enter Your age"
          />
        </label>
        <br />
        <label>
          Address :{" "}
          <input
            onChange={handleChange}
            value={address}
            name="address"
            type="text"
            placeholder="Enter your address"
          />
        </label>
        <br />
        <label>
          Department :{" "}
          <select onChange={handleChange} value={department} name="department">
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="mech">MECH</option>
            <option value="it">IT</option>
            <option value="ee">EE</option>
          </select>
        </label>
        <br />
        <label>
          Salary :{" "}
          <input
            onChange={handleChange}
            value={salary}
            type="number"
            name="salary"
            placeholder="Enter your salary"
          />
        </label>
        <br />
        <label>
          Married :{" "}
          <input
            onChange={handleChange}
            checked={maritalStatus}
            type="checkbox"
            name="maritalStatus"
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
