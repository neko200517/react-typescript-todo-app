import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button';
// import './CourseInput.css';

type FormControlProps = {
  invalid: boolean;
};

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props: FormControlProps) => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid
      ${(props: FormControlProps) => (props.invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${(props: FormControlProps) =>
      props.invalid ? '#ffd7d7' : 'transparent'};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props: { onRegist: Function }) => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const changeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValid(event.target.value.trim().length > 0);
    setText(event.target.value);
  };

  const addGoalHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onRegist(text);

    setText('');
  };

  return (
    <form onSubmit={addGoalHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type='text' value={text} onChange={changeTextHandler} />
        <Button type='submit'>Add Goal</Button>
      </FormControl>
    </form>
  );
};

export default CourseInput;
