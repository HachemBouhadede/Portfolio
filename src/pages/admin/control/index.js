import { useState } from "react";
import { useRouter } from "next/router";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { app } from "src/lib/firebase.js";

function Admin() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [role, setRole] = useState(null);

  const [techName, setTechName] = useState("");
  const [techLogo, setTechLogo] = useState("");

  const [menuSelection, setMenuSelection] = useState("project");

  const db = getFirestore(app);
  const projectsCollection = collection(db, "projects");
  const techCollection = collection(db, "technologies");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleTechLogoChange = (e) => {
    const file = e.target.files[0];
    setTechLogo(file);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();

    try {
      // Upload image to Firebase Storage
      const storage = getStorage(app);
      const storageRef = ref(storage, `projectImages/${image.name}`);
      await uploadBytes(storageRef, image);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Add project to Firestore
      await addDoc(projectsCollection, {
        title,
        link,
        description,
        imageUrl,
        role,
      });
      console.log("Document added successfully:");

    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleAddTech = async (e) => {
    e.preventDefault();

    try {
      if (!techLogo) {
        console.error("No image selected for technology stack");
        return;
      }

      // Upload image to Firebase Storage
      const storage = getStorage(app);
      const storageRef = ref(storage, `techImages/${techLogo.name}`);
      await uploadBytes(storageRef, techLogo);

      // Get the download URL of the uploaded image
      const techLogoUrl = await getDownloadURL(storageRef);

      // Add technology stack to Firestore
      await addDoc(techCollection, {
        techName,
        techLogo: techLogoUrl,
      });

      console.log("Technology stack added successfully:");
    } catch (error) {
      console.error("Error adding techStack:", error);
    }
  };

  return (
    <div className="flex">
      <ul className="menu bg-base-200 w-56 h-24 m-2 rounded-box">
        <li>
          <a onClick={() => setMenuSelection("project")}>Add new Project</a>
        </li>
        <li>
          <a onClick={() => setMenuSelection("tech")}>Add a new Tech Stack</a>
        </li>
      </ul>
      <div>
        {menuSelection === "project" && (
          <div>
            <form className="card-body" onSubmit={handleAddProject}>
              <h1>Add a New Project</h1>

              <div className="form-control">
                <div>
                  <label className="label">Title:</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">Link:</label>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">Description:</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">My Role:</label>
                  <textarea
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-32">
                Add Project
              </button>
            </form>
          </div>
        )}

        {menuSelection === "tech" && (
          <div>
            <h1>Add a New Technology Stack</h1>
            <form className="form-control" onSubmit={handleAddTech}>
              <label className="label">Technologie Stack Name</label>
              <input
                type="text"
                className="input input-bordered"
                value={techName}
                onChange={(e) => setTechName(e.target.value)}
              />
              <label className="label">Technologie Stack Logo</label>
              <input
                type="file"
                className="m-2"
                accept="image/*"
                onChange={handleTechLogoChange}
                required
              />
              <button type="submit" className="btn btn-primary w-32">
                Add Technology
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
