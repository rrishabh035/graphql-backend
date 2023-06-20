import { randomUUID } from "crypto";

export const jobs = [
  {
    title: "java developer",
    location: "noida",
    description: "do java",
    CTC: 1000000,
    jobType: "full_time",
    companyName: "Hippo",
    id: randomUUID(),
    posted_at: new Date(),
  },
  {
    title: ".net developer",
    location: "noida",
    description: "do .net",
    CTC: 1000000,
    jobType: "full_time",
    companyName: "Google",
    id: randomUUID(),
    posted_at: new Date(),
    extraDetails: {
      vacancy: 1,
      filter: "IITIAN",
    },
  },

  {
    title: "c# developer",
    location: "noida",
    description: "do c#",
    CTC: 1000000,
    jobType: "remote",
    companyName: "Hippo",
    id: randomUUID(),
    posted_at: new Date(),
    extraDetails: {
      vacancy: 10,
    },
  },
];
