import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

import config from "../../../smtp";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter
    .sendMail({
      from: `"GABRIEL DEV PORTFOLIO 🖥️" <${config.user}>`,
      to: "gdeoliveira.1999@gmail.com, g.prado0102@gmail.com",
      replyTo: req.body.email,
      subject: "CONTATO FEITO PELO PORTFOLIO",
      text: req.body.message,
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
}
