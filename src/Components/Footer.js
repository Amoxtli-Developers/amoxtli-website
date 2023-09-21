
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer-container">
      <aside className="link-wrapper mail-container">
        <a href="mailto:amoxtlidev@gmail.com">
          <p>Amoxtli Web Developers</p>
        </a>
      </aside>
      <aside className="link-wrapper">
        <a
          className="icon"
          href="https://www.facebook.com/profile.php?id=61551487858288"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/company/amoxtli-web-developers/?viewAsMember=true"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/amoxtli.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
