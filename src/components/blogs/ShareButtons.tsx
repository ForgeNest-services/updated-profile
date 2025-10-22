"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [blogUrl, setBlogUrl] = useState(`https://yoursite.com/blogs/${slug}`);

  useEffect(() => {
    // Set the actual URL after component mounts on client side
    setBlogUrl(`${window.location.origin}/blogs/${slug}`);
  }, [slug]);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(blogUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      blogUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      blogUrl
    )}`,
    instagram: `https://www.instagram.com/`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(blogUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* Twitter */}
      <Link
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#1DA1F2] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity duration-300"
      >
        Share on Twitter
      </Link>

      {/* Facebook */}
      <Link
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#1877F2] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity duration-300"
      >
        Share on Facebook
      </Link>

      {/* LinkedIn */}
      <Link
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#0A66C2] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity duration-300"
      >
        Share on LinkedIn
      </Link>

      {/* Instagram */}
      <Link
        href={shareLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity duration-300"
      >
        Share on Instagram
      </Link>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
          copied
            ? "bg-green-600 text-white"
            : "bg-foreground text-background hover:opacity-90"
        }`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}
