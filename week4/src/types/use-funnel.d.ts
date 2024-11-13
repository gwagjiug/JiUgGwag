// src/types/use-funnel.d.ts
declare module 'use-funnel' {
  export function useFunnel<T>(steps: T[]): {
    currentStep: number;
    nextStep: () => void;
    prevStep: () => void;
  };
}
