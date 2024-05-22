[![Youtube][youtube-shield]][youtube-url]
[![Facebook][facebook-shield]][facebook-url]
[![Facebook Page][facebook-shield]][facebook-group-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![VS Code Theme][vscode-shield]][vscode-theme-url]
[![NPM Package][npm-shield]][npm-package-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <a href="https://portfolio-noyonalways.vercel.app/">
        <img src="https://i.ibb.co/c64q254/noyon-logo-dark.png" alt="Logo" width="80" height="80"/>
    </a>
    <h3 align="center">
        <a href="https://github.com/noyonalways/l2-assignment-2" target="_blank" >
            Simple E-commerce Application
        </a>
    </h3>
</p>

<a href="https://simple-ecom-backend.vercel.app/" target="_blank" >
    <img alt="Static Badge" src="https://img.shields.io/badge/Live_Server-Link-link?style=flat">
</a>
<img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fsimple-ecom-backend.vercel.app">

## Description:

A Simple E-commerce Back-end Application. There are several features available in this application

### Product:

- POST: We can create a new product
- GET: We can get a list of all products
- GET: We can get a list of products by using 'searchTerm=product_name_or_category'
- GET: We can get a single product by productId '(\_id)'
- PUT: We can update a single product by productId (\_id)'
- DELETE: We can delete a single product by productId '(\_id)'

### Order:

- POST: We can create a new product
- GET: We can get a list of all products
- GET: We can get a list of all products by using 'email=user_email_address'

## Run Locally:

To run the Simple E-commerce Back-end Application locally, follow these steps:

### 1. Clone the repository from GitHub:

```sh
git clone https://github.com/noyonalways/l2-assignment-2.git
```

### 2. Navigate into the project directory:

```sh
cd l2-assignment-2
```

### 3. Install dependencies (npm or yarn):

```sh
npm install
```

or

```sh
yarn
```

### 4. Set up environment variables:

- Create a .env file in the root directory.
- Define necessary environment variables such as database connection URL, PORT, etc. Refer to any provided `.env.example` file or documentation for required variables.

```sh
PORT=
DATABASE_URL=
NODE_ENV=development
```

## Available Endpoints:

### Product:

- `/api/products` **POST**
- `/api/products` **GET**
  - `/api/products?searchTerm=product_name_or_category`
- `/api/products/:productId` **GET**
- `/api/products/:productId` **PUT**
- `/api/products/:productId` **DELETE**

### Order:

- `/api/orders` **POST**
- `/api/orders` **GET**
- `/api/orders?email=user_email_address`

## Contact

- Email: [noyonrahman2003@gmail.com](mailto:noyonrahman2003@gmail.com)
- LinkedIn: [Noyon Rahman](https://linkedin.com/in/noyonalways)

<!-- MARKDOWN LINKS & IMAGES -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=round-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/@deskofnoyon
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=round-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/noyonalways
[facebook-group-url]: https://facebook.com/webbronoyon
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=round-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/noyonalways
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=round-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/noyonalways
[vscode-shield]: https://img.shields.io/badge/-VS%20Code%20Theme-black.svg?style=round-square&logo=visualstudiocode&colorB=555
[vscode-theme-url]: https://marketplace.visualstudio.com/items?itemName=noyonalways.codevibe-themes
[npm-shield]: https://img.shields.io/badge/-Package-black.svg?style=round-square&logo=npm&color=555&logoColor=white
[npm-package-url]: https://www.npmjs.com/package/the-magic-readme
