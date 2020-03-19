function msgupdate(){
    var mesto=document.getElementById("chatbd");
    var mesfrm=document.getElementById("messIn").value;
    var para = document.createElement("P");
    if (mesfrm!="Enter text message"|| msefrm!="")
    {
    var temp=mesfrm;
    var t = document.createTextNode(temp);
    para.appendChild(t);
    mesto.appendChild(para);
    mesfrm=document.getElementById("messIn").value="";
    }
    return false;
}
