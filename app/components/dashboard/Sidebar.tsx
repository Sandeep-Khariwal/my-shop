// import React from 'react';
// import { NavLink, Stack, Text, Group, Box, Code } from '@mantine/core';
// import { IconHome2, IconShoppingCart, IconReceipt2, IconSettings } from '@tabler/icons-react';

// interface SidebarProps {
//   currentView: string;
//   setView: (view: string) => void;
// }

// const navItems = [
//   { view: 'home', label: 'Home', icon: IconHome2 },
//   { view: 'products', label: 'Products', icon: IconShoppingCart },
//   { view: 'orders', label: 'Orders', icon: IconReceipt2 },
// ];

// export default function Sidebar({ currentView, setView }: SidebarProps) {
//   return (
//     <Box p="md" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <Group justify="space-between" mb="xl" px="xs">
//         <Text size="lg" fw={700} variant="gradient" gradient={{ from: 'dark.4', to: 'dark.9' }}>
//           ✨ CommerceAdmin
//         </Text>
//         <Code fw={600}>v2.4.0</Code>
//       </Group>

//       <Stack gap="xs" style={{ flex: 1 }}>
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={item.view}
//               active={currentView === item.view}
//               label={item.label}
//               leftSection={<Icon size={20} stroke={1.5} />}
//               onClick={() => setView(item.view)}
//               variant="filled"
//               color="dark"
//               styles={{
//                 root: {
//                   borderRadius: '6px',
//                   fontWeight: 500,
//                 },
//               }}
//             />
//           );
//         })}
//       </Stack>

//       <Box style={{ borderTop: '1px solid #e9ecef' }} pt="md">
//         <NavLink
//           label="Settings"
//           leftSection={<IconSettings size={20} stroke={1.5} />}
//           styles={{ root: { borderRadius: '6px' } }}
//         />
//       </Box>
//     </Box>
//   );
// }

//gemini

import React from 'react';
import { NavLink, Stack, Text, Group, Box, Code } from '@mantine/core';
import { FiHome, FiShoppingBag, FiLayers, FiSettings, FiPackage} from 'react-icons/fi'; // Premium Feather Icons

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

// Configured premium react-icons palette mapping
const navItems = [
  { view: 'home', label: 'Dashboard Overview', icon: FiHome },
  { view: 'products', label: ' Products', icon: FiShoppingBag },
  { view: 'orders', label: 'Orders ', icon: FiLayers },
  { view: 'stocks', label: 'Stocks', icon: FiPackage},
];

export default function Sidebar({ currentView, setView }: SidebarProps) {
  return (
    <Box p="xl" style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      
      {/* Premium Elegant Brand Architecture Header */}
      <Group justify="space-between" mb="30px" px="xs">
        <Group gap={4}>
          <Text size="lg" fw={800} style={{ color: '#0f172a', letterSpacing: '-0.5px' }}>
            NEXUS<span style={{ color: '#6366f1' }}>.</span>
          </Text>
        </Group>
        <Code 
          fw={700} 
          style={{ 
            backgroundColor: '#f1f5f9', 
            color: '#64748b', 
            padding: '2px 8px', 
            borderRadius: '6px',
            fontSize: '11px',
            border: '1px solid #e2e8f0'
          }}
        >
          v2.4.0
        </Code>
      </Group>

      {/* Modern High-End Navigation Stack Links */}
      <Stack gap="xs" style={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.view;
          
          return (
            <NavLink
              key={item.view}
              active={isActive}
              label={item.label}
              leftSection={<Icon size={18} style={{ strokeWidth: isActive ? '2.5px' : '2px' }} />}
              onClick={() => setView(item.view)}
              variant="light"
              // Fix: Mantine me selector errors hatane ke liye function base style mapping use ki hai
              styles={{
                root: {
                  borderRadius: '10px',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '14px',
                  padding: '12px 14px',
                  backgroundColor: isActive ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                  color: isActive ? '#4f46e5' : '#475569',
                  transition: 'all 0.2s ease',
                  '--nav-link-gap': '12px', // In-built premium gap scaling design system handler
                  '&:hover': {
                    backgroundColor: isActive ? 'rgba(99, 102, 241, 0.08)' : '#f8fafc',
                    color: isActive ? '#4f46e5' : '#0f172a',
                  }
                },
                // Inner text content adjustment target selector fixing
                body: {
                  marginLeft: '4px'
                }
              }}
            />
          );
        })}
      </Stack>

      {/* Clean Utility Bottom Section Container */}
      <Box style={{ borderTop: '1px solid #f1f5f9' }} pt="md">
        <NavLink
          label="Store Settings"
          leftSection={<FiSettings size={18} style={{ strokeWidth: '2px' }} />}
          styles={{ 
            root: { 
              borderRadius: '10px',
              fontWeight: 500,
              fontSize: '14px',
              padding: '12px 14px',
              color: '#475569',
              transition: 'all 0.2s ease',
              '--nav-link-gap': '12px',
              '&:hover': {
                backgroundColor: '#f8fafc',
                color: '#0f172a',
              }
            },
            body: {
              marginLeft: '4px'
            }
          }}
        />
      </Box>
    </Box>
  );
}
