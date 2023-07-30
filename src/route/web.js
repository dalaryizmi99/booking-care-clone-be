import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/create-crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-user-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-update-info-crud', homeController.putUpdateInfoCRUD);
    router.get('/delete-user-crud', homeController.deleteUserCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;