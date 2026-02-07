CREATE TABLE candidates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  experience_years INT NOT NULL,
  skills JSON NOT NULL
);

CREATE TABLE evaluations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  candidate_id INT NOT NULL,
  crisis_management INT NOT NULL CHECK (crisis_management BETWEEN 1 AND 10),
  sustainability INT NOT NULL CHECK (sustainability BETWEEN 1 AND 10),
  team_motivation INT NOT NULL CHECK (team_motivation BETWEEN 1 AND 10),
  total_score INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

CREATE TABLE rankings (
  candidate_id INT PRIMARY KEY,
  rank_position INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);


CREATE INDEX idx_candidates_name ON candidates(name);
CREATE INDEX idx_evaluations_candidate ON evaluations(candidate_id);
CREATE INDEX idx_rankings_rank ON rankings(rank_position);
