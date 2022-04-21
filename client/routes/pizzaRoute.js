const express = require("express");
const router = express.Router();
const Pizza = require("../../server/models/PizzaModel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    res.error.status(400).json({ message: error });
  }
});

router.post("/addpizza", async(req, res) => {

  const pizza = req.body.pizza

 try {
  const newpizza = new Pizza({
      name : pizza.name,
      image :pizza.image,
      varients : ['small','medium','large'],
      description : pizza.description,
      category : pizza.category,
      prices : [pizza.prices]
  })
  await newpizza.save()
  res.send('New Pizza Added Successfully')
 } catch (error) {
     return res.status(400).json({ message: error });
 }

});

router.post("/getpizzabyid", async(req, res) => {

  const pizzaid = req.body.pizzaid
 
  try {
      const pizza = await Pizza.findOne({_id : pizzaid})
      res.send(pizza)
  } catch (error) {
      return res.status(400).json({ message: error });
  }
   
 });

module.exports = router;
