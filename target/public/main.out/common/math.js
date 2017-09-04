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
var args13645 = [];
var len__9331__auto___13656 = arguments.length;
var i__9332__auto___13657 = (0);
while(true){
if((i__9332__auto___13657 < len__9331__auto___13656)){
args13645.push((arguments[i__9332__auto___13657]));

var G__13658 = (i__9332__auto___13657 + (1));
i__9332__auto___13657 = G__13658;
continue;
} else {
}
break;
}

var G__13652 = args13645.length;
switch (G__13652) {
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
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args13645.slice((2)),(0),null));
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

common.math.multiary.cljs$lang$applyTo = (function (seq13646){
var G__13647 = cljs.core.first.call(null,seq13646);
var seq13646__$1 = cljs.core.next.call(null,seq13646);
var G__13648 = cljs.core.first.call(null,seq13646__$1);
var seq13646__$2 = cljs.core.next.call(null,seq13646__$1);
return common.math.multiary.cljs$core$IFn$_invoke$arity$variadic(G__13647,G__13648,seq13646__$2);
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
var G__13815__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13818 = common.math._PLUS_.call(null,x,y);
var G__13819 = cljs.core.first.call(null,more);
var G__13820 = cljs.core.next.call(null,more);
x = G__13818;
y = G__13819;
more = G__13820;
continue;
} else {
return common.math._PLUS_.call(null,x,y);
}
break;
}
};
var G__13815 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13821__i = 0, G__13821__a = new Array(arguments.length -  2);
while (G__13821__i < G__13821__a.length) {G__13821__a[G__13821__i] = arguments[G__13821__i + 2]; ++G__13821__i;}
  more = new cljs.core.IndexedSeq(G__13821__a,0,null);
} 
return G__13815__delegate.call(this,x,y,more);};
G__13815.cljs$lang$maxFixedArity = 2;
G__13815.cljs$lang$applyTo = (function (arglist__13822){
var x = cljs.core.first(arglist__13822);
arglist__13822 = cljs.core.next(arglist__13822);
var y = cljs.core.first(arglist__13822);
var more = cljs.core.rest(arglist__13822);
return G__13815__delegate(x,y,more);
});
G__13815.cljs$core$IFn$_invoke$arity$variadic = G__13815__delegate;
return G__13815;
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
var G__13839__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13840 = common.math._.call(null,x,y);
var G__13841 = cljs.core.first.call(null,more);
var G__13842 = cljs.core.next.call(null,more);
x = G__13840;
y = G__13841;
more = G__13842;
continue;
} else {
return common.math._.call(null,x,y);
}
break;
}
};
var G__13839 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13843__i = 0, G__13843__a = new Array(arguments.length -  2);
while (G__13843__i < G__13843__a.length) {G__13843__a[G__13843__i] = arguments[G__13843__i + 2]; ++G__13843__i;}
  more = new cljs.core.IndexedSeq(G__13843__a,0,null);
} 
return G__13839__delegate.call(this,x,y,more);};
G__13839.cljs$lang$maxFixedArity = 2;
G__13839.cljs$lang$applyTo = (function (arglist__13844){
var x = cljs.core.first(arglist__13844);
arglist__13844 = cljs.core.next(arglist__13844);
var y = cljs.core.first(arglist__13844);
var more = cljs.core.rest(arglist__13844);
return G__13839__delegate(x,y,more);
});
G__13839.cljs$core$IFn$_invoke$arity$variadic = G__13839__delegate;
return G__13839;
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
var G__13859__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13860 = common.math._STAR_.call(null,x,y);
var G__13861 = cljs.core.first.call(null,more);
var G__13862 = cljs.core.next.call(null,more);
x = G__13860;
y = G__13861;
more = G__13862;
continue;
} else {
return common.math._STAR_.call(null,x,y);
}
break;
}
};
var G__13859 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13866__i = 0, G__13866__a = new Array(arguments.length -  2);
while (G__13866__i < G__13866__a.length) {G__13866__a[G__13866__i] = arguments[G__13866__i + 2]; ++G__13866__i;}
  more = new cljs.core.IndexedSeq(G__13866__a,0,null);
} 
return G__13859__delegate.call(this,x,y,more);};
G__13859.cljs$lang$maxFixedArity = 2;
G__13859.cljs$lang$applyTo = (function (arglist__13867){
var x = cljs.core.first(arglist__13867);
arglist__13867 = cljs.core.next(arglist__13867);
var y = cljs.core.first(arglist__13867);
var more = cljs.core.rest(arglist__13867);
return G__13859__delegate(x,y,more);
});
G__13859.cljs$core$IFn$_invoke$arity$variadic = G__13859__delegate;
return G__13859;
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
var G__13872__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13873 = common.math._SLASH_.call(null,x,y);
var G__13874 = cljs.core.first.call(null,more);
var G__13875 = cljs.core.next.call(null,more);
x = G__13873;
y = G__13874;
more = G__13875;
continue;
} else {
return common.math._SLASH_.call(null,x,y);
}
break;
}
};
var G__13872 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13876__i = 0, G__13876__a = new Array(arguments.length -  2);
while (G__13876__i < G__13876__a.length) {G__13876__a[G__13876__i] = arguments[G__13876__i + 2]; ++G__13876__i;}
  more = new cljs.core.IndexedSeq(G__13876__a,0,null);
} 
return G__13872__delegate.call(this,x,y,more);};
G__13872.cljs$lang$maxFixedArity = 2;
G__13872.cljs$lang$applyTo = (function (arglist__13877){
var x = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var y = cljs.core.first(arglist__13877);
var more = cljs.core.rest(arglist__13877);
return G__13872__delegate(x,y,more);
});
G__13872.cljs$core$IFn$_invoke$arity$variadic = G__13872__delegate;
return G__13872;
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
return cljs.core.reduce.call(null,(function (p1__11238__11242__auto__,p2__11239__11243__auto__){
return cljs.core.update.call(null,p1__11238__11242__auto__,p2__11239__11243__auto__,common.math._PLUS_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__11240__11244__auto__,p2__11241__11245__auto__){
return cljs.core.assoc.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__,common.math._PLUS_.call(null,x,cljs.core.get.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__11238__11242__auto__,p2__11239__11243__auto__){
return cljs.core.update.call(null,p1__11238__11242__auto__,p2__11239__11243__auto__,common.math._STAR_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__11240__11244__auto__,p2__11241__11245__auto__){
return cljs.core.assoc.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__,common.math._STAR_.call(null,x,cljs.core.get.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math._);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math._SLASH_);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.abs);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.acos);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.asin);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.atan);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.ceil);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.cos);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.exp);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.floor);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.log);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.rint);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.round);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.sin);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.sqrt);
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
return cljs.core.reduce.call(null,(function (p1__11228__11230__auto__,p2__11229__11231__auto__){
return cljs.core.update.call(null,p1__11228__11230__auto__,p2__11229__11231__auto__,common.math.tan);
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
return cljs.core.reduce.call(null,(function (p1__11238__11242__auto__,p2__11239__11243__auto__){
return cljs.core.update.call(null,p1__11238__11242__auto__,p2__11239__11243__auto__,common.math.mod,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__11240__11244__auto__,p2__11241__11245__auto__){
return cljs.core.assoc.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__,common.math.mod.call(null,x,cljs.core.get.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__11238__11242__auto__,p2__11239__11243__auto__){
return cljs.core.update.call(null,p1__11238__11242__auto__,p2__11239__11243__auto__,common.math.quot,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__11240__11244__auto__,p2__11241__11245__auto__){
return cljs.core.assoc.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__,common.math.quot.call(null,x,cljs.core.get.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__11238__11242__auto__,p2__11239__11243__auto__){
return cljs.core.update.call(null,p1__11238__11242__auto__,p2__11239__11243__auto__,common.math.atan2,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__11240__11244__auto__,p2__11241__11245__auto__){
return cljs.core.assoc.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__,common.math.atan2.call(null,x,cljs.core.get.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__11238__11242__auto__,p2__11239__11243__auto__){
return cljs.core.update.call(null,p1__11238__11242__auto__,p2__11239__11243__auto__,common.math.pow,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__11240__11244__auto__,p2__11241__11245__auto__){
return cljs.core.assoc.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__,common.math.pow.call(null,x,cljs.core.get.call(null,p1__11240__11244__auto__,p2__11241__11245__auto__)));
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
var G__14198__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14199 = y;
var G__14200 = cljs.core.first.call(null,more);
var G__14201 = cljs.core.next.call(null,more);
x = G__14199;
y = G__14200;
more = G__14201;
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
var G__14198 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14202__i = 0, G__14202__a = new Array(arguments.length -  2);
while (G__14202__i < G__14202__a.length) {G__14202__a[G__14202__i] = arguments[G__14202__i + 2]; ++G__14202__i;}
  more = new cljs.core.IndexedSeq(G__14202__a,0,null);
} 
return G__14198__delegate.call(this,x,y,more);};
G__14198.cljs$lang$maxFixedArity = 2;
G__14198.cljs$lang$applyTo = (function (arglist__14203){
var x = cljs.core.first(arglist__14203);
arglist__14203 = cljs.core.next(arglist__14203);
var y = cljs.core.first(arglist__14203);
var more = cljs.core.rest(arglist__14203);
return G__14198__delegate(x,y,more);
});
G__14198.cljs$core$IFn$_invoke$arity$variadic = G__14198__delegate;
return G__14198;
})()
);
cljs.core._add_method.call(null,common.math._LT_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._GT_.call(null,y,x);
}));
cljs.core._add_method.call(null,common.math._LT_,common.math.nary,(function() { 
var G__14209__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14210 = y;
var G__14211 = cljs.core.first.call(null,more);
var G__14212 = cljs.core.next.call(null,more);
x = G__14210;
y = G__14211;
more = G__14212;
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
var G__14209 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14218__i = 0, G__14218__a = new Array(arguments.length -  2);
while (G__14218__i < G__14218__a.length) {G__14218__a[G__14218__i] = arguments[G__14218__i + 2]; ++G__14218__i;}
  more = new cljs.core.IndexedSeq(G__14218__a,0,null);
} 
return G__14209__delegate.call(this,x,y,more);};
G__14209.cljs$lang$maxFixedArity = 2;
G__14209.cljs$lang$applyTo = (function (arglist__14219){
var x = cljs.core.first(arglist__14219);
arglist__14219 = cljs.core.next(arglist__14219);
var y = cljs.core.first(arglist__14219);
var more = cljs.core.rest(arglist__14219);
return G__14209__delegate(x,y,more);
});
G__14209.cljs$core$IFn$_invoke$arity$variadic = G__14209__delegate;
return G__14209;
})()
);
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._LT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.nary,(function() { 
var G__14234__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14235 = y;
var G__14236 = cljs.core.first.call(null,more);
var G__14237 = cljs.core.next.call(null,more);
x = G__14235;
y = G__14236;
more = G__14237;
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
var G__14234 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14243__i = 0, G__14243__a = new Array(arguments.length -  2);
while (G__14243__i < G__14243__a.length) {G__14243__a[G__14243__i] = arguments[G__14243__i + 2]; ++G__14243__i;}
  more = new cljs.core.IndexedSeq(G__14243__a,0,null);
} 
return G__14234__delegate.call(this,x,y,more);};
G__14234.cljs$lang$maxFixedArity = 2;
G__14234.cljs$lang$applyTo = (function (arglist__14245){
var x = cljs.core.first(arglist__14245);
arglist__14245 = cljs.core.next(arglist__14245);
var y = cljs.core.first(arglist__14245);
var more = cljs.core.rest(arglist__14245);
return G__14234__delegate(x,y,more);
});
G__14234.cljs$core$IFn$_invoke$arity$variadic = G__14234__delegate;
return G__14234;
})()
);
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._GT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.nary,(function() { 
var G__14261__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14262 = y;
var G__14263 = cljs.core.first.call(null,more);
var G__14264 = cljs.core.next.call(null,more);
x = G__14262;
y = G__14263;
more = G__14264;
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
var G__14261 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14265__i = 0, G__14265__a = new Array(arguments.length -  2);
while (G__14265__i < G__14265__a.length) {G__14265__a[G__14265__i] = arguments[G__14265__i + 2]; ++G__14265__i;}
  more = new cljs.core.IndexedSeq(G__14265__a,0,null);
} 
return G__14261__delegate.call(this,x,y,more);};
G__14261.cljs$lang$maxFixedArity = 2;
G__14261.cljs$lang$applyTo = (function (arglist__14266){
var x = cljs.core.first(arglist__14266);
arglist__14266 = cljs.core.next(arglist__14266);
var y = cljs.core.first(arglist__14266);
var more = cljs.core.rest(arglist__14266);
return G__14261__delegate(x,y,more);
});
G__14261.cljs$core$IFn$_invoke$arity$variadic = G__14261__delegate;
return G__14261;
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
var args14271 = [];
var len__9331__auto___14280 = arguments.length;
var i__9332__auto___14281 = (0);
while(true){
if((i__9332__auto___14281 < len__9331__auto___14280)){
args14271.push((arguments[i__9332__auto___14281]));

var G__14282 = (i__9332__auto___14281 + (1));
i__9332__auto___14281 = G__14282;
continue;
} else {
}
break;
}

var G__14278 = args14271.length;
switch (G__14278) {
case 1:
return common.math.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14271.slice((2)),(0),null));
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

common.math.max.cljs$lang$applyTo = (function (seq14273){
var G__14274 = cljs.core.first.call(null,seq14273);
var seq14273__$1 = cljs.core.next.call(null,seq14273);
var G__14275 = cljs.core.first.call(null,seq14273__$1);
var seq14273__$2 = cljs.core.next.call(null,seq14273__$1);
return common.math.max.cljs$core$IFn$_invoke$arity$variadic(G__14274,G__14275,seq14273__$2);
});

common.math.max.cljs$lang$maxFixedArity = (2);

common.math.min = (function common$math$min(var_args){
var args14286 = [];
var len__9331__auto___14303 = arguments.length;
var i__9332__auto___14304 = (0);
while(true){
if((i__9332__auto___14304 < len__9331__auto___14303)){
args14286.push((arguments[i__9332__auto___14304]));

var G__14305 = (i__9332__auto___14304 + (1));
i__9332__auto___14304 = G__14305;
continue;
} else {
}
break;
}

var G__14301 = args14286.length;
switch (G__14301) {
case 1:
return common.math.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14286.slice((2)),(0),null));
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

common.math.min.cljs$lang$applyTo = (function (seq14287){
var G__14288 = cljs.core.first.call(null,seq14287);
var seq14287__$1 = cljs.core.next.call(null,seq14287);
var G__14289 = cljs.core.first.call(null,seq14287__$1);
var seq14287__$2 = cljs.core.next.call(null,seq14287__$1);
return common.math.min.cljs$core$IFn$_invoke$arity$variadic(G__14288,G__14289,seq14287__$2);
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
var args14322 = [];
var len__9331__auto___14343 = arguments.length;
var i__9332__auto___14344 = (0);
while(true){
if((i__9332__auto___14344 < len__9331__auto___14343)){
args14322.push((arguments[i__9332__auto___14344]));

var G__14345 = (i__9332__auto___14344 + (1));
i__9332__auto___14344 = G__14345;
continue;
} else {
}
break;
}

var G__14341 = args14322.length;
switch (G__14341) {
case 1:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14322.slice((2)),(0),null));
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

common.math._BAR__BAR_.cljs$lang$applyTo = (function (seq14323){
var G__14324 = cljs.core.first.call(null,seq14323);
var seq14323__$1 = cljs.core.next.call(null,seq14323);
var G__14325 = cljs.core.first.call(null,seq14323__$1);
var seq14323__$2 = cljs.core.next.call(null,seq14323__$1);
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(G__14324,G__14325,seq14323__$2);
});

common.math._BAR__BAR_.cljs$lang$maxFixedArity = (2);

common.math.monotone = (function common$math$monotone(tone){
var pitch = cljs.core.volatile_BANG_.call(null,tone.call(null));
return cljs.core.filter.call(null,((function (pitch){
return (function (p1__14347_SHARP_){
var temp__5278__auto__ = tone.call(null,p1__14347_SHARP_,cljs.core.deref.call(null,pitch));
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
var G__14364 = null;
var G__14364__0 = (function (){
return common.math._PLUS_inf;
});
var G__14364__2 = (function (m,y){
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
G__14364 = function(m,y){
switch(arguments.length){
case 0:
return G__14364__0.call(this);
case 2:
return G__14364__2.call(this,m,y);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14364.cljs$core$IFn$_invoke$arity$0 = G__14364__0;
G__14364.cljs$core$IFn$_invoke$arity$2 = G__14364__2;
return G__14364;
})()
);
});
common.math.fps = (30);
common.math.dt = common.math._SLASH_.call(null,common.math.fps);
common.math.rad_COLON_s__GT_rpm = common.math._SLASH_.call(null,(60),common.math.tau);
common.math.m_COLON_s__GT_km_COLON_h = 3.6;
common.math.rad__GT_deg = common.math._SLASH_.call(null,(180),common.math.pi);
common.math.constrain = (function common$math$constrain(var_args){
var args14372 = [];
var len__9331__auto___14375 = arguments.length;
var i__9332__auto___14376 = (0);
while(true){
if((i__9332__auto___14376 < len__9331__auto___14375)){
args14372.push((arguments[i__9332__auto___14376]));

var G__14377 = (i__9332__auto___14376 + (1));
i__9332__auto___14376 = G__14377;
continue;
} else {
}
break;
}

var G__14374 = args14372.length;
switch (G__14374) {
case 2:
return common.math.constrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.constrain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14372.length)].join('')));

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
var args14398 = [];
var len__9331__auto___14405 = arguments.length;
var i__9332__auto___14406 = (0);
while(true){
if((i__9332__auto___14406 < len__9331__auto___14405)){
args14398.push((arguments[i__9332__auto___14406]));

var G__14408 = (i__9332__auto___14406 + (1));
i__9332__auto___14406 = G__14408;
continue;
} else {
}
break;
}

var G__14402 = args14398.length;
switch (G__14402) {
case 2:
return common.math.cycle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.cycle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14398.length)].join('')));

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
var G__14425 = mode;
var G__14425__$1 = (((G__14425 instanceof cljs.core.Keyword))?G__14425.fqn:null);
switch (G__14425__$1) {
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