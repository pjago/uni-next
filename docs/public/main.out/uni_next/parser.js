// Compiled by ClojureScript 1.9.542 {}
goog.provide('uni_next.parser');
goog.require('cljs.core');
uni_next.parser._STAR_taxonomy_STAR_ = cljs.core.assoc.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY);
uni_next.parser.parents = (function uni_next$parser$parents(x){
return cljs.core.parents.call(null,uni_next.parser._STAR_taxonomy_STAR_,x);
});
uni_next.parser.ancestors = (function uni_next$parser$ancestors(x){
return cljs.core.ancestors.call(null,uni_next.parser._STAR_taxonomy_STAR_,x);
});
uni_next.parser.descendants = (function uni_next$parser$descendants(x){
return cljs.core.descendants.call(null,uni_next.parser._STAR_taxonomy_STAR_,x);
});
uni_next.parser.mutation_QMARK_ = (function uni_next$parser$mutation_QMARK_(p1__10623_SHARP_){
return cljs.core.isa_QMARK_.call(null,uni_next.parser._STAR_taxonomy_STAR_,p1__10623_SHARP_,new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null));
});
uni_next.parser.mutation = (function uni_next$parser$mutation(p1__10626_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149).cljs$core$IFn$_invoke$arity$1(uni_next.parser._STAR_taxonomy_STAR_),p1__10626_SHARP_);
});
uni_next.parser.split = (function uni_next$parser$split(a_var){
var ns_SINGLEQUOTE_ = cljs.core.subs.call(null,cljs.core.re_find.call(null,/#'.*?(?=\/)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_var)].join('')),(2));
var s_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.subs.call(null,cljs.core.re_find.call(null,/\/.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_var)].join('')),(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_], null);
});
uni_next.parser.resolve_xf = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__10628_SHARP_){
return uni_next.parser.mutation_QMARK_.call(null,cljs.core.key.call(null,p1__10628_SHARP_));
})),cljs.core.mapcat.call(null,cljs.core.val),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.symbol,cljs.core.second,uni_next.parser.split),cljs.core.deref)));
uni_next.parser.branch_xf = cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (p1__10633_SHARP_){
return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.first.call(null,p1__10633_SHARP_)], null);
}),cljs.core.second.call(null,p1__10633_SHARP_));
})),cljs.core.map.call(null,(function (p1__10635_SHARP_){
if(cljs.core.truth_(uni_next.parser.mutation_QMARK_.call(null,cljs.core.second.call(null,p1__10635_SHARP_)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.second.call(null,uni_next.parser.split.call(null,cljs.core.first.call(null,p1__10635_SHARP_)))),cljs.core.second.call(null,p1__10635_SHARP_)], null);
} else {
return p1__10635_SHARP_;
}
})));
uni_next.parser.add = (function uni_next$parser$add(taxons){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__10695 = null;
var G__10695__1 = (function (h){
return h;
});
var G__10695__2 = (function (h,p__10649){
var vec__10650 = p__10649;
var k = cljs.core.nth.call(null,vec__10650,(0),null);
var v = cljs.core.nth.call(null,vec__10650,(1),null);
return cljs.core.derive.call(null,h,k,v);
});
G__10695 = function(h,p__10649){
switch(arguments.length){
case 1:
return G__10695__1.call(this,h);
case 2:
return G__10695__2.call(this,h,p__10649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10695.cljs$core$IFn$_invoke$arity$1 = G__10695__1;
G__10695.cljs$core$IFn$_invoke$arity$2 = G__10695__2;
return G__10695;
})()
,uni_next.parser._STAR_taxonomy_STAR_,taxons),new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.into.call(null,new cljs.core.Keyword(null,"mutations","mutations",338814149).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),uni_next.parser.resolve_xf,taxons)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__10752 = null;
var G__10752__1 = (function (c){
return c;
});
var G__10752__2 = (function (c,p__10680){
var vec__10682 = p__10680;
var k = cljs.core.nth.call(null,vec__10682,(0),null);
var v = cljs.core.nth.call(null,vec__10682,(1),null);
return cljs.core.update.call(null,c,v,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),k);
});
G__10752 = function(c,p__10680){
switch(arguments.length){
case 1:
return G__10752__1.call(this,c);
case 2:
return G__10752__2.call(this,c,p__10680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10752.cljs$core$IFn$_invoke$arity$1 = G__10752__1;
G__10752.cljs$core$IFn$_invoke$arity$2 = G__10752__2;
return G__10752;
})()
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),taxons));
});
uni_next.parser.del = (function uni_next$parser$del(taxons){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__10772 = null;
var G__10772__1 = (function (h){
return h;
});
var G__10772__2 = (function (h,p__10764){
var vec__10765 = p__10764;
var k = cljs.core.nth.call(null,vec__10765,(0),null);
var v = cljs.core.nth.call(null,vec__10765,(1),null);
return cljs.core.underive.call(null,h,k,v);
});
G__10772 = function(h,p__10764){
switch(arguments.length){
case 1:
return G__10772__1.call(this,h);
case 2:
return G__10772__2.call(this,h,p__10764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10772.cljs$core$IFn$_invoke$arity$1 = G__10772__1;
G__10772.cljs$core$IFn$_invoke$arity$2 = G__10772__2;
return G__10772;
})()
,uni_next.parser._STAR_taxonomy_STAR_,taxons),new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.transduce.call(null,cljs.core.comp.call(null,uni_next.parser.resolve_xf,cljs.core.map.call(null,cljs.core.first)),cljs.core.dissoc,new cljs.core.Keyword(null,"mutations","mutations",338814149).cljs$core$IFn$_invoke$arity$2(uni_next.parser._STAR_taxonomy_STAR_,cljs.core.PersistentArrayMap.EMPTY),taxons)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.transduce.call(null,uni_next.parser.branch_xf,(function() {
var G__10775 = null;
var G__10775__1 = (function (c){
return c;
});
var G__10775__2 = (function (c,p__10768){
var vec__10769 = p__10768;
var k = cljs.core.nth.call(null,vec__10769,(0),null);
var v = cljs.core.nth.call(null,vec__10769,(1),null);
return cljs.core.update.call(null,c,v,cljs.core.fnil.call(null,cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),k);
});
G__10775 = function(c,p__10768){
switch(arguments.length){
case 1:
return G__10775__1.call(this,c);
case 2:
return G__10775__2.call(this,c,p__10768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10775.cljs$core$IFn$_invoke$arity$1 = G__10775__1;
G__10775.cljs$core$IFn$_invoke$arity$2 = G__10775__2;
return G__10775;
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
var hierarchy__9145__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return uni_next.parser._STAR_taxonomy_STAR_;},new cljs.core.Symbol("uni-next.parser","*taxonomy*","uni-next.parser/*taxonomy*",-1623269284,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.parser","uni-next.parser",1783172783,null),new cljs.core.Symbol(null,"*taxonomy*","*taxonomy*",523190905,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/d43/4j9ki9/uni_next/parser.cljc",26,1,true,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(uni_next.parser._STAR_taxonomy_STAR_)?uni_next.parser._STAR_taxonomy_STAR_.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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
var hierarchy__9145__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return uni_next.parser._STAR_taxonomy_STAR_;},new cljs.core.Symbol("uni-next.parser","*taxonomy*","uni-next.parser/*taxonomy*",-1623269284,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uni-next.parser","uni-next.parser",1783172783,null),new cljs.core.Symbol(null,"*taxonomy*","*taxonomy*",523190905,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/d43/4j9ki9/uni_next/parser.cljc",26,1,true,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(uni_next.parser._STAR_taxonomy_STAR_)?uni_next.parser._STAR_taxonomy_STAR_.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"uni-next.parser","mutate"),((function (method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__){
return (function (_,key,___$1){
return key;
});})(method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__10923,key,_){
var map__10924 = p__10923;
var map__10924__$1 = ((((!((map__10924 == null)))?((((map__10924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10924):map__10924);
var state = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var temp__5276__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,state),key);
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
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword("app","component","app/component",1555903341),(function (p__10984,key,p__10985){
var map__10986 = p__10984;
var map__10986__$1 = ((((!((map__10986 == null)))?((((map__10986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10986):map__10986);
var env = map__10986__$1;
var state = cljs.core.get.call(null,map__10986__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var uid = cljs.core.get.call(null,map__10986__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var reconciler = cljs.core.get.call(null,map__10986__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__10987 = p__10985;
var map__10987__$1 = ((((!((map__10987 == null)))?((((map__10987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10987):map__10987);
var ks = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var as = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var uid_STAR_ = (function (){var or__8110__auto__ = uni_next.parser.peek_id.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return uid;
}
})();
var get_one = ((function (uid_STAR_,map__10986,map__10986__$1,env,state,uid,reconciler,map__10987,map__10987__$1,ks,as){
return (function uni_next$parser$get_one(data){
if(!((uid_STAR_ == null))){
var G__11021 = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,uid_STAR_], null));
if(!((ks == null))){
return cljs.core.select_keys.call(null,G__11021,ks);
} else {
return G__11021;
}
} else {
var it = cljs.core.get.call(null,data,key);
if((ks == null)){
return it;
} else {
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,it),cljs.core.map.call(null,((function (it,uid_STAR_,map__10986,map__10986__$1,env,state,uid,reconciler,map__10987,map__10987__$1,ks,as){
return (function (p1__10982_SHARP_){
return cljs.core.select_keys.call(null,p1__10982_SHARP_,ks);
});})(it,uid_STAR_,map__10986,map__10986__$1,env,state,uid,reconciler,map__10987,map__10987__$1,ks,as))
,cljs.core.vals.call(null,it)));
}
}
});})(uid_STAR_,map__10986,map__10986__$1,env,state,uid,reconciler,map__10987,map__10987__$1,ks,as))
;
if(!((as == null))){
var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
var hidx = cljs.core.deref.call(null,hist.index);
var harr = hist.arr;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.mapv.call(null,cljs.core.comp.call(null,get_one,((function (hist,hidx,harr,uid_STAR_,map__10986,map__10986__$1,env,state,uid,reconciler,map__10987,map__10987__$1,ks,as){
return (function (p1__10983_SHARP_){
return cljs.core.get.call(null,hidx,p1__10983_SHARP_);
});})(hist,hidx,harr,uid_STAR_,map__10986,map__10986__$1,env,state,uid,reconciler,map__10987,map__10987__$1,ks,as))
),(((as > (0)))?cljs.core.take_last.call(null,as,harr):cljs.core.drop_last.call(null,(- as),harr)))], null);
} else {
var temp__5276__auto__ = get_one.call(null,cljs.core.deref.call(null,state));
if(cljs.core.truth_(temp__5276__auto__)){
var found = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),found], null);
} else {
return null;
}
}
}));
uni_next.parser.children = (function uni_next$parser$children(var_args){
var args11089 = [];
var len__9331__auto___11120 = arguments.length;
var i__9332__auto___11121 = (0);
while(true){
if((i__9332__auto___11121 < len__9331__auto___11120)){
args11089.push((arguments[i__9332__auto___11121]));

var G__11159 = (i__9332__auto___11121 + (1));
i__9332__auto___11121 = G__11159;
continue;
} else {
}
break;
}

var G__11119 = args11089.length;
switch (G__11119) {
case 1:
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9354__auto__ = (new cljs.core.IndexedSeq(args11089.slice((2)),(0),null));
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

uni_next.parser.children.cljs$lang$applyTo = (function (seq11090){
var G__11091 = cljs.core.first.call(null,seq11090);
var seq11090__$1 = cljs.core.next.call(null,seq11090);
var G__11092 = cljs.core.first.call(null,seq11090__$1);
var seq11090__$2 = cljs.core.next.call(null,seq11090__$1);
return uni_next.parser.children.cljs$core$IFn$_invoke$arity$variadic(G__11091,G__11092,seq11090__$2);
});

uni_next.parser.children.cljs$lang$maxFixedArity = (2);

uni_next.parser.full_query = (function uni_next$parser$full_query(uid){
return cljs.core.into.call(null,cljs.core.vec.call(null,uni_next.parser.children.call(null,new cljs.core.Keyword("app","component","app/component",1555903341))),cljs.core.comp.call(null,cljs.core.remove.call(null,(function (p1__11215_SHARP_){
return cljs.core.isa_QMARK_.call(null,uni_next.parser._STAR_taxonomy_STAR_,uid,p1__11215_SHARP_);
})),cljs.core.filter.call(null,(function (p1__11216_SHARP_){
return cljs.core.seq.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,uni_next.parser.children,p1__11216_SHARP_),uni_next.parser.children.call(null,uid)));
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
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword("app","type","app/type",1175537581),(function (p__11230,key,_){
var map__11231 = p__11230;
var map__11231__$1 = ((((!((map__11231 == null)))?((((map__11231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11231):map__11231);
var env = map__11231__$1;
var map__11232 = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__11232__$1 = ((((!((map__11232 == null)))?((((map__11232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11232):map__11232);
var maybe_ident = cljs.core.get.call(null,map__11232__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__11232__$1,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
var parser = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var uid = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400),key);
var union_recur = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"union-recur","union-recur",1259398681));
var only = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"only","only",1907811652),uni_next.parser.children.call(null,key));
var level = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"level","level",1290497552),(1));
if(cljs.core.vector_QMARK_.call(null,maybe_ident)){
var temp__5276__auto__ = uni_next.parser.peek_id.call(null,maybe_ident);
if(cljs.core.truth_(temp__5276__auto__)){
var uid_STAR_ = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.some.call(null,((function (uid_STAR_,temp__5276__auto__,map__11231,map__11231__$1,env,map__11232,map__11232__$1,maybe_ident,query,parser,uid,union_recur,only,level){
return (function (p1__11227_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__11227_SHARP_)),key)){
return p1__11227_SHARP_;
} else {
return null;
}
});})(uid_STAR_,temp__5276__auto__,map__11231,map__11231__$1,env,map__11232,map__11232__$1,maybe_ident,query,parser,uid,union_recur,only,level))
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,cljs.core.val),parser.call(null,env_STAR_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (env_STAR_,map__11231,map__11231__$1,env,map__11232,map__11232__$1,maybe_ident,query,parser,uid,union_recur,only,level){
return (function (p1__11228_SHARP_){
return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__11228_SHARP_);
});})(env_STAR_,map__11231,map__11231__$1,env,map__11232,map__11232__$1,maybe_ident,query,parser,uid,union_recur,only,level))
),query)))], null);
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var env_STAR_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",1907811652),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,uni_next.parser.children),only));
var temp__5276__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,only,uni_next.parser.children.call(null,uid,key)));
if(temp__5276__auto__){
var uids = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.mapv.call(null,((function (uids,temp__5276__auto__,env_STAR_,map__11231,map__11231__$1,env,map__11232,map__11232__$1,maybe_ident,query,parser,uid,union_recur,only,level){
return (function (p1__11229_SHARP_){
return cljs.core.with_meta.call(null,parser.call(null,cljs.core.assoc.call(null,env_STAR_,new cljs.core.Keyword(null,"uid","uid",-1447769400),p1__11229_SHARP_),query),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),p1__11229_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),key], null));
});})(uids,temp__5276__auto__,env_STAR_,map__11231,map__11231__$1,env,map__11232,map__11232__$1,maybe_ident,query,parser,uid,union_recur,only,level))
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
cljs.core._add_method.call(null,uni_next.parser.locate,new cljs.core.Keyword("db","component","db/component",1555933588),(function (p__11292,key,_){
var map__11293 = p__11292;
var map__11293__$1 = ((((!((map__11293 == null)))?((((map__11293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11293):map__11293);
var state = cljs.core.get.call(null,map__11293__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var uid = cljs.core.get.call(null,map__11293__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var ast = cljs.core.get.call(null,map__11293__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","component","db/component",1555933588),cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,uid], null))], null);
}));
uni_next.parser.realize = (function uni_next$parser$realize(parser,env,params){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,params),cljs.core.vals.call(null,parser.call(null,env,cljs.core.vec.call(null,cljs.core.vals.call(null,params)))));
});
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","system","app/system",1611578314,null),(function (p__11300,key,_){
var map__11301 = p__11300;
var map__11301__$1 = ((((!((map__11301 == null)))?((((map__11301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11301):map__11301);
var env = map__11301__$1;
var state = cljs.core.get.call(null,map__11301__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var parser = cljs.core.get.call(null,map__11301__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__11301__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11301,map__11301__$1,env,state,parser,query){
return (function (){
return cljs.core.mapv.call(null,((function (map__11301,map__11301__$1,env,state,parser,query){
return (function (p__11303){
var vec__11304 = p__11303;
var k = cljs.core.nth.call(null,vec__11304,(0),null);
var q = cljs.core.nth.call(null,vec__11304,(1),null);
return cljs.core.with_meta.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"component","component",1555936782),k),q),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),k], null));
});})(map__11301,map__11301__$1,env,state,parser,query))
,query);
});})(map__11301,map__11301__$1,env,state,parser,query))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","mutation","app/mutation",1354677908,null),(function (p__11324,key,params){
var map__11325 = p__11324;
var map__11325__$1 = ((((!((map__11325 == null)))?((((map__11325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11325):map__11325);
var env = map__11325__$1;
var state = cljs.core.get.call(null,map__11325__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var parser = cljs.core.get.call(null,map__11325__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var component = cljs.core.get.call(null,map__11325__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11325,map__11325__$1,env,state,parser,component){
return (function (){
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,state,cljs.core.update,component,uni_next.parser.mutation.call(null,key),uni_next.parser.realize.call(null,parser,env,params)),component);
});})(map__11325,map__11325__$1,env,state,parser,component))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","reset","app/reset",839578498,null),(function (p__11342,_,p__11352){
var map__11353 = p__11342;
var map__11353__$1 = ((((!((map__11353 == null)))?((((map__11353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11353):map__11353);
var state = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11354 = p__11352;
var map__11354__$1 = ((((!((map__11354 == null)))?((((map__11354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11354):map__11354);
var path = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11353,map__11353__$1,state,map__11354,map__11354__$1,path,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,value);
});})(map__11353,map__11353__$1,state,map__11354,map__11354__$1,path,value))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","add","app/add",1875379493,null),(function (p__11368,_,p__11369){
var map__11373 = p__11368;
var map__11373__$1 = ((((!((map__11373 == null)))?((((map__11373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11373):map__11373);
var state = cljs.core.get.call(null,map__11373__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11374 = p__11369;
var map__11374__$1 = ((((!((map__11374 == null)))?((((map__11374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11374):map__11374);
var path = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11373,map__11373__$1,state,map__11374,map__11374__$1,path,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core._PLUS_,value);
});})(map__11373,map__11373__$1,state,map__11374,map__11374__$1,path,value))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","increment","app/increment",81538792,null),(function (p__11386,_,p__11387){
var map__11388 = p__11386;
var map__11388__$1 = ((((!((map__11388 == null)))?((((map__11388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11388):map__11388);
var state = cljs.core.get.call(null,map__11388__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11390 = p__11387;
var map__11390__$1 = ((((!((map__11390 == null)))?((((map__11390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11390):map__11390);
var path = cljs.core.get.call(null,map__11390__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11388,map__11388__$1,state,map__11390,map__11390__$1,path){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core.inc);
});})(map__11388,map__11388__$1,state,map__11390,map__11390__$1,path))
], null);
}));
cljs.core._add_method.call(null,uni_next.parser.mutate,new cljs.core.Symbol("app","decrement","app/decrement",915017473,null),(function (p__11404,_,p__11405){
var map__11406 = p__11404;
var map__11406__$1 = ((((!((map__11406 == null)))?((((map__11406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11406):map__11406);
var state = cljs.core.get.call(null,map__11406__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11407 = p__11405;
var map__11407__$1 = ((((!((map__11407 == null)))?((((map__11407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11407):map__11407);
var path = cljs.core.get.call(null,map__11407__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11406,map__11406__$1,state,map__11407,map__11407__$1,path){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core.dec);
});})(map__11406,map__11406__$1,state,map__11407,map__11407__$1,path))
], null);
}));

//# sourceMappingURL=parser.js.map