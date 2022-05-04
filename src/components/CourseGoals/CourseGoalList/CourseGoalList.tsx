import React from 'react';
import styled from 'styled-components';
import ICourseGoal from '../../../model/ICourseGoal';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

/** styles */
const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

/** component */
const CourseGoalList = (props: { items: ICourseGoal[]; onClick: Function }) => {
  return (
    <ItemList className='goal-list'>
      {props.items.map((item) => {
        return (
          <CourseGoalItem key={item.id} item={item} onClick={props.onClick} />
        );
      })}
    </ItemList>
  );
};

export default CourseGoalList;
