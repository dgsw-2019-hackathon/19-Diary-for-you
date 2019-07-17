var token;

$(document).ready(function () {

    $(".spinner").show();
    $.ajax({
        url: "http://a8cbbb7b.ngrok.io/api/diary/diaryList",
        headers: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0IiwiaWF0IjoxNTYzMjc3MTYzLCJleHAiOjE1Njg0NjExNjMsImlzcyI6IkRHU1cuSFMuS1IiLCJzdWIiOiJ0b2tlbiJ9.4SIRwKfS-TfqUTdnRAPHceWgMjq5Ggc92VAENI-G7D8"},
        success: function (data) {
            console.log(data);
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
                            <button type="submit" name="send"><img src="https://img.icons8.com/color/30/000000/filled-sent.png"></button>
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
})

function logout() {
    location.href = "/2019-1st-Hackathon-front/index.html";
}
