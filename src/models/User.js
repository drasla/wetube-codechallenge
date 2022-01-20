import mongoose from "mongoose";
import bcrypt from "bcrypt";

/*
PLEASE ADD YOUR USERNAME IN THIS LINE.
ALL THE MODELS YOU WILL CREATE WILL HAVE YOUR USERNAME APPENDED TO THEM
SO YOU CAN SEARCH / ADD / EDIT / DELETE YOUR DOCUMENTS ONLY.
PLEASE FOLLOW THIS STEP
WE NEED TO SHARE THE SAME DB SO NICO CAN CHECK OUT EVERYBODYS PROJECT.
🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
*/
const YOUR_USERNAME = "drasla";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

UserSchema.pre("save", async function () {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 5);
    }
});

if (YOUR_USERNAME === null || typeof YOUR_USERNAME !== "string") {
    /*
    PLEASE ADD YOUR USERNAME ON THE LINE 10
    THIS LINE WILL REMIND YOU IF YOU HAVEN'T ADDED IT
    PLEASE DONT REMOVE THIS LINE
    */
    throw Error(
        "❌  Please add your username in the line 10 of models/Movie.js  ❌"
    );
}

if (YOUR_USERNAME.includes("@")) {
    throw Error("❌  Please remove the @ from your username  ❌");
}

const model = mongoose.model(`User_${YOUR_USERNAME}`, UserSchema);

export default model;
