function update() {
    cc = document.getElementsByName("aa")
    for (i = 0; i < cc.length; i++) {
        if (cc[i].checked) {
            var Cid = "Cid" + i;
            var Cname = "Cname" + i;
            var Ctype = "Ctype" + i;
            var Cweek = "Cweek" + i;
            var Ctime = "Ctime" + i;
            var Cintroduction = "Cintroduction" + i;
            Cid = document.getElementById(Cid).innerHTML;
            Cname = document.getElementById(Cname).innerHTML;
            Ctype = document.getElementById(Ctype).innerHTML;
            Cweek = document.getElementById(Cweek).innerHTML;
            Ctime = document.getElementById(Ctime).innerHTML;
            Cintroduction = document.getElementById(Cintroduction).innerHTML;
            var data = {
                "username": window.sessionStorage.getItem("username"),
                "Cid": Cid,
                "Cname": Cname,
                "Ctype": Ctype,
                "Cweek": Cweek,
                "Ctime": Ctime,
                "Cintroduction": Cintroduction,
            }
            $.ajax({
                url: 'http://localhost:3030/T_update_course',
                type: 'POST',
                data: data,
                success: function (data) {  // data是服务器向客户端返回的数据info
                    if (data == "1") {
                        alert("更改成功");
                        window.location.href = "Teacher_my_course.html";
                    } else {
                        alert("更改失败");
                        window.location.href = "T_update_course.html";
                    }
                }
            });
        }
    }
}