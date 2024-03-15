// components/TodoForm.js
import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ onAdd }: any) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      if (!title.trim()) return; // Prevent adding empty todos
      const response = await axios.post("/api/todos", {
        title,
        completed: false,
      });
      onAdd(response.data);
      setTitle("");
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-row justify-between mt-4 mx-auto w-[90%]">
        <input
          type="text"
          value={title}
          placeholder="Type todo task..."
          className="border-[1px] placeholder:p-2 border-slate-700 h-8 w-[70%] rounded-md pl-2 text-sm"
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white border-none rounded-md text-sm p-2 cursor-pointer">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
