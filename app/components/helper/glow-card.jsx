"use client";

import { useEffect } from "react";

const escapeIdentifier = (identifier) => {
  return identifier.replace(/[^a-zA-Z0-9-_]/g, "-");
};

const GlowCard = ({ children, identifier }) => {
  const escapedIdentifier = escapeIdentifier(identifier);



  return (
    <div className={`glow-container-${escapedIdentifier} glow-container`}>
      <article
        className={`glow-card glow-card-${escapedIdentifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
