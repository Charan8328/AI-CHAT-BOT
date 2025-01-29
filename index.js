let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let inputEl = document.getElementById("userInput");
let sendbtn = document.getElementById("sendMsgBtn");
let index = 0;
let container = document.getElementById("chatContainer");
sendbtn.onclick = function() {
    let inputVal = inputEl.value;
    let div = document.createElement("div");
    div.classList.add("msg-to-chatbot-container");
    let pEl = document.createElement("p");
    pEl.textContent = inputVal;
    pEl.classList.add("msg-to-chatbot");
    div.appendChild(pEl);
    container.appendChild(div);

    let div1 = document.createElement("div");
    div.classList.add("msg-from-chatbot-container");
    let pEl1 = document.createElement("p");
    pEl1.textContent = chatbotMsgList[index];
    index = index + 1;
    pEl1.classList.add("msg-from-chatbot");
    div1.appendChild(pEl1);
    container.appendChild(div1)
};