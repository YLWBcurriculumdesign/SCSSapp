
var username =window.sessionStorage.getItem("username");

if (username == null){
    alert("没有登录");
    location.href='index.html'
}else {

    var data = { "username": username}
    $.ajax({
        url:'http://39.101.177.156:3030/Teacher',
        type:'POST',
        data:data,
        success:function(data,status){
            document.getElementById("Tid").innerHTML=data[0].Tid;
            document.getElementById("Tname").innerHTML=data[0].Tname;
            document.getElementById("Tpassword").innerHTML=data[0].Tpassword;
            document.getElementById("Tsex").innerHTML=data[0].Tsex;
            document.getElementById("Introduction").innerHTML=data[0].Introduction;
        },
    });}
