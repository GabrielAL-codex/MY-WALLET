import React from 'react';

import logoImg from '../../assets/logo.svg';

import  { 
    Container, 
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
}  from './Style';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo My Wallet" />
                <Title> My Wallet </Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
       
    );
}

export default Aside;