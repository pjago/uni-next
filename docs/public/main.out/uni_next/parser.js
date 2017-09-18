// Compiled by ClojureScript 1.9.542 {}
goog.provide('uni_next.parser');
goog.require('cljs.core');
uni_next.parser._STAR_taxonomy_STAR_ = cljs.core.assoc.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword(null,"systems","systems",-1015374944),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY);
uni_next.parser.parents = (function uni_next$parser$parents(x){
return cljs.core.parents.call(null,uni_next.parser._STAR_taxonomy_STAR_,x);
});
uni_next.parser.ancestors = (function uni_next$parser$ancestors(x){
return cljs.core.ancestors.call(null,uni_next.parser._STAR_taxonomy_STAR_,x);
});
uni_next.parser.descendants = (function uni_next$parser$descendants(x){
return cljs.core.descendants.call(null,uni_next.parser._STAR_taxonomy_STAR_,x);
});
uni_next.parser.system = (function uni_next$parser$system(p1__10698_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(uni_next.parser._STAR_taxonomy_STAR_),p1__10698_SHARP_);
});
uni_next.parser.system_QMARK_ = (function uni_next$parser$system_QMARK_(p1__10699_SHARP_){
return cljs.core.isa_QMARK_.call(null,uni_next.parser._STAR_taxonomy_STAR_,p1__10699_SHARP_,new cljs.core.Symbol("app","system","app/system",1611578314,null));
});
uni_next.parser.mutation = (function uni_next$parser$mutation(p1__10734_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149).cljs$core$IFn$_invoke$arity$1(uni_next.parser._STAR_taxonomy_STAR_),p1__10734_SHARP_);
});
uni_next.parser.mutation_QMARK_ = (function uni_next$parser$mutation_QMARK_(p1__10736_SHARP_){
return cljs.core.isa_QMARK_.call(null,uni_next.parser._STAR_taxonomy_STAR_,p1__10736_SHARP_,new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null));
});
uni_next.parser.split = (function uni_next$parser$split(a_var){
var ns_SINGLEQUOTE_ = cljs.core.subs.call(null,cljs.core.re_find.call(null,/#'.*?(?=\/)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_var)].join('')),(2));
var s_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.subs.call(null,cljs.core.re_find.call(null,/\/.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_var)].join('')),(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_], null);
});
uni_next.parser.resolve_xf = (function uni_next$parser$resolve_xf(pred){
return cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__10774_SHARP_){
return pred.call(null,cljs.core.key.call(null,p1__10774_SHARP_));
})),cljs.core.mapcat.call(null,cljs.core.val),cljs.core.filter.call(null,(function (p1__10775_SHARP_){
return cljs.core.var_QMARK_.call(null,p1__10775_SHARP_);
})),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.symbol,cljs.core.second,uni_next.parser.split),cljs.core.deref)));
});
uni_next.parser.branch_xf = cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (p1__10776_SHARP_){
return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.first.call(null,p1__10776_SHARP_)], null);
}),cljs.core.second.call(null,p1__10776_SHARP_));
})),cljs.core.map.call(null,(function (p1__10777_SHARP_){
if(cljs.core.var_QMARK_.call(null,cljs.core.first.call(null,p1__10777_SHARP_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.second.call(null,uni_next.parser.split.call(null,cljs.core.first.call(null,p1__10777_SHARP_)))),cljs.core.second.call(null,p1__10777_SHARP_)], null);
} else {
return p1__10777_SHARP_;
}
})));
uni_next.parser.add = (function uni_next$parser$add(taxons){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__10889 = null;
var G__10889__1 = (function (h){
return h;
});
var G__10889__2 = (function (h,p__10881){
var vec__10882 = p__10881;
var k = cljs.core.nth.call(null,vec__10882,(0),null);
var v = cljs.core.nth.call(null,vec__10882,(1),null);
return cljs.core.derive.call(null,h,k,v);
});
G__10889 = function(h,p__10881){
switch(arguments.length){
case 1:
return G__10889__1.call(this,h);
case 2:
return G__10889__2.call(this,h,p__10881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10889.cljs$core$IFn$_invoke$arity$1 = G__10889__1;
G__10889.cljs$core$IFn$_invoke$arity$2 = G__10889__2;
return G__10889;
})()
,uni_next.parser._STAR_taxonomy_STAR_,taxons),new cljs.core.Keyword(null,"systems","systems",-1015374944),cljs.core.into.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),uni_next.parser.resolve_xf.call(null,uni_next.parser.system_QMARK_),taxons)),new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.into.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),uni_next.parser.resolve_xf.call(null,uni_next.parser.mutation_QMARK_),taxons)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__10961 = null;
var G__10961__1 = (function (c){
return c;
});
var G__10961__2 = (function (c,p__10885){
var vec__10886 = p__10885;
var k = cljs.core.nth.call(null,vec__10886,(0),null);
var v = cljs.core.nth.call(null,vec__10886,(1),null);
return cljs.core.update.call(null,c,v,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),k);
});
G__10961 = function(c,p__10885){
switch(arguments.length){
case 1:
return G__10961__1.call(this,c);
case 2:
return G__10961__2.call(this,c,p__10885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10961.cljs$core$IFn$_invoke$arity$1 = G__10961__1;
G__10961.cljs$core$IFn$_invoke$arity$2 = G__10961__2;
return G__10961;
})()
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),taxons));
});
uni_next.parser.del = (function uni_next$parser$del(taxons){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__11014 = null;
var G__11014__1 = (function (h){
return h;
});
var G__11014__2 = (function (h,p__10982){
var vec__10983 = p__10982;
var k = cljs.core.nth.call(null,vec__10983,(0),null);
var v = cljs.core.nth.call(null,vec__10983,(1),null);
return cljs.core.underive.call(null,h,k,v);
});
G__11014 = function(h,p__10982){
switch(arguments.length){
case 1:
return G__11014__1.call(this,h);
case 2:
return G__11014__2.call(this,h,p__10982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__11014.cljs$core$IFn$_invoke$arity$1 = G__11014__1;
G__11014.cljs$core$IFn$_invoke$arity$2 = G__11014__2;
return G__11014;
})()
,uni_next.parser._STAR_taxonomy_STAR_,taxons),new cljs.core.Keyword(null,"systems","systems",-1015374944),cljs.core.transduce.call(null,cljs.core.comp.call(null,uni_next.parser.resolve_xf.call(null,uni_next.parser.system_QMARK_),cljs.core.map.call(null,cljs.core.first)),cljs.core.dissoc,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),taxons)),new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.transduce.call(null,cljs.core.comp.call(null,uni_next.parser.resolve_xf.call(null,uni_next.parser.mutation_QMARK_),cljs.core.map.call(null,cljs.core.first)),cljs.core.dissoc,new cljs.core.Keyword(null,"mutations","mutations",338814149).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),taxons)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__11034 = null;
var G__11034__1 = (function (c){
return c;
});
var G__11034__2 = (function (c,p__10986){
var vec__11005 = p__10986;
var k = cljs.core.nth.call(null,vec__11005,(0),null);
var v = cljs.core.nth.call(null,vec__11005,(1),null);
return cljs.core.update.call(null,c,v,cljs.core.fnil.call(null,cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),k);
});
G__11034 = function(c,p__10986){
switch(arguments.length){
case 1:
return G__11034__1.call(this,c);
case 2:
return G__11034__2.call(this,c,p__10986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__11034.cljs$core$IFn$_invoke$arity$1 = G__11034__1;
G__11034.cljs$core$IFn$_invoke$arity$2 = G__11034__2;
return G__11034;
})()
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),taxons));
});
uni_next.parser.add_BANG_ = (function uni_next$parser$add_BANG_(taxons){
return uni_next.parser._STAR_taxonomy_STAR_ = uni_next.parser.add.call(null,taxons);
});
uni_next.parser.del_BANG_ = (function uni_next$parser$del_BANG_(taxons){
return uni_next.parser._STAR_taxonomy_STAR_ = uni_next.parser.del.call(null,taxons);
});
if(typeof uni_next.parser.locate !== 'undefined'){
} else {
uni_next.parser.locate = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return uni_next.parser._STAR_taxonomy_STAR_;},new cljs.core.Symbol("uni-next.parser","*taxonomy*","uni-next.parser/*taxonomy*",-1623269284,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.parser","uni-next.parser",1783172783,null),new cljs.core.Symbol(null,"*taxonomy*","*taxonomy*",523190905,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/2ti/4j9ki9/uni_next/parser.cljc",26,1,true,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(uni_next.parser._STAR_taxonomy_STAR_)?uni_next.parser._STAR_taxonomy_STAR_.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"uni-next.parser","locate"),((function (method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__){
return (function (_,key,___$1){
return key;
});})(method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
if(typeof uni_next.parser.mutate !== 'undefined'){
} else {
uni_next.parser.mutate = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return uni_next.parser._STAR_taxonomy_STAR_;},new cljs.core.Symbol("uni-next.parser","*taxonomy*","uni-next.parser/*taxonomy*",-1623269284,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.parser","uni-next.parser",1783172783,null),new cljs.core.Symbol(null,"*taxonomy*","*taxonomy*",523190905,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/2ti/4j9ki9/uni_next/parser.cljc",26,1,true,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(uni_next.parser._STAR_taxonomy_STAR_)?uni_next.parser._STAR_taxonomy_STAR_.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"uni-next.parser","mutate"),((function (method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__){
return (function (_,key,___$1){
return key;
});})(method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__11190,key,_){
var map__11191 = p__11190;
var map__11191__$1 = ((((!((map__11191 == null)))?((((map__11191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11191):map__11191);
var state = cljs.core.get.call(null,map__11191__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var data = cljs.core.get.call(null,map__11191__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,state));
var temp__5276__auto__ = cljs.core.get.call(null,data,key);
if(cljs.core.truth_(temp__5276__auto__)){
var found = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),found], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("uni-next.parser","nil","uni-next.parser/nil",-2048874988)], null);
}
}));
uni_next.parser.peek_id = (function uni_next$parser$peek_id(maybe_ident){
if(cljs.core.vector_QMARK_.call(null,maybe_ident)){
var temp__5276__auto__ = cljs.core.peek.call(null,maybe_ident);
if(cljs.core.truth_(temp__5276__auto__)){
var id = temp__5276__auto__;
if(!(cljs.core._EQ_.call(null,id,new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return id;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword("app","component","app/component",1555903341),(function (p__11200,key,p__11201){
var map__11202 = p__11200;
var map__11202__$1 = ((((!((map__11202 == null)))?((((map__11202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11202):map__11202);
var env = map__11202__$1;
var state = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var data = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,state));
var uid = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var reconciler = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__11212 = p__11201;
var map__11212__$1 = ((((!((map__11212 == null)))?((((map__11212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11212):map__11212);
var ks = cljs.core.get.call(null,map__11212__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var as = cljs.core.get.call(null,map__11212__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var uid_STAR_ = (function (){var or__8110__auto__ = uni_next.parser.peek_id.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return uid;
}
})();
var get_one = ((function (uid_STAR_,map__11202,map__11202__$1,env,state,data,uid,reconciler,map__11212,map__11212__$1,ks,as){
return (function uni_next$parser$get_one(data__$1){
if(!((uid_STAR_ == null))){
var G__11224 = cljs.core.get_in.call(null,data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,uid_STAR_], null));
if(!((ks == null))){
return cljs.core.select_keys.call(null,G__11224,ks);
} else {
return G__11224;
}
} else {
var it = cljs.core.get.call(null,data__$1,key);
if((ks == null)){
return it;
} else {
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,it),cljs.core.map.call(null,((function (it,uid_STAR_,map__11202,map__11202__$1,env,state,data,uid,reconciler,map__11212,map__11212__$1,ks,as){
return (function (p1__11198_SHARP_){
return cljs.core.select_keys.call(null,p1__11198_SHARP_,ks);
});})(it,uid_STAR_,map__11202,map__11202__$1,env,state,data,uid,reconciler,map__11212,map__11212__$1,ks,as))
,cljs.core.vals.call(null,it)));
}
}
});})(uid_STAR_,map__11202,map__11202__$1,env,state,data,uid,reconciler,map__11212,map__11212__$1,ks,as))
;
if(!((as == null))){
var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
var hidx = cljs.core.deref.call(null,hist.index);
var harr = hist.arr;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.mapv.call(null,cljs.core.comp.call(null,get_one,((function (hist,hidx,harr,uid_STAR_,map__11202,map__11202__$1,env,state,data,uid,reconciler,map__11212,map__11212__$1,ks,as){
return (function (p1__11199_SHARP_){
return cljs.core.get.call(null,hidx,p1__11199_SHARP_);
});})(hist,hidx,harr,uid_STAR_,map__11202,map__11202__$1,env,state,data,uid,reconciler,map__11212,map__11212__$1,ks,as))
),cljs.core.rseq.call(null,cljs.core.vec.call(null,cljs.core.take_last.call(null,as,harr))))], null);
} else {
var temp__5276__auto__ = get_one.call(null,data);
if(cljs.core.truth_(temp__5276__auto__)){
var found = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),found], null);
} else {
return null;
}
}
}));
uni_next.parser.children = (function uni_next$parser$children(var_args){
var args11282 = [];
var len__9331__auto___11288 = arguments.length;
var i__9332__auto___11289 = (0);
while(true){
if((i__9332__auto___11289 < len__9331__auto___11288)){
args11282.push((arguments[i__9332__auto___11289]));

var G__11290 = (i__9332__auto___11289 + (1));
i__9332__auto___11289 = G__11290;
continue;
} else {
}
break;
}

var G__11287 = args11282.length;
switch (G__11287) {
case 1:
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args11282.slice((2)),(0),null));
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);

}
});

uni_next.parser.children.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(uni_next.parser._STAR_taxonomy_STAR_),a,cljs.core.PersistentHashSet.EMPTY);
});

uni_next.parser.children.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.set.call(null,cljs.core.filter.call(null,uni_next.parser.children.call(null,a),uni_next.parser.children.call(null,b)));
});

uni_next.parser.children.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,uni_next.parser.children,uni_next.parser.children.call(null,a,b),more);
});

uni_next.parser.children.cljs$lang$applyTo = (function (seq11283){
var G__11284 = cljs.core.first.call(null,seq11283);
var seq11283__$1 = cljs.core.next.call(null,seq11283);
var G__11285 = cljs.core.first.call(null,seq11283__$1);
var seq11283__$2 = cljs.core.next.call(null,seq11283__$1);
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$variadic(G__11284,G__11285,seq11283__$2);
});

uni_next.parser.children.cljs$lang$maxFixedArity = (2);

uni_next.parser.full_query = (function uni_next$parser$full_query(uid){
return cljs.core.into.call(null,cljs.core.vec.call(null,uni_next.parser.children.call(null,new cljs.core.Keyword("app","component","app/component",1555903341))),cljs.core.comp.call(null,cljs.core.remove.call(null,(function (p1__11298_SHARP_){
return cljs.core.isa_QMARK_.call(null,uni_next.parser._STAR_taxonomy_STAR_,uid,p1__11298_SHARP_);
})),cljs.core.filter.call(null,(function (p1__11300_SHARP_){
return cljs.core.seq.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,uni_next.parser.children,p1__11300_SHARP_),uni_next.parser.children.call(null,uid)));
})),cljs.core.map.call(null,(function (type){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
}))),uni_next.parser.children.call(null,new cljs.core.Keyword("app","type","app/type",1175537581)));
});
uni_next.parser.height_level = (function uni_next$parser$height_level(uid){
var temp__5276__auto__ = cljs.core.seq.call(null,uni_next.parser.children.call(null,uid));
if(temp__5276__auto__){
var recur = temp__5276__auto__;
return (cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,uni_next.parser.height_level,recur)) + (1));
} else {
return (0);
}
});
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword("app","type","app/type",1175537581),(function (p__11320,key,_){
var map__11321 = p__11320;
var map__11321__$1 = ((((!((map__11321 == null)))?((((map__11321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11321):map__11321);
var env = map__11321__$1;
var map__11322 = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__11322__$1 = ((((!((map__11322 == null)))?((((map__11322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11322):map__11322);
var maybe_ident = cljs.core.get.call(null,map__11322__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__11322__$1,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
var parser = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var uid = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400),key);
var union_recur = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"union-recur","union-recur",1259398681));
var only = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"only","only",1907811652),uni_next.parser.children.call(null,key));
var level = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"level","level",1290497552),(1));
if(cljs.core.vector_QMARK_.call(null,maybe_ident)){
var temp__5276__auto__ = uni_next.parser.peek_id.call(null,maybe_ident);
if(cljs.core.truth_(temp__5276__auto__)){
var uid_STAR_ = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.some.call(null,((function (uid_STAR_,temp__5276__auto__,map__11321,map__11321__$1,env,map__11322,map__11322__$1,maybe_ident,query,parser,uid,union_recur,only,level){
return (function (p1__11317_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__11317_SHARP_)),key)){
return p1__11317_SHARP_;
} else {
return null;
}
});})(uid_STAR_,temp__5276__auto__,map__11321,map__11321__$1,env,map__11322,map__11322__$1,maybe_ident,query,parser,uid,union_recur,only,level))
,cljs.core.get.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",1907811652),cljs.core.PersistentHashSet.createAsIfByAssoc([uid_STAR_])),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null)),key))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"uid","uid",-1447769400),key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null)),key)], null);
}
} else {
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
if((level > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"level","level",1290497552),(level - (1))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,uni_next.parser.full_query.call(null,uid)])], null)),key)], null);
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var env_STAR_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",1907811652),only,new cljs.core.Keyword(null,"union-recur","union-recur",1259398681),query);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,cljs.core.val),parser.call(null,env_STAR_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (env_STAR_,map__11321,map__11321__$1,env,map__11322,map__11322__$1,maybe_ident,query,parser,uid,union_recur,only,level){
return (function (p1__11318_SHARP_){
return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__11318_SHARP_);
});})(env_STAR_,map__11321,map__11321__$1,env,map__11322,map__11322__$1,maybe_ident,query,parser,uid,union_recur,only,level))
),query)))], null);
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var env_STAR_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",1907811652),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,uni_next.parser.children),only));
var temp__5276__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,only,uni_next.parser.children.call(null,uid,key)));
if(temp__5276__auto__){
var uids = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.mapv.call(null,((function (uids,temp__5276__auto__,env_STAR_,map__11321,map__11321__$1,env,map__11322,map__11322__$1,maybe_ident,query,parser,uid,union_recur,only,level){
return (function (p1__11319_SHARP_){
return cljs.core.with_meta.call(null,parser.call(null,cljs.core.assoc.call(null,env_STAR_,new cljs.core.Keyword(null,"uid","uid",-1447769400),p1__11319_SHARP_),query),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),p1__11319_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),key], null));
});})(uids,temp__5276__auto__,env_STAR_,map__11321,map__11321__$1,env,map__11322,map__11322__$1,maybe_ident,query,parser,uid,union_recur,only,level))
,uids)], null);
} else {
return null;
}
} else {
if(typeof query === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"level","level",1290497552),(level + query)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,(function (){var or__8110__auto__ = cljs.core.get.call(null,union_recur,key);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return uni_next.parser.full_query.call(null,uid);
}
})()])], null)),key)], null);
} else {
if(cljs.core._EQ_.call(null,query,new cljs.core.Symbol(null,"...","...",-1926939749,null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"level","level",1290497552),uni_next.parser.height_level.call(null,uid)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,(function (){var or__8110__auto__ = cljs.core.get.call(null,union_recur,key);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return uni_next.parser.full_query.call(null,uid);
}
})()])], null)),key)], null);
} else {
return null;
}
}
}
}
}
}
}));
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword("db","component","db/component",1555933588),(function (p__11389,key,_){
var map__11390 = p__11389;
var map__11390__$1 = ((((!((map__11390 == null)))?((((map__11390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11390):map__11390);
var state = cljs.core.get.call(null,map__11390__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var uid = cljs.core.get.call(null,map__11390__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var ast = cljs.core.get.call(null,map__11390__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","component","db/component",1555933588),cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,uid], null))], null);
}));
uni_next.parser.realize = (function uni_next$parser$realize(env,params){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,params),cljs.core.vals.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(env).call(null,env,cljs.core.vec.call(null,cljs.core.vals.call(null,params)))));
});
uni_next.parser.compile = (function uni_next$parser$compile(env,query){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapcat.call(null,(function (p__11414){
var vec__11415 = p__11414;
var k = cljs.core.nth.call(null,vec__11415,(0),null);
var q = cljs.core.nth.call(null,vec__11415,(1),null);
return cljs.core.map.call(null,((function (vec__11415,k,q){
return (function (p1__11404_SHARP_){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__11404_SHARP_));
});})(vec__11415,k,q))
,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(env).call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"component","component",1555936782),k),q));
}),query));
});
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","system","app/system",1611578314,null),(function (p__11420,key,_){
var map__11421 = p__11420;
var map__11421__$1 = ((((!((map__11421 == null)))?((((map__11421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11421):map__11421);
var env = map__11421__$1;
var state = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var parser = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.map_QMARK_.call(null,query)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11421,map__11421__$1,env,state,parser,query){
return (function (){
return uni_next.parser._STAR_taxonomy_STAR_ = cljs.core.assoc_in.call(null,uni_next.parser._STAR_taxonomy_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"systems","systems",-1015374944),key], null),uni_next.parser.compile.call(null,env,query));
});})(map__11421,map__11421__$1,env,state,parser,query))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11421,map__11421__$1,env,state,parser,query){
return (function (){
return cljs.core.swap_BANG_.call(null,state,uni_next.parser.system.call(null,key));
});})(map__11421,map__11421__$1,env,state,parser,query))
], null);
}
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null),(function (p__11447,key,params){
var map__11448 = p__11447;
var map__11448__$1 = ((((!((map__11448 == null)))?((((map__11448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11448):map__11448);
var env = map__11448__$1;
var state = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var parser = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var component = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var zip = ((function (map__11448,map__11448__$1,env,state,parser,component){
return (function uni_next$parser$zip(f,env__$1){
return ((function (map__11448,map__11448__$1,env,state,parser,component){
return (function (p1__11446_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__11448,map__11448__$1,env,state,parser,component){
return (function (p__11465){
var vec__11466 = p__11465;
var k = cljs.core.nth.call(null,vec__11466,(0),null);
var v = cljs.core.nth.call(null,vec__11466,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v,uni_next.parser.realize.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400),k),params))], null);
});})(map__11448,map__11448__$1,env,state,parser,component))
),p1__11446_SHARP_);
});
;})(map__11448,map__11448__$1,env,state,parser,component))
});})(map__11448,map__11448__$1,env,state,parser,component))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11448,map__11448__$1,env,state,parser,component){
return (function (){
return ((function (map__11448,map__11448__$1,env,state,parser,component){
return (function (x){
return cljs.core.update.call(null,x,component,zip.call(null,uni_next.parser.mutation.call(null,key),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"data","data",-232669377),x)));
});
;})(map__11448,map__11448__$1,env,state,parser,component))
});})(map__11448,map__11448__$1,env,state,parser,component))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","reset","app/reset",839578498,null),(function (p__11480,_,p__11481){
var map__11482 = p__11480;
var map__11482__$1 = ((((!((map__11482 == null)))?((((map__11482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11482):map__11482);
var state = cljs.core.get.call(null,map__11482__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11483 = p__11481;
var map__11483__$1 = ((((!((map__11483 == null)))?((((map__11483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11483):map__11483);
var path = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11482,map__11482__$1,state,map__11483,map__11483__$1,path,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,value);
});})(map__11482,map__11482__$1,state,map__11483,map__11483__$1,path,value))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","add","app/add",1875379493,null),(function (p__11486,_,p__11487){
var map__11488 = p__11486;
var map__11488__$1 = ((((!((map__11488 == null)))?((((map__11488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11488):map__11488);
var state = cljs.core.get.call(null,map__11488__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11489 = p__11487;
var map__11489__$1 = ((((!((map__11489 == null)))?((((map__11489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11489):map__11489);
var path = cljs.core.get.call(null,map__11489__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__11489__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11488,map__11488__$1,state,map__11489,map__11489__$1,path,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core._PLUS_,value);
});})(map__11488,map__11488__$1,state,map__11489,map__11489__$1,path,value))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","increment","app/increment",81538792,null),(function (p__11500,_,p__11501){
var map__11502 = p__11500;
var map__11502__$1 = ((((!((map__11502 == null)))?((((map__11502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11502):map__11502);
var state = cljs.core.get.call(null,map__11502__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11503 = p__11501;
var map__11503__$1 = ((((!((map__11503 == null)))?((((map__11503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11503):map__11503);
var path = cljs.core.get.call(null,map__11503__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11502,map__11502__$1,state,map__11503,map__11503__$1,path){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core.inc);
});})(map__11502,map__11502__$1,state,map__11503,map__11503__$1,path))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","decrement","app/decrement",915017473,null),(function (p__11510,_,p__11511){
var map__11512 = p__11510;
var map__11512__$1 = ((((!((map__11512 == null)))?((((map__11512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11512):map__11512);
var state = cljs.core.get.call(null,map__11512__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11513 = p__11511;
var map__11513__$1 = ((((!((map__11513 == null)))?((((map__11513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11513):map__11513);
var path = cljs.core.get.call(null,map__11513__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11512,map__11512__$1,state,map__11513,map__11513__$1,path){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core.dec);
});})(map__11512,map__11512__$1,state,map__11513,map__11513__$1,path))
], null);
}));

//# sourceMappingURL=parser.js.map