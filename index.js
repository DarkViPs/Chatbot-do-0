// Supporte egs
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
    client.onMessage((message) => {
      if (message.body === 'Ola' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Ola, que bom que conseguiu fazer o tutorial, Dark fica feliz.')
          .then((result) => {
            console.log('Result: ', result); // returno de sucesso do objeto
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); // returno de erro do objeto
          });
      }
    });
  }
