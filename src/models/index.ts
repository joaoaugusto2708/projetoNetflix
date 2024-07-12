import { Category } from "./category";
import { Course } from "./Course";

Category.hasMany(Course);

Course.belongsTo(Category);

export {
    Category,
    Course
}