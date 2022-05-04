import React, { useState } from 'react';
import styled from 'styled-components';
import ITodo from './model/ITodo';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';

/** styles */
const View = styled.div`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;

  & .form-wrapper {
    width: 30rem;
    max-width: 90%;
    margin: 3rem auto;
    padding: 2rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

/** component */
const initialData: ITodo[] = [];

const TodoApp = () => {
  const [items, setItems] = useState(initialData);

  const inputHandler = (title: string) => {
    setItems((prevData) => {
      return [
        ...prevData,
        {
          id: Math.random().toString(),
          title: title,
        },
      ];
    });
  };

  const delteHandler = (id: string) => {
    const removedItems = items.filter((item) => item.id !== id);
    setItems(removedItems);
  };

  return (
    <View>
      <View className='form-wrapper'>
        <TodoInput onRegist={inputHandler} />
      </View>
      <TodoList items={items} onClick={delteHandler} />
    </View>
  );
};

export default TodoApp;
