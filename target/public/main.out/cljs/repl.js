// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27365){
var map__27390 = p__27365;
var map__27390__$1 = ((((!((map__27390 == null)))?((((map__27390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27390):map__27390);
var m = map__27390__$1;
var n = cljs.core.get.call(null,map__27390__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27390__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27392_27414 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27393_27415 = null;
var count__27394_27416 = (0);
var i__27395_27417 = (0);
while(true){
if((i__27395_27417 < count__27394_27416)){
var f_27418 = cljs.core._nth.call(null,chunk__27393_27415,i__27395_27417);
cljs.core.println.call(null,"  ",f_27418);

var G__27419 = seq__27392_27414;
var G__27420 = chunk__27393_27415;
var G__27421 = count__27394_27416;
var G__27422 = (i__27395_27417 + (1));
seq__27392_27414 = G__27419;
chunk__27393_27415 = G__27420;
count__27394_27416 = G__27421;
i__27395_27417 = G__27422;
continue;
} else {
var temp__5278__auto___27423 = cljs.core.seq.call(null,seq__27392_27414);
if(temp__5278__auto___27423){
var seq__27392_27424__$1 = temp__5278__auto___27423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27392_27424__$1)){
var c__9021__auto___27425 = cljs.core.chunk_first.call(null,seq__27392_27424__$1);
var G__27426 = cljs.core.chunk_rest.call(null,seq__27392_27424__$1);
var G__27427 = c__9021__auto___27425;
var G__27428 = cljs.core.count.call(null,c__9021__auto___27425);
var G__27429 = (0);
seq__27392_27414 = G__27426;
chunk__27393_27415 = G__27427;
count__27394_27416 = G__27428;
i__27395_27417 = G__27429;
continue;
} else {
var f_27430 = cljs.core.first.call(null,seq__27392_27424__$1);
cljs.core.println.call(null,"  ",f_27430);

var G__27431 = cljs.core.next.call(null,seq__27392_27424__$1);
var G__27432 = null;
var G__27433 = (0);
var G__27434 = (0);
seq__27392_27414 = G__27431;
chunk__27393_27415 = G__27432;
count__27394_27416 = G__27433;
i__27395_27417 = G__27434;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27435 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8110__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27435);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27435)))?cljs.core.second.call(null,arglists_27435):arglists_27435));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27396_27436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27397_27437 = null;
var count__27398_27438 = (0);
var i__27399_27439 = (0);
while(true){
if((i__27399_27439 < count__27398_27438)){
var vec__27400_27440 = cljs.core._nth.call(null,chunk__27397_27437,i__27399_27439);
var name_27441 = cljs.core.nth.call(null,vec__27400_27440,(0),null);
var map__27403_27442 = cljs.core.nth.call(null,vec__27400_27440,(1),null);
var map__27403_27443__$1 = ((((!((map__27403_27442 == null)))?((((map__27403_27442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27403_27442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403_27442):map__27403_27442);
var doc_27444 = cljs.core.get.call(null,map__27403_27443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27445 = cljs.core.get.call(null,map__27403_27443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27441);

cljs.core.println.call(null," ",arglists_27445);

if(cljs.core.truth_(doc_27444)){
cljs.core.println.call(null," ",doc_27444);
} else {
}

var G__27446 = seq__27396_27436;
var G__27447 = chunk__27397_27437;
var G__27448 = count__27398_27438;
var G__27449 = (i__27399_27439 + (1));
seq__27396_27436 = G__27446;
chunk__27397_27437 = G__27447;
count__27398_27438 = G__27448;
i__27399_27439 = G__27449;
continue;
} else {
var temp__5278__auto___27450 = cljs.core.seq.call(null,seq__27396_27436);
if(temp__5278__auto___27450){
var seq__27396_27451__$1 = temp__5278__auto___27450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27396_27451__$1)){
var c__9021__auto___27452 = cljs.core.chunk_first.call(null,seq__27396_27451__$1);
var G__27453 = cljs.core.chunk_rest.call(null,seq__27396_27451__$1);
var G__27454 = c__9021__auto___27452;
var G__27455 = cljs.core.count.call(null,c__9021__auto___27452);
var G__27456 = (0);
seq__27396_27436 = G__27453;
chunk__27397_27437 = G__27454;
count__27398_27438 = G__27455;
i__27399_27439 = G__27456;
continue;
} else {
var vec__27405_27457 = cljs.core.first.call(null,seq__27396_27451__$1);
var name_27458 = cljs.core.nth.call(null,vec__27405_27457,(0),null);
var map__27408_27459 = cljs.core.nth.call(null,vec__27405_27457,(1),null);
var map__27408_27460__$1 = ((((!((map__27408_27459 == null)))?((((map__27408_27459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408_27459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408_27459):map__27408_27459);
var doc_27461 = cljs.core.get.call(null,map__27408_27460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27462 = cljs.core.get.call(null,map__27408_27460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27458);

cljs.core.println.call(null," ",arglists_27462);

if(cljs.core.truth_(doc_27461)){
cljs.core.println.call(null," ",doc_27461);
} else {
}

var G__27463 = cljs.core.next.call(null,seq__27396_27451__$1);
var G__27464 = null;
var G__27465 = (0);
var G__27466 = (0);
seq__27396_27436 = G__27463;
chunk__27397_27437 = G__27464;
count__27398_27438 = G__27465;
i__27399_27439 = G__27466;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__27410 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27411 = null;
var count__27412 = (0);
var i__27413 = (0);
while(true){
if((i__27413 < count__27412)){
var role = cljs.core._nth.call(null,chunk__27411,i__27413);
var temp__5278__auto___27467__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___27467__$1)){
var spec_27468 = temp__5278__auto___27467__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_27468));
} else {
}

var G__27469 = seq__27410;
var G__27470 = chunk__27411;
var G__27471 = count__27412;
var G__27472 = (i__27413 + (1));
seq__27410 = G__27469;
chunk__27411 = G__27470;
count__27412 = G__27471;
i__27413 = G__27472;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__27410);
if(temp__5278__auto____$1){
var seq__27410__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27410__$1)){
var c__9021__auto__ = cljs.core.chunk_first.call(null,seq__27410__$1);
var G__27473 = cljs.core.chunk_rest.call(null,seq__27410__$1);
var G__27474 = c__9021__auto__;
var G__27475 = cljs.core.count.call(null,c__9021__auto__);
var G__27476 = (0);
seq__27410 = G__27473;
chunk__27411 = G__27474;
count__27412 = G__27475;
i__27413 = G__27476;
continue;
} else {
var role = cljs.core.first.call(null,seq__27410__$1);
var temp__5278__auto___27477__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___27477__$2)){
var spec_27478 = temp__5278__auto___27477__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_27478));
} else {
}

var G__27479 = cljs.core.next.call(null,seq__27410__$1);
var G__27480 = null;
var G__27481 = (0);
var G__27482 = (0);
seq__27410 = G__27479;
chunk__27411 = G__27480;
count__27412 = G__27481;
i__27413 = G__27482;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map