// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__9338__auto__ = [];
var len__9331__auto___25561 = arguments.length;
var i__9332__auto___25562 = (0);
while(true){
if((i__9332__auto___25562 < len__9331__auto___25561)){
args__9338__auto__.push((arguments[i__9332__auto___25562]));

var G__25563 = (i__9332__auto___25562 + (1));
i__9332__auto___25562 = G__25563;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((2) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9339__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25551_25564 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25552_25565 = null;
var count__25553_25566 = (0);
var i__25554_25567 = (0);
while(true){
if((i__25554_25567 < count__25553_25566)){
var k_25568 = cljs.core._nth.call(null,chunk__25552_25565,i__25554_25567);
e.setAttribute(cljs.core.name.call(null,k_25568),cljs.core.get.call(null,attrs,k_25568));

var G__25569 = seq__25551_25564;
var G__25570 = chunk__25552_25565;
var G__25571 = count__25553_25566;
var G__25572 = (i__25554_25567 + (1));
seq__25551_25564 = G__25569;
chunk__25552_25565 = G__25570;
count__25553_25566 = G__25571;
i__25554_25567 = G__25572;
continue;
} else {
var temp__5278__auto___25573 = cljs.core.seq.call(null,seq__25551_25564);
if(temp__5278__auto___25573){
var seq__25551_25574__$1 = temp__5278__auto___25573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25551_25574__$1)){
var c__9021__auto___25575 = cljs.core.chunk_first.call(null,seq__25551_25574__$1);
var G__25576 = cljs.core.chunk_rest.call(null,seq__25551_25574__$1);
var G__25577 = c__9021__auto___25575;
var G__25578 = cljs.core.count.call(null,c__9021__auto___25575);
var G__25579 = (0);
seq__25551_25564 = G__25576;
chunk__25552_25565 = G__25577;
count__25553_25566 = G__25578;
i__25554_25567 = G__25579;
continue;
} else {
var k_25580 = cljs.core.first.call(null,seq__25551_25574__$1);
e.setAttribute(cljs.core.name.call(null,k_25580),cljs.core.get.call(null,attrs,k_25580));

var G__25581 = cljs.core.next.call(null,seq__25551_25574__$1);
var G__25582 = null;
var G__25583 = (0);
var G__25584 = (0);
seq__25551_25564 = G__25581;
chunk__25552_25565 = G__25582;
count__25553_25566 = G__25583;
i__25554_25567 = G__25584;
continue;
}
} else {
}
}
break;
}

var seq__25555_25585 = cljs.core.seq.call(null,children);
var chunk__25556_25586 = null;
var count__25557_25587 = (0);
var i__25558_25588 = (0);
while(true){
if((i__25558_25588 < count__25557_25587)){
var ch_25589 = cljs.core._nth.call(null,chunk__25556_25586,i__25558_25588);
e.appendChild(ch_25589);

var G__25590 = seq__25555_25585;
var G__25591 = chunk__25556_25586;
var G__25592 = count__25557_25587;
var G__25593 = (i__25558_25588 + (1));
seq__25555_25585 = G__25590;
chunk__25556_25586 = G__25591;
count__25557_25587 = G__25592;
i__25558_25588 = G__25593;
continue;
} else {
var temp__5278__auto___25594 = cljs.core.seq.call(null,seq__25555_25585);
if(temp__5278__auto___25594){
var seq__25555_25595__$1 = temp__5278__auto___25594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25555_25595__$1)){
var c__9021__auto___25597 = cljs.core.chunk_first.call(null,seq__25555_25595__$1);
var G__25598 = cljs.core.chunk_rest.call(null,seq__25555_25595__$1);
var G__25599 = c__9021__auto___25597;
var G__25600 = cljs.core.count.call(null,c__9021__auto___25597);
var G__25601 = (0);
seq__25555_25585 = G__25598;
chunk__25556_25586 = G__25599;
count__25557_25587 = G__25600;
i__25558_25588 = G__25601;
continue;
} else {
var ch_25603 = cljs.core.first.call(null,seq__25555_25595__$1);
e.appendChild(ch_25603);

var G__25605 = cljs.core.next.call(null,seq__25555_25595__$1);
var G__25606 = null;
var G__25607 = (0);
var G__25608 = (0);
seq__25555_25585 = G__25605;
chunk__25556_25586 = G__25606;
count__25557_25587 = G__25607;
i__25558_25588 = G__25608;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25547){
var G__25549 = cljs.core.first.call(null,seq25547);
var seq25547__$1 = cljs.core.next.call(null,seq25547);
var G__25550 = cljs.core.first.call(null,seq25547__$1);
var seq25547__$2 = cljs.core.next.call(null,seq25547__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25549,G__25550,seq25547__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__9141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9142__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9145__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__,hierarchy__9145__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9145__auto__,method_table__9141__auto__,prefer_table__9142__auto__,method_cache__9143__auto__,cached_hierarchy__9144__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_25614 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_25614.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25614.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25614.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25614);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25617,st_map){
var map__25625 = p__25617;
var map__25625__$1 = ((((!((map__25625 == null)))?((((map__25625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25625):map__25625);
var container_el = cljs.core.get.call(null,map__25625__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25625,map__25625__$1,container_el){
return (function (p__25627){
var vec__25628 = p__25627;
var k = cljs.core.nth.call(null,vec__25628,(0),null);
var v = cljs.core.nth.call(null,vec__25628,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25625,map__25625__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25635,dom_str){
var map__25638 = p__25635;
var map__25638__$1 = ((((!((map__25638 == null)))?((((map__25638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25638):map__25638);
var c = map__25638__$1;
var content_area_el = cljs.core.get.call(null,map__25638__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25640){
var map__25643 = p__25640;
var map__25643__$1 = ((((!((map__25643 == null)))?((((map__25643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25643):map__25643);
var content_area_el = cljs.core.get.call(null,map__25643__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_25686){
var state_val_25687 = (state_25686[(1)]);
if((state_val_25687 === (1))){
var inst_25671 = (state_25686[(7)]);
var inst_25671__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25672 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25673 = ["10px","10px","100%","68px","1.0"];
var inst_25674 = cljs.core.PersistentHashMap.fromArrays(inst_25672,inst_25673);
var inst_25675 = cljs.core.merge.call(null,inst_25674,style);
var inst_25676 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25671__$1,inst_25675);
var inst_25677 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25671__$1,msg);
var inst_25678 = cljs.core.async.timeout.call(null,(300));
var state_25686__$1 = (function (){var statearr_25688 = state_25686;
(statearr_25688[(8)] = inst_25677);

(statearr_25688[(9)] = inst_25676);

(statearr_25688[(7)] = inst_25671__$1);

return statearr_25688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(2),inst_25678);
} else {
if((state_val_25687 === (2))){
var inst_25671 = (state_25686[(7)]);
var inst_25680 = (state_25686[(2)]);
var inst_25681 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25682 = ["auto"];
var inst_25683 = cljs.core.PersistentHashMap.fromArrays(inst_25681,inst_25682);
var inst_25684 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25671,inst_25683);
var state_25686__$1 = (function (){var statearr_25689 = state_25686;
(statearr_25689[(10)] = inst_25680);

return statearr_25689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25686__$1,inst_25684);
} else {
return null;
}
}
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto____0 = (function (){
var statearr_25693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25693[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto__);

(statearr_25693[(1)] = (1));

return statearr_25693;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto____1 = (function (state_25686){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_25686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e25694){if((e25694 instanceof Object)){
var ex__17914__auto__ = e25694;
var statearr_25695_25727 = state_25686;
(statearr_25695_25727[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25735 = state_25686;
state_25686 = G__25735;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto__ = function(state_25686){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto____1.call(this,state_25686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_25696 = f__19397__auto__.call(null);
(statearr_25696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_25696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args25745 = [];
var len__9331__auto___25761 = arguments.length;
var i__9332__auto___25763 = (0);
while(true){
if((i__9332__auto___25763 < len__9331__auto___25761)){
args25745.push((arguments[i__9332__auto___25763]));

var G__25764 = (i__9332__auto___25763 + (1));
i__9332__auto___25763 = G__25764;
continue;
} else {
}
break;
}

var G__25749 = args25745.length;
switch (G__25749) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25745.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__25786){
var map__25791 = p__25786;
var map__25791__$1 = ((((!((map__25791 == null)))?((((map__25791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);
var file = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__8110__auto__ = file;
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__25813){
var vec__25824 = p__25813;
var typ = cljs.core.nth.call(null,vec__25824,(0),null);
var line_number = cljs.core.nth.call(null,vec__25824,(1),null);
var line = cljs.core.nth.call(null,vec__25824,(2),null);
var pred__25827 = cljs.core._EQ_;
var expr__25828 = typ;
if(cljs.core.truth_(pred__25827.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__25828))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__25827.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__25828))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__25827.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__25828))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__25844_SHARP_){
return cljs.core.update_in.call(null,p1__25844_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__25865_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__25865_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__25868){
var map__25878 = p__25868;
var map__25878__$1 = ((((!((map__25878 == null)))?((((map__25878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25878):map__25878);
var exception = map__25878__$1;
var message = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__25878__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__8098__auto__ = file;
if(cljs.core.truth_(and__8098__auto__)){
return line;
} else {
return and__8098__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__25878,map__25878__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__25866_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25866_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__25878,map__25878__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__25878,map__25878__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__25867_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__25867_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__25867_SHARP_)))].join('');
});})(last_message,map__25878,map__25878__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__25927){
var map__25930 = p__25927;
var map__25930__$1 = ((((!((map__25930 == null)))?((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25930):map__25930);
var file = cljs.core.get.call(null,map__25930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25930__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25930__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__25941 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__25941__$1 = ((((!((map__25941 == null)))?((((map__25941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25941):map__25941);
var head = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25941__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__25945){
var map__25948 = p__25945;
var map__25948__$1 = ((((!((map__25948 == null)))?((((map__25948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25948):map__25948);
var warning_data = map__25948__$1;
var file = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__8098__auto__ = file;
if(cljs.core.truth_(and__8098__auto__)){
return line;
} else {
return and__8098__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__25948,map__25948__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__25944_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25944_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__25948,map__25948__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__25959 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__25959__$1 = ((((!((map__25959 == null)))?((((map__25959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25959):map__25959);
var head = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__25961){
var map__25965 = p__25961;
var map__25965__$1 = ((((!((map__25965 == null)))?((((map__25965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965):map__25965);
var warning_data = map__25965__$1;
var message = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__25967 = message;
var G__25967__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25967),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__25967);
var G__25967__$2 = (cljs.core.truth_((function (){var and__8098__auto__ = line;
if(cljs.core.truth_(and__8098__auto__)){
return column;
} else {
return and__8098__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25967__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__25967__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25967__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__25967__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__25972){
var map__25977 = p__25972;
var map__25977__$1 = ((((!((map__25977 == null)))?((((map__25977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25977):map__25977);
var warning_data = map__25977__$1;
var message = cljs.core.get.call(null,map__25977__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__25977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25977__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25977__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__25981 = figwheel.client.heads_up.ensure_container.call(null);
var map__25981__$1 = ((((!((map__25981 == null)))?((((map__25981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25981):map__25981);
var content_area_el = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5278__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5278__auto__)){
var last_child = temp__5278__auto__;
var temp__5276__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5276__auto__)){
var message_count = temp__5276__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_26029){
var state_val_26030 = (state_26029[(1)]);
if((state_val_26030 === (1))){
var inst_26012 = (state_26029[(7)]);
var inst_26012__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26013 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26014 = ["0.0"];
var inst_26015 = cljs.core.PersistentHashMap.fromArrays(inst_26013,inst_26014);
var inst_26016 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26012__$1,inst_26015);
var inst_26017 = cljs.core.async.timeout.call(null,(300));
var state_26029__$1 = (function (){var statearr_26032 = state_26029;
(statearr_26032[(7)] = inst_26012__$1);

(statearr_26032[(8)] = inst_26016);

return statearr_26032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26029__$1,(2),inst_26017);
} else {
if((state_val_26030 === (2))){
var inst_26012 = (state_26029[(7)]);
var inst_26019 = (state_26029[(2)]);
var inst_26020 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26021 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26022 = cljs.core.PersistentHashMap.fromArrays(inst_26020,inst_26021);
var inst_26023 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26012,inst_26022);
var inst_26024 = cljs.core.async.timeout.call(null,(200));
var state_26029__$1 = (function (){var statearr_26034 = state_26029;
(statearr_26034[(9)] = inst_26023);

(statearr_26034[(10)] = inst_26019);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26029__$1,(3),inst_26024);
} else {
if((state_val_26030 === (3))){
var inst_26012 = (state_26029[(7)]);
var inst_26026 = (state_26029[(2)]);
var inst_26027 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26012,"");
var state_26029__$1 = (function (){var statearr_26035 = state_26029;
(statearr_26035[(11)] = inst_26026);

return statearr_26035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26029__$1,inst_26027);
} else {
return null;
}
}
}
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__17911__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__17911__auto____0 = (function (){
var statearr_26040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26040[(0)] = figwheel$client$heads_up$clear_$_state_machine__17911__auto__);

(statearr_26040[(1)] = (1));

return statearr_26040;
});
var figwheel$client$heads_up$clear_$_state_machine__17911__auto____1 = (function (state_26029){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_26029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e26041){if((e26041 instanceof Object)){
var ex__17914__auto__ = e26041;
var statearr_26042_26047 = state_26029;
(statearr_26042_26047[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26048 = state_26029;
state_26029 = G__26048;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__17911__auto__ = function(state_26029){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__17911__auto____1.call(this,state_26029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__17911__auto____0;
figwheel$client$heads_up$clear_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__17911__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_26043 = f__19397__auto__.call(null);
(statearr_26043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_26084){
var state_val_26085 = (state_26084[(1)]);
if((state_val_26085 === (1))){
var inst_26074 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,(2),inst_26074);
} else {
if((state_val_26085 === (2))){
var inst_26076 = (state_26084[(2)]);
var inst_26077 = cljs.core.async.timeout.call(null,(400));
var state_26084__$1 = (function (){var statearr_26086 = state_26084;
(statearr_26086[(7)] = inst_26076);

return statearr_26086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,(3),inst_26077);
} else {
if((state_val_26085 === (3))){
var inst_26079 = (state_26084[(2)]);
var inst_26080 = figwheel.client.heads_up.clear.call(null);
var state_26084__$1 = (function (){var statearr_26089 = state_26084;
(statearr_26089[(8)] = inst_26079);

return statearr_26089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,(4),inst_26080);
} else {
if((state_val_26085 === (4))){
var inst_26082 = (state_26084[(2)]);
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26084__$1,inst_26082);
} else {
return null;
}
}
}
}
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto____0 = (function (){
var statearr_26095 = [null,null,null,null,null,null,null,null,null];
(statearr_26095[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto__);

(statearr_26095[(1)] = (1));

return statearr_26095;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto____1 = (function (state_26084){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_26084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e26096){if((e26096 instanceof Object)){
var ex__17914__auto__ = e26096;
var statearr_26097_26106 = state_26084;
(statearr_26097_26106[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26107 = state_26084;
state_26084 = G__26107;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto__ = function(state_26084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto____1.call(this,state_26084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_26098 = f__19397__auto__.call(null);
(statearr_26098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_26098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5278__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5278__auto__)){
var el = temp__5278__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map