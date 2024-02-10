import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ message: "Hello Bro" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
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
