import React, {useState, useEffect} from "react";
import { withFormik, Form, Field} from "formik";
import axiosWithAuth from "../Utilities-auth/Auth";
import * as yup from "yup";
import styled from "styled-components";

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 20%;
    background-color: whitesmoke;
    border: 2px dashed orange;
`;
const StyledEntry = styled.label`
    color: darkorange;
`;
const StyledResults = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const NewUser = ({ values, errors, touched, status }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [user, status]);

    const Register = () => {
        
    
        axiosWithAuth()
          .post("/auth/register", values )
          .then(res => {
              console.log(res)
            localStorage.setItem("token", res.data.token);
            // this.props.history.push("/protected");
          })
          .catch(err => console.log(err));
      }

    return (
        <div>
            <Form className='FormMASTER'>
                <StyledForm className='Form'>
                    <div>
                        <StyledEntry>Enter Name: <Field type="text" name="name" placeholder="Name" /></StyledEntry>
                        {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Email: <Field type="email" name="email" placeholder="Email" /></StyledEntry>
                        {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Password: <Field type="password" name="password" placeholder="●●●●●●●●" /></StyledEntry>
                        {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Phone Number: <Field type="phone" name="phone" placeholder="(555)-555-555" /></StyledEntry>
                        {touched.phone && errors.phone && (<p className="error">{errors.phone}</p>)}
                    </div>
                    {/* <StyledEntry>Agree to Terms of Services: <Field type="checkbox" name="terms" checked={values.terms} /></StyledEntry>
                    {touched.terms && errors.terms && (<p className="error">{errors.terms}</p>)} */}
                    <button type="submit" onClick={Register}>Submit</button>
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
            username: name || "",
            email: email || "",
            password: password || "",
            phone_number: phone || "",
        };
    },

    validationSchema: yup.object().shape({
        username: yup.string().min(2, "Name must have more than one character.").required("Required field."),
        email: yup.string().email("Email not valid.").required("Required field."),
        password: yup.string().min(6, "Password must have at least 6 characters.").required("Required field."),
        phone_number: yup.string().min( "Please enter your phone number here.").required("Required field."),
    }),

   

})(NewUser)




export default FormikNewUser;