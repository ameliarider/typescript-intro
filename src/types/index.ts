// src/types/index.ts
// This file contains all our shared type definitions

// User-related types

export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface UserProfile extends User {
  avatar?: string;
  bio?: string;
  joinDate: Date;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
  timestamp: Date;
}

export type Status = 'loading' | 'success' | 'error';
export type UserRole = 'admin' | 'user' | 'viewer';
export type ID = string | number;