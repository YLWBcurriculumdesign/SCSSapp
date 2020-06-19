function addS() {
            snumber = document.getElementById(snumber).innerText;
            sname = document.getElementById(sname).innerText;
            spwd = document.getElementById(pwd).innerText;
            ssex = document.getElementsByName(sex);
            if(ssex!=null){
                for(i=0;i<ssex.length;i++){
                    if(ssex[i].checked){
                        ssex = ssex[i].value;           
                    }
                }
            }
            sage = document.getElementById(sage).innerText;
            scollege = document.getElementById(scollege).innerText;
            smajor = document.getElementById(smajor).innerText;
            var data = {"snumber":snumber,"sname":sname,"spwd":spwd,"ssex":ssex,"sage":sage,"scollege":scollege,"smajor":smajor};
            console.log(data);
            $.ajax({
                url:'http://localhost:3030/addS',
                type:'POST',
                data:data,
                success: function (data) {  // data是服务器向客户端返回的数据info
                    if (data == "1") {
                        alert("添加成功")
                    } else if (data == "-2") {
                        alert("学号重复，请您重新输入！")
                    } else {
                        alert("添加失败")
                    }
                } });
        
    

}