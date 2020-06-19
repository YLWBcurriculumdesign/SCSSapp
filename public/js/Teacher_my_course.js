var username = window.sessionStorage.getItem("username");
if (username == null){
    alert("没有登录");
    location.href='index.html'
}else {
    var data = {"username": username}
    $.ajax({
        url: 'http://localhost:3030/Teacher_my_course',
        type: 'POST',
        data: data,
        success: function (data) {  // data是服务器向客户端返回的数据info
            var table = document.getElementById("table_id");
            for (var i = 0; i < data.length; i++) {
                var tr = table.insertRow();
                var td = tr.insertCell();
                td.innerText = data[i].Cid;
                td.id = "Cid" + i;
                tr.insertCell().innerHTML = data[i].Cname;
                tr.insertCell().innerHTML = data[i].Ctype;
                tr.insertCell().innerHTML = data[i].Cweek;
                tr.insertCell().innerHTML = data[i].Ctime;
                tr.insertCell().innerHTML = data[i].Cintroduction;

            }

        }
    });
}