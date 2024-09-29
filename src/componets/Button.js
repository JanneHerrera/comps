import className from "classnames";
import { twMerge } from "tailwind-merge";

const finalClassName = className("px-1.5", {
  "bg-blue-500": true,
  "text-yellow-500": true,
});
console.log(finalClassName);
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, "flex iterms-center px-3 py-1.5 border", {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gay-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );
  let baseClassName = "px-3 py-1.5 border";
  if (primary) {
    baseClassName = +"bg-blue-500 border-blue-600 text-white";
  }
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning or danger can be true"
      );
    }
  },
};
export default Button;
