// selectors

const p1_elem = document.querySelector(".onlybtn");
const p2_btn = Array.from(document.querySelectorAll(".p2_rpsbutton"));
const reset = document.querySelector(".reset");
let p1_score = document.querySelector(".p1_score");
let p2_score = document.querySelector(".p2_score");

// global state object

let state = {
  p1: {
    num: 0,
    score: 0,
  },
  p2: {
    num: 0,
    score: 0,
  },
  winner: "COMPUTER",
};
// generates random number between 0 and 2

function getRandomInt(max, min) {
  max = Math.floor(max);
  min = Math.ceil(min);
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// resets p2 button colors

function resetColors() {
  p2_btn.forEach((e) => (e.style.backgroundColor = "#0b1d31"));
  p2_btn.forEach((e) => (e.style.color = "#33c474"));
}

// plays game

function playRPS() {
  // display initial scores

  p1_score.innerHTML = state.p1.score;
  p2_score.innerHTML = state.p2.score;

  p1_elem.addEventListener("click", (e) => {
    // displays p2 full opacity

    document.querySelector(".p2_playbuttons").style.opacity = "100%";

    // resets p2 button colors
    resetColors();

    // p1 choice; p2 generated choice
    state.p1.num = parseInt(e.target.id);
    state.p2.num = getRandomInt(2, 0);

    // evaluates winner
    if (state.p1.num === state.p2.num) {
      state.winner = "DRAW. NOBODY ";
    } else if (state.p1.num === 0 && state.p2.num === 2) {
      state.winner = "PLAYER 1";
      state.p1.score += 1;
    } else if (state.p1.num === 2 && state.p2.num === 0) {
      state.winner = "COMPUTER";
      state.p2.score += 1;
    } else if (state.p1.num < state.p2.num) {
      state.winner = "COMPUTER";
      state.p2.score += 1;
    } else if (state.p1.num > state.p2.num) {
      state.winner = "PLAYER 1";
      state.p1.score += 1;
    }

    // changes color of p2 button
    p2_btn[state.p2.num].style.backgroundColor = "#33c474";
    p2_btn[state.p2.num].style.color = "#0b1d31";

    // declares winner
    document.getElementById(
      "result_statement"
    ).innerHTML = `${state.winner} WINS`;

    // displays current score
    p1_score.innerHTML = state.p1.score;
    p2_score.innerHTML = state.p2.score;

    // flash animation on result statement

    const result_flash = document.getElementById("result_statement");
    result_flash.classList.remove("flash");
    setTimeout(function () {
      result_flash.classList.add("flash");
    });

    // if (result_flash.classList.contains("flash") === true) {
    //   console.log(result_flash.classList);
    //   result_flash.classList.remove("flash");
    //   console.log(result_flash.classList);
    // }

    // document.querySelector("#result_statement").classList.remove("flash");
  });
}

// reset scores and colors
reset.addEventListener("click", (e) => {
  state.p1.score = 0;
  state.p2.score = 0;
  p1_score.innerHTML = state.p1.score;
  p2_score.innerHTML = state.p2.score;
  document.querySelector(".p2_playbuttons").style.opacity = "50%";
  resetColors();
  document.getElementById("result_statement").innerHTML = "&nbsp;";
});
playRPS();
