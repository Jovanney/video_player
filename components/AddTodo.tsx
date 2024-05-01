"use client";

import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/store";

export default function AddTodo() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(add({ newTodo: text }));
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Novo todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
