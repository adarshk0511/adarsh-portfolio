"use client";

import { useEffect, useState } from "react";
import { JetBrains_Mono, IBM_Plex_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      const formatted = new Intl.DateTimeFormat("en-IN", options).format(now);

      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      📍 Bangalore, <span className={`${jetbrainsMono.className}`}>{time} </span> IST (GMT+5:30)
    </span>
  );
}