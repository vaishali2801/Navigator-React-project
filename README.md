# 🧭 Navigator - React Router Project

A simple and responsive **React Navigation Application** built to understand
and practice routing in React using **React Router DOM**.

The project contains multiple pages such as Home, Service, Product, and
Contact, with navigation handled using React Router DOM without reloading
the entire webpage.

---

## 📖 About the Project

**Navigator** is a beginner-friendly React project created to learn how
routing works in a Single Page Application (SPA).

The project uses React Router DOM to navigate between different pages.
It also demonstrates nested routing, dynamic routes, error handling, and
a common layout containing a navigation bar and footer.

---
##video link



## ✨ Features

- 🏠 Home page
- 🛠️ Service page with a form
- 🛍️ Product page
- 📞 Contact page
- 🧭 Navigation using React Router DOM
- 🔗 Client-side routing
- 📌 Dynamic product route using URL parameters
- ❌ Error page for invalid routes
- 🧩 Common Navbar and Footer
- 📱 Responsive UI
- 🎨 React Bootstrap components
- ⚡ Single Page Application navigation

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **React Router DOM**
- **React Bootstrap**
- **HTML5**
- **CSS3**
- **Vite**

---

## 📚 React Router DOM Concepts

This project mainly focuses on the following React Router concepts.

### `createBrowserRouter`

The project uses `createBrowserRouter()` to create the application's
routing configuration.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "product/:id",
        element: <Product />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);
```

---

### `RouterProvider`

`RouterProvider` connects the router with the React application.

```jsx
<RouterProvider router={router} />
```

---

### `Outlet`

`Outlet` is used inside `MainLayout` to display the component of the
currently selected route.

```jsx
<div className="main">
  <Navigation />
  <Outlet />
</div>

<Footer />
```

This allows the Navbar and Footer to remain common while different pages
are displayed in the middle.

---

### Dynamic Routing

The Product page uses a dynamic route:

```text
/product/:id
```

The `useParams()` hook is used to get the product ID from the URL.

```jsx
const { id } = useParams();
```

For example:

```text
/product/1
/product/2
/product/3
```

The product component can access the ID and display it dynamically.

---

### Error Handling

The project also contains an `Error` component that is used as the
`errorElement` in the router configuration.

```jsx
{
  path: "/",
  element: <MainLayout />,
  errorElement: <Error />
}
```

This helps handle invalid or unavailable routes.

---

## 🧭 Application Pages

### 🏠 Home

The Home page welcomes users to the Navigator application and introduces
the main purpose of the project.

It contains sections for:

- Navigator
- About
- Service

---

### 🛠️ Service

The Service page contains a simple form with fields for:

- Name
- Email
- Password
- Phone

The form uses React state to manage input values and handles submission
using an event handler.

---

### 🛍️ Product

The Product page displays product cards with:

- Product image
- Product title
- Product description
- Action button

The project uses a dynamic product route with `useParams()`.

---

### 📞 Contact

The Contact page provides a simple contact form containing:

- Name
- Email
- Message
- Submit button

---

## 🧭 Navigation

The Navbar provides navigation links to the main pages:

```text
Home
Service
Product
Contact
```

The navigation is implemented using React Router DOM and React Bootstrap.
The screenshots show the active page highlighted in the navigation bar.
:contentReference[oaicite:1]{index=1}

---

## 📂 Project Structure

```text
Navigator_React_Project/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── Contact.jsx
│   │   ├── Error.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── Navigation.jsx
│   │   ├── Product.jsx
│   │   └── Service.jsx
│   │
│   ├── Routes/
│   │   └── MainLayout.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The project structure in the uploaded screenshots shows separate
`Components` and `Routes` folders, with `MainLayout.jsx` handling the
shared layout. :contentReference[oaicite:2]{index=2}

---

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

- Node.js
- npm
- Basic knowledge of React

---

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/navigator-react-project.git
```

Navigate to the project directory:

```bash
cd Navigator_React_Project
```

Install dependencies:

```bash
npm install
```

If React Router DOM is not already installed:

```bash
npm install react-router-dom
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🔄 Application Flow

```text
                    Navigator App
                         │
                         ▼
                  MainLayout
                         │
              ┌──────────┴──────────┐
              │                     │
          Navigation              Footer
              │
              ▼
       React Router DOM
              │
     ┌────────┼────────┬──────────┐
     ▼        ▼        ▼          ▼
   Home    Service   Product    Contact
                       │
                       ▼
                  /product/:id
                       │
                       ▼
                   useParams()
```

---

## 📸 Screenshots

### Home Page

The Home page contains the Navigator introduction along with
Navigator, About, and Service sections. :contentReference[oaicite:3]{index=3}

### Service Page

The Service page contains a centered form for Name, Email, Password,
and Phone with a Submit button. :contentReference[oaicite:4]{index=4}

### Product Page

The Product page displays multiple product cards with images,
descriptions, and action buttons. :contentReference[oaicite:5]{index=5}

### Contact Page

The Contact page contains Name, Email, and Message fields along with
a Submit button. :contentReference[oaicite:6]{index=6}

---

## 🎯 Learning Outcomes

Through this project, I learned:

- How React Router DOM works
- How to create routes using `createBrowserRouter`
- How to use `RouterProvider`
- How to create nested routes
- How to use `Outlet`
- How to create dynamic routes
- How to use `useParams()`
- How to handle invalid routes
- How to create a common layout
- How to navigate between React pages
- How to create reusable React components
- How to use React Bootstrap for UI design
- How to manage form input using `useState`

---

## 🔮 Future Improvements

- 🔐 Add Login and Signup functionality
- 🛡️ Add Protected Routes
- 🔍 Add Product Search
- 🛒 Add Shopping Cart
- 📦 Add more dynamic product details
- 💾 Connect products with an API
- 🌙 Add Dark Mode
- 📱 Improve mobile responsiveness
- 🔄 Add loading states
- ❌ Create a better 404 Not Found page

---

## 👩‍💻 Author

**Vaishali Chauhan**

B.Tech – Information Technology

Interested in **React.js, Full stack Development, and MERN Stack Development**.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch.
6. Open a Pull Request.

---

## ⭐ Support

If you found this project helpful for learning React Router DOM,
consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the **MIT License**.

---

**Happy Coding! 🚀**
