import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[15px]",
};
const variants = {
  fill: {
    blue_gray_100_33: "bg-blue_gray-100_33 text-black-900_03",
    white_A700: "bg-white-A700 text-black-900_03",
    gray_50_01: "bg-gray-50_01 text-black-900_03",
    gray_50: "bg-gray-50 text-black-900_03",
  },
  outline: {
    black_900_03: "border-black-900_03 border border-solid text-black-900_03",
  },
};
const sizes = {
  "2xl": "h-[80px] pl-7 pr-[35px] text-base",
  sm: "h-[60px] pl-[18px] pr-[35px] text-base",
  lg: "h-[80px] pl-5 pr-[35px] text-[25px]",
  xl: "h-[80px] pl-[25px] pr-[35px] text-[28px]",
  xs: "h-[50px] px-5 text-base",
  "3xl": "h-[80px] pl-3.5 pr-[35px]",
  md: "h-[80px] pl-[25px] pr-[35px] text-xl",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "md",
      color = "blue_gray_100_33",
      register, // Add register prop
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <div
          className={`${className} flex items-center justify-center rounded-[15px] bg-blue_gray-100_33 ${
            shapes[shape] || ""
          } ${variants[variant]?.[color] || variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref} // Forward the ref to the input element
            type={type}
            name={name}
            // onChange={onChange}
            placeholder={placeholder}
            {...register(name, { onChange })} // Use register function to register the input field
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "sm", "lg", "xl", "xs", "3xl", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_100_33",
    "white_A700",
    "gray_50_01",
    "gray_50",
    "black_900_03",
  ]),
};

export { Input };
