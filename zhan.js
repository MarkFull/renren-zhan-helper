$.post("http://zhan.renren.com/letstech/word/create", 
	{ from: "", 
	syncRenren:true,
	syncDouban:true,
	syncSina:true,
	syncQqweibo:true,
	toSiteUrl:"letstech",
	feedSrc:"",
	gid:"",
	rejectionId:"",
	subject:"哈尔滨惊现机器人餐厅 WALL-E也在",
	body:"<p><a href=\"http://news.mydrivers.com/1/225/225764.htm\">http://news.mydrivers.com/1/225/225764.htm</a></p>",
	tag:"科技",
	_rtk:"dbb19195",
} );
var jsonObject = { 
		from: , 
		syncRenren:true,
		syncDouban:true,
		syncSina:true,
		syncQqweibo:true,
		toSiteUrl:"letstech",
		feedSrc:,
		gid:,
		rejectionId:,
		subject:"哈尔滨惊现机器人餐厅 WALL-E也在",
		body:"<p><a href=\"http://news.mydrivers.com/1/225/225764.htm\">http://news.mydrivers.com/1/225/225764.htm</a></p>",
		tag:"科技",
		_rtk:"dbb19195",
};
$.ajax({
	url:"http://zhan.renren.com/letstech/word/create", 
	data: $.param(jsonObject),
	type:"POST",
});

var jsonObject = { 
		from: "", 
		syncRenren:true,
		syncDouban:true,
		syncSina:true,
		syncQqweibo:true,
		toSiteUrl:"letstech",
		feedSrc:"",
		gid:"",
		rejectionId:"",
		subject:"哈尔滨惊现机器人餐厅 WALL-E也在",
		body:"<p><iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/0ee3R3tfdd4\" frameborder=\"0\" allowfullscreen></iframe></p><p><a href=\"http://news.mydrivers.com/1/225/225764.htm\">http://news.mydrivers.com/1/225/225764.htm</a></p>",
		tag:"科技",
};

$post("http://zhan.renren.com/letstech/word/update",
	"from%3D%26syncRenren%3Dtrue%26syncDouban%3Dtrue%26syncSina%3Dtrue%26syncQqweibo%3Dtrue%26toSiteUrl%3Dletstech%26feedSrc%3D%26gid%3D3602888498023057016%26rejectionId%3D%26subject%3DGoogle%2BDrive%2BSDK%26body%3D%3Ciframe%20width%3D%22560%22%20height%3D%22315%22%20src%3D%22http%3A%2F%2Fwww.youtube.com%2Fembed%2F0ee3R3tfdd4%22%20frameborder%3D%220%22%20allowfullscreen%3E%3C%2Fiframe%3E%3Cp%3E%3Ca%2Bhref%3D%22https%3A%2F%2Fdevelopers.google.com%2Fdrive%2F%22%3Ehttps%3A%2F%2Fdevelopers.google.com%2Fdrive%2F%3C%2Fa%3E%3C%2Fp%3E%26tag%3D%E7%A8%8B%E5%BA%8F%E5%91%98%26tag%3Dgoogle"	
	);

$.ajax({
	url:"http://zhan.renren.com/letstech/word/update", 
	data: $.param(jsonObject),
	type:"POST",
});