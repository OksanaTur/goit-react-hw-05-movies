import styled from "styled-components";

export const MovieDetailsButton = styled.button`
margin-top: 20px;
margin-left: 20px;
padding: 5px 10px 5px 8px;
display: flex;
align-items: center;
border: none;
border-radius: 5px;
background-color: rgb(223, 223, 223);
color: inherit;
font-size: 18px;
cursor: pointer;

&:hover{
    color: #C6D6C6;
}
`;

export const MovieDetailsWrapper = styled.div`
margin: 15px;
padding: 15px;
display: flex;
margin-top: 20px;
border: 1px solid rgb(164, 155, 155);
width: fit-content;
`;

export const MovieDetailsImage = styled.img`
display: block;
background-color: rgb(223, 223, 223);
width: 300px;
`;

export const Info = styled.div`
display: block;
margin-left: 28px;
`;

export const MovieDetailsTitle = styled.h2`
margin: 0;
margin-top: 5px;
margin-bottom: 10px;
`;

export const Topic = styled.h3`
margin-top: 20px;
`;

export const  MovieDetailsList = styled.ul`
margin: 0;
margin-bottom: 15px;
padding: 0;
display: flex;
gap: 15px;
list-style: none;
color: rgb(56, 54, 54);
`;

export const WrapperLink = styled.div`
padding: 20px;
display: flex;
align-items: center;
gap: 20px;
`;