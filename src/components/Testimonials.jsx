import { getReviewDocument } from "@/lib/collections";
import React, { useEffect, useState } from "react";

function Testimonials({ review }) {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      const reviewDoc = await getReviewDocument(review);
      if (reviewDoc.exists()) {
        setReviewData(reviewDoc.data());
      }
    };

    fetchReviewData();
  }, [review]); // Add reviewId as a dependency to useEffect

  // Check if reviewData is null before accessing its properties
  if (!reviewData) {
    return <span className="loading loading-spinner loading-md"></span>; // You can replace this with a loading indicator
  }
  return (
    
    <div className="card w-56 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{reviewData.name}</h2>
    <div className="">{reviewData.role}</div>
    <p className="">{reviewData.review}</p>
    <div className="">{reviewData.link}</div>
    </div>
  </div>
  
  );
}

export default Testimonials;
