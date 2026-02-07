// frontend/src/components/Leaderboard.tsx
import { Table, Title } from "@mantine/core";
import type { Candidate } from "../types/candidate";

type Props = {
  candidates: Candidate[];
};

export function Leaderboard({ candidates }: Props) {
  return (
    <>
      <Title order={3} mb="sm">
        Top Candidates
      </Title>

      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Rank</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Experience (yrs)</Table.Th>
            <Table.Th>Total Score</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {candidates.map((c) => (
            <Table.Tr key={c.id}>
              <Table.Td>#{c.rank}</Table.Td>
              <Table.Td>{c.name}</Table.Td>
              <Table.Td>{c.experienceYears}</Table.Td>
              <Table.Td>{c.totalScore}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
