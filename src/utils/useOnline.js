import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, SetIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      SetIsOnline(true);
    };
    const handleOffline = () => {
      SetIsOnline(false);
    };
    console.log("useeffect in the useOnline hook-Event Added");
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      console.log("useeffect in the useOnline hook - eventRemove");
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
