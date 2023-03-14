const db = require('./db');
const Campus = require('./Campus');
const Student = require('./Student')

Campus.hasMany(Student)
Student.belongsTo(Campus);

Student.findUnassigned = async()=> {
	const students = await Student.findAll({
		where:{
			campusId: null,
		}
	});
	return students
}

module.exports = {
  db,
  Campus,
  Student
}
