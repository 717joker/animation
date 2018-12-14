var fs = require("fs");
var arr = fs.readdirSync("./");
var result = [];
arr.forEach(function(item){
	if(/\.(PNG|GIF|JPG)/i.test(item)){
		result.push(`img/`+item);
	}
})
fs.writeFileSync("./img.txt",JSON.stringify(result),"utf-8");
