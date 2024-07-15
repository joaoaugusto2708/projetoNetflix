import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { User } from './User'
Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)
Category.hasMany(Course, { as: 'courses' })
Episode.belongsTo(Course)

export {
  Category,
  Course,
  Episode,
  User
}