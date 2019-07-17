$(document).ready(function () {
    $.ajax({
        url: "http://a8cbbb7b.ngrok.io/api/friend/followerList?userId=gwak",
        headers: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0IiwiaWF0IjoxNTYzMjc3MTYzLCJleHAiOjE1Njg0NjExNjMsImlzcyI6IkRHU1cuSFMuS1IiLCJzdWIiOiJ0b2tlbiJ9.4SIRwKfS-TfqUTdnRAPHceWgMjq5Ggc92VAENI-G7D8"},
        success: function (data) {
            console.log(data);
            let container = $(".wrap");
            data.data.forEach(data => {
                let div = `<div class="friend-card">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="https://img.icons8.com/color/100/000000/user.png">
                        </div>
                        <div class="profile-name">
                            <a href="#">${data.friendId}</a>
                        </div>
                    </div>                    
                    <div class="follow-btn">
                        <button onclick="follow()">+팔로우</button>                    
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