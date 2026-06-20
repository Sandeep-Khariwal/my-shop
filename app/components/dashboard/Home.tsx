import React from 'react';
import { Grid, Card, Text, Group, ThemeIcon, Table, Badge, Title, Paper, SimpleGrid } from '@mantine/core';
import { IconCurrencyDollar, IconShoppingCart, IconUsers, IconArrowUpRight } from '@tabler/icons-react';
import { mockOrders } from './dummyData';

export default function Home() {
  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: IconCurrencyDollar, color: 'emerald' },
    { title: 'Sales', value: '+2,350', change: '+180.1%', icon: IconShoppingCart, color: 'blue' },
    { title: 'Active Customers', value: '+12,234', change: '+19%', icon: IconUsers, color: 'violet' },
  ];

  return (
    <div style={{ width: '100%' }}>
      <Title order={2} mb="lg" fw={600}>Dashboard Overview</Title>

      <SimpleGrid cols={{ base: 1, sm: 3 }} mb="xl">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} withBorder padding="lg" radius="md" shadow="sm">
              <Group justify="space-between">
                <Text size="xs" c="dimmed" fw={700} tt="uppercase">
                  {stat.title}
                </Text>
                <Icon size={22} color="gray" stroke={1.5} />
              </Group>

              <Group align="flex-end" gap="xs" mt="md">
                <Text size="xl" fw={700}>
                  {stat.value}
                </Text>
                <Text c="teal" fz="sm" fw={500} className="flex items-center">
                  <span>{stat.change}</span>
                  <IconArrowUpRight size={14} stroke={1.5} />
                </Text>
              </Group>
              <Text fz="xs" c="dimmed" mt={7}>
                Compared to previous month
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>

      <Paper withBorder radius="md" p="md" shadow="sm">
        <Text fw={600} size="lg" mb="md">Recent Orders Activity</Text>
        <Table verticalSpacing="sm" highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order Number</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th align="right">Amount</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {mockOrders.slice(0, 3).map((order) => (
              <Table.Tr key={order.id}>
                <Table.Td fw={500}>{order.id}</Table.Td>
                <Table.Td>{order.customer}</Table.Td>
                <Table.Td>{order.date}</Table.Td>
                <Table.Td>${order.total.toFixed(2)}</Table.Td>
                <Table.Td>
                  <Badge 
                    color={order.status === 'Fulfilled' ? 'green' : order.status === 'Unfulfilled' ? 'yellow' : 'red'} 
                    variant="light"
                  >
                    {order.status}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </div>
  );
}