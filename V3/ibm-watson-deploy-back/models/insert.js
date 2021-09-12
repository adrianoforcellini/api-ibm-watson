const connection = require("./connection");
const axios = require("axios");

const insert = async (commentId, translate) => {
  const comment = translate;
  const post = await axios.post(
    "https://iisniidwo9.execute-api.us-east-1.amazonaws.com/dev/comments"
  , {commentId, comment});
};

module.exports = insert;
