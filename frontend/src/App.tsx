import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
  SimpleGrid,
  Card,
} from "@mantine/core";

import { candidates } from "./data/candidates";
import { Leaderboard } from "./components/Leaderboard";
import { CandidateCard } from "./components/CandidateCard";
import { SkillHeatmap } from "./components/SkillHeatmap";

function App() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container size="lg" py="xl">
        <Stack gap="xl">
          {/* Header / Hero */}
          <Card shadow="md" radius="lg" p="xl" withBorder>
            <Title order={1}>♻️ Recycling Production Line Manager</Title>
            <Text c="dimmed" mt="xs">
              Candidate Ranking Dashboard — AI-assisted evaluation based on
              crisis management, sustainability, and team motivation.
            </Text>
          </Card>

          {/* Leaderboard */}
          <Card withBorder shadow="sm" radius="md" p="lg">
            <Leaderboard candidates={candidates} />
          </Card>

          {/* Skill Heatmap */}
          <Card withBorder shadow="sm" radius="md" p="lg">
            <SkillHeatmap candidates={candidates} />
          </Card>

          {/* Candidate Profiles */}
          <Stack gap="md">
            <Title order={3}>Candidate Profiles</Title>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
              {candidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                />
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
