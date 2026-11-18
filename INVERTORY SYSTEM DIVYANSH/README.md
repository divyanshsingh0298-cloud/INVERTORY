# Inventory & Data Management System

Setup: `npm install`, copy `.env.example` to `.env`, start MongoDB, then `npm start`.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/products | Create product |
| GET | /api/products | List (category, supplier, search, minPrice, maxPrice, inStock, sort, page, limit) |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update details |
| PATCH | /api/products/:id/stock | `{ "change": 10 }` restock, `{ "change": -3 }` sale |
| DELETE | /api/products/:id | Delete |
| GET | /api/products/low-stock | quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise aggregation |

Example: `GET /api/products?category=Furniture&sort=-price&page=1&limit=5`
