import { getProjectDocument } from "@/lib/collections";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProjectCard({ projectId }) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      const projectDoc = await getProjectDocument(projectId);
      if (projectDoc.exists()) {
        setProjectData(projectDoc.data());
      }
    };

    fetchProjectData();
  }, [projectId]); // Add projectId as a dependency to useEffect

  // Check if projectData is null before accessing its properties
  if (!projectData) {
    return <span className="skeleton w-[90%] h-32"></span>; // You can replace this with a loading indicator
  }

  return (
    <div className="card card-side flex-col md:flex-row bg-base-300 shadow-xl m-2 px-2">
      <figure>
        <img src={projectData.imageUrl} alt={projectData.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectData.title}</h2>
        <p>
          <h2 className="font-bold">Description:</h2>
          {projectData.description}
        </p>
        <p>
          <h2 className="font-bold">Role:</h2>
          {projectData.role}
        </p>
        <div className="card-actions justify-end">
          <Link href={projectData.link} className="btn btn-primary">
            Check the Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
