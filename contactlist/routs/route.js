const express = require("express");
const router = express.Router();

const Contact = require("../models/contacts");

//retreving contaact
router.get("/contacts", (req, res) => {
  Contact.find(function (err, contacts) {
    res.json(contacts);
  });
});

//add
router.post("/contact", (req, res, next) => {
  //add contact logic
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
  });

  newContact.save((err, contact) => {
    if (err) {
      res.json({ msg: "failld to add contact" });
    } else {
      res.json({ msg: "contact added successfully" });
    }
  });
});

//delete
router.delete("/contact/:id", (req, res) => {
  //delete contact method
  Contact.remove({ __id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
