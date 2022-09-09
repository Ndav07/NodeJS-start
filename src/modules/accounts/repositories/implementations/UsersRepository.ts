import { Repository } from "typeorm";
import { PostgresConnectDataBase } from "../../../../database/data-source";
import { Users } from "../../entities/Users";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
    private repository : Repository<Users>;

    constructor() {
        const connectionDataBase = PostgresConnectDataBase;
        this.repository = connectionDataBase.getRepository(Users);
    }

    async create({ name, email, drive_licence, passaword }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, drive_licence, passaword });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<Users> {
        const user = this.repository.findOne({ where: {email: email} });
        return user;
    }
};

export { UsersRepository };