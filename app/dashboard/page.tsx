// "use client"
// import React, { useState } from 'react';
// import { AppShell, Burger, Group, Box, Avatar, Text } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import Home from '../components/dashboard/Home';
// import Products from '../components/dashboard/Products';
// import Orders from '../components/dashboard/Orders';
// import Sidebar from '../components/dashboard/Sidebar';

// function AdminDashboard() {
//   const [opened, { toggle }] = useDisclosure();
//   const [currentView, setView] = useState<string>('home');

//   // View router execution
//   const renderMainContent = () => {
//     switch (currentView) {
//       case 'home':
//         return <Home />;
//       case 'products':
//         return <Products />;
//       case 'orders':
//         return <Orders />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <AppShell
//       header={{ height: 60 }}
//       navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
//       padding="lg"
//       styles={{
//         main: {
//           backgroundColor: '#f8f9fa',
//         },
//       }}
//     >
//       <AppShell.Header px="md">
//         <Group h="100%" justify="space-between">
//           <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          
//           <Box visibleFrom="sm" />

//           {/* User Profile Header Right Section */}
//           <Group gap="sm">
//             <Box style={{ textAlign: 'right' }} visibleFrom="xs">
//               <Text size="sm" fw={500}>Yusuf Molla</Text>
//               <Text size="xs" c="dimmed">Store Owner</Text>
//             </Box>
//             <Avatar color="dark" radius="xl">YM</Avatar>
//           </Group>
//         </Group>
//       </AppShell.Header>

//       <AppShell.Navbar>
//         <Sidebar currentView={currentView} setView={(view) => { setView(view); toggle(); }} />
//       </AppShell.Navbar>

//       <AppShell.Main>
//         {renderMainContent()}
//       </AppShell.Main>
//     </AppShell>
//   );
// }

// export default AdminDashboard;

//gemini

"use client"
import React, { useState } from 'react';
import { AppShell, Burger, Group, Box, Avatar, Text, Menu, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FiUser, FiLogOut, FiSettings, FiBell } from 'react-icons/fi'; // Premium React Icons
import Home from '../components/dashboard/Home';
import Products from '../components/dashboard/Products';
import Orders from '../components/dashboard/Orders';
import Sidebar from '../components/dashboard/Sidebar';
import StocksView from '../components/dashboard/Stocks';
import { initialProducts, Product } from '../components/dashboard/dummyData';

function AdminDashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [currentView, setView] = useState<string>('home');

  const [products, setProducts] = useState<Product[]>(initialProducts);

const handleUpdateStock = (id: string, newAmount: number) => {
  setProducts((prev) =>
    prev.map((product) =>
      product.id === id
        ? { ...product, inventory: Math.max(0, newAmount) }
        : product
    )
  );
};

  // View router execution (Functionality kept exactly same)
  const renderMainContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;

         case 'stocks':
        return <StocksView   products={products}
      onUpdateStock={handleUpdateStock} />;

      default:
        return <Home />;
    }
  };

  return (
    <AppShell
      header={{ height: 70 }} // Premium white-spacing ke liye height badha di hai
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="xl" // Page margins ko clean modern layout dene ke liye xl kiya hai
      styles={{
        main: {
          backgroundColor: '#f8fafc', // Premium soft slate tone background
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', // Subtle premium dot pattern
          backgroundSize: '24px 24px',
        },
      }}
    >
      {/* Premium Blur and Border Header Layout */}
      <AppShell.Header 
        px="xl" 
        style={{ 
          borderBottom: '1px solid #e2e8f0',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)'
        }}
      >
        <Group h="100%" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="#1e293b" />
            
            {/* Left side brand logo grid setup */}
            <Text fw={800} size="xl" style={{ color: '#0f172a', letterSpacing: '-0.5px' }} visibleFrom="sm">
              NEXUS<span style={{ color: '#6366f1' }}>.</span>
            </Text>
          </Group>
          
          <Box visibleFrom="sm" />

          {/* Right Section: Notification Hub + Premium Profile Dropdown */}
          <Group gap="md">
            <ActionIcon variant="subtle" color="gray" size="lg" radius="xl" style={{ border: '1px solid #e2e8f0' }}>
              <FiBell size={18} color="#64748b" />
            </ActionIcon>

            {/* Premium Interactive Profile Trigger */}
            <Menu shadow="md" width={200} radius="md" transitionProps={{ transition: 'pop-top-right' }}>
              <Menu.Target>
                <Group 
                  gap="xs" 
                  style={{ 
                    cursor: 'pointer', 
                    padding: '6px 14px', 
                    borderRadius: '100px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Avatar color="indigo" radius="xl" size="sm" src={null} style={{ fontWeight: 600 }}>YM</Avatar>
                  <Box style={{ textAlign: 'left' }} visibleFrom="xs">
                    <Text size="xs" fw={600} c="#1e293b" style={{ lineHeight: 1.2 }}>Yusuf Molla</Text>
                    <Text size="10px" c="dimmed" fw={500}>Store Owner</Text>
                  </Box>
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label style={{ fontSize: '10px', fontWeight: 700 }}>Management</Menu.Label>
                <Menu.Item leftSection={<FiUser size={14} />}>My Profile</Menu.Item>
                <Menu.Item leftSection={<FiSettings size={14} />}>Store Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" leftSection={<FiLogOut size={14} />}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Sleek Sidebar border styling */}
      <AppShell.Navbar style={{ borderRight: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
        <Sidebar currentView={currentView} setView={(view) => { setView(view); toggle(); }} />
      </AppShell.Navbar>

      {/* Main viewport limit wrapper */}
      <AppShell.Main>
        <Box style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          {renderMainContent()}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminDashboard;
