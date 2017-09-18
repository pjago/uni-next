// Compiled by ClojureScript 1.9.542 {}
goog.provide('uni_next.core');
goog.require('cljs.core');
goog.require('common.math');
goog.require('common.web');
goog.require('om.next');
goog.require('om.dom');
goog.require('uni_next.parser');
goog.require('uni_next.ui');
uni_next.core.transfer = (function uni_next$core$transfer(it,p__19757){
var map__19762 = p__19757;
var map__19762__$1 = ((((!((map__19762 == null)))?((((map__19762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19762):map__19762);
var map__19763 = cljs.core.get.call(null,map__19762__$1,new cljs.core.Keyword(null,"Gz","Gz",1540398168));
var map__19763__$1 = ((((!((map__19763 == null)))?((((map__19763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19763):map__19763);
var num = cljs.core.get.call(null,map__19763__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__19763__$1,new cljs.core.Keyword(null,"den","den",1422717834));
var delay = cljs.core.get.call(null,map__19763__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var t = cljs.core.get.call(null,map__19762__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var Ut = cljs.core.get.call(null,map__19762__$1,new cljs.core.Keyword(null,"Ut","Ut",1237289857));
var Yt = cljs.core.get.call(null,map__19762__$1,new cljs.core.Keyword(null,"Yt","Yt",-727343647));
var n = cljs.core.count.call(null,num);
var d = cljs.core.count.call(null,den);
if((t <= delay)){
return it;
} else {
return common.math._SLASH_.call(null,common.math._.call(null,cljs.core.apply.call(null,common.math._PLUS_,common.math._STAR_.call(null,num,cljs.core.subvec.call(null,Ut,common.math._PLUS_.call(null,d,delay,common.math._.call(null,n)),common.math._PLUS_.call(null,d,delay,(-1))))),cljs.core.apply.call(null,common.math._PLUS_,common.math._STAR_.call(null,cljs.core.rest.call(null,den),cljs.core.subvec.call(null,Yt,(1),(d - (1)))))),cljs.core.first.call(null,den));
}
});
uni_next.core.spin = (function uni_next$core$spin(it,p__19766){
var map__19769 = p__19766;
var map__19769__$1 = ((((!((map__19769 == null)))?((((map__19769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19769):map__19769);
var unit = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var scale = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),0.1);
var inf = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"inf","inf",-1118444942),(-180));
var sup = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"sup","sup",-2039492346),(180));
return common.math.cycle.call(null,common.math._PLUS_.call(null,it,common.math._STAR_.call(null,unit,scale)),inf,sup);
});
uni_next.core.rpm_timer = (function uni_next$core$rpm_timer(p__19771,p__19772){
var map__19777 = p__19771;
var map__19777__$1 = ((((!((map__19777 == null)))?((((map__19777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19777):map__19777);
var it = map__19777__$1;
var d = cljs.core.get.call(null,map__19777__$1,new cljs.core.Keyword(null,"div","div",1057191632));
var n = cljs.core.get.call(null,map__19777__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var then = cljs.core.get.call(null,map__19777__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var map__19778 = p__19772;
var map__19778__$1 = ((((!((map__19778 == null)))?((((map__19778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19778):map__19778);
var now = cljs.core.get.call(null,map__19778__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var rpm_min = cljs.core.get.call(null,map__19778__$1,new cljs.core.Keyword(null,"rpm-min","rpm-min",-388816503),(8));
if((n > (0))){
return cljs.core.assoc.call(null,it,new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"value","value",305978217),common.math._STAR_.call(null,common.math._SLASH_.call(null,n,d),common.math._SLASH_.call(null,(3600),common.math._.call(null,now,then))),new cljs.core.Keyword(null,"time","time",1385887882),now);
} else {
if((common.math._.call(null,now,then) >= common.math._SLASH_.call(null,(3600),rpm_min))){
return cljs.core.assoc.call(null,it,new cljs.core.Keyword(null,"count","count",2139924085),(-1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"time","time",1385887882),now);
} else {
return it;

}
}
});
uni_next.core.count_children = (function uni_next$core$count_children(it,params){
return cljs.core.into.call(null,it,cljs.core.map.call(null,(function (p__19785){
var vec__19786 = p__19785;
var k = cljs.core.nth.call(null,vec__19786,(0),null);
var v = cljs.core.nth.call(null,vec__19786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count.call(null,uni_next.parser.children.call(null,v))], null);
})),params);
});
uni_next.core.initial = "static/fan/";
uni_next.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("position","scale","position/scale",1456884672),new cljs.core.Keyword(null,"pwm","pwm",365765730),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710),new cljs.core.Keyword("true-rpm","pwm","true-rpm/pwm",1680374098),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"rpm","rpm",279796767)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.35,-0.5], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"cylinder",new cljs.core.Keyword(null,"radius","radius",-2073122258),0.15,new cljs.core.Keyword(null,"height","height",1025178622),0.3], null),new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"box",new cljs.core.Keyword(null,"width","width",-384071477),1.2,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"depth","depth",1768663640),0.3], null),new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"box",new cljs.core.Keyword(null,"width","width",-384071477),0.5,new cljs.core.Keyword(null,"height","height",1025178622),0.1,new cljs.core.Keyword(null,"depth","depth",1768663640),0.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4306,0.9534], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.8539,-0.02473], null),new cljs.core.Keyword(null,"delay","delay",-574225219),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"count","count",2139924085),(-1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)]);
uni_next.core.initial_taxons = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Keyword("app","component","app/component",1555903341),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Keyword(null,"fan","fan",-1339826021),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"shaft","shaft",-278047141)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"b2","b2",1108940514),null,new cljs.core.Keyword(null,"b1","b1",-1270036758),null,new cljs.core.Keyword(null,"b0","b0",-372343377),null,new cljs.core.Keyword(null,"b4","b4",-1728006924),null,new cljs.core.Keyword(null,"b3","b3",1128981270),null,new cljs.core.Keyword(null,"b6","b6",1762223416),null,new cljs.core.Keyword(null,"b5","b5",-1961609154),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword("position","scale","position/scale",1456884672),null,new cljs.core.Keyword(null,"pwm","pwm",365765730),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),null,new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710),null,new cljs.core.Keyword("true-rpm","pwm","true-rpm/pwm",1680374098),null,new cljs.core.Keyword(null,"position","position",-2011731912),null,new cljs.core.Keyword(null,"reflection","reflection",-1984073923),null,new cljs.core.Keyword(null,"rpm","rpm",279796767),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blade","blade",25118060),null,new cljs.core.Keyword(null,"ir","ir",-1141752677),null,new cljs.core.Keyword(null,"fan","fan",-1339826021),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"shaft","shaft",-278047141),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b2","b2",1108940514),null,new cljs.core.Keyword(null,"b1","b1",-1270036758),null,new cljs.core.Keyword(null,"b0","b0",-372343377),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),null,new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","ir","m8025s/ir",-150583182),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m8025s","m8025s",-752021425),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("m8025s","shaft","m8025s/shaft",-1239327986),null], null), null)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Var(function(){return uni_next.core.count_children;},new cljs.core.Symbol("uni-next.core","count-children","uni-next.core/count-children",217205630,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"count-children","count-children",1974710301,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/2ti/4j9ki9/uni_next/core.cljc",21,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(uni_next.core.count_children)?uni_next.core.count_children.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.spin;},new cljs.core.Symbol("uni-next.core","spin","uni-next.core/spin",-2068903010,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"spin","spin",770699451,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/2ti/4j9ki9/uni_next/core.cljc",11,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null),new cljs.core.Symbol(null,"inf","inf",522086585,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"scale","scale",1410104174,null),0.1,new cljs.core.Symbol(null,"inf","inf",522086585,null),(-180),new cljs.core.Symbol(null,"sup","sup",-398960819,null),(180)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.spin)?uni_next.core.spin.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.transfer;},new cljs.core.Symbol("uni-next.core","transfer","uni-next.core/transfer",-1668546414,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/2ti/4j9ki9/uni_next/core.cljc",15,1,17,17,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"Ut","Ut",-1417145912,null),new cljs.core.Symbol(null,"Yt","Yt",913187880,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"den","den",-1231717935,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null)], null)], null),new cljs.core.Keyword(null,"Gz","Gz",1540398168)])], null)),null,(cljs.core.truth_(uni_next.core.transfer)?uni_next.core.transfer.cljs$lang$test:null)])),new cljs.core.Var(function(){return uni_next.core.rpm_timer;},new cljs.core.Symbol("uni-next.core","rpm-timer","uni-next.core/rpm-timer",183906598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.core","uni-next.core",-938269180,null),new cljs.core.Symbol(null,"rpm-timer","rpm-timer",-1288253947,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/2ti/4j9ki9/uni_next/core.cljc",16,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"it","it",-1630841225,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"now","now",-9994004,null),new cljs.core.Symbol(null,"rpm-min","rpm-min",1251715024,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rpm-min","rpm-min",1251715024,null),(8)], null)], null)], null)),null,(cljs.core.truth_(uni_next.core.rpm_timer)?uni_next.core.rpm_timer.cljs$lang$test:null)]))]),new cljs.core.Symbol("app","system","app/system",1611578314,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"*taxon*","*taxon*",-2127220074,null),null,new cljs.core.Symbol(null,"control","control",-761857733,null),null,new cljs.core.Symbol(null,"physics","physics",386322390,null),null,new cljs.core.Symbol(null,"polling","polling",-99286355,null),null], null), null)], null));
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
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.core.ShaftPot.prototype = goog.object.clone(React.Component.prototype);

var x19797_19811 = uni_next.core.ShaftPot.prototype;
x19797_19811.componentWillUpdate = ((function (x19797_19811){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19812 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19813 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19812,next_ident__16544__auto___19813)){
var idxr__16545__auto___19814 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19814 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19814),((function (idxr__16545__auto___19814,ident__16543__auto___19812,next_ident__16544__auto___19813,this__16539__auto__,x19797_19811){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19812], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19813], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19814,ident__16543__auto___19812,next_ident__16544__auto___19813,this__16539__auto__,x19797_19811))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x19797_19811))
;

x19797_19811.shouldComponentUpdate = ((function (x19797_19811){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19799 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19799);
} else {
return G__19799;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x19797_19811))
;

x19797_19811.componentWillUnmount = ((function (x19797_19811){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19797_19811))
;

x19797_19811.componentDidUpdate = ((function (x19797_19811){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x19797_19811))
;

x19797_19811.isMounted = ((function (x19797_19811){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19797_19811))
;

x19797_19811.componentWillMount = ((function (x19797_19811){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19797_19811))
;

x19797_19811.render = ((function (x19797_19811){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19800 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19801 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19802 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19803 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19804 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__19805 = om.next.props.call(null,this$);
var map__19805__$1 = ((((!((map__19805 == null)))?((((map__19805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19805):map__19805);
var props = map__19805__$1;
var true_rpm = cljs.core.get.call(null,map__19805__$1,new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710));
var map__19806 = cljs.core.meta.call(null,props);
var map__19806__$1 = ((((!((map__19806 == null)))?((((map__19806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19806):map__19806);
var uid = cljs.core.get.call(null,map__19806__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.call(null,map__19806__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,({"style": ({"margin": "8px"})}),om.dom.h3.call(null,({"style": ({"marginLeft": "5px"})}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(true_rpm.toFixed((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" true-rpm")].join('')),om.dom.button.call(null,({"onClick": ((function (map__19805,map__19805__$1,props,true_rpm,map__19806,map__19806__$1,uid,type,_STAR_reconciler_STAR_19800,_STAR_depth_STAR_19801,_STAR_shared_STAR_19802,_STAR_instrument_STAR_19803,_STAR_parent_STAR_19804,this$,this__16538__auto__,x19797_19811){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add","app/add",1875379493,null)),(function (){var x__9044__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710)),(function (){var x__9044__auto__ = uid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(100))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(map__19805,map__19805__$1,props,true_rpm,map__19806,map__19806__$1,uid,type,_STAR_reconciler_STAR_19800,_STAR_depth_STAR_19801,_STAR_shared_STAR_19802,_STAR_instrument_STAR_19803,_STAR_parent_STAR_19804,this$,this__16538__auto__,x19797_19811))
}),"+"),om.dom.button.call(null,({"onClick": ((function (map__19805,map__19805__$1,props,true_rpm,map__19806,map__19806__$1,uid,type,_STAR_reconciler_STAR_19800,_STAR_depth_STAR_19801,_STAR_shared_STAR_19802,_STAR_instrument_STAR_19803,_STAR_parent_STAR_19804,this$,this__16538__auto__,x19797_19811){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add","app/add",1875379493,null)),(function (){var x__9044__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710)),(function (){var x__9044__auto__ = uid;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(-100))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(map__19805,map__19805__$1,props,true_rpm,map__19806,map__19806__$1,uid,type,_STAR_reconciler_STAR_19800,_STAR_depth_STAR_19801,_STAR_shared_STAR_19802,_STAR_instrument_STAR_19803,_STAR_parent_STAR_19804,this$,this__16538__auto__,x19797_19811))
}),"-"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19804;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19803;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19802;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19801;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19800;
}});})(x19797_19811))
;


uni_next.core.ShaftPot.prototype.constructor = uni_next.core.ShaftPot;

uni_next.core.ShaftPot.prototype.constructor.displayName = "uni-next.core/ShaftPot";

uni_next.core.ShaftPot.prototype.om$isComponent = true;

var x19809_19815 = uni_next.core.ShaftPot;
/** @nocollapse */
x19809_19815.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19809_19815.om$next$IQuery$query$arity$1 = ((function (x19809_19815){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710)], null);
});})(x19809_19815))
;


var x19810_19816 = uni_next.core.ShaftPot.prototype;

x19810_19816.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19810_19816.om$next$IQuery$query$arity$1 = ((function (x19810_19816){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710)], null);
});})(x19810_19816))
;


uni_next.core.ShaftPot.cljs$lang$type = true;

uni_next.core.ShaftPot.cljs$lang$ctorStr = "uni-next.core/ShaftPot";

uni_next.core.ShaftPot.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.core/ShaftPot");
});
uni_next.core.shaft_pot = om.next.factory.call(null,uni_next.core.ShaftPot);
/**
 * @constructor
 */
uni_next.core.IrLcd = (function uni_next$core$IrLcd(){
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.core.IrLcd.prototype = goog.object.clone(React.Component.prototype);

var x19821_19835 = uni_next.core.IrLcd.prototype;
x19821_19835.componentWillUpdate = ((function (x19821_19835){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19836 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19837 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19836,next_ident__16544__auto___19837)){
var idxr__16545__auto___19838 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19838 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19838),((function (idxr__16545__auto___19838,ident__16543__auto___19836,next_ident__16544__auto___19837,this__16539__auto__,x19821_19835){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19836], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19837], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19838,ident__16543__auto___19836,next_ident__16544__auto___19837,this__16539__auto__,x19821_19835))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x19821_19835))
;

x19821_19835.shouldComponentUpdate = ((function (x19821_19835){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19823 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19823);
} else {
return G__19823;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x19821_19835))
;

x19821_19835.componentWillUnmount = ((function (x19821_19835){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19821_19835))
;

x19821_19835.componentDidUpdate = ((function (x19821_19835){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x19821_19835))
;

x19821_19835.isMounted = ((function (x19821_19835){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19821_19835))
;

x19821_19835.componentWillMount = ((function (x19821_19835){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19821_19835))
;

x19821_19835.render = ((function (x19821_19835){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19824 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19825 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19826 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19827 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19828 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__19829 = om.next.props.call(null,this$);
var map__19829__$1 = ((((!((map__19829 == null)))?((((map__19829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19829):map__19829);
var props = map__19829__$1;
var rpm = cljs.core.get.call(null,map__19829__$1,new cljs.core.Keyword(null,"rpm","rpm",279796767));
var reflection = cljs.core.get.call(null,map__19829__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
var map__19830 = cljs.core.meta.call(null,props);
var map__19830__$1 = ((((!((map__19830 == null)))?((((map__19830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19830):map__19830);
var uid = cljs.core.get.call(null,map__19830__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.call(null,map__19830__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,({"style": ({"margin": "8px"})}),om.dom.h3.call(null,({"style": ({"marginLeft": "5px"})}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(rpm).toFixed((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" rpm")].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19828;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19827;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19826;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19825;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19824;
}});})(x19821_19835))
;


uni_next.core.IrLcd.prototype.constructor = uni_next.core.IrLcd;

uni_next.core.IrLcd.prototype.constructor.displayName = "uni-next.core/IrLcd";

uni_next.core.IrLcd.prototype.om$isComponent = true;

var x19833_19839 = uni_next.core.IrLcd;
/** @nocollapse */
x19833_19839.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19833_19839.om$next$IQuery$query$arity$1 = ((function (x19833_19839){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)], null)),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19833_19839))
;


var x19834_19840 = uni_next.core.IrLcd.prototype;

x19834_19840.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19834_19840.om$next$IQuery$query$arity$1 = ((function (x19834_19840){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)], null)),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19834_19840))
;


uni_next.core.IrLcd.cljs$lang$type = true;

uni_next.core.IrLcd.cljs$lang$ctorStr = "uni-next.core/IrLcd";

uni_next.core.IrLcd.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.core/IrLcd");
});
uni_next.core.ir_lcd = om.next.factory.call(null,uni_next.core.IrLcd);
/**
 * @constructor
 */
uni_next.core.App = (function uni_next$core$App(){
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.core.App.prototype = goog.object.clone(React.Component.prototype);

var x19845_19857 = uni_next.core.App.prototype;
x19845_19857.componentWillUpdate = ((function (x19845_19857){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19858 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19859 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19858,next_ident__16544__auto___19859)){
var idxr__16545__auto___19860 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19860 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19860),((function (idxr__16545__auto___19860,ident__16543__auto___19858,next_ident__16544__auto___19859,this__16539__auto__,x19845_19857){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19858], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19859], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19860,ident__16543__auto___19858,next_ident__16544__auto___19859,this__16539__auto__,x19845_19857))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x19845_19857))
;

x19845_19857.shouldComponentUpdate = ((function (x19845_19857){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19847 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19847);
} else {
return G__19847;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x19845_19857))
;

x19845_19857.componentWillUnmount = ((function (x19845_19857){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19845_19857))
;

x19845_19857.componentDidUpdate = ((function (x19845_19857){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x19845_19857))
;

x19845_19857.isMounted = ((function (x19845_19857){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19845_19857))
;

x19845_19857.componentWillMount = ((function (x19845_19857){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19845_19857))
;

x19845_19857.componentDidMount = ((function (x19845_19857){
return (function (){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"*taxon*","*taxon*",-2127220074,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"count-children","count-children",1974710301,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"physics","physics",386322390,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spin","spin",770699451,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"polling","polling",-99286355,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"rpm-timer","rpm-timer",-1288253947,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"time","time",1385887882)], null))], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"control","control",-761857733,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"transfer","transfer",1967954927,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Yt","Yt",-727343647),cljs.core.list(new cljs.core.Keyword(null,"true-rpm","true-rpm",503205710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-of","as-of",-1841962382),(5)], null)),new cljs.core.Keyword(null,"Ut","Ut",1237289857),cljs.core.list(new cljs.core.Keyword(null,"pwm","pwm",365765730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-of","as-of",-1841962382),(5)], null)),new cljs.core.Keyword(null,"Gz","Gz",1540398168),new cljs.core.Keyword("true-rpm","pwm","true-rpm/pwm",1680374098),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"time","time",1385887882)], null))], null)], null)]),cljs.core.list(new cljs.core.Symbol(null,"*taxon*","*taxon*",-2127220074,null))], null));
});})(x19845_19857))
;

x19845_19857.render = ((function (x19845_19857){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19848 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19849 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19850 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19851 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19852 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__19853 = om.next.props.call(null,this$);
var map__19853__$1 = ((((!((map__19853 == null)))?((((map__19853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19853):map__19853);
var body = cljs.core.get.call(null,map__19853__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var shaft = cljs.core.get.call(null,map__19853__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__19853__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("app","increment","app/increment",81538792,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"physics","physics",386322390,null)),cljs.core.list(new cljs.core.Symbol(null,"control","control",-761857733,null)),cljs.core.list(new cljs.core.Symbol(null,"polling","polling",-99286355,null))], null));

return om.dom.div.call(null,({"style": uni_next.core.background}),cljs.core.apply.call(null,om.dom.div,({"style": ({"zIndex": (1), "position": "absolute"})}),cljs.core.concat.call(null,cljs.core.map.call(null,uni_next.core.shaft_pot,shaft),cljs.core.map.call(null,uni_next.core.ir_lcd,ir))),common.web.a_scene.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene",new cljs.core.Keyword(null,"embedded","embedded",-115486248),true], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(60),(0)], null)], null),cljs.core.map.call(null,uni_next.ui.body,body)),common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"camera",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(5)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(2)], null),new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19852;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19851;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19850;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19849;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19848;
}});})(x19845_19857))
;


uni_next.core.App.prototype.constructor = uni_next.core.App;

uni_next.core.App.prototype.constructor.displayName = "uni-next.core/App";

uni_next.core.App.prototype.om$isComponent = true;

var x19855_19861 = uni_next.core.App;
/** @nocollapse */
x19855_19861.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19855_19861.om$next$IQuery$query$arity$1 = ((function (x19855_19861){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),om.next.get_query.call(null,uni_next.ui.Body)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.core.ShaftPot)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.core.IrLcd)], null)], null);
});})(x19855_19861))
;


var x19856_19862 = uni_next.core.App.prototype;

x19856_19862.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19856_19862.om$next$IQuery$query$arity$1 = ((function (x19856_19862){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),om.next.get_query.call(null,uni_next.ui.Body)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.core.ShaftPot)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.core.IrLcd)], null)], null);
});})(x19856_19862))
;


uni_next.core.App.cljs$lang$type = true;

uni_next.core.App.cljs$lang$ctorStr = "uni-next.core/App";

uni_next.core.App.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.core/App");
});
uni_next.core._main = (function uni_next$core$_main(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19864 = arguments.length;
var i__9332__auto___19865 = (0);
while(true){
if((i__9332__auto___19865 < len__9331__auto___19864)){
args__9338__auto__.push((arguments[i__9332__auto___19865]));

var G__19866 = (i__9332__auto___19865 + (1));
i__9332__auto___19865 = G__19866;
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

uni_next.core._main.cljs$lang$applyTo = (function (seq19863){
return uni_next.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19863));
});


//# sourceMappingURL=core.js.map