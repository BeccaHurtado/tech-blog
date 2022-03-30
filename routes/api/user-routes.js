const router = require('express').Router();
const { User } = require('../../models');

// GET all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET one user
router.get('/', (req, res) => {

})
// POST create new user
router.get('/', (req, res) => {

})
// POST for user login
router.get('/', (req, res) => {

})
// PUT update a user
router.get('/', (req, res) => {

})
// DELETE delete a user
router.get('/', (req, res) => {

})

module.exports = router;
