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
    <Box className="section">
      <h3 className="section-title" style={{ textAlign: "left" }}>
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
                In this initial step, we aim to determine if our services align
                with your project's needs. This involves assessing the technical
                feasibility, understanding your team's objectives, budget, and
                timeline, and ensuring that our expectations are in sync.
                Together, we can decide on the next steps.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                You kickstart the process by scheduling a call with an Amoxtli
                Web Developers account executive to discuss your project and our
                approach. During this conversation, they will gain insights into
                your team, your project goals, and the critical product
                requirements necessary to achieve those goals. Following this
                call, our product team will craft a summary, which will be
                reviewed to confirm technical feasibility and align with your
                budget and timeline.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                The outcome of this initial phase is a high-level written
                proposal for the project's development. This proposal outlines
                the features we intend to build, provides an estimate of the
                expected budget, and outlines the stages and timeline leading to
                the project's launch. While the finer details will be refined in
                the formal scoping process, our objective in this step is to
                equip you with the information you need to make an informed
                decision. When you're ready to proceed, you can secure your
                project's spot by placing a refundable deposit, which will allow
                you to engage with your designated Project Manager for the
                scoping phase.
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
                The primary objective of the scoping step is to achieve a
                precise alignment regarding the features and architectural
                aspects of your app. Thoroughly defining these elements upfront
                is instrumental in facilitating a swift development process and,
                most importantly, ensuring that the final product meets your
                expectations.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                We initiate this phase by pairing you with a dedicated Product
                Manager (PM) from the Amoxtli Web Developers team, carefully
                selected to best address your project's requirements. Throughout
                your interactions with the PM, you will systematically traverse
                the entire app's workflow. At critical junctures, decisions will
                be made regarding what to include in the initial release versus
                what can be deferred, all while strategizing the most efficient
                solutions that fit within your budget. Our approach typically
                leans toward an agile and efficient development path, with room
                for you to incorporate additional features as needed.
                Concurrently, our technical team will conduct in-depth research
                and meticulously document all project requirements.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                The culmination of the scoping phase is a comprehensive scope
                document. This document serves as a detailed blueprint,
                specifying the exact users, pages, and features that will be
                incorporated into your initial product release. It also outlines
                a clear timeline and budget for the development process. At this
                juncture, you will gain a comprehensive understanding of how
                your visionary concept transforms into a tangible and specific
                product.
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
                With the feature requirements firmly established, the next and
                final step in the pre-build process involves the integration of
                high-fidelity mockups, which provide a visual representation of
                the user experience as they engage with your product. This is
                where the expertise of our UX designer at Amoxtli Web Developers
                takes center stage.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                Building upon the written feature descriptions from the scoping
                document, our UX designer crafts a comprehensive set of
                customized Figma mockups tailored specifically for your app.
                These mockups are designed using Figma design framework while
                incorporating your company's branding, ensuring that the designs
                are a precise reflection of your unique features and identity.
                This approach guarantees that the designs not only align with
                industry best practices and standard UX conventions but are also
                optimized to seamlessly integrate with our development process,
                ensuring efficient assembly.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                Once all visual elements and textual content are seamlessly
                integrated, you'll possess a complete scope document that serves
                as the blueprint for your project's development. You have the
                opportunity to provide detailed feedback within this document,
                enabling your Project Manager (PM) to make necessary
                adjustments. This may include corresponding updates to the
                budget and timeline, all in an effort to ensure your complete
                satisfaction with the plan.
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
                Armed with a comprehensive build plan, the focal point of
                attention now shifts to your Amoxtli Web Developers build team,
                tasked with the construction and rigorous testing of your entire
                application in weekly milestone increments.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                Guiding this process is your designated Project Manager (PM),
                who orchestrates a team composed of a lead developer, a UI
                assembler, and a QA specialist. Each week, this dedicated team
                diligently constructs and thoroughly tests the features outlined
                for that specific milestone. Upon successful completion, the
                team delivers the functional app, accompanied by clear testing
                instructions, enabling you to confirm that everything aligns
                with your expectations. Your PM will also facilitate a live
                delivery call, ensuring that we remain in sync and are
                well-prepared for the subsequent milestone.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                This phase reaches its conclusion when a fully functional
                version of your application, with all features meticulously
                tested by Amoxtli Web Developers, stands ready for your final
                review before the official launch!
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
                Even the most straightforward software products can conceal
                complexity beneath the surface, often requiring a reasonable
                amount of time for thorough testing and validation. To ensure a
                smooth transition, we extend a 30-day coverage window, during
                which our team remains dedicated to confirming, launching, and
                providing support for your application.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                Upon handing over the application to you, our internal team
                completes an exhaustive Quality Assurance (QA) process,
                certifying that the software aligns with the defined scope. Your
                first task is to conduct a comprehensive review of every facet
                of the tool, highlighting any deviations from the confirmed
                project scope. We've designed a user-friendly widget that
                enables you to annotate the app itself, creating tickets that we
                will subsequently clarify and address.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                When you're ready to take your application live, we initiate the
                deployment process on your custom domain. Furthermore, we
                transfer all associated credentials and intellectual property
                (IP) rights to you. It's a moment for celebrations and shared
                success, complete with virtual hugs all around! Any remaining
                time within the 30-day window serves as additional support, just
                in case you happen to spot any minor details that may have
                eluded previous scrutiny.
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
                As you approach the conclusion of your "review and launch"
                period, your dedicated Client Success Manager at Amoxtli Web
                Developers will reach out to discuss the next steps. For the
                majority of our clients, the launch represents just the initial
                phase, as applications typically need to adapt and evolve in
                response to user feedback.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                We provide two distinct forms of post-launch support to cater to
                your specific needs. The first option is a one-time capacity to
                develop discrete features, ideal for clients in the early stages
                of their project and mindful of their budget. The second option
                is ongoing monthly capacity, tailored for more established
                clients with a comprehensive roadmap and a continuous demand for
                support and feature development.
              </p>
              <p className="header-text" style={{ color: "#585e68" }}>
                In essence, we acknowledge that your journey and requirements
                can be dynamic and unpredictable. Our objective is to empower
                you with the flexibility to determine when and how you utilize
                your Amoxtli Web Developers team to achieve your goals. We're
                here to ensure that your project is both responsive to user
                feedback and aligned with your evolving needs.
              </p>
            </Grid>
          </Grid>
        </Tab>
      </Tabs>
    </Box>
  );
}
