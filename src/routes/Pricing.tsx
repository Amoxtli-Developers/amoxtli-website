import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PricingPlans from "../Components/PricingPlans/PricingPlans";
import Preloader from "../Components/Preloader";
import FloatingButton from "../Components/FloatingButton";
import ChatModal from "../Components/ChatModal";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Plan {
  name: string;
  price: string;
  per: string;
  description: string;
  features: { label: string; value: string | JSX.Element }[];
  buttonClass?: string;
  popular?: boolean;
  buttonLink?: string;
}

const plans: Plan[] = [
  {
    name: "Single Page",
    price: "$4,500",
    per: "Mx",
    description:
      "Perfect for getting started with basic features and limited resources.",
    features: [
      { label: "Number of Pages", value: "1" },
      {
        label: "SSL Certificate",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "CTA Banners",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "1 Year Hosting Support",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Contact Form",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Social Media Buttons",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Resposive Design",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      { label: "Database", value: "-" },
      { label: "Banwidth & Online Storage", value: "5 GB" },
      { label: "User Accounts", value: "-" },
      { label: "Admin Panel", value: "-" },
      { label: "Custom Domain Integration", value: ".com" },
    ],
    buttonClass: "text-blue-600 hover:text-blue-700",
    buttonLink:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-Z0m1jTqkrAMsmX92MdfF--07g4sEkRlNqkxPwbCsd5vRnbtWFSMMoKaHHsNO0MJTAgZ0Lr8m",
  },

  {
    name: "Landing Page",
    price: "$8,000",
    per: "Mx",
    description:
      "Our most popular plan, offering extensive features for growing businesses.",
    features: [
      { label: "Number of Pages", value: "1 - 5" },
      {
        label: "SSL Certificate",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "CTA Banners",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "1 Year Hosting Support",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Contact Form",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Social Media Buttons",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Resposive Design",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      { label: "Database", value: "1 GB" },
      { label: "Banwidth & Online Storage", value: "5 GB" },
      {
        label: "User Accounts",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Admin Panel",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      { label: "Custom Domain Integration", value: ".com or .mx" },
    ],
    buttonClass: "bg-yellow-500 text-white hover:bg-yellow-600",
    popular: true,
    buttonLink:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ194tE2ge5Fp80T3yPfH489R2KU6hQTbvfNSceg477tPE0wFWk6kp6tdbb4K2B5-Pd7zJPYz0NB",
  },
  {
    name: "Shopify Store",
    buttonLink:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Mdzy_Bpm60JI7B4PLy94RvT3iOX49-_FLtvIwBVGO2LyhytH9-0Bn_hyVcIBhCBuAp0aNhl9d",
    price: "$12,500",
    per: "Mx",
    description:
      "Full-featured plan for large-scale operations requiring maximum resources.",
    features: [
      { label: "Number of Pages", value: "1" },
      {
        label: "SSL Certificate",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "CTA Banners",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "1 Year Hosting Support",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Contact Form",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Social Media Buttons",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Resposive Design",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      { label: "Database", value: "unlimited" },
      { label: "Banwidth & Online Storage", value: "unlimited" },
      {
        label: "User Accounts",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Admin Panel",
        value: (
          <svg
            className="w-5 h-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        label: "Custom Domain Integration",
        value: "price depends on shopify's domain center",
      },
    ],
    buttonClass: "text-blue-600 hover:text-blue-700",
  },
];

const Pricing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />

      {isLoading && <Preloader />}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <section
          className="bg-white sm:py-16 lg:py-24 main-header"
          style={{ paddingBottom: 0 }}
        >
          <div className="text-center">
            <Typography
              className="header-title"
              sx={{
                textAlign: "center",
                fontSize: { xs: "60px", md: "100px" },
                fontFamily: "Poppins",
                paddingTop: 0,
              }}
            >
              <span className="underlined-text">Amoxtli</span> Plans
            </Typography>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 mb-16">
              Choose the perfect plan tailored to your needs. Whether you're
              just getting started or looking to scale, our plans offer the
              flexibility and features to help you succeed. Dive into the
              details and pick the best fit for you!
            </p>
          </div>

          <PricingPlans />

          <Typography
            sx={{
              fontSize: { xs: "24px", md: "36px", lg: "46px" },
              marginBottom: "4rem",
              fontFamily: "Poppins",
              textAlign: "center",
              mt: { xs: "4rem", md: "4rem", lg: 16 },
            }}
          >
            Compare and choose the best plan for your{" "}
            <span className="underlined-text">business</span>
          </Typography>

          {/* lg+ */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-8 pr-4"></th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-8 text-center ${
                        plan.popular ? "rounded-t-xl" : ""
                      }`}
                      style={{
                        backgroundColor: plan.popular
                          ? "#fa206f"
                          : "transparent",
                      }}
                    >
                      <span
                        className={`text-base font-medium ${
                          plan.popular
                            ? "px-4 py-2 text-base font-medium text-white bg-[#fa206f] rounded-full"
                            : "text-[#FFADD3]"
                        }`}
                      >
                        {plan.name}
                      </span>

                      <p
                        className={`mt-6 text-6xl font-bold ${
                          plan.popular ? "text-white" : "text-[#fa206f]"
                        }`}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={`mt-2 text-base font-normal ${
                          plan.popular ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {plan.per}
                      </p>
                      <Button
                        variant="text"
                        sx={{
                          marginTop: "16px",
                          textTransform: "none",
                          fontSize: "18px",
                          color: plan.popular ? "white" : "#fa206f",
                          fontFamily: "Poppins, Arial, sans-serif",
                          fontWeight: 600,
                          ":hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                        href={plan.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer" // This is recommended for security reasons when using target="_blank"
                        component="a" // Explicitly render as an <a> tag
                      >
                        Get Started <ArrowForward sx={{ marginLeft: 2 }} />
                      </Button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, index) => (
                  <tr key={index}>
                    <td className="py-4 pr-4 font-medium border-b border-gray-200">
                      {feature.label}
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={plan.name}
                        className={`px-4 py-4 text-center border-b border-gray-200 ${
                          plan.popular ? "text-white border-white/20" : ""
                        }`}
                        style={{
                          backgroundColor: plan.popular
                            ? "#fa206f"
                            : "transparent",
                        }}
                      >
                        {plan.features[index].value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* xs to lg */}
          <div className="block mt-12 border-t border-b border-gray-200 lg:hidden">
            <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
              {plans.map((plan) => (
                <div key={plan.name} className="px-1 py-2">
                  <span
                    className={`text-sm font-medium ${
                      plan.popular ? "text-[#fa206f] " : "text-[#FFADD3]"
                    }`}
                  >
                    {plan.name}
                  </span>
                  <p
                    className={`mt-2 text-xl font-bold ${
                      plan.popular ? "text-[#fa206f]" : "text-[#fa206f]"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <span className="mt-1 text-sm font-normal text-gray-500">
                    {plan.per}
                  </span>
                  <br />
                  <Button
                    variant="text"
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",
                      color: "#fa206f",
                      fontFamily: "Poppins, Arial, sans-serif",
                      fontWeight: 600,
                      ":hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    href={plan.buttonLink}
                    target="_blank" // Ensures the link opens in a new tab
                    rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                    component="a" // Explicitly renders the Button as an <a> tag
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>

            {plans[0].features.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="px-1 py-3 sm:px-2">
                  <p className="font-semibold text-center">{feature.label}</p>
                </div>
                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                  {plans.map((plan) => (
                    <div key={plan.name} className="px-1 py-2">
                      {plan.features[index].value}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </motion.div>

      <FloatingButton onClick={handleOpenModal} />
      <ChatModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <Footer />
    </>
  );
};

export default Pricing;
