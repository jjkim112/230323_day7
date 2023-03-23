function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem("quotes");

  if (!savedQuotes) {
    localStorage.setItem(
      "quotes",
      JSON.stringify([
        "열심히 살아요",
        "더 열심히 더열심히 사세요",
        "열심히 살랑께",
        "열심히 살아야 된다구!",
      ])
    );

    savedQuotes = localStorage.getItem("quotes");
  }

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
  const newQoutes = document.querySelector(".newQuotes");

  newQoutes.style.display = "inline-block";
}

function onClickRegist() {
  const quoteMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    return;
  }

  let savedQuotes = localStorage.getItem("quotes");

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem("quotes", JSON.stringify(quotesArray));
  quoteMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}`;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";
}
