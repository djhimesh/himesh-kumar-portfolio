import { useState } from 'react';

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background text-foreground rounded-xl">
          <svg className="animate-spin h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
          </svg>
        </div>
      )}
      <iframe
        src={`https://my.spline.design/PyzDhpQ9E5f1E3MT/`}
        className="w-full h-full border-0 rounded-xl"
        onLoad={() => setLoaded(true)}
        allow="autoplay"
        title="Interactive 3D Robot"
      />
    </div>
  );
}
