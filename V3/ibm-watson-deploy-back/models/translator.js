const translatorAPI = require("../utills/translator-API");
const postWatson = require("./postWatson");
const insert = require("./insert");

const translator = async (req, res) => {
  const { comment, source, target, commentId } = req.body;
  const { value } = target;

  const translate = await translatorAPI(comment, source, target, commentId);
   insert(commentId, translate);
   postWatson(translate,value, commentId);
   res.status(200).send(translate);
};

module.exports = translator;
