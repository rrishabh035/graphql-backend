import { randomUUID } from "crypto";

export const candidates = [
  {
    name: "Rishabh Rana",
    location: "Noida",
    qualification: ["Btech"],
    resume_url: "https://linkedin.com/rrishabh035",
    id: randomUUID(),
    salaryExpectations: 10000,
    experienceInYears: 1.2,
    readyToRelocate: false,
    appliedTo: {
      title: ".net developer",
      location: "noida",
      description: "do .net",
    },
    applied_at: new Date(),
  },

  {
    name: "Sample user",
    location: "Delhi",
    qualification: ["Mtech", "Btech"],
    resume_url: "https://linkedin.com/sample_user",
    id: randomUUID(),
    salaryExpectations: 10000,
    experienceInYears: 1.2,
    readyToRelocate: false,
    appliedTo: {
      title: ".net developer",
      location: "noida",
      description: "do .net",
    },
  },
  {
    name: "Sample user 2",
    location: "Ghaziabad",
    qualification: ["Mca", "Bca"],
    resume_url: "https://linkedin.com/sample_user_2",
    id: randomUUID(),
    salaryExpectations: 10000,
    experienceInYears: 1.2,
    readyToRelocate: false,
    appliedTo: {
      title: ".net developer",
      location: "noida",
      description: "do .net",
    },
  },
];
