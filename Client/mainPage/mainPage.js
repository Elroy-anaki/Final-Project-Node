// Define the urls
const baseUrlProducts = "http://localhost:3000/products";
const baseUrlUsers = "http://localhost:3000/users";

// Catch the elements
const main = document.querySelector("main");
const board = document.querySelector("#board");
const navbar = document.querySelector("#navbar");

function buildNavBar() {
  const token = localStorage.getItem("token");
  if(!token) {
    navbar.innerHTML = `
  <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                -->
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                -->
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <button onclick="signUpPage()">
                  <a
                    href="#signUp"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                    >SignUp</a
                  >
                </button>
                <button onclick="signInPage()">
                  <a
                    href="#signIn"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >SignIn</a
                  >
                </button>
                
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <!--
                  Dropdown menu, show/hide based on menu state.
      
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
            >Dashboard</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Team</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Projects</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Calendar</a
          >
        </div>
      </div>
    </nav>
  `;
  

  } else{
    navbar.innerHTML = `
  <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                -->
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                -->
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <button onclick="logOut()">
                  <a
                    href="#logOut"
                    class="rounded-md px-3 py-2 text-sm font-medium text-red-800 hover:bg-gray-700 hover:text-red-400"
                    >logOut</a
                  >
                </button>
                <button onclick="getProducts()">
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >All Products</a
                  >
                </button>
                <button onclick="addProductPage()">
                  <a
                    href="#addProductBtn"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Add product</a
                  >
                </button>
                
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <!--
                  Dropdown menu, show/hide based on menu state.
      
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
            >Dashboard</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Team</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Projects</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Calendar</a
          >
        </div>
      </div>
    </nav>
  `;

  }
  
}

// Sign up Page
function signUpPage() {
  board.innerHTML = `
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
                />
              </div>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="text-white rounded-lg bg-sky-500 text-xl px-3 p-2 font-semibold"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  const signUpForm = document.querySelector("#sing-up-form");
  signUpForm.addEventListener("submit", signUp);
}

// Sign in Page
function signInPage() {
  board.innerHTML = `
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
            <div  class="text-center">
              <p id="mes" class="text-rose-700 text-lg"></p>
            </div>
            <div class="text-center">
              <button
                type="button"
                class="text-white rounded-lg bg-sky-800 text-xl px-3 p-2 font-semibold"
                onclick="forgotPassword(userEmail.value)"
              >
                Forgot Password
              </button>
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
  const mes = document.querySelector("#mes");
  const signInForm = document.querySelector("#sing-in-form");
  signInForm.addEventListener("submit", signIn);
}

// Log out
async function logOut() {
  try {
    localStorage.removeItem("token")
    const response = await axios.get(`${baseUrlUsers}/logOut`, {
      withCredentials: true,
    });
    buildNavBar();
    board.innerHTML = "";
    console.log(response);
  } catch (error) {}
}

// Products Table Page
function productsPage(arr) {
  board.innerHTML = `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
async function getProducts() {
  const response = await fetch(`${baseUrlProducts}/getAllProducts`);
  const data = await response.json();
  productsPage(data.allProducts);
}

// Add product page
function addProductPage() {
  board.innerHTML = `
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
  newProductForm.addEventListener("submit", addProduct);
}
async function deleteProduct(productId) {
  console.log(productId);
  const response = await axios.delete(
    `${baseUrlProducts}/deleteProduct/${productId}`
  );
  const allProducts = await response.data;
  console.log(allProducts);
  productsPage(allProducts);
}

// Functions
const signUp = async (e) => {
  e.preventDefault();

  const { userName, userEmail, userPassword, userAddress } = e.target;
  const newUser = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
    userAddress: userAddress.value,
  };
  try {
    const response = await axios.post(`${baseUrlUsers}/signUp`, newUser);
    const data = response.data;
    alert(`${userName.value} added succesfully check your mail...`);
    signIn();
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      alert(error.response.data.msg);
    }
  }
};
const signIn = async (e) => {
  e.preventDefault();
  const { userEmail, userPassword } = e.target;
  const user = {
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };
  try {
    const response = await axios.post(`${baseUrlUsers}/signIn`, user, {
      withCredentials: true,
    });
    board.innerHTML = `<h1 class="text-2xl text-center">Welcome...</h1>`;
    const { token } = response.data;

    localStorage.setItem("token", token);
    buildNavBar();
    getProducts();
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      mes.innerHTML = error.response.data.msg;
    }
  }
};

const forgotPassword = async (userEmail) => {
  if (!userEmail) alert("Enter your email");
  await axios.post(`${baseUrlUsers}/forgotPassword`, {
    userEmail: userEmail,
  });
};
const addProduct = async (e) => {
  const { productName, productPrice, productDescription, productImage } =
    e.target;
  const newProduct = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productDescription: productDescription.value,
    productImage: productImage.value,
  };
  const response = await axios.post(
    `${baseUrlProducts}/addProduct`,
    newProduct
  );
};
buildNavBar();
signUp();
{/*  */}