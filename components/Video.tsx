import { useAppSelector } from "@/store";
import { next } from "@/store/slices/player";
import React from "react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";

export default function Video() {
  const video = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return currentLesson;
  });
  const dispatch = useDispatch();

  const handleNextLesson = () => {
    dispatch(next());
  };
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        controls
        onEnded={handleNextLesson}
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  );
}
