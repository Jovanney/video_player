import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronDown, Video } from "lucide-react";
import React from "react";
import Lesson from "./Lesson";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { play } from "@/store/slices/player";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export default function Module({
  title,
  amountOfLessons,
  moduleIndex,
}: ModuleProps) {
  const lessons = useAppSelector(
    (state) => state.player.course.modules[moduleIndex].lessons
  );

  const dispatch = useDispatch();

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    return { currentLessonIndex, currentModuleIndex };
  });

  return (
    <Accordion defaultValue="0" type="single" collapsible>
      <AccordionItem value={moduleIndex.toString()}>
        <AccordionTrigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
          <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
            {moduleIndex + 1}
          </div>

          <div className="flex flex-col gap-1 text-left">
            <strong>{title}</strong>
            <span className="text-sm text-zinc-400 ">
              {amountOfLessons} aulas
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex;
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={() => {
                  dispatch(play([moduleIndex, lessonIndex]));
                }}
                isCurrent={isCurrent}
              />
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
