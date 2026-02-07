import { Card, Text, Stack, Progress, Title } from "@mantine/core";
import type { Candidate } from "../types/candidate";

type Props = {
  candidates: Candidate[];
};

export function SkillHeatmap({ candidates }: Props) {
  const avg = (key: keyof Candidate["evaluation"]) =>
    Math.round(
      candidates.reduce(
        (sum, c) => sum + c.evaluation[key],
        0
      ) / candidates.length
    );

  return (
    <Card withBorder radius="md">
      <Stack gap="sm">
        <Title order={4}>Skill Heatmap (Avg Scores)</Title>

        <Text size="sm">Crisis Management</Text>
        <Progress value={avg("crisisManagement") * 10} />

        <Text size="sm">Sustainability</Text>
        <Progress
          color="green"
          value={avg("sustainability") * 10}
        />

        <Text size="sm">Team Motivation</Text>
        <Progress
          color="blue"
          value={avg("teamMotivation") * 10}
        />
      </Stack>
    </Card>
  );
}
