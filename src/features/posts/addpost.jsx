import { useFormik } from "formik";
import React from "react";
import { useAddpostMutation } from "../../services/postsApi";
function Addpost(){
  var[addpostfn]=useAddpostMutation()
   var postform=useFormik({
       initialValues:{
        title:"",
        author:""
       },
      onSubmit:(values)=>{
        addpostfn(values).then((res)=>{
          console.log(res)
        }).catch()

        
      }
    })
    return (
        <div>
            <h1>Addpost</h1>
            <form onSubmit={postform.handleSubmit}>
               <input placeholder="title" type="text" {...postform.getFieldProps('title')}/>
            <br />
            <input placeholder="author" type="text" {...postform.getFieldProps('author')}/>
            <br />
            <button>Add Post</button>
            </form>
           
        </div>
    )
}
export default Addpost