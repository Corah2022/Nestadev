"use client"

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { GripVertical } from 'lucide-react';

interface ResizablePanelProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export const ResizablePanel = ({
  leftPanel,
  rightPanel,
  defaultSize = 50,
  minSize = 20,
  maxSize = 80
}: ResizablePanelProps) => {
  const [leftWidth, setLeftWidth] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

      if (newLeftWidth >= minSize && newLeftWidth <= maxSize) {
        setLeftWidth(newLeftWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, minSize, maxSize]);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full relative overflow-hidden min-w-0"
      style={{ userSelect: isDragging ? 'none' : 'auto' }}
    >
      {/* Left Panel */}
      <div
        style={{ width: `${leftWidth}%` }}
        className="overflow-auto h-full"
      >
        {leftPanel}
      </div>

      {/* Resize Handle */}
      <div
        onMouseDown={() => setIsDragging(true)}
        className={`
          w-1 bg-border hover:bg-primary/50 cursor-col-resize 
          flex items-center justify-center relative
          transition-colors z-10
          ${isDragging ? 'bg-primary/50' : ''}
        `}
      >
        <div className="absolute bg-background border shadow-sm rounded-sm h-8 w-4 flex items-center justify-center pointer-events-none">
          <GripVertical className="w-3 h-3 text-muted-foreground" />
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="overflow-auto h-full flex-1 min-w-0"
      >
        {rightPanel}
      </div>
    </div>
  );
};
