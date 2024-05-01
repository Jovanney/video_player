"use client";

import { useAppSelector } from "@/store";
import React from "react";

export default function TodoList() {
  const todos = useAppSelector((state) => {
    return state.todo;
  });
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
