import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { uploadProduct } from '../services/allAPI';

function Dashboard() {
    const [product,setProduct]=useState({
        pid:"",
        name:"",
        category:"",
        image:"",
        price:"",
        decription:""
    })
    console.log(product);

    const handleUpload = async ()=>{
        const {name,price,image} = product
        if(!name || !price || !image)
        {
          alert("Please fill the form completely")
        }
        else{
          const response = await uploadProduct(product)
          console.log(response);
          if(response.status>=200 && response.status<300){
            alert(`${response.data.name} is successfully added`)
    
            // to change the value of uploadVideoStatus
            // setUploadVideoStatus(response.data)
    
            // making the state value none
            setProduct({
              pid:"",
              name:"",
              category:"",
              image:"",
              price:"",
              decription:""
            })
            
          }
          else{
            console.log(response);
            alert("Something went wrong. Try again later")
          }
        }
      }
  return (
    <div>
        <Header/>
        <div className='row d-flex justify-content-center align-items-center '>
            <div className="col-3">
                <Sidebar/>
            </div>
            <div className='col-md-9'>
              <h3 style={{color:"rgb(255, 156, 80)"}}>DashBoard</h3>
                        <div className="d-flex">
                            <form className='p-5 w-75 shadow'>
                            <h2 className='ps-4'>Add Product Details</h2>
                                <div className='p-4'>
                                    <input className='form-control mb-3' onChange={(e)=>setProduct({...product,pid:e.target.value})} type="text" placeholder='Product Id'/>
                                    <input className='form-control mb-3' onChange={(e)=>setProduct({...product,name:e.target.value})} type="text" placeholder='Name'/>
                                    <input className='form-control mb-3' onChange={(e)=>setProduct({...product,category:e.target.value})} type="text" placeholder='Category'/>
                                    <input className='form-control mb-3' type="text" onChange={(e)=>setProduct({...product,image:e.target.value})} placeholder='Image URL' />
                                    <input className='form-control mb-3' onChange={(e)=>setProduct({...product,price:e.target.value})} type='text' placeholder='Product Price'/>
                                    <input className='form-control mb-3' onChange={(e)=>setProduct({...product,description:e.target.value})} type="text" placeholder='Description'/>
                                    
                                    <button className='btn btn-success' type='submit' onClick={handleUpload}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Dashboard