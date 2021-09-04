const synthesizeAudio = require('../utills/watsonAPI');

const postWatson = async (req, res) => {
  const {id, comment} =  req.body;
  const synthesizeParams =
  {
    text: `${comment}`,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaV3Voice',
  };
  
  synthesizeAudio(synthesizeParams, id);
  res.send(comment);
};

module.exports = postWatson;
