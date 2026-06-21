// "use client"
// import React, { useState } from 'react';
// import { 
//   Title, Tabs, Table, Button, Group, ActionIcon, Modal, 
//   TextInput, NumberInput, Select, Stack, Paper, Badge, Text 
// } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { IconPlus, IconTrash, IconPencil } from '@tabler/icons-react';
// import { initialProducts, initialCategories, Product, Category } from './dummyData';

// export default function Products() {
//   const [products, setProducts] = useState<Product[]>(initialProducts);
//   const [categories, setCategories] = useState<Category[]>(initialCategories);
//   // Modal State handling
//   const [productModalOpened, { open: openProdModal, close: closeProdModal }] = useDisclosure(false);
//   const [categoryModalOpened, { open: openCatModal, close: closeCatModal }] = useDisclosure(false);
//   // Form Fields State
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);
//   const [prodName, setProdName] = useState('');
//   const [prodPrice, setProdPrice] = useState<number | string>(0);
//   const [prodInv, setProdInv] = useState<number | string>(0);
//   const [prodCat, setProdCat] = useState<string | null>('');
//   const [catName, setCatName] = useState('');
//   // Save or Update Product
//   const handleSaveProduct = () => {
//     if (!prodName || !prodCat) return;

//     if (editingProduct) {
//       setProducts(products.map(p => p.id === editingProduct.id ? {
//         ...p, name: prodName, price: Number(prodPrice), inventory: Number(prodInv), category: prodCat
//       } : p));
//     } else {
//       const newProd: Product = {
//         id: Math.random().toString(),
//         name: prodName,
//         category: prodCat,
//         price: Number(prodPrice),
//         inventory: Number(prodInv),
//         sku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`
//       };
//       setProducts([...products, newProd]);
//     }
//     clearProductForm();
//     closeProdModal();
//   };

//   const handleEditProductClick = (product: Product) => {
//     setEditingProduct(product);
//     setProdName(product.name);
//     setProdPrice(product.price);
//     setProdInv(product.inventory);
//     setProdCat(product.category);
//     openProdModal();
//   };

//   const handleDeleteProduct = (id: string) => {
//     setProducts(products.filter(p => p.id !== id));
//   };

//   const clearProductForm = () => {
//     setEditingProduct(null);
//     setProdName('');
//     setProdPrice(0);
//     setProdInv(0);
//     setProdCat('');
//   };

//   // Add Category
//   const handleAddCategory = () => {
//     if (!catName) return;
//     const newCat: Category = {
//       id: Math.random().toString(),
//       name: catName,
//       productCount: 0
//     };
//     setCategories([...categories, newCat]);
//     setCatName('');
//     closeCatModal();
//   };

//   const handleDeleteCategory = (id: string) => {
//     setCategories(categories.filter(c => c.id !== id));
//   };

//   return (
//     <div>
//       <Tabs defaultValue="all-products" variant="outline" styles={{ panel: { paddingTop: '20px' } }}>
//         <Group justify="space-between" mb="md">
//           <Tabs.List>
//             <Tabs.Tab value="all-products"><Text fw={500}>Products</Text></Tabs.Tab>
//             <Tabs.Tab value="categories"><Text fw={500}>Categories</Text></Tabs.Tab>
//           </Tabs.List>

//           <Group gap="xs">
//             <Button size="xs" variant="light" color="gray" leftSection={<IconPlus size={16} />} onClick={openCatModal}>
//               Create Category
//             </Button>
//             <Button size="xs" color="dark" leftSection={<IconPlus size={16} />} onClick={() => { clearProductForm(); openProdModal(); }}>
//               Add Product
//             </Button>
//           </Group>
//         </Group>

//         {/* PRODUCTS TAB */}
//         <Tabs.Panel value="all-products">
//           <Paper withBorder radius="md" shadow="xs" p="xs">
//             <Table verticalSpacing="sm" highlightOnHover>
//               <Table.Thead>
//                 <Table.Tr>
//                   <Table.Th>Product</Table.Th>
//                   <Table.Th>SKU</Table.Th>
//                   <Table.Th>Category</Table.Th>
//                   <Table.Th>Price</Table.Th>
//                   <Table.Th>Stock Availability</Table.Th>
//                   <Table.Th align="right">Actions</Table.Th>
//                 </Table.Tr>
//               </Table.Thead>
//               <Table.Tbody>
//                 {products.map((product) => (
//                   <Table.Tr key={product.id}>
//                     <Table.Td fw={600}>{product.name}</Table.Td>
//                     <Table.Td c="dimmed" fz={"xs"}>{product.sku}</Table.Td>
//                     <Table.Td><Badge color="gray" variant="light">{product.category}</Badge></Table.Td>
//                     <Table.Td fw={500}>${product.price.toFixed(2)}</Table.Td>
//                     <Table.Td>
//                       <Text size="sm" c={product.inventory <= 10 ? 'red' : 'inherit'} fw={product.inventory <= 10 ? 600 : 400}>
//                         {product.inventory} available
//                       </Text>
//                     </Table.Td>
//                     <Table.Td>
//                       <Group gap={4} justify="flex-end">
//                         <ActionIcon variant="subtle" color="blue" onClick={() => handleEditProductClick(product)}>
//                           <IconPencil size={16} />
//                         </ActionIcon>
//                         <ActionIcon variant="subtle" color="red" onClick={() => handleDeleteProduct(product.id)}>
//                           <IconTrash size={16} />
//                         </ActionIcon>
//                       </Group>
//                     </Table.Td>
//                   </Table.Tr>
//                 ))}
//               </Table.Tbody>
//             </Table>
//           </Paper>
//         </Tabs.Panel>

//         {/* CATEGORIES TAB */}
//         <Tabs.Panel value="categories">
//           <Paper withBorder radius="md" shadow="xs" p="xs">
//             <Table verticalSpacing="sm">
//               <Table.Thead>
//                 <Table.Tr>
//                   <Table.Th>Category Name</Table.Th>
//                   <Table.Th>Tracked Items</Table.Th>
//                   <Table.Th align="right">Actions</Table.Th>
//                 </Table.Tr>
//               </Table.Thead>
//               <Table.Tbody>
//                 {categories.map((cat) => (
//                   <Table.Tr key={cat.id}>
//                     <Table.Td fw={500}>{cat.name}</Table.Td>
//                     <Table.Td>{products.filter(p => p.category === cat.name).length} products</Table.Td>
//                     <Table.Td>
//                       <Group justify="flex-end">
//                         <ActionIcon variant="subtle" color="red" onClick={() => handleDeleteCategory(cat.id)}>
//                           <IconTrash size={16} />
//                         </ActionIcon>
//                       </Group>
//                     </Table.Td>
//                   </Table.Tr>
//                 ))}
//               </Table.Tbody>
//             </Table>
//           </Paper>
//         </Tabs.Panel>
//       </Tabs>

//       {/* PRODUCT MODAL */}
//       <Modal opened={productModalOpened} onClose={closeProdModal} title={editingProduct ? "Edit Product" : "Create New Product"} centered>
//         <Stack gap="md">
//           <TextInput label="Product Name" placeholder="e.g Silk Groom Tuxedo" required value={prodName} onChange={(e) => setProdName(e.currentTarget.value)} />
//           <Select label="Category" placeholder="Select item category" required data={categories.map(c => c.name)} value={prodCat} onChange={setProdCat} />
//           <Group grow>
//             <NumberInput label="Price ($)" min={0} value={prodPrice} onChange={setProdPrice} required />
//             <NumberInput label="Stock Level" min={0} value={prodInv} onChange={setProdInv} required />
//           </Group>
//           <Button color="dark" fullWidth onClick={handleSaveProduct}>Save Entry</Button>
//         </Stack>
//       </Modal>

//       {/* CATEGORY MODAL */}
//       <Modal opened={categoryModalOpened} onClose={closeCatModal} title="Add New Category" centered>
//         <Stack gap="md">
//           <TextInput label="Category Name" placeholder="e.g. Traditional, Western Wear" required value={catName} onChange={(e) => setCatName(e.currentTarget.value)} />
//           <Button color="dark" fullWidth onClick={handleAddCategory}>Create Category</Button>
//         </Stack>
//       </Modal>
//     </div>
//   );
// }

//gemini

"use client"
import React, { useEffect, useRef, useState } from 'react';
import { 
  Title, Tabs, Table, Button, Group, ActionIcon, Modal, 
  TextInput, NumberInput, Select, Stack, Paper, Badge, Text, Box
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FiPlus, FiTrash2, FiEdit2, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'; // Ultra Premium Feather Icons
import { initialProducts, initialCategories, Product, Category } from './dummyData';
import { ErrorNotification, SuccessNotification } from '@/helperfunction/Notification';
import { CreateCategory, CreateProduct, DeleteCategory, DeleteProduct, UpdateCategory, UpdateProduct, UploadProductImages } from '@/axios/dashboard/productapi';

export default function Products() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Modal State handling
  const [productModalOpened, { open: openProdModal, close: closeProdModal }] = useDisclosure(false);
  const [categoryModalOpened, { open: openCatModal, close: closeCatModal }] = useDisclosure(false);
  const [
  deleteCategoryModalOpened,
  { open: openDeleteCategoryModal, close: closeDeleteCategoryModal }
] = useDisclosure(false);

const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

const [
  deleteProductModalOpened,
  { open: openDeleteProductModal, close: closeDeleteProductModal }
] = useDisclosure(false);

  // Form Fields State
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState<number | string>(0);
  const [prodInv, setProdInv] = useState<number | string>(0);
  const [prodCat, setProdCat] = useState<string | null>('');
  const [catName, setCatName] = useState('');
const [isLoading, setIsLoading] = useState<boolean>(false);
//3 states hai image upload krvane ki 
const [productImages, setProductImages] = useState<File[]>([]);
const [imagePreviews, setImagePreviews] = useState<string[]>([]);
const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);
  // Save or Update Product (Functionality preserved exactly)
  // const handleSaveProduct = () => {
  //   if (!prodName || !prodCat) return;

  //   if (editingProduct) {
  //     setProducts(products.map(p => p.id === editingProduct.id ? {
  //       ...p, name: prodName, price: Number(prodPrice), inventory: Number(prodInv), category: prodCat
  //     } : p));
  //   } else {
  //     const newProd: Product = {
  //       id: Math.random().toString(),
  //       name: prodName,
  //       category: prodCat,
  //       price: Number(prodPrice),
  //       inventory: Number(prodInv),
  //       sku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`
  //     };
  //     setProducts([...products, newProd]);
  //   }
  //   clearProductForm();
  //   closeProdModal();
  // };
  const handleSaveProduct = () => {
  if (!prodName || !prodCat) return;

  setIsLoading(true);

  if (editingProduct) {
    UpdateProduct(editingProduct.id, {
      name: prodName,
      category: prodCat,
      price: Number(prodPrice),
      inventory: Number(prodInv),
    })
      .then((x: any) => {
        setProducts(
          products.map((p) =>
            p.id === editingProduct.id
              ? {
                  ...p,
                  name: prodName,
                  price: Number(prodPrice),
                  inventory: Number(prodInv),
                  category: prodCat,
                }
              : p
          )
        );

        setIsLoading(false);

        SuccessNotification("Product Updated Successfully");

        clearProductForm();
        closeProdModal();
      })
      .catch((e: any) => {
        console.log(e);

        setIsLoading(false);

        ErrorNotification("Failed To Update Product");
      });
  } else {
    const newProd: Product = {
      id: Math.random().toString(),
      name: prodName,
      category: prodCat,
      price: Number(prodPrice),
      inventory: Number(prodInv),
      sku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
       images: uploadedImageUrls,
    };

    CreateProduct(newProd)
      .then((x: any) => {
        setProducts([...products, newProd]);

        setIsLoading(false);

        SuccessNotification("Product Created Successfully");

        clearProductForm();
        closeProdModal();
      })
      .catch((e: any) => {
        console.log(e);

        setIsLoading(false);

        ErrorNotification("Failed To Create Product");
      });
  }
};

  const handleEditProductClick = (product: Product) => {
    setEditingProduct(product);
    setProdName(product.name);
    setProdPrice(product.price);
    setProdInv(product.inventory);
    setProdCat(product.category);
    openProdModal();
  };

  const handleEditCategoryClick = (category: Category) => {
  setEditingCategory(category);

  setCatName(category.name);

  openCatModal();
};
  // const handleDeleteProduct = (id: string) => {
  //   setProducts(products.filter(p => p.id !== id));
  // };

  const handleDeleteProduct = (id: string) => {
  setIsLoading(true);

  DeleteProduct(id)
    .then((x: any) => {
      setProducts(products.filter((p) => p.id !== id));

      setIsLoading(false);

      SuccessNotification("Product Deleted Successfully");
    })
    .catch((e: any) => {
      console.log(e);

      setIsLoading(false);

      ErrorNotification("Failed To Delete Product");
    });
};

  const clearProductForm = () => {
    setEditingProduct(null);
    setProdName('');
    setProdPrice(0);
    setProdInv(0);
    setProdCat('');
    setProductImages([]);
setImagePreviews([]);
setUploadedImageUrls([]);
  };

  // Add Category
  // const handleAddCategory = () => {
  //   if (!catName) return;
  //   const newCat: Category = {
  //     id: Math.random().toString(),
  //     name: catName,
  //     productCount: 0
  //   };
  //   setCategories([...categories, newCat]);
  //   setCatName('');
  //   closeCatModal();
  // };

  const handleAddCategory = () => {
  if (!catName) return;

  setIsLoading(true);

  if (editingCategory) {
    UpdateCategory(editingCategory.id, {
      name: catName,
      productCount: editingCategory.productCount,
    })
      .then((x: any) => {
        setCategories(
          categories.map((c) =>
            c.id === editingCategory.id
              ? {
                  ...c,
                  name: catName,
                }
              : c
          )
        );

        setEditingCategory(null);
        setCatName("");

        closeCatModal();

        setIsLoading(false);

        SuccessNotification("Category Updated Successfully");
      })
      .catch((e: any) => {
        console.log(e);

        setIsLoading(false);

        ErrorNotification("Failed To Update Category");
      });
  } else {
    const newCat: Category = {
      id: Math.random().toString(),
      name: catName,
      productCount: 0,
    };

    CreateCategory(newCat)
      .then((x: any) => {
        console.log("category : ", x);
        
        setCategories([...categories, newCat]);
          setEditingCategory(null); 

        setCatName("");

        closeCatModal();

        setIsLoading(false);

        SuccessNotification("Category Created Successfully");
      })
      .catch((e: any) => {
        console.log(e);

        setIsLoading(false);

        ErrorNotification("Failed To Create Category");
      });
  }
};

  // const handleDeleteCategory = (id: string) => {
  //   setCategories(categories.filter(c => c.id !== id));
  // };
  const handleDeleteCategory = (id: string) => {
  setIsLoading(true);

  DeleteCategory(id)
    .then((x: any) => {
      setCategories(categories.filter((c) => c.id !== id));

      setIsLoading(false);

      SuccessNotification("Category Deleted Successfully");
    })
    .catch((e: any) => {
      console.log(e);

      setIsLoading(false);

      ErrorNotification("Failed To Delete Category");
    });
};

const fileInputRef = useRef<HTMLInputElement>(null);

const handleProductImages = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const files = Array.from(e.target.files || []);

  if (!files.length) return;

  setProductImages((prev) => [...prev, ...files]);

  const previews = files.map((file) =>
    URL.createObjectURL(file)
  );

  setImagePreviews((prev) => [...prev, ...previews]);

  e.target.value = "";
};

const removeImage = (index: number) => {
  setProductImages((prev) =>
    prev.filter((_, i) => i !== index)
  );

  setImagePreviews((prev) =>
    prev.filter((_, i) => i !== index)
  );

  setUploadedImageUrls((prev) =>
    prev.filter((_, i) => i !== index)
  );
};
useEffect(() => {
  if (!productImages.length) return;

  const formData = new FormData();

  productImages.forEach((file) => {
    formData.append("images", file);
  });

  setIsLoading(true);

  UploadProductImages(formData)
    .then((res: any) => {
      console.log("Upload Success :", res);

      setIsLoading(false);

      if (res?.data?.urls) {
        setUploadedImageUrls(res.data.urls);
      }
    })
    .catch((err: any) => {
      console.log(err);

      setIsLoading(false);
    });
}, [productImages]);

  return (
    <div style={{ width: '100%' }}>
      {/* Dynamic Tab Layout Wrapper */}
      <Tabs defaultValue="all-products" variant="none">
        <Group justify="space-between" mb="xl" style={{ alignItems: 'center' }}>
          {/* Custom Designed Premium Tabs Panel */}
          <Tabs.List style={{ 
            backgroundColor: '#f1f5f9', 
            padding: '4px', 
            borderRadius: '12px', 
            border: '1px solid #e2e8f0',
            display: 'flex',
            gap: '4px'
          }}>
            <Tabs.Tab value="all-products" style={{
              borderRadius: '8px',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease'
            }}
            styles={{ tab: { '&[data-active]': { backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' } } }}
            >
              <Text size="sm" fw={600} c="#1e293b">Products</Text>
            </Tabs.Tab>
            
            <Tabs.Tab value="categories" style={{
              borderRadius: '8px',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease'
            }}
            styles={{ tab: { '&[data-active]': { backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' } } }}
            >
              <Text size="sm" fw={600} c="#1e293b">Categories</Text>
            </Tabs.Tab>
          </Tabs.List>

          {/* Luxury Actions Bar Layout */}
          <Group gap="sm">
            <Button 
              size="sm" 
              variant="outline" 
              color="gray" 
              radius="md"
              leftSection={<FiPlus size={15} />} 
              onClick={openCatModal}
              style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff', color: '#475569', fontWeight: 600 }}
            >
              Create Category
            </Button>
            <Button 
              size="sm" 
              radius="md"
              leftSection={<FiPlus size={15} />} 
              onClick={() => { clearProductForm(); openProdModal(); }}
              style={{ backgroundColor: '#0f172a', color: '#ffffff', fontWeight: 600 }}
            >
              Add Product
            </Button>
          </Group>
        </Group>

        {/* 📦 PRODUCTS TAB PANEL */}
        <Tabs.Panel value="all-products">
          <Paper 
            radius="lg" 
            p="xl" 
            style={{ 
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
              backgroundColor: '#ffffff',
              overflow: 'hidden'
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <Table verticalSpacing="md" horizontalSpacing="md" highlightOnHover style={{ minWidth: '850px' }}>
                <Table.Thead style={{ backgroundColor: '#f8fafc' }}>
                  <Table.Tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Product</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>SKU</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Category</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Price</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Stock Availability</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }} align="right">Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {products.map((product) => (
                    <Table.Tr key={product.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <Table.Td fw={600} style={{ color: '#1e293b', fontSize: '14px' }}>{product.name}</Table.Td>
                      <Table.Td style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 500, letterSpacing: '0.5px' }}>{product.sku}</Table.Td>
                      <Table.Td>
                        <Badge variant="light" color="indigo" radius="sm" style={{ fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.08)', color: '#4f46e5' }}>
                          {product.category}
                        </Badge>
                      </Table.Td>
                      <Table.Td fw={700} style={{ color: '#0f172a' }}>${product.price.toFixed(2)}</Table.Td>
                      <Table.Td>
                        {/* Dynamic Stock Indicator Pills */}
                        <Badge 
                          variant="light"
                          size="md"
                          radius="sm"
                          leftSection={product.inventory <= 10 ? <FiAlertCircle size={12} /> : <FiCheckCircle size={12} />}
                          style={{
                            fontWeight: 600,
                            padding: '4px 8px',
                            backgroundColor: product.inventory <= 10 ? 'rgba(244, 63, 94, 0.1)' : 'rgba(241, 245, 249, 1)',
                            color: product.inventory <= 10 ? '#be123c' : '#475569'
                          }}
                        >
                          {product.inventory} items left
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Group gap={6} justify="flex-end">
                          <ActionIcon variant="subtle" size="md" color="indigo" radius="md" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }} onClick={() => handleEditProductClick(product)}>
                            <FiEdit2 size={13} color="#4f46e5" />
                          </ActionIcon>
                          <ActionIcon
  variant="subtle"
  size="md"
  color="red"
  radius="md"
  style={{
    border: '1px solid #fee2e2',
    backgroundColor: '#fff5f5'
  }}
  onClick={() => {
    setSelectedProductId(product.id);
    openDeleteProductModal();
  }}
>
  <FiTrash2 size={13} color="#e11d48" />
</ActionIcon>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
          </Paper>
        </Tabs.Panel>

        {/* 🗂️ CATEGORIES TAB PANEL */}
        <Tabs.Panel value="categories">
          <Paper 
            radius="lg" 
            p="xl" 
            style={{ 
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
              backgroundColor: '#ffffff',
              overflow: 'hidden'
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <Table verticalSpacing="md" horizontalSpacing="md" style={{ minWidth: '500px' }}>
                <Table.Thead style={{ backgroundColor: '#f8fafc' }}>
                  <Table.Tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Category Name</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>Tracked Items</Table.Th>
                    <Table.Th style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }} align="right">Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {categories.map((cat) => (
                    <Table.Tr key={cat.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <Table.Td fw={600} style={{ color: '#1e293b' }}>{cat.name}</Table.Td>
                      <Table.Td>
                        <Badge color="gray" variant="neutral" style={{ backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 600 }}>
                          {products.filter(p => p.category === cat.name).length} active products
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        {/* Dynamic Action Container for Premium Edit & Delete alignment */}
                        <Group gap={6}  >
                         <ActionIcon
  variant="subtle"
  size="md"
  color="indigo"
    loading={isLoading}
  radius="md"
  style={{
    border: "1px solid #e2e8f0",
    backgroundColor: "#ffffff",
  }}
  onClick={() => handleEditCategoryClick(cat)}
>
  <FiEdit2 size={13} color="#4f46e5" />
</ActionIcon>
                        <ActionIcon
  variant="subtle"
  size="md"
  color="red"
  radius="md"
  style={{
    border: '1px solid #fee2e2',
    backgroundColor: '#fff5f5'
  }}
onClick={() => {
  setSelectedCategoryId(cat.id);
  openDeleteCategoryModal();
}}
>
  <FiTrash2 size={13} color="#e11d48" />
</ActionIcon>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
          </Paper>
        </Tabs.Panel>
      </Tabs>

      {/* 💎 PRODUCT CREATION/EDIT MODAL */}
      <Modal 
        opened={productModalOpened} 
        onClose={closeProdModal} 
        title={<Text fw={700} size="md" style={{ color: '#0f172a' }}>{editingProduct ? "Modify Global Product" : "Create New Master Entry"}</Text>} 
        centered
        radius="lg"
        overlayProps={{ backgroundOpacity: 0.35, blur: 4 }}
      >
        <Stack gap="md" mt="xs">
          <TextInput label="Product Name" placeholder="e.g. Silk Groom Tuxedo" required value={prodName} onChange={(e) => setProdName(e.currentTarget.value)} styles={{ label: { fontSize: '13px', fontWeight: 600, marginBottom: '4px' } }} />
            <Box>
  <Text size="sm" fw={600} mb={5}>
    Product Images
  </Text>

  <Button
    variant="light"
    onClick={() => fileInputRef.current?.click()}
  >
    Upload Images
  </Button>

  <input
    hidden
    multiple
    accept="image/*"
    type="file"
    ref={fileInputRef}
    onChange={handleProductImages}
  />

  <Group mt="md">
    {imagePreviews.map((img, index) => (
      <Box
        key={index}
        style={{
          position: "relative"
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "10px",
            border: "1px solid #e5e7eb"
          }}
        />

        <ActionIcon
          color="red"
          size="sm"
          style={{
            position: "absolute",
            top: 5,
            right: 5
          }}
          onClick={() => removeImage(index)}
        >
          <FiTrash2 />
        </ActionIcon>
      </Box>
    ))}
  </Group>
</Box>
          <Select label="Category" placeholder="Select item category" required data={categories.map(c => c.name)} value={prodCat} onChange={setProdCat} styles={{ label: { fontSize: '13px', fontWeight: 600, marginBottom: '4px' } }} />
          <Group grow>
            <NumberInput label="Price ($)" min={0} value={prodPrice} onChange={setProdPrice} required styles={{ label: { fontSize: '13px', fontWeight: 600, marginBottom: '4px' } }} />
            <NumberInput label="Stock Level" min={0} value={prodInv} onChange={setProdInv} required styles={{ label: { fontSize: '13px', fontWeight: 600, marginBottom: '4px' } }} />
          </Group>
          <Button fullWidth   loading={isLoading} onClick={handleSaveProduct} radius="md" style={{ backgroundColor: '#0f172a', fontWeight: 600, marginTop: '10px' }}>Save Global Parameters</Button>
        </Stack>
      </Modal>

      {/* 💎 CATEGORY MODAL */}
      <Modal 
        opened={categoryModalOpened} 
        onClose={closeCatModal} 
        // title={<Text fw={700} size="md" style={{ color: '#0f172a' }}>Add New Directory Segment</Text>} 
        title={
  <Text fw={700} size="md" style={{ color: "#0f172a" }}>
    {editingCategory
      ? "Edit Category"
      : "Add New Directory Segment"}
  </Text>
}
        centered
        radius="lg"
        overlayProps={{ backgroundOpacity: 0.35, blur: 4 }}
      >
        <Stack gap="md" mt="xs">
          <TextInput label="Category Name" placeholder="e.g. Traditional, Luxury Wear" required value={catName} onChange={(e) => setCatName(e.currentTarget.value)} styles={{ label: { fontSize: '13px', fontWeight: 600, marginBottom: '4px' } }} />
          <Button fullWidth onClick={handleAddCategory}   loading={isLoading} radius="md" style={{ backgroundColor: '#0f172a', fontWeight: 600, marginTop: '10px' }}>Deploy Category Segment</Button>
 
        </Stack>
      </Modal>

    <Modal
  opened={deleteCategoryModalOpened}
  onClose={() => {
    setSelectedCategoryId(null);
    closeDeleteCategoryModal();
  }}
  centered
  radius="lg"
  title={
    <Text fw={700} size="md">
      Delete Category
    </Text>
  }
>
  <Stack>
    <Text size="sm">
      Are you sure you want to delete this category?
    </Text>

    <Group justify="flex-end">
    <Button
  variant="default"
  onClick={() => {
    setSelectedCategoryId(null);
    closeDeleteCategoryModal();
  }}
>
  No
</Button>

<Button
  color="red"
  loading={isLoading}
  onClick={() => {
    if (selectedCategoryId) {
      handleDeleteCategory(selectedCategoryId);
    }

    setSelectedCategoryId(null);
    closeDeleteCategoryModal();
  }}
>
  Yes
</Button>
    </Group>
  </Stack>
</Modal>

<Modal
  opened={deleteProductModalOpened}
  onClose={() => {
    setSelectedProductId(null);
    closeDeleteProductModal();
  }}
  centered
  radius="lg"
  title={
    <Text fw={700} size="md">
      Delete Product
    </Text>
  }
>
  <Stack>
    <Text size="sm">
      Are you sure you want to delete this product?
    </Text>

    <Group justify="flex-end">
      <Button
        variant="default"
        onClick={() => {
          setSelectedProductId(null);
          closeDeleteProductModal();
        }}
      >
        No
      </Button>

      <Button
        color="red"
        loading={isLoading}
        onClick={() => {
          if (selectedProductId) {
            handleDeleteProduct(selectedProductId);
          }

          setSelectedProductId(null);
          closeDeleteProductModal();
        }}
      >
        Yes
      </Button>
    </Group>
  </Stack>
</Modal>
    </div>
  );
}

