// frontend/src/data/candidates.ts
import type { Candidate } from "../types/candidate";


export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Aarav Mehta",
    experienceYears: 8,
    skills: ["Operations", "Lean Manufacturing", "Crisis Handling"],
    evaluation: {
      crisisManagement: 8,
      sustainability: 7,
      teamMotivation: 9,
    },
    totalScore: 24,
    rank: 1,
  },
  {
    id: 2,
    name: "Neha Sharma",
    experienceYears: 6,
    skills: ["Waste Management", "Process Optimization"],
    evaluation: {
      crisisManagement: 7,
      sustainability: 9,
      teamMotivation: 8,
    },
    totalScore: 24,
    rank: 2,
  },
  {
    id: 3,
    name: "Rohit Verma",
    experienceYears: 5,
    skills: ["Team Leadership", "Safety Compliance"],
    evaluation: {
      crisisManagement: 6,
      sustainability: 6,
      teamMotivation: 7,
    },
    totalScore: 19,
    rank: 3,
  },
];
