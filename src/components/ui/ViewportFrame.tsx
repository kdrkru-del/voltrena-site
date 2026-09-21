'use client';

import React from 'react';

export default function ViewportFrame() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-40 pointer-events-none overflow-hidden select-none"
    >
      {/* 4 Boundary Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#2B3537]/40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2B3537]/40" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2B3537]/40" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-[#2B3537]/40" />

      {/* Subtle Corner Crosshairs */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-[#5A9692]/30 leading-none">
        +
      </div>
      <div className="absolute top-3 right-3 text-[10px] font-mono text-[#5A9692]/30 leading-none">
        +
      </div>
      <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#5A9692]/30 leading-none">
        +
      </div>
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#5A9692]/30 leading-none">
        +
      </div>
    </div>
  );
}
