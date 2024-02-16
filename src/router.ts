import { Router } from "express";
import { body, validationResult } from "express-validator";
import { inputValidators } from "./modules/middleware";
import { getAllProducts } from "./handlers/products";
const router = Router();

router.get("/products", getAllProducts);

//getting products from db
router.get("/product/:id", getAllProducts);

router.put(
  "/product/:id",
  body("name").isString(),
  inputValidators,
  (req, res, next) => {}
);
router.post("/product/", () => {});
router.delete("/product/:id", () => {});

//---------------update ------------------//

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.delete("/update/:id", () => {});

//---------------updatePoints ------------------//

router.get("/updatePoints", () => {});
router.get("/updatePoints/:id", () => {});
router.put("/updatePoints/:id", () => {});
router.post("/updatePoints/", () => {});
router.delete("/updatePoints/:id", () => {});

export default router;
