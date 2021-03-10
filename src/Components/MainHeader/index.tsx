import React from 'react';

import  { 
    Container, 
    Profile, 
    Welcome, 
    Username }  from './Style';


const MainHeader: React.FC = () => {
    return (
        <Container>
            <h1>Toogle</h1>

            <Profile>
                <Welcome>Olá, </Welcome>
                <Username>Gabriel Almeida</Username>
            </Profile>
        </Container>
       
    );
}

export default MainHeader;