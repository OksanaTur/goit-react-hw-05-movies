import styled from "styled-components";

export const MovieSearchWrapper = styled.form`
margin:20px;
display:flex;
gap:8px;
align-items:center;
`;

export const SearchForm = styled.input`
margin-left: 40px;
font-size: 16px;
padding-left: 8px;
height: 30px;
border-radius: 5px;
border: 1px solid rgb(164, 155, 155);
`;

export const MovieSearchButton = styled.button`
display: flex;
align-items: center;
padding: 8px;
height: 34px;
border: none;
border-radius: 5px;
background-color: rgb(223, 223, 223);
font-size: 16px;
color: rgb(56, 54, 54);
cursor: pointer;

&:hover{
  background-color: rgb(198, 198, 214);
  cursor: pointer;
}
`;

