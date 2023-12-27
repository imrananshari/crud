import React, { useEffect, useState } from 'react'
import style from './createuser.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Users = () => {

 let [empdata,setEmpdata]=useState([])
 useEffect(()=>{
  axios.get('http://localhost:3000/employees')
  .then((res)=>{ console.log(res);
    setEmpdata(res.data)
  })
  .catch(()=>{console.log("eror");})
     },[])

     function deleteemp(x){
      axios.delete(`http://localhost:3000/employees/${x}`)
      .then(()=>console.log('deleted'))
     }
  return (
    <div id={style.myForm}>
    {
      empdata.map((item)=>{
     return(

      <>
      
       <form action="">
       
          <h2>EMPLOYEE{item.id}</h2 >
          <label htmlFor="">NAME</label>
          <input type="text" value={item.empName} />

          <label htmlFor="">SALARY</label>
          <input type="text" value={item.empSalary} />

          <label htmlFor="">COMPANY</label>
          <input type="text" value={item.empCompany} />
          
         <button><Link to={`/edit/${item.id}`}> EDIT</Link></button>
        <button onClick={(()=>{deleteemp(item.id)})}>DELETE</button>
    
        </form>   
      </>
     )
        
      })
    }
 
    </div>
  )
}

export default Users
