import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
	color: ${props => props.color};
`;

const Title = props => {
	return (
		<StyledTitle {...props} />

		/* <StyledTitle color={color}>
        {children}
    </StyledTitle> */
	);
};

export default Title;
