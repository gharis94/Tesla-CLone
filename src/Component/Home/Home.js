import React from 'react';
import 'styled-components';
import styled from 'styled-components';
import Section from '../Section/Section';


const Home =()=>{
    return(
        <Container>
            <Section title={'Model S'} description={'order online for contactless delivery'} rightBtnText={"order now"} leftBtnText={'Existing Inventory'}/>
        </Container>
    )
}
export default Home;

const Container=styled.div `
    height: 100vh;
   
`