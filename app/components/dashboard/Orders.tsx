// import React from 'react';
// import { Title, Paper, Table, Badge, Text, Group } from '@mantine/core';
// import { mockOrders } from './dummyData';

// export default function Orders() {
//   return (
//     <div>
//       <Title order={2} mb="lg" fw={600}>Orders Directory</Title>
//       <Paper withBorder radius="md" shadow="xs" p="xs">
//         <Table verticalSpacing="md" highlightOnHover>
//           <Table.Thead>
//             <Table.Tr>
//               <Table.Th>Order Reference</Table.Th>
//               <Table.Th>Customer</Table.Th>
//               <Table.Th>Purchased On</Table.Th>
//               <Table.Th>Fulfillment Status</Table.Th>
//               <Table.Th align="right">Gross value</Table.Th>
//             </Table.Tr>
//           </Table.Thead>
//           <Table.Tbody>
//             {mockOrders.map((order) => (
//               <Table.Tr key={order.id}>
//                 <Table.Td fw={600} c="blue.7">{order.id}</Table.Td>
//                 <Table.Td>
//                   <Text size="sm" fw={500}>{order.customer}</Text>
//                 </Table.Td>
//                 <Table.Td c="dimmed" fz="xs">{order.date}</Table.Td>
//                 <Table.Td>
//                   <Badge 
//                     variant="light" 
//                     color={
//                       order.status === 'Fulfilled' ? 'green' : 
//                       order.status === 'Unfulfilled' ? 'yellow' : 'red'
//                     }
//                   >
//                     {order.status}
//                   </Badge>
//                 </Table.Td>
//                 <Table.Td fw={600}>${order.total.toFixed(2)}</Table.Td>
//               </Table.Tr>
//             ))}
//           </Table.Tbody>
//         </Table>
//       </Paper>
//     </div>
//   );
// }
// //gemini
import React from 'react';
import { Title, Paper, Table, Badge, Text, Group, Box } from '@mantine/core';
import { FiPackage } from 'react-icons/fi'; // Premium React Icon for context
import { mockOrders } from './dummyData';

export default function Orders() {
  return (
    <div style={{ width: '100%' }}>
      {/* Premium Header Architecture */}
      <Group justify="space-between" align="flex-end" mb="xl">
        <Box>
          <Title order={2} fw={700} style={{ color: '#0f172a', letterSpacing: '-0.5px' }}>
            Orders Directory
          </Title>
          <Text size="xs" mt={4} style={{ color: '#64748b', fontWeight: 500 }}>
            Manage, track, and audit customer order transactions.
          </Text>
        </Box>
        
        {/* Counter Badge for Ultra-Premium feel */}
        <Badge variant="neutral" style={{ backgroundColor: '#e2e8f0', color: '#334155', fontWeight: 600 }} size="lg" radius="sm">
          Total: {mockOrders.length} Orders
        </Badge>
      </Group>

      {/* Clean Slate Container */}
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
        {/* Dynamic horizontal scroll guard for responsive UI */}
        <div style={{ overflowX: 'auto' }}>
          <Table 
            verticalSpacing="md" 
            horizontalSpacing="md"
            highlightOnHover
            style={{ minWidth: '800px' }}
          >
            <Table.Thead style={{ backgroundColor: '#f8fafc' }}>
              <Table.Tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Order Reference</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Customer</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Purchased On</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Fulfillment Status</Table.Th>
                <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Gross Value</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {mockOrders.map((order) => (
                <Table.Tr key={order.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.15s ease' }}>
                  {/* Premium Indigo Reference ID */}
                  <Table.Td fw={600} style={{ color: '#6366f1', letterSpacing: '0.2px', fontSize: '14px' }}>
                    {order.id}
                  </Table.Td>
                  
                  <Table.Td>
                    <Text size="sm" fw={600} style={{ color: '#1e293b' }}>
                      {order.customer}
                    </Text>
                  </Table.Td>
                  
                  <Table.Td>
                    <Text style={{ color: '#64748b', fontSize: '13px', fontWeight: 500 }}>
                      {order.date}
                    </Text>
                  </Table.Td>
                  
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
                  
                  <Table.Td fw={700} style={{ color: '#0f172a', fontSize: '14px' }}>
                    ${order.total.toFixed(2)}
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

