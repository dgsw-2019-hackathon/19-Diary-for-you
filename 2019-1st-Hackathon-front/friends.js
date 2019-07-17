var token;

$(document).ready(function () {
    var url = $(location).attr('href');
    url = url.substring(url.indexOf("?") + 1, url.length);
    token = url.split("=");

    console.log(token);

    if (token[0] == "token") {
        $(".spinner").show();
        $.ajax({
            url: "http://78b27184.ngrok.io/api/friend/followerList",
            headers: {"token": token[1]},
            success: function (data) {
                let container = $(".container");
                data.data.forEach(data => {
                    let div = `<div class="card">
                    <div class="profile">
                        <img src="https://img.icons8.com/color/48/000000/user.png">
                        <a href="#">${data.friendId}</a>
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
