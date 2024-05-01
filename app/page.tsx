"use client";
import { Provider as ReduxProvider } from "react-redux";

import Image from "next/image";
import { store } from "@/store";
import Player from "@/components/Player";

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  );
}
