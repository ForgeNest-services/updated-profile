"use client";
import React from "react";
import Link from "next/link";

export default function Test() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 flex flex-col justify-center items-center space-y-6">
      <video
        src="/video/website.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="rounded-3xl shadow-2xl border border-foreground"
      />
    </div>
  );
}
