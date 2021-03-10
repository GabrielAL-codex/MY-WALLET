import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';

import Layout from './Components/Layout';
import Dark from './Styles/Themes/Dark';
import Light from './Styles/Themes/Light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <Layout />
        </ThemeProvider>
    );
}

export default App;