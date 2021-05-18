import React from 'react';
import 'styled-components'
import styled from 'styled-components';

const Section =()=>{
    return(
        <Wrap>
           <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
           </ItemText>
           <Button>
            <ButtonGroup>
                <LeftButton>
                    Order Now
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
            <DownArrow src='/images/down-arrow.svg'/>
           </Button>
        </Wrap>
    )
}
export default Section;

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

`

const ItemText= styled.div `
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup=styled.div `
    display:flex;
    margin-bottom:30px;


`

const LeftButton=styled.div `
    background-color:rgba(23,2,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;


`

const RightButton=styled(LeftButton) `
`

const DownArrow=styled.img `
    margin-top:20px;
    height:40px;
    animation:animateDown infinite 1.5s;

`
const Button=styled.div `

`