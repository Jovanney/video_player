import { useAppSelector } from "@/store";
import { useCurrentLesson, useStore } from "@/zustand-store";
import React from "react";

export default function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  const isLoading = useStore((state) => state.isLoading);

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>;
  }
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo "{currentLesson?.title}"
      </span>
    </div>
  );
}
