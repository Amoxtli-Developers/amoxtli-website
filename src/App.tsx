import React, { ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import How from "./routes/How";
import Cases from "./routes/Cases";
import Talk from "./routes/Talk";
import "./App.css";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/how-it-works" element={<How />} />
          <Route path="/talk-to-us" element={<Talk />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
