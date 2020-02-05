import React, {useState, useEffect} from "react";
import { withFormik, Form, Field} from "formik";
import axios from "axios";
import * as yup from "yup";
import {StyledForm, Button, StyledEntry, StyledResults,} from './signupstyle'


const NewUser = ({ values, errors, touched, status }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [user, status]);

    return (
        <div>
            <Form className='FormMASTER'>
                <StyledForm className='Form'>
                    <div>
                        <StyledEntry>Enter Name <Field type="text" name="name" placeholder="Name" /></StyledEntry>
                        {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Email <Field type="email" name="email" placeholder="Email" /></StyledEntry>
                        {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Password <Field type="password" name="password" placeholder="●●●●●●●●" /></StyledEntry>
                        {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Phone # <Field type="phone" name="phone" placeholder="(555)-555-555" /></StyledEntry>
                        {touched.phone && errors.phone && (<p className="error">{errors.phone}</p>)}
                    </div>
                    <Button type="submit">Submit</Button>
                </StyledForm>
            </Form>
            {}
            {user.map(person => (
                <div>
                    <StyledResults><ul key={person.id}>
                    <div>Name: {person.name}</div>
                    <div>Email: {person.email}</div>
                    </ul>
                    </StyledResults>
                </div>
            ))}
        </div>

    )
}
const FormikNewUser = withFormik({
    mapPropsToValues({ name, email, password, phone,terms }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            phone: phone || "",
        };
    },

    validationSchema: yup.object().shape({
        name: yup.string().min(2, "Name must have more than one character.").required("Required field."),
        email: yup.string().email("Email not valid.").required("Required field."),
        password: yup.string().min(6, "Password must have at least 6 characters.").required("Required field."),
        phone: yup.string().min( "Please enter your phone number here.").required("Required field."),
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        axios
            .post("https://water-my-plants-2.herokuapp.com/api/auth", values)
            .then(response => {
                setStatus(response.data);
                resetForm();
                console.log(response);
            })
            .catch(error => console.log(error.response));
    }
})(NewUser)




export default FormikNewUser;