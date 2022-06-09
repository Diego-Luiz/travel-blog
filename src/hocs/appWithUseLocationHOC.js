import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const appWithUseLocationHOC = (WrappedComponent) => {
  const FinalComponent = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return (<WrappedComponent {...props} location={location} />);
  };
  return FinalComponent;
}

export default appWithUseLocationHOC;