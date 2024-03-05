import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import "./PricingCard.css";
import { Link } from "react-router-dom";

export default function PricingCard({ box_type_text }) {
  return (
    <div className="">
      <div className="box_container">
        <header>
          <h3 className="content_type">
            {box_type_text === "One Page"
              ? "One Page"
              : box_type_text === "Landing Page"
              ? "Landing Page"
              : "eCommerce"}
          </h3>
          <h4 className="content_number">
            <p className="from-text">from</p>
            <b className="dollar">$</b>

            {box_type_text === "One Page"
              ? "3,000"
              : box_type_text === "Landing Page"
              ? "6,500"
              : "9,500"}

            <span>/MXN</span>
          </h4>
        </header>
        {/* list content */}
        <main className="main_content">
          <div className="main_content_list">
            <p>
              {/* <BsCheckLg className="icons" /> */}
              <CheckIcon className="icons" />
              {box_type_text === "One Page" ? (
                "Basic one-page website with essential information."
              ) : box_type_text === "Landing Page" ? (
                <b>Customized landing page.</b>
              ) : (
                <b>Multi-page e-commerce website with product listings.</b>
              )}
            </p>
            <p>
              {/* <BsCheckLg className="icons" /> */}
              <CheckIcon className="icons" />
              {box_type_text === "One Page"
                ? "Call to Action (CTA)"
                : box_type_text === "Landing Page"
                ? "Call to Action (CTA)"
                : "Call to Action (CTA)"}
            </p>

            <p>
              <CheckIcon className="icons" />
              Mobile responsiveness for optimal viewing on all devices.
            </p>

            <p>
              <CheckIcon className="icons" />
              SEO optimization for improved visibility.
            </p>
            <p
              className={
                box_type_text === "One Page" ? "text_muted" : "notmuted"
              }
            >
              {box_type_text === "One Page" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}
              Analytics to track website traffic.
            </p>
            <p
              className={
                box_type_text === "One Page" ? "text_muted" : "notmuted"
              }
            >
              {box_type_text === "One Page" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}
              Product/Service Showcase
            </p>

            <p
              className={
                box_type_text === "One Page" ? "text_muted" : "notmuted"
              }
            >
              {box_type_text === "One Page" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}

              {box_type_text === "eCommerce" ? (
                <span>Social Media Integration</span>
              ) : (
                "Social Media Integration"
              )}
            </p>

            <p
              className={
                box_type_text === "One Page" || box_type_text === "Landing Page"
                  ? "text_muted"
                  : "notmuted"
              }
            >
              {box_type_text === "One Page" ||
              box_type_text === "Landing Page" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}
              Shopping Cart
            </p>
          </div>
        </main>
        <div style={{ marginTop: "2rem" }}>
          <Link
            target="_blank"
            to={"https://calendly.com/amoxtlidev/tuayi"}
          >
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span style={{ marginLeft: "2.5rem" }} className="button-text">
                Book a call
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
