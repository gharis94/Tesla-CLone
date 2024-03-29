import React from 'react';
import 'styled-components'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section =({title,description,leftBtnText,rightBtnText})=>{
    return(
        <Wrap>
           <Fade bottom>
           <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
           </ItemText>
           </Fade>
           <Button>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
            </ButtonGroup>
            </Fade>
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
    z-index:-1;
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup=styled.div `
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }


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
background:white;
opacity:0.65;
color:black;
`

const DownArrow=styled.img `
    margin-top:20px;
    height:40px;
    animation:animateDown infinite 1.5s;
    overflow-x:hidden;

`
const Button=styled.div `

`