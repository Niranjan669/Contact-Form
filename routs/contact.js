// routes/contact.js
import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Handle form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Redirect back to the form page after saving
    res.redirect('/');
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).send('Server Error');
  }
});

export default router;
