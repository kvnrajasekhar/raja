"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { MobileUpdate } from "./components/MobileUpdate";
import { TabletUpdate } from "./components/TabletUpdate";

// Prevent SSR issues
const UnderUpdate = dynamic(() => import("./components/UnderUpdate"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
      Loading...
    </div>
  ),
});

export default function Home() {
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    const detectScreen = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreen("mobile");
      } else if (width < 1024) {
        setScreen("tablet");
      } else {
        setScreen("desktop");
      }
    };

    detectScreen();
    window.addEventListener("resize", detectScreen);

    return () => window.removeEventListener("resize", detectScreen);
  }, []);

  const renderView = () => {
    if (screen === "mobile") return <MobileUpdate />;
    if (screen === "tablet") return <TabletUpdate />;
    return <UnderUpdate />;
  };

  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#06080f",
      }}
    >
      {renderView()}
    </main>
  );
}