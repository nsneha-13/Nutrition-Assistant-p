const express = require("express");
const router = express.Router();

const {
  addClient,
  getClients,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

// Add Client
router.post("/add", addClient);

// Get All Clients
router.get("/", getClients);

// Update Client
router.put("/:id", updateClient);

// Delete Client
router.delete("/:id", deleteClient);

module.exports = router;