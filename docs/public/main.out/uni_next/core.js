// Compiled by ClojureScript 1.9.542 {}
goog.provide('uni_next.core');
goog.require('cljs.core');
goog.require('common.math');
goog.require('common.web');
goog.require('om.next');
goog.require('om.dom');
goog.require('uni_next.parser');
goog.require('uni_next.ui');
uni_next.core.transfer = (function uni_next$core$transfer(this$,p__19717){
var map__19742 = p__19717;
var map__19742__$1 = ((((!((map__19742 == null)))?((((map__19742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19742):map__19742);
var t = cljs.core.get.call(null,map__19742__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var Yt = cljs.core.get.call(null,map__19742__$1,new cljs.core.Keyword(null,"Yt","Yt",-727343647));
var Ut = cljs.core.get.call(null,map__19742__$1,new cljs.core.Keyword(null,"Ut","Ut",1237289857));
var Gz = cljs.core.get.call(null,map__19742__$1,new cljs.core.Keyword(null,"Gz","Gz",1540398168));
var diff = ((function (map__19742,map__19742__$1,t,Yt,Ut,Gz){
return (function uni_next$core$transfer_$_diff(p__19755){
var vec__19761 = p__19755;
var k = cljs.core.nth.call(null,vec__19761,(0),null);
var map__19764 = cljs.core.nth.call(null,vec__19761,(1),null);
var map__19764__$1 = ((((!((map__19764 == null)))?((((map__19764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19764):map__19764);
var num = cljs.core.get.call(null,map__19764__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__19764__$1,new cljs.core.Keyword(null,"den","den",1422717834));
var delay = cljs.core.get.call(null,map__19764__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var n = cljs.core.count.call(null,num);
var d = cljs.core.count.call(null,den);
if((t > delay)){
return common.math._SLASH_.call(null,common.math._.call(null,cljs.core.apply.call(null,common.math._PLUS_,common.math._STAR_.call(null,num,cljs.core.map.call(null,((function (n,d,vec__19761,k,map__19764,map__19764__$1,num,den,delay,map__19742,map__19742__$1,t,Yt,Ut,Gz){
return (function (p1__19715_SHARP_){
return cljs.core.get.call(null,p1__19715_SHARP_,k);
});})(n,d,vec__19761,k,map__19764,map__19764__$1,num,den,delay,map__19742,map__19742__$1,t,Yt,Ut,Gz))
,cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.rseq.call(null,Ut)),common.math._.call(null,common.math._PLUS_.call(null,d,delay),n),(common.math._PLUS_.call(null,d,delay) - (1)))))),cljs.core.apply.call(null,common.math._PLUS_,common.math._STAR_.call(null,cljs.core.rest.call(null,den),cljs.core.map.call(null,((function (n,d,vec__19761,k,map__19764,map__19764__$1,num,den,delay,map__19742,map__19742__$1,t,Yt,Ut,Gz){
return (function (p1__19716_SHARP_){
return cljs.core.get.call(null,p1__19716_SHARP_,k);
});})(n,d,vec__19761,k,map__19764,map__19764__$1,num,den,delay,map__19742,map__19742__$1,t,Yt,Ut,Gz))
,cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.rseq.call(null,Yt)),(1),common.math._.call(null,d,(1))))))),cljs.core.first.call(null,den));
} else {
return cljs.core.get.call(null,this$,k);
}
});})(map__19742,map__19742__$1,t,Yt,Ut,Gz))
;
return cljs.core.into.call(null,this$,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,diff)),Gz);
});
uni_next.core.spin = (function uni_next$core$spin(this$,p__19766){
var map__19769 = p__19766;
var map__19769__$1 = ((((!((map__19769 == null)))?((((map__19769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19769):map__19769);
var unit = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var inf = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"inf","inf",-1118444942),(-180));
var sup = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"sup","sup",-2039492346),(180));
return common.math.cycle.call(null,common.math._PLUS_.call(null,this$,unit),inf,sup);
});
uni_next.core.move = (function uni_next$core$move(this$,p__19771){
var map__19774 = p__19771;
var map__19774__$1 = ((((!((map__19774 == null)))?((((map__19774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19774):map__19774);
var rate = cljs.core.get.call(null,map__19774__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
var dt = cljs.core.get.call(null,map__19774__$1,new cljs.core.Keyword(null,"dt","dt",-368444759),common.math._SLASH_.call(null,(60)));
return common.math._PLUS_.call(null,this$,common.math._STAR_.call(null,rate,dt));
});
uni_next.core.rpm_timer = (function uni_next$core$rpm_timer(this$,p__19776){
var map__19789 = p__19776;
var map__19789__$1 = ((((!((map__19789 == null)))?((((map__19789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19789):map__19789);
var clear = cljs.core.get.call(null,map__19789__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var now = cljs.core.get.call(null,map__19789__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var counter = ((function (map__19789,map__19789__$1,clear,now){
return (function uni_next$core$rpm_timer_$_counter(p__19796,uid){
var map__19799 = p__19796;
var map__19799__$1 = ((((!((map__19799 == null)))?((((map__19799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19799):map__19799);
var it = map__19799__$1;
var n = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var then = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"time","time",1385887882));
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
});})(map__19789,map__19789__$1,clear,now))
;
return cljs.core.merge_with.call(null,counter,this$,clear);
});
uni_next.core.initial = "static/fan/";
uni_next.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pwm","pwm",365765730),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword("rotation","pwm","rotation/pwm",325719016),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"rpm","rpm",279796767)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4306,0.9534], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.8539,-0.02473], null),new cljs.core.Keyword(null,"delay","delay",-574225219),(1)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"cylinder",new cljs.core.Keyword(null,"radius","radius",-2073122258),0.15,new cljs.core.Keyword(null,"height","height",1025178622),0.3], null),new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"box",new cljs.core.Keyword(null,"width","width",-384071477),1.2,new cljs.core.Keyword(null,"height","height",1025178622),0.3,new cljs.core.Keyword(null,"depth","depth",1768663640),1.2], null),new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"box",new cljs.core.Keyword(null,"width","width",-384071477),0.5,new cljs.core.Keyword(null,"height","height",1025178622),0.1,new cljs.core.Keyword(null,"depth","depth",1768663640),0.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)]);
uni_next.core.initial_taxons = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Keyword("app","component","app/component",1555903341),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Keyword(null,"fan","fan",-1339826021),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"shaft","shaft",-278047141)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"b2","b2",1108940514),null,new cljs.core.Keyword(null,"b1","b1",-1270036758),null,new cljs.core.Keyword(null,"b0","b0",-372343377),null,new cljs.core.Keyword(null,"b4","b4",-1728006924),null,new cljs.core.Keyword(null,"b3","b3",1128981270),null,new cljs.core.Keyword(null,"b6","b6",1762223416),null,new cljs.core.Keyword(null,"b5","b5",-1961609154),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"pwm","pwm",365765730),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword("rotation","pwm","rotation/pwm",325719016),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),null,new cljs.core.Keyword(null,"position","position",-2011731912),null,new cljs.core.Keyword(null,"step","step",1288888124),null,new cljs.core.Keyword(null,"reflection","reflection",-1984073923),null,new cljs.core.Keyword(null,"rpm","rpm",279796767),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blade","blade",25118060),null,new cljs.core.Keyword(null,"ir","ir",-1141752677),null,new cljs.core.Keyword(null,"fan","fan",-1339826021),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"shaft","shaft",-278047141),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b2","b2",1108940514),null,new cljs.core.Keyword(null,"b1","b1",-1270036758),null,new cljs.core.Keyword(null,"b0","b0",-372343377),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),null,new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),null], null), null)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Var(function(){return uni_next.core.spin;},new cljs.core.Symbol("uni-next.core","spin","uni-next.core/spin",-2068903010,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"spin","spin",770699451,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/d43/4j9ki9/uni_next/core.cljc",11,1,30,30,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"inf","inf",522086585,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"inf","inf",522086585,null),(-180),new cljs.core.Symbol(null,"sup","sup",-398960819,null),(180)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.spin)?uni_next.core.spin.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.move;},new cljs.core.Symbol("uni-next.core","move","uni-next.core/move",-1707735731,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"move","move",-470352782,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/d43/4j9ki9/uni_next/core.cljc",11,1,35,35,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rate","rate",211871829,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"dt","dt",1272086768,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(60))], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.move)?uni_next.core.move.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.transfer;},new cljs.core.Symbol("uni-next.core","transfer","uni-next.core/transfer",-1668546414,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/d43/4j9ki9/uni_next/core.cljc",15,1,18,18,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"Yt","Yt",913187880,null),new cljs.core.Symbol(null,"Ut","Ut",-1417145912,null),new cljs.core.Symbol(null,"Gz","Gz",-1114037601,null)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.transfer)?uni_next.core.transfer.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.rpm_timer;},new cljs.core.Symbol("uni-next.core","rpm-timer","uni-next.core/rpm-timer",183906598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"rpm-timer","rpm-timer",-1288253947,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/d43/4j9ki9/uni_next/core.cljc",16,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"now","now",-9994004,null)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.rpm_timer)?uni_next.core.rpm_timer.cljs$lang$test:null)]))]),new cljs.core.Symbol("app","system","app/system",1611578314,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interrupts","interrupts",-100541811,null),null,new cljs.core.Symbol(null,"control","control",-761857733,null),null,new cljs.core.Symbol(null,"physics","physics",386322390,null),null], null), null)], null));
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
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.core.ShaftPot.prototype = goog.object.clone(React.Component.prototype);

var x19809_19823 = uni_next.core.ShaftPot.prototype;
x19809_19823.componentWillUpdate = ((function (x19809_19823){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___19824 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___19825 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___19824,next_ident__16519__auto___19825)){
var idxr__16520__auto___19826 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___19826 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___19826),((function (idxr__16520__auto___19826,ident__16518__auto___19824,next_ident__16519__auto___19825,this__16514__auto__,x19809_19823){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___19824], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___19825], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___19826,ident__16518__auto___19824,next_ident__16519__auto___19825,this__16514__auto__,x19809_19823))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x19809_19823))
;

x19809_19823.shouldComponentUpdate = ((function (x19809_19823){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__19811 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19811);
} else {
return G__19811;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x19809_19823))
;

x19809_19823.componentWillUnmount = ((function (x19809_19823){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19809_19823))
;

x19809_19823.componentDidUpdate = ((function (x19809_19823){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x19809_19823))
;

x19809_19823.isMounted = ((function (x19809_19823){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19809_19823))
;

x19809_19823.componentWillMount = ((function (x19809_19823){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19809_19823))
;

x19809_19823.render = ((function (x19809_19823){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_19812 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19813 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19814 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19815 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19816 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__19817 = om.next.props.call(null,this$);
var map__19817__$1 = ((((!((map__19817 == null)))?((((map__19817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19817):map__19817);
var props = map__19817__$1;
var step = cljs.core.get.call(null,map__19817__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var map__19818 = cljs.core.meta.call(null,props);
var map__19818__$1 = ((((!((map__19818 == null)))?((((map__19818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19818):map__19818);
var uid = cljs.core.get.call(null,map__19818__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.call(null,map__19818__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,({"style": ({"margin": "8px"})}),om.dom.h3.call(null,({"style": ({"marginLeft": "5px"})}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("< "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(step.toFixed((4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u00B0")].join('')),om.dom.button.call(null,({"onClick": ((function (map__19817,map__19817__$1,props,step,map__19818,map__19818__$1,uid,type,_STAR_reconciler_STAR_19812,_STAR_depth_STAR_19813,_STAR_shared_STAR_19814,_STAR_instrument_STAR_19815,_STAR_parent_STAR_19816,this$,this__16513__auto__,x19809_19823){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add","app/add",1875379493,null)),(function (){var x__9044__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"step","step",1288888124)),(function (){var x__9044__auto__ = uid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(10))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(map__19817,map__19817__$1,props,step,map__19818,map__19818__$1,uid,type,_STAR_reconciler_STAR_19812,_STAR_depth_STAR_19813,_STAR_shared_STAR_19814,_STAR_instrument_STAR_19815,_STAR_parent_STAR_19816,this$,this__16513__auto__,x19809_19823))
}),"+"),om.dom.button.call(null,({"onClick": ((function (map__19817,map__19817__$1,props,step,map__19818,map__19818__$1,uid,type,_STAR_reconciler_STAR_19812,_STAR_depth_STAR_19813,_STAR_shared_STAR_19814,_STAR_instrument_STAR_19815,_STAR_parent_STAR_19816,this$,this__16513__auto__,x19809_19823){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add","app/add",1875379493,null)),(function (){var x__9044__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"step","step",1288888124)),(function (){var x__9044__auto__ = uid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(-10))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(map__19817,map__19817__$1,props,step,map__19818,map__19818__$1,uid,type,_STAR_reconciler_STAR_19812,_STAR_depth_STAR_19813,_STAR_shared_STAR_19814,_STAR_instrument_STAR_19815,_STAR_parent_STAR_19816,this$,this__16513__auto__,x19809_19823))
}),"-"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19816;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19815;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19814;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19813;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19812;
}});})(x19809_19823))
;


uni_next.core.ShaftPot.prototype.constructor = uni_next.core.ShaftPot;

uni_next.core.ShaftPot.prototype.constructor.displayName = "uni-next.core/ShaftPot";

uni_next.core.ShaftPot.prototype.om$isComponent = true;

var x19821_19827 = uni_next.core.ShaftPot;
/** @nocollapse */
x19821_19827.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19821_19827.om$next$IQuery$query$arity$1 = ((function (x19821_19827){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null);
});})(x19821_19827))
;


var x19822_19828 = uni_next.core.ShaftPot.prototype;

x19822_19828.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19822_19828.om$next$IQuery$query$arity$1 = ((function (x19822_19828){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null);
});})(x19822_19828))
;


uni_next.core.ShaftPot.cljs$lang$type = true;

uni_next.core.ShaftPot.cljs$lang$ctorStr = "uni-next.core/ShaftPot";

uni_next.core.ShaftPot.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.core/ShaftPot");
});
uni_next.core.shaft_pot = om.next.factory.call(null,uni_next.core.ShaftPot);
/**
 * @constructor
 */
uni_next.core.IrLcd = (function uni_next$core$IrLcd(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.core.IrLcd.prototype = goog.object.clone(React.Component.prototype);

var x19833_19847 = uni_next.core.IrLcd.prototype;
x19833_19847.componentWillUpdate = ((function (x19833_19847){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___19848 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___19849 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___19848,next_ident__16519__auto___19849)){
var idxr__16520__auto___19850 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___19850 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___19850),((function (idxr__16520__auto___19850,ident__16518__auto___19848,next_ident__16519__auto___19849,this__16514__auto__,x19833_19847){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___19848], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___19849], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___19850,ident__16518__auto___19848,next_ident__16519__auto___19849,this__16514__auto__,x19833_19847))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x19833_19847))
;

x19833_19847.shouldComponentUpdate = ((function (x19833_19847){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__19835 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19835);
} else {
return G__19835;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x19833_19847))
;

x19833_19847.componentWillUnmount = ((function (x19833_19847){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19833_19847))
;

x19833_19847.componentDidUpdate = ((function (x19833_19847){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x19833_19847))
;

x19833_19847.isMounted = ((function (x19833_19847){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19833_19847))
;

x19833_19847.componentWillMount = ((function (x19833_19847){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19833_19847))
;

x19833_19847.render = ((function (x19833_19847){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_19836 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19837 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19838 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19839 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19840 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__19841 = om.next.props.call(null,this$);
var map__19841__$1 = ((((!((map__19841 == null)))?((((map__19841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19841):map__19841);
var props = map__19841__$1;
var rpm = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword(null,"rpm","rpm",279796767));
var reflection = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
var map__19842 = cljs.core.meta.call(null,props);
var map__19842__$1 = ((((!((map__19842 == null)))?((((map__19842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19842):map__19842);
var uid = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,({"style": ({"margin": "8px"})}),om.dom.h3.call(null,({"style": ({"marginLeft": "5px"})}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(rpm).toFixed((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" rpm")].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19840;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19839;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19838;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19837;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19836;
}});})(x19833_19847))
;


uni_next.core.IrLcd.prototype.constructor = uni_next.core.IrLcd;

uni_next.core.IrLcd.prototype.constructor.displayName = "uni-next.core/IrLcd";

uni_next.core.IrLcd.prototype.om$isComponent = true;

var x19845_19851 = uni_next.core.IrLcd;
/** @nocollapse */
x19845_19851.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19845_19851.om$next$IQuery$query$arity$1 = ((function (x19845_19851){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)], null))], null);
});})(x19845_19851))
;


var x19846_19852 = uni_next.core.IrLcd.prototype;

x19846_19852.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19846_19852.om$next$IQuery$query$arity$1 = ((function (x19846_19852){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)], null))], null);
});})(x19846_19852))
;


uni_next.core.IrLcd.cljs$lang$type = true;

uni_next.core.IrLcd.cljs$lang$ctorStr = "uni-next.core/IrLcd";

uni_next.core.IrLcd.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.core/IrLcd");
});
uni_next.core.ir_lcd = om.next.factory.call(null,uni_next.core.IrLcd);
/**
 * @constructor
 */
uni_next.core.App = (function uni_next$core$App(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.core.App.prototype = goog.object.clone(React.Component.prototype);

var x19857_19869 = uni_next.core.App.prototype;
x19857_19869.componentWillUpdate = ((function (x19857_19869){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___19870 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___19871 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___19870,next_ident__16519__auto___19871)){
var idxr__16520__auto___19872 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___19872 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___19872),((function (idxr__16520__auto___19872,ident__16518__auto___19870,next_ident__16519__auto___19871,this__16514__auto__,x19857_19869){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___19870], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___19871], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___19872,ident__16518__auto___19870,next_ident__16519__auto___19871,this__16514__auto__,x19857_19869))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x19857_19869))
;

x19857_19869.shouldComponentUpdate = ((function (x19857_19869){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__19859 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19859);
} else {
return G__19859;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x19857_19869))
;

x19857_19869.componentWillUnmount = ((function (x19857_19869){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19857_19869))
;

x19857_19869.componentDidUpdate = ((function (x19857_19869){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x19857_19869))
;

x19857_19869.isMounted = ((function (x19857_19869){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19857_19869))
;

x19857_19869.componentWillMount = ((function (x19857_19869){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19857_19869))
;

x19857_19869.render = ((function (x19857_19869){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_19860 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19861 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19862 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19863 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19864 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__19865 = om.next.props.call(null,this$);
var map__19865__$1 = ((((!((map__19865 == null)))?((((map__19865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19865):map__19865);
var body = cljs.core.get.call(null,map__19865__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var shaft = cljs.core.get.call(null,map__19865__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__19865__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("app","increment","app/increment",81538792,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null)], null)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"physics","physics",386322390,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spin","spin",770699451,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"step","step",1288888124)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"control","control",-761857733,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"transfer","transfer",1967954927,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Yt","Yt",-727343647),cljs.core.list(new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-of","as-of",-1841962382),(5)], null)),new cljs.core.Keyword(null,"Ut","Ut",1237289857),cljs.core.list(new cljs.core.Keyword(null,"pwm","pwm",365765730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-of","as-of",-1841962382),(5)], null)),new cljs.core.Keyword(null,"Gz","Gz",1540398168),new cljs.core.Keyword("rotation","pwm","rotation/pwm",325719016),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"time","time",1385887882)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"interrupts","interrupts",-100541811,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"rpm-timer","rpm-timer",-1288253947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"time","time",1385887882)], null))], null)], null)])], null));

return om.dom.div.call(null,({"style": uni_next.core.background}),cljs.core.apply.call(null,om.dom.div,({"style": ({"zIndex": (1), "position": "absolute"})}),cljs.core.concat.call(null,cljs.core.map.call(null,uni_next.core.shaft_pot,shaft),cljs.core.map.call(null,uni_next.core.ir_lcd,ir))),common.web.a_scene.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene",new cljs.core.Keyword(null,"embedded","embedded",-115486248),true], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(0)], null)], null),cljs.core.map.call(null,uni_next.ui.body,body)),common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"camera",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-5)], null),new cljs.core.Keyword(null,"near","near",-1077668328),0.75,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(180),(0),(180)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(2)], null),new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"adInverted","adInverted",-348082687),true,new cljs.core.Keyword(null,"wsInverted","wsInverted",1431610709),true], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19864;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19863;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19862;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19861;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19860;
}});})(x19857_19869))
;


uni_next.core.App.prototype.constructor = uni_next.core.App;

uni_next.core.App.prototype.constructor.displayName = "uni-next.core/App";

uni_next.core.App.prototype.om$isComponent = true;

var x19867_19873 = uni_next.core.App;
/** @nocollapse */
x19867_19873.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19867_19873.om$next$IQuery$query$arity$1 = ((function (x19867_19873){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),om.next.get_query.call(null,uni_next.ui.Body)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.core.ShaftPot)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.core.IrLcd)], null)], null);
});})(x19867_19873))
;


var x19868_19874 = uni_next.core.App.prototype;

x19868_19874.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19868_19874.om$next$IQuery$query$arity$1 = ((function (x19868_19874){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),om.next.get_query.call(null,uni_next.ui.Body)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.core.ShaftPot)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.core.IrLcd)], null)], null);
});})(x19868_19874))
;


uni_next.core.App.cljs$lang$type = true;

uni_next.core.App.cljs$lang$ctorStr = "uni-next.core/App";

uni_next.core.App.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.core/App");
});
uni_next.core._main = (function uni_next$core$_main(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19876 = arguments.length;
var i__9332__auto___19877 = (0);
while(true){
if((i__9332__auto___19877 < len__9331__auto___19876)){
args__9338__auto__.push((arguments[i__9332__auto___19877]));

var G__19878 = (i__9332__auto___19877 + (1));
i__9332__auto___19877 = G__19878;
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

uni_next.core._main.cljs$lang$applyTo = (function (seq19875){
return uni_next.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19875));
});


//# sourceMappingURL=core.js.map