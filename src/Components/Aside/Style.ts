import styled from 'styled-components';

export  const Container = styled.div`
    grid-area: AS;
    
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.color.gray}
`;
    
export const Header = styled.header`
    display: flex;
`;

export const LogImg = styled.img``;

export const Title = styled.h3`
    color: ${props => props.theme.color.white}
`;

export const MenuContainer = styled.nav``;

export const MenuItemLink = styled.a``;
