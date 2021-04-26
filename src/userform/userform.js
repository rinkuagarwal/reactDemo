import {useState} from "react";
import axios from "axios";
function Userform(){//component ,controller
    //let state={name:'Ram};
    //model
    const[userform, setUserform]=useState({//useState=hook, predefined function
        name:'Ram',
        mobileNumber:9876786543,
        email:"ram@gmail.com"
    })
    return(//view, jsx
           <div>
             <input value={userform.name} name='name' onChange ={updateState}></input>
             <input placeholder="mobileNumber" value={userform.mobileNumber} name='mobilenumber' onChange={updateState} ></input>
             <input value={userform.email} name='email' onChange ={updateState}></input>
             <button onClick={save}>Save</button>
              </div>
        
    )
    function save(event){
        console.log(event);
        axios.post('http://localhost:8081/user',userform)//fetch
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
       
          
        console.log(userform.name);
        console.log(userform.mobileNumber);
        
        
    }
    function updateState(event){
        //console.log(event);
       
            const current = {...userform,
            [event.target.name]:event.target.value ,
        };
        console.log(current);
        
        setUserform( current);
       
    }
    }
   
    

export default Userform;