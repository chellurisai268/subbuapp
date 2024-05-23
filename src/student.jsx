import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
function Student(){
   var student=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            password:"",
            age:"",
            username:""
        },
        // validationSchema: Yup.object({
        //     firstname: Yup.string().required("please fill the firstname it is mandatory"),
        //     password: Yup.string().matches( /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"kocham chusuko"),
        //     age: Yup.number().test("Checkage","age is not correct",(x)=>{
        //         if(x>18 && x<=45){
        //             return true
        //         }
        //         else{
        //             return false
        //         }
        //     }),
        //     username:Yup.string().test("uniqusername","user name alredy in user",(un)=>{
        //         var{path,createError} =this;
        //        var p =new Promise((resolve,reject)=>{
        //         axios.get(`https://api.github.come/users/${un}`)
        //         .then((res)=>{
        //         reject(createError({path}))
        //         })
        //         .catch(err=>{
        //             resolve(true)
        //         })
        //        })
               
        //         return p
        //     })   
        //   }),
        onSubmit:(values)=>{
            console.log(values)
    }
        
    })
    return(
        <div>
            <form onSubmit={student.handleSubmit}>
                <input className={student.touched.firstname && student.errors.firstname && 'border border-danger'} type="text" {...student.getFieldProps("firstname")} placeholder="firstname" />

                <div>
                    {student.touched.firstname && student.errors.firstname && <b>*please enter firstname</b>}
                </div>
                
                <input type="text" {...student.getFieldProps("lastname")} placeholder="lastname" />
                <br />
                <input type="text" {...student.getFieldProps("age")} placeholder="age" />
                <br />
                <input type="text" {...student.getFieldProps("password")} placeholder="password"/>
                <br />
                <input type="text" {...student.getFieldProps("username")} placeholder="username"/>
                <br />
                <button>show Data</button>
                <button onClick={()=>{student.resetForm()}}>Reset</button>
                <button onClick={()=>{student.setFieldValue("lastname","sandy")}}>show values</button>
            </form>
            {JSON.stringify(student.errors)}
        </div>
        
    )
}
export default Student