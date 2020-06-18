$.get("http://localhost:3030/Student_select_course", {
}, function (data) {  // data是服务器返回的数据
    // alert(data.length)
    var table = document.getElementById("table_id");
    for (var i=0;i<data.length;i++){
        var tr = table.insertRow();
        var td = tr.insertCell();
        td.innerText =data[i].Cid ;
        td.id="Cid"+i;
        tr.insertCell().innerHTML=data[i].Cname;
        tr.insertCell().innerHTML=data[i].Ctype;
        tr.insertCell().innerHTML=data[i].Cweek;
        tr.insertCell().innerHTML=data[i].Ctime;
        tr.insertCell().innerHTML=data[i].Tname;
        tr.insertCell().innerHTML=data[i].Cintroduction;
        var td = tr.insertCell();
        td.innerHTML='<input id='+i+' type="checkbox">'

    }

});
function choosecourse(){
    cc=document.getElementsByName("aa")
    txt="";
    for (i=0;i<cc.length;i++){
        if(cc[i].checked) {
            var cid="cid"+i;
            CID=document.getElementById(cid).innerText
            $.post("/choosecourse", { //做post的工作
                "Cid":CID,
            },function (data) {  // data是服务器向客户端返回的数据info
                if(data == "1"){
                    alert("正选成功")
                }else if(data == "-2"){
                    alert("学号重复，请您重新输入！")
                }else{
                    alert("正选失败")
                }
            });
        }
    }
}
