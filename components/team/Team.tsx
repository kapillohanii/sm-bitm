'use client'

import { Card, Image, Text, Group, SimpleGrid, rem, useMantineTheme } from "@mantine/core";
import { useHover, useMediaQuery, UseMediaQueryOptions } from "@mantine/hooks";
import { IconBrandLinkedin } from '@tabler/icons-react';
import classes from './Team.module.css';

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
    <div style={{
      padding: "3px",
      position: 'relative',
      overflow: 'hidden',

    }}>
      {hovered && (<>
        <div className={classes.glowbox} />
        <div className={classes.borderbox} />
      </>)}



      <Card
        ref={ref}
        shadow="sm"
        p="lg"
        radius="lg"
        withBorder
        style={{
          position: 'relative',
          overflow: 'hidden',
          margin: "1px"
        }}
      >

        <Card.Section
          component="a"
          href="#"
          style={{
            cursor: "pointer",
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <Image
            src={image}
            height={hovered ? 320 : 260}
            alt="Team member"
            style={{
              transition: 'height 0.3s ease',
              width: '100%',
              objectFit: 'cover',
            }}
          />

        </Card.Section>
        <Group
          style={{
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <Text>{name}</Text>
          <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </Group>
        <Text
          size="sm"
          style={{
            color: "#4a5568",
            lineHeight: 1.5,
            fontFamily: "Greycliff CF, var(--mantine-font-family)"
          }}
        >
          {position}
        </Text>
        {!hovered && (
          <Text
            size="sm"
            style={{
              color: "#718096",
              marginTop: 10,
              lineHeight: 1.5,
              fontFamily: "Greycliff CF, var(--mantine-font-family)"
            }}
          >
            {about}
          </Text>
        )}
      </Card>
    </div>
  );
};



export function Team() {
  const options: UseMediaQueryOptions = {
    getInitialValueInEffect: true,
  };
  const theme = useMantineTheme();

  const md = useMediaQuery('(max-width: 50em)', true, options);
  const mobile = useMediaQuery('(max-width: 26em)', true, options);

  const columns = mobile ? 1 : md ? 2 : 3;

  return (
    <SimpleGrid cols={columns} spacing="lg">
      {teamMembers.map((member) => (
        <TeamCard key={member.id} {...member} />
      ))}
    </SimpleGrid>
  );
}
