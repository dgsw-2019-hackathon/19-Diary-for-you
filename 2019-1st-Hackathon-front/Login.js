var id;
var password;

$(document).ready(function () {
    id = $("input[name=id]");
    password = $("input[name=password]");
    $("#login_Btn").click(function () {
        if($(id).val() === ""){
            alert("아이디를 입력해주세요");
        }
        else if($(password).val() === ""){
            alert("비밀번호를 입력해주세요");
        }
        else{
            $.post({
                url: "http://78b27184.ngrok.io/api/auth/login",
                data: {"id": $(id).val() , "password" : $(password).val() },
                success : function (data){
                    location.href = "/2019-1st-Hackathon-front/main.html?token=" + encodeURI(data.data.token);
                },
                error: function (request, status, error) {
                    console.dir(error)
                    alert("아이디 혹은 오류입니다.")
                }
            });
        }
    })
})
