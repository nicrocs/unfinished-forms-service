const nodemailer = require("nodemailer");
const config = require("../config/project.config");
const transport = nodemailer.createTransport({
  host: config[process.env.NODE_ENV].mailHost,
  port: config[process.env.NODE_ENV].mailPort,
  auth: {
    user: config[process.env.NODE_ENV].mailUser,
    pass: config[process.env.NODE_ENV].mailPass
  }
});

const makeANiceEmail = text => `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello There!</h2>
    <p>${text}</p>

    <p>😘, Unfinished Forms</p>
  </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
