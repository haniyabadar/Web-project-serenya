const express = require("express");
const router = express.Router();

router.get("/stats", (req, res) => {
  res.json({
    success: true,
    stats: {
      totalRevenue: 0,
      totalOrders: 0,
      totalCustomers: 0,
      avgOrderValue: 0
    }
  });
});

module.exports = router;
