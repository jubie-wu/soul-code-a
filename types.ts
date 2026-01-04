
// Added React import to resolve the React.ReactNode namespace error
import React from 'react';

export type ShapeId = 'circle' | 'triangle' | 'square' | 'spiral' | 'cross';

export interface ShapeInfo {
  id: ShapeId;
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface RankData {
  title: string;
  description: string;
  mappings: Record<ShapeId, string>;
}

export type Stage = 'intro' | 'sorting' | 'result';
