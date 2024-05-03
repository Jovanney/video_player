import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "@/zustand-store";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Video() {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore((state) => {
    return {
      isLoading: state.isLoading,
      next: state.next,
    };
  });

  const handleNextLesson = () => {
    next();
  };
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="h-10 w-10 text-violet-500 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          controls
          onEnded={handleNextLesson}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
