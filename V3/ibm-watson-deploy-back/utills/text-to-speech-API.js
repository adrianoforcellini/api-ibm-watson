const { IamAuthenticator } = require("ibm-watson/auth");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const fs = require("fs");
const path = require("path");
const TEXT_TO_SPEECH_APIKEY = "QmhVtBlGIJ9Bk2ZvjZnddX060nfu_ZVIKCola0n4-Xgr";
const TEXT_TO_SPEECH_URL= "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/102d5e5a-dcd8-4f06-9180-611cb7e4a73e";

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: TEXT_TO_SPEECH_APIKEY,
    serviceUrl: TEXT_TO_SPEECH_URL,
  }),
});

const synthesizeAudio = (params, id) => {
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
