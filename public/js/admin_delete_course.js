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
                url:'http://39.101.177.156:3030/admin_delete_course',
                type:'POST',
                data:data,
                success: function (data) {  // data是服务器向客户端返回的数据info
                    if (data == "1") {
                        alert("删除成功")
                        window.location.href="admin_delete_course.html";
                    } else {
                        alert("删除失败")
                    }
                } });
        }
    }

}