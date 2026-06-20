"use client"
import React, { useState } from 'react';
import { AppShell, Burger, Group, Box, Avatar, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Home from '../components/dashboard/Home';
import Products from '../components/dashboard/Products';
import Orders from '../components/dashboard/Orders';
import Sidebar from '../components/dashboard/Sidebar';

function AdminDashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [currentView, setView] = useState<string>('home');

  // View router execution
  const renderMainContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      default:
        return <Home />;
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="lg"
      styles={{
        main: {
          backgroundColor: '#f8f9fa',
        },
      }}
    >
      <AppShell.Header px="md">
        <Group h="100%" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          
          <Box visibleFrom="sm" />

          {/* User Profile Header Right Section */}
          <Group gap="sm">
            <Box style={{ textAlign: 'right' }} visibleFrom="xs">
              <Text size="sm" fw={500}>Yusuf Molla</Text>
              <Text size="xs" c="dimmed">Store Owner</Text>
            </Box>
            <Avatar color="dark" radius="xl">YM</Avatar>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar currentView={currentView} setView={(view) => { setView(view); toggle(); }} />
      </AppShell.Navbar>

      <AppShell.Main>
        {renderMainContent()}
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminDashboard;