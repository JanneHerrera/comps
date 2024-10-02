import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Route(path, children) {
  const { currenPath } = useContext(NavigationContext);

  if (path === currenPath) {
    return children;
  }

  return null;
}

export default Route;
