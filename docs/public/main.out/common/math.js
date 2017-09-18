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

cljs.core.derive.call(null,cljs.core.Subvec,common.math.APersistentVector);

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
var args13873 = [];
var len__9331__auto___13881 = arguments.length;
var i__9332__auto___13882 = (0);
while(true){
if((i__9332__auto___13882 < len__9331__auto___13881)){
args13873.push((arguments[i__9332__auto___13882]));

var G__13883 = (i__9332__auto___13882 + (1));
i__9332__auto___13882 = G__13883;
continue;
} else {
}
break;
}

var G__13878 = args13873.length;
switch (G__13878) {
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
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args13873.slice((2)),(0),null));
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

common.math.multiary.cljs$lang$applyTo = (function (seq13874){
var G__13875 = cljs.core.first.call(null,seq13874);
var seq13874__$1 = cljs.core.next.call(null,seq13874);
var G__13876 = cljs.core.first.call(null,seq13874__$1);
var seq13874__$2 = cljs.core.next.call(null,seq13874__$1);
return common.math.multiary.cljs$core$IFn$_invoke$arity$variadic(G__13875,G__13876,seq13874__$2);
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
var G__13959__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13960 = common.math._PLUS_.call(null,x,y);
var G__13961 = cljs.core.first.call(null,more);
var G__13962 = cljs.core.next.call(null,more);
x = G__13960;
y = G__13961;
more = G__13962;
continue;
} else {
return common.math._PLUS_.call(null,x,y);
}
break;
}
};
var G__13959 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13963__i = 0, G__13963__a = new Array(arguments.length -  2);
while (G__13963__i < G__13963__a.length) {G__13963__a[G__13963__i] = arguments[G__13963__i + 2]; ++G__13963__i;}
  more = new cljs.core.IndexedSeq(G__13963__a,0,null);
} 
return G__13959__delegate.call(this,x,y,more);};
G__13959.cljs$lang$maxFixedArity = 2;
G__13959.cljs$lang$applyTo = (function (arglist__13964){
var x = cljs.core.first(arglist__13964);
arglist__13964 = cljs.core.next(arglist__13964);
var y = cljs.core.first(arglist__13964);
var more = cljs.core.rest(arglist__13964);
return G__13959__delegate(x,y,more);
});
G__13959.cljs$core$IFn$_invoke$arity$variadic = G__13959__delegate;
return G__13959;
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
var G__13976__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13977 = common.math._.call(null,x,y);
var G__13978 = cljs.core.first.call(null,more);
var G__13979 = cljs.core.next.call(null,more);
x = G__13977;
y = G__13978;
more = G__13979;
continue;
} else {
return common.math._.call(null,x,y);
}
break;
}
};
var G__13976 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13980__i = 0, G__13980__a = new Array(arguments.length -  2);
while (G__13980__i < G__13980__a.length) {G__13980__a[G__13980__i] = arguments[G__13980__i + 2]; ++G__13980__i;}
  more = new cljs.core.IndexedSeq(G__13980__a,0,null);
} 
return G__13976__delegate.call(this,x,y,more);};
G__13976.cljs$lang$maxFixedArity = 2;
G__13976.cljs$lang$applyTo = (function (arglist__13981){
var x = cljs.core.first(arglist__13981);
arglist__13981 = cljs.core.next(arglist__13981);
var y = cljs.core.first(arglist__13981);
var more = cljs.core.rest(arglist__13981);
return G__13976__delegate(x,y,more);
});
G__13976.cljs$core$IFn$_invoke$arity$variadic = G__13976__delegate;
return G__13976;
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
var G__13985__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13986 = common.math._STAR_.call(null,x,y);
var G__13987 = cljs.core.first.call(null,more);
var G__13988 = cljs.core.next.call(null,more);
x = G__13986;
y = G__13987;
more = G__13988;
continue;
} else {
return common.math._STAR_.call(null,x,y);
}
break;
}
};
var G__13985 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13989__i = 0, G__13989__a = new Array(arguments.length -  2);
while (G__13989__i < G__13989__a.length) {G__13989__a[G__13989__i] = arguments[G__13989__i + 2]; ++G__13989__i;}
  more = new cljs.core.IndexedSeq(G__13989__a,0,null);
} 
return G__13985__delegate.call(this,x,y,more);};
G__13985.cljs$lang$maxFixedArity = 2;
G__13985.cljs$lang$applyTo = (function (arglist__13990){
var x = cljs.core.first(arglist__13990);
arglist__13990 = cljs.core.next(arglist__13990);
var y = cljs.core.first(arglist__13990);
var more = cljs.core.rest(arglist__13990);
return G__13985__delegate(x,y,more);
});
G__13985.cljs$core$IFn$_invoke$arity$variadic = G__13985__delegate;
return G__13985;
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
var G__13995__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__13996 = common.math._SLASH_.call(null,x,y);
var G__13997 = cljs.core.first.call(null,more);
var G__13998 = cljs.core.next.call(null,more);
x = G__13996;
y = G__13997;
more = G__13998;
continue;
} else {
return common.math._SLASH_.call(null,x,y);
}
break;
}
};
var G__13995 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__13999__i = 0, G__13999__a = new Array(arguments.length -  2);
while (G__13999__i < G__13999__a.length) {G__13999__a[G__13999__i] = arguments[G__13999__i + 2]; ++G__13999__i;}
  more = new cljs.core.IndexedSeq(G__13999__a,0,null);
} 
return G__13995__delegate.call(this,x,y,more);};
G__13995.cljs$lang$maxFixedArity = 2;
G__13995.cljs$lang$applyTo = (function (arglist__14000){
var x = cljs.core.first(arglist__14000);
arglist__14000 = cljs.core.next(arglist__14000);
var y = cljs.core.first(arglist__14000);
var more = cljs.core.rest(arglist__14000);
return G__13995__delegate(x,y,more);
});
G__13995.cljs$core$IFn$_invoke$arity$variadic = G__13995__delegate;
return G__13995;
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
return cljs.core.reduce.call(null,(function (p1__12906__12910__auto__,p2__12907__12911__auto__){
return cljs.core.update.call(null,p1__12906__12910__auto__,p2__12907__12911__auto__,common.math._PLUS_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12908__12912__auto__,p2__12909__12913__auto__){
return cljs.core.assoc.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__,common.math._PLUS_.call(null,x,cljs.core.get.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12906__12910__auto__,p2__12907__12911__auto__){
return cljs.core.update.call(null,p1__12906__12910__auto__,p2__12907__12911__auto__,common.math._STAR_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12908__12912__auto__,p2__12909__12913__auto__){
return cljs.core.assoc.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__,common.math._STAR_.call(null,x,cljs.core.get.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math._);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math._SLASH_);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.abs);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.acos);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.asin);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.atan);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.ceil);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.cos);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.exp);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.floor);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.log);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.rint);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.round);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.sin);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.sqrt);
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
return cljs.core.reduce.call(null,(function (p1__12895__12897__auto__,p2__12896__12898__auto__){
return cljs.core.update.call(null,p1__12895__12897__auto__,p2__12896__12898__auto__,common.math.tan);
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
return cljs.core.reduce.call(null,(function (p1__12906__12910__auto__,p2__12907__12911__auto__){
return cljs.core.update.call(null,p1__12906__12910__auto__,p2__12907__12911__auto__,common.math.mod,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12908__12912__auto__,p2__12909__12913__auto__){
return cljs.core.assoc.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__,common.math.mod.call(null,x,cljs.core.get.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12906__12910__auto__,p2__12907__12911__auto__){
return cljs.core.update.call(null,p1__12906__12910__auto__,p2__12907__12911__auto__,common.math.quot,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12908__12912__auto__,p2__12909__12913__auto__){
return cljs.core.assoc.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__,common.math.quot.call(null,x,cljs.core.get.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12906__12910__auto__,p2__12907__12911__auto__){
return cljs.core.update.call(null,p1__12906__12910__auto__,p2__12907__12911__auto__,common.math.atan2,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12908__12912__auto__,p2__12909__12913__auto__){
return cljs.core.assoc.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__,common.math.atan2.call(null,x,cljs.core.get.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12906__12910__auto__,p2__12907__12911__auto__){
return cljs.core.update.call(null,p1__12906__12910__auto__,p2__12907__12911__auto__,common.math.pow,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12908__12912__auto__,p2__12909__12913__auto__){
return cljs.core.assoc.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__,common.math.pow.call(null,x,cljs.core.get.call(null,p1__12908__12912__auto__,p2__12909__12913__auto__)));
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
var G__14331__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14332 = y;
var G__14333 = cljs.core.first.call(null,more);
var G__14334 = cljs.core.next.call(null,more);
x = G__14332;
y = G__14333;
more = G__14334;
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
var G__14331 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14345__i = 0, G__14345__a = new Array(arguments.length -  2);
while (G__14345__i < G__14345__a.length) {G__14345__a[G__14345__i] = arguments[G__14345__i + 2]; ++G__14345__i;}
  more = new cljs.core.IndexedSeq(G__14345__a,0,null);
} 
return G__14331__delegate.call(this,x,y,more);};
G__14331.cljs$lang$maxFixedArity = 2;
G__14331.cljs$lang$applyTo = (function (arglist__14346){
var x = cljs.core.first(arglist__14346);
arglist__14346 = cljs.core.next(arglist__14346);
var y = cljs.core.first(arglist__14346);
var more = cljs.core.rest(arglist__14346);
return G__14331__delegate(x,y,more);
});
G__14331.cljs$core$IFn$_invoke$arity$variadic = G__14331__delegate;
return G__14331;
})()
);
cljs.core._add_method.call(null,common.math._LT_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._GT_.call(null,y,x);
}));
cljs.core._add_method.call(null,common.math._LT_,common.math.nary,(function() { 
var G__14355__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14358 = y;
var G__14359 = cljs.core.first.call(null,more);
var G__14360 = cljs.core.next.call(null,more);
x = G__14358;
y = G__14359;
more = G__14360;
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
var G__14355 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14367__i = 0, G__14367__a = new Array(arguments.length -  2);
while (G__14367__i < G__14367__a.length) {G__14367__a[G__14367__i] = arguments[G__14367__i + 2]; ++G__14367__i;}
  more = new cljs.core.IndexedSeq(G__14367__a,0,null);
} 
return G__14355__delegate.call(this,x,y,more);};
G__14355.cljs$lang$maxFixedArity = 2;
G__14355.cljs$lang$applyTo = (function (arglist__14368){
var x = cljs.core.first(arglist__14368);
arglist__14368 = cljs.core.next(arglist__14368);
var y = cljs.core.first(arglist__14368);
var more = cljs.core.rest(arglist__14368);
return G__14355__delegate(x,y,more);
});
G__14355.cljs$core$IFn$_invoke$arity$variadic = G__14355__delegate;
return G__14355;
})()
);
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._LT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.nary,(function() { 
var G__14372__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14375 = y;
var G__14376 = cljs.core.first.call(null,more);
var G__14377 = cljs.core.next.call(null,more);
x = G__14375;
y = G__14376;
more = G__14377;
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
var G__14372 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14381__i = 0, G__14381__a = new Array(arguments.length -  2);
while (G__14381__i < G__14381__a.length) {G__14381__a[G__14381__i] = arguments[G__14381__i + 2]; ++G__14381__i;}
  more = new cljs.core.IndexedSeq(G__14381__a,0,null);
} 
return G__14372__delegate.call(this,x,y,more);};
G__14372.cljs$lang$maxFixedArity = 2;
G__14372.cljs$lang$applyTo = (function (arglist__14383){
var x = cljs.core.first(arglist__14383);
arglist__14383 = cljs.core.next(arglist__14383);
var y = cljs.core.first(arglist__14383);
var more = cljs.core.rest(arglist__14383);
return G__14372__delegate(x,y,more);
});
G__14372.cljs$core$IFn$_invoke$arity$variadic = G__14372__delegate;
return G__14372;
})()
);
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._GT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.nary,(function() { 
var G__14391__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14394 = y;
var G__14395 = cljs.core.first.call(null,more);
var G__14396 = cljs.core.next.call(null,more);
x = G__14394;
y = G__14395;
more = G__14396;
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
var G__14391 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14397__i = 0, G__14397__a = new Array(arguments.length -  2);
while (G__14397__i < G__14397__a.length) {G__14397__a[G__14397__i] = arguments[G__14397__i + 2]; ++G__14397__i;}
  more = new cljs.core.IndexedSeq(G__14397__a,0,null);
} 
return G__14391__delegate.call(this,x,y,more);};
G__14391.cljs$lang$maxFixedArity = 2;
G__14391.cljs$lang$applyTo = (function (arglist__14398){
var x = cljs.core.first(arglist__14398);
arglist__14398 = cljs.core.next(arglist__14398);
var y = cljs.core.first(arglist__14398);
var more = cljs.core.rest(arglist__14398);
return G__14391__delegate(x,y,more);
});
G__14391.cljs$core$IFn$_invoke$arity$variadic = G__14391__delegate;
return G__14391;
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
var args14410 = [];
var len__9331__auto___14416 = arguments.length;
var i__9332__auto___14417 = (0);
while(true){
if((i__9332__auto___14417 < len__9331__auto___14416)){
args14410.push((arguments[i__9332__auto___14417]));

var G__14418 = (i__9332__auto___14417 + (1));
i__9332__auto___14417 = G__14418;
continue;
} else {
}
break;
}

var G__14415 = args14410.length;
switch (G__14415) {
case 1:
return common.math.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14410.slice((2)),(0),null));
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

common.math.max.cljs$lang$applyTo = (function (seq14411){
var G__14412 = cljs.core.first.call(null,seq14411);
var seq14411__$1 = cljs.core.next.call(null,seq14411);
var G__14413 = cljs.core.first.call(null,seq14411__$1);
var seq14411__$2 = cljs.core.next.call(null,seq14411__$1);
return common.math.max.cljs$core$IFn$_invoke$arity$variadic(G__14412,G__14413,seq14411__$2);
});

common.math.max.cljs$lang$maxFixedArity = (2);

common.math.min = (function common$math$min(var_args){
var args14422 = [];
var len__9331__auto___14431 = arguments.length;
var i__9332__auto___14432 = (0);
while(true){
if((i__9332__auto___14432 < len__9331__auto___14431)){
args14422.push((arguments[i__9332__auto___14432]));

var G__14433 = (i__9332__auto___14432 + (1));
i__9332__auto___14432 = G__14433;
continue;
} else {
}
break;
}

var G__14430 = args14422.length;
switch (G__14430) {
case 1:
return common.math.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14422.slice((2)),(0),null));
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

common.math.min.cljs$lang$applyTo = (function (seq14423){
var G__14424 = cljs.core.first.call(null,seq14423);
var seq14423__$1 = cljs.core.next.call(null,seq14423);
var G__14425 = cljs.core.first.call(null,seq14423__$1);
var seq14423__$2 = cljs.core.next.call(null,seq14423__$1);
return common.math.min.cljs$core$IFn$_invoke$arity$variadic(G__14424,G__14425,seq14423__$2);
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
var args14444 = [];
var len__9331__auto___14450 = arguments.length;
var i__9332__auto___14451 = (0);
while(true){
if((i__9332__auto___14451 < len__9331__auto___14450)){
args14444.push((arguments[i__9332__auto___14451]));

var G__14452 = (i__9332__auto___14451 + (1));
i__9332__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14449 = args14444.length;
switch (G__14449) {
case 1:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args14444.slice((2)),(0),null));
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

common.math._BAR__BAR_.cljs$lang$applyTo = (function (seq14445){
var G__14446 = cljs.core.first.call(null,seq14445);
var seq14445__$1 = cljs.core.next.call(null,seq14445);
var G__14447 = cljs.core.first.call(null,seq14445__$1);
var seq14445__$2 = cljs.core.next.call(null,seq14445__$1);
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(G__14446,G__14447,seq14445__$2);
});

common.math._BAR__BAR_.cljs$lang$maxFixedArity = (2);

common.math.monotone = (function common$math$monotone(tone){
var pitch = cljs.core.volatile_BANG_.call(null,tone.call(null));
return cljs.core.filter.call(null,((function (pitch){
return (function (p1__14458_SHARP_){
var temp__5278__auto__ = tone.call(null,p1__14458_SHARP_,cljs.core.deref.call(null,pitch));
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
var G__14459 = null;
var G__14459__0 = (function (){
return common.math._PLUS_inf;
});
var G__14459__2 = (function (m,y){
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
G__14459 = function(m,y){
switch(arguments.length){
case 0:
return G__14459__0.call(this);
case 2:
return G__14459__2.call(this,m,y);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14459.cljs$core$IFn$_invoke$arity$0 = G__14459__0;
G__14459.cljs$core$IFn$_invoke$arity$2 = G__14459__2;
return G__14459;
})()
);
});
common.math.fps = (30);
common.math.dt = common.math._SLASH_.call(null,common.math.fps);
common.math.rad_COLON_s__GT_rpm = common.math._SLASH_.call(null,(60),common.math.tau);
common.math.m_COLON_s__GT_km_COLON_h = 3.6;
common.math.rad__GT_deg = common.math._SLASH_.call(null,(180),common.math.pi);
common.math.constrain = (function common$math$constrain(var_args){
var args14467 = [];
var len__9331__auto___14485 = arguments.length;
var i__9332__auto___14486 = (0);
while(true){
if((i__9332__auto___14486 < len__9331__auto___14485)){
args14467.push((arguments[i__9332__auto___14486]));

var G__14487 = (i__9332__auto___14486 + (1));
i__9332__auto___14486 = G__14487;
continue;
} else {
}
break;
}

var G__14484 = args14467.length;
switch (G__14484) {
case 2:
return common.math.constrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.constrain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14467.length)].join('')));

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
var args14495 = [];
var len__9331__auto___14503 = arguments.length;
var i__9332__auto___14510 = (0);
while(true){
if((i__9332__auto___14510 < len__9331__auto___14503)){
args14495.push((arguments[i__9332__auto___14510]));

var G__14511 = (i__9332__auto___14510 + (1));
i__9332__auto___14510 = G__14511;
continue;
} else {
}
break;
}

var G__14499 = args14495.length;
switch (G__14499) {
case 2:
return common.math.cycle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.cycle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14495.length)].join('')));

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
var G__14514 = mode;
var G__14514__$1 = (((G__14514 instanceof cljs.core.Keyword))?G__14514.fqn:null);
switch (G__14514__$1) {
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