import React from "react";
import { Field, Form, Formik } from "formik";
function EmployeeForm(){
    return (
       <div>
         <h1>EmployeeForm</h1>
         <Formik 
            initialValues={{
                firstname:"",
                dob:"",
                place:""
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
         >
            <Form>
                <Field name="fullname" type="text" />
                <br />
                <Field name="dob" type="text" />
                <br />
                <Field name="place" type="text" />
                <br />
                <button>save form</button>
            </Form>
            
         </Formik>

       </div>
    )
}
export default EmployeeForm