import React from "react";
import { MessageCircle } from "lucide-react";
import Header from "./Header";
import Video from "./Video";
import Module from "./Module";
import { useAppSelector } from "@/store";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Player() {
  const modules = useAppSelector((state) => state.player.course.modules);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded-lg bg-violet-500 px-3 py-2 text-small font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" /> Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 ">
            <ScrollArea className="h-full">
              {modules.map((module, index) => (
                <Module
                  moduleIndex={index}
                  key={module.id}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              ))}
            </ScrollArea>
          </aside>
        </main>
      </div>
    </div>
  );
}
