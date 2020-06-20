function deletetea() {
    cc = document.getElementsByName("aa")
    for (i = 0; i < cc.length; i++) {
        if (cc[i].checked) {
            var tid = "Tid" + i;
            Tid = document.getElementById(tid).innerHTML;
            // CID = document.getElementById(cid).innerText;
            var username =window.sessionStorage.getItem("username");
            var data = { "username": username,"Tid":Tid}
            $.ajax({
                url:'http://localhost:3030/admin_delete_tea',
                type:'POST',
                data:data,
                success: function (data) {  // data是服务器向客户端返回的数据info
                    if (data == "1") {
                        alert("删除成功")
                        window.location.href="admin_delete_tea.html";
                    } else {
                        alert("删除失败")
                    }
                } });
        }
    }

}