const connection = require("./connection");
const axios = require("axios");

const getAll = async (_req, res) => {
  const { data } = await axios.get(
"https://iisniidwo9.execute-api.us-east-1.amazonaws.com/dev/comments"
  );
  if (data){
      res.status(200).send(data.ById);
  }else{
    res.status(403).send({error: 'comentários nao encontrados'});
  }
};

module.exports = getAll;
