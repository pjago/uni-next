// Compiled by ClojureScript 1.9.542 {}
goog.provide('common.cljc');
goog.require('cljs.core');
var ret__9376__auto___10546 = /**
 * Return then if we are generating cljs code and else for Clojure code.
 * http://blog.nberger.com.ar/blog/2015/09/18/more-portable-complex-macro-musing
 */
common.cljc.if_cljs = (function common$cljc$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
});
common.cljc.if_cljs.cljs$lang$macro = true;

var ret__9376__auto___10575 = common.cljc.alter_var_root = (function common$cljc$alter_var_root(_AMPERSAND_form,_AMPERSAND_env,var_ref,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("common.cljc","if-cljs","common.cljc/if-cljs",540324449,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9044__auto__ = cljs.core.second.call(null,var_ref);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9044__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),(function (){var x__9044__auto__ = var_ref;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","alter-var-root","cljs.core/alter-var-root",-1342668238,null)),(function (){var x__9044__auto__ = var_ref;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
});
common.cljc.alter_var_root.cljs$lang$macro = true;

var ret__9376__auto___10585 = (function (){
common.cljc.alter = (function common$cljc$alter(var_args){
var args__9338__auto__ = [];
var len__9331__auto___10588 = arguments.length;
var i__9332__auto___10589 = (0);
while(true){
if((i__9332__auto___10589 < len__9331__auto___10588)){
args__9338__auto__.push((arguments[i__9332__auto___10589]));

var G__10591 = (i__9332__auto___10589 + (1));
i__9332__auto___10589 = G__10591;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((2) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((2)),(0),null)):null);
return common.cljc.alter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9339__auto__);
});

common.cljc.alter.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("common.cljc","if-cljs","common.cljc/if-cljs",540324449,null)),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})(),(function (){var x__9044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","alter","cljs.core/alter",1712012334,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())));
});

common.cljc.alter.cljs$lang$maxFixedArity = (2);

common.cljc.alter.cljs$lang$applyTo = (function (seq10581){
var G__10582 = cljs.core.first.call(null,seq10581);
var seq10581__$1 = cljs.core.next.call(null,seq10581);
var G__10583 = cljs.core.first.call(null,seq10581__$1);
var seq10581__$2 = cljs.core.next.call(null,seq10581__$1);
return common.cljc.alter.cljs$core$IFn$_invoke$arity$variadic(G__10582,G__10583,seq10581__$2);
});

return null;
})()
;
common.cljc.alter.cljs$lang$macro = true;


//# sourceMappingURL=cljc.js.map