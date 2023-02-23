import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface BottonContainerProps{
    variant: ButtonVariant ;
}

const buttonColorVariants = {
    primary:  'purple',
    secundary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<BottonContainerProps> `
    width: 100px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    margin: 8px;

    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['gray-500']};


    /* ${props =>{
        return css`
            background-color: ${buttonColorVariants[props.variant]}
        `
    }} */
`