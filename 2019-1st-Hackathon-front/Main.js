var token;

$(document).ready(function () {
    var url = $(location).attr('href');
    url = url.substring(url.indexOf("?") + 1, url.length);
    token = url.split("=");

    console.log(token);

    if (token[0] == "token") {
        $(".spinner").show();
        $.ajax({
            url: "http://78b27184.ngrok.io/api/diary/diaryList",
            headers: {"token": token[1]},
            success: function (data) {
                let container = $(".container");
                data.data.forEach(data => {
                    let div = `<div class="card">
                    <div class="profile">
                        <img src="https://img.icons8.com/color/48/000000/user.png">
                        <a href="#">${data.userId}</a>
                    </div>
                    <div class="title">
                        <p>${data.title}</p>
                    </div>
                    <div class="content">
                        <p id="text">${data.content}<a href="#" id="more"></a></p>
                    </div>
                    <div class="comment">
                        <a href="#">
                            <img src="https://img.icons8.com/color/40/000000/user.png">
                        </a>
                        <div class="comment-box">
                            <input type="text" name="comment" placeholder="댓글을 입력하세요.">
                            <button type="submit" name="sub"><img src="https://img.icons8.com/color/30/000000/filled-sent.png"></button>
                        </div>
                    </div>
                </div>`
                    container.append(div);
                });
                $(".spinner").hide();
            },
            error: function (request, status, error) {
                console.log(request, status, error);
                $(".spinner").hide();
            }
        })
    } else {
        location.href = "/2019-1st-Hackathon-front/index.html";
    }
})

function logout() {
    location.href = "/2019-1st-Hackathon-front/index.html";
}
