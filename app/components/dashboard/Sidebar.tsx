import React from 'react';
import { NavLink, Stack, Text, Group, Box, Code } from '@mantine/core';
import { IconHome2, IconShoppingCart, IconReceipt2, IconSettings } from '@tabler/icons-react';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

const navItems = [
  { view: 'home', label: 'Home', icon: IconHome2 },
  { view: 'products', label: 'Products', icon: IconShoppingCart },
  { view: 'orders', label: 'Orders', icon: IconReceipt2 },
];

export default function Sidebar({ currentView, setView }: SidebarProps) {
  return (
    <Box p="md" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Group justify="space-between" mb="xl" px="xs">
        <Text size="lg" fw={700} variant="gradient" gradient={{ from: 'dark.4', to: 'dark.9' }}>
          ✨ CommerceAdmin
        </Text>
        <Code fw={600}>v2.4.0</Code>
      </Group>

      <Stack gap="xs" style={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.view}
              active={currentView === item.view}
              label={item.label}
              leftSection={<Icon size={20} stroke={1.5} />}
              onClick={() => setView(item.view)}
              variant="filled"
              color="dark"
              styles={{
                root: {
                  borderRadius: '6px',
                  fontWeight: 500,
                },
              }}
            />
          );
        })}
      </Stack>

      <Box style={{ borderTop: '1px solid #e9ecef' }} pt="md">
        <NavLink
          label="Settings"
          leftSection={<IconSettings size={20} stroke={1.5} />}
          styles={{ root: { borderRadius: '6px' } }}
        />
      </Box>
    </Box>
  );
}