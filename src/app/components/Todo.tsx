// components/Todo.js
import React from 'react';

const Todo = ({ id, title }: any) => {
  return (
    <div key={id} className='flex flex-row gap-2 my-1'>
      <input type="checkbox" />
      <span>{title}</span>
    </div>
  );
};

export default Todo;
