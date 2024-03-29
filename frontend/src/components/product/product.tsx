
import { provideComponent, provideState, inject } from '@builder.io/qwik';
import { useState, useRef } from '@builder.io/qwik';
import { JSXElement } from '@builder.io/qwik';

export default provideComponent(Product);

async function Product(): Promise<JSXElement> {
  const baseURL = "http://127.0.0.1:5000";
  const newProductName = provideState<string | null>(null);
  const newProductPrice = provideState<number | null>(null);
  const newProductId = provideState<number | null>(null);
  const [product, setProduct] = provideState<any[]>([]);

  // สร้างและอัพเดทรายการสินค้าทุกครั้งที่โครงสร้างโหลด
  inject(async () => {
    console.log("request to api");
    const response = await fetch(baseURL + "/products");
    const data = await response.json();
    setProduct(data);
  });

  const deleteProduct = async (id: number) => {
    console.log(id);
    await fetch(`${baseURL}/products/${id}`, { method: 'DELETE' });
    const response = await fetch(baseURL + "/products");
    const data = await response.json();
    setProduct(data);
  };

  const updateProduct = async (id: number) => {
    const data = {
      name: newProductName.$!,
      price: newProductPrice.$!,
    };
    await fetch(`${baseURL}/products/${id}`, { method: 'PUT', body: JSON.stringify(data) });
    const response = await fetch(baseURL + "/products");
    const data = await response.json();
    setProduct(data);
  };

  const addProduct = async () => {
    console.log(parseInt(newProductId.$!));
    console.log(newProductName.$!);
    console.log(parseInt(newProductPrice.$!));
    const data = {
      id: parseInt(newProductId.$!),
      name: newProductName.$!,
      price: parseInt(newProductPrice.$!),
    };
    await fetch(`${baseURL}/products/`, { method: 'POST', body: JSON.stringify(data) });
    const response = await fetch(baseURL + "/products");
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div>
      <>Product List</>
      <table border="1">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {product.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => deleteProduct(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <>Add or Update Product</>
      <br />
      <input
        type="number"
        placeholder="Product Id"
        value={newProductId.$ || ''}
        onInput={(e) => newProductId.$ = parseInt(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Product Name"
        value={newProductName.$ || ''}
        onInput={(e) => newProductName.$ = e.target.value}
      />
      <br />
      <input
        type="number"
        placeholder="Product Price"
        value={newProductPrice.$ || ''}
        onInput={(e) => newProductPrice.$ = parseInt(e.target.value)}
      />
      <br />
      <button onClick={addProduct}>Add Product</button>
      <button onClick={() => updateProduct(parseInt(newProductId.$!))}>Update Product</button>
    </div>
  );
}