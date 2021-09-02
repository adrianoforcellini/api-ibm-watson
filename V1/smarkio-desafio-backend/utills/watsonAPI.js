const { IamAuthenticator } = require("ibm-watson/auth");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

let id = 0;

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_APIKEY,
    serviceUrl: process.env.TEXT_TO_SPEECH_URL,
  }),
});

const synthesizeAudio = (params) => {
  id += 1;
  textToSpeech
    .synthesize(params)
    .then((response) => {
      const audio = response.result;
      audio.pipe(
        fs.createWriteStream(path.join(__dirname, "..", `/Audios/${id}.mp3`))
      );
    })
    .catch((err) => {
      console.log("error:", err);
    });
};

module.exports = synthesizeAudio;
