// components/TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }: any) => {
  return (
    <div className='w-[95%] m-auto h-[50vh] mt-5 overflow-scroll'>
      {todos.map((todo: { id: any; todo: any; completed: any; }) => (
        <Todo key={todo.id} id={todo.id} title={todo.todo} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;
