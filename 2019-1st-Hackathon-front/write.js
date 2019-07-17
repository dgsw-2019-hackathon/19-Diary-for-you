var id;
var title;
var uploadDay;
var weather;
var content;
var image;

$(document).ready(function () {
    id = $("input[name=id]");
    title = $("input[name=title]");
    uploadDay = $("input[name=uploadDay]");
    weather = $("input[name=weather]");
    content = $("input[name=content]");
    image = $("input[name=image]");
    console.log(image);
    $("#write_Btn").click(function () {
        if($(id).val() == ""){
            alert("아이디를 입력해주세요");
        }
        else if($(title).val() == ""){
            alert("제목을 입력해주세요");
        }
        else if($(uploadDay).val() == ""){
            alert("올린날짜를 입력해주세요");
        }
        else if($(weather).val() == ""){
            alert("날씨를 입력해주세요");
        }
        else if($(content).val() == ""){
            alert("내용을 입력해주세요");
        }
        else{
            $.post({
                url: "http://78b27184.ngrok.io/api/diary/write",
                headers: {"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnd2FrIiwiaWF0IjoxNTYzMzE2MzU3LCJleHAiOjE1Njg1MDAzNTcsImlzcyI6IkRHU1cuSFMuS1IiLCJzdWIiOiJ0b2tlbiJ9.KMwM-qH3_hkeWH9l_tCvn45iszvzLy3ZUG9BFV3CejU"},
                data: {"userId": id.val() , "title" : $(title).val(), "uploadDay" : $(uploadDay).val(), "weather" : $(weather).val(), "content" : $(content).val() },
                success : function (data){
                    location.href = "write.html";
                },
                error: function (request, status, error) {
                    console.dir(error)
                    alert("write.html 오류 정보입니다.")
                }
            });
        }
    })
})
