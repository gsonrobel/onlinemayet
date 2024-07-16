import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'

import { protect, admin, saler, } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, saler, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, saler,deleteProduct)
  .put(protect, admin, saler,updateProduct)


export default router
