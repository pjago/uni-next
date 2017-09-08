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
var args14144 = [];
var len__9334__auto___14150 = arguments.length;
var i__9335__auto___14151 = (0);
while(true){
if((i__9335__auto___14151 < len__9334__auto___14150)){
args14144.push((arguments[i__9335__auto___14151]));

var G__14164 = (i__9335__auto___14151 + (1));
i__9335__auto___14151 = G__14164;
continue;
} else {
}
break;
}

var G__14149 = args14144.length;
switch (G__14149) {
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
var argseq__9357__auto__ = (new cljs.core.IndexedSeq(args14144.slice((2)),(0),null));
return common.math.multiary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9357__auto__);

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

common.math.multiary.cljs$lang$applyTo = (function (seq14145){
var G__14146 = cljs.core.first.call(null,seq14145);
var seq14145__$1 = cljs.core.next.call(null,seq14145);
var G__14147 = cljs.core.first.call(null,seq14145__$1);
var seq14145__$2 = cljs.core.next.call(null,seq14145__$1);
return common.math.multiary.cljs$core$IFn$_invoke$arity$variadic(G__14146,G__14147,seq14145__$2);
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

common.math.Zero.cljs$lang$ctorPrWriter = (function (this__8770__auto__,writer__8771__auto__,opt__8772__auto__){
return cljs.core._write.call(null,writer__8771__auto__,"common.math/Zero");
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

common.math.One.cljs$lang$ctorPrWriter = (function (this__8770__auto__,writer__8771__auto__,opt__8772__auto__){
return cljs.core._write.call(null,writer__8771__auto__,"common.math/One");
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
common.math._PLUS_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","+"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math._STAR_ !== 'undefined'){
} else {
common.math._STAR_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","*"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math._ !== 'undefined'){
} else {
common.math._ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","-"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math._SLASH_ !== 'undefined'){
} else {
common.math._SLASH_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","/"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.abs !== 'undefined'){
} else {
common.math.abs = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","abs"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.acos !== 'undefined'){
} else {
common.math.acos = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","acos"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.asin !== 'undefined'){
} else {
common.math.asin = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","asin"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.atan !== 'undefined'){
} else {
common.math.atan = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","atan"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.ceil !== 'undefined'){
} else {
common.math.ceil = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","ceil"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.cos !== 'undefined'){
} else {
common.math.cos = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","cos"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.exp !== 'undefined'){
} else {
common.math.exp = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","exp"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.floor !== 'undefined'){
} else {
common.math.floor = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","floor"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.log !== 'undefined'){
} else {
common.math.log = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","log"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.rint !== 'undefined'){
} else {
common.math.rint = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","rint"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.round !== 'undefined'){
} else {
common.math.round = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","round"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.sin !== 'undefined'){
} else {
common.math.sin = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","sin"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.sqrt !== 'undefined'){
} else {
common.math.sqrt = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","sqrt"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.tan !== 'undefined'){
} else {
common.math.tan = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","tan"),common.math.unary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.mod !== 'undefined'){
} else {
common.math.mod = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","mod"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.quot !== 'undefined'){
} else {
common.math.quot = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","quot"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.atan2 !== 'undefined'){
} else {
common.math.atan2 = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","atan2"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math.pow !== 'undefined'){
} else {
common.math.pow = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","pow"),common.math.binary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
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
var or__8113__auto__ = x;
if(cljs.core.truth_(or__8113__auto__)){
return or__8113__auto__;
} else {
return y;
}
}));
cljs.core._add_method.call(null,common.math._PLUS_,common.math.nary,(function() { 
var G__14334__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__14335 = common.math._PLUS_.call(null,x,y);
var G__14336 = cljs.core.first.call(null,more);
var G__14337 = cljs.core.next.call(null,more);
x = G__14335;
y = G__14336;
more = G__14337;
continue;
} else {
return common.math._PLUS_.call(null,x,y);
}
break;
}
};
var G__14334 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14348__i = 0, G__14348__a = new Array(arguments.length -  2);
while (G__14348__i < G__14348__a.length) {G__14348__a[G__14348__i] = arguments[G__14348__i + 2]; ++G__14348__i;}
  more = new cljs.core.IndexedSeq(G__14348__a,0,null);
} 
return G__14334__delegate.call(this,x,y,more);};
G__14334.cljs$lang$maxFixedArity = 2;
G__14334.cljs$lang$applyTo = (function (arglist__14349){
var x = cljs.core.first(arglist__14349);
arglist__14349 = cljs.core.next(arglist__14349);
var y = cljs.core.first(arglist__14349);
var more = cljs.core.rest(arglist__14349);
return G__14334__delegate(x,y,more);
});
G__14334.cljs$core$IFn$_invoke$arity$variadic = G__14334__delegate;
return G__14334;
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
return cljs.core.not.call(null,(function (){var or__8113__auto__ = x;
if(cljs.core.truth_(or__8113__auto__)){
return or__8113__auto__;
} else {
return y;
}
})());
}));
cljs.core._add_method.call(null,common.math._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._PLUS_.call(null,x,common.math._.call(null,y));
}));
cljs.core._add_method.call(null,common.math._,common.math.nary,(function() { 
var G__14350__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__14351 = common.math._.call(null,x,y);
var G__14352 = cljs.core.first.call(null,more);
var G__14353 = cljs.core.next.call(null,more);
x = G__14351;
y = G__14352;
more = G__14353;
continue;
} else {
return common.math._.call(null,x,y);
}
break;
}
};
var G__14350 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14354__i = 0, G__14354__a = new Array(arguments.length -  2);
while (G__14354__i < G__14354__a.length) {G__14354__a[G__14354__i] = arguments[G__14354__i + 2]; ++G__14354__i;}
  more = new cljs.core.IndexedSeq(G__14354__a,0,null);
} 
return G__14350__delegate.call(this,x,y,more);};
G__14350.cljs$lang$maxFixedArity = 2;
G__14350.cljs$lang$applyTo = (function (arglist__14355){
var x = cljs.core.first(arglist__14355);
arglist__14355 = cljs.core.next(arglist__14355);
var y = cljs.core.first(arglist__14355);
var more = cljs.core.rest(arglist__14355);
return G__14350__delegate(x,y,more);
});
G__14350.cljs$core$IFn$_invoke$arity$variadic = G__14350__delegate;
return G__14350;
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
var and__8101__auto__ = x;
if(cljs.core.truth_(and__8101__auto__)){
return y;
} else {
return and__8101__auto__;
}
}));
cljs.core._add_method.call(null,common.math._STAR_,common.math.nary,(function() { 
var G__14372__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__14373 = common.math._STAR_.call(null,x,y);
var G__14374 = cljs.core.first.call(null,more);
var G__14375 = cljs.core.next.call(null,more);
x = G__14373;
y = G__14374;
more = G__14375;
continue;
} else {
return common.math._STAR_.call(null,x,y);
}
break;
}
};
var G__14372 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14376__i = 0, G__14376__a = new Array(arguments.length -  2);
while (G__14376__i < G__14376__a.length) {G__14376__a[G__14376__i] = arguments[G__14376__i + 2]; ++G__14376__i;}
  more = new cljs.core.IndexedSeq(G__14376__a,0,null);
} 
return G__14372__delegate.call(this,x,y,more);};
G__14372.cljs$lang$maxFixedArity = 2;
G__14372.cljs$lang$applyTo = (function (arglist__14377){
var x = cljs.core.first(arglist__14377);
arglist__14377 = cljs.core.next(arglist__14377);
var y = cljs.core.first(arglist__14377);
var more = cljs.core.rest(arglist__14377);
return G__14372__delegate(x,y,more);
});
G__14372.cljs$core$IFn$_invoke$arity$variadic = G__14372__delegate;
return G__14372;
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
return cljs.core.not.call(null,(function (){var and__8101__auto__ = x;
if(cljs.core.truth_(and__8101__auto__)){
return y;
} else {
return and__8101__auto__;
}
})());
}));
cljs.core._add_method.call(null,common.math._SLASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._STAR_.call(null,x,common.math._SLASH_.call(null,y));
}));
cljs.core._add_method.call(null,common.math._SLASH_,common.math.nary,(function() { 
var G__14402__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(more)){
var G__14403 = common.math._SLASH_.call(null,x,y);
var G__14404 = cljs.core.first.call(null,more);
var G__14405 = cljs.core.next.call(null,more);
x = G__14403;
y = G__14404;
more = G__14405;
continue;
} else {
return common.math._SLASH_.call(null,x,y);
}
break;
}
};
var G__14402 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14406__i = 0, G__14406__a = new Array(arguments.length -  2);
while (G__14406__i < G__14406__a.length) {G__14406__a[G__14406__i] = arguments[G__14406__i + 2]; ++G__14406__i;}
  more = new cljs.core.IndexedSeq(G__14406__a,0,null);
} 
return G__14402__delegate.call(this,x,y,more);};
G__14402.cljs$lang$maxFixedArity = 2;
G__14402.cljs$lang$applyTo = (function (arglist__14407){
var x = cljs.core.first(arglist__14407);
arglist__14407 = cljs.core.next(arglist__14407);
var y = cljs.core.first(arglist__14407);
var more = cljs.core.rest(arglist__14407);
return G__14402__delegate(x,y,more);
});
G__14402.cljs$core$IFn$_invoke$arity$variadic = G__14402__delegate;
return G__14402;
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
return cljs.core.reduce.call(null,(function (p1__12643__12647__auto__,p2__12644__12648__auto__){
return cljs.core.update.call(null,p1__12643__12647__auto__,p2__12644__12648__auto__,common.math._PLUS_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12645__12649__auto__,p2__12646__12650__auto__){
return cljs.core.assoc.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__,common.math._PLUS_.call(null,x,cljs.core.get.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12643__12647__auto__,p2__12644__12648__auto__){
return cljs.core.update.call(null,p1__12643__12647__auto__,p2__12644__12648__auto__,common.math._STAR_,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12645__12649__auto__,p2__12646__12650__auto__){
return cljs.core.assoc.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__,common.math._STAR_.call(null,x,cljs.core.get.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math._);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math._SLASH_);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.abs);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.acos);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.asin);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.atan);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.ceil);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.cos);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.exp);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.floor);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.log);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.rint);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.round);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.sin);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.sqrt);
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
return cljs.core.reduce.call(null,(function (p1__12634__12636__auto__,p2__12635__12637__auto__){
return cljs.core.update.call(null,p1__12634__12636__auto__,p2__12635__12637__auto__,common.math.tan);
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
return cljs.core.reduce.call(null,(function (p1__12643__12647__auto__,p2__12644__12648__auto__){
return cljs.core.update.call(null,p1__12643__12647__auto__,p2__12644__12648__auto__,common.math.mod,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.mod,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12645__12649__auto__,p2__12646__12650__auto__){
return cljs.core.assoc.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__,common.math.mod.call(null,x,cljs.core.get.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12643__12647__auto__,p2__12644__12648__auto__){
return cljs.core.update.call(null,p1__12643__12647__auto__,p2__12644__12648__auto__,common.math.quot,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.quot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12645__12649__auto__,p2__12646__12650__auto__){
return cljs.core.assoc.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__,common.math.quot.call(null,x,cljs.core.get.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12643__12647__auto__,p2__12644__12648__auto__){
return cljs.core.update.call(null,p1__12643__12647__auto__,p2__12644__12648__auto__,common.math.atan2,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.atan2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12645__12649__auto__,p2__12646__12650__auto__){
return cljs.core.assoc.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__,common.math.atan2.call(null,x,cljs.core.get.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__)));
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
return cljs.core.reduce.call(null,(function (p1__12643__12647__auto__,p2__12644__12648__auto__){
return cljs.core.update.call(null,p1__12643__12647__auto__,p2__12644__12648__auto__,common.math.pow,y);
}),x,cljs.core.keys.call(null,x));
}));

cljs.core._add_method.call(null,common.math.pow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.Number,common.math.IPersistentMap], null),(function (x,y){
return cljs.core.reduce.call(null,(function (p1__12645__12649__auto__,p2__12646__12650__auto__){
return cljs.core.assoc.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__,common.math.pow.call(null,x,cljs.core.get.call(null,p1__12645__12649__auto__,p2__12646__12650__auto__)));
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
common.math._GT_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math",">"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math._LT_ !== 'undefined'){
} else {
common.math._LT_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","<"),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math._GT__EQ_ !== 'undefined'){
} else {
common.math._GT__EQ_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math",">="),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
if(typeof common.math._LT__EQ_ !== 'undefined'){
} else {
common.math._LT__EQ_ = (function (){var method_table__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9148__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"common.math","<="),common.math.multiary,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9148__auto__,method_table__9144__auto__,prefer_table__9145__auto__,method_cache__9146__auto__,cached_hierarchy__9147__auto__));
})();
}
cljs.core._add_method.call(null,common.math._GT_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._GT_,common.math.nary,(function() { 
var G__14538__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14539 = y;
var G__14540 = cljs.core.first.call(null,more);
var G__14541 = cljs.core.next.call(null,more);
x = G__14539;
y = G__14540;
more = G__14541;
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
var G__14538 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14542__i = 0, G__14542__a = new Array(arguments.length -  2);
while (G__14542__i < G__14542__a.length) {G__14542__a[G__14542__i] = arguments[G__14542__i + 2]; ++G__14542__i;}
  more = new cljs.core.IndexedSeq(G__14542__a,0,null);
} 
return G__14538__delegate.call(this,x,y,more);};
G__14538.cljs$lang$maxFixedArity = 2;
G__14538.cljs$lang$applyTo = (function (arglist__14549){
var x = cljs.core.first(arglist__14549);
arglist__14549 = cljs.core.next(arglist__14549);
var y = cljs.core.first(arglist__14549);
var more = cljs.core.rest(arglist__14549);
return G__14538__delegate(x,y,more);
});
G__14538.cljs$core$IFn$_invoke$arity$variadic = G__14538__delegate;
return G__14538;
})()
);
cljs.core._add_method.call(null,common.math._LT_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return common.math._GT_.call(null,y,x);
}));
cljs.core._add_method.call(null,common.math._LT_,common.math.nary,(function() { 
var G__14550__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14551 = y;
var G__14552 = cljs.core.first.call(null,more);
var G__14553 = cljs.core.next.call(null,more);
x = G__14551;
y = G__14552;
more = G__14553;
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
var G__14550 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14554__i = 0, G__14554__a = new Array(arguments.length -  2);
while (G__14554__i < G__14554__a.length) {G__14554__a[G__14554__i] = arguments[G__14554__i + 2]; ++G__14554__i;}
  more = new cljs.core.IndexedSeq(G__14554__a,0,null);
} 
return G__14550__delegate.call(this,x,y,more);};
G__14550.cljs$lang$maxFixedArity = 2;
G__14550.cljs$lang$applyTo = (function (arglist__14555){
var x = cljs.core.first(arglist__14555);
arglist__14555 = cljs.core.next(arglist__14555);
var y = cljs.core.first(arglist__14555);
var more = cljs.core.rest(arglist__14555);
return G__14550__delegate(x,y,more);
});
G__14550.cljs$core$IFn$_invoke$arity$variadic = G__14550__delegate;
return G__14550;
})()
);
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._LT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._GT__EQ_,common.math.nary,(function() { 
var G__14556__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14557 = y;
var G__14558 = cljs.core.first.call(null,more);
var G__14559 = cljs.core.next.call(null,more);
x = G__14557;
y = G__14558;
more = G__14559;
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
var G__14556 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14560__i = 0, G__14560__a = new Array(arguments.length -  2);
while (G__14560__i < G__14560__a.length) {G__14560__a[G__14560__i] = arguments[G__14560__i + 2]; ++G__14560__i;}
  more = new cljs.core.IndexedSeq(G__14560__a,0,null);
} 
return G__14556__delegate.call(this,x,y,more);};
G__14556.cljs$lang$maxFixedArity = 2;
G__14556.cljs$lang$applyTo = (function (arglist__14561){
var x = cljs.core.first(arglist__14561);
arglist__14561 = cljs.core.next(arglist__14561);
var y = cljs.core.first(arglist__14561);
var more = cljs.core.rest(arglist__14561);
return G__14556__delegate(x,y,more);
});
G__14556.cljs$core$IFn$_invoke$arity$variadic = G__14556__delegate;
return G__14556;
})()
);
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.any,(function (x){
return true;
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math.any,common.math.any], null),(function (x,y){
return cljs.core.not.call(null,common.math._GT_.call(null,x,y));
}));
cljs.core._add_method.call(null,common.math._LT__EQ_,common.math.nary,(function() { 
var G__14566__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(common.math._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14567 = y;
var G__14568 = cljs.core.first.call(null,more);
var G__14569 = cljs.core.next.call(null,more);
x = G__14567;
y = G__14568;
more = G__14569;
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
var G__14566 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14570__i = 0, G__14570__a = new Array(arguments.length -  2);
while (G__14570__i < G__14570__a.length) {G__14570__a[G__14570__i] = arguments[G__14570__i + 2]; ++G__14570__i;}
  more = new cljs.core.IndexedSeq(G__14570__a,0,null);
} 
return G__14566__delegate.call(this,x,y,more);};
G__14566.cljs$lang$maxFixedArity = 2;
G__14566.cljs$lang$applyTo = (function (arglist__14571){
var x = cljs.core.first(arglist__14571);
arglist__14571 = cljs.core.next(arglist__14571);
var y = cljs.core.first(arglist__14571);
var more = cljs.core.rest(arglist__14571);
return G__14566__delegate(x,y,more);
});
G__14566.cljs$core$IFn$_invoke$arity$variadic = G__14566__delegate;
return G__14566;
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
var args14572 = [];
var len__9334__auto___14586 = arguments.length;
var i__9335__auto___14587 = (0);
while(true){
if((i__9335__auto___14587 < len__9334__auto___14586)){
args14572.push((arguments[i__9335__auto___14587]));

var G__14588 = (i__9335__auto___14587 + (1));
i__9335__auto___14587 = G__14588;
continue;
} else {
}
break;
}

var G__14585 = args14572.length;
switch (G__14585) {
case 1:
return common.math.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9357__auto__ = (new cljs.core.IndexedSeq(args14572.slice((2)),(0),null));
return common.math.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9357__auto__);

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

common.math.max.cljs$lang$applyTo = (function (seq14573){
var G__14574 = cljs.core.first.call(null,seq14573);
var seq14573__$1 = cljs.core.next.call(null,seq14573);
var G__14575 = cljs.core.first.call(null,seq14573__$1);
var seq14573__$2 = cljs.core.next.call(null,seq14573__$1);
return common.math.max.cljs$core$IFn$_invoke$arity$variadic(G__14574,G__14575,seq14573__$2);
});

common.math.max.cljs$lang$maxFixedArity = (2);

common.math.min = (function common$math$min(var_args){
var args14590 = [];
var len__9334__auto___14597 = arguments.length;
var i__9335__auto___14598 = (0);
while(true){
if((i__9335__auto___14598 < len__9334__auto___14597)){
args14590.push((arguments[i__9335__auto___14598]));

var G__14599 = (i__9335__auto___14598 + (1));
i__9335__auto___14598 = G__14599;
continue;
} else {
}
break;
}

var G__14595 = args14590.length;
switch (G__14595) {
case 1:
return common.math.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9357__auto__ = (new cljs.core.IndexedSeq(args14590.slice((2)),(0),null));
return common.math.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9357__auto__);

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

common.math.min.cljs$lang$applyTo = (function (seq14591){
var G__14592 = cljs.core.first.call(null,seq14591);
var seq14591__$1 = cljs.core.next.call(null,seq14591);
var G__14593 = cljs.core.first.call(null,seq14591__$1);
var seq14591__$2 = cljs.core.next.call(null,seq14591__$1);
return common.math.min.cljs$core$IFn$_invoke$arity$variadic(G__14592,G__14593,seq14591__$2);
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
var args14614 = [];
var len__9334__auto___14620 = arguments.length;
var i__9335__auto___14621 = (0);
while(true){
if((i__9335__auto___14621 < len__9334__auto___14620)){
args14614.push((arguments[i__9335__auto___14621]));

var G__14622 = (i__9335__auto___14621 + (1));
i__9335__auto___14621 = G__14622;
continue;
} else {
}
break;
}

var G__14619 = args14614.length;
switch (G__14619) {
case 1:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9357__auto__ = (new cljs.core.IndexedSeq(args14614.slice((2)),(0),null));
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9357__auto__);

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

common.math._BAR__BAR_.cljs$lang$applyTo = (function (seq14615){
var G__14616 = cljs.core.first.call(null,seq14615);
var seq14615__$1 = cljs.core.next.call(null,seq14615);
var G__14617 = cljs.core.first.call(null,seq14615__$1);
var seq14615__$2 = cljs.core.next.call(null,seq14615__$1);
return common.math._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(G__14616,G__14617,seq14615__$2);
});

common.math._BAR__BAR_.cljs$lang$maxFixedArity = (2);

common.math.monotone = (function common$math$monotone(tone){
var pitch = cljs.core.volatile_BANG_.call(null,tone.call(null));
return cljs.core.filter.call(null,((function (pitch){
return (function (p1__14630_SHARP_){
var temp__5278__auto__ = tone.call(null,p1__14630_SHARP_,cljs.core.deref.call(null,pitch));
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
var G__14631 = null;
var G__14631__0 = (function (){
return common.math._PLUS_inf;
});
var G__14631__2 = (function (m,y){
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
G__14631 = function(m,y){
switch(arguments.length){
case 0:
return G__14631__0.call(this);
case 2:
return G__14631__2.call(this,m,y);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14631.cljs$core$IFn$_invoke$arity$0 = G__14631__0;
G__14631.cljs$core$IFn$_invoke$arity$2 = G__14631__2;
return G__14631;
})()
);
});
common.math.fps = (30);
common.math.dt = common.math._SLASH_.call(null,common.math.fps);
common.math.rad_COLON_s__GT_rpm = common.math._SLASH_.call(null,(60),common.math.tau);
common.math.m_COLON_s__GT_km_COLON_h = 3.6;
common.math.rad__GT_deg = common.math._SLASH_.call(null,(180),common.math.pi);
common.math.constrain = (function common$math$constrain(var_args){
var args14632 = [];
var len__9334__auto___14641 = arguments.length;
var i__9335__auto___14642 = (0);
while(true){
if((i__9335__auto___14642 < len__9334__auto___14641)){
args14632.push((arguments[i__9335__auto___14642]));

var G__14643 = (i__9335__auto___14642 + (1));
i__9335__auto___14642 = G__14643;
continue;
} else {
}
break;
}

var G__14640 = args14632.length;
switch (G__14640) {
case 2:
return common.math.constrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.constrain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14632.length)].join('')));

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
var args14645 = [];
var len__9334__auto___14680 = arguments.length;
var i__9335__auto___14681 = (0);
while(true){
if((i__9335__auto___14681 < len__9334__auto___14680)){
args14645.push((arguments[i__9335__auto___14681]));

var G__14682 = (i__9335__auto___14681 + (1));
i__9335__auto___14681 = G__14682;
continue;
} else {
}
break;
}

var G__14647 = args14645.length;
switch (G__14647) {
case 2:
return common.math.cycle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.cycle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14645.length)].join('')));

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
var G__14685 = mode;
var G__14685__$1 = (((G__14685 instanceof cljs.core.Keyword))?G__14685.fqn:null);
switch (G__14685__$1) {
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