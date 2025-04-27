import React from 'react';

declare module '@vercel/analitics/react' {
  export const Analytics: React.FC;
  export const usePageViews: () => void;
  export const useAnalytics: () => {
    trackEvent: (eventName: string, properties?: Record<string, any>) => void;
    trackPageView: (url: string) => void;
  };
}