import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Grid } from "@mui/material";
import { Box, List, ListItem } from "@mui/material";
import "./Process.css"; // Import your custom CSS file

export default function Process() {
  const [tabKey, setTabKey] = useState("one");

  const handleSelect = (selectedKey) => {
    setTabKey(selectedKey);
  };

  return (
    <Box className="section" mb={0}>
      <h3 className="section-title" style={{ textAlign: "center" }}>
        Our Process
      </h3>
      <Tabs activeKey={tabKey} onSelect={handleSelect} className="custom-tabs">
        <Tab eventKey="one" title="Discovering" className="custom-tab tab-one">
          <Grid container spacing={2}>
            {/* Left Column: List of Services */}
            <Grid item xs={12} sm={4}>
              <div>
                <List sx={{ paddingBottom: "3rem" }}>
                  <ListItem>
                    <div>
                      <h4 className="phase-title">Discovering</h4>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Timing</p>
                        <p className="phase-text"> 1 week</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Team</p>
                        <p className="phase-text"> Account Executive</p>
                      </div>
                      <div className="phase-attributes" v>
                        <p className="phase-subtitle">Deliverable</p>
                        <p className="phase-text">
                          Confirmed fit (technical, budget) High-level written
                          proposal PM match
                        </p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right Column: Image */}
            <Grid item xs={12} sm={8}>
              <p className="header-text" style={{ color: "#585e68" }}>
                In this phase, we ensure our services meet your project's needs
                by evaluating technical feasibility, understanding your
                objectives, budget, and timeline. We begin with a call to
                discuss your project goals and requirements. Our team will then
                review the information to confirm feasibility and alignment with
                your budget and timeline.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                The result is a high-level proposal outlining the project's
                features, budget estimate, and timeline. This proposal helps you
                make an informed decision. To proceed, secure your spot with a
                refundable deposit, allowing you to engage with a Project
                Manager for the scoping phase.
              </p>
            </Grid>
          </Grid>
        </Tab>
        <Tab eventKey="two" title="Scoping" className="custom-tab tab-two">
          <Grid container spacing={2}>
            {/* Left Column: List of Services */}
            <Grid item xs={12} sm={4}>
              <div>
                <List sx={{ paddingBottom: "3rem" }}>
                  <ListItem>
                    <div>
                      <h4 className="phase-title">Scoping</h4>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Timing</p>
                        <p className="phase-text"> 2 - 3 weeks</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Team</p>
                        <p className="phase-text"> Project Manager</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Deliverable</p>
                        <p className="phase-text">
                          Detailed requirements with users, pages, and features
                        </p>
                        <p className="phase-text">
                          Refined budget, timeline, and milestones
                        </p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right Column: Image */}
            <Grid item xs={12} sm={8}>
              <p className="header-text" style={{ color: "#585e68" }}>
                The scoping step aims to align on the features and architecture
                of your app, ensuring a smooth development process and a final
                product that meets your expectations.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                You'll work with a dedicated Product Manager (PM) to
                systematically define the app's workflow, making key decisions
                on initial release features and strategizing efficient solutions
                within your budget. Our agile approach allows for the
                incorporation of additional features as needed, while our
                technical team conducts in-depth research and documentation.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                The outcome is a comprehensive scope document, detailing users,
                pages, and features for the initial release, along with a clear
                timeline and budget. This gives you a clear understanding of how
                your vision becomes a tangible product.
              </p>
            </Grid>
          </Grid>
        </Tab>
        <Tab eventKey="three" title="Design" className="custom-tab tab-three">
          <Grid container spacing={2}>
            {/* Left Column: List of Services */}
            <Grid item xs={12} sm={4}>
              <div>
                <List sx={{ paddingBottom: "3rem" }}>
                  <ListItem>
                    <div>
                      <h4 className="phase-title">Design</h4>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Timing</p>
                        <p className="phase-text"> 1 - 2 weeks</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Team</p>
                        <p className="phase-text"> Product Manager</p>
                        <p className="phase-text"> UX/UI Designer</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Deliverable</p>
                        <p className="phase-text">
                          High-fidelity Figma mockups
                        </p>
                        <p className="phase-text">Completed scope doc</p>
                        <p className="phase-text">
                          Staffed build team & start date
                        </p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right Column: Image */}
            <Grid item xs={12} sm={8}>
              <p className="header-text" style={{ color: "#585e68" }}>
                The final pre-build step involves creating high-fidelity mockups
                to visualize the user experience. Our UX designer at Amoxtli Web
                Developers will craft customized Figma mockups based on the
                scoping document, incorporating your branding and ensuring
                alignment with best practices and our development process.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                These mockups provide a precise visual representation of your
                app, optimized for efficient development. You can provide
                feedback to make necessary adjustments, which may also update
                the budget and timeline, ensuring your complete satisfaction
                with the plan.
              </p>
            </Grid>
          </Grid>
        </Tab>
        <Tab
          eventKey="four"
          title="Development"
          className="custom-tab tab-four"
        >
          <Grid container spacing={2}>
            {/* Left Column: List of Services */}
            <Grid item xs={12} sm={4}>
              <div>
                <List sx={{ paddingBottom: "3rem" }}>
                  <ListItem>
                    <div>
                      <h4 className="phase-title">Development</h4>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Timing</p>
                        <p className="phase-text">
                          1 week to several months (depending on complexity)
                        </p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Team</p>
                        <p className="phase-text">Developer UI Assembler</p>
                        <p className="phase-text">QA Specialist</p>
                        <p className="phase-text">Product Manager</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Deliverable</p>
                        <p className="phase-text">Fully functional app</p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right Column: Image */}
            <Grid item xs={12} sm={8}>
              <p className="header-text" style={{ color: "#585e68" }}>
                With a comprehensive build plan, your Amoxtli Web Developers
                build team will construct and test your application in weekly
                milestones.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                Your Project Manager (PM) will lead a team of a lead developer,
                a UI assembler, and a QA specialist, who will build and test
                features each week. After each milestone, you will receive the
                functional app and testing instructions to ensure it meets your
                expectations. The PM will also conduct live delivery calls to
                stay aligned for the next milestone.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                This phase concludes with a fully functional application,
                thoroughly tested and ready for your final review before launch.
              </p>
            </Grid>
          </Grid>
        </Tab>
        <Tab eventKey="five" title="Review" className="custom-tab tab-five">
          <Grid container spacing={2}>
            {/* Left Column: List of Services */}
            <Grid item xs={12} sm={4}>
              <div>
                <List sx={{ paddingBottom: "3rem" }}>
                  <ListItem>
                    <div>
                      <h4 className="phase-title">Review</h4>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Timing</p>
                        <p className="phase-text"> 1 month</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Team</p>
                        <p className="phase-text">Developer</p>
                        <p className="phase-text">QA Specialist</p>
                        <p className="phase-text">Product Manager</p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Deliverable</p>
                        <p className="phase-text">
                          Live app on your domain Full IP transfer to client
                        </p>
                        <p className="phase-text">Full IP transfer to client</p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right Column: Image */}
            <Grid item xs={12} sm={8}>
              <p className="header-text" style={{ color: "#585e68" }}>
                We provide a 30-day coverage window to confirm, launch, and
                support your application, ensuring a smooth transition.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                After handing over the application, our team completes a
                thorough QA process to certify alignment with the project scope.
                You will review the tool and highlight any deviations, using a
                widget to annotate and create tickets for us to address.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                When you're ready to go live, we deploy the application on your
                custom domain and transfer all credentials and IP rights to you.
                The remaining time within the 30-day window provides additional
                support for any minor issues that arise.
              </p>
            </Grid>
          </Grid>
        </Tab>
        <Tab eventKey="six" title="Support" className="custom-tab tab-six">
          <Grid container spacing={2}>
            {/* Left Column: List of Services */}
            <Grid item xs={12} sm={4}>
              <div>
                <List sx={{ paddingBottom: "3rem" }}>
                  <ListItem>
                    <div>
                      <h4 className="phase-title">Support</h4>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Timing</p>
                        <p className="phase-text"> One-time or monthly</p>
                      </div>
                      <div className="phase-attributes" iv>
                        <p className="phase-subtitle">Team</p>
                        <p className="phase-text">
                          Varies depending on requirements
                        </p>
                      </div>
                      <div className="phase-attributes">
                        <p className="phase-subtitle">Deliverable</p>
                        <p className="phase-text">Iterative launches</p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right Column: Image */}
            <Grid item xs={12} sm={8}>
              <p className="header-text" style={{ color: "#585e68" }}>
                As your "review and launch" period concludes, your Client
                Success Manager will reach out to discuss next steps. Most
                clients see the launch as just the beginning, needing to adapt
                and evolve based on user feedback.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                We offer two post-launch support options: one-time capacity for
                developing discrete features, suitable for early-stage projects
                with budget considerations, and ongoing monthly capacity for
                established clients needing continuous support and development.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                Our goal is to provide you with the flexibility to determine how
                and when you utilize your Amoxtli Web Developers team, ensuring
                your project responds to user feedback and aligns with your
                evolving needs.
              </p>
            </Grid>
          </Grid>
        </Tab>
      </Tabs>
    </Box>
  );
}
