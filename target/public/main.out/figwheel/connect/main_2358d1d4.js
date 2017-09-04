// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.connect.main_2358d1d4');
goog.require('cljs.core');
goog.require('uni_next.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project-id","project-id",206449307),"eea6d99ece043f24b704ccc6f5b3445e",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:41453",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30651__delegate = function (x){
if(cljs.core.truth_(uni_next.core._main)){
return cljs.core.apply.call(null,uni_next.core._main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'uni-next.core/-main' is missing");
}
};
var G__30651 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__30652__i = 0, G__30652__a = new Array(arguments.length -  0);
while (G__30652__i < G__30652__a.length) {G__30652__a[G__30652__i] = arguments[G__30652__i + 0]; ++G__30652__i;}
  x = new cljs.core.IndexedSeq(G__30652__a,0,null);
} 
return G__30651__delegate.call(this,x);};
G__30651.cljs$lang$maxFixedArity = 0;
G__30651.cljs$lang$applyTo = (function (arglist__30653){
var x = cljs.core.seq(arglist__30653);
return G__30651__delegate(x);
});
G__30651.cljs$core$IFn$_invoke$arity$variadic = G__30651__delegate;
return G__30651;
})()
], null));

//# sourceMappingURL=main_2358d1d4.js.map