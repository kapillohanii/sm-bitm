import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';
import Typewriter from '../typewriter/Typewriter';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
                <Typewriter text="  SPIC MACAY" />
                <br /> 
                <Typewriter text="  BIT Mesra Chapter." />

            </Title>

            <Text className={classes.description} mt={30}>
            Immerse yourself in the rich traditions and mesmerizing melodies of Indian classical music and culture.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Join Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}