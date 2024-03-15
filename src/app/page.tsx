"use client";

// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        setTodos(response.data.todos);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchTodos();
  }, []);
  

  const handleAddTodo = async (newTodo: Object) => {
    try {
      const response = await axios.post("/api/todos",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: 'Use DummyJSON in the project',
          completed: false,
          userId: 5,
        })
      });
      setTodos(prevTodos => [...prevTodos, response.data]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  return (
    <div className="bg-white text-black h-[100vh] w-[100vw] ">
      <div className='h-[70vh] mt-[10vh] w-[40vw] m-auto rounder-lg shadow-lg'>
        <div className='bg-blue-400 text-white pl-6 pt-2 h-10 rounded-tl-lg rounded-tr-lg'> <h1>Todo List</h1></div>
        <div> <TodoForm onAdd={handleAddTodo} /></div>
        <div> <TodoList todos={todos} /></div>
      </div>
    </div>
  );
};

export default Home;
