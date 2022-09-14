import { User } from "@modules/accounts/entities/User";

interface ICreateUserDTO {
    name: string;
    password: string;
    email: string;
    drive_licence: string;
    id?: string;
    avatar?: string;
};

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
};

export { IUsersRepository, ICreateUserDTO };