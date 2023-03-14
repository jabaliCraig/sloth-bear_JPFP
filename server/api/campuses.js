const router = require('express').Router()
const {Campus, Student} = require('../db')

//🌟CRUD🌟 routes!
//🌟C🌟reate:
router.post("/", async (req, res, next) => {
	try {
		const { name, address, description, imageUrl } = req.body;
		const newCampus = await Campus.create({
			name,
			address,
			description,
			imageUrl
		})
		res.send(newCampus);
	} catch (error) {
		next(error);
	}
});
//🌟R🌟ead:
//(collectively)
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: Student
    })
    res.json(campuses)
  }
  catch (error) {
    next(error)
  }
})
//(individually)
router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findOne({
			where: {
				id: req.params.id
			},
			include: Student
		})
    res.send(campus)
  }
  catch (error) {
    next(error)
  }
})
//🌟U🌟pdate:

//🌟D🌟emolerize!

module.exports = router
