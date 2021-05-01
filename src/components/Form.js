import React from "react";
import styled from "styled-components";

const Form = ({ label, placeholder, icon, formType }) => {
	return (
		<FormContainer>
			{label ? <FormLabel>{label}</FormLabel> : ""}
			<FormInputContainer>
				{icon ? icon : ""}{" "}
				<FormInput formType={formType} type="text" placeholder={placeholder} />
			</FormInputContainer>
		</FormContainer>
	);
};

const FormContainer = styled.form`
	/* min-width: 300px;
	max-width: 500px;
	width: 100%; */
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-family: var(--font-3);
`;
const FormLabel = styled.label`
	font-size: 12px;
	font-weight: 500;
	color: #d5bebe;
`;

const FormInputContainer = styled.div`
	display: flex;
	padding: 0.7rem 0.5rem;
	align-items: center;
	border-radius: 0.4rem;
	border: 1px solid #d5bebe;
	margin-top: 3px;
	width: 100%;
	/* width: 100%;
	overflow: hidden; */

	svg {
		margin-right: 0.6rem;
		color: #d5bebe;
	}
`;

const FormInput = styled.input`
	font-weight: ${({ formType }) =>
		formType === "normal" ? "bold" : formType === "search" ? "400" : "400"};
	font-family: var(--font-3);
	font-size: ${({ formType }) =>
		formType === "normal"
			? "1.1rem"
			: formType === "search"
			? ".8rem"
			: ".8rem"};
	flex-grow: 1;

	::placeholder {
		color: rgba(0, 0, 0, 0.2);
	}
`;

export default Form;
