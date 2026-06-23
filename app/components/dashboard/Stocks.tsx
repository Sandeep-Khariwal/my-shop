import React, { useState } from 'react';
import { Title, SimpleGrid, Card, Group, Text, Table, Badge, ActionIcon, TextInput, Paper, Stack } from '@mantine/core';
import { IconBox, IconAlertTriangle, IconCheck, IconSearch, IconPlus, IconMinus } from '@tabler/icons-react';
import { Product } from './dummyData';


interface StocksViewProps {
  products: Product[];
  onUpdateStock: (id: string, newAmount: number) => void;
}

export default function StocksView({ products, onUpdateStock }: StocksViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [adjustments, setAdjustments] = useState<Record<string, string>>({}); //qty state
//qty state
  const handleInputChange = (productId: string, value: string) => { 
  setAdjustments((prev) => ({
    ...prev,
    [productId]: value,
  }));
};
//qty state
const getAdjustmentValue = (productId: string) => {
  return Number(adjustments[productId] || 0);
};

  // Analytics Metrics calculations
  const totalItems = products.reduce((acc, p) => acc + p.inventory, 0);
  const lowStockItems = products.filter(p => p.inventory > 0 && p.inventory <= 5).length;
  const outOfStockItems = products.filter(p => p.inventory === 0).length;

  // Filter products by user query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStockBadge = (count: number) => {
    if (count === 0) return <Badge color="red" variant="light">Out of Stock</Badge>;
    if (count <= 5) return <Badge color="orange" variant="light">Low Stock Alert</Badge>;
    return <Badge color="green" variant="light">Healthy Stock</Badge>;
  };

  return (
    <div style={{ width: '100%' }}>
      <Title order={2} mb="lg" fw={600}>Stock & Warehouse Management</Title>

      {/* Metrics Summary Rows */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mb="xl">
        <Card withBorder padding="md" radius="md" shadow="sm">
          <Group justify="space-between">
            <Text size="xs" c="dimmed" fw={700} tt="uppercase">Total Units on Hand</Text>
            <IconBox size={20} color="gray" stroke={1.5} />
          </Group>
          <Text size="xl" fw={700} mt="xs">{totalItems} Units</Text>
        </Card>

        <Card withBorder padding="md" radius="md" shadow="sm">
          <Group justify="space-between">
            <Text size="xs" c="dimmed" fw={700} tt="uppercase">Low Stock Warnings</Text>
            <IconAlertTriangle size={20} color="orange" stroke={1.5} />
          </Group>
          <Text size="xl" fw={700} mt="xs" c={lowStockItems > 0 ? 'orange.7' : 'inherit'}>
            {lowStockItems} Products
          </Text>
        </Card>

        <Card withBorder padding="md" radius="md" shadow="sm">
          <Group justify="space-between">
            <Text size="xs" c="dimmed" fw={700} tt="uppercase">Out of Stock Items</Text>
            <IconCheck size={20} color="red" stroke={1.5} />
          </Group>
          <Text size="xl" fw={700} mt="xs" c={outOfStockItems > 0 ? 'red.7' : 'inherit'}>
            {outOfStockItems} Products
          </Text>
        </Card>
      </SimpleGrid>

      {/* Live Filtering Search Input Box */}
      <Paper withBorder radius="md" shadow="xs" p="md" mb="md">
        <TextInput
          placeholder="Search by product name or item SKU reference..."
          leftSection={<IconSearch size={16} stroke={1.5} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </Paper>

      {/* Main Stock Allocation Table Grid */}
      {/* <Paper withBorder radius="md" shadow="xs" p="xs">
        <Table verticalSpacing="sm" highlightOnHover> */}
        <Paper withBorder radius="md" shadow="xs" p="xs">
  <div style={{ overflowX: 'auto' }}>
    <Table
      verticalSpacing="sm"
      highlightOnHover
      style={{ minWidth: '900px' }}
    >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>SKU Code</Table.Th>
              <Table.Th>Product Item</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Status Status</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Available Units</Table.Th>
              <Table.Th style={{ textAlign: 'right', paddingRight: '24px' }}>Quick Adjust Inventory</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Table.Tr key={product.id}>
                  <Table.Td><Text size="sm" ff="monospace" fw={500}>{product.sku}</Text></Table.Td>
                  <Table.Td fw={600}>{product.name}</Table.Td>
                  <Table.Td><Badge color="gray" variant="outline">{product.category}</Badge></Table.Td>
                  <Table.Td>{getStockBadge(product.inventory)}</Table.Td>
                  <Table.Td style={{ textAlign: 'center' }}>
                    <Text fw={700} size="sm" c={product.inventory === 0 ? 'red' : product.inventory <= 5 ? 'orange' : 'inherit'}>
                      {product.inventory}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    {/* <Group gap={6} >
                      <ActionIcon 
                        variant="light" 
                        color="gray" 
                        disabled={product.inventory === 0}
                        onClick={() => onUpdateStock(product.id, product.inventory - 1)}
                      >
                        <IconMinus size={14} />
                      </ActionIcon>
                      <ActionIcon 
                        variant="light" 
                        color="dark"
                        onClick={() => onUpdateStock(product.id, product.inventory + 1)}
                      >
                        <IconPlus size={14} />
                      </ActionIcon>
                    </Group> */}
                    <Group gap={6}>
  <ActionIcon
    variant="light"
    color="red"
    onClick={() => {
      const qty = getAdjustmentValue(product.id);

      if (qty > 0) {
        onUpdateStock(
          product.id,
          Math.max(0, product.inventory - qty)
        );

        setAdjustments((prev) => ({
          ...prev,
          [product.id]: '',
        }));
      }
    }}
  >
    <IconMinus size={14} />
  </ActionIcon>

  <TextInput
    w={70}
    value={adjustments[product.id] || ''}
    onChange={(e) =>
      handleInputChange(product.id, e.currentTarget.value)
    }
    placeholder="Qty"
  />

  <ActionIcon
    variant="light"
    color="green"
    onClick={() => {
      const qty = getAdjustmentValue(product.id);

      if (qty > 0) {
        onUpdateStock(
          product.id,
          product.inventory + qty
        );

        setAdjustments((prev) => ({
          ...prev,
          [product.id]: '',
        }));
      }
    }}
  >
    <IconPlus size={14} />
  </ActionIcon>
</Group>
                  </Table.Td>
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={6} style={{ textAlign: 'center', padding: '24px' }}>
                  <Text c="dimmed">No inventory records match your criteria.</Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
        </div>
      </Paper>
    </div>
  );
}