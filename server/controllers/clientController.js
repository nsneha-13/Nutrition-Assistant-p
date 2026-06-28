const Client = require("../models/Client");

// ==========================
// Add Client
// ==========================
const addClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);

    res.status(201).json({
      message: "Client Added Successfully",
      client,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get All Clients
// ==========================
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).json({
      message: "Clients Retrieved Successfully",
      clients,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Client
// ==========================
const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!client) {
      return res.status(404).json({
        message: "Client Not Found",
      });
    }

    res.status(200).json({
      message: "Client Updated Successfully",
      client,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Delete Client
// ==========================
const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(404).json({
        message: "Client Not Found",
      });
    }

    res.status(200).json({
      message: "Client Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Export Functions
// ==========================
module.exports = {
  addClient,
  getClients,
  updateClient,
  deleteClient,
};