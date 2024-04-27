import { Text, Container } from "@mantine/core";
import { Team } from "@/components/team/Team";

interface TeamSectionProps {
  title: string;
}


export function TeamSection({ title }: TeamSectionProps) {
  return (
    <section id="gallery">
      <Container
        size="lg"
        style={{
          marginTop: 30,
        }}
      >
        <Text
          size="xl"
          style={{
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          {title}
        </Text>
        <Team />
      </Container>
    </section>
  );
}