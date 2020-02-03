import styled, { css } from "styled-components";
import { Form, Field } from "formik";

export const LogForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IconDiv = styled.div`
  border-radius: 50%;
  width: 40%;
  height: 100px;
  border: 2px solid green;
  position: relative;
`;

export const Input = styled(Field)`
  padding: 4% 1%;
  padding-left: 20%;
  border-radius: 3px;
  background-color: white;
  border-style: solid;
  border: 1px solid rgba(128, 128, 128, 0.527);
  width: 100%;

  ${({ error }) => {
    error &&
      css`
        border: 1px solid red;
        outline: none;
      `;
  }}
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 6%;
  width: 100%;
  padding: 2% 2%;
  border-radius: 4px;
  font-size: 1rem;
  background-color: rgb(26, 104, 26);
  color: white;
`;

export const UserForm = styled.div`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.918);
  height: 525px;
  padding: 5% 9%;
  width: 40%;
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  color: rgb(26, 104, 26);
  margin-bottom: 15%;
`;
export const Title2 = styled.h3`
  width: 40%;
  font-size: 0.75rem;
`;

export const Label = styled.label`
  margin-top: 10%;
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
// export const Check = styled.imput`
//   justify-self: center;
//   align-self: center;
// `;

export const MemberLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
`;
export const Anchor = styled.a`
  width: 20%;
  text-decoration: none;
  font-size: 0.75rem;
  color: green;
`;
