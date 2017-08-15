(function() {
	console.log("html_model");
	$$.$setHtml({
		typingGameNav :
			'!!{navLeftList:<div class="textRight">%{name:等级}%</div><div id="%{valueId:grade}%" class="width50">%{value:3}%</div>}!!'
			+ '!!{navRightList:<div class="divPosition %{className:}%" id="%{itemId:btnSetUpGame}%">%{text:游戏设置}%</div>}!!'
		, selectDiv :
			'<div id="divSetUpGame" class="displayNone">'
				+ '!!{selectSpanList:<span class="spanSelect">%{selectName:等级选择}%'
				+		'!!{selectRdioList:<label><input type="radio" name="%{radioName:grade}%" id="%{radioId:grade1}%">%{radioValue:1}%</label>}!!'
				+ '</span>}!!'
				+ '<span class="spanSelect">'
				+		'!!{selectBtnList:<button type="button" id="%{btnId:btnConfirm}%">%{btnText:确 定}%</button>}!!'
				+ '</span>'
			+ '</div>' 
	});
}());