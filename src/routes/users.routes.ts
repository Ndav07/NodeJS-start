import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCase/createUseCase/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCase/updateUserAvatar/UpdateUserAvatarController";

const usersRouter = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post("/", createUserController.handle);

usersRouter.patch("/avatar", updateUserAvatarController.handle);

export { usersRouter };