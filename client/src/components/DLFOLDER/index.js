/** @format */

import React from "react";
import styled from 'styled-components'

const iframe = styled.iframe`
	width: 100%;
	height: fit-content;
	border: 0;
`;

const Download = () => {
	return (
		<div>
			<iframe src="https://drive.google.com/embeddedfolderview?id=1K1XMlaNitFYjBBh8wbvMsDlpu6SSyiSK#grid"></iframe>
		</div>
	);
};

export default Download;
