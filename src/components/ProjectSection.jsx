import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getProjectIds, getReviewstIds, getTechtIds } from "@/lib/collections";
import Testimonials from "./Testimonials";
import FeedbackForm from "./FeedbackForm";
import TechStack from "./TechStack";

function ProjectSection() {
  const [projectIds, setProjectIds] = useState([]);
  const [reviewIds, setReviewIds] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState(3);
  const [techIds, setTech] = useState([]);

  useEffect(() => {
    const fetchProjectIds = async () => {
      const ids = await getProjectIds();
      setProjectIds(ids);
    };
    const fetchReviewIds = async () => {
      const ids = await getReviewstIds();
      setReviewIds(ids);
    };

    const fetchTechIds = async () => {
      const ids = await getTechtIds();
      setTech(ids);
    };

    fetchProjectIds();
    fetchReviewIds();
    fetchTechIds();
  }, []);

  const showMoreProjects = () => {
    // Update the number of displayed projects by adding 3
    setDisplayedProjects((prevDisplayedProjects) => prevDisplayedProjects + 3);
  };

  return (
    <div className="bg-base-100 py-2">
      <div className="flex justify-center items-center rounded-sm bg-gray-900 text-3xl p-2 mx-auto">
        About my work
      </div>
      <h2 className="flex justify-left items-center text-2xl p-2 mx-5 underline">
        {" "}
        Projects:{" "}
      </h2>
      <div className="mx-5 animate-rotate-x animate-once" >
        {projectIds.slice(0, displayedProjects).map((id) => (
          <ProjectCard key={id} projectId={id} />
        ))}
        {projectIds.length > displayedProjects && (
          <button onClick={showMoreProjects} className="btn btn-primary mt-2">
            Show More Projects
          </button>
        )}
      </div>
      <h2 className="flex justify-left items-center text-2xl p-2 mx-5 underline">
        {" "}
        TechStack:{" "}
      </h2>
      <div className="flex bg-neutral rounded-box mx-5 overflow-hidden">
        <div className="flex flex-wrap p-4 space-x-4 justify-center items-center">
          {techIds.map((id) => (
            <div key={id} className="animate-fade-left animate-duration-[5000ms] animate-delay-[5000ms] animate-ease-in animate-normal animate-fill-forwards">
              <TechStack tech={id} />
            </div>
          ))}
        </div>
      </div>
      <h2 className="flex justify-left items-center text-2xl p-2 mx-5 underline">
        {" "}
        Hear from Collaboratos and Clients:{" "}
      </h2>
      <div className="bg-neutral rounded-box mx-5">
        <div className="carousel carousel-center p-4 space-x-4 justify-center items-center">
          {reviewIds.map((id) => (
            <div key={id} className="carousel-item">
              <Testimonials review={id} />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center m-2">
          Enjoyed our collaboration ? Feeling satified with my services ?
          <label
            htmlFor="my_modal_6"
            className="btn btn-outline btn-disabled w-2/12 m-2"
          >
            Share Your Feedback (Soon)
          </label>
        </div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
