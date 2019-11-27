import React, { Component } from 'react'


const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

export default class STText extends Component {
    constructor() {
        super()
        this.state = {
          listening: false
        }
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
      }
      
      toggleListen() {
        this.setState({
          listening: !this.state.listening
        }, this.handleListen)
      }



      
      handleListen(){
        // handle speech recognition here 
        if (this.state.listening) recognition.start()

        let finalTranscript = ''
        recognition.onresult = event => {
          let interimTranscript = ''
    
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interimTranscript += transcript;
          }
          document.getElementById('interim').innerHTML = interimTranscript
          document.getElementById('final').innerHTML = finalTranscript
      }
    }
    
      render() {
        return (
          <div style={container}>
            <button id='microphone-btn' style={button} onClick={this.toggleListen} />
            <div id='interim' style={interim}></div>
            <div id='final' style={final}></div>
          </div>
        )
      }
    }


