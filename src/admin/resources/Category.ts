import { ResourceOptions } from "adminjs";

export const CategoryResourceOptions : ResourceOptions = {
    navigation: 'Catágolo',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'position'],
    showProperties: ['name', 'position', 'createdAt', 'updatedAt']
}