window.onload = function() {
	console.log("view");
	var pro = "TypingGame.typingGame";
	$$.mkObj(pro);
	
	//console.log($$.$getHtmlParameter("selectDiv"));
	$$.$getIdSet(pro, document);
	$$.$setModel(pro + ".SelectModel", "selectModel");
	$$.$setModel(pro + ".BlockModel", "blockModel");
	
	$$.$wedgeHtml(pro + ".navHeader", $$.$getHtml("typingGameNav"), {
		navLeftList : [{
			name : "等级:",
			valueId : "grade",
			value : "1",
		},{
			name : "生命:",
			valueId : "life",
			value : "3",
		},],
		navRightList : [{
			className : "divRight15",
			itemId : "btnSetUpGame",
			text : "游戏设置",
		},{
			className : "displayNone divRight15",
			itemId : "btnPauseGame",
			text : "暂停游戏",
		},{
			className : "displayNone divRight15",
			itemId : "btnContinueGame",
			text : "继续游戏",
		},{
			className : "divRight5",
			itemId : "btnStartGame",
			text : "开始游戏",
		},{
			className : "displayNone divRight5",
			itemId : "btnEndGame",
			text : "结束游戏",
		}],
	});
	
	$$.$wedgeHtml(pro + ".section", $$.$getHtml("selectDiv"), {
		selectSpanList : [{
			selectName : "等级选择",
			selectRdioList : [{
				radioName : "grade",
				radioId : "grade1",
				radioValue : "1",
			},{
				radioName : "grade",
				radioId : "grade2",
				radioValue : "2",
			},{
				radioName : "grade",
				radioId : "grade3",
				radioValue : "3&nbsp",
			},],
		},{
			selectName : "生命选择",
			selectRdioList : [{
				radioName : "life",
				radioId : "life3",
				radioValue : "3",
			},{
				radioName : "life",
				radioId : "life5",
				radioValue : "5",
			},{
				radioName : "life",
				radioId : "life7",
				radioValue : "7",
			},],
		},],
		selectBtnList : [{
			btnId : "btnConfirm",
			btnText : "确 定",
		},{
			btnId : "btnCancel",
			btnText : "取 消",
		},],								
	});
	
	$$.$wedgeHtml(pro + ".footer", $$.$getHtml("typingGameNav"), {
		navLeftList : [{
			name : "得分:",
			valueId : "score",
			value : "0",
		},{
			name : "余命:",
			valueId : "remainLife",
			value : "3",
		},],
		navRightList : [{
			className : "divRight5 displayNone",
			itemId : "btnPlayMusic",
			text : "来点音乐",
		}],
	});
	
	$$.$getIdSet(pro, document);
	var addAction = $$.$setElementAction;
	addAction(pro + ".divSetUpGame", {
		showSelectDiv: function() {
			$($$.$getId(pro, "divSetUpGame")).removeClass("displayNone");
		},
		hideSelectDiv: function() {
			$($$.$getId(pro, "divSetUpGame")).addClass("displayNone");
		}
	});
	
	addAction(pro + ".btnSetUpGame", {
		show: function() {
			$($$.$getId(pro, "btnSetUpGame")).removeClass("displayNone");
		},
		hide: function() {
			$($$.$getId(pro, "btnSetUpGame")).addClass("displayNone");
		}
	});
	
	addAction(pro + ".btnPauseGame", {
		show: function() {
			$($$.$getId(pro, "btnPauseGame")).removeClass("displayNone");
		},
		hide: function() {
			$($$.$getId(pro, "btnPauseGame")).addClass("displayNone");
		}
	});
	
	addAction(pro + ".btnContinueGame", {
		show: function() {
			$($$.$getId(pro, "btnContinueGame")).removeClass("displayNone");
		},
		hide: function() {
			$($$.$getId(pro, "btnContinueGame")).addClass("displayNone");
		}
	});
	
	addAction(pro + ".btnStartGame", {
		show: function() {
			$($$.$getId(pro, "btnStartGame")).removeClass("displayNone");
		},
		hide: function() {
			$($$.$getId(pro, "btnStartGame")).addClass("displayNone");
		}
	});

	addAction(pro + ".btnEndGame", {
		show: function() {
			$($$.$getId(pro, "btnEndGame")).removeClass("displayNone");
		},
		hide: function() {
			$($$.$getId(pro, "btnEndGame")).addClass("displayNone");
		}
	});
	
	addAction(pro + ".section", {
		deleteEle: function(ele) {
			$.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    	};
    	if($(ele).exist) {
    		$$.$getId(pro, "section").removeChild(ele);	
    	}
		},
		createBlock: function() {
			var block = document.createElement('div');
			$$.$getId(pro, "section").appendChild(block);
			return block;
		}
	});
	
	addAction(pro + ".remainLife", {
		setText: function(txt) {
			$$.$getId(pro, "remainLife").innerText = txt;
		}
	});
	
	addAction(pro + ".score", {
		setText: function(txt) {
			$$.$getId(pro, "score").innerText = txt;
		}
	});
	$$.$getAction(pro + ".dealAction")();
};