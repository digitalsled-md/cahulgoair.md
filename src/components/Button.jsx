const basicClasses =
  "bg-accent flex gap-2 items-center justify-center rounded-xl py-2 text-white cursor-pointer";

const sizes = {
  sm: "w-[250px]",
  md: "w-[300px]",
  max: "w-full",
};

const Button = ({
  as: Component = "button",
  children,
  className = "",
  size = "md",
  ...props
}) => {
  return (
    <Component
      className={` ${sizes[size]} ${basicClasses} ${className} `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
