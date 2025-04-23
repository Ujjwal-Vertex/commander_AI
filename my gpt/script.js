// Speech recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
const btn = document.querySelector("#listen-btn");

// Attach click event listener to the button
btn.addEventListener("click", function () {
  // Function to convert text to speech
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    console.log("Speaking:", text); // Debugging output
    window.speechSynthesis.speak(utterance);
  }

  // Function to handle recognized commands
  function handleCommand(command) {
    console.log("Command Received:", command); // Debugging output

    if (command.includes("open youtube")) {
      speak("Opening YouTube...");
      window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open google")) {
      speak("Opening Google...");
      window.open("https://www.google.com", "_blank");
    } else if (command.includes("open facebook")) {
      speak("Opening Facebook...");
      window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open instagram")) {
      speak("Opening Instagram...");
      window.open("https://www.instagram.com", "_blank");
    } else if (command.includes("open whatsapp")) {
      speak("Opening WhatsApp...");
      window.open("https://www.whatsapp.com", "_blank");
    } else if (command.includes("open calculator")) {
      speak("Opening your calculator...");
      window.open("https://ujjwaltri-calculator.netlify.app/", "_blank");
    } else if (command.includes("open stopwatch")) {
      speak("Opening your Stopwatch...");
      window.open("https://ujjwaltri-stopwatch.netlify.app/", "_blank");
    } else if (command.includes("open text reader")) {
      speak("Opening your text reader...");
      window.open("https://ujjwaltri-ai.netlify.app/", "_blank");
    } else if (command.includes("open travel agency")) {
      speak("Opening your travel agency...");
      window.open("https://ujjwaltri-travel-go.netlify.app/", "_blank");
    } else if (command.includes("open my profile")) {
      speak("Opening your Profile...");
      window.open("https://ujjwaltri-profile.netlify.app/", "_blank");
    } else if (command.includes("open chat gpt")) {
      speak("Opening chat gpt...");
      window.open("https://chatgpt.com/", "_blank");
    } else if (command.includes("open github")) {
      speak("Opening github...");
      window.open("https://github.com/ujjwal-vertex", "_blank");
    } else if (command.includes("open linkedin")) {
      speak("Opening linkedin...");
      window.open("https://www.linkedin.com/in/ujjawal-kumar-169297333/", "_blank");
    } else if (command.includes("play song")) {
      speak("Ok now play song...");
      window.open("https://www.youtube.com/watch?v=CMdADqjxPuw", "_blank");
    } else if (command.includes("open brother github")) {
      speak("Ok opening Shlok gtihub...");
      window.open("https://github.com/shlok-vertex", "_blank");
    } else if (command.includes("play game")) {
      speak("Ok now play game...");
      window.open("https://ujjwaltri-game.netlify.app/", "_blank");
    } else if (command.includes("open html compiler")) {
      speak("Ok now opening...");
      window.open("https://ujjwaltri-compiler.netlify.app/", "_blank");
    } else if (command.includes("who are you")) {
      speak("my name is Ai Assistant. I am here to help you.");
      window.open("https://ujjwaltri-compiler.netlify.app/", "_blank");
    } else {
      // Perform a Google search if command not recognized
      speak("Searching Google for " + command);
      window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
    }
  }

  // Greet the user and then start listening
  speak("Hello, how can I help you?");
  
  // Delay to ensure greeting completes before starting recognition
  setTimeout(() => {
    btn.innerHTML = "Listening...👂";
    btn.classList.add("listening");
    console.log("Speech Recognition Started..."); // Debugging output
    recognition.start();
  }, 2500);

  // When a result is received
  recognition.onresult = (event) => {
    console.log("Speech Event:", event); // Debugging output
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Recognized:", command); // Debugging output
    handleCommand(command);
  };

  // When recognition ends
  recognition.onend = () => {
    console.log("Speech Recognition Ended."); // Debugging output
    btn.innerHTML = "Start Listening";
    btn.classList.remove("listening");
  };
});
