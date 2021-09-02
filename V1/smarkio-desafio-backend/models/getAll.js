const connection = require("./connection");

const getAll = async (_req,res) => {
    const [select] = await connection.execute(
        'SELECT * FROM smarkio.comments;',
    );
    const comments = select.map((item) => item.comment)
    res.send(comments);
};

module.exports = getAll;
