const synthesizeAudio = require("../utills/text-to-speech-API");

const postWatson = async (translate, value, commentId) => {
  const voices = [
    { id: "de", name: "de-DE_DieterV3Voice" },
    { id: "en", name: "en-GB_JamesV3Voice" },
    { id: "it", name: "it-IT_FrancescaV3Voice" },
    { id: "fr", name: "fr-FR_ReneeV3Voice" },
    { id: "ja", name: "ja-JP_EmiV3Voice" },
    { id: "ko", name: "ko-KR_HyunjunVoice" },
    { id: "es", name: "es-ES_LauraV3Voice" },
    { id: "pt", name: "pt-BR_IsabelaV3Voice" },
  ];

  const voice = voices.filter((item) => item.id === value)[0].name;

  const synthesizeParams = {
    text: `${translate}`,
    accept: "audio/mp3",
    voice: voice,
  };
  synthesizeAudio(synthesizeParams, commentId);
};

module.exports = postWatson;
