const {Router} =require('express');
const controller=require('./controller')
const router=Router();
//routes for shows
router.get("/show/view", controller.getShows)
router.post("/show/create",controller.addShows)
router.get("/show/view/:id",controller.getShowsById)
router.put("/show/update/:id",controller.updateShow)
router.delete("/show/delete/:id",controller.removeShows)

//routes for episode
router.get("/episode/view",controller.getEpi)
router.get("/episode/view/:id",controller.getEpiById)
router.post("/episode/create",controller.addEpi)
router.patch("/episode/update/:id",controller.updateEpi)
router.delete("/episode/delete/:id",controller.removeEpi)

//router.get("/episode/view",controller.getEpi)



module.exports=router;