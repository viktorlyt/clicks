import React from "react";

type ColorScheme = "default" | "gray";

interface GradientStop {
  offset: string;
  color: string;
}

interface LogoSpinnerProps {
  size?: number;
  className?: string;
  colorScheme?: ColorScheme;
}

const LogoSpinner: React.FC<LogoSpinnerProps> = ({
  size = 40,
  className = "",
  colorScheme = "default",
}) => {
  const gradientId = `spinner-gradient-${colorScheme}`;

  const gradients: Record<ColorScheme, GradientStop[]> = {
    default: [
      { offset: "0", color: "#12A6C8" },
      { offset: "0.1552", color: "#47E2EC" },
      { offset: "0.3288", color: "#52EFF2" },
      { offset: "0.525", color: "#12A6D0" },
      { offset: "0.6608", color: "#347BB8" },
      { offset: "0.8193", color: "#483BB5" },
      { offset: "0.9854", color: "#084378" },
    ],
    gray: [
      { offset: "0", color: "#E5E5E5" },
      { offset: "0.1552", color: "#D4D4D4" },
      { offset: "0.3288", color: "#A3A3A3" },
      { offset: "0.525", color: "#737373" },
      { offset: "0.6608", color: "#525252" },
      { offset: "0.8193", color: "#404040" },
      { offset: "0.9854", color: "#262626" },
    ],
  };

  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-spin ${className}`}
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="59.552"
            y1="200.1273"
            x2="340.4479"
            y2="200.1273"
          >
            {gradients[colorScheme].map((stop) => (
              <stop
                key={stop.offset}
                offset={stop.offset}
                style={{ stopColor: stop.color }}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d="M340.45,150c0-0.01-0.01-0.03-0.04-0.04c-12.84-14.4-30.4-25.02-50.47-29.78c-7.64-1.82-15.66-2.78-23.89-2.78
            c-13.26,0-25.92,2.5-37.42,7.01c8.9-11.03,19.77-20.37,32.05-27.42c-10.99-6.09-23.07-10.38-35.87-12.47
            c-5.92-0.97-12.01-1.48-18.21-1.48c-17.94,0-34.91,4.25-49.99,11.81c-1.11,0.56-2.22,1.14-3.32,1.73c-0.03,0.01-0.07,0.04-0.11,0.06
            c-0.95,0.53-1.92,1.05-2.86,1.61c-0.17,0.1-0.33,0.19-0.5,0.29c-1,0.6-1.98,1.21-2.98,1.82c-0.95,0.61-1.92,1.23-2.86,1.87
            c-0.22,0.15-0.45,0.31-0.67,0.46c-0.89,0.61-1.76,1.22-2.63,1.86c-1,0.74-2,1.47-2.98,2.23c-0.98,0.76-1.94,1.54-2.9,2.35
            c-0.95,0.79-1.89,1.6-2.83,2.43c-0.93,0.82-1.84,1.67-2.74,2.51c-0.9,0.86-1.79,1.72-2.66,2.61c-0.44,0.44-0.87,0.89-1.3,1.33
            c-0.42,0.44-0.86,0.9-1.28,1.36c-0.75,0.8-1.48,1.62-2.22,2.46c-0.12,0.14-0.24,0.28-0.36,0.42c-0.71,0.83-1.43,1.68-2.13,2.53
            c-0.07,0.08-0.12,0.15-0.18,0.24c-0.79,0.97-1.56,1.94-2.31,2.94c-0.38,0.5-0.75,1-1.12,1.5c-0.28,0.36-0.54,0.74-0.81,1.11
            c-0.26,0.36-0.52,0.72-0.77,1.1c-0.03,0.03-0.04,0.06-0.07,0.08c-0.04,0.06-0.08,0.11-0.12,0.17c-0.5,0.71-0.99,1.43-1.47,2.15
            c-1.1,1.64-2.14,3.3-3.15,5.01c-0.91,1.54-1.8,3.09-2.64,4.68c-0.59,1.11-1.16,2.23-1.72,3.37c-0.28,0.57-0.56,1.14-0.82,1.71
            c-0.11,0.21-0.2,0.4-0.29,0.61c-0.44,0.93-0.85,1.86-1.27,2.8c-0.25,0.6-0.5,1.21-0.75,1.8c-0.22,0.56-0.46,1.12-0.69,1.69
            c-0.24,0.62-0.48,1.23-0.71,1.86c-0.65,1.73-1.26,3.48-1.84,5.26c-0.21,0.67-0.42,1.35-0.62,2.01c-0.19,0.61-0.37,1.23-0.54,1.85
            c-0.17,0.62-0.34,1.25-0.52,1.87c-0.3,1.1-0.58,2.19-0.83,3.3c-0.04,0.18-0.08,0.36-0.12,0.54c-0.15,0.6-0.28,1.21-0.41,1.82
            c-0.13,0.64-0.26,1.28-0.4,1.91c-0.25,1.28-0.48,2.57-0.69,3.86c-0.11,0.65-0.21,1.29-0.3,1.94c-0.19,1.29-0.36,2.59-0.5,3.91
            c0,0.01,0,0.01,0,0.01c-0.15,1.32-0.28,2.64-0.37,3.97c-0.05,0.67-0.11,1.33-0.15,2c-0.08,1.44-0.16,2.89-0.19,4.34
            c-0.03,0.89-0.04,1.78-0.04,2.68v0.64c0.17,63.98,51.01,115.81,113.7,115.81c6.19,0,12.27-0.5,18.19-1.48
            c13.46-2.21,26.11-6.83,37.55-13.42c1.45-0.83,2.88-1.69,4.3-2.59c5.37-3.41,10.43-7.27,15.15-11.54c1.31-0.72,2.59-1.48,3.87-2.28
            c9.02,1.33,18.44,2.05,28.16,2.05h0.12c2.54,0,5.06-0.04,7.56-0.14c-7.19,9.92-15.59,18.87-24.98,26.67
            c-10.82,8.98-22.95,16.42-36.07,21.95c-17.24,7.3-36.19,11.32-56.06,11.32h-0.24c-79.89-0.12-144.61-65.31-144.61-145.71
            c0-79.12,62.69-143.52,140.8-145.67c1.1-0.03,2.2-0.04,3.29-0.04c0.25-0.01,0.5-0.01,0.75-0.01c19,0,37.14,3.68,53.76,10.37
            c12.46,5.01,24.06,11.71,34.54,19.86c5.67-1.23,11.5-2.04,17.45-2.36c15.39,17.8,26.23,41.25,30.24,67.59
            C340.42,149.92,340.44,149.96,340.45,150z"
          fill={`url(#${gradientId})`}
          className="origin-center"
        />
      </svg>
    </div>
  );
};

export default LogoSpinner;
