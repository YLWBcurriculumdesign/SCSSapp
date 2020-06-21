
    function choosecourse() {
        cc = document.getElementsByName("aa")
        for (i = 0; i < cc.length; i++) {
            if (cc[i].checked) {
                var cid = "Cid" + i;
                CID = document.getElementById(cid).innerHTML;
                // CID = document.getElementById(cid).innerText;    
                var username =window.sessionStorage.getItem("username");
                var data = { "username": username,"CID":CID}
                $.ajax({
                    url:'http://39.101.177.156:3030/choosecourse',
                    type:'POST',
                    data:data,
                    success: function (data) {  // data是服务器向客户端返回的数据info
                        if (data == "1") {
                            alert("正选成功")
                        } else if (data == "-2") {
                            alert("学号重复，请您重新输入！")
                        } else {
                            alert("正选失败")
                        }
                    } });
            }
        }

}