import React, { useEffect, useState } from "react";
import style from "./createuser.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const Edit = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");

  let navigate = useNavigate();

  let obj = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/employees/${obj.idno}`).then((res) => {
      setName(res.data.empName);
      setSalary(res.data.empSalary);
      setCompany(res.data.empCompany);
    });
  }, []);

  let nameData = (e) => {
    setName(e.target.value);
  };

  let salData = (e) => {
    setSalary(e.target.value);
  };  

  let comData = (e) => {
    setCompany(e.target.value);
  };

  let formHandle = (e) => {
    e.preventDefault();
    let payload = {
      empName: name,
      empSalary: salary,
      empCompany: company,
    };
    axios
      .put(`http://localhost:3000/employees/${obj.idno}`, payload)
      .then(() => {
        console.log("data sent");
        setName("");
        setCompany("");
        setSalary("");
      });
    navigate("/users");
  };

  return (
    <div id={style.myForm}>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" value={name} onChange={nameData} />

        <label htmlFor=""> Salary</label>
        <input type="text" value={salary} onChange={salData} />

        <label htmlFor=""> Company</label>
        <input type="text" value={company} onChange={comData} />

        <button onClick={formHandle}>Submit</button>
      </form>
    </div>
  );
};

export default Edit;
