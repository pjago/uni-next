// Compiled by ClojureScript 1.9.542 {}
goog.provide('uni_next.core');
goog.require('cljs.core');
goog.require('common.math');
goog.require('common.web');
goog.require('om.next');
goog.require('om.dom');
goog.require('uni_next.parser');
goog.require('uni_next.ui');
uni_next.core.transfer = (function uni_next$core$transfer(this$,p__30487){
var map__30512 = p__30487;
var map__30512__$1 = ((((!((map__30512 == null)))?((((map__30512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30512):map__30512);
var t = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var Yt = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"Yt","Yt",-727343647));
var Ut = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"Ut","Ut",1237289857));
var Gz = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"Gz","Gz",1540398168));
var diff = ((function (map__30512,map__30512__$1,t,Yt,Ut,Gz){
return (function uni_next$core$transfer_$_diff(p__30525){
var vec__30531 = p__30525;
var k = cljs.core.nth.call(null,vec__30531,(0),null);
var map__30534 = cljs.core.nth.call(null,vec__30531,(1),null);
var map__30534__$1 = ((((!((map__30534 == null)))?((((map__30534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);
var num = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"den","den",1422717834));
var delay = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var n = cljs.core.count.call(null,num);
var d = cljs.core.count.call(null,den);
if((t > delay)){
return common.math._SLASH_.call(null,common.math._.call(null,cljs.core.apply.call(null,common.math._PLUS_,common.math._STAR_.call(null,num,cljs.core.map.call(null,((function (n,d,vec__30531,k,map__30534,map__30534__$1,num,den,delay,map__30512,map__30512__$1,t,Yt,Ut,Gz){
return (function (p1__30485_SHARP_){
return cljs.core.get.call(null,p1__30485_SHARP_,k);
});})(n,d,vec__30531,k,map__30534,map__30534__$1,num,den,delay,map__30512,map__30512__$1,t,Yt,Ut,Gz))
,cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.rseq.call(null,Ut)),common.math._.call(null,common.math._PLUS_.call(null,d,delay),n),(common.math._PLUS_.call(null,d,delay) - (1)))))),cljs.core.apply.call(null,common.math._PLUS_,common.math._STAR_.call(null,cljs.core.rest.call(null,den),cljs.core.map.call(null,((function (n,d,vec__30531,k,map__30534,map__30534__$1,num,den,delay,map__30512,map__30512__$1,t,Yt,Ut,Gz){
return (function (p1__30486_SHARP_){
return cljs.core.get.call(null,p1__30486_SHARP_,k);
});})(n,d,vec__30531,k,map__30534,map__30534__$1,num,den,delay,map__30512,map__30512__$1,t,Yt,Ut,Gz))
,cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.rseq.call(null,Yt)),(1),common.math._.call(null,d,(1))))))),cljs.core.first.call(null,den));
} else {
return cljs.core.get.call(null,this$,k);
}
});})(map__30512,map__30512__$1,t,Yt,Ut,Gz))
;
return cljs.core.into.call(null,this$,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,diff)),Gz);
});
uni_next.core.spin = (function uni_next$core$spin(this$,p__30536){
var map__30539 = p__30536;
var map__30539__$1 = ((((!((map__30539 == null)))?((((map__30539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var unit = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var inf = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"inf","inf",-1118444942),(-180));
var sup = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"sup","sup",-2039492346),(180));
return common.math.cycle.call(null,common.math._PLUS_.call(null,this$,unit),inf,sup);
});
uni_next.core.move = (function uni_next$core$move(this$,p__30541){
var map__30544 = p__30541;
var map__30544__$1 = ((((!((map__30544 == null)))?((((map__30544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30544):map__30544);
var rate = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
var dt = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"dt","dt",-368444759),common.math._SLASH_.call(null,(60)));
return common.math._PLUS_.call(null,this$,common.math._STAR_.call(null,rate,dt));
});
uni_next.core.rpm_timer = (function uni_next$core$rpm_timer(this$,p__30546){
var map__30559 = p__30546;
var map__30559__$1 = ((((!((map__30559 == null)))?((((map__30559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30559):map__30559);
var clear = cljs.core.get.call(null,map__30559__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var now = cljs.core.get.call(null,map__30559__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var counter = ((function (map__30559,map__30559__$1,clear,now){
return (function uni_next$core$rpm_timer_$_counter(p__30566,uid){
var map__30569 = p__30566;
var map__30569__$1 = ((((!((map__30569 == null)))?((((map__30569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);
var it = map__30569__$1;
var n = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var then = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var resolution = cljs.core.count.call(null,uni_next.parser.children.call(null,uid));
if((n > (0))){
return cljs.core.assoc.call(null,it,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"time","time",1385887882),now,new cljs.core.Keyword(null,"value","value",305978217),common.math._SLASH_.call(null,common.math._STAR_.call(null,(3600),n),common.math._.call(null,now,then),resolution));
} else {
if((common.math._.call(null,now,then) >= (120))){
return cljs.core.assoc.call(null,it,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"time","time",1385887882),now,new cljs.core.Keyword(null,"value","value",305978217),(0));
} else {
return it;

}
}
});})(map__30559,map__30559__$1,clear,now))
;
return cljs.core.merge_with.call(null,counter,this$,clear);
});
uni_next.core.initial = "static/fan/";
uni_next.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pwm","pwm",365765730),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword("rotation","pwm","rotation/pwm",325719016),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"rpm","rpm",279796767)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4306,0.9534], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.8539,-0.02473], null),new cljs.core.Keyword(null,"delay","delay",-574225219),(1)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"cylinder",new cljs.core.Keyword(null,"radius","radius",-2073122258),0.15,new cljs.core.Keyword(null,"height","height",1025178622),0.3], null),new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"box",new cljs.core.Keyword(null,"width","width",-384071477),1.2,new cljs.core.Keyword(null,"height","height",1025178622),0.3,new cljs.core.Keyword(null,"depth","depth",1768663640),1.2], null),new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"box",new cljs.core.Keyword(null,"width","width",-384071477),0.5,new cljs.core.Keyword(null,"height","height",1025178622),0.1,new cljs.core.Keyword(null,"depth","depth",1768663640),0.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)]);
uni_next.core.initial_taxons = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Keyword("app","component","app/component",1555903341),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Keyword(null,"fan","fan",-1339826021),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"shaft","shaft",-278047141)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"b2","b2",1108940514),null,new cljs.core.Keyword(null,"b1","b1",-1270036758),null,new cljs.core.Keyword(null,"b0","b0",-372343377),null,new cljs.core.Keyword(null,"b4","b4",-1728006924),null,new cljs.core.Keyword(null,"b3","b3",1128981270),null,new cljs.core.Keyword(null,"b6","b6",1762223416),null,new cljs.core.Keyword(null,"b5","b5",-1961609154),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"pwm","pwm",365765730),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword("rotation","pwm","rotation/pwm",325719016),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),null,new cljs.core.Keyword(null,"position","position",-2011731912),null,new cljs.core.Keyword(null,"step","step",1288888124),null,new cljs.core.Keyword(null,"reflection","reflection",-1984073923),null,new cljs.core.Keyword(null,"rpm","rpm",279796767),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blade","blade",25118060),null,new cljs.core.Keyword(null,"ir","ir",-1141752677),null,new cljs.core.Keyword(null,"fan","fan",-1339826021),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"shaft","shaft",-278047141),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b2","b2",1108940514),null,new cljs.core.Keyword(null,"b1","b1",-1270036758),null,new cljs.core.Keyword(null,"b0","b0",-372343377),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),null,new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),null], null), null)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Var(function(){return uni_next.core.spin;},new cljs.core.Symbol("uni-next.core","spin","uni-next.core/spin",-2068903010,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"spin","spin",770699451,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/anw/4j9ki9/uni_next/core.cljc",11,1,30,30,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"inf","inf",522086585,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"inf","inf",522086585,null),(-180),new cljs.core.Symbol(null,"sup","sup",-398960819,null),(180)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.spin)?uni_next.core.spin.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.move;},new cljs.core.Symbol("uni-next.core","move","uni-next.core/move",-1707735731,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"move","move",-470352782,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/anw/4j9ki9/uni_next/core.cljc",11,1,35,35,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rate","rate",211871829,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"dt","dt",1272086768,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(60))], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.move)?uni_next.core.move.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.transfer;},new cljs.core.Symbol("uni-next.core","transfer","uni-next.core/transfer",-1668546414,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/anw/4j9ki9/uni_next/core.cljc",15,1,18,18,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"Yt","Yt",913187880,null),new cljs.core.Symbol(null,"Ut","Ut",-1417145912,null),new cljs.core.Symbol(null,"Gz","Gz",-1114037601,null)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.transfer)?uni_next.core.transfer.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.rpm_timer;},new cljs.core.Symbol("uni-next.core","rpm-timer","uni-next.core/rpm-timer",183906598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"rpm-timer","rpm-timer",-1288253947,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/anw/4j9ki9/uni_next/core.cljc",16,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"now","now",-9994004,null)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.rpm_timer)?uni_next.core.rpm_timer.cljs$lang$test:null)]))]),new cljs.core.Symbol("app","system","app/system",1611578314,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interrupts","interrupts",-100541811,null),null,new cljs.core.Symbol(null,"control","control",-761857733,null),null,new cljs.core.Symbol(null,"physics","physics",386322390,null),null], null), null)], null));
uni_next.parser.add_BANG_.call(null,uni_next.core.initial_taxons);
uni_next.core.app_state = cljs.core.atom.call(null,uni_next.core.initial_state);
uni_next.core.par = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),uni_next.parser.locate,new cljs.core.Keyword(null,"mutate","mutate",1422419038),uni_next.parser.mutate], null));
uni_next.core.rec = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),uni_next.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),uni_next.core.par,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true,new cljs.core.Keyword(null,"logger","logger",-220675947),false], null));
uni_next.core.assign = Object.assign;
uni_next.core.background = ({"width": "100%", "height": "100vh", "position": "absolute", "top": (0), "left": (0)});
/**
 * @constructor
 */
uni_next.core.ShaftPot = (function uni_next$core$ShaftPot(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.core.ShaftPot.prototype = goog.object.clone(React.Component.prototype);

var x30579_30593 = uni_next.core.ShaftPot.prototype;
x30579_30593.componentWillUpdate = ((function (x30579_30593){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___30594 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___30595 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___30594,next_ident__18213__auto___30595)){
var idxr__18214__auto___30596 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___30596 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___30596),((function (idxr__18214__auto___30596,ident__18212__auto___30594,next_ident__18213__auto___30595,this__18208__auto__,x30579_30593){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___30594], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___30595], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___30596,ident__18212__auto___30594,next_ident__18213__auto___30595,this__18208__auto__,x30579_30593))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x30579_30593))
;

x30579_30593.shouldComponentUpdate = ((function (x30579_30593){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__30581 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__30581);
} else {
return G__30581;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x30579_30593))
;

x30579_30593.componentWillUnmount = ((function (x30579_30593){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x30579_30593))
;

x30579_30593.componentDidUpdate = ((function (x30579_30593){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x30579_30593))
;

x30579_30593.isMounted = ((function (x30579_30593){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x30579_30593))
;

x30579_30593.componentWillMount = ((function (x30579_30593){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x30579_30593))
;

x30579_30593.render = ((function (x30579_30593){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_30582 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30583 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_30584 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_30585 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_30586 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__30587 = om.next.props.call(null,this$);
var map__30587__$1 = ((((!((map__30587 == null)))?((((map__30587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30587):map__30587);
var props = map__30587__$1;
var step = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var map__30588 = cljs.core.meta.call(null,props);
var map__30588__$1 = ((((!((map__30588 == null)))?((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);
var uid = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,({"style": ({"margin": "8px"})}),om.dom.h3.call(null,({"style": ({"marginLeft": "5px"})}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("< "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(step.toFixed((4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u00B0")].join('')),om.dom.button.call(null,({"onClick": ((function (map__30587,map__30587__$1,props,step,map__30588,map__30588__$1,uid,type,_STAR_reconciler_STAR_30582,_STAR_depth_STAR_30583,_STAR_shared_STAR_30584,_STAR_instrument_STAR_30585,_STAR_parent_STAR_30586,this$,this__18207__auto__,x30579_30593){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add","app/add",1875379493,null)),(function (){var x__9044__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"step","step",1288888124)),(function (){var x__9044__auto__ = uid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(10))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(map__30587,map__30587__$1,props,step,map__30588,map__30588__$1,uid,type,_STAR_reconciler_STAR_30582,_STAR_depth_STAR_30583,_STAR_shared_STAR_30584,_STAR_instrument_STAR_30585,_STAR_parent_STAR_30586,this$,this__18207__auto__,x30579_30593))
}),"+"),om.dom.button.call(null,({"onClick": ((function (map__30587,map__30587__$1,props,step,map__30588,map__30588__$1,uid,type,_STAR_reconciler_STAR_30582,_STAR_depth_STAR_30583,_STAR_shared_STAR_30584,_STAR_instrument_STAR_30585,_STAR_parent_STAR_30586,this$,this__18207__auto__,x30579_30593){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add","app/add",1875379493,null)),(function (){var x__9044__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"step","step",1288888124)),(function (){var x__9044__auto__ = uid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(-10))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(map__30587,map__30587__$1,props,step,map__30588,map__30588__$1,uid,type,_STAR_reconciler_STAR_30582,_STAR_depth_STAR_30583,_STAR_shared_STAR_30584,_STAR_instrument_STAR_30585,_STAR_parent_STAR_30586,this$,this__18207__auto__,x30579_30593))
}),"-"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_30586;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_30585;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_30584;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_30583;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30582;
}});})(x30579_30593))
;


uni_next.core.ShaftPot.prototype.constructor = uni_next.core.ShaftPot;

uni_next.core.ShaftPot.prototype.constructor.displayName = "uni-next.core/ShaftPot";

uni_next.core.ShaftPot.prototype.om$isComponent = true;

var x30591_30597 = uni_next.core.ShaftPot;
/** @nocollapse */
x30591_30597.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x30591_30597.om$next$IQuery$query$arity$1 = ((function (x30591_30597){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null);
});})(x30591_30597))
;


var x30592_30598 = uni_next.core.ShaftPot.prototype;

x30592_30598.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x30592_30598.om$next$IQuery$query$arity$1 = ((function (x30592_30598){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null);
});})(x30592_30598))
;


uni_next.core.ShaftPot.cljs$lang$type = true;

uni_next.core.ShaftPot.cljs$lang$ctorStr = "uni-next.core/ShaftPot";

uni_next.core.ShaftPot.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.core/ShaftPot");
});
uni_next.core.shaft_pot = om.next.factory.call(null,uni_next.core.ShaftPot);
/**
 * @constructor
 */
uni_next.core.IrLcd = (function uni_next$core$IrLcd(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.core.IrLcd.prototype = goog.object.clone(React.Component.prototype);

var x30603_30617 = uni_next.core.IrLcd.prototype;
x30603_30617.componentWillUpdate = ((function (x30603_30617){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___30618 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___30619 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___30618,next_ident__18213__auto___30619)){
var idxr__18214__auto___30620 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___30620 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___30620),((function (idxr__18214__auto___30620,ident__18212__auto___30618,next_ident__18213__auto___30619,this__18208__auto__,x30603_30617){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___30618], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___30619], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___30620,ident__18212__auto___30618,next_ident__18213__auto___30619,this__18208__auto__,x30603_30617))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x30603_30617))
;

x30603_30617.shouldComponentUpdate = ((function (x30603_30617){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__30605 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__30605);
} else {
return G__30605;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x30603_30617))
;

x30603_30617.componentWillUnmount = ((function (x30603_30617){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x30603_30617))
;

x30603_30617.componentDidUpdate = ((function (x30603_30617){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x30603_30617))
;

x30603_30617.isMounted = ((function (x30603_30617){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x30603_30617))
;

x30603_30617.componentWillMount = ((function (x30603_30617){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x30603_30617))
;

x30603_30617.render = ((function (x30603_30617){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_30606 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30607 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_30608 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_30609 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_30610 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__30611 = om.next.props.call(null,this$);
var map__30611__$1 = ((((!((map__30611 == null)))?((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);
var props = map__30611__$1;
var rpm = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"rpm","rpm",279796767));
var reflection = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
var map__30612 = cljs.core.meta.call(null,props);
var map__30612__$1 = ((((!((map__30612 == null)))?((((map__30612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var uid = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,({"style": ({"margin": "8px"})}),om.dom.h3.call(null,({"style": ({"marginLeft": "5px"})}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(rpm).toFixed((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" rpm")].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_30610;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_30609;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_30608;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_30607;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30606;
}});})(x30603_30617))
;


uni_next.core.IrLcd.prototype.constructor = uni_next.core.IrLcd;

uni_next.core.IrLcd.prototype.constructor.displayName = "uni-next.core/IrLcd";

uni_next.core.IrLcd.prototype.om$isComponent = true;

var x30615_30621 = uni_next.core.IrLcd;
/** @nocollapse */
x30615_30621.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x30615_30621.om$next$IQuery$query$arity$1 = ((function (x30615_30621){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)], null))], null);
});})(x30615_30621))
;


var x30616_30622 = uni_next.core.IrLcd.prototype;

x30616_30622.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x30616_30622.om$next$IQuery$query$arity$1 = ((function (x30616_30622){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)], null))], null);
});})(x30616_30622))
;


uni_next.core.IrLcd.cljs$lang$type = true;

uni_next.core.IrLcd.cljs$lang$ctorStr = "uni-next.core/IrLcd";

uni_next.core.IrLcd.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.core/IrLcd");
});
uni_next.core.ir_lcd = om.next.factory.call(null,uni_next.core.IrLcd);
/**
 * @constructor
 */
uni_next.core.App = (function uni_next$core$App(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.core.App.prototype = goog.object.clone(React.Component.prototype);

var x30627_30639 = uni_next.core.App.prototype;
x30627_30639.componentWillUpdate = ((function (x30627_30639){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___30640 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___30641 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___30640,next_ident__18213__auto___30641)){
var idxr__18214__auto___30642 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___30642 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___30642),((function (idxr__18214__auto___30642,ident__18212__auto___30640,next_ident__18213__auto___30641,this__18208__auto__,x30627_30639){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___30640], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___30641], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___30642,ident__18212__auto___30640,next_ident__18213__auto___30641,this__18208__auto__,x30627_30639))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x30627_30639))
;

x30627_30639.shouldComponentUpdate = ((function (x30627_30639){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__30629 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__30629);
} else {
return G__30629;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x30627_30639))
;

x30627_30639.componentWillUnmount = ((function (x30627_30639){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x30627_30639))
;

x30627_30639.componentDidUpdate = ((function (x30627_30639){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x30627_30639))
;

x30627_30639.isMounted = ((function (x30627_30639){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x30627_30639))
;

x30627_30639.componentWillMount = ((function (x30627_30639){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x30627_30639))
;

x30627_30639.render = ((function (x30627_30639){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_30630 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30631 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_30632 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_30633 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_30634 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__30635 = om.next.props.call(null,this$);
var map__30635__$1 = ((((!((map__30635 == null)))?((((map__30635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);
var body = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var shaft = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("app","increment","app/increment",81538792,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null)], null)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"physics","physics",386322390,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spin","spin",770699451,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"step","step",1288888124)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"control","control",-761857733,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"transfer","transfer",1967954927,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Yt","Yt",-727343647),cljs.core.list(new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-of","as-of",-1841962382),(5)], null)),new cljs.core.Keyword(null,"Ut","Ut",1237289857),cljs.core.list(new cljs.core.Keyword(null,"pwm","pwm",365765730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-of","as-of",-1841962382),(5)], null)),new cljs.core.Keyword(null,"Gz","Gz",1540398168),new cljs.core.Keyword("rotation","pwm","rotation/pwm",325719016),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"time","time",1385887882)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"interrupts","interrupts",-100541811,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"rpm-timer","rpm-timer",-1288253947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"time","time",1385887882)], null))], null)], null)])], null));

return om.dom.div.call(null,({"style": uni_next.core.background}),cljs.core.apply.call(null,om.dom.div,({"style": ({"zIndex": (1), "position": "absolute"})}),cljs.core.concat.call(null,cljs.core.map.call(null,uni_next.core.shaft_pot,shaft),cljs.core.map.call(null,uni_next.core.ir_lcd,ir))),common.web.a_scene.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene",new cljs.core.Keyword(null,"embedded","embedded",-115486248),true], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(0)], null)], null),cljs.core.map.call(null,uni_next.ui.body,body)),common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"camera",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-5)], null),new cljs.core.Keyword(null,"near","near",-1077668328),0.75,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(180),(0),(180)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(2)], null),new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"adInverted","adInverted",-348082687),true,new cljs.core.Keyword(null,"wsInverted","wsInverted",1431610709),true], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_30634;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_30633;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_30632;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_30631;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30630;
}});})(x30627_30639))
;


uni_next.core.App.prototype.constructor = uni_next.core.App;

uni_next.core.App.prototype.constructor.displayName = "uni-next.core/App";

uni_next.core.App.prototype.om$isComponent = true;

var x30637_30643 = uni_next.core.App;
/** @nocollapse */
x30637_30643.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x30637_30643.om$next$IQuery$query$arity$1 = ((function (x30637_30643){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),om.next.get_query.call(null,uni_next.ui.Body)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.core.ShaftPot)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.core.IrLcd)], null)], null);
});})(x30637_30643))
;


var x30638_30644 = uni_next.core.App.prototype;

x30638_30644.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x30638_30644.om$next$IQuery$query$arity$1 = ((function (x30638_30644){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),om.next.get_query.call(null,uni_next.ui.Body)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.core.ShaftPot)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.core.IrLcd)], null)], null);
});})(x30638_30644))
;


uni_next.core.App.cljs$lang$type = true;

uni_next.core.App.cljs$lang$ctorStr = "uni-next.core/App";

uni_next.core.App.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.core/App");
});
uni_next.core._main = (function uni_next$core$_main(var_args){
var args__9338__auto__ = [];
var len__9331__auto___30646 = arguments.length;
var i__9332__auto___30647 = (0);
while(true){
if((i__9332__auto___30647 < len__9331__auto___30646)){
args__9338__auto__.push((arguments[i__9332__auto___30647]));

var G__30648 = (i__9332__auto___30647 + (1));
i__9332__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((0) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((0)),(0),null)):null);
return uni_next.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9339__auto__);
});

uni_next.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return om.next.add_root_BANG_.call(null,uni_next.core.rec,uni_next.core.App,document.getElementById("app"));
});

uni_next.core._main.cljs$lang$maxFixedArity = (0);

uni_next.core._main.cljs$lang$applyTo = (function (seq30645){
return uni_next.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30645));
});


//# sourceMappingURL=core.js.map