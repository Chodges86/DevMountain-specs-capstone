const sequelize = require("../util/database");

module.exports = {
  getAllProjects: (req, res) => {
    const { id } = req.params;
    sequelize
      .query(
        `SELECT * FROM projects
            WHERE user_id = ${id}`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0][0]);
      });
  },

  updateProject: (req, res) => {
    const { id } = req.params;
    const { seconds, minutes, hours } = req.body
    
    sequelize.query(
        `UPDATE projects
         SET current_seconds = ${seconds}, current_minutes = ${minutes}, current_hours = ${hours}
         WHERE id = ${id}`
    )
  }
};
