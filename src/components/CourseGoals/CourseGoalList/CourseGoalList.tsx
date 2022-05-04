import React from 'react';
import ICourseGoal from '../../../model/ICourseGoal';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

import './CourseGoalList.css';

const CourseGoalList = (props: { items: ICourseGoal[]; onClick: Function }) => {
  return (
    <ul className='goal-list'>
      {props.items.map((item) => {
        return (
          <CourseGoalItem key={item.id} item={item} onClick={props.onClick} />
        );
      })}
    </ul>
  );
};

export default CourseGoalList;
