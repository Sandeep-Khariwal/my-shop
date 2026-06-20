"use client"
import React, { useState } from 'react';
import { 
  Title, Tabs, Table, Button, Group, ActionIcon, Modal, 
  TextInput, NumberInput, Select, Stack, Paper, Badge, Text 
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus, IconTrash, IconPencil } from '@tabler/icons-react';
import { initialProducts, initialCategories, Product, Category } from './dummyData';

export default function Products() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  // Modal State handling
  const [productModalOpened, { open: openProdModal, close: closeProdModal }] = useDisclosure(false);
  const [categoryModalOpened, { open: openCatModal, close: closeCatModal }] = useDisclosure(false);

  // Form Fields State
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState<number | string>(0);
  const [prodInv, setProdInv] = useState<number | string>(0);
  const [prodCat, setProdCat] = useState<string | null>('');
  const [catName, setCatName] = useState('');

  // Save or Update Product
  const handleSaveProduct = () => {
    if (!prodName || !prodCat) return;

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? {
        ...p, name: prodName, price: Number(prodPrice), inventory: Number(prodInv), category: prodCat
      } : p));
    } else {
      const newProd: Product = {
        id: Math.random().toString(),
        name: prodName,
        category: prodCat,
        price: Number(prodPrice),
        inventory: Number(prodInv),
        sku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`
      };
      setProducts([...products, newProd]);
    }
    clearProductForm();
    closeProdModal();
  };

  const handleEditProductClick = (product: Product) => {
    setEditingProduct(product);
    setProdName(product.name);
    setProdPrice(product.price);
    setProdInv(product.inventory);
    setProdCat(product.category);
    openProdModal();
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const clearProductForm = () => {
    setEditingProduct(null);
    setProdName('');
    setProdPrice(0);
    setProdInv(0);
    setProdCat('');
  };

  // Add Category
  const handleAddCategory = () => {
    if (!catName) return;
    const newCat: Category = {
      id: Math.random().toString(),
      name: catName,
      productCount: 0
    };
    setCategories([...categories, newCat]);
    setCatName('');
    closeCatModal();
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div>
      <Tabs defaultValue="all-products" variant="outline" styles={{ panel: { paddingTop: '20px' } }}>
        <Group justify="space-between" mb="md">
          <Tabs.List>
            <Tabs.Tab value="all-products"><Text fw={500}>Products</Text></Tabs.Tab>
            <Tabs.Tab value="categories"><Text fw={500}>Categories</Text></Tabs.Tab>
          </Tabs.List>

          <Group gap="xs">
            <Button size="xs" variant="light" color="gray" leftSection={<IconPlus size={16} />} onClick={openCatModal}>
              Create Category
            </Button>
            <Button size="xs" color="dark" leftSection={<IconPlus size={16} />} onClick={() => { clearProductForm(); openProdModal(); }}>
              Add Product
            </Button>
          </Group>
        </Group>

        {/* PRODUCTS TAB */}
        <Tabs.Panel value="all-products">
          <Paper withBorder radius="md" shadow="xs" p="xs">
            <Table verticalSpacing="sm" highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Product</Table.Th>
                  <Table.Th>SKU</Table.Th>
                  <Table.Th>Category</Table.Th>
                  <Table.Th>Price</Table.Th>
                  <Table.Th>Stock Availability</Table.Th>
                  <Table.Th align="right">Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {products.map((product) => (
                  <Table.Tr key={product.id}>
                    <Table.Td fw={600}>{product.name}</Table.Td>
                    <Table.Td c="dimmed" fz={"xs"}>{product.sku}</Table.Td>
                    <Table.Td><Badge color="gray" variant="light">{product.category}</Badge></Table.Td>
                    <Table.Td fw={500}>${product.price.toFixed(2)}</Table.Td>
                    <Table.Td>
                      <Text size="sm" c={product.inventory <= 10 ? 'red' : 'inherit'} fw={product.inventory <= 10 ? 600 : 400}>
                        {product.inventory} available
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Group gap={4} justify="flex-end">
                        <ActionIcon variant="subtle" color="blue" onClick={() => handleEditProductClick(product)}>
                          <IconPencil size={16} />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="red" onClick={() => handleDeleteProduct(product.id)}>
                          <IconTrash size={16} />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Tabs.Panel>

        {/* CATEGORIES TAB */}
        <Tabs.Panel value="categories">
          <Paper withBorder radius="md" shadow="xs" p="xs">
            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Category Name</Table.Th>
                  <Table.Th>Tracked Items</Table.Th>
                  <Table.Th align="right">Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {categories.map((cat) => (
                  <Table.Tr key={cat.id}>
                    <Table.Td fw={500}>{cat.name}</Table.Td>
                    <Table.Td>{products.filter(p => p.category === cat.name).length} products</Table.Td>
                    <Table.Td>
                      <Group justify="flex-end">
                        <ActionIcon variant="subtle" color="red" onClick={() => handleDeleteCategory(cat.id)}>
                          <IconTrash size={16} />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Tabs.Panel>
      </Tabs>

      {/* PRODUCT MODAL */}
      <Modal opened={productModalOpened} onClose={closeProdModal} title={editingProduct ? "Edit Product" : "Create New Product"} centered>
        <Stack gap="md">
          <TextInput label="Product Name" placeholder="e.g Silk Groom Tuxedo" required value={prodName} onChange={(e) => setProdName(e.currentTarget.value)} />
          <Select label="Category" placeholder="Select item category" required data={categories.map(c => c.name)} value={prodCat} onChange={setProdCat} />
          <Group grow>
            <NumberInput label="Price ($)" min={0} value={prodPrice} onChange={setProdPrice} required />
            <NumberInput label="Stock Level" min={0} value={prodInv} onChange={setProdInv} required />
          </Group>
          <Button color="dark" fullWidth onClick={handleSaveProduct}>Save Entry</Button>
        </Stack>
      </Modal>

      {/* CATEGORY MODAL */}
      <Modal opened={categoryModalOpened} onClose={closeCatModal} title="Add New Category" centered>
        <Stack gap="md">
          <TextInput label="Category Name" placeholder="e.g. Traditional, Western Wear" required value={catName} onChange={(e) => setCatName(e.currentTarget.value)} />
          <Button color="dark" fullWidth onClick={handleAddCategory}>Create Category</Button>
        </Stack>
      </Modal>
    </div>
  );
}