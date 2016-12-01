
function require(model){
    var script = document.createElement("script");
    script.setAttribute("src", "//show.mario256.cn/"+model+".js");
    document.body.appendChild(script);
}

require("screenshot/html2canvas");
if(typeof($) == "undefined"){
	require("static/jquery.min")
}
