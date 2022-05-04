import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Button = (props: {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: Function;
}) => {
  return (
    <StyledButton
      type={props.type}
      className='button'
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin-top: 1rem;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;