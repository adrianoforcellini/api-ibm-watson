const connection = require("./connection");

const insert = async (req, res) => {
    const comment = req.body.comment;
    await connection.execute(
        `INSERT INTO smarkio.comments (comment) VALUES ('${comment}')`,
    );
    res.send(comment);
};

module.exports = insert;
