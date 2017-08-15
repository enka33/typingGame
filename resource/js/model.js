(function() {
	console.log("model");
	var pro = "TypingGame.typingGame";
	$$.mkObj(pro);
	
	var SelectModel = function() {
		var life = "";
		var grade = "";
		
		this.getSelect = function() {
			return {
				life: life,
				grade: grade
			};
		}
		
		this.setLife = function(_life) {
			life = _life;
		}
		
		this.getLife = function() {
			return life;
		}
		
		this.setGrade = function(_grade) {
			grade = _grade;
		}
		
		this.getGrade = function() {
			return grade;
		}
	}
	
	var BlockModel = function() {
		var blockList = [];
		var interval = null;
		var score = 0;
		var remainLife = 0;
		var fault = 5; 
		
		this.getBlockEquipmentObj = function() {
			return {//等级1、2、3
				1: {
					text: "abcdefghijklmnopqrstuvwxyz",//随机方块内容
					time: 4000//等级确定的产生方块的时间间隔
				},
				2: {
					text: "abcdefghijklmnopqrstuvwxyz1234567890",
					time: 3000
				},
				3: {
					text: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
					time: 2000
				}
			};
		};
		
		this.getBlockClassArr = function() {
			return ["blockClass1", "blockClass2", "blockClass3", "blockClass4", "blockClass5", "blockClass6", "blockClass7", "blockClass8", "blockClass9"];
		};
		
		this.getClientWidth = function() {
			return document.documentElement.clientWidth;
		};
		
		this.getClientHeight = function() {
			return document.documentElement.clientHeight;
		};
		
		this.getBlockWidth = function() {
			return 45;
		};
		
		this.getBlockHeight = function() {
			return 45;
		}
		
		this.setBlockList = function(_blockList) {
			blockList = _blockList;
		}
		
		this.getBlockList = function() {
			return blockList;
		}
		
		this.addBolckInList = function(block) {
			blockList.push(block);
		}
		
		this.removeEleInBlockListByText = function(txt) {
			for(var i = 0; i < blockList.length; i++) {
				if(txt == blockList[i].innerText) {
					$$.$getIdObj(pro + ".section").deleteEle(blockList[i]);
					blockList.splice(i, 1);
					this.setBlockList(blockList);
					return true;
				}
			}
			return false;
		}
		
		this.destroyBlockList = function() {
			blockList = [];
		}
		
		this.getInterval = function() {
			return interval;
		}
		
		this.setInterval = function(_interval) {
			interval = _interval;
		}
				
		this.setScore = function(_score) {
			score = _score;
		}
		
		this.getScore = function() {
			return score;
		}	
			
		this.setRemainLife = function(_remainLife) {
			remainLife = _remainLife;
		}
		
		this.getRemainLife = function() {
			return remainLife;
		}
		
		this.setFault = function(_fault) {
			fault = _fault;//坚决不可以是this.fault = fault;
		}
		
		this.getFault = function() {
			return fault;
		}
		
		this.getInitFault = function() {
			return 5;
		}
	};
	
	$$.$addModelClass(pro + ".SelectModel", SelectModel);
	$$.$addModelClass(pro + ".BlockModel", BlockModel);
}());