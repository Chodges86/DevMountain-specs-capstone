const sequelize = require("../util/database");
const bcrypt =  require('bcryptjs')


module.exports = {
  register: (req, res) => {
    console.log(req.body);
    const { email, password, firstName, lastName } = req.body;

    sequelize
      .query(
        `SELECT email FROM users
        WHERE email = '${email}'`
      )
      .then((dbRes) => {
        const response = dbRes[0][0];
        if (response) {
          res.status(400).send("Email address already registered.");
        } else {

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt)

          sequelize
            .query(
              `INSERT INTO users (email, password, first_name, last_name)
              VALUES ('${email}', '${hash}', '${firstName}', '${lastName}')RETURNING *`
            )
            .then((dbRes) => res.status(200).send(dbRes[0][0]))
            .catch((err) => res.status(400).send(err));
        }
      });
  },

  login: (req, res) => {
    const { email, password } = req.body;

    sequelize
      .query(
        `SELECT * FROM users
        WHERE email = '${email}'`
      )
      .then((dbRes) => {
        const response = dbRes[0][0];
        if (!response) {
          res.status(404).send("The email you provided was not found");
        }

        const isPasswordMatch = bcrypt.compareSync(password, response.password)

        if (isPasswordMatch) {
          console.log("Login successful");
          res.status(200).send(response);
        } else {
          console.log("Password incorrect");
          res.status(401).send("Password incorrect");
        }
      })
      .catch((err) => console.log(err));
  },
};
