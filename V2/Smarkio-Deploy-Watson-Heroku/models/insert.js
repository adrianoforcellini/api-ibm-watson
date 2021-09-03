const connection = require("./connection");
const axios = require("axios");

const insert = async (req, res) => {
const { commentId, comment} = req.body;
  const post = await axios.post(
    "https://uj5tbktjfh.execute-api.us-east-1.amazonaws.com/dev/comments"
  , {commentId, comment});
  if (post){
      res.status(200).send({commentId,comment});
  }else{
    res.status(403).send({error: 'comentários nao encontrados'});
  }
};

module.exports = insert;
