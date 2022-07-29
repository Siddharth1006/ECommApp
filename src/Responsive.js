import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        //Media Query inside Styled Components for responsive design in Phone view
        @media only screen and (max-width:500px){
            ${props}
        }
    `;
};