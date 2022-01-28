import fs from "fs";

export const home = (req, res) => {
    const dir = './static/text';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.readdir('./static/text', (err, files) => {
        if (err) {
            res.status(500).send("Internal Server Error");
        }

        console.log(files);

        return res.render("fileHome", {files});
    });
}

export const postRead = (req, res) => {
    console.log(req.file);
    return res.redirect("/");
}

export const getRead = (req, res) => {
    const {
        params: { id }
    } = req;

    fs.readFile(`./static/text/${id}`, 'utf-8', ((err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error");
        }

        return res.render("fileRead", {data});
    }));
}