# 打字游戏玩法说明
<a href="https://enka33.github.io/typingGame" target="_blank">来玩打字游戏吧</a>
<ol> <li>通过键盘键入字母来消除下落的方块，键入内容与下落方块内容相匹配，得一分，否则不得分。</li> <li>通过"游戏设置"可设置生命和等级，在点击"开始游戏"后可"暂停游戏"和"结束游戏"。</li> <li>累积键盘键入内容错误的次数和方块掉入底部的次数，当达到5次时，减去一条生命，剩余生命为0时，自动结束游戏，并且弹出得分框。</li></ol>

# 打字游戏技术说明
<ol><li>使用HTML、HTML5、CSS、CSS3、JavaScript、jQuery来编写。</li><li>项目整体采用MVC模式划分，使程序最大程度解耦<ul> <li>model对方块生产周期根据等级进行规定； 对方块的文本内容进行规定；对方块的样式进行规定(需要结合index.css)；可对对屏幕的可见宽高进行获取； 对方块宽高进行规定；此外为生命、等级、现存下落块的list、setInterval函数返回值、分数、剩余生命、失误次数的get和set方法。 </li><li>controller对各控件进行事件监听；<br>由window的setInterval方法设置周期来产生下落方块；<br>下落方块由CSS3动画编写，利用动画的animation-play-state属性进行下落方块的paused(暂停)和running(下落)控制
 </li><li></li><ul></li><ol>
