"ui";
var bz = "【使用帮助】\n【蛋仔15键】\n ----------------------------- \n|  ⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺   ❶  | \n|    ① ② ③ ④ ⑤ ⑥ ⑦      | \n----------------------------- \n【键位设置顺序】 \n【 ①②③④⑤⑥⑦⑴⑵⑶⑷⑸⑹⑺❶ 】 \n【常规21键设置】\n------------------------------\n|  ① ② ③ ④ ⑤ ⑥ ⑦    |\n|  ❶ ❷ ❸ ❹ ❺ ❻ ❼    |\n|  ⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺    |\n------------------------------\n【键位设置顺序】\n【⑴⑵⑶⑷⑸⑹⑺❶❷❸❹❺❻❼①②③④⑤⑥⑦】\n【有bug反馈群里】 \n【本地txt目录：脚本/skystudio】 " ;
var gg = "【键位设置看这里】↑↑\n【更新内容】 \n【第三个开关为切换键位】\n【默认关闭为15键模式，开启为21键】\n【悬浮窗感叹号为退出循环弹奏，右上角为下一首】\n【当前版本为本地版本】\n【使用前先仔细看看使用帮助】 \n【老湿机可以跳过！直接起飞吧！】\n      宫崎骏曾说过我说不出爱你的理由但我知道你就是我不爱别人的理由我喜欢你就像南巷的花猫放浪不羁我喜欢你就像北城的石桥古老至极\n      宫崎骏还说过，不要轻易去依赖一个人，它会成为你的习惯。当分别来临，你失去的不是某个人，而是你精神的支柱。无论何时何地，都要学会独立行走，它会让你走得更坦然些。所以，以后搞清楚爱，喜欢，依赖，习惯再选择吧\n      宫崎骏说过：“如果你喜欢一个人的话，你就主动多朝她走几步，如果她看到你走过来，却没有迎接你的意思，那你就停下来，因为你要懂得，很多事情，很多事情可以靠努力得来，唯有爱情不行。”\n你是坏叔叔！ 喵~喵~喵~喵~喵~\n    ﾍ^ヽ､　 /⌒､　　_,_\n  　 |　　￣7　 (⌒r⌒7/\n  　 レ　　　＼_/￣＼_｣\n  ＿/  　　　　　　　 {\n  _ﾌ　●　　　　　　　ゝ\n  _人　　　ο　　●　 ナ\n  　 `ト､＿　　　　　メ\n  　　　 /　 ￣ ーィﾞ\n  　　 〈ﾟ･｡｡｡･ﾟ 　丶";
var ccl = true;
var ccr = false;
var ks = true;
var a;
var scPath = "/sdcard/意几收藏夹/本地版配置文件.txt";
var wzPath = "/sdcard/意几收藏夹/本地版外置配置文件.txt" ;
var wzwjj = '/storage/emulated/0/yijiMusic/';
var qb= 'res/txt/';
var bdList = [];
var bflist = [];
if(!files.exists(scPath)) 
{
    files.createWithDirs(scPath);
    files.createWithDirs(wzPath);
    files.ensureDir(wzwjj);
    toast("该设备貌似是初次使用，还未本地依赖文件")
    toast("创建完成")
    }

    threads.start(function () {
    toast("初始化本地曲谱中")
    var list = files.listDir(qb);
    var len = list.length;
    var lens = len - 1 ; 
    var o = 0;
    for (let i = 0; i < len; i++) {
     var child = files.join(qb, list[i]);
     if (!files.isDir(child)) {
    bdList[o] = list[i];
    o++;
     }
    }
    toast("本地曲谱：" + lens + "首加载完成！")
    bflist = bdList.slice();
    });

if (floaty.checkPermission()) {
   // a = cr;
} else {
    a = toast;
}
ui.layout(
<frame background="#00000000">
<vertical h="*" w="*" gravity="center_vertical">
<img w="*" h="120dp" margin="10dp 20dp 20dp 10dp" src="file://./res/img/1.png" />
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">₍˄·͈༝·͈˄*₎◞ ̑̑   :</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp"></text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">因为相遇，所以美好</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp"></text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">很美却易丢失</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">人生不过尔尔，得失皆应有因</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">得之我幸，失之我命</text>
</vertical>
 </frame>
);setTimeout(function () {showMianUI();}
, 2000);




function showMianUI() {
    if (auto.service == null) {
   toastLog("请先开启无障碍服务！");
    };
   
    ui.layout(
   <frame background="#FFFFFF">
   <vertical h="*">
    <horizontal h="60dp" w="*" gravity="center_vertical">
   <linear layout_weight="1" marginLeft="40dp">
   <text gravity="center_vertical" color="#03A9F4" textStyle="italic" size="18sp">嗷呜～  凶你</text>
   </linear>
   <text w="auto" h="auto" text="设置" textSize="12sp" textStyle="bold" marginRight="5dp" />
   <img id="setting" src="file://./res/img/logo.png" w="40dp" h="40dp" circle="true" marginRight="25dp" />
    </horizontal>
    
    <card w="*" h="200dp" margin="30dp 20dp 30dp 15dp" cardCornerRadius="10dp" cardElevation="30dp" cardBackgroundColor="#8090B0" gravity="center_vertical">
   <vertical padding="15dp 5dp" h="auto">
   <horizontal gravity="center_vertical">
    <text h="auto" w="auto" gravity="center" text="通知" textColor="#E8E8F8" textSize="15sp" textStyle="bold" />
    <card id="notify" h="auto" w="auto" cardCornerRadius="7dp" cardElevation="0" cardBackgroundColor="#78C8F0" gravity="center" paddingTop="3dp" paddingBottom="3dp" marginLeft="10dp">
   <text h="auto" w="auto" text="最新公告" textColor="#E8E8F8" textSize="10sp" paddingRight="5dp" paddingLeft="5dp" paddingTop="3dp" paddingBottom="3dp" />
    </card>
    <card id="help" h="auto" w="auto" cardCornerRadius="7dp" cardElevation="0" cardBackgroundColor="#00838F" gravity="center" paddingTop="3dp" paddingBottom="3dp" marginLeft="3dp">
   <text h="auto" w="auto" text="使用帮助" textColor="#FFFFFF" textSize="10sp" paddingRight="5dp" paddingLeft="5dp" paddingTop="3dp" paddingBottom="3dp" />
    </card>
    
   </horizontal>
   <ScrollView h="160dp" w="*">
    <text id="notifi" h="*" w="*" text="内容" textColor="#FFFFFF" backgroundColor="#00B8D4" textSize="12sp" lines="30" />
   </ScrollView>
   </vertical>
    </card>
    
    <card w="*" h="45dp" margin="30dp 0dp 30dp 5dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#E8E8F8" gravity="center_vertical">
   <horizontal w="*" h="*" gravity="center_vertical">
   <text h="auto" w="auto" text="无障碍辅助  [第一步 必开]👉🏻" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="1" />
   <Switch id="switch1" marginRight="18dp" checked="{{auto.service != null}}">
   </Switch>
   </horizontal>
    </card>
   
   
    <card w="*" h="45dp" margin="30dp 5dp 30dp 5dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#E8E8F8" gravity="center_vertical">
<horizontal w="*" h="*" gravity="center_vertical">
<text h="auto" w="auto" text="常规键位切换" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="0.5" />
<Switch id="switch3" marginRight="18dp">
</Switch>
<text h="auto" w="auto" text="启用外置曲谱" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="0.5" />
<Switch id="switch4" marginRight="18dp">
</Switch>
</horizontal>
 </card>
   
   
    <card w="*" h="45dp" margin="30dp 5dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#E8E8F8" gravity="center_vertical">
   <horizontal w="*" h="*" gravity="center_vertical">
   <text h="auto" w="auto" text="开启悬浮窗  [第二步 窗口]👉🏻" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="1" />
   <Switch id="switch2" marginRight="18dp">
   </Switch>
   </horizontal>
    </card>
   
    <horizontal>
   <card h="55dp" layout_weight="1" margin="30dp 5dp 30dp 5dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
   <vertical>
    <text w="*" gravity="center_horizontal" text="本地15-21键通用TXT" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
    <text w="*" h="*" gravity="center" text="2k ~~ 3k" textSize="16sp" textStyle="bold" textColor="#8090B0" />
   </vertical>
   </card>
    </horizontal>
    
    <horizontal>
   <card h="55dp" layout_weight="1" margin="30dp 5dp 30dp 10dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
   <vertical>
    <text w="*" gravity="center_horizontal" text="项目软件启动" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
    <text w="*" h="*" gravity="center" text="不提供云端支持！" textSize="16sp" textStyle="bold" textColor="#8090B0" />
   </vertical>
   </card>
   </horizontal>
   
   <horizontal>
   <card h="55dp" layout_weight="1" margin="30dp 0dp 30dp 10dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
   <vertical>
    <text w="*" gravity="center_horizontal" text="全云端调用" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
    <text   w="*" h="*" gravity="center" text="不提供云端支持！" textSize="16sp" textStyle="bold" textColor="#8090B0" />
   </vertical>
   </card>
    </horizontal>
    
   <horizontal>
   <card h="65dp" layout_weight="1" margin="30dp 0dp 30dp 10dp" cardBackgroundColor="#00000000" cardCornerRadius="13dp" cardElevation="0dp">
   <vertical>
    <text w="*" gravity="center_horizontal" text="当前版本为： 意几-本地版！" textSize="12sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
   <text  w="*" gravity="center" text="当前版本为本地版！！！！" textSize="13sp" textStyle="bold" textColor="#8090B0" />
    <text  w="*" gravity="center" text="请注意，当前为本地版，不提供云支持" textSize="13sp" textStyle="bold" textColor="#8090B0" />
   </vertical>
   </card>
    </horizontal>
    
   </vertical>
   </frame>
    );
    var isCanFinish = false;
    var isCanFinishTimeout;
    ui.emitter.on("back_pressed", e => {
   if (!isCanFinish) {
   isCanFinish = true;
   isCanFinishTimeout = setTimeout(() => {
    toastLog("双击退出");
    isCanFinish = false;
   }, 800);
   e.consumed = true;
   } else {
   clearTimeout(isCanFinishTimeout);
   e.consumed = false;
   };
    }); ui.help.click(function () {
   helps();
    }); count(); function count() {
   threads.start(function () {
      

   });
    }
   function helps() {
   threads.start(function () {
   ui.notifi.setText(bz.replace("@", "\n\n"));
   });
    }
    notifys(); ui.notify.click(function () {
   notifys();
    }); function notifys() {
   threads.start(function () {
   ui.notifi.setText(gg.replace("@", "\n\n"));
   });
    }
     ui.setting.click(function () {
   app.startActivity("settings");
    });
    ui.switch1.on("check", function (checked) {
   if (checked && auto.service == null) {
   app.startActivity({
    action: "android.settings.ACCESSIBILITY_SETTINGS"
   });
   }
   if (!checked && auto.service != null) {
   auto.service.disableSelf();
   }
    });
    ui.emitter.on("resume", function () {
   ui.switch1.checked = auto.service != null;
    });

    ui.switch3.on("check",function(checked){
     if(checked){
     ks=false;
     toast("硬性适配21键模式中");
     }else{
     ks=true;
     toast("15键模式中");
     }
  });
    ui.switch4.on("check",function(checked){
     if(checked){
     ks=false;
     
         threads.start(function () {
     qb = '/storage/emulated/0/yijiMusic/';
     scPath = "/sdcard/意几收藏夹/本地版外置配置文件.txt" ;
    bdList = [];
    var list = files.listDir(qb);
    var len = list.length;
    var lens = len - 1 ; 
    var o = 0;
    for (let i = 0; i < len; i++) {
     var child = files.join(qb, list[i]);
     if (!files.isDir(child)) {
    bdList[o] = list[i];
    o++;
     }
    }
    toast("外置曲谱：" + lens + "首加载完成！")
    });
     toast("外置文件夹/收藏列表——启用")
     }else{
     ks=true;
var scPath = "/sdcard/意几收藏夹/本地版配置文件.txt";
var qb= 'res/txt/';
bdList = bflist;
     toast("恢复内置列表");
     bdList = [];
bdList=bflist.slice()
}     
  });
  
  ui.switch2.on("check", function (checked) {
 if (checked) {
   threads.start(function () {
    threads.start(function () {
        events.observeKey();
        events.onKeyDown("volume_up", function (event) {
            if(menuWindow.scccc.visibility == 8){
        ui.post(() => {menuWindow.scccc.visibility = 0; });
        log("成功")
        }else {

        }
        });
        });
var menuWindow = floaty.rawWindow(
   <vertical id="scccc">
   <horizontal id="parent" h="25dp" w="*" gravity="center_vertical">
   <linear layout_weight="1">
   <text id="ns"  gravity="center_vertical" color="#00AAFF" textStyle="bold" size="20sp">⇔</text>
   </linear>
    <linear gravity="center">
    <img  id="xzyc" src="@drawable/ic_visibility_off_black_48dp" w="20dp" h="20dp" circle="true" tint="#00AAFF"/>
   </linear>
   </horizontal>
     <card  cardCornerRadius="6dp" cardElevation="6dp" cardUseCompatPadding="true">
   <list id="list">
     <horizontal margin="6">
       <img
         id="icon"
         h="20dp"
         w="20dp"
         radius="20dp"
         gravity="center_vertical"
         src="{{this.src}}"
         scaleType="centerCrop"
         tint="#8995a5"
       />
       <text margin="5 0 0 0" textSize="10sp" text="{{this.name}}" h="match_parent" gravity="center_vertical"></text>
     </horizontal>
   </list>
     </card>
   </vertical>
 );
 var initialX = 0;
 var initialY = device.height / 6 - menuWindow.parent.getHeight() / 6;
 menuWindow.setPosition(initialX, initialY);
 menuWindow.parent.setOnTouchListener(function (view, event) {
   switch (event.getAction()) {
   case event.ACTION_DOWN:
    x = event.getRawX();
    y = event.getRawY();
    windowX = menuWindow.getX();
    windowY = menuWindow.getY();
    downTime = new Date().getTime();
    return true;
   case event.ACTION_MOVE:
     menuWindow.setPosition(windowX + (event.getRawX() - x),
   windowY + (event.getRawY() - y));
    return true;
   }
   return true;
    });
 let dataList = [
   {
     src: "@drawable/ic_explore_black_48dp",
     name: "搜索曲谱",
   },
   {
     src: "@drawable/ic_local_florist_black_48dp",
     name: "收藏弹奏",
   },
   {
     src: "@drawable/ic_done_all_black_48dp",
     name: "收藏管理",
   },
   {
     src: "@drawable/ic_build_black_48dp",
     name: "进入设置",
   },
   {
     src: "@drawable/ic_textsms_black_48dp",
     name: "联系作者",
   },
   {
     src: "@drawable/ic_do_not_disturb_alt_black_48dp",
     name: "结束应用",
   },
 ];
 ui.post(function () {
   menuWindow.list.setDataSource(dataList);
 });
 //调用
 menuWindow.list.on("item_click", function (item, i, itemView, listView) {
   let name = dataList[i].name;
   switch(name){
   case "搜索曲谱":
       threads.start(function () {
       var k = dialogs.select("通用谱子", "云列表", "云搜索");
       if (k == 1) {
        var sc = rawInput("搜索内容");
        if (sc == null) {
       return;
        }
       } else {
        var sc = "anyizuishuai随机";
       }
       if (k >= 0) {
           var czlist = [] ;
           for (var i = 0; i < bdList.length; i++) {
           if (bdList[i].indexOf(sc) != -1) {
               czlist.push(bdList[i]);
           }
           }
        var sex = dialogs.select("请选择", czlist, 0);
        if (sex < 0) {
       return;
        }
        var jrscc = "🖤";
                var data = files.read(scPath).split(",");
               for (var i = 0; i < data.length; i++) {
                   if (data[i] == czlist[sex]) {
                   jrscc="❤️";
                   toast("收藏乐谱可直接在收藏夹选择");
                   }
               }
       if(ks==true){
           var storage = storages.create("通用.键位");
       }else if(ks==false){
           var storage = storages.create("通用15.键位");
       }
        var keys = storage.get("skykey", "");
        var skykeys = 0;
        if (keys = undefined) {
       toast("键位未设置");
       skykeys = 1;
        }
        if (skykeys == 0) {
           var path = qb + czlist[sex];
           var file = open(path);
           var text = file.read();
           file.close();
           MusicJs(text, czlist[sex], jrscc);
       } else {
       toast(AesDecode(js));
       }
        }
        });
   break;
   case "收藏弹奏":
       sctz();
   break;
   case "收藏管理":
       scxg();
   break;
   case "进入设置":
       tcsz();
   break;
   case "联系作者":
       lx();
   break;
   case "结束应用":
       exit();
   break;
   default :
   break;
       }
 });
 menuWindow.xzyc.click(function () {
    toast("音量+键显示菜单");
    menuWindow.scccc.visibility = 8;
    })
   });
 }
 if (!checked) {
 threads.start(function () {
  floaty.closeAll();
 });
 }
  });
 }







//功能区


/**收藏弹奏*sjsc-随机收藏 xxsc- 循序收藏 tzsc-弹奏收藏*/
function sctz(){
    threads.start(function () {
    var scscsc = dialogs.select("弹奏类型", "随机弹奏收藏", "循序弹奏收藏", "自行选择弹奏");
    if(scscsc == 0 ){
    sjsc();
    }else if(scscsc == 1 ){
    xxsc();
    }else if (scscsc ==2 ){
    tcsc();
    }
});
}

function sjsc(){
    threads.start(function () {
    var sclist = files.read(scPath).split(",");
    var sklist = sclist.slice(0,-1);
    var nc = 0;
    var cl = sklist.length;
    ccr=true;
    while(sklist.length > 0){
    if(ccr==false){
        sklist.length=0;
    }else{
        nc++;
        cl--;
        toast("随机第："+nc+"首,"+"待剩余随机："+cl+"首。")
        var randomIndex = random(0, sklist.length - 1);
        var item = sklist[randomIndex];
        sklist.splice(randomIndex, 1);
        if(ks==true){
        var storage = storages.create("通用.键位");
        ccr=true;
        }else if(ks==false){
        var storage = storages.create("通用15.键位");
        ccr=true;
        }
        var keys = storage.get("skykey");
        var skykeys = 0;
        if (keys == undefined) {
         toast("键位未设置");
         skykeys = 1;
        }
     if (skykeys == 0) {
    var jrscc = "❤️"
    var path = qb + item;
    var file = open(path);
    var text = file.read();
    file.close();
    sleep(1000);
    ccl=true;
    var code = 1 ;
    if (code == 1) {
    MusicJs(text, item, jrscc);
    while (true) {
        if (ccl === false) {
        break;
        }
    
    }
    } else {
    toast(AesDecode(js));
    }
     }
    }
    }
    });
}


function xxsc(){
    threads.start(function () {
    var sclist = files.read(scPath).split(",");
    var sklist = sclist.slice(0,-1);
    var nc = 0;
    var cl = sklist.length;
    ccr=true;
    while(sklist.length > 0){
    ccl=true;
    if(ccr==false){
        sklist.length=0;
    }else{
        var item = sklist.shift();
        nc++;
        cl--;
        toast("循序第："+nc+"首,"+"排队剩余："+cl+"首。")
        if(ks==true){
        var storage = storages.create("通用.键位");
        ccr=true;
        }else if(ks==false){
        var storage = storages.create("通用15.键位");
        ccr=true;
        }
        var keys = storage.get("skykey");
        var skykeys = 0;
        if (keys == undefined) {
         toast("键位未设置");
         skykeys = 1;
        }
     if (skykeys == 0) {
    var jrscc = "❤️"
    var path = qb + item;
    var file = open(path);
    var text = file.read();
    file.close();
    ccl=true;
    var code = 1 ;
    sleep(1000);
    if (code == 1) {
    MusicJs(text, item, jrscc);
    while (true) {
        if (ccl === false) {
        break;
        }
    }
    } else {
    toast(AesDecode(js));
    }
     }
    }
    }
    });
}

function tcsc(){
    threads.start(function () {
    var sclist = files.read(scPath).split(",");
    var sex = dialogs.select("收藏弹奏列表", sclist, 0);
if (sex < 0) {
}{
if(ks==true){
    var storage = storages.create("通用.键位");
}else if(ks==false){
    var storage = storages.create("通用15.键位");
}
   var keys = storage.get("skykey");
   var skykeys = 0;
   if (keys == undefined) {
    toast("键位未设置");
    skykeys = 1;
   }
if (skykeys == 0) {
var jrscc = "❤️"
var path = qb + sclist[sex];
var file = open(path);
var text = file.read();
file.close();
var code = 1 ;
if (code == 1) {
MusicJs(text, sclist[sex], jrscc);
} else {
toast("解码失败")
}
}
}
    });
}

/**弹奏收藏 */


/**收藏管理 */

function scxg() {
    threads.start(function () {
    var sclist = files.read(scPath).split(",");
var selected = dialogs.multiChoice("请选择收藏中需要删除的曲谱",sclist);   
if(selected.length > 0){
for(var i=sclist.length - 1;i>=0;i--){
if (selected.indexOf(i) !=-1)    {
   sclist.splice(i,1);
   }
   }
   file=open(scPath,"w")
file.write(sclist);
file.flush();
file.close();
toast("收藏列表修改完成");
}else{
   toast("收藏列表未修改")
   }
    });
}
/**收藏管理 */




/**弹奏设置*延迟*键位 */
function tcsz(){
    threads.start(function () {
    var szsz = dialogs.select("通用设置","延迟设置","键位设置")
    if(szsz == 0 ){
    ycsz();
    }else if (szsz == 1 ){
    jwsz()
    }
});
}



function jwsz(){  
    threads.start(function () {
    var jw = dialogs.select("键位设置","15键设置","21键设置");
    if (jw == 0) {
    SetKey();
    }else if(jw==1){
    S21Key();
    }
});
}

function ycsz(){ 
    threads.start(function () {
    var sex = dialogs.select("请选择", "1ms", "35ms", "40ms", "45ms", "50ms", "55ms", "60ms", "65ms", "70ms");
    if (sex < 0) {
    return;
    }
    var storage = storages.create("anyi.延迟");
    if (sex == 0) {
    var ms = 1;
    } else if (sex == 1) {
    var ms = 35;
    } else if (sex == 2) {
    var ms = 40;
    } else if (sex == 3) {
    var ms = 45;
    } else if (sex == 4) {
    var ms = 50;
    } else if (sex == 5) {
    var ms = 55;
    } else if (sex == 6) {
    var ms = 60;
    } else if (sex == 7) {
    var ms = 65;
    } else if (sex == 8) {
    var ms = 70;
    }
    storage.put("skyms", ms);
    toast("已设置延迟：" + ms);
});
     }

    function S21Key() {    
         threads.start(function () {
        toast("按下音量减可取消设置键位");
    var storage = storages.create("通用15.键位");
    var w = floaty.rawWindow(
       <frame id="action" gravity="center_horizontal" bg="#00000000">
       <text id="toast" h="auto" w="auto" text="提示" textColor="#00AAFF" textSize="19sp" textStyle="bold" />
       </frame>
    );
    w.setSize(-1, -1);
    w.setTouchable(true);
    setTimeout(() => {
       w.close();
    }, 60000);
    var mosum = 0;
    var skykey = [];
    w.toast.setText("请按下往上顺序依次点击键位，部分从上往下走");
    events.observeKey();
    events.onKeyUp("volume_down", function (event) {
       events.removeAllKeyUpListeners("volume_down");
       w.close();
       toast("已取消设置键位");
    });
    w.action.setOnTouchListener(function (view, event) {
       switch (event.getAction()) {
       case event.ACTION_DOWN:
    x = event.getRawX();
    y = event.getRawY();
    skykey[mosum] = {
       "x": x,
       "y": y
    };
    mosum++;
    var txt = "已获取第" + mosum + "个键位";
    w.toast.setText(txt);
    if (mosum == 21) {
       toast("已保存所有键位完毕");
       storage.put("skykey", skykey);
       events.removeAllKeyUpListeners("volume_down");
       w.close();
    } else {
       txt += "请继续点击下一个";
    }
    return true;
       }
       return true;
    });
    });
       }
    function SetKey() { 
    threads.start(function () {
    toast("按下音量减可取消设置键位");
     var storage = storages.create("通用.键位");
     var w = floaty.rawWindow(
    <frame id="action" gravity="center_horizontal" bg="#00000000">
    <text id="toast" h="auto" w="auto" text="提示" textColor="#00AAFF" textSize="19sp" textStyle="bold" />
    </frame>
     );
     w.setSize(-1, -1);
     w.setTouchable(true);
     setTimeout(() => {
    w.close();
     }, 60000);
     var mosum = 0;
     var skykey = [];
     w.toast.setText("请按顺序依次点击键位，点齐15键后其余空白");
     events.observeKey();
     events.onKeyUp("volume_down", function (event) {
    events.removeAllKeyUpListeners("volume_down");
    w.close();
    toast("已取消设置键位");
     });
     w.action.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
    case event.ACTION_DOWN:
     x = event.getRawX();
     y = event.getRawY();
     skykey[mosum] = {
    "x": x,
    "y": y
     };
     mosum++;
     var txt = "已获取第" + mosum + "个键位";
     w.toast.setText(txt);
     if (mosum == 15) {
    toast("已保存所有键位完毕");
    storage.put("skykey", skykey);
    events.removeAllKeyUpListeners("volume_down");
    w.close();
     } else {
    txt += "请继续点击下一个";
     }
     return true;
    }
    return true;
     });
    });
    }
/**软件设置 */

/**联系 */
    function lx(){
        threads.start(function () {
        var lx = dialogs.select("请选择联系方式：", "联系作者", "加入群聊");
    if( lx==0){
        var qqNumber = "3126445767";
        app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqq://card/show_pslcard?src_type=internal&version=1&card_type=person&uin=" + qqNumber
        });
    }else if(lx==1){
        var qunname = "109120224";
        app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=" +qunname
        });
    }
        });
     }



    //弹奏





function MusicJs(text, name, jrscc) {
 threads.start(function () {
        events.observeKey();
        events.onKeyDown("volume_down", function (event) {
        ui.post(() => {musicw.ccc.visibility = 0; });
        });
        });
 var musicw = floaty.window(
<frame id="ccc">
<linear w="auto" h="auto">
 <card id="action" w="auto" h="auto" cardBackgroundColor="#00000000"   gravity="center"  margin="3dp">
<vertical w="200dp" h="155dp">
<horizontal h="30dp" w="*" gravity="center_vertical">
 <linear layout_weight="1">
<text id="names" marginLeft="10dp" marginRight="5dp" gravity="center_vertical" color="#00AAFF" textStyle="bold" size="13sp">Name</text>
 </linear>
 <linear id="closes" w="30dp" h="30dp" gravity="center">
<img src="file://./res/img/close.png" w="18dp" h="18dp" circle="true" />
 </linear>
</horizontal>
<linear marginTop="15dp">
<progressbar id="progress" w="*" margin="10dp 0dp" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
</linear>
<horizontal h="auto" w="*" gravity="center" >
<linear id="left" h="30dp" w="30dp" gravity="center">
<img src="file://./res/img/left.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear id="starts" h="30dp" w="30dp" gravity="center">
<img src="file://./res/img/starts.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear id="stop" h="30dp" w="30dp" gravity="center">
<img src="file://./res/img/stop.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear id="right" h="30dp" w="30dp" gravity="center">
<img src="file://./res/img/right.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear h="30dp" w="30dp" gravity="center">
<text id="status" text="暂停" textColor="#00AAFF" textSize="15sp" />
</linear>
<linear h="30dp" w="30dp" gravity="center">
<text text="X" textColor="#00AAFF" textSize="12sp" />
<text id="speed" text="1" textColor="#00AAFF" textSize="15sp" />
</linear>
</horizontal>
<horizontal gravity="center">
<text text="-------------------------" textsize="5" />
</horizontal>
<horizontal h="auto" w="*" >
<linear h="30dp" w="35dp" gravity="center">
<text id="yc"  textStyle="bold" text="👁️" textSize="19sp" marginTop="5dp" gravity="left" />
</linear>
<linear  h="30dp" w="20dp" gravity="center">
<text text="I" textColor="#00AAFF" textSize="30sp" />
</linear>
<linear h="30dp" w="35dp" gravity="center">
<text id="jrsc"  textStyle="bold" textSize="19sp" marginTop="5dp" gravity="center" />
</linear>
<linear  h="30dp" w="20dp" gravity="center">
<text text="I" textColor="#00AAFF" textSize="30sp" />
</linear>
<linear h="30dp" w="35dp" gravity="center">
<text id="tcc"  textStyle="bold" text="⚠" textSize="19sp" marginTop="5dp" gravity="left" />
</linear>
<linear  h="30dp" w="20dp" gravity="center">
<text text="I" textColor="#00AAFF" textSize="30sp" />
</linear>
<linear h="30dp" w="35dp" gravity="center">
<text id=""  textStyle="bold" text="💝" textSize="19sp" marginTop="5dp" gravity="left" />
</linear>
</horizontal>
</vertical>
 </card>
 </linear>
</frame>
 );
 
 MusicStop = 0;
 threads.start(function () {
var storage = storages.create("anyi.延迟");
var keyms = storage.get("skyms");
if(!keyms){
keyms=1
}
if(ks==true){
    var storage = storages.create("通用.键位");
}else if(ks==false){
    var storage = storages.create("通用15.键位");
}
var keys = storage.get("skykey");
var exp = / */g;
var txt = text.substr(text.indexOf("[") + 1, text.lastIndexOf("]") - text.indexOf("[") - 1);
var txt = txt.substr(txt.indexOf("[") + 1, txt.lastIndexOf("]") - txt.indexOf("[") - 1);
var txt = txt.substr(txt.indexOf("{") + 1, txt.lastIndexOf("}") - txt.indexOf("{") - 1);
var name = name;
var list = txt.split(/\{/g);
var listlen = list.length;
musicw.progress.setMax(listlen);
var time = 0;
var regexp = /[0-9]+/g;
sleep(500);
for (let i = 0; i < listlen; i++) {
while (musicw.status.getText() == "暂停") {
 sleep(500);
 if (MusicStop == 1) {
break;
 }
}
if (MusicStop == 1) {
 break;
}
var sz = list[i].split(",");
var keyexp = /.*key.*/g;
if (sz[0].indexOf("k") > 0) {
 var timsz = sz[0];
 sz[0] = sz[1];
 sz[1] = timsz;
}
var tm1 = sz[0].substr(sz[0].indexOf(":") + 1).replace(exp, "");
var tm1 = tm1.match(regexp);
var tm1 = parseInt(tm1);
var key = sz[1].substr(sz[1].indexOf(":") + 1);
var key = key.substr(key.indexOf("y") + 1, key.lastIndexOf("\"") - key.indexOf("y") - 1).replace(exp, "");
var key = key.match(regexp);
var key = parseInt(key);
if (key == "" || key == NaN || key == "NaN") {
 continue;
}
var key1, key2;
if(ks==true){
if (key == 0) {
 key1 = keys[0]["x"];
 key2 = keys[0]["y"];
}
if (key == 1) {
 key1 = keys[1]["x"];
 key2 = keys[1]["y"];
}
if (key == 2) {
 key1 = keys[2]["x"];
 key2 = keys[2]["y"];
}
if (key == 3) {
 key1 = keys[3]["x"];
 key2 = keys[3]["y"];
}
if (key == 4) {
 key1 = keys[4]["x"];
 key2 = keys[4]["y"];
}
if (key == 5) {
 key1 = keys[5]["x"];
 key2 = keys[5]["y"];
}
if (key == 6) {
 key1 = keys[6]["x"];
 key2 = keys[6]["y"];
}
if (key == 7) {
 key1 = keys[7]["x"];
 key2 = keys[7]["y"];
}
if (key == 8) {
 key1 = keys[8]["x"];
 key2 = keys[8]["y"];
}
if (key == 9) {
 key1 = keys[9]["x"];
 key2 = keys[9]["y"];
}
if (key == 10) {
 key1 = keys[10]["x"];
 key2 = keys[10]["y"];
}
if (key == 11) {
 key1 = keys[11]["x"];
 key2 = keys[11]["y"];
}
if (key == 12) {
 key1 = keys[12]["x"];
 key2 = keys[12]["y"];
}
if (key == 13) {
 key1 = keys[13]["x"];
 key2 = keys[13]["y"];
}
if (key == 14) {
 key1 = keys[14]["x"];
 key2 = keys[14]["y"];
}
if (key == 14) {
 key1 = keys[14]["x"];
 key2 = keys[14]["y"];
}
}else if(ks==false){
       if (key == 0) {
        key1 = keys[3]["x"];
        key2 = keys[3]["y"];
       }
       if (key == 1) {
        key1 = keys[4]["x"];
        key2 = keys[4]["y"];
       }
       if (key == 2) {
        key1 = keys[5]["x"];
        key2 = keys[5]["y"];
       }
       if (key == 3) {
        key1 = keys[6]["x"];
        key2 = keys[6]["y"];
       }
       if (key == 4) {
        key1 = keys[7]["x"];
        key2 = keys[7]["y"];
       }
       if (key == 5) {
        key1 = keys[8]["x"];
        key2 = keys[8]["y"];
       }
       if (key == 6) {
        key1 = keys[9]["x"];
        key2 = keys[9]["y"];
       }
       if (key == 7) {
        key1 = keys[10]["x"];
        key2 = keys[10]["y"];
       }
       if (key == 8) {
        key1 = keys[11]["x"];
        key2 = keys[11]["y"];
       }
       if (key == 9) {
        key1 = keys[12]["x"];
        key2 = keys[12]["y"];
       }
       if (key == 10) {
        key1 = keys[13]["x"];
        key2 = keys[13]["y"];
       }
       if (key == 11) {
        key1 = keys[14]["x"];
        key2 = keys[14]["y"];
       }
       if (key == 12) {
        key1 = keys[14]["x"];
        key2 = keys[14]["y"];
       }
       if (key == 13) {
        key1 = keys[15]["x"];
        key2 = keys[15]["y"];
       }
       if (key == 14) {
        key1 = keys[16]["x"];
        key2 = keys[16]["y"];
       }
}
if (MusicStop == 1) {
 break;
}
var tim = 0;
tim = tm1 - time;
if (tm1 > time) {
 var speed = musicw.speed.getText();
 var speed = parseFloat(speed);
 if (tim > keyms) {
var tim = tim;
 } else {
var tim = 0;
 }
 sleep(tim / speed);
}
if (MusicStop == 0) {
 pre(key1, key2, keyms);

}
musicw.progress.setProgress(i);
time = tm1;
}
musicw.close();
ccl=false;
sleep(1000);
 });
 function pre(key1, key2, keyms) {
threads.start(function () {
var chu = keyms / 10;
press(key1 + ran(), key2 + ran(), keyms + Math.round(Math.random() * chu));
});
 } 


 musicw.starts.click(function () {
musicw.status.setText("播放");
 });
 musicw.stop.click(function () {
musicw.status.setText("暂停");
 });
 musicw.jrsc.click(() => {
            if (musicw.jrsc.getText() != '❤️️') {
                files.createWithDirs(scPath);
                var data = files.read(scPath).split(",");
                var j = true;
                for (var i = 0; i < data.length; i++) {
                    if (data[i] == name) {
                        toast("此乐谱已存在收藏");
                        j = false;
                    }
                }
                if (j) {
                    toast("加入收藏成功");
                    files.append(scPath, name + ",");
                }
                musicw.jrsc.setText('❤️');
            } else {
                s = 0;

            }
 });
 musicw.yc.click(function () {
    toast("音量-键显示悬浮窗");
    musicw.ccc.visibility = 8;
    })
musicw.tcc.click(function(){
    if(ccr==true){
        toast("退出随机曲谱");
    }else if(ccr==false){
        toast("退出！");
    } 
    ccr=false;
    MusicStop=1;
    musicw.close();
})

 
 musicw.jrsc.setText(jrscc)
 musicw.names.setText(name);
 var x = 0,
y = 0;
 var windowX, windowY;
 musicw.closes.click(function () {
MusicStop = 1;
ccl = false;
musicw.close();
 });
 musicw.left.click(function () {
var speed = musicw.speed.getText();
if (speed == "1.9") {
musicw.speed.setText("1.8");
return;
}
if (speed == "1.7") {
musicw.speed.setText("1.6");
return;
}
if (speed == "1.4") {
musicw.speed.setText("1.3");
return;
}
if (speed == "1.2") {
musicw.speed.setText("1.1");
return;
}
var speed = parseFloat(speed);
var speed2 = 0.1;
if (speed > 2) {
speed2 = 0.5;
}
if (speed > 0.3) {
var speed = speed - speed2;
var speed = speed + "";
var speeds = speed.split(".");
if (speeds.length > 1) {
 var speed = speeds[0] + "." + speeds[1].substr(0, 1) + "";
}
musicw.speed.setText(speed + "");
}
 });
 musicw.right.click(function () {
var speed = musicw.speed.getText();
if (speed == "0.7") {
musicw.speed.setText("0.8");
return;
}
var speed = parseFloat(speed);
var speed2 = 0.1;
if (speed >= 2) {
speed2 = 0.5;
}
if (speed < 5) {
var speed = speed + speed2;
var speed = speed + "";
var speeds = speed.split(".");
if (speeds.length > 1) {
 var speed = speeds[0] + "." + speeds[1].substr(0, 1) + "";
}
musicw.speed.setText(speed + "");
}
 });
 musicw.action.setOnTouchListener(function (view, event) {
switch (event.getAction()) {
case event.ACTION_DOWN:
 x = event.getRawX();
 y = event.getRawY();
 windowX = musicw.getX();
 windowY = musicw.getY();
 downTime = new Date().getTime();
 return true;
case event.ACTION_MOVE:
 musicw.setPosition(windowX + (event.getRawX() - x),
windowY + (event.getRawY() - y));
 return true;
}
return true;
 }); function ran() {
return Math.random() * 36 - 18;
 }
}