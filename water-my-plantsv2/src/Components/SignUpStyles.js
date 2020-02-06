import styled from "styled-components";
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 15%;
  padding: 1%;
  background-color: whitesmoke;
  border: 2px solid rgb(24, 104, 26);
`;
export const Button = styled.button`
  align-self: center;
  margin-top: 4%;
  width: 100%;
  padding: 3% 2%;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  background-color: rgb(26, 104, 26);
  color: white;
`;
export const StyledEntry = styled.label`
  color: black;
  padding: 2%;
`;
export const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;