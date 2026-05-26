import clsx from "clsx";

const GradientButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "btn-3d bg-primary w-full hover:bg-primary/80 text-nowrap font-bold text-white px-4 md:text-lg py-4 rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
