const express = require('express');
const router = express.Router();
const Raza = require('../models/raza');

// Create a new Raza
router.post('/', async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newRaza = await Raza.create({ nombre, descripcion });
    res.status(201).json(newRaza);
  } catch (error) {
    console.error('Error creating new Raza:', error);
    res.status(500).json({ error: 'Error creating new Raza' });
  }
});

// Get all Razas
router.get('/', async (req, res) => {
  try {
    const razas = await Raza.findAll();
    res.json(razas);
  } catch (error) {
    console.error('Error fetching Razas:', error);
    res.status(500).json({ error: 'Error fetching Razas' });
  }
});

// Get a Raza by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const raza = await Raza.findByPk(id);
    if (raza) {
      res.json(raza);
    } else {
      res.status(404).json({ error: 'Raza not found' });
    }
  } catch (error) {
    console.error('Error fetching Raza:', error);
    res.status(500).json({ error: 'Error fetching Raza' });
  }
});

// Update a Raza by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const raza = await Raza.findByPk(id);
    if (raza) {
      await raza.update({ nombre, descripcion });
      res.json(raza);
    } else {
      res.status(404).json({ error: 'Raza not found' });
    }
  } catch (error) {
    console.error('Error updating Raza:', error);
    res.status(500).json({ error: 'Error updating Raza' });
  }
});

// Delete a Raza by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const raza = await Raza.findByPk(id);
    if (raza) {
      await raza.destroy();
      res.json({ message: 'Raza deleted successfully' });
    } else {
      res.status(404).json({ error: 'Raza not found' });
    }
  } catch (error) {
    console.error('Error deleting Raza:', error);
    res.status(500).json({ error: 'Error deleting Raza' });
  }
});

module.exports = router;
