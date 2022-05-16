import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.textarea`
	width: 100%;
	height: 70vh;
	background-color: black;
	font-size: 24px;
	border: none;
	//color: ${({ color }) => color || 'white'};
	color: ${props => props.color || props.theme.colors.primary};
	resize: none;
	&:focus {
		outline: none;
	}
	@media ${props => props.theme.media.phone} {
		border: 1px solid teal;
	}
	@media ${props => props.theme.media.tablet} {
		border: 1px solid darkgoldenrod;
	}
`;

const Console = ({ color, ...props }) => {
	const [lines, setLines] = useState(['C/Users/Dpy3b>']);

	const onKeyDown = e => {
		if (e.keyCode == 13) {
			setLines([...lines, 'C/Users/Dpy3b>']);
		}
	};

	return (
		<Flex>
			<Flex direction='column' margin='0 10px'>
				{lines.map((line, index) => (
					<Line key={index} color={color}>
						{line}
					</Line>
				))}
			</Flex>
			<StyledConsole onKeyDown={onKeyDown} color={color} {...props} />
		</Flex>
	);
};

export default Console;
