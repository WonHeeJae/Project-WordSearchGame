let jsonRes;
let new_answer;
let data;
let res;

async function insertAnswer(e) {
  e.preventDefault();
  const new_title = document.querySelector(".game-new_input-title").value;
  const new_desc = document.querySelector(".game-new_input-desc").value;

  for (let i = 0; i < 10; i++) {
    new_answer = document.querySelector(
      `.game-new-wordlist__inputdata[data-index='0${i}']`
    ).value;
    await postData(i, new_title, new_desc, new_answer);
  }

  if ((await jsonRes) === "200") {
    window.location.pathname = "/";
  }
}

async function postData(seq, title, desc, answer) {
  res = await fetch("/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: seq,
      title: title,
      description: desc,
      answer: answer,
      user: 1,
    }),
  });

  jsonRes = await res.json();
}
window.addEventListener("submit", insertAnswer);
