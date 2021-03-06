(function() {
	console.log("controller");
	var pro = "TypingGame.typingGame";
	$$.mkObj(pro);
	$$.$getIdSet(pro, document); 
	
	$$.$setAction(pro + ".dealAction", function() {
		var selectModel = $$.$getModel(pro + ".selectModel");
		selectModel.setGrade($$.$getId(pro, "grade").innerText);
		selectModel.setLife($$.$getId(pro, "life").innerText);
		var blockModel = $$.$getModel(pro + ".blockModel");
		
		$$.$getId(pro, "btnSetUpGame").onclick = function() {
			$$.$getIdObj(pro + ".divSetUpGame").showSelectDiv();
			var selectObj = selectModel.getSelect();
			for(var select in selectObj) {
				$$.$getId(pro, select + selectObj[select]).checked = "true";
			}
		}
		
		$$.$getId(pro, "btnConfirm").onclick = function() {
			$("input:checked").each(function(i, value) {
				var id = value.id;
				$$.$getId(pro, id.substring(0, id.length-1)).innerText = id.substring(id.length-1);
				$$.$getIdObj(pro + ".remainLife").setText(id.substring(id.length-1));
				var str = "selectModel.set" + id.substring(0, 1).toUpperCase() + id.substring(1, id.length-1) + "(" + id.substring(id.length-1) + ")";
				eval(str);
			});
			$$.$getIdObj(pro + ".divSetUpGame").hideSelectDiv();
		}
		
		$$.$getId(pro, "btnCancel").onclick = function() {
			$$.$getIdObj(pro + ".divSetUpGame").hideSelectDiv();
		}
		
		$$.$getId(pro, "btnStartGame").onclick = function() {
			var grade = selectModel.getGrade();
			blockModel.destroyBlockList();
			blockModel.setRemainLife(parseInt(selectModel.getLife()));
			var fault = blockModel.getInitFault();
			blockModel.setFault(fault); 
			
			$$.$getIdObj(pro + ".divSetUpGame").hideSelectDiv();
			$$.$getIdObj(pro + ".btnStartGame").hide();
			$$.$getIdObj(pro + ".btnSetUpGame").hide();
			$$.$getIdObj(pro + ".btnPauseGame").show();
			$$.$getIdObj(pro + ".btnEndGame").show();
			$$.$getAction(pro + ".typingGaming")(blockModel);	
			$$.$getAction(pro + ".createBlock")(grade, blockModel);		
			var interval = window.setInterval(function() {
				$$.$getAction(pro + ".createBlock")(grade, blockModel);
			}, blockModel.getBlockEquipmentObj()[grade].time);
			blockModel.setInterval(interval);
		}
		
		$$.$getId(pro, "btnPauseGame").onclick = function() {
			$$.$getIdObj(pro + ".btnPauseGame").hide();
			$$.$getIdObj(pro + ".btnContinueGame").show();
			clearInterval(blockModel.getInterval());
			var blockList = blockModel.getBlockList();
			for(var i = 0; i < blockList.length; i++) {
				var ele = blockList[i];
				$(ele).css("animation-play-state", "paused");
			}
		}
		
		$$.$getId(pro, "btnContinueGame").onclick = function() {
			$$.$getIdObj(pro + ".btnPauseGame").show();
			$$.$getIdObj(pro + ".btnContinueGame").hide();
			var blockList = blockModel.getBlockList();
			for(var i = 0; i < blockList.length; i++) {
				var ele = blockList[i];
				$(ele).css("animation-play-state", "running");
			}
			var grade = selectModel.getGrade();
			$$.$getAction(pro + ".createBlock")(grade, blockModel);	
			var interval = window.setInterval(function() {
					$$.$getAction(pro + ".createBlock")(grade, blockModel);
				}, blockModel.getBlockEquipmentObj()[grade].time);//方块产生的时间间隔
			blockModel.setInterval(interval);
		}
		
		$$.$getId(pro, "btnEndGame").onclick = function() {
			$$.$getIdObj(pro + ".btnStartGame").show();
			$$.$getIdObj(pro + ".btnSetUpGame").show();
			$$.$getIdObj(pro + ".btnPauseGame").hide();
			$$.$getIdObj(pro + ".btnContinueGame").hide();
			$$.$getIdObj(pro + ".btnEndGame").hide();
			$$.$getIdObj(pro + ".score").setText(0);
			$$.$getIdObj(pro + ".remainLife").setText(selectModel.getLife());
			clearInterval(blockModel.getInterval());//控制动画下落的高度
			var blockList = blockModel.getBlockList();
			for(var i = 0; i < blockList.length; i++) {
				$$.$getIdObj(pro + ".section").deleteEle(blockList[i]);
			}
			alert("游戏结束喽(￣▽￣)／!\n分数：" + blockModel.getScore());
			blockModel.setScore(0);
		}
	});
	
	$$.$setAction(pro + ".createBlock", function(grade, blockModel) {//产生随机块，并且自带下落动画
		var blockStr = blockModel.getBlockEquipmentObj()[grade].text;
		var blockClassArr = blockModel.getBlockClassArr();
		var blockWidth = blockModel.getBlockWidth();
		var blockHeight = blockModel.getBlockHeight();
		var blockLeft = (blockModel.getClientWidth()- blockWidth)*Math.random();
		var blockTop = blockModel.getClientHeight()-blockModel.getClientHeight()*0.08 - blockHeight/2;
		
		var blockText = blockStr.charAt((blockStr.length - 1)*Math.random());//字符串charAt()参数默认向下（小整数）取整
		var blockClass = "blockClass grade" + grade + " " + blockClassArr[Math.floor((blockClassArr.length-1)*Math.random())];//下落方块的动画，几秒落地，可在index.css中根据等级设置
		var block = $$.$getIdObj(pro + ".section").createBlock();
		block.innerText = blockText;
		block.className = blockClass;
		block.style.left = blockLeft - 2 + "px";
		block.style.webkitTransform="translate(0px," + blockTop + "px)";
		blockModel.addBolckInList(block);
		var blockList = blockModel.getBlockList();
		$$.$getAction(pro + ".blockFallToTheGround")(block, blockModel);
	});
	
	$$.$setAction(pro + ".blockFallToTheGround", function(block, blockModel) {
		$.fn.exist = function(){ 
        if($(this).length >= 1){
            return true;
        }
        return false;
    };
    if($(block).exist()) {
    	block.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
				console.log("end::", this.innerText);
				blockModel.removeEleInBlockListByText(this.innerText);
				var remainLife = blockModel.getRemainLife();
				var fault = blockModel.getFault();
				fault--;
				blockModel.setFault(fault);
				if(fault <= 0) {
					remainLife--;
					blockModel.setRemainLife(remainLife);
					$$.$getIdObj(pro + ".remainLife").setText(remainLife);
					blockModel.setFault(blockModel.getInitFault());
				} 
				if(remainLife == 0) {
					$("#btnEndGame").unbind("click").click();
				}
			}, false); 
		}
	});
	
	$$.$setAction(pro + ".typingGaming", function(blockModel) {
		document.onkeypress = function(e) {
			var remainLife = blockModel.getRemainLife();//必须要写到键盘监听事件内部
			var fault = blockModel.getFault();
			if(!($($$.$getId(pro, "btnPauseGame")).hasClass("displayNone") ||
				$($$.$getId(pro, "btnEndGame")).hasClass("displayNone"))) {
				if(!$$.$getAction(pro + ".judgeBlockByText")(e.key, blockModel)) {
					console.log(e.key);
					fault--;
					blockModel.setFault(fault);
					if(fault <= 0) {
						blockModel.setFault(blockModel.getInitFault());
						remainLife--;
						blockModel.setRemainLife(remainLife);
						$$.$getIdObj(pro + ".remainLife").setText(remainLife);
					}
					if(remainLife == 0) {
						$("#btnEndGame").unbind("click").click();
					}
				}
			}
		}
	});
	
	$$.$setAction(pro + ".judgeBlockByText", function(userInput, blockModel) {
		var score = blockModel.getScore();
		var blockList = blockModel.getBlockList();
		if(blockModel.removeEleInBlockListByText(userInput)) {
			score++;
			blockModel.setScore(score);
			$$.$getIdObj(pro + ".score").setText(score);
			return true;
		}
		return false;
	});
}());