import { Card, Text, Stack, Progress, Title } from "@mantine/core";
import type { Candidate } from "../types/candidate";

type Props = {
  candidates: Candidate[];
};

export function SkillHeatmap({ candidates }: Props) {
  const avg = (key: keyof Candidate["evaluation"]) =>
    Math.round(
      candidates.reduce((sum, c) => sum + c.evaluation[key], 0) /
        candidates.length
    );

  const crisis = avg("crisisManagement");
  const sustainability = avg("sustainability");
  const team = avg("teamMotivation");

  return (
    <Card withBorder radius="md" shadow="sm">
      <Stack gap="sm">
        <Title order={4}>Skill Heatmap (Average Scores)</Title>

        <Text size="sm">Crisis Management ({crisis}/10)</Text>
        <Progress value={crisis * 10} />

        <Text size="sm">Sustainability ({sustainability}/10)</Text>
        <Progress color="green" value={sustainability * 10} />

        <Text size="sm">Team Motivation ({team}/10)</Text>
        <Progress color="blue" value={team * 10} />
      </Stack>
    </Card>
  );
}
