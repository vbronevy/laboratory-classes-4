const express = require("express");

const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/", controller.getProductsView);
router.get("/add", controller.getAddProductView);
router.post("/add", controller.addNewProduct);
router.get("/new", controller.getNewProductView);
router.get("/:name", controller.getProductView);
router.delete("/:name", controller.deleteProduct);

module.exports = router;


// router.get("/", (_request, response) => {
//   response.render("products.ejs", {
//     headTitle: "Shop - Products",
//     path: "/",
//     menuLinks: MENU_LINKS,
//     activeLinkPath: "/products",
//     products: productsSlice.products,
//   });
// });

// router.get("/add", (_request, response) => {
//   response.render("add-product.ejs", {
//     headTitle: "Shop - Add product",
//     path: "/add",
//     menuLinks: MENU_LINKS,
//     activeLinkPath: "/products/add",
//   });
// });

// router.post("/add", (request, response) => {
//   productsSlice.newestProduct = request.body;
//   productsSlice.products.push(request.body);
//   response.status(STATUS_CODE.FOUND).redirect("/products/new");
// });

// router.get("/new", (_request, response) => {
//   response.render("new-product.ejs", {
//     headTitle: "Shop - New product",
//     path: "/new",
//     activeLinkPath: "/products/new",
//     menuLinks: MENU_LINKS,
//     newestProduct: productsSlice.newestProduct,
//   });
// });

module.exports = router;
