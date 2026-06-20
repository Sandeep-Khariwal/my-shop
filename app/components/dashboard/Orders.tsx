import React from 'react';
import { Title, Paper, Table, Badge, Text, Group } from '@mantine/core';
import { mockOrders } from './dummyData';

export default function Orders() {
  return (
    <div>
      <Title order={2} mb="lg" fw={600}>Orders Directory</Title>
      <Paper withBorder radius="md" shadow="xs" p="xs">
        <Table verticalSpacing="md" highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order Reference</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Purchased On</Table.Th>
              <Table.Th>Fulfillment Status</Table.Th>
              <Table.Th align="right">Gross value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {mockOrders.map((order) => (
              <Table.Tr key={order.id}>
                <Table.Td fw={600} c="blue.7">{order.id}</Table.Td>
                <Table.Td>
                  <Text size="sm" fw={500}>{order.customer}</Text>
                </Table.Td>
                <Table.Td c="dimmed" fz="xs">{order.date}</Table.Td>
                <Table.Td>
                  <Badge 
                    variant="light" 
                    color={
                      order.status === 'Fulfilled' ? 'green' : 
                      order.status === 'Unfulfilled' ? 'yellow' : 'red'
                    }
                  >
                    {order.status}
                  </Badge>
                </Table.Td>
                <Table.Td fw={600}>${order.total.toFixed(2)}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </div>
  );
}