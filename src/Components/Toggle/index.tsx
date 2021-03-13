import React from 'react';

import { Container,
    ToggleLabel 

} from './style';


const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle