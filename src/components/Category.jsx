import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'categoria/Italian'}>
            <FaPizzaSlice/>
            <h4>Italiana</h4>
        </SLink>
        <SLink to={'categoria/American'}>
            <FaHamburger/>
            <h4>Americana</h4>
        </SLink>
        <SLink to={'categoria/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
    </List>
  )
}
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration; none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 0.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057)
    }
`

export default Category
