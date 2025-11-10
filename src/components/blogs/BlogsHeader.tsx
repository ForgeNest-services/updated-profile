import React from "react";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

export default function BlogsHeader() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start items-start flex-col">
        <TitleAnimation
          as="h1"
          className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight"
        >
          Our Blogs
        </TitleAnimation>
        <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        <TextAnimation className="mt-4 text-neutral-800 text-base md:text-lg text-start">
          Our Latest Blogs and Articles
        </TextAnimation>
      </div>
    </div>
  );
}
