var username =window.sessionStorage.getItem("username");
if (username == null){
    alert("没有登录");
    location.href='index.html'
}else {
    var table = document.getElementById("table_id");
    for (var i = 0; i < 4; i++) {
        var tr = table.insertRow();
        var t = i + 1;
        tr.insertCell().innerHTML = '第' + t + '节';
        tr.insertCell().id = 'MON_' + t;
        tr.insertCell().id = 'Tue_' + t;
        tr.insertCell().id = 'Wed_' + t;
        tr.insertCell().id = 'Thu_' + t;
        tr.insertCell().id = 'Fri_' + t;

    };
    var username = window.sessionStorage.getItem("username");
    var data = {"username": username}
    $.ajax({
        url: 'http://localhost:3030/myclass',
        type: 'POST',
        data: data,
        success: function (data) {  // data是服务器向客户端返回的数据info
            for (var m = 0; m < data.length; m++) {
                var p;
                var q;
                var TDid
                switch (data[m].Cweek) {
                    case "周一" :
                        p = "MON";
                        break;
                    case "周二" :
                        p = "Tue";
                        break;
                    case "周三" :
                        p = "Wed";
                        break;
                    case "周四" :
                        p = "Thu";
                        break;
                    case "周五" :
                        p = "Fri";
                        break;
                }

                switch (data[m].Ctime) {
                    case "第一节" :
                        q = 1;
                        break;
                    case "第二节" :
                        q = 2;
                        break;
                    case "第三节" :
                        q = 3;
                        break;
                    case "第四节" :
                        q = 4;
                        break;

                }
                TDid = p + '_' + q;
                document.getElementById(TDid).innerHTML = data[m].Cname;
            }

        }
    });
}