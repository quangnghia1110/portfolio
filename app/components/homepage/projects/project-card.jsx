import React from "react";

function ProjectCard({ project }) {
  const { name, duration, teamSize, position, source, technologies, features, responsibilities } = project;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full p-6 shadow-md">
      {/* Header */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Project Name */}
      <h3 className="text-center text-[#16f2b3] text-lg lg:text-xl font-bold my-4">
        {name}
      </h3>

      {/* Project Details */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          {/* Project Object Start */}
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          {/* Name */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">{name}</span>
            <span className="text-gray-400">',</span>
          </div>

          {/* Duration */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">duration:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">{duration}</span>
            <span className="text-gray-400">',</span>
          </div>

          {/* Team Size */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">teamSize:</span>
            <span className="text-orange-400">{teamSize}</span>
            <span className="text-gray-400">,</span>
          </div>

          {/* Position */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">position:</span>
            <span className="text-gray-400">'</span>
            <span className="text-cyan-400">{position}</span>
            <span className="text-gray-400">',</span>
          </div>

          {/* Source */}
          {/* Source */}
<div className="ml-4 lg:ml-8 mr-2">
  <span className="text-white">source:</span>
  <span className="text-gray-400">{' {'}</span>
  {source.frontend && (
    <div className="ml-8">
      <span className="text-white">frontend:</span>
      <span className="text-gray-400">'</span>
      <a href={source.frontend} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
        {source.frontend}
      </a>
      <span className="text-gray-400">',</span>
    </div>
  )}
  {source.backend && (
    <div className="ml-8">
      <span className="text-white">backend:</span>
      <span className="text-gray-400">'</span>
      <a href={source.backend} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
        {source.backend}
      </a>
      <span className="text-gray-400">',</span>
    </div>
  )}
  {source.code && (
    <div className="ml-8">
      <span className="text-white">code:</span>
      <span className="text-gray-400">'</span>
      <a href={source.code} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
        {source.code}
      </a>
      <span className="text-gray-400">',</span>
    </div>
  )}
  <span className="text-gray-400">{' },'}</span>
</div>


          {/* Technologies */}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">technologies:</span>
            <span className="text-gray-400">{' {'}</span>
            {Object.entries(technologies).map(([key, value], i) => (
              <div key={i} className="ml-8">
                <span className="text-white">{key}:</span>
                <span className="text-gray-400"> [</span>
                {value.map((tech, j) => (
                  <React.Fragment key={j}>
                    <span className="text-amber-300">{tech}</span>
                    {j < value.length - 1 && <span className="text-gray-400">, </span>}
                  </React.Fragment>
                ))}
                <span className="text-gray-400">],</span>
              </div>
            ))}
            <span className="text-gray-400">{' },'}</span>
          </div>

          {/* Features */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">features:</span>
            <span className="text-gray-400">'</span>
            <span className="text-cyan-400">{features}</span>
            <span className="text-gray-400">',</span>
          </div>

          {/* Responsibilities */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">responsibilities:</span>
            <span className="text-gray-400">'</span>
            <span className="text-cyan-400">{responsibilities}</span>
            <span className="text-gray-400">',</span>
          </div>

          {/* Project Object End */}
          <div>
            <span className="text-gray-400">{'}'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
