// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__8110__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__8110__auto__){
return or__8110__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__8110__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24056_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24056_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24062 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24063 = null;
var count__24064 = (0);
var i__24065 = (0);
while(true){
if((i__24065 < count__24064)){
var n = cljs.core._nth.call(null,chunk__24063,i__24065);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24067 = seq__24062;
var G__24068 = chunk__24063;
var G__24069 = count__24064;
var G__24070 = (i__24065 + (1));
seq__24062 = G__24067;
chunk__24063 = G__24068;
count__24064 = G__24069;
i__24065 = G__24070;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__24062);
if(temp__5278__auto__){
var seq__24062__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24062__$1)){
var c__9021__auto__ = cljs.core.chunk_first.call(null,seq__24062__$1);
var G__24071 = cljs.core.chunk_rest.call(null,seq__24062__$1);
var G__24072 = c__9021__auto__;
var G__24073 = cljs.core.count.call(null,c__9021__auto__);
var G__24074 = (0);
seq__24062 = G__24071;
chunk__24063 = G__24072;
count__24064 = G__24073;
i__24065 = G__24074;
continue;
} else {
var n = cljs.core.first.call(null,seq__24062__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24075 = cljs.core.next.call(null,seq__24062__$1);
var G__24076 = null;
var G__24077 = (0);
var G__24078 = (0);
seq__24062 = G__24075;
chunk__24063 = G__24076;
count__24064 = G__24077;
i__24065 = G__24078;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24136_24150 = cljs.core.seq.call(null,deps);
var chunk__24137_24151 = null;
var count__24138_24152 = (0);
var i__24139_24153 = (0);
while(true){
if((i__24139_24153 < count__24138_24152)){
var dep_24155 = cljs.core._nth.call(null,chunk__24137_24151,i__24139_24153);
topo_sort_helper_STAR_.call(null,dep_24155,(depth + (1)),state);

var G__24156 = seq__24136_24150;
var G__24157 = chunk__24137_24151;
var G__24158 = count__24138_24152;
var G__24159 = (i__24139_24153 + (1));
seq__24136_24150 = G__24156;
chunk__24137_24151 = G__24157;
count__24138_24152 = G__24158;
i__24139_24153 = G__24159;
continue;
} else {
var temp__5278__auto___24160 = cljs.core.seq.call(null,seq__24136_24150);
if(temp__5278__auto___24160){
var seq__24136_24163__$1 = temp__5278__auto___24160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24136_24163__$1)){
var c__9021__auto___24165 = cljs.core.chunk_first.call(null,seq__24136_24163__$1);
var G__24166 = cljs.core.chunk_rest.call(null,seq__24136_24163__$1);
var G__24167 = c__9021__auto___24165;
var G__24168 = cljs.core.count.call(null,c__9021__auto___24165);
var G__24169 = (0);
seq__24136_24150 = G__24166;
chunk__24137_24151 = G__24167;
count__24138_24152 = G__24168;
i__24139_24153 = G__24169;
continue;
} else {
var dep_24170 = cljs.core.first.call(null,seq__24136_24163__$1);
topo_sort_helper_STAR_.call(null,dep_24170,(depth + (1)),state);

var G__24171 = cljs.core.next.call(null,seq__24136_24163__$1);
var G__24172 = null;
var G__24173 = (0);
var G__24174 = (0);
seq__24136_24150 = G__24171;
chunk__24137_24151 = G__24172;
count__24138_24152 = G__24173;
i__24139_24153 = G__24174;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24140){
var vec__24144 = p__24140;
var seq__24145 = cljs.core.seq.call(null,vec__24144);
var first__24146 = cljs.core.first.call(null,seq__24145);
var seq__24145__$1 = cljs.core.next.call(null,seq__24145);
var x = first__24146;
var xs = seq__24145__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24144,seq__24145,first__24146,seq__24145__$1,x,xs,get_deps__$1){
return (function (p1__24079_SHARP_){
return clojure.set.difference.call(null,p1__24079_SHARP_,x);
});})(vec__24144,seq__24145,first__24146,seq__24145__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24192 = cljs.core.seq.call(null,provides);
var chunk__24193 = null;
var count__24194 = (0);
var i__24195 = (0);
while(true){
if((i__24195 < count__24194)){
var prov = cljs.core._nth.call(null,chunk__24193,i__24195);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24196_24207 = cljs.core.seq.call(null,requires);
var chunk__24197_24208 = null;
var count__24198_24209 = (0);
var i__24199_24210 = (0);
while(true){
if((i__24199_24210 < count__24198_24209)){
var req_24211 = cljs.core._nth.call(null,chunk__24197_24208,i__24199_24210);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24211,prov);

var G__24212 = seq__24196_24207;
var G__24213 = chunk__24197_24208;
var G__24214 = count__24198_24209;
var G__24215 = (i__24199_24210 + (1));
seq__24196_24207 = G__24212;
chunk__24197_24208 = G__24213;
count__24198_24209 = G__24214;
i__24199_24210 = G__24215;
continue;
} else {
var temp__5278__auto___24216 = cljs.core.seq.call(null,seq__24196_24207);
if(temp__5278__auto___24216){
var seq__24196_24217__$1 = temp__5278__auto___24216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24196_24217__$1)){
var c__9021__auto___24218 = cljs.core.chunk_first.call(null,seq__24196_24217__$1);
var G__24219 = cljs.core.chunk_rest.call(null,seq__24196_24217__$1);
var G__24220 = c__9021__auto___24218;
var G__24221 = cljs.core.count.call(null,c__9021__auto___24218);
var G__24222 = (0);
seq__24196_24207 = G__24219;
chunk__24197_24208 = G__24220;
count__24198_24209 = G__24221;
i__24199_24210 = G__24222;
continue;
} else {
var req_24223 = cljs.core.first.call(null,seq__24196_24217__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24223,prov);

var G__24224 = cljs.core.next.call(null,seq__24196_24217__$1);
var G__24225 = null;
var G__24226 = (0);
var G__24227 = (0);
seq__24196_24207 = G__24224;
chunk__24197_24208 = G__24225;
count__24198_24209 = G__24226;
i__24199_24210 = G__24227;
continue;
}
} else {
}
}
break;
}

var G__24228 = seq__24192;
var G__24229 = chunk__24193;
var G__24230 = count__24194;
var G__24231 = (i__24195 + (1));
seq__24192 = G__24228;
chunk__24193 = G__24229;
count__24194 = G__24230;
i__24195 = G__24231;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__24192);
if(temp__5278__auto__){
var seq__24192__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24192__$1)){
var c__9021__auto__ = cljs.core.chunk_first.call(null,seq__24192__$1);
var G__24233 = cljs.core.chunk_rest.call(null,seq__24192__$1);
var G__24234 = c__9021__auto__;
var G__24235 = cljs.core.count.call(null,c__9021__auto__);
var G__24236 = (0);
seq__24192 = G__24233;
chunk__24193 = G__24234;
count__24194 = G__24235;
i__24195 = G__24236;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24192__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24200_24237 = cljs.core.seq.call(null,requires);
var chunk__24201_24238 = null;
var count__24202_24239 = (0);
var i__24203_24240 = (0);
while(true){
if((i__24203_24240 < count__24202_24239)){
var req_24241 = cljs.core._nth.call(null,chunk__24201_24238,i__24203_24240);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24241,prov);

var G__24242 = seq__24200_24237;
var G__24243 = chunk__24201_24238;
var G__24244 = count__24202_24239;
var G__24245 = (i__24203_24240 + (1));
seq__24200_24237 = G__24242;
chunk__24201_24238 = G__24243;
count__24202_24239 = G__24244;
i__24203_24240 = G__24245;
continue;
} else {
var temp__5278__auto___24246__$1 = cljs.core.seq.call(null,seq__24200_24237);
if(temp__5278__auto___24246__$1){
var seq__24200_24247__$1 = temp__5278__auto___24246__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24200_24247__$1)){
var c__9021__auto___24248 = cljs.core.chunk_first.call(null,seq__24200_24247__$1);
var G__24249 = cljs.core.chunk_rest.call(null,seq__24200_24247__$1);
var G__24250 = c__9021__auto___24248;
var G__24251 = cljs.core.count.call(null,c__9021__auto___24248);
var G__24252 = (0);
seq__24200_24237 = G__24249;
chunk__24201_24238 = G__24250;
count__24202_24239 = G__24251;
i__24203_24240 = G__24252;
continue;
} else {
var req_24255 = cljs.core.first.call(null,seq__24200_24247__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24255,prov);

var G__24257 = cljs.core.next.call(null,seq__24200_24247__$1);
var G__24258 = null;
var G__24259 = (0);
var G__24260 = (0);
seq__24200_24237 = G__24257;
chunk__24201_24238 = G__24258;
count__24202_24239 = G__24259;
i__24203_24240 = G__24260;
continue;
}
} else {
}
}
break;
}

var G__24261 = cljs.core.next.call(null,seq__24192__$1);
var G__24262 = null;
var G__24263 = (0);
var G__24264 = (0);
seq__24192 = G__24261;
chunk__24193 = G__24262;
count__24194 = G__24263;
i__24195 = G__24264;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24269_24273 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24270_24274 = null;
var count__24271_24275 = (0);
var i__24272_24276 = (0);
while(true){
if((i__24272_24276 < count__24271_24275)){
var ns_24277 = cljs.core._nth.call(null,chunk__24270_24274,i__24272_24276);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24277);

var G__24279 = seq__24269_24273;
var G__24280 = chunk__24270_24274;
var G__24281 = count__24271_24275;
var G__24282 = (i__24272_24276 + (1));
seq__24269_24273 = G__24279;
chunk__24270_24274 = G__24280;
count__24271_24275 = G__24281;
i__24272_24276 = G__24282;
continue;
} else {
var temp__5278__auto___24283 = cljs.core.seq.call(null,seq__24269_24273);
if(temp__5278__auto___24283){
var seq__24269_24284__$1 = temp__5278__auto___24283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24269_24284__$1)){
var c__9021__auto___24285 = cljs.core.chunk_first.call(null,seq__24269_24284__$1);
var G__24288 = cljs.core.chunk_rest.call(null,seq__24269_24284__$1);
var G__24289 = c__9021__auto___24285;
var G__24290 = cljs.core.count.call(null,c__9021__auto___24285);
var G__24291 = (0);
seq__24269_24273 = G__24288;
chunk__24270_24274 = G__24289;
count__24271_24275 = G__24290;
i__24272_24276 = G__24291;
continue;
} else {
var ns_24293 = cljs.core.first.call(null,seq__24269_24284__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24293);

var G__24294 = cljs.core.next.call(null,seq__24269_24284__$1);
var G__24295 = null;
var G__24296 = (0);
var G__24297 = (0);
seq__24269_24273 = G__24294;
chunk__24270_24274 = G__24295;
count__24271_24275 = G__24296;
i__24272_24276 = G__24297;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__8110__auto__ = goog.require__;
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24302__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24303__i = 0, G__24303__a = new Array(arguments.length -  0);
while (G__24303__i < G__24303__a.length) {G__24303__a[G__24303__i] = arguments[G__24303__i + 0]; ++G__24303__i;}
  args = new cljs.core.IndexedSeq(G__24303__a,0,null);
} 
return G__24302__delegate.call(this,args);};
G__24302.cljs$lang$maxFixedArity = 0;
G__24302.cljs$lang$applyTo = (function (arglist__24304){
var args = cljs.core.seq(arglist__24304);
return G__24302__delegate(args);
});
G__24302.cljs$core$IFn$_invoke$arity$variadic = G__24302__delegate;
return G__24302;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24305 = cljs.core._EQ_;
var expr__24306 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24305.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24306))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__24305,expr__24306){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__24305,expr__24306))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__24305,expr__24306){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24309){if((e24309 instanceof Error)){
var e = e24309;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24309;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__24305,expr__24306))
} else {
if(cljs.core.truth_(pred__24305.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24306))){
return ((function (pred__24305,expr__24306){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__24305,expr__24306){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24305,expr__24306))
);

return deferred.addErrback(((function (deferred,pred__24305,expr__24306){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24305,expr__24306))
);
});
;})(pred__24305,expr__24306))
} else {
if(cljs.core.truth_(pred__24305.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__24306))){
return ((function (pred__24305,expr__24306){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e24313){if((e24313 instanceof Error)){
var e = e24313;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24313;

}
}})());
});
;})(pred__24305,expr__24306))
} else {
return ((function (pred__24305,expr__24306){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24305,expr__24306))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24315,callback){
var map__24318 = p__24315;
var map__24318__$1 = ((((!((map__24318 == null)))?((((map__24318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24318):map__24318);
var file_msg = map__24318__$1;
var request_url = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24318,map__24318__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24318,map__24318__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_24350){
var state_val_24351 = (state_24350[(1)]);
if((state_val_24351 === (7))){
var inst_24346 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
var statearr_24354_24380 = state_24350__$1;
(statearr_24354_24380[(2)] = inst_24346);

(statearr_24354_24380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (1))){
var state_24350__$1 = state_24350;
var statearr_24356_24383 = state_24350__$1;
(statearr_24356_24383[(2)] = null);

(statearr_24356_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (4))){
var inst_24330 = (state_24350[(7)]);
var inst_24330__$1 = (state_24350[(2)]);
var state_24350__$1 = (function (){var statearr_24357 = state_24350;
(statearr_24357[(7)] = inst_24330__$1);

return statearr_24357;
})();
if(cljs.core.truth_(inst_24330__$1)){
var statearr_24358_24385 = state_24350__$1;
(statearr_24358_24385[(1)] = (5));

} else {
var statearr_24359_24386 = state_24350__$1;
(statearr_24359_24386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (6))){
var state_24350__$1 = state_24350;
var statearr_24360_24388 = state_24350__$1;
(statearr_24360_24388[(2)] = null);

(statearr_24360_24388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (3))){
var inst_24348 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24350__$1,inst_24348);
} else {
if((state_val_24351 === (2))){
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24350__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24351 === (11))){
var inst_24342 = (state_24350[(2)]);
var state_24350__$1 = (function (){var statearr_24361 = state_24350;
(statearr_24361[(8)] = inst_24342);

return statearr_24361;
})();
var statearr_24362_24392 = state_24350__$1;
(statearr_24362_24392[(2)] = null);

(statearr_24362_24392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (9))){
var inst_24336 = (state_24350[(9)]);
var inst_24334 = (state_24350[(10)]);
var inst_24338 = inst_24336.call(null,inst_24334);
var state_24350__$1 = state_24350;
var statearr_24363_24393 = state_24350__$1;
(statearr_24363_24393[(2)] = inst_24338);

(statearr_24363_24393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (5))){
var inst_24330 = (state_24350[(7)]);
var inst_24332 = figwheel.client.file_reloading.blocking_load.call(null,inst_24330);
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24350__$1,(8),inst_24332);
} else {
if((state_val_24351 === (10))){
var inst_24334 = (state_24350[(10)]);
var inst_24340 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24334);
var state_24350__$1 = state_24350;
var statearr_24365_24398 = state_24350__$1;
(statearr_24365_24398[(2)] = inst_24340);

(statearr_24365_24398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (8))){
var inst_24336 = (state_24350[(9)]);
var inst_24330 = (state_24350[(7)]);
var inst_24334 = (state_24350[(2)]);
var inst_24335 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24336__$1 = cljs.core.get.call(null,inst_24335,inst_24330);
var state_24350__$1 = (function (){var statearr_24366 = state_24350;
(statearr_24366[(9)] = inst_24336__$1);

(statearr_24366[(10)] = inst_24334);

return statearr_24366;
})();
if(cljs.core.truth_(inst_24336__$1)){
var statearr_24367_24400 = state_24350__$1;
(statearr_24367_24400[(1)] = (9));

} else {
var statearr_24368_24401 = state_24350__$1;
(statearr_24368_24401[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__17911__auto__ = null;
var figwheel$client$file_reloading$state_machine__17911__auto____0 = (function (){
var statearr_24375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24375[(0)] = figwheel$client$file_reloading$state_machine__17911__auto__);

(statearr_24375[(1)] = (1));

return statearr_24375;
});
var figwheel$client$file_reloading$state_machine__17911__auto____1 = (function (state_24350){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_24350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e24376){if((e24376 instanceof Object)){
var ex__17914__auto__ = e24376;
var statearr_24377_24405 = state_24350;
(statearr_24377_24405[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24406 = state_24350;
state_24350 = G__24406;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__17911__auto__ = function(state_24350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__17911__auto____1.call(this,state_24350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__17911__auto____0;
figwheel$client$file_reloading$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__17911__auto____1;
return figwheel$client$file_reloading$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_24378 = f__19397__auto__.call(null);
(statearr_24378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_24378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24411,callback){
var map__24414 = p__24411;
var map__24414__$1 = ((((!((map__24414 == null)))?((((map__24414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24414):map__24414);
var file_msg = map__24414__$1;
var namespace = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24414,map__24414__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24414,map__24414__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__24420){
var map__24423 = p__24420;
var map__24423__$1 = ((((!((map__24423 == null)))?((((map__24423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24423):map__24423);
var file_msg = map__24423__$1;
var namespace = cljs.core.get.call(null,map__24423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24427){
var map__24430 = p__24427;
var map__24430__$1 = ((((!((map__24430 == null)))?((((map__24430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24430):map__24430);
var file_msg = map__24430__$1;
var namespace = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__8098__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__8098__auto__){
var or__8110__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__8098__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24434,callback){
var map__24438 = p__24434;
var map__24438__$1 = ((((!((map__24438 == null)))?((((map__24438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24438):map__24438);
var file_msg = map__24438__$1;
var request_url = cljs.core.get.call(null,map__24438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19396__auto___24550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___24550,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___24550,out){
return (function (state_24530){
var state_val_24531 = (state_24530[(1)]);
if((state_val_24531 === (1))){
var inst_24503 = cljs.core.seq.call(null,files);
var inst_24504 = cljs.core.first.call(null,inst_24503);
var inst_24505 = cljs.core.next.call(null,inst_24503);
var inst_24506 = files;
var state_24530__$1 = (function (){var statearr_24532 = state_24530;
(statearr_24532[(7)] = inst_24506);

(statearr_24532[(8)] = inst_24504);

(statearr_24532[(9)] = inst_24505);

return statearr_24532;
})();
var statearr_24533_24552 = state_24530__$1;
(statearr_24533_24552[(2)] = null);

(statearr_24533_24552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (2))){
var inst_24512 = (state_24530[(10)]);
var inst_24506 = (state_24530[(7)]);
var inst_24511 = cljs.core.seq.call(null,inst_24506);
var inst_24512__$1 = cljs.core.first.call(null,inst_24511);
var inst_24513 = cljs.core.next.call(null,inst_24511);
var inst_24514 = (inst_24512__$1 == null);
var inst_24515 = cljs.core.not.call(null,inst_24514);
var state_24530__$1 = (function (){var statearr_24534 = state_24530;
(statearr_24534[(10)] = inst_24512__$1);

(statearr_24534[(11)] = inst_24513);

return statearr_24534;
})();
if(inst_24515){
var statearr_24535_24554 = state_24530__$1;
(statearr_24535_24554[(1)] = (4));

} else {
var statearr_24536_24555 = state_24530__$1;
(statearr_24536_24555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (3))){
var inst_24528 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24530__$1,inst_24528);
} else {
if((state_val_24531 === (4))){
var inst_24512 = (state_24530[(10)]);
var inst_24517 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24512);
var state_24530__$1 = state_24530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24530__$1,(7),inst_24517);
} else {
if((state_val_24531 === (5))){
var inst_24524 = cljs.core.async.close_BANG_.call(null,out);
var state_24530__$1 = state_24530;
var statearr_24538_24557 = state_24530__$1;
(statearr_24538_24557[(2)] = inst_24524);

(statearr_24538_24557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (6))){
var inst_24526 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
var statearr_24539_24559 = state_24530__$1;
(statearr_24539_24559[(2)] = inst_24526);

(statearr_24539_24559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (7))){
var inst_24513 = (state_24530[(11)]);
var inst_24519 = (state_24530[(2)]);
var inst_24520 = cljs.core.async.put_BANG_.call(null,out,inst_24519);
var inst_24506 = inst_24513;
var state_24530__$1 = (function (){var statearr_24540 = state_24530;
(statearr_24540[(12)] = inst_24520);

(statearr_24540[(7)] = inst_24506);

return statearr_24540;
})();
var statearr_24541_24561 = state_24530__$1;
(statearr_24541_24561[(2)] = null);

(statearr_24541_24561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19396__auto___24550,out))
;
return ((function (switch__17910__auto__,c__19396__auto___24550,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto____0 = (function (){
var statearr_24545 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24545[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto__);

(statearr_24545[(1)] = (1));

return statearr_24545;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto____1 = (function (state_24530){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_24530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e24547){if((e24547 instanceof Object)){
var ex__17914__auto__ = e24547;
var statearr_24548_24563 = state_24530;
(statearr_24548_24563[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24564 = state_24530;
state_24530 = G__24564;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto__ = function(state_24530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto____1.call(this,state_24530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___24550,out))
})();
var state__19398__auto__ = (function (){var statearr_24549 = f__19397__auto__.call(null);
(statearr_24549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___24550);

return statearr_24549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___24550,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24566,opts){
var map__24570 = p__24566;
var map__24570__$1 = ((((!((map__24570 == null)))?((((map__24570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24570):map__24570);
var eval_body = cljs.core.get.call(null,map__24570__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__8098__auto__ = eval_body;
if(cljs.core.truth_(and__8098__auto__)){
return typeof eval_body === 'string';
} else {
return and__8098__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24573){var e = e24573;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24578_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24578_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24595){
var vec__24596 = p__24595;
var k = cljs.core.nth.call(null,vec__24596,(0),null);
var v = cljs.core.nth.call(null,vec__24596,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24599){
var vec__24600 = p__24599;
var k = cljs.core.nth.call(null,vec__24600,(0),null);
var v = cljs.core.nth.call(null,vec__24600,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24610,p__24611){
var map__24895 = p__24610;
var map__24895__$1 = ((((!((map__24895 == null)))?((((map__24895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24895):map__24895);
var opts = map__24895__$1;
var before_jsload = cljs.core.get.call(null,map__24895__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24895__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24895__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24896 = p__24611;
var map__24896__$1 = ((((!((map__24896 == null)))?((((map__24896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24896):map__24896);
var msg = map__24896__$1;
var files = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25058){
var state_val_25059 = (state_25058[(1)]);
if((state_val_25059 === (7))){
var inst_24915 = (state_25058[(7)]);
var inst_24916 = (state_25058[(8)]);
var inst_24914 = (state_25058[(9)]);
var inst_24913 = (state_25058[(10)]);
var inst_24921 = cljs.core._nth.call(null,inst_24914,inst_24916);
var inst_24922 = figwheel.client.file_reloading.eval_body.call(null,inst_24921,opts);
var inst_24924 = (inst_24916 + (1));
var tmp25060 = inst_24915;
var tmp25061 = inst_24914;
var tmp25062 = inst_24913;
var inst_24913__$1 = tmp25062;
var inst_24914__$1 = tmp25061;
var inst_24915__$1 = tmp25060;
var inst_24916__$1 = inst_24924;
var state_25058__$1 = (function (){var statearr_25063 = state_25058;
(statearr_25063[(11)] = inst_24922);

(statearr_25063[(7)] = inst_24915__$1);

(statearr_25063[(8)] = inst_24916__$1);

(statearr_25063[(9)] = inst_24914__$1);

(statearr_25063[(10)] = inst_24913__$1);

return statearr_25063;
})();
var statearr_25065_25180 = state_25058__$1;
(statearr_25065_25180[(2)] = null);

(statearr_25065_25180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (20))){
var inst_24957 = (state_25058[(12)]);
var inst_24965 = figwheel.client.file_reloading.sort_files.call(null,inst_24957);
var state_25058__$1 = state_25058;
var statearr_25066_25181 = state_25058__$1;
(statearr_25066_25181[(2)] = inst_24965);

(statearr_25066_25181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (27))){
var state_25058__$1 = state_25058;
var statearr_25067_25182 = state_25058__$1;
(statearr_25067_25182[(2)] = null);

(statearr_25067_25182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (1))){
var inst_24903 = (state_25058[(13)]);
var inst_24900 = before_jsload.call(null,files);
var inst_24901 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24902 = (function (){return ((function (inst_24903,inst_24900,inst_24901,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24606_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24606_SHARP_);
});
;})(inst_24903,inst_24900,inst_24901,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24903__$1 = cljs.core.filter.call(null,inst_24902,files);
var inst_24904 = cljs.core.not_empty.call(null,inst_24903__$1);
var state_25058__$1 = (function (){var statearr_25068 = state_25058;
(statearr_25068[(13)] = inst_24903__$1);

(statearr_25068[(14)] = inst_24901);

(statearr_25068[(15)] = inst_24900);

return statearr_25068;
})();
if(cljs.core.truth_(inst_24904)){
var statearr_25070_25183 = state_25058__$1;
(statearr_25070_25183[(1)] = (2));

} else {
var statearr_25072_25184 = state_25058__$1;
(statearr_25072_25184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (24))){
var state_25058__$1 = state_25058;
var statearr_25073_25185 = state_25058__$1;
(statearr_25073_25185[(2)] = null);

(statearr_25073_25185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (39))){
var inst_25008 = (state_25058[(16)]);
var state_25058__$1 = state_25058;
var statearr_25075_25186 = state_25058__$1;
(statearr_25075_25186[(2)] = inst_25008);

(statearr_25075_25186[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (46))){
var inst_25052 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25076_25187 = state_25058__$1;
(statearr_25076_25187[(2)] = inst_25052);

(statearr_25076_25187[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (4))){
var inst_24951 = (state_25058[(2)]);
var inst_24952 = cljs.core.List.EMPTY;
var inst_24953 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24952);
var inst_24954 = (function (){return ((function (inst_24951,inst_24952,inst_24953,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24608_SHARP_){
var and__8098__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24608_SHARP_);
if(cljs.core.truth_(and__8098__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24608_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__24608_SHARP_)));
} else {
return and__8098__auto__;
}
});
;})(inst_24951,inst_24952,inst_24953,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24955 = cljs.core.filter.call(null,inst_24954,files);
var inst_24956 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24957 = cljs.core.concat.call(null,inst_24955,inst_24956);
var state_25058__$1 = (function (){var statearr_25077 = state_25058;
(statearr_25077[(12)] = inst_24957);

(statearr_25077[(17)] = inst_24951);

(statearr_25077[(18)] = inst_24953);

return statearr_25077;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25078_25190 = state_25058__$1;
(statearr_25078_25190[(1)] = (16));

} else {
var statearr_25079_25191 = state_25058__$1;
(statearr_25079_25191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (15))){
var inst_24941 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25080_25192 = state_25058__$1;
(statearr_25080_25192[(2)] = inst_24941);

(statearr_25080_25192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (21))){
var inst_24967 = (state_25058[(19)]);
var inst_24967__$1 = (state_25058[(2)]);
var inst_24968 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24967__$1);
var state_25058__$1 = (function (){var statearr_25082 = state_25058;
(statearr_25082[(19)] = inst_24967__$1);

return statearr_25082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25058__$1,(22),inst_24968);
} else {
if((state_val_25059 === (31))){
var inst_25055 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25058__$1,inst_25055);
} else {
if((state_val_25059 === (32))){
var inst_25008 = (state_25058[(16)]);
var inst_25013 = inst_25008.cljs$lang$protocol_mask$partition0$;
var inst_25014 = (inst_25013 & (64));
var inst_25015 = inst_25008.cljs$core$ISeq$;
var inst_25016 = (cljs.core.PROTOCOL_SENTINEL === inst_25015);
var inst_25017 = (inst_25014) || (inst_25016);
var state_25058__$1 = state_25058;
if(cljs.core.truth_(inst_25017)){
var statearr_25083_25193 = state_25058__$1;
(statearr_25083_25193[(1)] = (35));

} else {
var statearr_25084_25194 = state_25058__$1;
(statearr_25084_25194[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (40))){
var inst_25030 = (state_25058[(20)]);
var inst_25029 = (state_25058[(2)]);
var inst_25030__$1 = cljs.core.get.call(null,inst_25029,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25031 = cljs.core.get.call(null,inst_25029,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25032 = cljs.core.not_empty.call(null,inst_25030__$1);
var state_25058__$1 = (function (){var statearr_25087 = state_25058;
(statearr_25087[(21)] = inst_25031);

(statearr_25087[(20)] = inst_25030__$1);

return statearr_25087;
})();
if(cljs.core.truth_(inst_25032)){
var statearr_25088_25195 = state_25058__$1;
(statearr_25088_25195[(1)] = (41));

} else {
var statearr_25089_25196 = state_25058__$1;
(statearr_25089_25196[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (33))){
var state_25058__$1 = state_25058;
var statearr_25091_25197 = state_25058__$1;
(statearr_25091_25197[(2)] = false);

(statearr_25091_25197[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (13))){
var inst_24927 = (state_25058[(22)]);
var inst_24931 = cljs.core.chunk_first.call(null,inst_24927);
var inst_24932 = cljs.core.chunk_rest.call(null,inst_24927);
var inst_24933 = cljs.core.count.call(null,inst_24931);
var inst_24913 = inst_24932;
var inst_24914 = inst_24931;
var inst_24915 = inst_24933;
var inst_24916 = (0);
var state_25058__$1 = (function (){var statearr_25092 = state_25058;
(statearr_25092[(7)] = inst_24915);

(statearr_25092[(8)] = inst_24916);

(statearr_25092[(9)] = inst_24914);

(statearr_25092[(10)] = inst_24913);

return statearr_25092;
})();
var statearr_25093_25198 = state_25058__$1;
(statearr_25093_25198[(2)] = null);

(statearr_25093_25198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (22))){
var inst_24967 = (state_25058[(19)]);
var inst_24975 = (state_25058[(23)]);
var inst_24970 = (state_25058[(24)]);
var inst_24971 = (state_25058[(25)]);
var inst_24970__$1 = (state_25058[(2)]);
var inst_24971__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24970__$1);
var inst_24972 = (function (){var all_files = inst_24967;
var res_SINGLEQUOTE_ = inst_24970__$1;
var res = inst_24971__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24967,inst_24975,inst_24970,inst_24971,inst_24970__$1,inst_24971__$1,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24609_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24609_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24967,inst_24975,inst_24970,inst_24971,inst_24970__$1,inst_24971__$1,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24973 = cljs.core.filter.call(null,inst_24972,inst_24970__$1);
var inst_24974 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24975__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24974);
var inst_24976 = cljs.core.not_empty.call(null,inst_24975__$1);
var state_25058__$1 = (function (){var statearr_25094 = state_25058;
(statearr_25094[(23)] = inst_24975__$1);

(statearr_25094[(26)] = inst_24973);

(statearr_25094[(24)] = inst_24970__$1);

(statearr_25094[(25)] = inst_24971__$1);

return statearr_25094;
})();
if(cljs.core.truth_(inst_24976)){
var statearr_25095_25199 = state_25058__$1;
(statearr_25095_25199[(1)] = (23));

} else {
var statearr_25096_25200 = state_25058__$1;
(statearr_25096_25200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (36))){
var state_25058__$1 = state_25058;
var statearr_25098_25201 = state_25058__$1;
(statearr_25098_25201[(2)] = false);

(statearr_25098_25201[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (41))){
var inst_25030 = (state_25058[(20)]);
var inst_25036 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25037 = cljs.core.map.call(null,inst_25036,inst_25030);
var inst_25038 = cljs.core.pr_str.call(null,inst_25037);
var inst_25039 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25038)].join('');
var inst_25040 = figwheel.client.utils.log.call(null,inst_25039);
var state_25058__$1 = state_25058;
var statearr_25099_25202 = state_25058__$1;
(statearr_25099_25202[(2)] = inst_25040);

(statearr_25099_25202[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (43))){
var inst_25031 = (state_25058[(21)]);
var inst_25043 = (state_25058[(2)]);
var inst_25044 = cljs.core.not_empty.call(null,inst_25031);
var state_25058__$1 = (function (){var statearr_25100 = state_25058;
(statearr_25100[(27)] = inst_25043);

return statearr_25100;
})();
if(cljs.core.truth_(inst_25044)){
var statearr_25101_25203 = state_25058__$1;
(statearr_25101_25203[(1)] = (44));

} else {
var statearr_25102_25204 = state_25058__$1;
(statearr_25102_25204[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (29))){
var inst_24967 = (state_25058[(19)]);
var inst_25008 = (state_25058[(16)]);
var inst_24975 = (state_25058[(23)]);
var inst_24973 = (state_25058[(26)]);
var inst_24970 = (state_25058[(24)]);
var inst_24971 = (state_25058[(25)]);
var inst_25004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25007 = (function (){var all_files = inst_24967;
var res_SINGLEQUOTE_ = inst_24970;
var res = inst_24971;
var files_not_loaded = inst_24973;
var dependencies_that_loaded = inst_24975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_25008,inst_24975,inst_24973,inst_24970,inst_24971,inst_25004,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25006){
var map__25105 = p__25006;
var map__25105__$1 = ((((!((map__25105 == null)))?((((map__25105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25105):map__25105);
var namespace = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_25008,inst_24975,inst_24973,inst_24970,inst_24971,inst_25004,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25008__$1 = cljs.core.group_by.call(null,inst_25007,inst_24973);
var inst_25010 = (inst_25008__$1 == null);
var inst_25011 = cljs.core.not.call(null,inst_25010);
var state_25058__$1 = (function (){var statearr_25108 = state_25058;
(statearr_25108[(28)] = inst_25004);

(statearr_25108[(16)] = inst_25008__$1);

return statearr_25108;
})();
if(inst_25011){
var statearr_25109_25205 = state_25058__$1;
(statearr_25109_25205[(1)] = (32));

} else {
var statearr_25110_25206 = state_25058__$1;
(statearr_25110_25206[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (44))){
var inst_25031 = (state_25058[(21)]);
var inst_25046 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25031);
var inst_25047 = cljs.core.pr_str.call(null,inst_25046);
var inst_25048 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25047)].join('');
var inst_25049 = figwheel.client.utils.log.call(null,inst_25048);
var state_25058__$1 = state_25058;
var statearr_25111_25207 = state_25058__$1;
(statearr_25111_25207[(2)] = inst_25049);

(statearr_25111_25207[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (6))){
var inst_24948 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25112_25208 = state_25058__$1;
(statearr_25112_25208[(2)] = inst_24948);

(statearr_25112_25208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (28))){
var inst_24973 = (state_25058[(26)]);
var inst_25001 = (state_25058[(2)]);
var inst_25002 = cljs.core.not_empty.call(null,inst_24973);
var state_25058__$1 = (function (){var statearr_25114 = state_25058;
(statearr_25114[(29)] = inst_25001);

return statearr_25114;
})();
if(cljs.core.truth_(inst_25002)){
var statearr_25115_25209 = state_25058__$1;
(statearr_25115_25209[(1)] = (29));

} else {
var statearr_25116_25210 = state_25058__$1;
(statearr_25116_25210[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (25))){
var inst_24971 = (state_25058[(25)]);
var inst_24987 = (state_25058[(2)]);
var inst_24988 = cljs.core.not_empty.call(null,inst_24971);
var state_25058__$1 = (function (){var statearr_25117 = state_25058;
(statearr_25117[(30)] = inst_24987);

return statearr_25117;
})();
if(cljs.core.truth_(inst_24988)){
var statearr_25118_25211 = state_25058__$1;
(statearr_25118_25211[(1)] = (26));

} else {
var statearr_25119_25212 = state_25058__$1;
(statearr_25119_25212[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (34))){
var inst_25024 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
if(cljs.core.truth_(inst_25024)){
var statearr_25120_25213 = state_25058__$1;
(statearr_25120_25213[(1)] = (38));

} else {
var statearr_25121_25214 = state_25058__$1;
(statearr_25121_25214[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (17))){
var state_25058__$1 = state_25058;
var statearr_25124_25215 = state_25058__$1;
(statearr_25124_25215[(2)] = recompile_dependents);

(statearr_25124_25215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (3))){
var state_25058__$1 = state_25058;
var statearr_25125_25216 = state_25058__$1;
(statearr_25125_25216[(2)] = null);

(statearr_25125_25216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (12))){
var inst_24944 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25127_25217 = state_25058__$1;
(statearr_25127_25217[(2)] = inst_24944);

(statearr_25127_25217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (2))){
var inst_24903 = (state_25058[(13)]);
var inst_24911 = cljs.core.seq.call(null,inst_24903);
var inst_24913 = inst_24911;
var inst_24914 = null;
var inst_24915 = (0);
var inst_24916 = (0);
var state_25058__$1 = (function (){var statearr_25128 = state_25058;
(statearr_25128[(7)] = inst_24915);

(statearr_25128[(8)] = inst_24916);

(statearr_25128[(9)] = inst_24914);

(statearr_25128[(10)] = inst_24913);

return statearr_25128;
})();
var statearr_25129_25218 = state_25058__$1;
(statearr_25129_25218[(2)] = null);

(statearr_25129_25218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (23))){
var inst_24967 = (state_25058[(19)]);
var inst_24975 = (state_25058[(23)]);
var inst_24973 = (state_25058[(26)]);
var inst_24970 = (state_25058[(24)]);
var inst_24971 = (state_25058[(25)]);
var inst_24978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24980 = (function (){var all_files = inst_24967;
var res_SINGLEQUOTE_ = inst_24970;
var res = inst_24971;
var files_not_loaded = inst_24973;
var dependencies_that_loaded = inst_24975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_24975,inst_24973,inst_24970,inst_24971,inst_24978,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24979){
var map__25130 = p__24979;
var map__25130__$1 = ((((!((map__25130 == null)))?((((map__25130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25130):map__25130);
var request_url = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_24975,inst_24973,inst_24970,inst_24971,inst_24978,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24981 = cljs.core.reverse.call(null,inst_24975);
var inst_24982 = cljs.core.map.call(null,inst_24980,inst_24981);
var inst_24983 = cljs.core.pr_str.call(null,inst_24982);
var inst_24984 = figwheel.client.utils.log.call(null,inst_24983);
var state_25058__$1 = (function (){var statearr_25133 = state_25058;
(statearr_25133[(31)] = inst_24978);

return statearr_25133;
})();
var statearr_25134_25223 = state_25058__$1;
(statearr_25134_25223[(2)] = inst_24984);

(statearr_25134_25223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (35))){
var state_25058__$1 = state_25058;
var statearr_25135_25226 = state_25058__$1;
(statearr_25135_25226[(2)] = true);

(statearr_25135_25226[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (19))){
var inst_24957 = (state_25058[(12)]);
var inst_24963 = figwheel.client.file_reloading.expand_files.call(null,inst_24957);
var state_25058__$1 = state_25058;
var statearr_25136_25227 = state_25058__$1;
(statearr_25136_25227[(2)] = inst_24963);

(statearr_25136_25227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (11))){
var state_25058__$1 = state_25058;
var statearr_25137_25228 = state_25058__$1;
(statearr_25137_25228[(2)] = null);

(statearr_25137_25228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (9))){
var inst_24946 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25139_25233 = state_25058__$1;
(statearr_25139_25233[(2)] = inst_24946);

(statearr_25139_25233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (5))){
var inst_24915 = (state_25058[(7)]);
var inst_24916 = (state_25058[(8)]);
var inst_24918 = (inst_24916 < inst_24915);
var inst_24919 = inst_24918;
var state_25058__$1 = state_25058;
if(cljs.core.truth_(inst_24919)){
var statearr_25141_25237 = state_25058__$1;
(statearr_25141_25237[(1)] = (7));

} else {
var statearr_25142_25238 = state_25058__$1;
(statearr_25142_25238[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (14))){
var inst_24927 = (state_25058[(22)]);
var inst_24936 = cljs.core.first.call(null,inst_24927);
var inst_24937 = figwheel.client.file_reloading.eval_body.call(null,inst_24936,opts);
var inst_24938 = cljs.core.next.call(null,inst_24927);
var inst_24913 = inst_24938;
var inst_24914 = null;
var inst_24915 = (0);
var inst_24916 = (0);
var state_25058__$1 = (function (){var statearr_25144 = state_25058;
(statearr_25144[(7)] = inst_24915);

(statearr_25144[(8)] = inst_24916);

(statearr_25144[(9)] = inst_24914);

(statearr_25144[(10)] = inst_24913);

(statearr_25144[(32)] = inst_24937);

return statearr_25144;
})();
var statearr_25145_25249 = state_25058__$1;
(statearr_25145_25249[(2)] = null);

(statearr_25145_25249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (45))){
var state_25058__$1 = state_25058;
var statearr_25146_25250 = state_25058__$1;
(statearr_25146_25250[(2)] = null);

(statearr_25146_25250[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (26))){
var inst_24967 = (state_25058[(19)]);
var inst_24975 = (state_25058[(23)]);
var inst_24973 = (state_25058[(26)]);
var inst_24970 = (state_25058[(24)]);
var inst_24971 = (state_25058[(25)]);
var inst_24991 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24993 = (function (){var all_files = inst_24967;
var res_SINGLEQUOTE_ = inst_24970;
var res = inst_24971;
var files_not_loaded = inst_24973;
var dependencies_that_loaded = inst_24975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_24975,inst_24973,inst_24970,inst_24971,inst_24991,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24992){
var map__25147 = p__24992;
var map__25147__$1 = ((((!((map__25147 == null)))?((((map__25147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25147):map__25147);
var namespace = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_24975,inst_24973,inst_24970,inst_24971,inst_24991,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24994 = cljs.core.map.call(null,inst_24993,inst_24971);
var inst_24995 = cljs.core.pr_str.call(null,inst_24994);
var inst_24996 = figwheel.client.utils.log.call(null,inst_24995);
var inst_24997 = (function (){var all_files = inst_24967;
var res_SINGLEQUOTE_ = inst_24970;
var res = inst_24971;
var files_not_loaded = inst_24973;
var dependencies_that_loaded = inst_24975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_24975,inst_24973,inst_24970,inst_24971,inst_24991,inst_24993,inst_24994,inst_24995,inst_24996,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24967,inst_24975,inst_24973,inst_24970,inst_24971,inst_24991,inst_24993,inst_24994,inst_24995,inst_24996,state_val_25059,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24998 = setTimeout(inst_24997,(10));
var state_25058__$1 = (function (){var statearr_25150 = state_25058;
(statearr_25150[(33)] = inst_24991);

(statearr_25150[(34)] = inst_24996);

return statearr_25150;
})();
var statearr_25151_25270 = state_25058__$1;
(statearr_25151_25270[(2)] = inst_24998);

(statearr_25151_25270[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (16))){
var state_25058__$1 = state_25058;
var statearr_25152_25272 = state_25058__$1;
(statearr_25152_25272[(2)] = reload_dependents);

(statearr_25152_25272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (38))){
var inst_25008 = (state_25058[(16)]);
var inst_25026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25008);
var state_25058__$1 = state_25058;
var statearr_25154_25276 = state_25058__$1;
(statearr_25154_25276[(2)] = inst_25026);

(statearr_25154_25276[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (30))){
var state_25058__$1 = state_25058;
var statearr_25156_25278 = state_25058__$1;
(statearr_25156_25278[(2)] = null);

(statearr_25156_25278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (10))){
var inst_24927 = (state_25058[(22)]);
var inst_24929 = cljs.core.chunked_seq_QMARK_.call(null,inst_24927);
var state_25058__$1 = state_25058;
if(inst_24929){
var statearr_25157_25283 = state_25058__$1;
(statearr_25157_25283[(1)] = (13));

} else {
var statearr_25159_25286 = state_25058__$1;
(statearr_25159_25286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (18))){
var inst_24961 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
if(cljs.core.truth_(inst_24961)){
var statearr_25160_25289 = state_25058__$1;
(statearr_25160_25289[(1)] = (19));

} else {
var statearr_25161_25291 = state_25058__$1;
(statearr_25161_25291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (42))){
var state_25058__$1 = state_25058;
var statearr_25162_25294 = state_25058__$1;
(statearr_25162_25294[(2)] = null);

(statearr_25162_25294[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (37))){
var inst_25021 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25163_25298 = state_25058__$1;
(statearr_25163_25298[(2)] = inst_25021);

(statearr_25163_25298[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (8))){
var inst_24913 = (state_25058[(10)]);
var inst_24927 = (state_25058[(22)]);
var inst_24927__$1 = cljs.core.seq.call(null,inst_24913);
var state_25058__$1 = (function (){var statearr_25164 = state_25058;
(statearr_25164[(22)] = inst_24927__$1);

return statearr_25164;
})();
if(inst_24927__$1){
var statearr_25165_25309 = state_25058__$1;
(statearr_25165_25309[(1)] = (10));

} else {
var statearr_25166_25310 = state_25058__$1;
(statearr_25166_25310[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__17910__auto__,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto____0 = (function (){
var statearr_25172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25172[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto__);

(statearr_25172[(1)] = (1));

return statearr_25172;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto____1 = (function (state_25058){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_25058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e25173){if((e25173 instanceof Object)){
var ex__17914__auto__ = e25173;
var statearr_25174_25317 = state_25058;
(statearr_25174_25317[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25320 = state_25058;
state_25058 = G__25320;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto__ = function(state_25058){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto____1.call(this,state_25058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19398__auto__ = (function (){var statearr_25175 = f__19397__auto__.call(null);
(statearr_25175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_25175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__,map__24895,map__24895__$1,opts,before_jsload,on_jsload,reload_dependents,map__24896,map__24896__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19396__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25337,link){
var map__25342 = p__25337;
var map__25342__$1 = ((((!((map__25342 == null)))?((((map__25342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25342):map__25342);
var file = cljs.core.get.call(null,map__25342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__25342,map__25342__$1,file){
return (function (p1__25333_SHARP_,p2__25334_SHARP_){
if(cljs.core._EQ_.call(null,p1__25333_SHARP_,p2__25334_SHARP_)){
return p1__25333_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__25342,map__25342__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25362){
var map__25363 = p__25362;
var map__25363__$1 = ((((!((map__25363 == null)))?((((map__25363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25363):map__25363);
var match_length = cljs.core.get.call(null,map__25363__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25363__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25357_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25357_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25384_SHARP_,p2__25385_SHARP_){
return cljs.core.assoc.call(null,p1__25384_SHARP_,cljs.core.get.call(null,p2__25385_SHARP_,key),p2__25385_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_25410 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_25410);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_25410);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25414,p__25415){
var map__25425 = p__25414;
var map__25425__$1 = ((((!((map__25425 == null)))?((((map__25425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25425):map__25425);
var on_cssload = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__25426 = p__25415;
var map__25426__$1 = ((((!((map__25426 == null)))?((((map__25426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25426):map__25426);
var files_msg = map__25426__$1;
var files = cljs.core.get.call(null,map__25426__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map