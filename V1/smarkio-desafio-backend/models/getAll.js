const connection = require("./connection");

const getAll = async (_req,res) => {
    const [select] = await connection.execute(
        'SELECT * FROM watson_api.comments;',
    );
    const comments = select.map((item) => item.comment)
    res.send(comments);
};

module.exports = getAll;
