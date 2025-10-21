"use client";
import React from "react";
import { useLottie } from "lottie-react";
import notFoundAnimation from "@/lib/animations/not_found.json";

export default function NotFoundPage() {
  const options = {
    animationData: notFoundAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return <div className="max-w-screen-2xl mx-auto px-4">{View}</div>;
}
