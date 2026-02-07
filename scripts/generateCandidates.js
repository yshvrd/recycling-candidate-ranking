// scripts/generateCandidates.js
const { faker } = require("@faker-js/faker");

const SKILLS_POOL = [
  "Operations",
  "Lean Manufacturing",
  "Crisis Handling",
  "Waste Management",
  "Process Optimization",
  "Team Leadership",
  "Safety Compliance",
  "Sustainability Practices",
];

const CANDIDATE_COUNT = 40;

const candidates = [];

for (let i = 1; i <= CANDIDATE_COUNT; i++) {
  const crisis = faker.number.int({ min: 4, max: 10 });
  const sustainability = faker.number.int({ min: 4, max: 10 });
  const team = faker.number.int({ min: 4, max: 10 });

  const total = crisis + sustainability + team;

  candidates.push({
    id: i,
    name: faker.person.fullName(),
    experience_years: faker.number.int({ min: 2, max: 15 }),
    skills: faker.helpers.arrayElements(SKILLS_POOL, 2),
    evaluation: {
      crisis_management: crisis,
      sustainability: sustainability,
      team_motivation: team,
      total_score: total,
    },
  });
}

// sort by score
candidates.sort(
  (a, b) => b.evaluation.total_score - a.evaluation.total_score
);

// assign rank
candidates.forEach((c, idx) => {
  c.rank = idx + 1;
});

console.log(JSON.stringify(candidates, null, 2));
