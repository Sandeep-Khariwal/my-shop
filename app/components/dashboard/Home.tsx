//first
// import React from 'react';
// import { Grid, Card, Text, Group, ThemeIcon, Table, Badge, Title, Paper, SimpleGrid } from '@mantine/core';
// import { IconCurrencyDollar, IconShoppingCart, IconUsers, IconArrowUpRight } from '@tabler/icons-react';
// import { mockOrders } from './dummyData';

// export default function Home() {
//   const stats = [
//     { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: IconCurrencyDollar, color: 'emerald' },
//     { title: 'Sales', value: '+2,350', change: '+180.1%', icon: IconShoppingCart, color: 'blue' },
//     { title: 'Active Customers', value: '+12,234', change: '+19%', icon: IconUsers, color: 'violet' },
//   ];

//   return (
//     <div style={{ width: '100%' }}>
//       <Title order={2} mb="lg" fw={600}>Dashboard Overview</Title>

//       <SimpleGrid cols={{ base: 1, sm: 3 }} mb="xl">
//         {stats.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <Card key={stat.title} withBorder padding="lg" radius="md" shadow="sm">
//               <Group justify="space-between">
//                 <Text size="xs" c="dimmed" fw={700} tt="uppercase">
//                   {stat.title}
//                 </Text>
//                 <Icon size={22} color="gray" stroke={1.5} />
//               </Group>

//               <Group align="flex-end" gap="xs" mt="md">
//                 <Text size="xl" fw={700}>
//                   {stat.value}
//                 </Text>
//                 <Text c="teal" fz="sm" fw={500} className="flex items-center">
//                   <span>{stat.change}</span>
//                   <IconArrowUpRight size={14} stroke={1.5} />
//                 </Text>
//               </Group>
//               <Text fz="xs" c="dimmed" mt={7}>
//                 Compared to previous month
//               </Text>
//             </Card>
//           );
//         })}
//       </SimpleGrid>

//       <Paper withBorder radius="md" p="md" shadow="sm">
//         <Text fw={600} size="lg" mb="md">Recent Orders Activity</Text>
//         <Table verticalSpacing="sm" highlightOnHover>
//           <Table.Thead>
//             <Table.Tr>
//               <Table.Th>Order Number</Table.Th>
//               <Table.Th>Customer</Table.Th>
//               <Table.Th>Date</Table.Th>
//               <Table.Th align="right">Amount</Table.Th>
//               <Table.Th>Status</Table.Th>
//             </Table.Tr>
//           </Table.Thead>
//           <Table.Tbody>
//             {mockOrders.slice(0, 3).map((order) => (
//               <Table.Tr key={order.id}>
//                 <Table.Td fw={500}>{order.id}</Table.Td>
//                 <Table.Td>{order.customer}</Table.Td>
//                 <Table.Td>{order.date}</Table.Td>
//                 <Table.Td>${order.total.toFixed(2)}</Table.Td>
//                 <Table.Td>
//                   <Badge 
//                     color={order.status === 'Fulfilled' ? 'green' : order.status === 'Unfulfilled' ? 'yellow' : 'red'} 
//                     variant="light"
//                   >
//                     {order.status}
//                   </Badge>
//                 </Table.Td>
//               </Table.Tr>
//             ))}
//           </Table.Tbody>
//         </Table>
//       </Paper>
//     </div>
//   );
// }


//gemini
import React from 'react';
import { Card, Text, Group, ThemeIcon, Table, Badge, Title, Paper, SimpleGrid, Box } from '@mantine/core';
import { FiDollarSign, FiShoppingBag, FiUsers, FiArrowUpRight } from 'react-icons/fi'; // Premium React Icons
import { mockOrders } from './dummyData';

export default function Home() {
  // Ultra-premium aesthetic color palette setup (Functionality unaltered)
  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: FiDollarSign, color: '#6366f1', bg: 'rgba(99, 102, 241, 0.12)' },
    { title: 'Sales', value: '+2,350', change: '+180.1%', icon: FiShoppingBag, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.12)' },
    { title: 'Active Customers', value: '+12,234', change: '+19%', icon: FiUsers, color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Sleek Typography Headings */}
      <Title order={2} mb="xl" fw={700} style={{ color: '#0f172a', letterSpacing: '-0.5px' }}>
        Dashboard Overview
      </Title>

      {/* Analytics Grid Section */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mb="xl">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={stat.title} 
              padding="xl" 
              radius="lg" 
              style={{ 
                border: '1px solid #e2e8f0', 
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -2px rgba(0, 0, 0, 0.02)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <Group justify="space-between" align="flex-start">
                <Box>
                  <Text size="xs" fw={700} style={{ letterSpacing: '0.5px', color: '#64748b' }} tt="uppercase">
                    {stat.title}
                  </Text>
                  <Text size="28px" fw={700} mt="xs" style={{ color: '#0f172a', letterSpacing: '-0.75px', lineHeight: 1 }}>
                    {stat.value}
                  </Text>
                </Box>
                
                {/* Premium Round Shaped Glow Icon Wrapper */}
                <ThemeIcon size={48} radius="xl" style={{ backgroundColor: stat.bg }}>
                  <Icon size={22} color={stat.color} />
                </ThemeIcon>
              </Group>

              {/* Minimalist Micro-Data Trend metrics */}
              <Group gap="xs" mt="lg" style={{ alignItems: 'center' }}>
                <Group gap={2} style={{ color: '#047857', backgroundColor: 'rgba(16, 185, 129, 0.12)', padding: '2px 8px', borderRadius: '6px' }}>
                  <Text fz="xs" fw={600}>
                    {stat.change}
                  </Text>
                  <FiArrowUpRight size={12} strokeWidth={2.5} />
                </Group>
                <Text fz="xs" style={{ color: '#94a3b8' }} fw={500}>
                  vs previous month
                </Text>
              </Group>
            </Card>
          );
        })}
      </SimpleGrid>

      {/* Polished Architecture Table Wrapper */}
      <Paper 
        radius="lg" 
        p="xl" 
        style={{ 
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.01), 0 4px 6px -4px rgba(0, 0, 0, 0.01)',
          backgroundColor: '#ffffff',
          overflow: 'hidden'
        }}
      >
        <Text fw={700} size="lg" mb="lg" style={{ color: '#0f172a', letterSpacing: '-0.3px' }}>
          Recent Orders Activity
        </Text>
        
        {/* Dynamic horizontal scroll view guard */}
        <div style={{ overflowX: 'auto' }}>
          <Table 
            verticalSpacing="md" 
            horizontalSpacing="md"
            highlightOnHover
            style={{ minWidth: '700px' }}
          >
            <Table.Thead style={{ backgroundColor: '#f8fafc' }}>
              <Table.Tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Order Number</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Customer</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Date</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Amount</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {mockOrders.slice(0, 3).map((order) => (
                <Table.Tr key={order.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.15s ease' }}>
                  <Table.Td fw={600} style={{ color: '#6366f1' }}>{order.id}</Table.Td>
                  <Table.Td fw={500} style={{ color: '#1e293b' }}>{order.customer}</Table.Td>
                  <Table.Td style={{ color: '#64748b', fontSize: '13px' }}>{order.date}</Table.Td>
                  <Table.Td fw={600} style={{ color: '#0f172a' }}>${order.total.toFixed(2)}</Table.Td>
                  <Table.Td>
                    {/* Custom Luxury Colored Pill Badges */}
                    <Badge 
                      variant="light"
                      size="sm"
                      radius="sm"
                      style={{ 
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        letterSpacing: '0.3px',
                        padding: '4px 8px',
                        backgroundColor: order.status === 'Fulfilled' ? 'rgba(16, 185, 129, 0.12)' : order.status === 'Unfulfilled' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(244, 63, 94, 0.12)',
                        color: order.status === 'Fulfilled' ? '#047857' : order.status === 'Unfulfilled' ? '#b45309' : '#be123c'
                      }}
                    >
                      {order.status}
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </Paper>
    </div>
  ); 
}

