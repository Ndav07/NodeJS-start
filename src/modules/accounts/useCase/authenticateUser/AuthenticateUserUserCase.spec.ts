import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { ICreateUserDTO } from "../../repositories/IUsersRepository";
import { CreateUserUseCase } from "../createUseCase/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe("Authenticate user", () => {

    let inMemoryUsersRepository: InMemoryUsersRepository;
    let authenticateUseCase: AuthenticateUserUseCase;
    let createUserUseCase: CreateUserUseCase;

    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        authenticateUseCase = new AuthenticateUserUseCase(inMemoryUsersRepository);
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            drive_licence: "000123",
            email: "user@test.com",
            password: "1234",
            name: "user test"
        };

        await createUserUseCase.execute(user);
        
        const userAthenticate = await authenticateUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(userAthenticate).toHaveProperty("token");
    });

    it("should not be able to authenticate an no existent user", () => {
        expect(async () => {
            await authenticateUseCase.execute({
                email: "false@email.com",
                password: "falsepassword"
            });
        })
    })
});