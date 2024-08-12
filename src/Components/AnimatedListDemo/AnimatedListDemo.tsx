"use client";

import { cn } from "../../utils/cn";
import { AnimatedList } from "../AnimatedList/AnimatedList";
import WorkIcon from "@mui/icons-material/Work";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import TimelineIcon from "@mui/icons-material/Timeline";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";

interface Item {
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Project overview",
    description: "Magic UI",
    time: "15m ago",
    icon: <WorkIcon />,
    color: "red",
  },
  {
    name: "Project architecture and strategy planning",
    description: "Magic UI",
    time: "10m ago",
    icon: <ArchitectureIcon />,
    color: "#FFB800",
  },
  {
    name: "Project budget and timeline proposal",
    description: "Magic UI",
    time: "5m ago",
    icon: <TimelineIcon />,
    color: "#FF3D71",
  },
  {
    name: "Design and development",
    description: "Magic UI",
    time: "2m ago",
    icon: <CodeIcon />,
    color: "#1E86FF",
  },
  {
    name: "Testing and deployment",
    description: "Magic UI",
    time: "2m ago",
    icon: <BugReportIcon />,
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-full cursor-pointer overflow-hidden rounded-2xl p-6",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <span className="text-xl">{icon}</span>

        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full flex-col p-4 overflow-hidden  bg-background mb-2",
        className
      )}
      style={{ marginBottom: 2 }}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
