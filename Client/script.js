const baseUrl = "http://localhost:3000/products";

const productsTB = document.querySelector("#products-table");
const newProductForm = document.querySelector("#new-product-form");
const form = document.querySelector("form");

async function getProducts() {
    form.style.display = "none";
  const response = await fetch(`${baseUrl}/getAllProducts`);
  const data = await response.json();
  console.log(data.allProducts);
  buildProducts(data.allProducts);
}
function buildProducts(arr) {
  productsTB.innerHTML = `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center"
          >
            <thead
              class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Product name</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Description</th>
                <th scope="col" class="px-6 py-3">Image</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody id="products"></tbody>
          </table>
        </div>`;
  const products = document.querySelector("#products");

  arr.forEach((product) => {
    products.innerHTML += `
    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
    <th scope="row" class="px-6 py-4 text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    ${product.productName}
                </th>
                <td class="px-6 py-4 text-lg">
                    ${product.productPrice}
                </td>
                <td class="px-6 py-4 tetx-base">
                    ${product.productDescription}
                </td>
                <td class="px-6 py-4">
                    <img src="${product.productImage}" alt="" class="w-full h-12 rounded-lg">

                </td>
                <td class="px-6 py-6 flex justify-center gap-8 items-end text-lg">
                    <button class=" text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <button onclick="deleteProduct('${product._id}')" class=" text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
            </tr>
                    `;
  });
}
async function deleteProduct(productId) {
    console.log(productId)
    const response = await fetch(`${baseUrl}/deleteProduct/${productId}`, {
        method: "DELETE"
    });
    const allProducts = await response.json();
    console.log(allProducts);
    buildProducts(allProducts);
    
}

form.addEventListener("submit", async (e) => {
  const { productName, productPrice, productDescription, productImage } =
    e.target;
  const newProduct = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productDescription: productDescription.value,
    productImage: productImage.value,
  };
  const response = await fetch(`${baseUrl}/addProduct`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(newProduct),
  });
  const data = await response.json();
  
});
function addProductBtn() {
    productsTB.innerHTML = '';
    form.style.display = 'block';
}
