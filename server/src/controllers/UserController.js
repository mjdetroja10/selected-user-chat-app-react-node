import { Types } from "mongoose";
import { jwtSecretKey } from "../config/index.js";
import { UserModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import fs from "fs";

console.log(process.cwd() + "/src/uploads");

export const RegisterRequest = async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, ...rest } = req.body;

    const userByUsername = await UserModel.find({ username });

    if (userByUsername.length > 0)
      return res.status(422).send({ message: "username already used" });

    const userByEmail = await UserModel.find({ email });

    if (userByEmail.length > 0)
      return res.status(422).send({ message: "email already used" });

    console.log(req.file.filename, " req.file.filename");

    let params = {
      username,
      email,
      avatarImage: {
        data: fs.readFileSync(
          process.cwd() + "/src/uploads/" + req.file.filename
        ),
        contentType: "image/*",
      },
      isAvatarImageSet: Boolean(req.file.filename),
      ...rest,
    };

    console.log(params?.avatarImage, " parms");

    let newUser = new UserModel(params);
    newUser = await newUser.save();

    res
      .status(201)
      .send({ message: "user successfylly created", data: newUser });
  } catch (error) {
    console.log(error, "rrrrrrrrrrrrrrrrrrrrrrrr");
    res.status(500).send(error);
  }
};

export const LoginRequest = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    let user = await UserModel.findOne({ username });

    if (user) {
      if (user?.password === password) {
        // user = { ...user, avatarImage: "" };

        // console.log(user, "uuuuuuuuuuuuu");
        const token = jwt.sign(
          {
            data: {
              username,
              avatarImage: "",
              email: user?.email,
              _id: user?._id,
            },
          },
          jwtSecretKey,
          { expiresIn: "24h" }
        );

        console.log(token, "tt");

        res.send({ message: "user successfully logged in!", data: { token } });
      } else {
        res.status(422).send({
          errors: {
            params: "password",
            message: "username or password is invalid",
          },
        });
      }
    } else {
      res.status(422).send({
        errors: {
          params: "username",
          message: "username or password is invalid",
        },
      });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(500).send(error);
  }
};

export const getAllusers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.find({}).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);

    console.log();

    // if (users) {
    //   let filteredUsers = users.filter(
    //     (user) => JSON.stringify(user._id) !== id.toString()
    //   );
    //   console.log(filteredUsers, "filteredUsers");
    // }

    return res.send({ message: "succefully get all users!", data: users });
  } catch (error) {
    res.status(500).send(error);
  }
};
