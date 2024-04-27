import { Text, Container } from "@mantine/core";
import { CardsCarousel } from "@/components/carousel/CardsCarousel";

interface EventSectionProps {
  title: string;
}


export function EventSection({ title }: EventSectionProps) {
  return (
    <section id="events">
      <Container
        size="lg"
        style={{
          marginTop: "80px",
        }}
      >
        <Text
          size="120px"
          style={{
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          {title}
        </Text>
        <CardsCarousel />
      </Container>
    </section>
  );
}