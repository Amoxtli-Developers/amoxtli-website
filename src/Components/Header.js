import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Header.css";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./AboutView.css";

const Header = ({ imageUrl, title }) => {
  return (
    <Box className="main-header">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Left Column: Text, Title, and Button */}
        <Grid item xs={12} sm={6}>
          <div>
            <h1 className="header-title title-edited" style={{ textAlign: "left" }}>{title}</h1>
            <p className="header-text">
              <span className="underlined-text">Amoxtli Web Developers</span> is
              a software development startup founded by a group of Mexican students from
              Tec de Monterrey that understand the
              critical role that a strong <span className="underlined-text">
                online presence plays in the success of businesses today
              </span>. They are passionate about helping startups make the most of
              this opportunity.
            </p>
            <div style={{ textAlign: "right", paddingBottom:"40px"}}>
              <Link to={"/talk-to-us"} target="_blank">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Let's talk</span>
                </button>
              </Link>
            </div>
          </div>
        </Grid>
        {/* Right Column: Image */}
        <Grid item xs={12} sm={6}>
          <img
            src={imageUrl}
            alt="header-logo"
            style={{ width: "95%", borderRadius: "2rem" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "5rem"}}>
        <Grid item xs={12} sm={12} md={4}>
          < Card sx={{ borderRadius: "2rem", backgroundColor: "rgba(255, 0, 153, 0.8)", width: "100%", minHeight: '190px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        alignItems: 'center',}}>
            <CardContent sx={{textAlign: "center"}}>
              <h5 style={{ color: "#FFFFFF", textAlign:"center", margin: 0}}>Dedicated team crafting innovative, customized web solutions for startups.</h5>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          < Card sx={{ borderRadius: "2rem", backgroundColor: "rgba(255, 153, 200, 0.8)", width: "100%",minHeight: '190px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        alignItems: 'center',}}>
            <CardContent sx={{textAlign: "center" }}>
              <h5 style={{ color: "#FFFFFF", textAlign:"center",margin: 0 }}>Tailored web solutions to meet the unique needs of each startup.</h5>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          < Card sx={{ borderRadius: "2rem", backgroundColor: "rgba(247, 198, 255, 0.8)", width: "100%", minHeight: '190px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        alignItems: 'center',
            }}>
            <CardContent sx={{ textAlign: "center" }}>
              <h5 style={{ color: "#FFFFFF",textAlign:"center",margin: 0 }}>Expertise and commitment driving digital transformation for emerging businesses.</h5>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <p className="believe" style={{textAlign:"right"}}>
        <span className="underlined-text">Empowering startups</span> with modern<br />
        websites for success in the digital age <br />
        it’s <span className="underlined-text">our goal.</span>
      </p>
    </Box>
  );
};

export default Header;
