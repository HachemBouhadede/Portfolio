import { getTechnDocument } from "@/lib/collections";
import React, { useEffect, useState } from "react";

function TechStack({ tech }) {
  const [techData, setTechData] = useState(null);

  useEffect(() => {
    const fetchTechData = async () => {
      const techDoc = await getTechnDocument(tech);
      if (techDoc.exists()) {
        setTechData(techDoc.data());
      }
    };

    fetchTechData();
  }, [tech]);


  // Check if techData is null before accessing its properties
  if (!techData) {
    return <span className="loading loading-spinner loading-md"></span>; // You can replace this with a loading indicator
  }

  return (
    <div className="w-20 animate-spin animate-once">
      <figure>
        <img src={techData.techLogo} alt={techData.techName} />
      </figure>
    </div>
  );
}

export default TechStack;
