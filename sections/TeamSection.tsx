import { Text, Container } from "@mantine/core";
import { Team } from "@/components/team/Team";

interface TeamSectionProps {
  title: string;
}


export function TeamSection({ title }: TeamSectionProps) {
  return (
    <section id="team">
      <Container
        size="lg"
        style={{
          marginTop: "80px",
        }}
      >
        <Text
          size="100px"
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