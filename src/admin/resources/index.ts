import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { CategoryResourceOptions } from "./Category";
import { courseResourceOptions } from "./course";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Course,
        options: courseResourceOptions
    },
    {
        resource: Category,
        options: CategoryResourceOptions
    }
]