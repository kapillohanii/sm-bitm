import { Text, Container } from "@mantine/core";
import { Subgrid } from "@/components/subgrid/Subgrid";

interface GallerySectionProps {
  title: string;
}


export function GallerySection({ title }: GallerySectionProps) {
  return (
    <section id="gallery">
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
        <Subgrid />
      </Container>
    </section>
  );
}