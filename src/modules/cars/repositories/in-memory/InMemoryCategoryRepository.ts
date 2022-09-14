import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class InMemoryCategoriesRepository implements ICategoriesRepository{
    categories: Category[] = [];
    
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, { name, description });
        this.categories.push(category);
    }

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(category => category.name === name);
        return category;
    }

    async list(): Promise<Category[]> {
        const categories = this.categories;
        return categories;
    }

};

export { InMemoryCategoriesRepository };