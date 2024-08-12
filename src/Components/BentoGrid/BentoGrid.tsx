import { cn } from "../../utils/cn";
import { Typography } from "@mui/material";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-[95rem] mx-auto",
        className
      )}
    >

      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-[20px] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-transparent justify-between flex flex-col space-y-4 shadow",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            textAlign: "left",
            color: "text.primary",
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
            textAlign: "left",
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};
