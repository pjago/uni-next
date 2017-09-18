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
return clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__15405){
var vec__15406 = p__15405;
var k = cljs.core.nth.call(null,vec__15406,(0),null);
var v = cljs.core.nth.call(null,vec__15406,(1),null);
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
})(),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__15416__auto__","opts__15416__auto__",-192496423,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__15417__auto__","children__15417__auto__",-106389080,null))))));
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
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__15416__auto__","opts__15416__auto__",-192496423,null)))));
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
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__9044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15418__auto__","x__15418__auto__",-1844762044,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.util","force-children","om.util/force-children",2134283787,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15418__auto__","x__15418__auto__",-1844762044,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__15417__auto__","children__15417__auto__",-106389080,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
});
var ret__9376__auto___17673 = common.web.gen_tags_inline_fns = (function common$web$gen_tags_inline_fns(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,common.web.gen_tag_inline_fn,common.web.tags))));
} else {
return null;
}
});
common.web.gen_tags_inline_fns.cljs$lang$macro = true;

common.web.a_assets = (function common$web$a_assets(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17697 = arguments.length;
var i__9332__auto___17698 = (0);
while(true){
if((i__9332__auto___17698 < len__9331__auto___17697)){
args__9338__auto__.push((arguments[i__9332__auto___17698]));

var G__17699 = (i__9332__auto___17698 + (1));
i__9332__auto___17698 = G__17699;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-assets",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_assets.cljs$lang$maxFixedArity = (1);

common.web.a_assets.cljs$lang$applyTo = (function (seq17676){
var G__17677 = cljs.core.first.call(null,seq17676);
var seq17676__$1 = cljs.core.next.call(null,seq17676);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic(G__17677,seq17676__$1);
});


common.web.a_entity = (function common$web$a_entity(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17700 = arguments.length;
var i__9332__auto___17701 = (0);
while(true){
if((i__9332__auto___17701 < len__9331__auto___17700)){
args__9338__auto__.push((arguments[i__9332__auto___17701]));

var G__17702 = (i__9332__auto___17701 + (1));
i__9332__auto___17701 = G__17702;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_entity.cljs$lang$maxFixedArity = (1);

common.web.a_entity.cljs$lang$applyTo = (function (seq17678){
var G__17679 = cljs.core.first.call(null,seq17678);
var seq17678__$1 = cljs.core.next.call(null,seq17678);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic(G__17679,seq17678__$1);
});


common.web.a_animation = (function common$web$a_animation(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17703 = arguments.length;
var i__9332__auto___17704 = (0);
while(true){
if((i__9332__auto___17704 < len__9331__auto___17703)){
args__9338__auto__.push((arguments[i__9332__auto___17704]));

var G__17705 = (i__9332__auto___17704 + (1));
i__9332__auto___17704 = G__17705;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-animation",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_animation.cljs$lang$maxFixedArity = (1);

common.web.a_animation.cljs$lang$applyTo = (function (seq17680){
var G__17681 = cljs.core.first.call(null,seq17680);
var seq17680__$1 = cljs.core.next.call(null,seq17680);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic(G__17681,seq17680__$1);
});


common.web.a_scene = (function common$web$a_scene(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17706 = arguments.length;
var i__9332__auto___17707 = (0);
while(true){
if((i__9332__auto___17707 < len__9331__auto___17706)){
args__9338__auto__.push((arguments[i__9332__auto___17707]));

var G__17708 = (i__9332__auto___17707 + (1));
i__9332__auto___17707 = G__17708;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-scene",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_scene.cljs$lang$maxFixedArity = (1);

common.web.a_scene.cljs$lang$applyTo = (function (seq17682){
var G__17683 = cljs.core.first.call(null,seq17682);
var seq17682__$1 = cljs.core.next.call(null,seq17682);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic(G__17683,seq17682__$1);
});


common.web.a_node = (function common$web$a_node(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17709 = arguments.length;
var i__9332__auto___17710 = (0);
while(true){
if((i__9332__auto___17710 < len__9331__auto___17709)){
args__9338__auto__.push((arguments[i__9332__auto___17710]));

var G__17711 = (i__9332__auto___17710 + (1));
i__9332__auto___17710 = G__17711;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-node",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_node.cljs$lang$maxFixedArity = (1);

common.web.a_node.cljs$lang$applyTo = (function (seq17684){
var G__17685 = cljs.core.first.call(null,seq17684);
var seq17684__$1 = cljs.core.next.call(null,seq17684);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic(G__17685,seq17684__$1);
});


common.web.a_mixin = (function common$web$a_mixin(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17712 = arguments.length;
var i__9332__auto___17713 = (0);
while(true){
if((i__9332__auto___17713 < len__9331__auto___17712)){
args__9338__auto__.push((arguments[i__9332__auto___17713]));

var G__17714 = (i__9332__auto___17713 + (1));
i__9332__auto___17713 = G__17714;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-mixin",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_mixin.cljs$lang$maxFixedArity = (1);

common.web.a_mixin.cljs$lang$applyTo = (function (seq17686){
var G__17687 = cljs.core.first.call(null,seq17686);
var seq17686__$1 = cljs.core.next.call(null,seq17686);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic(G__17687,seq17686__$1);
});


common.web.a_register_element = (function common$web$a_register_element(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17715 = arguments.length;
var i__9332__auto___17716 = (0);
while(true){
if((i__9332__auto___17716 < len__9331__auto___17715)){
args__9338__auto__.push((arguments[i__9332__auto___17716]));

var G__17717 = (i__9332__auto___17716 + (1));
i__9332__auto___17716 = G__17717;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-register-element",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_register_element.cljs$lang$maxFixedArity = (1);

common.web.a_register_element.cljs$lang$applyTo = (function (seq17688){
var G__17689 = cljs.core.first.call(null,seq17688);
var seq17688__$1 = cljs.core.next.call(null,seq17688);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic(G__17689,seq17688__$1);
});


common.web.a_cubemap = (function common$web$a_cubemap(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17718 = arguments.length;
var i__9332__auto___17719 = (0);
while(true){
if((i__9332__auto___17719 < len__9331__auto___17718)){
args__9338__auto__.push((arguments[i__9332__auto___17719]));

var G__17720 = (i__9332__auto___17719 + (1));
i__9332__auto___17719 = G__17720;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15374__auto__,children__15375__auto__){
return cljs.core.apply.call(null,React.createElement,"a-cubemap",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__15374__auto__)),cljs.core.map.call(null,om.util.force_children,children__15375__auto__));
});

common.web.a_cubemap.cljs$lang$maxFixedArity = (1);

common.web.a_cubemap.cljs$lang$applyTo = (function (seq17690){
var G__17691 = cljs.core.first.call(null,seq17690);
var seq17690__$1 = cljs.core.next.call(null,seq17690);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic(G__17691,seq17690__$1);
});


common.web.element = (function common$web$element(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17721 = arguments.length;
var i__9332__auto___17722 = (0);
while(true){
if((i__9332__auto___17722 < len__9331__auto___17721)){
args__9338__auto__.push((arguments[i__9332__auto___17722]));

var G__17723 = (i__9332__auto___17722 + (1));
i__9332__auto___17722 = G__17723;
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

common.web.element.cljs$lang$applyTo = (function (seq17692){
var G__17693 = cljs.core.first.call(null,seq17692);
var seq17692__$1 = cljs.core.next.call(null,seq17692);
var G__17694 = cljs.core.first.call(null,seq17692__$1);
var seq17692__$2 = cljs.core.next.call(null,seq17692__$1);
return common.web.element.cljs$core$IFn$_invoke$arity$variadic(G__17693,G__17694,seq17692__$2);
});


/**
 * custom element of tag :type (defaults to a-entity)
 */
common.web.custom = (function common$web$custom(var_args){
var args__9338__auto__ = [];
var len__9331__auto___17724 = arguments.length;
var i__9332__auto___17725 = (0);
while(true){
if((i__9332__auto___17725 < len__9331__auto___17724)){
args__9338__auto__.push((arguments[i__9332__auto___17725]));

var G__17726 = (i__9332__auto___17725 + (1));
i__9332__auto___17725 = G__17726;
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

common.web.custom.cljs$lang$applyTo = (function (seq17695){
var G__17696 = cljs.core.first.call(null,seq17695);
var seq17695__$1 = cljs.core.next.call(null,seq17695);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic(G__17696,seq17695__$1);
});


//# sourceMappingURL=web.js.map