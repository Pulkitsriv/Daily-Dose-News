import React, { useState } from "react";

const Footer=()=>  {
       const[submit,setSubmit]=useState(false);
     const [form,setForm]=useState({});
     const[data,setData]=useState({});
        const handleForm=(e)=>{
          
          setForm({
            ...form,
            [e.target.name]:e.target.value
          })
        }
       const handleSubmit= async (e)=>{
          e.preventDefault();
        const response = await fetch('http://localhost:8080/contact',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
              'content-Type':'application/json'
            }
          })
          const data = await response.json();

          setData(data);
          setSubmit(true);
       }
    return (
      <div >
        <div className="card text-center bg-dark text-muted">
          <div className="card-header " style={{fontWeight:"bold"}}>Contacts</div>
          <form  onSubmit={handleSubmit} >
          
            <div className="container text-center">
            <div className="row align-items-center">
          <div className=" col-md-3 offset-md-1">
           <input type="text" onChange={handleForm}className="form-control" name ="username" placeholder="Enter your Name"/>
            
            </div>
             <div className="col-md-3 offset-md-1">
             <input type="email" onChange={handleForm} className="form-control" name="email" placeholder="Enter your E-mail" />
            
             </div>
             <button className="btn btn-sm btn-success col-md-1 offset-md-1"  type="submit">Submit</button>
             </div>
             </div>
             
             </form>
              {submit&&<div>Hello {data.username},We will contact you soon!</div>}
          <div className="card-body">
            <h4 className="card-title">Daily-Dose News</h4>
            <p className="card-text">Latest News</p>
          </div>
          <div className="card-footer text-muted">
            Developed By: 
            <a
              href={"https://github.com/Pulkitsriv"}
              className="link-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >Pulkit Srivastava
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Footer;
