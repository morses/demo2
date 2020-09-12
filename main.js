function hello() {
    var a = 2;
    let msg = document.createElement("p");
    let txt = document.createTextNode("Hello Javascript!!!!!");
    msg.appendChild(txt);
    document.querySelector("body").appendChild(msg);
}