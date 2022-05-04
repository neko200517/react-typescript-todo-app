import React from 'react';
import styled from 'styled-components';
import ICourseGoal from '../../../model/ICourseGoal';

/** styles */
const Item = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

/** component */
const CourseGoalItem = (props: { item: ICourseGoal; onClick: Function }) => {
  const deleteItemHandler = () => {
    props.onClick(props.item.id);
  };
  return (
    <Item className='goal-item' onClick={deleteItemHandler}>
      {props.item.title}
    </Item>
  );
};

export default CourseGoalItem;
