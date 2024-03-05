document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const resultPara = document.getElementById('result');


    startBtn.addEventListener('click', function() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
          // Comenzar reconocimiento de voz
        recognition.lang = 'es-ES'; // Establecer el idioma del reconocimiento en español

        recognition.onstart = function() {
            console.log('Reconocimiento de voz iniciado.');
        };

        recognition.onresult = function(event) {
            const last = event.results.length - 1;
            const command = event.results[last][0].transcript;
            resultPara.textContent = 'Orden identificada: ' + command;
        };

        recognition.onerror = function(event) {
            console.error('Error en el reconocimiento de voz: ' + event.error);
        };

        recognition.onend = function() {
            console.log('Reconocimiento de voz finalizado.');
        };

        recognition.start();
    });
});
