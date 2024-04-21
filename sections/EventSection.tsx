import { Text, Container } from "@mantine/core";
import { CardsCarousel } from "@/components/carousel/CardsCarousel";

interface EventSectionProps{
    title: string;
}


export function EventSection({title}: EventSectionProps) {
    return (
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
        <CardsCarousel />
      </Container>
    );
  }