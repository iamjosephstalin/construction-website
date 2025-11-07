// FIX: Import React as a type to resolve the namespace error.
import type * as React from 'react';

export enum ProjectCategory {
  Residential = 'Residential',
  Commercial = 'Commercial',
  Industrial = 'Industrial',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  projectName: string;
  rating: number;
  imageUrl: string;
}
