import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "@/lib/axios";

interface Lesson {
  id: number;
  title: string;
  duration: string;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}
interface Course {
  id: number;
  modules: Module[];
}
interface PlayerState {
  currentModuleIndex: number;
  currentLessonIndex: number;
  course: Course | null;
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

export const loadCourse = createAsyncThunk("player/load", async () => {
  const response = await api.get("coursers/1");
  return response.data;
});

export const playerSlide = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[
          nextLessonIndex
        ];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course?.modules[nextModuleIndex];

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentLessonIndex = 0;
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload;
    });
  },
});

export const player = playerSlide.reducer;

export const { play, next } = playerSlide.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];
    return { currentModule, currentLesson };
  });
};
