const Student = require("./Student.route");
const Staff = require("./Staff.route");
const Admin = require("./Admin.route");

//routes
exports.routes = {
  Student: Student,
  Staff: Staff,
  Admin: Admin,
};
