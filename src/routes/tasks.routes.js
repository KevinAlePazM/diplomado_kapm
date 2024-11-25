import { Router } from "express";
import tasksController from "../controllers/tasks.controller.js";
import { authenticateToken } from "../middlewares/authenticate.middleware.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.route('/')
    .get(tasksController.getTasks)
    .post(tasksController.createTask);

router.route('/:id')
    .get (tasksController.getTask)
    .put(tasksController.updateTask)
    .patch(tasksController.taskDone)
    .delete(tasksController.deleteTask);

export default router;