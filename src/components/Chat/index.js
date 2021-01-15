import React, { useEffect } from 'react';
import { Widget, addResponseMessage, renderCustomComponent, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './index.css'
import api from '../services/api'
import logo from '../../assets/nati.png'
import Card from '../Card/index'
import Texto from '../Texto/index'

const Chat = () => {
  useEffect(() => {
    addResponseMessage("Seja Bem vindo!")
    //console.log(mensagem)
  }, []);

  const interagir = (inputUsuario) => {
    toggleMsgLoader()
    api.post("/result", { texto: inputUsuario })
      .then(response => {
        const mensagemNati = response.data[0].queryResult.fulfillmentText
        const mensagemNatii = response.data[0].queryResult.fulfillmentMessages
        console.log("MESNAS: ", mensagemNatii)
        setTimeout(() => {
          toggleMsgLoader()
          renderCustomComponent(Texto, { res: mensagemNatii }, true)
          //renderCustomComponent(Card, { res: mensagemNati }, true)
        }, 2000)
        //addResponseMessage(mensagemNati)
      })
      .catch(error => {
        console.log("ERRO: ", error)
      })
  }
  return (
    <div>
      <Widget
        handleNewUserMessage={interagir}
        profileAvatar={logo}
        title="Nati"
        subtitle=""
        senderPlaceHolder="Digite sua mensagem ..."
        titleAvatar={logo}
        startRecording
      />
    </div>
  );
}

export default Chat
