import {
  Card,
  Text,
  Group,
  Badge,
  Stack,
  Progress,
} from "@mantine/core";
import type { Candidate } from "../types/candidate";

type Props = {
  candidate: Candidate;
};

export function CandidateCard({ candidate }: Props) {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Stack gap="sm">
        <Group justify="space-between">
          <Text fw={600}>{candidate.name}</Text>
          <Badge color="green" variant="light">
            Rank #{candidate.rank}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Experience: {candidate.experienceYears} years
        </Text>

        <Group gap="xs">
          {candidate.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </Group>

        <Stack gap={6} mt="sm">
          <Text size="xs">Crisis Management</Text>
          <Progress value={candidate.evaluation.crisisManagement * 10} />

          <Text size="xs">Sustainability</Text>
          <Progress
            color="green"
            value={candidate.evaluation.sustainability * 10}
          />

          <Text size="xs">Team Motivation</Text>
          <Progress
            color="blue"
            value={candidate.evaluation.teamMotivation * 10}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
