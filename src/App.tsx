import React, { useState } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import ICourseGoal from './model/ICourseGoal';

import './App.css';

const initialData: ICourseGoal[] = [];

const CourseGoal = () => {
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
    <div id='goals'>
      <div id='goal-form'>
        <CourseInput onRegist={inputHandler} />
      </div>
      <CourseGoalList items={items} onClick={delteHandler} />
    </div>
  );
};

export default CourseGoal;
