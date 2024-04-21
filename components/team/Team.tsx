'use client'

import { Card, Image, Text, Group, SimpleGrid } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { ArrowRightCircle } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    position: "CEO",
    about:
      "John has over 10 years of experience in leading teams towards success.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    position: "CTO",
    about:
      "Jane is a tech enthusiast with a rich background in software development.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://via.placeholder.com/150",
    position: "CFO",
    about:
      "Michael manages our finances with over 15 years of experience in the industry.",
  },
  {
    id: 4,
    name: "Emily White",
    image: "https://via.placeholder.com/150",
    position: "CMO",
    about:
      "Emily’s creativity and unique strategies have always kept our marketing on top.",
  },
];

interface TeamCardProps {
    name: string;
    image: string;
    position: string;
    about: string;
  }

const TeamCard = ({ name, image, position, about }: TeamCardProps) => {
  const { hovered, ref } = useHover();
  return (
    <Card
      ref={ref}
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{
        transform: hovered ? "scale(1.05)" : "scale(1)",
        borderColor: hovered ? "#ffa500" : "#cbd5e0",
        transition: "transform 150ms ease, borderColor 150ms ease",
      }}
    >
      <Card.Section
        component="a"
        href="#"
        style={{
          cursor: "pointer",
        }}
      >
        <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FMCHrgp5aRdsZje0SaqLh3A_3o1g7zjUye9WNw_RJQ&s"} height={160} alt="Team member" />
      </Card.Section>
      <Group
        style={{
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        <Text >{name}</Text>
        <ArrowRightCircle size={18} />
      </Group>
      <Text
        size="sm"
        style={{
          color: "#4a5568",
          lineHeight: 1.5,
        }}
      >
        {position}
      </Text>
      <Text
        size="sm"
        style={{
          color: "#718096",
          marginTop: 10,
          lineHeight: 1.5,
        }}
      >
        {about}
      </Text>
    </Card>
  );
};


export function Team() {
  return (
      <SimpleGrid cols={3} spacing="lg">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </SimpleGrid>
  );
}
