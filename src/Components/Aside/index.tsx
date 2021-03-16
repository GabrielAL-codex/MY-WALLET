import React from 'react';

import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

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
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward />
                    Value Entry
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward />
                    Value output
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp />
                    Exit
                </MenuItemLink>
            </MenuContainer>
        </Container>
       
    );
}

export default Aside;