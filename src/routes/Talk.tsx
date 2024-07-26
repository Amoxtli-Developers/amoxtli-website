import Preloader from '../Components/Preloader';
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import TalkToUsForm from "../Components/TalkToUsForm";

function Talk() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true when the location changes
    setIsLoading(true);

    // Simulate an async loading process like an API call
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust time as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
    {isLoading && <Preloader />}
      <TalkToUsForm />
    </>
  );
}

export default Talk;
