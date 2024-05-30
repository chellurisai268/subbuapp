import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAddpostMutation, useUpdatepostMutation } from "../../services/postsApi";
import { useLocation, useNavigate } from "react-router-dom";
function Editpost(){
   var {state}= useLocation()
    var navigate=useNavigate()
   useEffect(()=>{
    editpostform.setValues(state)
   },[state])
   var [updatePostfn]=useUpdatepostMutation()
   var editpostform=useFormik({
       initialValues:{
        title:"",
        author:"",
        id: ""
       },
      onSubmit:(values)=>{
        updatePostfn(values).then((res)=>{
            navigate('/posts')
        })
      }
    })
    return (
        <div>
            <h1>Editpost</h1>
            <form onSubmit={editpostform.handleSubmit}>
               <input placeholder="title" type="text" {...editpostform.getFieldProps('title')}/>
            <br />
            <input placeholder="author" type="text" {...editpostform.getFieldProps('author')}/>
            <br />
            <button>Update Post</button>
            </form>
           
        </div>
    )
}
export default Editpost