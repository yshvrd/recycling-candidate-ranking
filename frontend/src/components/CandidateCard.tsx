import {
  Card,
  Text,
  Group,
  Badge,
  Stack,
  Progress,
  Button,
} from "@mantine/core";
import { useState } from "react";
import type { Candidate } from "../types/candidate";

type Props = {
  candidate: Candidate;
};

export function CandidateCard({ candidate }: Props) {
  const [copied, setCopied] = useState(false);

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
          <Text size="xs">
            Crisis Management ({candidate.evaluation.crisisManagement}/10)
          </Text>
          <Progress value={candidate.evaluation.crisisManagement * 10} />

          <Text size="xs">
            Sustainability ({candidate.evaluation.sustainability}/10)
          </Text>
          <Progress
            color="green"
            value={candidate.evaluation.sustainability * 10}
          />

          <Text size="xs">
            Team Motivation ({candidate.evaluation.teamMotivation}/10)
          </Text>
          <Progress
            color="blue"
            value={candidate.evaluation.teamMotivation * 10}
          />
        </Stack>

        <Button
          variant={copied ? "filled" : "light"}
          size="xs"
          color={copied ? "green" : "blue"}
          onClick={() => {
            const text = `Candidate: ${candidate.name}
Experience: ${candidate.experienceYears} years
Scores:
- Crisis Management: ${candidate.evaluation.crisisManagement}/10
- Sustainability: ${candidate.evaluation.sustainability}/10
- Team Motivation: ${candidate.evaluation.teamMotivation}/10
Total Score: ${candidate.totalScore}/30`;

            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          {copied ? "Copied ✓" : "Share Candidate"}
        </Button>
      </Stack>
    </Card>
  );
}
