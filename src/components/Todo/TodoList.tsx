import React from 'react';
import styled from 'styled-components';
import ITodo from '../../model/ITodo';
import TodoItem from './TodoItem';

/** styles */
const View = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

/** component */
const TodoList = (props: { items: ITodo[]; onClick: Function }) => {
  return (
    <View>
      {props.items.map((item) => {
        return <TodoItem key={item.id} item={item} onClick={props.onClick} />;
      })}
    </View>
  );
};

export default TodoList;
