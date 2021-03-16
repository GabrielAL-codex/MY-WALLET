import React, {useMemo} from 'react';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis'
import  { 
    Container, 
    Profile, 
    Welcome, 
    Username }  from './Styles';


const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
            const indice = Math.floor(Math.random() * emojis.length)
            return emojis[indice];
    },[]);
    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Hi, {emoji} </Welcome>
                <Username>Gabriel Almeida</Username>
            </Profile>
        </Container>
       
    );
}

export default MainHeader;