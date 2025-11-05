'use client';

import styled from 'styled-components';

export const StyledHeader = styled.header`
    font-family: Impact, sans-serif;
    text-align: center;
    background-color: rgba(255, 225, 0, 1);
    width: 100%;
    padding: calc(0.75rem + 0.5vw);
    color: red;
    
    h1{
      font-size: calc(1.4rem + 0.8vw);
    }

    p{
      font-size: calc(1rem + 0.2vw);
    }
`;

export const StyledNav = styled.nav`
    font-family: Impact, sans-serif;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    background-color: rgba(255, 136, 0, 1);
    border: 3px solid orange;
    justify-content: center;

    a{
      text-decoration: none;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      background-color: rgba(255, 0, 0, 1);
      border: 2px solid yellow;
      color: yellow;
      font-weight: bold;
    }
`;

export const MealDiv = styled.div`
    font-family: Impact, sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

export const MealCard = styled.div`
    margin: 10px;
    padding: 10px;
    border: 2px solid yellow;
    border-radius: 10px;
    text-align: center;
    width: 220px;
    background-color: #ff8000ff;
`;

export const MealPhoto = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

export const StyledP = styled.p`
    text-align: center;
    font-family: Impact, sans-serif;
`;