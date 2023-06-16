const sequelize = require("../util/database");

module.exports = {
  register: (req, res) => {
    console.log(req.body);
    const { email, password, firstName, lastName } = req.body;

    sequelize.query(
      `INSERT INTO users (email, password, first_name, last_name)
      VALUES ('${email}', '${password}', '${firstName}', '${lastName}')RETURNING *`
    )
    .then(dbRes => res.status(200).send(dbRes[0][0]));
  },

  login: (req, res) => {
    const { email, password } = req.body
   
    sequelize.query(
        `SELECT * FROM users
        WHERE email = '${email}'`
    )
    .then(dbRes => {
        const response = dbRes[0][0]
        if (!response) {
            res.status(404).send("The email you provided was not found")
        }
        if (response.password === password) {
            console.log("Login successful")
            res.status(200).send(response)
        } else {
            console.log("Password incorrect")
            res.status(401).send("Password incorrect")
        }
    })
    .catch(err => console.log(err))
  }
};
