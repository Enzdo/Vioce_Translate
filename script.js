let recognition = null; 

$('#start-button').click(function() { 
  recognition = new window.webkitSpeechRecognition(); 
  recognition.lang = 'fr-FR'; 
  
  recognition.onresult = function(event) { 
    const transcription = event.results[event.results.length - 1][0].transcript; 
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=en&dt=t&q=${encodeURI(transcription)}`; 
  
    $.getJSON(url, function(data) { 
      const translatedText = data[0][0][0]; 
      $('#transcription').html(translatedText); 
    });
  };
  
  recognition.start(); 
});

$('#stop-button').click(function() {
  recognition.stop(); 
});
