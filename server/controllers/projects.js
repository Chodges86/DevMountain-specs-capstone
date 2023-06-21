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
          res.status(200).send(dbRes[0]);
        });
    
  },

  updateProject: (req, res) => {
    const { id } = req.params;
    const { seconds, minutes, hours } = req.body;

    sequelize.query(
      `UPDATE projects
         SET current_seconds = ${seconds}, current_minutes = ${minutes}, current_hours = ${hours}
         WHERE id = ${id}`
    );
  },

  addProject: (req, res) => {
    const { userId, projectTitle, customerName } = req.body;
    const hours = 0;
    const min = 0;
    const seconds = 0;
    sequelize
      .query(
        `INSERT INTO projects (user_id, title, company_name, current_hours, last_date, is_recent_delete, current_minutes, current_seconds)
        VALUES (${userId}, '${projectTitle}', '${customerName}', ${hours}, null, false, ${min}, ${seconds})`
      )
      .then((dbRes) => res.status(200).send("Success"));
  },
};
