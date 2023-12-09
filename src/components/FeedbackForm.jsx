import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '@/lib/firebase';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('client'); // Add state for role
  const [review, setReview] = useState('');
  const [link, setLink] = useState('');
  const [tooltip, setTooltip] = useState(''); // Add state for tooltip

  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!name || !role || !review) {
      console.error("Name, role, and review are required fields.");
      return;
    }

    const db = getFirestore(app);
    const reviewsCollection = collection(db, "reviews");

    try {
      // Add review to Firestore
      await addDoc(reviewsCollection, {
        name,
        role,
        review,
        link,
      });
      console.log("Review added successfully");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);

    // Set tooltip based on role
    if (e.target.value === 'client') {
      setTooltip("If you're a client, leave the link to the website I've worked on for you.");
    } else if (e.target.value === 'collaborator') {
      setTooltip("If you're a collaborator, you can leave a portfolio or a website that we worked on together.");
    }
  };

  return (
    <div className="modal-box">
      <div>
        <h1>Leave your Feedback</h1>
        <form className="card-body" onSubmit={handleAddReview}>
          <div className="form-control">
            <div>
              <label className="label justify-normal"> Name:<span className='text-red-600'>*</span></label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label justify-normal"> Role:<span className='text-red-600'>*</span></label>
              <select
                value={role}
                onChange={handleRoleChange}
                className="select select-bordered max-w-xs"
                required
              >
                <option value="client">Client</option>
                <option value="collaborator">Collaborator</option>
              </select>
            </div>
            <div>
              <label className="label justify-normal">Review<span className='text-red-600'>*</span> </label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className="label">Link:</label>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="input input-bordered"
              />
              <span className="justify-start text-sm"><span className='text-red-600'>*</span> {tooltip}</span>
            </div>
          </div>
          <div className='flex justify-between'>
          <button type="submit" className="btn btn-primary w-32">
            Add Review
          </button>
      <div className="modal-action m-0">
        <label htmlFor="my_modal_6" className="btn btn-secondary">
          Close!
        </label>
      </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
