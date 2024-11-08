const baseUrlProducts = "http://localhost:3000/products";
const baseUrlUsers = "http://localhost:3000/users";
const main = document.querySelector("main");
const signUpSection = document.querySelector("#sign-up-section");
const signInSection = document.querySelector("#sign-in-section");
const productsTB = document.querySelector("#products-table");
const newProductSection = document.querySelector("#new-product-section");

async function getProducts() {
  newProductSection.innerHTML = "";
  signUpSection.innerHTML = "";
  const response = await fetch(`${baseUrlProducts}/getAllProducts`);
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
  console.log(productId);
  const response = await fetch(
    `${baseUrlProducts}/deleteProduct/${productId}`,
    {
      method: "DELETE",
    }
  );
  const allProducts = await response.json();
  console.log(allProducts);
  buildProducts(allProducts);
}

function addProductBtn() {
  productsTB.innerHTML = "";
  signUpSection.innerHTML = "";
  console.log("SDSDSD");
  newProductSection.innerHTML = `

  <form id="new-product-form"
          class="max-w-md mx-auto border-2 border-slate-500 p-8 rounded-lg bg-slate-200"
          >
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="productName"
              id="productName"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="productName"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Name</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="productPrice"
              id="productPrice"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="productPrice"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Price</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="productDescription"
              id="productDescription"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="productDescription"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Description</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="url"
              name="productImage"
              id="productImage"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="productImage"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Image (URL)</label
            >
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </div>
        </form>
  `;
  const newProductForm = document.querySelector("#new-product-form");
  newProductForm.addEventListener("submit", async (e) => {
    const { productName, productPrice, productDescription, productImage } =
      e.target;
    const newProduct = {
      productName: productName.value,
      productPrice: Number(productPrice.value),
      productDescription: productDescription.value,
      productImage: productImage.value,
    };
    const response = await fetch(`${baseUrlProducts}/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
  });
}

function signUp() {
  productsTB.innerHTML = "";
  newProductSection.innerHTML = "";
  signInSection.innerHTML = "";
  signUpSection.innerHTML = `
  <div class="border-2 border-black w-2/6 m-auto rounded-xl">
      <div class="w-full border-b-2 border-b-blue">
        <div
          class="border-b-2 border-b-gray-800 bg-slate-300 rounded-t-xl flex justify-center items-center"
        >
          <h1 class="text-3xl text-sky-500 my-3 ">Register Form</h1>
        </div>
        <div>
          <form id="sing-up-form" class="w-full rounded-b-xl p-10">
            <div class="flex flex-col px-4 py-2">
              <div>
                <label for="userName" class="ml-1">Full Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  class="bg-slate-200 w-full h-9 rounded-md mb-5 text-black font-semibold border-2 border-sky-200"
                  placeholder=" Your name..."
                  required
                />
              </div>
              <div>
                <label for="userEmail" class="mb-1 ml-1">Email</label>
                <input
                  type="email"
                  name="userEmail"
                  id="userEamil"
                  class="bg-slate-200 w-full h-9 rounded-md mb-5 text-black font-semibold border-2 border-sky-200"
                  placeholder=" Your email..."
                  required
                />
              </div>
              <div>
                <label for="userPassword" class="mb-1 ml-1">Password</label>
                <input
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  class="bg-slate-200 w-full h-9 rounded-md mb-5 text-black font-semibold border-2 border-sky-200"
                  placeholder=" Your password.."
                  required
                />
              </div>
              <div>
                <label for="userAddress" class="mb-1 ml-1">City</label>
                <input
                  type="text"
                  name="userAddress"
                  id="userAddress"
                  class="bg-slate-200 w-full h-9 rounded-md mb-5 text-black font-semibold border-2 border-sky-200"
                  placeholder=" Live in...."
                  required
                />
              </div>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="text-white rounded-lg bg-sky-500 text-xl px-3 p-2 font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  const signUpForm = document.querySelector("#sing-up-form");
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { userName, userEmail, userPassword, userAddress } = e.target;
    const newUser = {
      userName: userName.value,
      userEmail: userEmail.value,
      userPassword: userPassword.value,
      userAddress: userAddress.value,
    };
    console.log(newUser);
    const response = await axios.post(`${baseUrlUsers}/signUp`, newUser);
    alert(`The user: ${userName.value} added succesfully`);
    signIn();
  });
}

function signIn() {
  productsTB.innerHTML = "";
  newProductSection.innerHTML = "";
  signUpSection.innerHTML = "";
  signInSection.innerHTML = `
<div class="border-2 border-black w-2/6 m-auto rounded-xl">
      <div class="w-full border-b-2 border-b-blue">
        <div
          class="border-b-2 border-b-gray-800 bg-slate-300 rounded-t-xl flex justify-center items-center"
        >
          <h1 class="text-3xl text-sky-500 my-3 tracking-wide">Welcome back!</h1>
        </div>
        <div>
          <form id="sing-in-form" class="w-full rounded-b-xl p-10">
            <div class="flex flex-col px-4 py-2">
              
              <div>
                <label for="userEmail" class="mb-1 ml-1">Email</label>
                <input
                  type="email"
                  name="userEmail"
                  id="userEamil"
                  class="bg-slate-200 w-full h-9 rounded-md mb-5 text-black font-semibold border-2 border-sky-200"
                  placeholder=" Your email..."
                  required
                />
              </div>
              <div>
                <label for="userPassword" class="mb-1 ml-1">Password</label>
                <input
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  class="bg-slate-200 w-full h-9 rounded-md mb-5 text-black font-semibold border-2 border-sky-200"
                  placeholder=" Your password.."
                  required
                />
              </div>
              
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="text-white rounded-lg bg-sky-500 text-xl px-3 p-2 font-semibold"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
`;
  const signInForm = document.querySelector("#sing-in-form");
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = e.target;
    const user = {
      userEmail: userEmail.value,
      userPassword: userPassword.value,
    };
    const response = await axios.post(`${baseUrlUsers}/signIn`, user, { withCredentials: true });
    console.log(response.data)
  });
}
