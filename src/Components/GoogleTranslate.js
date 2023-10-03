// import React, { useEffect } from "react";

// const GoogleTranslate = () => {
//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         autoDisplay: false,
//       },
//       "google_translate_element"
//     );
//   };

//   useEffect(() => {
//     const addScript = document.createElement("script");
//     addScript.setAttribute(
//       "src",
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     );
//     document.body.appendChild(addScript);
//     window.googleTranslateElementInit = googleTranslateElementInit;
//   }, []);

//   return (
//     <>
//       <span id="google_translate_element"></span>
//     </>
//   );
// };

// export default GoogleTranslate;
