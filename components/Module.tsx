import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronDown, Video } from "lucide-react";
import React from "react";
import Lesson from "./Lesson";
import { useStore } from "@/zustand-store";

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
  const { currentLessonIndex, currentModuleIndex, play, lessons } = useStore(
    (state) => {
      return {
        currentLessonIndex: state.currentLessonIndex,
        currentModuleIndex: state.currentModuleIndex,
        play: state.play,
        lessons: state.course?.modules[moduleIndex].lessons,
      };
    }
  );

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
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex;
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => {
                    play([moduleIndex, lessonIndex]);
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
