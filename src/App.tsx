import React, { ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import How from "./routes/How";
import Client from "./routes/Client";
import Cases from "./routes/Cases";
import Talk from "./routes/Talk";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import Pricing from "./routes/Pricing";

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
          <Route path="*" element={<App />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/client-stories" element={<Client />} />
          <Route path="/client-case/:id" element={<Cases />} />
          <Route path="/how-it-works" element={<How />} />
          <Route path="/talk-to-us" element={<Talk />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Wrapper>
      
    </div>
  );
}

export default App;
