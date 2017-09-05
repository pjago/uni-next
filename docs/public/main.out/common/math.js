// Compiled by ClojureScript 1.9.542 {}
goog.provide('common.math');
goog.require('cljs.core');
goog.require('common.cljc');
common.math.Object = Object;

common.math.Boolean = Boolean;

common.math.Number = Number;

cljs.core.derive.call(null,common.math.Object,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));

cljs.core.derive.call(null,common.math.Boolean,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));

cljs.core.derive.call(null,common.math.Number,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));

common.math.Sequential = new cljs.core.Keyword("common.math","sequential","common.math/sequential",1921157939);

cljs.core.derive.call(null,common.math.Sequential,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));

cljs.core.derive.call(null,cljs.core.List,common.math.Sequential);

cljs.core.derive.call(null,cljs.core.EmptyList,common.math.Sequential);

cljs.core.derive.call(null,cljs.core.LazySeq,common.math.Sequential);

cljs.core.derive.call(null,cljs.core.IndexedSeq,common.math.Sequential);

common.math.APersistentVector = new cljs.core.Keyword("common.math","vector","common.math/vector",-134388761);

cljs.core.derive.call(null,common.math.APersistentVector,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));

cljs.core.derive.call(null,cljs.core.PersistentVector,common.math.APersistentVector);

common.math.IPersistentMap = new cljs.core.Keyword("common.math","map","common.math/map",-699340872);

cljs.core.derive.call(null,common.math.IPersistentMap,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));

cljs.core.derive.call(null,cljs.core.PersistentArrayMap,common.math.IPersistentMap);

cljs.core.derive.call(null,cljs.core.PersistentHashMap,common.math.IPersistentMap);

cljs.core.derive.call(null,cljs.core.PersistentTreeMap,common.math.IPersistentMap);

common.math.MapEntry = cljs.core.MapEntry;

cljs.core.derive.call(null,common.math.MapEntry,new cljs.core.Keyword("common.math","any","common.math/any",-383867966));
common.math.any = new cljs.core.Keyword("common.math","any","common.math/any",-383867966);
common.math.nulary = new cljs.core.Keyword("common.math","nulary","common.math/nulary",-1194327509);
common.math.nary = new cljs.core.Keyword("common.math","nary","common.math/nary",-723352693);
common.math.unary = (function common$math$unary(x){
return cljs.core.type.call(null,x);
});
common.math.binary = (function common$math$binary(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,x),cljs.core.type.call(null,y)], null);
});
common.math.multiary = (function common$math$multiary(var_args){
var args13641 = [];
var len__9331__auto___13649 = arguments.length;
var i__9332__auto___13650 = (0);
while(true){
if((i__9332__auto___13650 < len__9331__auto___13649)){
args13641.push((arguments[i__9332__auto___13650]));

var G__13651 = (i__9332__auto___13650 + (1));
i__9332__auto___13650 = G__13651;
continue;
} else {
}
break;
}

var G__13648 = args13641.length;
switch (G__13648) {
case 0:
return common.math.multiary.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return common.math.multiary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.multiary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args13641.slice((2)),(0),null));
return common.math.multiary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);

}
});

common.math.multiary.cljs$core$IFn$_invoke$arity$0 = (function (){
return common.math.nulary;
});

common.math.multiary.cljs$core$IFn$_invoke$arity$1 = (function (x){
return common.math.unary.call(null,x);
});

common.math.multiary.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return common.math.binary.call(null,x,y);
});

common.math.multiary.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return common.math.nary;
});

common.math.multiary.cljs$lang$applyTo = (function (seq13642){
var G__13643 = cljs.core.first.call(null,seq13642);
var seq13642__$1 = cljs.core.next.call(null,seq13642);
var G__13644 = cljs.core.first.call(null,seq13642__$1);
var seq13642__$2 = cljs.core.next.call(null,seq13642__$1);
return common.math.multiary.cljs$core$IFn$_invoke$arity$variadic(G__13643,G__13644,seq13642__$2);
});

common.math.multiary.cljs$lang$maxFixedArity = (2);


/**
* @constructor
*/
common.math.Zero = (function (){
})

common.math.Zero.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

common.math.Zero.cljs$lang$type = true;

common.math.Zero.cljs$lang$ctorStr = "common.math/Zero";

common.math.Zero.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"common.math/Zero");
});

common.math.__GT_Zero = (function common$math$__GT_Zero(){
return (new common.math.Zero());
});


/**
* @constructor
*/
common.math.One = (function (){
})

common.math.One.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

common.math.One.cljs$lang$type = true;

common.math.One.cljs$lang$ctorStr = "common.math/One";

common.math.One.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"common.math/One");
});

common.math.__GT_One = (function common$math$__GT_One(){
return (new common.math.One());
});

cljs.core.derive.call(null,common.math.Object,common.math.any);
cljs.core.derive.call(null,common.math.Zero,common.math.any);
cljs.core.derive.call(null,common.math.One,common.math.any);
common.math.zero = common.math.__GT_Zero.call(null);
common.math.one = common.math.__GT_One.call(null);
common.math._PLUS_inf = Infinity;
common.math._inf = (- common.math._PLUS_inf);
if(typeof common.math._PLUS_ !== 'undefined'){
} else {
common.math._PLUS_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","+"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math._STAR_ !== 'undefined'){
} else {
common.math._STAR_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","*"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math._ !== 'undefined'){
} else {
common.math._ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","-"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math._SLASH_ !== 'undefined'){
} else {
common.math._SLASH_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","/"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.abs !== 'undefined'){
} else {
common.math.abs = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","abs"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.acos !== 'undefined'){
} else {
common.math.acos = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","acos"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.asin !== 'undefined'){
} else {
common.math.asin = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","asin"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.atan !== 'undefined'){
} else {
common.math.atan = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","atan"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.ceil !== 'undefined'){
} else {
common.math.ceil = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","ceil"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.cos !== 'undefined'){
} else {
common.math.cos = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","cos"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.exp !== 'undefined'){
} else {
common.math.exp = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","exp"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.floor !== 'undefined'){
} else {
common.math.floor = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","floor"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.log !== 'undefined'){
} else {
common.math.log = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","log"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.rint !== 'undefined'){
} else {
common.math.rint = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","rint"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.round !== 'undefined'){
} else {
common.math.round = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","round"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.sin !== 'undefined'){
} else {
common.math.sin = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","sin"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.sqrt !== 'undefined'){
} else {
common.math.sqrt = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","sqrt"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.tan !== 'undefined'){
} else {
common.math.tan = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","tan"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.mod !== 'undefined'){
} else {
common.math.mod = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","mod"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.quot !== 'undefined'){
} else {
common.math.quot = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","quot"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.atan2 !== 'undefined'){
} else {
common.math.atan2 = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","atan2"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math.pow !== 'undefined'){
} else {
common.math.pow = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","pow"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
cljs.core._add_method.call(null,common.math._PLUS_,common.math.nulary,(function (){
return common.math.zero;
}));
cljs.core._add_method.call(null,common.math._PLUS_,common.math.any,(function (x){
return x;
}));
cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.Zero], null),(function (x,y){
return x;
}));
cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Zero,common.math.any], null),(function (x,y){
return y;
}));
cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Boolean,common.math.Boolean], null),(function (x,y){
var or__8110__auto__ = x;
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return y;
}
}));
cljs.core._add_method.call(null,common.math._PLUS_,common.math.nary,(function() { 
var G__13712__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13713 = common.math._PLUS_.call(null,x,y);
var G__13714 = cljs.core.first.call(null,more);
var G__13715 = cljs.core.next.call(null,more);
x = G__13713;
y = G__13714;
more = G__13715;
continue;
} else {
return common.math._PLUS_.call(null,x,y);
}
break;
}
};
var G__13712 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13718__i = 0, G__13718__a = new Array(arguments.length -  2);
while (G__13718__i < G__13718__a.length) {G__13718__a[G__13718__i] = arguments[G__13718__i + 2]; ++G__13718__i;}
  more = new cljs.core.IndexedSeq(G__13718__a,0,null);
} 
return G__13712__delegate.call(this,x,y,more);};
G__13712.cljs$lang$maxFixedArity = 2;
G__13712.cljs$lang$applyTo = (function (arglist__13720){
var x = cljs.core.first(arglist__13720);
arglist__13720 = cljs.core.next(arglist__13720);
var y = cljs.core.first(arglist__13720);
var more = cljs.core.rest(arglist__13720);
return G__13712__delegate(x,y,more);
});
G__13712.cljs$core$IFn$_invoke$arity$variadic = G__13712__delegate;
return G__13712;
})()
);
cljs.core._add_method.call(null,common.math._,common.math.nulary,(function (){
return common.math.zero;
}));
cljs.core._add_method.call(null,common.math._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.Zero], null),(function (x,y){
return x;
}));
cljs.core._add_method.call(null,common.math._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Zero,common.math.any], null),(function (x,y){
return common.math._.call(null,y);
}));
cljs.core._add_method.call(null,common.math._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Boolean,common.math.Boolean], null),(function (x,y){
return cljs.core.not.call(null,(function (){var or__8110__auto__ = x;
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return y;
}
})());
}));
cljs.core._add_method.call(null,common.math._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._PLUS_.call(null,x,common.math._.call(null,y));
}));
cljs.core._add_method.call(null,common.math._,common.math.nary,(function() { 
var G__13739__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13740 = common.math._.call(null,x,y);
var G__13741 = cljs.core.first.call(null,more);
var G__13742 = cljs.core.next.call(null,more);
x = G__13740;
y = G__13741;
more = G__13742;
continue;
} else {
return common.math._.call(null,x,y);
}
break;
}
};
var G__13739 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13743__i = 0, G__13743__a = new Array(arguments.length -  2);
while (G__13743__i < G__13743__a.length) {G__13743__a[G__13743__i] = arguments[G__13743__i + 2]; ++G__13743__i;}
  more = new cljs.core.IndexedSeq(G__13743__a,0,null);
} 
return G__13739__delegate.call(this,x,y,more);};
G__13739.cljs$lang$maxFixedArity = 2;
G__13739.cljs$lang$applyTo = (function (arglist__13744){
var x = cljs.core.first(arglist__13744);
arglist__13744 = cljs.core.next(arglist__13744);
var y = cljs.core.first(arglist__13744);
var more = cljs.core.rest(arglist__13744);
return G__13739__delegate(x,y,more);
});
G__13739.cljs$core$IFn$_invoke$arity$variadic = G__13739__delegate;
return G__13739;
})()
);
cljs.core._add_method.call(null,common.math._STAR_,common.math.nulary,(function (){
return common.math.one;
}));
cljs.core._add_method.call(null,common.math._STAR_,common.math.any,(function (x){
return x;
}));
cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.One], null),(function (x,y){
return x;
}));
cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.One,common.math.any], null),(function (x,y){
return y;
}));
cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Boolean,common.math.Boolean], null),(function (x,y){
var and__8098__auto__ = x;
if(cljs.core.truth_(and__8098__auto__)){
return y;
} else {
return and__8098__auto__;
}
}));
cljs.core._add_method.call(null,common.math._STAR_,common.math.nary,(function() { 
var G__13751__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13754 = common.math._STAR_.call(null,x,y);
var G__13755 = cljs.core.first.call(null,more);
var G__13756 = cljs.core.next.call(null,more);
x = G__13754;
y = G__13755;
more = G__13756;
continue;
} else {
return common.math._STAR_.call(null,x,y);
}
break;
}
};
var G__13751 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13757__i = 0, G__13757__a = new Array(arguments.length -  2);
while (G__13757__i < G__13757__a.length) {G__13757__a[G__13757__i] = arguments[G__13757__i + 2]; ++G__13757__i;}
  more = new cljs.core.IndexedSeq(G__13757__a,0,null);
} 
return G__13751__delegate.call(this,x,y,more);};
G__13751.cljs$lang$maxFixedArity = 2;
G__13751.cljs$lang$applyTo = (function (arglist__13758){
var x = cljs.core.first(arglist__13758);
arglist__13758 = cljs.core.next(arglist__13758);
var y = cljs.core.first(arglist__13758);
var more = cljs.core.rest(arglist__13758);
return G__13751__delegate(x,y,more);
});
G__13751.cljs$core$IFn$_invoke$arity$variadic = G__13751__delegate;
return G__13751;
})()
);
cljs.core._add_method.call(null,common.math._SLASH_,common.math.nulary,(function (){
return common.math.one;
}));
cljs.core._add_method.call(null,common.math._SLASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.One], null),(function (x,y){
return x;
}));
cljs.core._add_method.call(null,common.math._SLASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.One,common.math.any], null),(function (x,y){
return common.math._SLASH_.call(null,y);
}));
cljs.core._add_method.call(null,common.math._SLASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Boolean,common.math.Boolean], null),(function (x,y){
return cljs.core.not.call(null,(function (){var and__8098__auto__ = x;
if(cljs.core.truth_(and__8098__auto__)){
return y;
} else {
return and__8098__auto__;
}
})());
}));
cljs.core._add_method.call(null,common.math._SLASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._STAR_.call(null,x,common.math._SLASH_.call(null,y));
}));
cljs.core._add_method.call(null,common.math._SLASH_,common.math.nary,(function() { 
var G__13769__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13770 = common.math._SLASH_.call(null,x,y);
var G__13771 = cljs.core.first.call(null,more);
var G__13772 = cljs.core.next.call(null,more);
x = G__13770;
y = G__13771;
more = G__13772;
continue;
} else {
return common.math._SLASH_.call(null,x,y);
}
break;
}
};
var G__13769 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13773__i = 0, G__13773__a = new Array(arguments.length -  2);
while (G__13773__i < G__13773__a.length) {G__13773__a[G__13773__i] = arguments[G__13773__i + 2]; ++G__13773__i;}
  more = new cljs.core.IndexedSeq(G__13773__a,0,null);
} 
return G__13769__delegate.call(this,x,y,more);};
G__13769.cljs$lang$maxFixedArity = 2;
G__13769.cljs$lang$applyTo = (function (arglist__13774){
var x = cljs.core.first(arglist__13774);
arglist__13774 = cljs.core.next(arglist__13774);
var y = cljs.core.first(arglist__13774);
var more = cljs.core.rest(arglist__13774);
return G__13769__delegate(x,y,more);
});
G__13769.cljs$core$IFn$_invoke$arity$variadic = G__13769__delegate;
return G__13769;
})()
);
cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return (x + y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Number], null),(function (x,y){
return cljs.core.map.call(null,common.math._PLUS_,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math._PLUS_,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null),(function (x,y){
return cljs.core.map.call(null,common.math._PLUS_,x,y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math._PLUS_,x,y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._PLUS_,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._PLUS_,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._PLUS_,x,y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._PLUS_,x,y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.Number], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12742__12746__auto__,p2__12743__12747__auto__){
return cljs.core.update.call(null,p1__12742__12746__auto__,p2__12743__12747__auto__,common.math._PLUS_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12744__12748__auto__,p2__12745__12749__auto__){
return cljs.core.assoc.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__,common.math._PLUS_.call(null,x,cljs.core.get.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__)));
}),y,cljs.core.keys.call(null,y));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.merge_with.call(null,common.math._PLUS_,x,y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.MapEntry], null),(function (x,y){
return common.math._PLUS_.call(null,cljs.core.val.call(null,x),cljs.core.val.call(null,y));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),(function (x,y){
return common.math._PLUS_.call(null,cljs.core.val.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),(function (x,y){
return common.math._PLUS_.call(null,x,cljs.core.val.call(null,y));
}));

cljs.core.prefer_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null));

cljs.core.prefer_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null));

cljs.core.prefer_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null));
cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return (x * y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Number], null),(function (x,y){
return cljs.core.map.call(null,common.math._STAR_,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math._STAR_,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null),(function (x,y){
return cljs.core.map.call(null,common.math._STAR_,x,y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math._STAR_,x,y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._STAR_,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._STAR_,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._STAR_,x,y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math._STAR_,x,y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.Number], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12742__12746__auto__,p2__12743__12747__auto__){
return cljs.core.update.call(null,p1__12742__12746__auto__,p2__12743__12747__auto__,common.math._STAR_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12744__12748__auto__,p2__12745__12749__auto__){
return cljs.core.assoc.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__,common.math._STAR_.call(null,x,cljs.core.get.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__)));
}),y,cljs.core.keys.call(null,y));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.merge_with.call(null,common.math._STAR_,x,y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.MapEntry], null),(function (x,y){
return common.math._STAR_.call(null,cljs.core.val.call(null,x),cljs.core.val.call(null,y));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),(function (x,y){
return common.math._STAR_.call(null,cljs.core.val.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),(function (x,y){
return common.math._STAR_.call(null,x,cljs.core.val.call(null,y));
}));

cljs.core.prefer_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null));

cljs.core.prefer_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null));

cljs.core.prefer_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null));
cljs.core._add_method.call(null,common.math._,common.math.Number,(function (x){
return (- x);
}));

cljs.core._add_method.call(null,common.math._,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math._,x);
}));

cljs.core._add_method.call(null,common.math._,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math._,x);
}));

cljs.core._add_method.call(null,common.math._,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math._);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._,common.math.MapEntry,(function (x){
return common.math._.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math._SLASH_,common.math.Number,(function (x){
return ((1) / x);
}));

cljs.core._add_method.call(null,common.math._SLASH_,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math._SLASH_,x);
}));

cljs.core._add_method.call(null,common.math._SLASH_,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math._SLASH_,x);
}));

cljs.core._add_method.call(null,common.math._SLASH_,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math._SLASH_);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._SLASH_,common.math.MapEntry,(function (x){
return common.math._SLASH_.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.abs,common.math.Number,(function (x){
return Math.abs(x);
}));

cljs.core._add_method.call(null,common.math.abs,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.abs,x);
}));

cljs.core._add_method.call(null,common.math.abs,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.abs,x);
}));

cljs.core._add_method.call(null,common.math.abs,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.abs);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.abs,common.math.MapEntry,(function (x){
return common.math.abs.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.acos,common.math.Number,(function (x){
return Math.acos(x);
}));

cljs.core._add_method.call(null,common.math.acos,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.acos,x);
}));

cljs.core._add_method.call(null,common.math.acos,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.acos,x);
}));

cljs.core._add_method.call(null,common.math.acos,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.acos);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.acos,common.math.MapEntry,(function (x){
return common.math.acos.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.asin,common.math.Number,(function (x){
return Math.asin(x);
}));

cljs.core._add_method.call(null,common.math.asin,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.asin,x);
}));

cljs.core._add_method.call(null,common.math.asin,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.asin,x);
}));

cljs.core._add_method.call(null,common.math.asin,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.asin);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.asin,common.math.MapEntry,(function (x){
return common.math.asin.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.atan,common.math.Number,(function (x){
return Math.atan(x);
}));

cljs.core._add_method.call(null,common.math.atan,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.atan,x);
}));

cljs.core._add_method.call(null,common.math.atan,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.atan,x);
}));

cljs.core._add_method.call(null,common.math.atan,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.atan);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.atan,common.math.MapEntry,(function (x){
return common.math.atan.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.ceil,common.math.Number,(function (x){
return Math.ceil(x);
}));

cljs.core._add_method.call(null,common.math.ceil,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.ceil,x);
}));

cljs.core._add_method.call(null,common.math.ceil,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.ceil,x);
}));

cljs.core._add_method.call(null,common.math.ceil,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.ceil);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.ceil,common.math.MapEntry,(function (x){
return common.math.ceil.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.cos,common.math.Number,(function (x){
return Math.cos(x);
}));

cljs.core._add_method.call(null,common.math.cos,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.cos,x);
}));

cljs.core._add_method.call(null,common.math.cos,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.cos,x);
}));

cljs.core._add_method.call(null,common.math.cos,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.cos);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.cos,common.math.MapEntry,(function (x){
return common.math.cos.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.exp,common.math.Number,(function (x){
return Math.exp(x);
}));

cljs.core._add_method.call(null,common.math.exp,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.exp,x);
}));

cljs.core._add_method.call(null,common.math.exp,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.exp,x);
}));

cljs.core._add_method.call(null,common.math.exp,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.exp);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.exp,common.math.MapEntry,(function (x){
return common.math.exp.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.floor,common.math.Number,(function (x){
return Math.floor(x);
}));

cljs.core._add_method.call(null,common.math.floor,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.floor,x);
}));

cljs.core._add_method.call(null,common.math.floor,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.floor,x);
}));

cljs.core._add_method.call(null,common.math.floor,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.floor);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.floor,common.math.MapEntry,(function (x){
return common.math.floor.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.log,common.math.Number,(function (x){
return Math.log(x);
}));

cljs.core._add_method.call(null,common.math.log,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.log,x);
}));

cljs.core._add_method.call(null,common.math.log,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.log,x);
}));

cljs.core._add_method.call(null,common.math.log,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.log);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.log,common.math.MapEntry,(function (x){
return common.math.log.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.rint,common.math.Number,(function (x){
return Math.rint(x);
}));

cljs.core._add_method.call(null,common.math.rint,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.rint,x);
}));

cljs.core._add_method.call(null,common.math.rint,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.rint,x);
}));

cljs.core._add_method.call(null,common.math.rint,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.rint);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.rint,common.math.MapEntry,(function (x){
return common.math.rint.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.round,common.math.Number,(function (x){
return Math.round(x);
}));

cljs.core._add_method.call(null,common.math.round,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.round,x);
}));

cljs.core._add_method.call(null,common.math.round,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.round,x);
}));

cljs.core._add_method.call(null,common.math.round,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.round);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.round,common.math.MapEntry,(function (x){
return common.math.round.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.sin,common.math.Number,(function (x){
return Math.sin(x);
}));

cljs.core._add_method.call(null,common.math.sin,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.sin,x);
}));

cljs.core._add_method.call(null,common.math.sin,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.sin,x);
}));

cljs.core._add_method.call(null,common.math.sin,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.sin);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.sin,common.math.MapEntry,(function (x){
return common.math.sin.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.sqrt,common.math.Number,(function (x){
return Math.sqrt(x);
}));

cljs.core._add_method.call(null,common.math.sqrt,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.sqrt,x);
}));

cljs.core._add_method.call(null,common.math.sqrt,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.sqrt,x);
}));

cljs.core._add_method.call(null,common.math.sqrt,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.sqrt);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.sqrt,common.math.MapEntry,(function (x){
return common.math.sqrt.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.tan,common.math.Number,(function (x){
return Math.tan(x);
}));

cljs.core._add_method.call(null,common.math.tan,common.math.Sequential,(function (x){
return cljs.core.map.call(null,common.math.tan,x);
}));

cljs.core._add_method.call(null,common.math.tan,common.math.APersistentVector,(function (x){
return cljs.core.mapv.call(null,common.math.tan,x);
}));

cljs.core._add_method.call(null,common.math.tan,common.math.IPersistentMap,(function (x){
return cljs.core.reduce.call(null,(function (p1__12733__12735__auto__,p2__12734__12736__auto__){
return cljs.core.update.call(null,p1__12733__12735__auto__,p2__12734__12736__auto__,common.math.tan);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.tan,common.math.MapEntry,(function (x){
return common.math.tan.call(null,cljs.core.val.call(null,x));
}));
cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return cljs.core.mod.call(null,x,y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Number], null),(function (x,y){
return cljs.core.map.call(null,common.math.mod,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.mod,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null),(function (x,y){
return cljs.core.map.call(null,common.math.mod,x,y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.mod,x,y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.mod,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.mod,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.mod,x,y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.mod,x,y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.Number], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12742__12746__auto__,p2__12743__12747__auto__){
return cljs.core.update.call(null,p1__12742__12746__auto__,p2__12743__12747__auto__,common.math.mod,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12744__12748__auto__,p2__12745__12749__auto__){
return cljs.core.assoc.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__,common.math.mod.call(null,x,cljs.core.get.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__)));
}),y,cljs.core.keys.call(null,y));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.merge_with.call(null,common.math.mod,x,y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.MapEntry], null),(function (x,y){
return common.math.mod.call(null,cljs.core.val.call(null,x),cljs.core.val.call(null,y));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),(function (x,y){
return common.math.mod.call(null,cljs.core.val.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),(function (x,y){
return common.math.mod.call(null,x,cljs.core.val.call(null,y));
}));

cljs.core.prefer_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null));

cljs.core.prefer_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null));

cljs.core.prefer_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null));
cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return cljs.core.quot.call(null,x,y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Number], null),(function (x,y){
return cljs.core.map.call(null,common.math.quot,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.quot,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null),(function (x,y){
return cljs.core.map.call(null,common.math.quot,x,y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.quot,x,y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.quot,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.quot,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.quot,x,y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.quot,x,y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.Number], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12742__12746__auto__,p2__12743__12747__auto__){
return cljs.core.update.call(null,p1__12742__12746__auto__,p2__12743__12747__auto__,common.math.quot,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12744__12748__auto__,p2__12745__12749__auto__){
return cljs.core.assoc.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__,common.math.quot.call(null,x,cljs.core.get.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__)));
}),y,cljs.core.keys.call(null,y));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.merge_with.call(null,common.math.quot,x,y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.MapEntry], null),(function (x,y){
return common.math.quot.call(null,cljs.core.val.call(null,x),cljs.core.val.call(null,y));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),(function (x,y){
return common.math.quot.call(null,cljs.core.val.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),(function (x,y){
return common.math.quot.call(null,x,cljs.core.val.call(null,y));
}));

cljs.core.prefer_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null));

cljs.core.prefer_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null));

cljs.core.prefer_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null));
cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return Math.atan2(x,y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Number], null),(function (x,y){
return cljs.core.map.call(null,common.math.atan2,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.atan2,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null),(function (x,y){
return cljs.core.map.call(null,common.math.atan2,x,y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.atan2,x,y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.atan2,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.atan2,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.atan2,x,y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.atan2,x,y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.Number], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12742__12746__auto__,p2__12743__12747__auto__){
return cljs.core.update.call(null,p1__12742__12746__auto__,p2__12743__12747__auto__,common.math.atan2,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12744__12748__auto__,p2__12745__12749__auto__){
return cljs.core.assoc.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__,common.math.atan2.call(null,x,cljs.core.get.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__)));
}),y,cljs.core.keys.call(null,y));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.merge_with.call(null,common.math.atan2,x,y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.MapEntry], null),(function (x,y){
return common.math.atan2.call(null,cljs.core.val.call(null,x),cljs.core.val.call(null,y));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),(function (x,y){
return common.math.atan2.call(null,cljs.core.val.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),(function (x,y){
return common.math.atan2.call(null,x,cljs.core.val.call(null,y));
}));

cljs.core.prefer_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null));

cljs.core.prefer_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null));

cljs.core.prefer_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null));
cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return Math.pow(x,y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Number], null),(function (x,y){
return cljs.core.map.call(null,common.math.pow,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.pow,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null),(function (x,y){
return cljs.core.map.call(null,common.math.pow,x,y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.Sequential], null),(function (x,y){
return cljs.core.map.call(null,common.math.pow,x,y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.pow,x,cljs.core.repeat.call(null,y));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.pow,cljs.core.repeat.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.pow,x,y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.APersistentVector], null),(function (x,y){
return cljs.core.mapv.call(null,common.math.pow,x,y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.Number], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12742__12746__auto__,p2__12743__12747__auto__){
return cljs.core.update.call(null,p1__12742__12746__auto__,p2__12743__12747__auto__,common.math.pow,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12744__12748__auto__,p2__12745__12749__auto__){
return cljs.core.assoc.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__,common.math.pow.call(null,x,cljs.core.get.call(null,p1__12744__12748__auto__,p2__12745__12749__auto__)));
}),y,cljs.core.keys.call(null,y));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.IPersistentMap,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.merge_with.call(null,common.math.pow,x,y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.MapEntry], null),(function (x,y){
return common.math.pow.call(null,cljs.core.val.call(null,x),cljs.core.val.call(null,y));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),(function (x,y){
return common.math.pow.call(null,cljs.core.val.call(null,x),y);
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),(function (x,y){
return common.math.pow.call(null,x,cljs.core.val.call(null,y));
}));

cljs.core.prefer_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Sequential], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Sequential,common.math.APersistentVector], null));

cljs.core.prefer_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.MapEntry,common.math.any], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.APersistentVector,common.math.Number], null));

cljs.core.prefer_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.MapEntry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.APersistentVector], null));
common.math.norm = (function common$math$norm(x){
return common.math.sqrt.call(null,cljs.core.apply.call(null,common.math._PLUS_,common.math.pow.call(null,x,(2))));
});
if(typeof common.math._GT_ !== 'undefined'){
} else {
common.math._GT_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math",">"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math._LT_ !== 'undefined'){
} else {
common.math._LT_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","<"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math._GT__EQ_ !== 'undefined'){
} else {
common.math._GT__EQ_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math",">="),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof common.math._LT__EQ_ !== 'undefined'){
} else {
common.math._LT__EQ_ = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","<="),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
cljs.core._add_method.call(null,common.math._GT_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._GT_,common.math.nary,(function() { 
var G__14046__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14047 = y;
var G__14048 = cljs.core.first.call(null,more);
var G__14049 = cljs.core.next.call(null,more);
x = G__14047;
y = G__14048;
more = G__14049;
continue;
} else {
return common.math._GT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__14046 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14050__i = 0, G__14050__a = new Array(arguments.length -  2);
while (G__14050__i < G__14050__a.length) {G__14050__a[G__14050__i] = arguments[G__14050__i + 2]; ++G__14050__i;}
  more = new cljs.core.IndexedSeq(G__14050__a,0,null);
} 
return G__14046__delegate.call(this,x,y,more);};
G__14046.cljs$lang$maxFixedArity = 2;
G__14046.cljs$lang$applyTo = (function (arglist__14051){
var x = cljs.core.first(arglist__14051);
arglist__14051 = cljs.core.next(arglist__14051);
var y = cljs.core.first(arglist__14051);
var more = cljs.core.rest(arglist__14051);
return G__14046__delegate(x,y,more);
});
G__14046.cljs$core$IFn$_invoke$arity$variadic = G__14046__delegate;
return G__14046;
})()
);
cljs.core._add_method.call(null,common.math._LT_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._GT_.call(null,y,x);
}));
cljs.core._add_method.call(null,common.math._LT_,common.math.nary,(function() { 
var G__14054__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14056 = y;
var G__14057 = cljs.core.first.call(null,more);
var G__14058 = cljs.core.next.call(null,more);
x = G__14056;
y = G__14057;
more = G__14058;
continue;
} else {
return common.math._LT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__14054 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14060__i = 0, G__14060__a = new Array(arguments.length -  2);
while (G__14060__i < G__14060__a.length) {G__14060__a[G__14060__i] = arguments[G__14060__i + 2]; ++G__14060__i;}
  more = new cljs.core.IndexedSeq(G__14060__a,0,null);
} 
return G__14054__delegate.call(this,x,y,more);};
G__14054.cljs$lang$maxFixedArity = 2;
G__14054.cljs$lang$applyTo = (function (arglist__14061){
var x = cljs.core.first(arglist__14061);
arglist__14061 = cljs.core.next(arglist__14061);
var y = cljs.core.first(arglist__14061);
var more = cljs.core.rest(arglist__14061);
return G__14054__delegate(x,y,more);
});
G__14054.cljs$core$IFn$_invoke$arity$variadic = G__14054__delegate;
return G__14054;
})()
);
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._LT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.nary,(function() { 
var G__14062__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14065 = y;
var G__14066 = cljs.core.first.call(null,more);
var G__14067 = cljs.core.next.call(null,more);
x = G__14065;
y = G__14066;
more = G__14067;
continue;
} else {
return common.math._GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__14062 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14068__i = 0, G__14068__a = new Array(arguments.length -  2);
while (G__14068__i < G__14068__a.length) {G__14068__a[G__14068__i] = arguments[G__14068__i + 2]; ++G__14068__i;}
  more = new cljs.core.IndexedSeq(G__14068__a,0,null);
} 
return G__14062__delegate.call(this,x,y,more);};
G__14062.cljs$lang$maxFixedArity = 2;
G__14062.cljs$lang$applyTo = (function (arglist__14069){
var x = cljs.core.first(arglist__14069);
arglist__14069 = cljs.core.next(arglist__14069);
var y = cljs.core.first(arglist__14069);
var more = cljs.core.rest(arglist__14069);
return G__14062__delegate(x,y,more);
});
G__14062.cljs$core$IFn$_invoke$arity$variadic = G__14062__delegate;
return G__14062;
})()
);
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._GT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.nary,(function() { 
var G__14072__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14073 = y;
var G__14074 = cljs.core.first.call(null,more);
var G__14075 = cljs.core.next.call(null,more);
x = G__14073;
y = G__14074;
more = G__14075;
continue;
} else {
return common.math._LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__14072 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14076__i = 0, G__14076__a = new Array(arguments.length -  2);
while (G__14076__i < G__14076__a.length) {G__14076__a[G__14076__i] = arguments[G__14076__i + 2]; ++G__14076__i;}
  more = new cljs.core.IndexedSeq(G__14076__a,0,null);
} 
return G__14072__delegate.call(this,x,y,more);};
G__14072.cljs$lang$maxFixedArity = 2;
G__14072.cljs$lang$applyTo = (function (arglist__14077){
var x = cljs.core.first(arglist__14077);
arglist__14077 = cljs.core.next(arglist__14077);
var y = cljs.core.first(arglist__14077);
var more = cljs.core.rest(arglist__14077);
return G__14072__delegate(x,y,more);
});
G__14072.cljs$core$IFn$_invoke$arity$variadic = G__14072__delegate;
return G__14072;
})()
);
cljs.core._add_method.call(null,common.math._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null),(function (x,y){
return (x > y);
}));
cljs.core._add_method.call(null,common.math._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.Number], null),(function (x,y){
return common.math._GT_.call(null,common.math.norm.call(null,x),y);
}));
cljs.core._add_method.call(null,common.math._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.any], null),(function (x,y){
return common.math._GT_.call(null,x,common.math.norm.call(null,y));
}));
cljs.core._add_method.call(null,common.math._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._GT_.call(null,common.math.norm.call(null,x),common.math.norm.call(null,y));
}));
common.math.max = (function common$math$max(var_args){
var args14102 = [];
var len__9331__auto___14119 = arguments.length;
var i__9332__auto___14120 = (0);
while(true){
if((i__9332__auto___14120 < len__9331__auto___14119)){
args14102.push((arguments[i__9332__auto___14120]));

var G__14121 = (i__9332__auto___14120 + (1));
i__9332__auto___14120 = G__14121;
continue;
} else {
}
break;
}

var G__14113 = args14102.length;
switch (G__14113) {
case 1:
return common.math.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14102.slice((2)),(0),null));
return common.math.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);

}
});

common.math.max.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

common.math.max.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(common.math._GT_.call(null,x,y))){
return x;
} else {
return y;
}
});

common.math.max.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,common.math.max,common.math.max.call(null,x,y),more);
});

common.math.max.cljs$lang$applyTo = (function (seq14103){
var G__14104 = cljs.core.first.call(null,seq14103);
var seq14103__$1 = cljs.core.next.call(null,seq14103);
var G__14105 = cljs.core.first.call(null,seq14103__$1);
var seq14103__$2 = cljs.core.next.call(null,seq14103__$1);
return common.math.max.cljs$core$IFn$_invoke$arity$variadic(G__14104,G__14105,seq14103__$2);
});

common.math.max.cljs$lang$maxFixedArity = (2);

common.math.min = (function common$math$min(var_args){
var args14125 = [];
var len__9331__auto___14135 = arguments.length;
var i__9332__auto___14136 = (0);
while(true){
if((i__9332__auto___14136 < len__9331__auto___14135)){
args14125.push((arguments[i__9332__auto___14136]));

var G__14137 = (i__9332__auto___14136 + (1));
i__9332__auto___14136 = G__14137;
continue;
} else {
}
break;
}

var G__14132 = args14125.length;
switch (G__14132) {
case 1:
return common.math.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14125.slice((2)),(0),null));
return common.math.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);

}
});

common.math.min.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

common.math.min.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(common.math._LT_.call(null,x,y))){
return x;
} else {
return y;
}
});

common.math.min.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,common.math.min,common.math.min.call(null,x,y),more);
});

common.math.min.cljs$lang$applyTo = (function (seq14126){
var G__14127 = cljs.core.first.call(null,seq14126);
var seq14126__$1 = cljs.core.next.call(null,seq14126);
var G__14128 = cljs.core.first.call(null,seq14126__$1);
var seq14126__$2 = cljs.core.next.call(null,seq14126__$1);
return common.math.min.cljs$core$IFn$_invoke$arity$variadic(G__14127,G__14128,seq14126__$2);
});

common.math.min.cljs$lang$maxFixedArity = (2);

common.math.eps_EQ_ = (function common$math$eps_EQ_(x,y,eps){
return common.math._LT_.call(null,common.math.abs.call(null,common.math._.call(null,x,y)),eps);
});
common.math.signum = (function common$math$signum(x){
if(cljs.core.truth_(common.math._GT_.call(null,x,(0)))){
return (1);
} else {
if(cljs.core.truth_(common.math._LT_.call(null,x,(0)))){
return (-1);
} else {
return (0);

}
}
});
common.math.pi = Math.PI;
common.math.tau = common.math._STAR_.call(null,common.math.pi,(2));
common.math.pi_BAR_2 = common.math._SLASH_.call(null,common.math.pi,(2));
common.math.pi_BAR_4 = common.math._SLASH_.call(null,common.math.pi,(4));
common.math.pi_BAR_6 = common.math._SLASH_.call(null,common.math.pi,(6));
common.math.dist = (function common$math$dist(x,y){
if(!(cljs.core.isa_QMARK_.call(null,common.math.binary.call(null,x,y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.Number], null)))){
return common.math.sqrt.call(null,cljs.core.apply.call(null,common.math._PLUS_,common.math.pow.call(null,common.math._.call(null,x,y),(2))));
} else {
return common.math.abs.call(null,common.math._.call(null,x,y));
}
});
common.math._BAR__BAR_ = (function common$math$_BAR__BAR_(var_args){
var args14154 = [];
var len__9331__auto___14179 = arguments.length;
var i__9332__auto___14180 = (0);
while(true){
if((i__9332__auto___14180 < len__9331__auto___14179)){
args14154.push((arguments[i__9332__auto___14180]));

var G__14184 = (i__9332__auto___14180 + (1));
i__9332__auto___14180 = G__14184;
continue;
} else {
}
break;
}

var G__14164 = args14154.length;
switch (G__14164) {
case 1:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14154.slice((2)),(0),null));
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);

}
});

common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return common.math._SLASH_.call(null,common.math._STAR_.call(null,x,y),common.math._PLUS_.call(null,x,y));
});

common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,common.math._BAR__BAR_,common.math._BAR__BAR_.call(null,x,y),more);
});

common.math._BAR__BAR_.cljs$lang$applyTo = (function (seq14155){
var G__14156 = cljs.core.first.call(null,seq14155);
var seq14155__$1 = cljs.core.next.call(null,seq14155);
var G__14157 = cljs.core.first.call(null,seq14155__$1);
var seq14155__$2 = cljs.core.next.call(null,seq14155__$1);
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(G__14156,G__14157,seq14155__$2);
});

common.math._BAR__BAR_.cljs$lang$maxFixedArity = (2);

common.math.monotone = (function common$math$monotone(tone){
var pitch = cljs.core.volatile_BANG_.call(null,tone.call(null));
return cljs.core.filter.call(null,((function (pitch){
return (function (p1__14200_SHARP_){
var temp__5278__auto__ = tone.call(null,p1__14200_SHARP_,cljs.core.deref.call(null,pitch));
if(cljs.core.truth_(temp__5278__auto__)){
var tonic = temp__5278__auto__;
cljs.core.vreset_BANG_.call(null,pitch,tonic);

return true;
} else {
return null;
}
});})(pitch))
);
});
common.math.closest = (function common$math$closest(keyfn,to){
return common.math.monotone.call(null,(function() {
var G__14203 = null;
var G__14203__0 = (function (){
return common.math._PLUS_inf;
});
var G__14203__2 = (function (m,y){
var temp__5276__auto__ = keyfn.call(null,m);
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
var x = common.math.dist.call(null,v,to);
if(cljs.core.truth_(common.math._LT__EQ_.call(null,x,y))){
return x;
} else {
return null;
}
} else {
return null;
}
});
G__14203 = function(m,y){
switch(arguments.length){
case 0:
return G__14203__0.call(this);
case 2:
return G__14203__2.call(this,m,y);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14203.cljs$core$IFn$_invoke$arity$0 = G__14203__0;
G__14203.cljs$core$IFn$_invoke$arity$2 = G__14203__2;
return G__14203;
})()
);
});
common.math.fps = (30);
common.math.dt = common.math._SLASH_.call(null,common.math.fps);
common.math.rad_COLON_s__GT_rpm = common.math._SLASH_.call(null,(60),common.math.tau);
common.math.m_COLON_s__GT_km_COLON_h = 3.6;
common.math.rad__GT_deg = common.math._SLASH_.call(null,(180),common.math.pi);
common.math.constrain = (function common$math$constrain(var_args){
var args14204 = [];
var len__9331__auto___14209 = arguments.length;
var i__9332__auto___14210 = (0);
while(true){
if((i__9332__auto___14210 < len__9331__auto___14209)){
args14204.push((arguments[i__9332__auto___14210]));

var G__14213 = (i__9332__auto___14210 + (1));
i__9332__auto___14210 = G__14213;
continue;
} else {
}
break;
}

var G__14208 = args14204.length;
switch (G__14208) {
case 2:
return common.math.constrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.constrain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14204.length)].join('')));

}
});

common.math.constrain.cljs$core$IFn$_invoke$arity$2 = (function (v,abs){
return common.math.min.call(null,common.math.max.call(null,v,common.math._.call(null,abs)),abs);
});

common.math.constrain.cljs$core$IFn$_invoke$arity$3 = (function (v,inf,sup){
return common.math.min.call(null,common.math.max.call(null,v,inf),sup);
});

common.math.constrain.cljs$lang$maxFixedArity = 3;

common.math.map = (function common$math$map(v,o,O,p,P){
return common.math._PLUS_.call(null,p,common.math._STAR_.call(null,common.math._.call(null,v,o),common.math._.call(null,p,P),common.math._SLASH_.call(null,common.math._.call(null,o,O))));
});
common.math.cycle = (function common$math$cycle(var_args){
var args14215 = [];
var len__9331__auto___14220 = arguments.length;
var i__9332__auto___14221 = (0);
while(true){
if((i__9332__auto___14221 < len__9331__auto___14220)){
args14215.push((arguments[i__9332__auto___14221]));

var G__14222 = (i__9332__auto___14221 + (1));
i__9332__auto___14221 = G__14222;
continue;
} else {
}
break;
}

var G__14217 = args14215.length;
switch (G__14217) {
case 2:
return common.math.cycle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.cycle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14215.length)].join('')));

}
});

common.math.cycle.cljs$core$IFn$_invoke$arity$2 = (function (v,abs){
return common.math.map.call(null,common.math.mod.call(null,common.math.map.call(null,v,common.math._.call(null,abs),abs,(0),(1)),(1)),(0),(1),common.math._.call(null,abs),abs);
});

common.math.cycle.cljs$core$IFn$_invoke$arity$3 = (function (v,inf,sup){
return common.math.map.call(null,common.math.mod.call(null,common.math.map.call(null,v,inf,sup,(0),(1)),(1)),(0),(1),inf,sup);
});

common.math.cycle.cljs$lang$maxFixedArity = 3;

common.math.bound = (function common$math$bound(expr,inf,sup,mode){
var G__14227 = mode;
var G__14227__$1 = (((G__14227 instanceof cljs.core.Keyword))?G__14227.fqn:null);
switch (G__14227__$1) {
case "cycle":
return common.math.cycle.call(null,expr,inf,sup);

break;
case "constrain":
return common.math.constrain.call(null,expr,inf,sup);

break;
default:
return expr;

}
});

//# sourceMappingURL=math.js.map