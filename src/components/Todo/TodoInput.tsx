import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

/** styles */
type Props = {
  invalid: boolean;
};

const View = styled.div(
  (props: Props) => `
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props.invalid ? 'red' : 'black'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props.invalid ? 'red' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${props.invalid ? '#ffd7d7' : 'transparent'};
    margin-bottom: 1rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`
);

/** component */
const TodoInput = (props: { onRegist: Function }) => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const changeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValid(event.target.value.trim().length > 0);
    setText(event.target.value);
  };

  const addHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onRegist(text);

    setText('');
  };

  return (
    <form onSubmit={addHandler}>
      <View invalid={!isValid}>
        <label>Todo</label>
        <input type='text' value={text} onChange={changeTextHandler} />
        <Button type='submit'>Add Todo</Button>
      </View>
    </form>
  );
};

export default TodoInput;
