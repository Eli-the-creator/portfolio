import webProjectsDate from "../data/web-project.json";
import mobileProject from "../data/mobile-project.json";

export const normilizaDataObject = (obj) => {
  const res = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === "object") {
      // add value to res
      res.push({
        ...value,
        id: key,
      });
    }
  }

  return res;
};

export const getPreviewData = (obj) => {
  const res = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === "object") {
      // add value to res
      res.push({
        id: key,
        projectData: value.projectName,
        img: value.img,
      });
    }
  }
  return res;
};

export const normilizeAndMergeObject = (objA, objB) => {
  const flatObjectA = normilizaDataObject(objA);
  const flatObjectB = normilizaDataObject(objB);

  return [...flatObjectA, ...flatObjectB];
};

// find object in array of object with id
export const findDataById = (id) => {
  const projectData = normilizeAndMergeObject(webProjectsDate, mobileProject);

  return projectData.find((obj) => obj.id === id);
};
