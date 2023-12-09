import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { app } from "./firebase";

export const firestore = getFirestore(app);

export const projectsCollection = collection(firestore, "projects");
export const reviewsCollection = collection(firestore, "reviews");
export const techCollection = collection(firestore, "technologies")

export const getProjectIds = async () => {
  try {
    const projectSnapshot = await getDocs(projectsCollection);
    const projectIds = [];

    projectSnapshot.forEach((doc) => {
      const id = doc.id; // Assuming that project documents have a unique ID
      projectIds.push(id);
    });

    return projectIds;
  } catch (error) {
    console.error("Error fetching project IDs from Firebase:", error);
    return [];
  }
};

export const getReviewstIds = async () => {
  try {
    const reviewsSnapshot = await getDocs(reviewsCollection);
    const reviewsIds = [];

    reviewsSnapshot.forEach((doc) => {
      const id = doc.id; // Assuming that project documents have a unique ID
      reviewsIds.push(id);
    });
    return reviewsIds;
  } catch (error) {
    console.error("Error fetching reviews IDs from Firebase:", error);
    return [];
  }
};

export const getTechtIds = async () => {
  try {
    const techSnapshot = await getDocs(techCollection);
    const techIds = [];

    techSnapshot.forEach((doc) => {
      const id = doc.id; // Assuming that project documents have a unique ID
      techIds.push(id);
    });
    return techIds;
  } catch (error) {
    console.error("Error fetching technologies IDs from Firebase:", error);
    return [];
  }
};

export const getProjectDocument = async (id) => {
  const projectRef = doc(projectsCollection, id);
  const projectDoc = await getDoc(projectRef);
  return projectDoc;
};

export const getReviewDocument = async (id) => {
  const reviewRef = doc(reviewsCollection, id);
  const reviewDoc = await getDoc(reviewRef);
  return reviewDoc;
};

export const getTechnDocument = async (id) => {
  const techRef = doc(techCollection, id);
  const techDoc = await getDoc(techRef);
  return techDoc;
};

