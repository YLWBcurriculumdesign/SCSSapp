
var username =window.sessionStorage.getItem("username");

if (username == null){
    alert("没有登录");
    location.href='index.html'
}else {

    var data = { "username": username}
    $.ajax({
        url:'http://localhost:3030/Teacher',
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
function deletecourse() {
    cc = document.getElementsByName("aa")
    for (i = 0; i < cc.length; i++) {
        if (cc[i].checked) {
            var CID = "Cid" + i;
            Cid = document.getElementById(CID).innerHTML;
            // CID = document.getElementById(cid).innerText;
            var username =window.sessionStorage.getItem("username");
            var data = { "username": username,"Cid":Cid}
            $.ajax({
                url:'http://localhost:3030/Teacher_delete_course',
                type:'POST',
                data:data,
                success: function (data) {  // data是服务器向客户端返回的数据info
                    if (data == "1") {
                        alert("删除成功")
                        window.location.href="Teacher_delete_course.html";
                    } else {
                        alert("删除失败")
                    }
                } });
        }
    }

}