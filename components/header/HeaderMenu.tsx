'use client'

import { Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import SpicMacayLogo  from '../logo/SpicMacayLogo';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/about', label: 'About us' },
  { link: '/events', label: 'Events' },
  { link: '/gallery', label: 'Gallery'},
  { link: '/team', label: 'Team'},
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/forums', label: 'Forums' },
      { link: '/contact-us', label: 'Contact Us' },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <SpicMacayLogo size={108} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          {opened && 
            <Group gap={5} bg="var(--mantine-color-body)" style={{display:'flex',flexDirection:'column',position:'absolute',top:rem(55),right:rem(0),color:"light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"}}>
              {items}
            </Group>
          }
        </div>
      </Container>
    </header>
  );
}