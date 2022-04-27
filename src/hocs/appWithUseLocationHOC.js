import { useLocation } from "react-router-dom";

const appWithUseLocationHOC = (WrappedComponent) => {
  const FinalComponent = (props) => {
    const location = useLocation();
    return (<WrappedComponent {...props} location={location} />);
  };
  return FinalComponent;
}

export default appWithUseLocationHOC;