import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronDown, Video } from "lucide-react";
import React from "react";
import Lesson from "./Lesson";

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
  return (
    <Accordion type="single" collapsible>
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
          <Lesson title="Desvendando o Redux" duration="09:28" />
          <Lesson title="Desvendando o Redux" duration="09:28" />
          <Lesson title="Desvendando o Redux" duration="09:28" />
          <Lesson title="Desvendando o Redux" duration="09:28" />
          <Lesson title="Desvendando o Redux" duration="09:28" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
