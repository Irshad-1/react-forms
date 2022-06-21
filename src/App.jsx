import React from "react";
import "./App.css";
import { EmployeeForm } from "./Components/EmployeeForm";
import { EmployeeTable } from "./Components/EmployeeTable";

function App() {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`http://localhost:3001/employee`);
        res = await res.json();
        setUserData(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="App">
      <EmployeeForm setUserData={setUserData} />
      <EmployeeTable userData={userData} />
    </div>
  );
}

export default App;
