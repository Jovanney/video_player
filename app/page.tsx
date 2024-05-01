"use client";
import { Provider as ReduxProvider } from "react-redux";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import { store } from "@/store";

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <TodoList /> <AddTodo />
    </ReduxProvider>
  );
}
