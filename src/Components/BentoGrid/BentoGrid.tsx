import { cn } from "../../utils/cn";

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
        "grid md:auto-rows-[20rem] md:grid-cols-3 gap-4 ",
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
        "rounded-[2rem] hover:shadow-xl transition duration-200 shadow-input shadow-lg p-4 bg-white ",
        className
      )}
      style={{ textAlign: "left", overflow: "hidden"}}
    >
      <div>{header}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans font-bold mb-2 mt-2"
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </div>
        <div
          className="font-sans font-normal"
          style={{ fontFamily: "Poppins" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
