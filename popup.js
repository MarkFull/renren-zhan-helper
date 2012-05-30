$(function(){
	chrome.tabs.getSelected(function(currentTab) {
		$("#title").val(currentTab.title);
		$("#article-content").val('<a href="'+currentTab.url+'">'+currentTab.url+'</a>');
	});
	$("#sbm").click(postToRenren);
	get_rtk();
});
var cur_rtk = "";
function postToRenren(){
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
		subject:$("#title").val(),
		body:$("#article-content").val(),
		tag:"科技",
		_rtk:cur_rtk, //Changed from day to day, XZ.get_check to get the latest
	};
	$.ajax({
		url:"http://zhan.renren.com/letstech/word/create", 
		data: $.param(jsonObject),
		type:"POST",
	}).done(function(){
		$("#form").hide();
		$("#msg").show();
	});
};

function get_rtk() {
	$.get("http://zhan.renren.com/", function(data){
		// get rtk from data
		var pattern = /\w+(?=", "domain": "zhan.renren.com")/;
		var matchedResults = pattern.exec(data);
		cur_rtk = matchedResults[0];
		console.log(cur_rtk);
		if(cur_rtk == "") get_rtk(); // continue get while failure
	})
	.error(function() {
		console.log("renren is not available");
		if(cur_rtk == "") get_rtk(); // continue get while failure
	});
}