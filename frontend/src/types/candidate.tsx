// frontend/src/types/candidate.ts

export type EvaluationScores = {
  crisisManagement: number;  
  sustainability: number;    
  teamMotivation: number;      
};

export type Candidate = {
  id: number;
  name: string;
  experienceYears: number;
  skills: string[];
  evaluation: EvaluationScores;
  totalScore: number;           
  rank: number;
};
