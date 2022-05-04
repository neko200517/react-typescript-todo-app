import React, { useState } from 'react';
import styled from 'styled-components';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import ICourseGoal from './model/ICourseGoal';

/** styles */
const Container = styled.div`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;
`;

const FormWrapper = styled.div`
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

/** component */
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
    <Container>
      <FormWrapper>
        <CourseInput onRegist={inputHandler} />
      </FormWrapper>
      <CourseGoalList items={items} onClick={delteHandler} />
    </Container>
  );
};

export default CourseGoal;
