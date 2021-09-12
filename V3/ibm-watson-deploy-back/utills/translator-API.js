const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const url = "https://api.us-south.language-translator.watson.cloud.ibm.com/instances/b3c8a014-833b-4505-8ef9-81b155c3dfcb",
API_KEY = "ufiU3H4-xOBPoAvjWs9Bc1zNsjdyEtz0axB11-M9B-Yu";

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: API_KEY,
  }),
  serviceUrl: url,
});

const params = {
  text: '',
  modelId: 'pt-en'
}

const params2 = {
  text: '',
  modelId: ''
}


const translateAPI = async ( comment, source , target) => {
  let arr =[];

  const params = {
    text: `${comment}`,
    modelId: `${source.value}-en`
  }
  
  await languageTranslator.translate(params)
  .then(response => {
   arr.push(response.result.translations[0].translation);
  });

  params2.text = arr[0];
  params2.modelId=`en-${target.value}`
 await languageTranslator.translate(params2)
  .then(response => {
   arr.push(response.result.translations[0].translation);
  });
  return arr[1];
}

  
  // languageTranslator.listLanguages()
  // .then(languages => {
  //   console.log(JSON.stringify(languages, null, 2))
  //   const arrOfLanguages = languages.result.languages;
  //   console.log(JSON.stringify(arrOfLanguages, null, 2));
  //   // console.log(arrOfLanguages.map((item) => item.language +" " + item.language_name))
  // })
  // .catch(err => {
  //   console.log('error:', err);
  // });

  // linguas suportadas pelo text-to-speech
  // english, french, german, italian, japanese, korean, portuguese, spanish


module.exports = translateAPI;