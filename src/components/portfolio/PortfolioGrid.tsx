"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  projectCategories,
  type ProjectCategory,
  getProjectByCategory,
} from "@/data/portfolio";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects = getProjectByCategory(selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-oswald text-sm md:text-base uppercase transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#dd4f43] text-white"
                : "bg-white text-foreground border-2 border-foreground/10 hover:border-[#dd4f43]/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-foreground/5"
          >
            {/* Project Image */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-foreground/5">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent z-10" />
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  // Fallback to placeholder
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%2364748b'%3E${project.client}%3C/text%3E%3C/svg%3E`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="inline-block px-3 py-1 bg-[#dd4f43] text-white text-xs font-oswald uppercase rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-oswald font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm mt-1">{project.client}</p>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.services.slice(0, 3).map((service, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-foreground/5 text-foreground/60 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="border-t border-foreground/10 pt-4 mb-4">
                <p className="text-xs text-foreground/50 uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-foreground/60"
                    >
                      {tech}
                      {idx < Math.min(project.technologies.length, 4) - 1 &&
                        " •"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#dd4f43] text-white rounded-lg font-oswald text-sm uppercase hover:bg-[#c44539] transition-all duration-300 group/btn"
              >
                Visit Site
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-foreground/60 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
