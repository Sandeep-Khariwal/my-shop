import ApiHelper from "../ApiHelper";

export function CreateCategory(data: {
  id: string;
  name: string;
  productCount: number;
}) {
  return new Promise((resolve, reject) => {
    ApiHelper.post(
      `${process.env.URL}/api/v1/category/create`,
      data
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}

export function CreateProduct(data: {
  id: string;
  name: string;
  category: string;
  price: number;
  inventory: number;
  sku: string;
}) {
  return new Promise((resolve, reject) => {
    ApiHelper.post(
      `${process.env.URL}/api/v1/product/create`,
      data
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}

export function UpdateProduct(
  productId: string,
  data: {
    name: string;
    category: string;
    price: number;
    inventory: number;
  }
) {
  return new Promise((resolve, reject) => {
    ApiHelper.put(
      `${process.env.URL}/api/v1/product/update/${productId}`,
      data
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}

export function DeleteProduct(productId: string) {
  return new Promise((resolve, reject) => {
    ApiHelper.delete(
      `${process.env.URL}/api/v1/product/delete/${productId}`
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}

export function DeleteCategory(categoryId: string) {
  return new Promise((resolve, reject) => {
    ApiHelper.delete(
      `${process.env.URL}/api/v1/category/delete/${categoryId}`
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}

export function UpdateCategory(
  categoryId: string,
  data: {
    name: string;
    productCount: number;
  }
) {
  return new Promise((resolve, reject) => {
    ApiHelper.put(
      `${process.env.URL}/api/v1/category/update/${categoryId}`,
      data
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}

export function UploadProductImages(data: FormData) {
  return new Promise((resolve, reject) => {
    ApiHelper.post(
      `${process.env.URL}/api/v1/admin/uploadProductImages`,
      data
    )
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}