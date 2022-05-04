import React from 'react';
import styled from 'styled-components';
import ITodo from '../../model/ITodo';

/** styles */
const View = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

/** component */
const TodoItem = (props: { item: ITodo; onClick: Function }) => {
  const deleteItemHandler = () => {
    props.onClick(props.item.id);
  };
  return <View onClick={deleteItemHandler}>{props.item.title}</View>;
};

export default TodoItem;
