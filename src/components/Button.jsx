import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0%{
    transform: rotateZ(0)
}
100%{
    transform: rotateZ(360deg)
}
`;

const StyledButton = styled.button`
	border: none;
	padding: 10px 15px;
	cursor: pointer;
	font-size: 18px;
	border-radius: 15px;
	align-self: ${props => props.align || 'stretch'};

	&:hover {
		animation: ${rotateAnimation} 1s infinite linear;
	}

	${props =>
		props.primary &&
		css`
			color: ${props.color || 'white'};
			background-color: ${props => props.backgroundColor || 'white'};
		`};
	${props =>
		props.outlined &&
		css`
			color: ${props.color || 'white'};
			background-color: transparent;
			border: 1px solid ${props => props.color || 'white'};
		`};
`;

const LargeButton = styled(StyledButton)`
	font-size: 32px;
`;

const Button = props => {
	return <LargeButton {...props} />;
	/* return <StyledButton {...props} />; */
};

export default Button;
