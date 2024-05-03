import { useAppDispatch, useAppSelector } from "@/store";
import { next, useCurrentLesson } from "@/store/slices/player";
import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Video() {
  const { currentLesson } = useCurrentLesson();
  const dispatch = useAppDispatch();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  const handleNextLesson = () => {
    dispatch(next());
  };
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
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
