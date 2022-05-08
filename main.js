// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorMsg = document.querySelector("#modal-message");
const glyphs = document.querySelectorAll(".like-glyph");

const hidden = document.querySelector("#modal");
hidden.classList.add("hidden");

// Your JavaScript code goes here!

glyphs.forEach((glyph) => {
  glyph.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (glyph.textContent !== FULL_HEART) {
          glyph.classList.add("activated-heart");
          glyph.textContent = FULL_HEART;
        } else if (glyph.textContent === FULL_HEART) {
          glyph.textContent = EMPTY_HEART;
          glyph.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        hidden.classList.remove("hidden");
        errorMsg.textContent = error;
        setTimeout(hide, 3000);
      });
  });
});

function hide() {
  return hidden.classList.add("hidden");
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
