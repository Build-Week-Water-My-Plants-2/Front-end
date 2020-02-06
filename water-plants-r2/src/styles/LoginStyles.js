import styled, { css } from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";
export const LogForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const IconDiv = styled.div`
  border-radius: 50%;
  width: 15%;
  height: 100px;
  border: 3px solid darkgreen;
  position: absolute;
  top: -11%;
  background-color: rgba(255, 255, 255);
`;
export const Input = styled.input`
  padding: 4% 1%;
  padding-left: 17%;
  border-radius: 3px;
  background-color: white;
  border-style: solid;
  border: 1px solid rgba(128, 128, 128);
  width: 100%;
  ${({ errors }) => {
    errors &&
      css`
        border: 1px solid red;
        outline: none;
      `;
  }}
`;
export const Button = styled.button`
  align-self: center;
  margin-top: 12%;
  margin-bottom: 3%;
  width: 100%;
  padding: 3% 2%;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  background-color: rgb(26, 104, 26);
  color: white;
  text-decoration: none;
`;
export const UserForm = styled.div`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255);
  height: 465px;
  padding: 5% 5%;
  width: 35%;
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
  box-shadow: 5px 5px 5px 5px lightgray;
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  color: rgb(26, 104, 26);
`;
export const Title2 = styled.h3`
  width: 40%;
  font-size: 0.85rem;
  font-weight: 400;
`;
export const Label = styled.label`
  margin-top: 4%;
  margin-bottom: 2%;
  font-size: 0.9rem;
  color: rgb(9, 46, 9);
`;
export const EmailWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const PasswordWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const MemberLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
export const Anchor = styled(Link)`
  width: 20%;
  text-decoration: none;
  font-size: 0.9rem;
  color: green;
`;