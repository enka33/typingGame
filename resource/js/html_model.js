(function() {
	console.log("html_model");
	$$.$setHtml({
		typingGameNav :
			'!!{navLeftList:<div class="textRight">%{name:�ȼ�}%</div><div id="%{valueId:grade}%" class="width50">%{value:3}%</div>}!!'
			+ '!!{navRightList:<div class="divPosition %{className:}%" id="%{itemId:btnSetUpGame}%">%{text:��Ϸ����}%</div>}!!'
		, selectDiv :
			'<div id="divSetUpGame" class="displayNone">'
				+ '!!{selectSpanList:<span class="spanSelect">%{selectName:�ȼ�ѡ��}%'
				+		'!!{selectRdioList:<label><input type="radio" name="%{radioName:grade}%" id="%{radioId:grade1}%">%{radioValue:1}%</label>}!!'
				+ '</span>}!!'
				+ '<span class="spanSelect">'
				+		'!!{selectBtnList:<button type="button" id="%{btnId:btnConfirm}%">%{btnText:ȷ ��}%</button>}!!'
				+ '</span>'
			+ '</div>' 
	});
}());