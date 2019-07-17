var id;
var password;
var userName;

$(document).ready(function () {
    id = $("input[name=id]");
    userName = $("input[name=userName]");
    password = $("input[name=password]");
    $("#signin_Btn").click(function () {
        if($(id).val() == ""){
            alert("아이디를 입력해주세요");
        }
        else if($(password).val() == ""){
            alert("비밀번호를 입력해주세요");
        }
        else if($(userName).val() == ""){
            alert("이름을 입력해주세요");
        }
        else{
            $.post({
                url: "http://78b27184.ngrok.io/api/register/register",
                data: {"id": $(id).val() , "name" : $(userName).val(), "password" : $(password).val() },
                success : function (data){
                    location.href = "index.html";
                },
                error: function (request, status, error) {
                    console.dir(error)
                    alert("중복된 정보입니다.")
                }
            });
        }
    })
})
