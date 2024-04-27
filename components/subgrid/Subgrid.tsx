'use client'

import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';

const getChild = (width: number, height: number) => <Skeleton height={height} width={width} radius="md" animate={false} />;
const BASE_WIDTH = 260
const BASE_HEIGHT = 600;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container my="xl" size="xl">
      <SimpleGrid cols={{ base: 1, xs: 4 }} spacing="md">
        <Stack>
          {getChild(BASE_WIDTH, BASE_HEIGHT - 450)}
          {getChild(BASE_WIDTH, BASE_HEIGHT - 165)}
        </Stack>
        <Stack>
          {getChild(BASE_WIDTH, getSubHeight(2, px(theme.spacing.md) as number))}
          {getChild(BASE_WIDTH, getSubHeight(2, px(theme.spacing.md) as number))}
        </Stack>
        <Stack>
          {getChild(BASE_WIDTH, getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(BASE_WIDTH, getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(BASE_WIDTH, getSubHeight(3, px(theme.spacing.md) as number))}
        </Stack>
        <Stack>
          {getChild(BASE_WIDTH, BASE_HEIGHT - 165)}
          {getChild(BASE_WIDTH, BASE_HEIGHT - 450)}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}