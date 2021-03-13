import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';  

export const Container = styled.div``;

export const ToggleLabel = styled.span``;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme  }) => ({
        onColor: theme.color.info,
        offColor: theme.color.warning
    }))<ReactSwitchProps>`
    `;