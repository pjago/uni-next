// Compiled by ClojureScript 1.9.542 {}
goog.provide('common.web');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('cljsjs.react');
goog.require('om.util');
/**
 * attempts to serialize the a-frame way
 */
common.web.serialize = (function common$web$serialize(props){
if(typeof props === 'string'){
return props;
} else {
if((typeof props === 'number') || (cljs.core.boolean_QMARK_.call(null,props))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(props)].join('');
} else {
if(((props instanceof cljs.core.Keyword)) || ((props instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,props);
} else {
if(cljs.core.sequential_QMARK_.call(null,props)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,common.web.serialize,props));
} else {
if(cljs.core.map_QMARK_.call(null,props)){
return clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__15361){
var vec__15362 = p__15361;
var k = cljs.core.nth.call(null,vec__15362,(0),null);
var v = cljs.core.nth.call(null,vec__15362,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.web.serialize.call(null,k),common.web.serialize.call(null,v)], null));
}),props));
} else {
if(cljs.core.fn_QMARK_.call(null,props)){
return "[object Function]";
} else {
return "[object Unknown]";

}
}
}
}
}
}
});
/**
 * serializes a map into a-frame tag
 */
common.web.map__GT_frame = (function common$web$map__GT_frame(m){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,common.web.serialize,cljs.core.vals.call(null,m)));
});
common.web.tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"a-assets","a-assets",-1930048861,null),null,new cljs.core.Symbol(null,"a-cubemap","a-cubemap",-2115867523,null),null,new cljs.core.Symbol(null,"a-register-element","a-register-element",-633506096,null),null,new cljs.core.Symbol(null,"a-entity","a-entity",-511500857,null),null,new cljs.core.Symbol(null,"a-scene","a-scene",-399632947,null),null,new cljs.core.Symbol(null,"a-mixin","a-mixin",925168014,null),null,new cljs.core.Symbol(null,"a-animation","a-animation",2015059752,null),null,new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),null], null), null);
common.web.gen_tag_inline_fn = (function common$web$gen_tag_inline_fn(tag){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null)),(function (){var x__9044__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__15366__auto__","opts__15366__auto__",-2016396833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__15367__auto__","children__15367__auto__",1400710332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9044__auto__ = cljs.core.symbol.call(null,"js",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("React.createElement")].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9044__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__15366__auto__","opts__15366__auto__",-2016396833,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("common.web","map->frame","common.web/map->frame",1021407551,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15368__auto__","x__15368__auto__",-919429602,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.util","force-children","om.util/force-children",2134283787,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15368__auto__","x__15368__auto__",-919429602,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__15367__auto__","children__15367__auto__",1400710332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
});
var ret__9376__auto___19865 = common.web.gen_tags_inline_fns = (function common$web$gen_tags_inline_fns(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,common.web.gen_tag_inline_fn,common.web.tags))));
} else {
return null;
}
});
common.web.gen_tags_inline_fns.cljs$lang$macro = true;

common.web.a_assets = (function common$web$a_assets(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19931 = arguments.length;
var i__9332__auto___19932 = (0);
while(true){
if((i__9332__auto___19932 < len__9331__auto___19931)){
args__9338__auto__.push((arguments[i__9332__auto___19932]));

var G__19933 = (i__9332__auto___19932 + (1));
i__9332__auto___19932 = G__19933;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-assets",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_assets.cljs$lang$maxFixedArity = (1);

common.web.a_assets.cljs$lang$applyTo = (function (seq19868){
var G__19869 = cljs.core.first.call(null,seq19868);
var seq19868__$1 = cljs.core.next.call(null,seq19868);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic(G__19869,seq19868__$1);
});


common.web.a_entity = (function common$web$a_entity(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19950 = arguments.length;
var i__9332__auto___19951 = (0);
while(true){
if((i__9332__auto___19951 < len__9331__auto___19950)){
args__9338__auto__.push((arguments[i__9332__auto___19951]));

var G__19954 = (i__9332__auto___19951 + (1));
i__9332__auto___19951 = G__19954;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_entity.cljs$lang$maxFixedArity = (1);

common.web.a_entity.cljs$lang$applyTo = (function (seq19872){
var G__19873 = cljs.core.first.call(null,seq19872);
var seq19872__$1 = cljs.core.next.call(null,seq19872);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic(G__19873,seq19872__$1);
});


common.web.a_animation = (function common$web$a_animation(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19977 = arguments.length;
var i__9332__auto___19978 = (0);
while(true){
if((i__9332__auto___19978 < len__9331__auto___19977)){
args__9338__auto__.push((arguments[i__9332__auto___19978]));

var G__19979 = (i__9332__auto___19978 + (1));
i__9332__auto___19978 = G__19979;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-animation",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_animation.cljs$lang$maxFixedArity = (1);

common.web.a_animation.cljs$lang$applyTo = (function (seq19896){
var G__19897 = cljs.core.first.call(null,seq19896);
var seq19896__$1 = cljs.core.next.call(null,seq19896);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic(G__19897,seq19896__$1);
});


common.web.a_scene = (function common$web$a_scene(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19980 = arguments.length;
var i__9332__auto___19981 = (0);
while(true){
if((i__9332__auto___19981 < len__9331__auto___19980)){
args__9338__auto__.push((arguments[i__9332__auto___19981]));

var G__19982 = (i__9332__auto___19981 + (1));
i__9332__auto___19981 = G__19982;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-scene",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_scene.cljs$lang$maxFixedArity = (1);

common.web.a_scene.cljs$lang$applyTo = (function (seq19901){
var G__19902 = cljs.core.first.call(null,seq19901);
var seq19901__$1 = cljs.core.next.call(null,seq19901);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic(G__19902,seq19901__$1);
});


common.web.a_node = (function common$web$a_node(var_args){
var args__9338__auto__ = [];
var len__9331__auto___20015 = arguments.length;
var i__9332__auto___20017 = (0);
while(true){
if((i__9332__auto___20017 < len__9331__auto___20015)){
args__9338__auto__.push((arguments[i__9332__auto___20017]));

var G__20020 = (i__9332__auto___20017 + (1));
i__9332__auto___20017 = G__20020;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-node",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_node.cljs$lang$maxFixedArity = (1);

common.web.a_node.cljs$lang$applyTo = (function (seq19905){
var G__19906 = cljs.core.first.call(null,seq19905);
var seq19905__$1 = cljs.core.next.call(null,seq19905);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic(G__19906,seq19905__$1);
});


common.web.a_mixin = (function common$web$a_mixin(var_args){
var args__9338__auto__ = [];
var len__9331__auto___20048 = arguments.length;
var i__9332__auto___20049 = (0);
while(true){
if((i__9332__auto___20049 < len__9331__auto___20048)){
args__9338__auto__.push((arguments[i__9332__auto___20049]));

var G__20050 = (i__9332__auto___20049 + (1));
i__9332__auto___20049 = G__20050;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-mixin",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_mixin.cljs$lang$maxFixedArity = (1);

common.web.a_mixin.cljs$lang$applyTo = (function (seq19907){
var G__19908 = cljs.core.first.call(null,seq19907);
var seq19907__$1 = cljs.core.next.call(null,seq19907);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic(G__19908,seq19907__$1);
});


common.web.a_register_element = (function common$web$a_register_element(var_args){
var args__9338__auto__ = [];
var len__9331__auto___20051 = arguments.length;
var i__9332__auto___20052 = (0);
while(true){
if((i__9332__auto___20052 < len__9331__auto___20051)){
args__9338__auto__.push((arguments[i__9332__auto___20052]));

var G__20053 = (i__9332__auto___20052 + (1));
i__9332__auto___20052 = G__20053;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-register-element",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_register_element.cljs$lang$maxFixedArity = (1);

common.web.a_register_element.cljs$lang$applyTo = (function (seq19914){
var G__19915 = cljs.core.first.call(null,seq19914);
var seq19914__$1 = cljs.core.next.call(null,seq19914);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic(G__19915,seq19914__$1);
});


common.web.a_cubemap = (function common$web$a_cubemap(var_args){
var args__9338__auto__ = [];
var len__9331__auto___20055 = arguments.length;
var i__9332__auto___20056 = (0);
while(true){
if((i__9332__auto___20056 < len__9331__auto___20055)){
args__9338__auto__.push((arguments[i__9332__auto___20056]));

var G__20058 = (i__9332__auto___20056 + (1));
i__9332__auto___20056 = G__20058;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15327__auto__,children__15328__auto__){
return cljs.core.apply.call(null,React.createElement,"a-cubemap",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15327__auto__)),cljs.core.map.call(null,om.util.force_children,children__15328__auto__));
});

common.web.a_cubemap.cljs$lang$maxFixedArity = (1);

common.web.a_cubemap.cljs$lang$applyTo = (function (seq19924){
var G__19925 = cljs.core.first.call(null,seq19924);
var seq19924__$1 = cljs.core.next.call(null,seq19924);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic(G__19925,seq19924__$1);
});


common.web.element = (function common$web$element(var_args){
var args__9338__auto__ = [];
var len__9331__auto___20065 = arguments.length;
var i__9332__auto___20066 = (0);
while(true){
if((i__9332__auto___20066 < len__9331__auto___20065)){
args__9338__auto__.push((arguments[i__9332__auto___20066]));

var G__20070 = (i__9332__auto___20066 + (1));
i__9332__auto___20066 = G__20070;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((2) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((2)),(0),null)):null);
return common.web.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9339__auto__);
});

common.web.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.call(null,React.createElement,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts)),cljs.core.map.call(null,om.util.force_children,children));
});

common.web.element.cljs$lang$maxFixedArity = (2);

common.web.element.cljs$lang$applyTo = (function (seq19926){
var G__19927 = cljs.core.first.call(null,seq19926);
var seq19926__$1 = cljs.core.next.call(null,seq19926);
var G__19928 = cljs.core.first.call(null,seq19926__$1);
var seq19926__$2 = cljs.core.next.call(null,seq19926__$1);
return common.web.element.cljs$core$IFn$_invoke$arity$variadic(G__19927,G__19928,seq19926__$2);
});


/**
 * custom element of tag :type (defaults to a-entity)
 */
common.web.custom = (function common$web$custom(var_args){
var args__9338__auto__ = [];
var len__9331__auto___20091 = arguments.length;
var i__9332__auto___20092 = (0);
while(true){
if((i__9332__auto___20092 < len__9331__auto___20091)){
args__9338__auto__.push((arguments[i__9332__auto___20092]));

var G__20095 = (i__9332__auto___20092 + (1));
i__9332__auto___20092 = G__20095;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.custom.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var childs = cljs.core.map.call(null,common.web.custom,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props));
var props__$1 = cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982));
return common.web.element.call(null,(function (){var or__8110__auto__ = common.web.tags.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return "a-entity";
}
})(),props__$1,childs,children);
});

common.web.custom.cljs$lang$maxFixedArity = (1);

common.web.custom.cljs$lang$applyTo = (function (seq19929){
var G__19930 = cljs.core.first.call(null,seq19929);
var seq19929__$1 = cljs.core.next.call(null,seq19929);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic(G__19930,seq19929__$1);
});


//# sourceMappingURL=web.js.map