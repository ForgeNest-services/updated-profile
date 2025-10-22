"use client";
import React from "react";
import { useLottie } from "lottie-react";
import notFoundAnimation from "@/lib/animations/not_found.json";
import Link from "next/link";

export default function NotFoundPage() {
  const options = {
    animationData: notFoundAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 flex flex-col justify-center items-center space-y-6">
      {View}
      <Link href="/" className="text-white bg-foreground p-6 rounded-3xl">
        Back to Home Page
      </Link>
    </div>
  );
}
