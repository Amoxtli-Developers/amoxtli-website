import { Box } from "@mui/material";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./Technologies.css"; // Import your custom CSS file

// Import your technology logo images
import logo1 from "../assets/technologies/vue.png";
import logo2 from "../assets/technologies/react.png";
import logo3 from "../assets/technologies/css.png";
import logo4 from "../assets/technologies/html.png";
import logo5 from "../assets/technologies/js.png";
// ... import other logos as needed

// Import your technology logo images
import logo6 from "../assets/technologies/django.svg";
import logo7 from "../assets/technologies/flask.png";
import logo8 from "../assets/technologies/node.png";
import logo9 from "../assets/technologies/spring.png";
// ... import other logos as needed

// Import your technology logo images
import logo10 from "../assets/technologies/figma.png";
import logo11 from "../assets/technologies/ai.png";
// ... import other logos as needed

// Import your technology logo images
import logo12 from "../assets/technologies/drupal.png";
import logo13 from "../assets/technologies/wp.png";
import logo14 from "../assets/technologies/wf.png";
// ... import other logos as needed

// Import your technology logo images
import logo15 from "../assets/technologies/shopify.svg";
import logo16 from "../assets/technologies/woo.png";
// ... import other logos as needed

// Import your technology logo images
import logo17 from "../assets/technologies/firebase.svg";
import logo18 from "../assets/technologies/sqlite.png";
import logo19 from "../assets/technologies/mysql.png";
import logo20 from "../assets/technologies/postgres.png";
import logo21 from "../assets/technologies/mongo.svg";
// ... import other logos as needed

// Import your technology logo images
import logo22 from "../assets/technologies/aws.png";
import logo23 from "../assets/technologies/azure.png";
import logo24 from "../assets/technologies/gc.png";
// ... import other logos as needed

export default function Technologies() {
  const [tabKey, setTabKey] = useState("one");

  const handleSelect = (selectedKey) => {
    setTabKey(selectedKey);
  };

  return (
    <Box className="section">
      <h3 className="section-title">Technologies we use</h3>
      <Tabs activeKey={tabKey} onSelect={handleSelect} className="custom-tabs">
        <Tab eventKey="one" title="Front-end">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo1} alt="Logo 1" />
              <p className="technology-title">Vue JS</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo2} alt="Logo 1" />
              <p className="technology-title">React JS</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo3} alt="Logo 1" />
              <p className="technology-title">CSS3</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo4} alt="Logo 1" />
              <p className="technology-title">HTML5</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo5} alt="Logo 1" />
              <p className="technology-title">JavaScript</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="two" title="Back-end">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo6} alt="Logo 1" />
              <p className="technology-title">Django</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo7} alt="Logo 1" />
              <p className="technology-title">Flask</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo8} alt="Logo 1" />
              <p className="technology-title">Node JS</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo9} alt="Logo 1" />
              <p className="technology-title">SpringBoot</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Web Design">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo10} alt="Logo 1" />
              <p className="technology-title">Figma</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo11} alt="Logo 1" />
              <p className="technology-title">Adobe Illustrator</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="four" title="CMS">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo12} alt="Logo 1" />
              <p className="technology-title">Drupal</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo13} alt="Logo 1" />
              <p className="technology-title">WordPress</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo14} alt="Logo 1" />
              <p className="technology-title">WebFlow</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="five" title="eCommerce">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo15} alt="Logo 1" />
              <p className="technology-title">Shopify</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo16} alt="Logo 1" />
              <p className="technology-title">WooCommerce</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="six" title="Data Base">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo17} alt="Logo 1" />
              <p className="technology-title">FireBase</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo18} alt="Logo 1" />
              <p className="technology-title">SQLite</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo19} alt="Logo 1" />
              <p className="technology-title">MySQL</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo20} alt="Logo 1" />
              <p className="technology-title">PostgresSQL</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo21} alt="Logo 1" />
              <p className="technology-title">MongoDB</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="seven" title="Cloud">
          <div className="technology-logos">
            <div className="technology-logos-container">
              <img src={logo22} alt="Logo 1" />
              <p className="technology-title">AWS</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo23} alt="Logo 1" />
              <p className="technology-title">Azure</p>
            </div>
            <div className="technology-logos-container">
              <img src={logo24} alt="Logo 1" />
              <p className="technology-title">Google Cloud</p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Box>
  );
}
