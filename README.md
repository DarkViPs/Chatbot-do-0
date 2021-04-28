# Criando um bot do 0 para whatsapp usando o venom!

![enter image description here](https://ilovecode.com.br/wp-content/uploads/2018/12/Sem-t%C3%ADtulo-1.png)

[![npm version](https://img.shields.io/npm/v/venom-bot.svg?color=green)](https://www.npmjs.com/package/venom-bot)
![node](https://img.shields.io/node/v/venom-bot)
[![Downloads](https://img.shields.io/npm/dm/venom-bot.svg)](https://www.npmjs.com/package/venom-bot)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/orkestral/venom.svg)](http://isitmaintained.com/project/orkestral/venom 'Average time to resolve an issue')
[![Percentage of issues still open](http://isitmaintained.com/badge/open/orkestral/venom.svg)](http://isitmaintained.com/project/orkestral/venom 'Percentage of issues still open')
<a href="https://discord.gg/qCJ95FVbzR"><img src="https://img.shields.io/discord/772885202351292426?color=blueviolet&label=discord&style=flat" /></a>

[![Build Status](https://img.shields.io/github/workflow/status/orkestral/venom/build.svg)](https://github.com/orkestral/venom/actions)
[![Lint Status](https://img.shields.io/github/workflow/status/orkestral/venom/lint.svg?label=lint)](https://github.com/orkestral/venom/actions)
[![release-it](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-release--it-e10079.svg)](https://github.com/release-it/release-it)

> "Venom é um sistema de alto desempenho desenvolvido em JavaScript para criar um bot para WhatsApp, suporte para a criação de qualquer interação, como atendimento ao cliente, envio de mídia, reconhecimento de frases baseado em inteligência artificial e todos os tipos de arquitetura de design para WhatsApp."

## O que esse bot pode fazer?

|                                                            |     |
| ---------------------------------------------------------- | --- |
| 🚻 Atualização QR automática                                   | ✔   |
| 📁 Enviar **texto, imagem, vídeo, áudio e documentos**                | ✔   |
| 👥 Obter **contatos, bate-papos, grupos, membros do grupo, lista de bloqueio** | ✔   |
| 📞 Enviar contatos                                             | ✔   |
| Enviar figurinhas                                              | ✔   |
| Enviar gif                                                 | ✔   |
| Multiplas respostas                                    | ✔   |
| ⏩ Encaminhar mensagens                                      | ✔   |
| 📥 Receber mensagem                                          | ✔   |
| 👤 inserir seção do usuário                                      | ✔   |
| 📍 Send location!!                                         | ✔   |
| 🕸🕸 **e muito mais**                                       | ✔   |

Documentação do venom em: https://orkestral.github.io/venom/index.html

## Começando

Na sua desktop crie a pasta onde o bot ira ficar.

Abra seu ide (de preferência, vs)

Abra a pasta que criou.

inicie um terminal dentro da pasta (CTRL+SHIFT+')

E digite o comando:

```bash
> npm init -y
```
Após isso perceba que criou um arquivo com o nome "package" dentro da pasta que você criou.

Agora digite os seguintes comandos:

```bash
> npm i venom
```
```bash
> npm i venom-bot
```

Agora crie um arquivo na pasta do seu bot chamado:
```bash
> index.js
```

# Abra o arquivo index.js que acabou de criar e cole isso: 

```javascript
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

```

Após isso inicie o termianl e digite 
```bash
> node index.js
```

Basta escanear o codigo qr que aparecer com um whatsapp secundário na opção "Whatsapp Web"

E seu bot ja esta pronto, envie a mensagem "Ola" para o numero que você escaneou o codigo, como na imagem abaixo:

![enter image description here](https://i.ibb.co/x1wpd5q/Whats-App-Image-2021-04-28-at-05-26-58.jpg)

## Agradecimentos

Oficina de programação & Venom-bot
