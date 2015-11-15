import fs from "fs";

const example = process.env.EXAMPLE
if (!example) {
    console.log("please start any example lke 'EXAMPLE=01 npm start'");
}

require("./01_basic.js");

fs.readdir("./dist/examples", (err, files) => {
    if (err) {
        return console.error(err);
    }

    files.forEach(f => {
        if (f.indexOf(example) === 0) {
            require("./" + f);
        }
    });
})
