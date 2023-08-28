import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/create-crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-user-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);

    router.post('/put-update-info-crud', homeController.putUpdateInfoCRUD);
    router.get('/delete-user-crud', homeController.deleteUserCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-data-user', userController.handleEditDataUser);
    router.delete('/api/delele-user', userController.handleDeleteUser);

    router.get('/api/allcode', userController.getAllCode);

    return app.use("/", router);
}

module.exports = initWebRoutes;