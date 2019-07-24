var send= document.getElementById("send");
var parent = document.getElementById("content-items");
send.addEventListener("click", function() {

    // <li class="content-item">
    //     <div class="left-pic">
    //         <img src="./images/user.jpg" alt="">
    //     </div>
    //     <div class="message">
    //         <p class="name">Abby</p>
    //         <p class="detail">晚上一起吃饭吧</p>
    //     </div>
    //     <div class="time">
    //         <span>下午 3:50</span>
    //     </div>
    // </li>

    // jq
    var html =  $('<li class="content-item">'
                    + '<div class="left-pic">'
                        + '<img src="./images/user.jpg" alt="">'
                    + '</div>'
                    + '<div class="message">'
                        + '<p class="name">Abby</p>'
                        + '<p class="detail">晚上一起吃饭吧</p>'
                    + '</div>'
                    + '<div class="time">'
                        + '<span>下午 3:50</span>'
                    + '</div>'
                + '</li>');
    html.appendTo(parent);

    // 原生js
    // var liPart = document.createElement("li");
    // liPart.setAttribute('class', 'content-item');

    // var divPart = document.createElement("div");
    // divPart.setAttribute('class', 'left-pic');
    // liPart.appendChild(divPart);
    
    // var imgPart = document.createElement("img");
    // imgPart.setAttribute('src', './images/user.jpg');
    // divPart.appendChild(imgPart);

    // var messagePart = document.createElement("div");
    // messagePart.setAttribute('class', 'message');
    // liPart.appendChild(messagePart);

    // var pPart1 = document.createElement("p");
    // pPart1.setAttribute('class', 'name');
    // messagePart.appendChild(pPart1);
    // var p1Txt = document.createTextNode('Lia');
    // pPart1.appendChild(p1Txt);

    // var pPart2 = document.createElement("p");
    // pPart2.setAttribute('class','detail')
    // messagePart.appendChild(pPart2);
    // var p2Txt = document.createTextNode('晚上不看电影。');
    // pPart2.appendChild(p2Txt);

    // var timePart = document.createElement("div");
    // timePart.setAttribute('class', 'time');
    // liPart.appendChild(timePart);

    // var spanPart = document.createElement("span");
    // spanTxt = document.createTextNode('下午 2:49');
    // timePart.appendChild(spanPart);
    // spanPart.appendChild(spanTxt);

    // parent.appendChild(liPart);
})