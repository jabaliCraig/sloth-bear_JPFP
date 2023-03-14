const router = require("express").Router();
const { Student, Campus } = require("../db");

//🌟CRUD🌟 routes!
//🌟C🌟reate:
router.post("/", async (req, res, next) => {
	try {
		const { firstName, lastName, email, gpa, imageUrl } = req.body;
		const newStudent = await Student.create({
			firstName,
			lastName,
			email,
			gpa,
			imageUrl
		})
		res.send(newStudent);
	} catch (error) {
		next(error);
	}
});
//🌟R🌟ead:
//(collectively)
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: Campus
    })
    res.send(students)
  }
  catch (error) {
    next(error)
  }
})
//(individually)
router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findOne({
			where: {
				id: req.params.id
			},
			include: Campus
		})
    res.send(student)
  }
  catch (error) {
    next(error)
  }
})
//🌟U🌟pdate:

//🌟D🌟emolerize!

module.exports = router;
