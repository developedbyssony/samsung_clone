import styled from "@emotion/styled";

const Button = styled.button`
    width:148px;
    height: 48px;
    background-color:#2699FB;
    border-radius:4px;
    border: none;
    color: white;

    &:hover {
        background-color: #2678FB;
    }

    .a & {
        background-color:red;
    }
`

export default Button;