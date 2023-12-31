import React from "react";
import "./CasesView.css";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import imagen from "../assets/cases/case-fratellis.png";
import imagen2 from "../assets/cases/case-cyber.png";
import imagen3 from "../assets/cases/case-contadores.png";
import imagen4 from "../assets/cases/case-hilitos.png";
import imagen5 from "../assets/cases/case-salomon.png";
import imagen6 from "../assets/cases/case-calena.png";
import imagen7 from "../assets/cases/case-sucre.png";
import imagen8 from "../assets/cases/case-boom.png";
import imagen9 from "../assets/cases/case-asesorista.png";
import imagen10 from "../assets/cases/case-pys.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MajorCard from "./MajorCard";
import TechStack from "./TechStack.js";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import "./TeamCarousel.css";
import CardMedia from '@mui/material/CardMedia';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import logo3 from "../assets/technologies/css.png";
import logo4 from "../assets/technologies/html.png";
import logo5 from "../assets/technologies/js.png";
import logo6 from "../assets/technologies/django.svg";
import logo7 from "../assets/technologies/sqlite.png";
import logo8 from "../assets/tech/heroku.png";
import logo9 from "../assets/tech/bootstrap.png";
import logo10 from "../assets/tech/github.png";
import logo11 from "../assets/tech/supabase.png";
import logo12 from "../assets/tech/sql.png";
import logo13 from "../assets/tech/swift.png";
import logo14 from "../assets/technologies/azure.png";
import logo15 from "../assets/tech/unity.png";
import { useParams } from "react-router-dom";

function CasesView() {
    let { id } = useParams();

    const cardsData = {
        '1': [
          {
            title: "01",
            paragraph: "Display the menu with enticing images and brief descriptions.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
          {
            title: "02",
            paragraph: "Provide location and contact details clearly and directly.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
          {
            title: "03",
            paragraph: "Promote and facilitate the reservation of spaces for events.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
          {
            title: "04",
            paragraph: "Reflect the vintage and artisanal aesthetics of Fratelli's.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
        ],
        '2': [
            {
              title: "01",
              paragraph: "Allow you to easily reserve spaces and equipment related to cybersecurity.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Ensure a secure process during the reservation process and use of the Hub services.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Create personalized accounts, allowing store preferences and future reservations.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Centralized administrator web page to add, modify or delete services.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "05",
                paragraph: "Increase the visibility of the Cybersecurity Hub by facilitating access to available services.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
            },
        ],
        '3': [
          {
            title: "01",
            paragraph: "Easy access and direct discovery of the services offered.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
          {
            title: "02",
            paragraph: "Reflection of expert knowledge in the fiscal and accounting field.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
          {
            title: "03",
            paragraph: "Accessible contact forms and direct contact information.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
          {
            title: "04",
            paragraph: "Customer testimonial showcase to demonstrate the experience and results.",
            bgColor: "rgb(247, 247, 247)",
            textColor: "black",
          },
        ],
        '4': [
            {
              title: "01",
              paragraph: "Reflection of the quality and detail of its craftsmanship in fashion and tailoring.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Contact forms and service request forms to facilitate interaction with clients.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Build confidence through testimonials from satisfied customers with the service.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Clear and accessible contact information with an interactive map.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
          ],
          '5': [
            {
              title: "01",
              paragraph: "Elegant and modern website that served as a digital portfolio for the photographer.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Integrate a gallery that would highlight the quality and versatility of the photographer's work.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Design an intuitive interface where visitors find services directly.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Offer easy and direct contact for the acquisition of services.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
          ],
          '6': [
            {
              title: "01",
              paragraph: "Modern and professional website that reflects the brand's identity and its leadership in the industry.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Product catalog with intuitive navigation and ease of finding information for quoting.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Administrator profile for Calena to manage the presented catalog content, make updates, and modifications.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Direct contact and online quoting to facilitate the conversion of visitors into customers.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "05",
                paragraph: "Intuitive supplier view with direct access to the product catalog for customers.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
              },
          ],
          '7': [
            {
              title: "01",
              paragraph: "Website that visually reflects the prestige and educational spirit of the institution.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Quickly start the admission process within the site.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Provide an educational blog open to the public to learn about the school experience.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Provide intuitive navigation to know each educational level of the school.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "05",
                paragraph: "Easy and direct contact through simple forms for any information.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
              },
          ],
          '8': [
            {
              title: "01",
              paragraph: "Experiment with different instruments and learn about musical rhythms and patterns interactively.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Progression system that adapts to the player's skill level, providing appropriate challenges.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Stimulation of auditory and visual senses with an immersive and memorable experience.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Educational innovation with the integration of technology in the musical learning process.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "05",
                paragraph: "Dashboard with statistics of the progress of the participants in the video game.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
              },
          ],
          '9': [
            {
              title: "01",
              paragraph: "Dynamic catalog listing properties with advanced search and filtering capabilities.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "02",
              paragraph: "Mortgage calculator and a secure appointment scheduling system for advice.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "03",
              paragraph: "Easy and intuitive form for possible property sale within the company catalog.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
              title: "04",
              paragraph: "Administrator profile to edit, add and delete some of the website content.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "05",
                paragraph: "Easy to use with a modern and intuitive interface that adapts to various devices.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
              },
          ],
          '10': [
            {
              title: "01",
              paragraph: "Facilitate online appointment scheduling for various psychological services, including in-person and virtual.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "02",
                paragraph: "Showcase the foundation's work, its solidarity campaigns and educational workshops.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
            },
            {
                title: "03",
                paragraph: "Integrate a blogging platform where they can publish articles about mental health.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
            },
            {
              title: "04",
              paragraph: "Easy finding of services and direct contact information.",
              bgColor: "rgb(247, 247, 247)",
              textColor: "black",
            },
            {
                title: "05",
                paragraph: "Attractive and reliable website making its mission known.",
                bgColor: "rgb(247, 247, 247)",
                textColor: "black",
            },
          ],
      };

      const techs = {
        tech1: [
          {
            logo: logo3,
            name: "CSS3",
          },
          {
            logo: logo4,
            name: "HTML5",
          },
          {
            logo: logo5,
            name: "JavaScript",
          },
          {
            logo: logo9,
            name: "Bootstrap",
          },
          {
            logo: logo10,
            name: "Github",
          },
        ],
        tech2: [
            {
              logo: logo3,
              name: "CSS3",
            },
            {
              logo: logo4,
              name: "HTML5",
            },
            {
              logo: logo5,
              name: "JavaScript",
            },
            {
                logo: logo6,
                name: "Django",
            },
            {
                logo: logo13,
                name: "Swift",
            },
            {
                logo: logo9,
                name: "Bootstrap",
            },
            {
                logo: logo10,
                name: "Github",
            },
        ],
        tech3: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
        tech4: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
        tech5: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
        tech6: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo6,
                name: "Django",
              },
              {
                logo: logo7,
                name: "Sqlite",
              },
              {
                logo: logo8,
                name: "Heroku",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
        tech7: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
        tech8: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo6,
                name: "Django",
              },
              {
                logo: logo7,
                name: "Sqlite",
              },
              {
                logo: logo14,
                name: "Azure",
              },
              {
                logo: logo15,
                name: "Unity",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
        tech9: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
              {
                logo: logo11,
                name: "Supabase",
              },
              {
                logo: logo12,
                name: "Sql",
              },
        ],
        tech10: [
            {
                logo: logo3,
                name: "CSS3",
              },
              {
                logo: logo4,
                name: "HTML5",
              },
              {
                logo: logo5,
                name: "JavaScript",
              },
              {
                logo: logo9,
                name: "Bootstrap",
              },
              {
                logo: logo10,
                name: "Github",
              },
        ],
      };      

      const headerContent = {
        '1': {
          title: "Fratelli's Helados",
          date: "2021 - ongoing",
          image: imagen,
          mainContent: (<p className="header-text">
          {" "}<span className="underlined-text">Fratelli's </span> is a soda
          fountain and ice cream company that aimed to make a technological 
          impact to promote its products and services. That's why {" "}<span className="underlined-text">Amoxtli 
          Web Developers </span>was hired to create a visually appealing and
          functional website. The design reflects the vintage and sophisticated 
          aesthetics of the brand, with a color palette that evokes the creaminess
          and richness of its products. The site features intuitive navigation
          that guides visitors through all the brand's services, its diverse menu,
          and store locations. It also includes an events section and an interactive 
          contact form to facilitate event organization and communication with customers.
          </p>),
          sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
          The result is a website that not only highlights {" "}<span className="underlined-text" style={{color:"#fa1f6f"}}>Fratelli's </span> identity but also enhances the user experience, facilitates event management, and improves the brand's online presence.
          </p>),
          quote: (
            <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                    <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                    Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                    Lorem impsum Lorem impsum <br />
                    Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                </p></blockquote>
          ),
          citation: (
            <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Fratelli's Helados</p></cite>
          ),
          href: "https://fratellishelados.com/",
        },
        '2': {
            title: "CyberBook App",
            date: "2020",
            image: imagen2,
            mainContent: (<p className="header-text">
            The aim was to have a mobile application that would make it easier to reserve
            spaces (classrooms, laboratories, meeting rooms, etc.), equipment and software
            in the Tec de Monterrey Cybersecurity Hub. To this end, {" "}<span className="underlined-text">Amoxtli Web Developers</span>
            contributed to develop an intuitive and easy-to-use mobile app called {" "}<span className="underlined-text">CyberBook </span>that not only
            simplifies the booking process, but also provides users with the ability to
            create personalized accounts, which optimizes the booking experience and ensures
            security. of the information. Users can easily access the available services,
            allowing them to manage their reservations efficiently and securely. Likewise,
            it was provided with a web page where Hub administrators can add or delete services and users.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result was the creation of a mobile application that facilitates the reservation of spaces and equipment in the Tec de Monterrey Cybersecurity Hub. The project offers an optimal user experience, guaranteeing security and efficient management of available resources.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Fratelli's Helados</p></cite>
            ),
            href: "/client-stories",
        },
        '3': {
          title: "CMCYA",
          date: "2020 - ongoing",
          image: imagen3,
          mainContent: (<p className="header-text">
          {" "}<span className="underlined-text"> CMCYA </span>is a leading tax advisory and accounting services firm that 
          sought to strengthen its online presence and showcase its professionalism. {" "}<span className="underlined-text">Amoxtli
           Web Developers</span> was chosen to develop a website that would communicate the precision
            and dedication of the M&C&A team. The page offers smooth and clear navigation, 
            allowing users to easily explore the wide range of services offered, from audits 
            to legal and tax advice. The website is equipped with modern features, including 
            a content management system for the client to update testimonials and services, 
            as well as an interactive map and a customized contact form that enhances the 
            acquisition of potential clients.
          </p>),
          sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
          The result is a website that enhances the reputation of {" "}<span className="underlined-text">CMCYA</span>, improves interaction with current and potential clients, and reinforces their position as leaders in the accounting and tax sector.
          </p>),
          quote: (
            <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                    <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                    Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                    Lorem impsum Lorem impsum <br />
                    Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                </p></blockquote>
          ),
          citation: (
            <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>CMCYA</p></cite>
          ),
          href: "https://mgservicio2023.github.io/contadores.github.io/",
        },
        '4': {
            title: "Hilitos Lili",
            date: "2021 - ongoing",
            image: imagen4,
            mainContent: (<p className="header-text">
              {" "}<span className="underlined-text">Hilitos Lili</span> is a fashion workshop dedicated to providing personalized clothing
              design and high-end tailoring services, aimed to establish a closer connection
              with its potential clients.{" "}<span className="underlined-text">Amoxtli Web Developers</span>takes pride in presenting
              the developed website that reflects the craftsmanship and attention to detail
              of the brand, enhancing the business's impact in the technological world. With
              an intuitive and elegant interface, the site offers an optimized user experience
              for clients seeking quality tailoring services. Providing a direct service
              request through simple forms and testimonials fosters approachability and trust
              in the business.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result is An attractive and functional website that has increased the online presence of{" "}<span className="underlined-text">Hilitos Lili</span>and has significantly improved interaction with customers.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Hilitos Lili</p></cite>
            ),
            href: "https://hilitoslili.com/",
          },
          '5': {
            title: "Salomon Photos",
            date: "2021 - ongoing",
            image: imagen5,
            mainContent: (<p className="header-text">
              {" "}<span className="underlined-text">Salomon Photo</span>a client as a professional photographer needed a website to showcase
              their work, attract clients and manage enquiries.{" "}<span className="underlined-text">Amoxtli Web Developers</span> was hired
              to meet the challenge of creating a website that reflects their personal brand,
              that was visually striking and at the same time functional for users. It highlights
              a portfolio of your work done, in addition to facilitating the management of inquiries
              and reservations for photographic services, all within a clean, modern and easy-to-use
              interface. The essence of his art was captured in a web design that was both a reflection
              of his creative vision and an accessible portal for his clients and admirers.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result was a professional, highly functional website that significantly improved the photographer's online presence, increased their search engine visibility, and provided an attractive and accessible platform for the display of their portfolio.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Salomon Photo</p></cite>
            ),
            href: "https://salomon-mtz.github.io/sp.github.io/",
          },
          '6': {
            title: "Calena",
            date: "2023 - ongoing",
            image: imagen6,
            mainContent: (<p className="header-text">
              {" "}<span className="underlined-text">Calena S.A. de C.V.</span> a well-established company in the bearings and
              power transmission industry, required a digital overhaul to reflect its growth
              and leadership in the market. That's why {" "}<span className="underlined-text">Amoxtli Web Developers</span> was chosen for
              the development of a website that not only serves as an online catalog but also
              communicates their commitment to quality and customer service. We took on the
              challenge of designing a platform that is both informative and user-friendly while
              being efficient in showcasing an extensive inventory open for direct quoting with
              a shopping cart. Additionally, we aimed to facilitate direct communication for product
              inquiries through channels such as WhatsApp and email.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result was a successfully developed user-friendly and responsive website for {" "}<span className="underlined-text">Calena.</span> This significantly enhanced brand presentation, product catalog accessibility, customer interaction, and boosted sales and market visibility.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Calena</p></cite>
            ),
            href: "https://www.calena.com.mx/",
          },
          '7': {
            title: "Sucre",
            date: "2021 - ongoing",
            image: imagen7,
            mainContent: (<p className="header-text">
              {" "}<span className="underlined-text">Colegio Sucre</span>an academic institution with a legacy of excellence
              that wanted to rejuvenate its online presence.{" "}<span className="underlined-text">Amoxtli Web Developers</span> took on the 
              project where they redesigned their existing website on a large scale to create a
              vibrant, easy-to-use and informative platform that resonates with students, teachers
              and prospective families. The school's programs, achievements and community involvement
              are highlighted. There is the option of carrying out the admission process within the
              site as well as the appointments corresponding to the exams. In addition to an educational
              blog with connection to the institution's social networks.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result was a redesigned {" "}<span className="underlined-text">Colegio Sucre</span> website that modernized the school's online presence, improving user experience and accessibility. With intuitive and responsive design, as well as greater user engagement.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Sucre</p></cite>
            ),
            href: "https://colegiosucre.netlify.app/",
          },
          '8': {
            title: "Boom Percussion",
            date: "2020",
            image: imagen8,
            mainContent: (<p className="header-text">
              A creative and educational video game was needed that provides users with a unique
              interactive experience, where they could not only enjoy music, but also learn in a
              progressive and participatory way. {" "}<span className="underlined-text">Amoxtli Web Developers</span>identified the opportunity
              to merge the passion for technology with music education, thus creating {" "}<span className="underlined-text">Boom Percussion</span> an innovative
              and educational video game where through an intuitive and attractive interface, players
              have the opportunity to interact with various percussion instruments and learn about
              rhythms. progressively. With the help of a website where the school can see the scores
              and progress of each of the participants within the video game, in addition to their
              progress statistics.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result was a video game that represents the convergence between technology and music education, offering a unique and valuable experience for users that not only entertains, but also enriches the understanding and appreciation of music in the contemporary digital world.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Boom Percussion</p></cite>
            ),
            href: "/client-stories",
          },
          '9': {
            title: "Asesorista",
            date: "2023 - ongoing",
            image: imagen9,
            mainContent: (<p className="header-text">
              {" "}<span className="underlined-text">Asesorista</span> a company that guides clients in their home search was looking for a site
              with great visual appeal, solid functionality and an easy-to-use interface for both
              real estate agents and buyers or anyone who needs mortgage advice. This is why {" "}<span className="underlined-text">Amoxtli
              Web Developers </span> was tasked with creating a comprehensive real estate platform that would
              serve as a one-stop solution for buying, selling and renting properties. Offering a
              site with a potential property catalog and a simulation calculator for mortgage credit.
              In addition to an administrator profile to manage their website and properties,
              as well as contact forms for sales within the company.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result is a visually stunning and highly functional real estate platform that enhances the client's online presence. It has an efficient property search system, simple navigation and interactive tools such as the mortgage credit simulator.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Asesorista</p></cite>
            ),
            href: "https://asesorista.netlify.app/",
          },
          '10': {
            title: "Psique & Ser",
            date: "2023 - ongoing",
            image: imagen10,
            mainContent: (<p className="header-text">
              {" "}<span className="underlined-text">Psique & Ser A.C.</span> is an association dedicated to providing mental health services, sought
              to establish a digital platform to reach a broader audience and improve access to its
              services. So {" "}<span className="underlined-text">Amoxtli Web Developers</span> took on the challenge of creating a website that would
              serve not only as a portal for information about their therapeutic services, but also as a
              hub for mental health education and community support. Interaction between clients and therapists
              will be facilitated and its impact demonstrated through various solidarity campaigns and
              educational initiatives. In addition to allowing users to easily find and interact with those
              who make up the clinical network.
            </p>),
            sideContent: (<p className="header-text" style={{color:"rgb(168, 168, 168)", fontSize:"15px"}}>
            The result was a website that offers information for people seeking psychological services, with simple navigation, calls to action, a safe and easy appointment system, a blog with valuable content and information on the organization's campaigns and social events.
            </p>),
            quote: (
              <blockquote><p style={{fontSize:"45px", textAlign:"left"}}>
                      <FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                      Lorem impsum <span className="underlined-text">Lorem</span> impsum <br />
                      Lorem impsum Lorem impsum <br />
                      Lorem <span className="underlined-text">impsum.</span><FormatQuoteIcon fontSize="large" style={{ marginBottom: "1rem"}} />
                  </p></blockquote>
            ),
            citation: (
              <cite> <p style={{textAlign:"right", paddingRight:"20px"}}>Psique & Ser</p></cite>
            ),
            href: "https://psiqueyser.org/",
          },
      };

      const selectedTechStack = techs[`tech${id}`];
      const { title, date, image, mainContent, sideContent, quote, citation, href } = headerContent[id] || {};
      const selectedCards = cardsData[id] || [];

  return (
    <Box className="main-header">
        <Grid container spacing={2} className="grid-edited">
            <Grid item xs={12} sm={9} md={9}>
                <h1 className="header-title" style={{ textAlign: "left" }}>
                    {title || 'Default Title'} {}
                </h1>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
                <p className="date-case">{date || 'Default Date'}</p> {}
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: "5rem" }}>
            <Grid item xs={12} sm={12} md={12} sx={{justifyContent: "center", display: "flex"}}>
                <Card sx={{ borderRadius: "2rem", backgroundColor: "rgb(247, 247, 247)", width: "100%" }}>
                    <CardContent sx={{textAlign: "left" }} className="card-edited">
                        <CardMedia
                            component="img"
                            image={image}
                            style={{ borderRadius: "1rem" }}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <h2 className="section-title" style={{textAlign: "left"}}>Case</h2>
        <Grid container spacing={10} style={{paddingBottom:"40px"}}>
            <Grid item xs={12} sm={12} md={12} lg={8}>
                {}
                {mainContent || <p>Default Main Content</p>}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                {}
                {sideContent || <p>Default Side Content</p>}
            </Grid>
        </Grid>
        <h2 className="section-title" style={{paddingTop:"30px", textAlign: "left"}}>Major Goals</h2>
        <div style={{ marginLeft: "1rem", marginRight: "0", marginBottom: "5rem"}}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1070: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                className="mySwiper"
                style={{paddingBottom: "20px"}}
            >
                {selectedCards.map((card, index) => (
                <SwiperSlide key={index} style={{ justifyContent: "center", display: "flex"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} sx={{justifyContent: "center", display: "flex"}}>
                            <MajorCard
                                title={card.title}
                                paragraph={card.paragraph}
                                bgColor={card.bgColor}
                                textColor={card.textColor}
                                cardWidth={"100%"}
                            />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{paddingBottom:"60px"}}>
                {quote || <p>Default Quote</p>}
                {citation || <p>Default Citation</p>}
            </Grid>
        </Grid>
    
        <h2 className="section-title" style={{textAlign: "left"}}>Tech Stack</h2>
        <Grid container className="technology-logos">
            {selectedTechStack && selectedTechStack.map((tech, index) => (
                <TechStack
                    key={index}
                    logo={tech.logo}
                    name={tech.name}
                />
            ))}
        </Grid>
        <Grid container spacing={7} sx={{ marginBottom: "5rem" }} style={{paddingTop:"90px"}}>
            <Grid item xs={12} sm={6} md={6} sx={{justifyContent: "center", display: "flex"}}>
                <a href="/client-stories" style={{ textDecoration: "none", color: "#fa206f" }}>
                    <Card sx={{ borderRadius: "2rem", backgroundColor: "rgb(247, 247, 247)", width: "100%" }}>
                        <CardContent sx={{ margin: "2rem", textAlign: "left"}}>
                        <p style={{ paddingTop:"30px", color: "#fa206f", fontWeight: "20px"}}>{" "}<span className="underlined-text">
                            Explore Our Creativity
                        </span></p>
                        <p style={{ color: "black", paddingTop:"30px" }}>Dive into our web design portfolio to see where innovation pairs with creativity. Explore our portfolio and see the difference!</p>
                        </CardContent>
                    </Card>
                </a>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{justifyContent: "center", display: "flex"}}>
                <a href={href || "#default"} style={{ textDecoration: "none", color: "#fa206f" }}>
                    <Card sx={{ borderRadius: "2rem", backgroundColor: "rgb(247, 247, 247)", width: "100%" }}>
                        <CardContent sx={{ margin: "2rem", textAlign: "left"}}>
                        <p style={{ paddingTop:"30px", color: "#fa206f", fontWeight: "20px"}}>{" "}<span className="underlined-text">
                            Get to know our work
                        </span></p>
                        <p style={{ color: "black", paddingTop:"30px" }}>Visit our website to see how innovation and creativity come together in our work. Get to know us and see what makes us different!</p>
                        </CardContent>
                    </Card>
                </a>
            </Grid>
        </Grid>
    </Box>
  );
}
export default CasesView;
