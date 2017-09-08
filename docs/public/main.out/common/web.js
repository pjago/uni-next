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
return clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__15379){
var vec__15380 = p__15379;
var k = cljs.core.nth.call(null,vec__15380,(0),null);
var v = cljs.core.nth.call(null,vec__15380,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null)),(function (){var x__9047__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__15383__auto__","opts__15383__auto__",812735757,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__15384__auto__","children__15384__auto__",-1238591718,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9047__auto__ = cljs.core.symbol.call(null,"js",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("React.createElement")].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9047__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__15383__auto__","opts__15383__auto__",812735757,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("common.web","map->frame","common.web/map->frame",1021407551,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__9047__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15385__auto__","x__15385__auto__",2075040624,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.util","force-children","om.util/force-children",2134283787,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),(function (){var x__9047__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15385__auto__","x__15385__auto__",2075040624,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__15384__auto__","children__15384__auto__",-1238591718,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())));
});
var ret__9379__auto___17651 = common.web.gen_tags_inline_fns = (function common$web$gen_tags_inline_fns(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,common.web.gen_tag_inline_fn,common.web.tags))));
} else {
return null;
}
});
common.web.gen_tags_inline_fns.cljs$lang$macro = true;

common.web.a_assets = (function common$web$a_assets(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17675 = arguments.length;
var i__9335__auto___17676 = (0);
while(true){
if((i__9335__auto___17676 < len__9334__auto___17675)){
args__9341__auto__.push((arguments[i__9335__auto___17676]));

var G__17677 = (i__9335__auto___17676 + (1));
i__9335__auto___17676 = G__17677;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-assets",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_assets.cljs$lang$maxFixedArity = (1);

common.web.a_assets.cljs$lang$applyTo = (function (seq17654){
var G__17655 = cljs.core.first.call(null,seq17654);
var seq17654__$1 = cljs.core.next.call(null,seq17654);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic(G__17655,seq17654__$1);
});


common.web.a_entity = (function common$web$a_entity(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17678 = arguments.length;
var i__9335__auto___17679 = (0);
while(true){
if((i__9335__auto___17679 < len__9334__auto___17678)){
args__9341__auto__.push((arguments[i__9335__auto___17679]));

var G__17680 = (i__9335__auto___17679 + (1));
i__9335__auto___17679 = G__17680;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_entity.cljs$lang$maxFixedArity = (1);

common.web.a_entity.cljs$lang$applyTo = (function (seq17656){
var G__17657 = cljs.core.first.call(null,seq17656);
var seq17656__$1 = cljs.core.next.call(null,seq17656);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic(G__17657,seq17656__$1);
});


common.web.a_animation = (function common$web$a_animation(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17681 = arguments.length;
var i__9335__auto___17682 = (0);
while(true){
if((i__9335__auto___17682 < len__9334__auto___17681)){
args__9341__auto__.push((arguments[i__9335__auto___17682]));

var G__17683 = (i__9335__auto___17682 + (1));
i__9335__auto___17682 = G__17683;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-animation",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_animation.cljs$lang$maxFixedArity = (1);

common.web.a_animation.cljs$lang$applyTo = (function (seq17658){
var G__17659 = cljs.core.first.call(null,seq17658);
var seq17658__$1 = cljs.core.next.call(null,seq17658);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic(G__17659,seq17658__$1);
});


common.web.a_scene = (function common$web$a_scene(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17684 = arguments.length;
var i__9335__auto___17685 = (0);
while(true){
if((i__9335__auto___17685 < len__9334__auto___17684)){
args__9341__auto__.push((arguments[i__9335__auto___17685]));

var G__17686 = (i__9335__auto___17685 + (1));
i__9335__auto___17685 = G__17686;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-scene",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_scene.cljs$lang$maxFixedArity = (1);

common.web.a_scene.cljs$lang$applyTo = (function (seq17660){
var G__17661 = cljs.core.first.call(null,seq17660);
var seq17660__$1 = cljs.core.next.call(null,seq17660);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic(G__17661,seq17660__$1);
});


common.web.a_node = (function common$web$a_node(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17687 = arguments.length;
var i__9335__auto___17688 = (0);
while(true){
if((i__9335__auto___17688 < len__9334__auto___17687)){
args__9341__auto__.push((arguments[i__9335__auto___17688]));

var G__17689 = (i__9335__auto___17688 + (1));
i__9335__auto___17688 = G__17689;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-node",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_node.cljs$lang$maxFixedArity = (1);

common.web.a_node.cljs$lang$applyTo = (function (seq17662){
var G__17663 = cljs.core.first.call(null,seq17662);
var seq17662__$1 = cljs.core.next.call(null,seq17662);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic(G__17663,seq17662__$1);
});


common.web.a_mixin = (function common$web$a_mixin(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17690 = arguments.length;
var i__9335__auto___17691 = (0);
while(true){
if((i__9335__auto___17691 < len__9334__auto___17690)){
args__9341__auto__.push((arguments[i__9335__auto___17691]));

var G__17692 = (i__9335__auto___17691 + (1));
i__9335__auto___17691 = G__17692;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-mixin",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_mixin.cljs$lang$maxFixedArity = (1);

common.web.a_mixin.cljs$lang$applyTo = (function (seq17664){
var G__17665 = cljs.core.first.call(null,seq17664);
var seq17664__$1 = cljs.core.next.call(null,seq17664);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic(G__17665,seq17664__$1);
});


common.web.a_register_element = (function common$web$a_register_element(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17693 = arguments.length;
var i__9335__auto___17694 = (0);
while(true){
if((i__9335__auto___17694 < len__9334__auto___17693)){
args__9341__auto__.push((arguments[i__9335__auto___17694]));

var G__17695 = (i__9335__auto___17694 + (1));
i__9335__auto___17694 = G__17695;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-register-element",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_register_element.cljs$lang$maxFixedArity = (1);

common.web.a_register_element.cljs$lang$applyTo = (function (seq17666){
var G__17667 = cljs.core.first.call(null,seq17666);
var seq17666__$1 = cljs.core.next.call(null,seq17666);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic(G__17667,seq17666__$1);
});


common.web.a_cubemap = (function common$web$a_cubemap(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17696 = arguments.length;
var i__9335__auto___17697 = (0);
while(true){
if((i__9335__auto___17697 < len__9334__auto___17696)){
args__9341__auto__.push((arguments[i__9335__auto___17697]));

var G__17698 = (i__9335__auto___17697 + (1));
i__9335__auto___17697 = G__17698;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15343__auto__,children__15344__auto__){
return cljs.core.apply.call(null,React.createElement,"a-cubemap",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15343__auto__)),cljs.core.map.call(null,om.util.force_children,children__15344__auto__));
});

common.web.a_cubemap.cljs$lang$maxFixedArity = (1);

common.web.a_cubemap.cljs$lang$applyTo = (function (seq17668){
var G__17669 = cljs.core.first.call(null,seq17668);
var seq17668__$1 = cljs.core.next.call(null,seq17668);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic(G__17669,seq17668__$1);
});


common.web.element = (function common$web$element(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17699 = arguments.length;
var i__9335__auto___17700 = (0);
while(true){
if((i__9335__auto___17700 < len__9334__auto___17699)){
args__9341__auto__.push((arguments[i__9335__auto___17700]));

var G__17701 = (i__9335__auto___17700 + (1));
i__9335__auto___17700 = G__17701;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((2) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((2)),(0),null)):null);
return common.web.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9342__auto__);
});

common.web.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.call(null,React.createElement,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts)),cljs.core.map.call(null,om.util.force_children,children));
});

common.web.element.cljs$lang$maxFixedArity = (2);

common.web.element.cljs$lang$applyTo = (function (seq17670){
var G__17671 = cljs.core.first.call(null,seq17670);
var seq17670__$1 = cljs.core.next.call(null,seq17670);
var G__17672 = cljs.core.first.call(null,seq17670__$1);
var seq17670__$2 = cljs.core.next.call(null,seq17670__$1);
return common.web.element.cljs$core$IFn$_invoke$arity$variadic(G__17671,G__17672,seq17670__$2);
});


/**
 * custom element of tag :type (defaults to a-entity)
 */
common.web.custom = (function common$web$custom(var_args){
var args__9341__auto__ = [];
var len__9334__auto___17702 = arguments.length;
var i__9335__auto___17703 = (0);
while(true){
if((i__9335__auto___17703 < len__9334__auto___17702)){
args__9341__auto__.push((arguments[i__9335__auto___17703]));

var G__17704 = (i__9335__auto___17703 + (1));
i__9335__auto___17703 = G__17704;
continue;
} else {
}
break;
}

var argseq__9342__auto__ = ((((1) < args__9341__auto__.length))?(new cljs.core.IndexedSeq(args__9341__auto__.slice((1)),(0),null)):null);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9342__auto__);
});

common.web.custom.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var childs = cljs.core.map.call(null,common.web.custom,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props));
var props__$1 = cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982));
return common.web.element.call(null,(function (){var or__8113__auto__ = common.web.tags.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__8113__auto__)){
return or__8113__auto__;
} else {
return "a-entity";
}
})(),props__$1,childs,children);
});

common.web.custom.cljs$lang$maxFixedArity = (1);

common.web.custom.cljs$lang$applyTo = (function (seq17673){
var G__17674 = cljs.core.first.call(null,seq17673);
var seq17673__$1 = cljs.core.next.call(null,seq17673);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic(G__17674,seq17673__$1);
});


//# sourceMappingURL=web.js.map