// scripts/generateCandidatesSql.js
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

const COUNT = 40;

const candidates = [];

for (let i = 1; i <= COUNT; i++) {
  const crisis = faker.number.int({ min: 4, max: 10 });
  const sustainability = faker.number.int({ min: 4, max: 10 });
  const team = faker.number.int({ min: 4, max: 10 });

  const total = crisis + sustainability + team;

  candidates.push({
    id: i,
    name: faker.person.fullName(),
    experience: faker.number.int({ min: 2, max: 15 }),
    skills: faker.helpers.arrayElements(SKILLS_POOL, 2),
    scores: { crisis, sustainability, team, total },
  });
}

// rank by total score
candidates.sort((a, b) => b.scores.total - a.scores.total);
candidates.forEach((c, i) => (c.rank = i + 1));

console.log("-- AUTO-GENERATED SEED DATA\n");

console.log("INSERT INTO candidates (id, name, experience_years, skills) VALUES");
console.log(
  candidates
    .map(
      (c) =>
        `(${c.id}, '${c.name.replace(/'/g, "''")}', ${c.experience}, JSON_ARRAY(${c.skills
          .map((s) => `'${s}'`)
          .join(", ")}))`
    )
    .join(",\n") + ";\n"
);

console.log(
  "INSERT INTO evaluations (candidate_id, crisis_management, sustainability, team_motivation, total_score) VALUES"
);
console.log(
  candidates
    .map(
      (c) =>
        `(${c.id}, ${c.scores.crisis}, ${c.scores.sustainability}, ${c.scores.team}, ${c.scores.total})`
    )
    .join(",\n") + ";\n"
);

console.log("INSERT INTO rankings (candidate_id, rank_position) VALUES");
console.log(
  candidates.map((c) => `(${c.id}, ${c.rank})`).join(",\n") + ";"
);
