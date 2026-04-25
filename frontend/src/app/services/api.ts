const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

const apiCall = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

// Products
export const fetchProducts = async () => {
  return apiCall('/products', { method: 'GET' });
};

export const fetchProductById = async (id: string) => {
  return apiCall(`/products/${id}`, { method: 'GET' });
};

export const createProduct = async (data: any) => {
  return apiCall('/products', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const updateProduct = async (id: string, data: any) => {
  return apiCall(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const deleteProduct = async (id: string) => {
  return apiCall(`/products/${id}`, { method: 'DELETE' });
};

// Orders
export const fetchOrders = async () => {
  return apiCall('/orders', { method: 'GET' });
};

export const fetchOrderById = async (id: string) => {
  return apiCall(`/orders/${id}`, { method: 'GET' });
};

export const createOrder = async (data: any) => {
  return apiCall('/orders', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const updateOrder = async (id: string, data: any) => {
  return apiCall(`/orders/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const deleteOrder = async (id: string) => {
  return apiCall(`/orders/${id}`, { method: 'DELETE' });
};
