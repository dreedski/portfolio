// this is it

var quotes = [
    
"I love deadlines. I love the whooshing noise they make as they go by. <br>-Douglas Adams",
"I may not have gone where I intended to go, but I think I have ended up where I needed to be. <br>-Douglas Adams",
"It is hard to fail, but it is worse never to have tried to succeed <br>-Theodore Roosevelt",
"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live <br>-John Woods"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];