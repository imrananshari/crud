import React, {  useState } from 'react'
import style from './createuser.module.css'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  
    let [name,setName]=useState("")
    let [sal,setSal]=useState("")
    let [comp,SetComp]=useState(" ")

    let navigate=useNavigate()

    let nameData=(e)=>{
     
      setName(e.target.value);
    }

    let salData=(e)=>{
       
      setSal(e.target.value);
    }

    let comData=(e)=>{
      
      SetComp(e.target.value);
    }

    let handleform =(e)=>{
      e.preventDefault()

     let payload ={
      empName:name,
      empSalary:sal,
      empCompany:comp
      
     }
     
     axios.post("http://localhost:3000/employees",payload)
      .then(()=>{console.log("data sent")
    // setName('')
    // setSal('')
    // setComp('')
    })
      .catch(()=>{console.log("erororr");})
    
      navigate('/users')

      // console.log(name,sal,comp);
    }
  return (
    <div id={style.myForm}>
        <form action="" >
         
         <label htmlFor="">Name</label>
         <input type="text" value={name} onChange={nameData} />

         <label htmlFor=""> Salary</label>
         <input type="text" value={sal}  onChange={salData}/>

         <label htmlFor=""> Company</label>
         <input type="text" value={comp} onChange={comData} />

          <button  onClick={handleform}>Submit</button>


        </form>

    </div>
  )
}

export default CreateUser