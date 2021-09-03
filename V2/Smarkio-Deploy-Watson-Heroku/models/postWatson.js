const synthesizeAudio = require('../utills/watsonAPI');

const postWatson = async (req, res) => {
  const comment = await req.body.comment;
  const synthesizeParams =
  {
    text: `${comment}`,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaV3Voice',
  };
  
  synthesizeAudio(synthesizeParams);
  res.send(comment);
};

module.exports = postWatson;
