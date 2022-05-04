import React from 'react';
import ICourseGoal from '../../../model/ICourseGoal';

import './CourseGoalItem.css';

const CourseGoalItem = (props: { item: ICourseGoal; onClick: Function }) => {
  const deleteItemHandler = () => {
    props.onClick(props.item.id);
  };
  return (
    <li className='goal-item' onClick={deleteItemHandler}>
      {props.item.title}
    </li>
  );
};

export default CourseGoalItem;
