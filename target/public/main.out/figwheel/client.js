// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args27503 = [];
var len__9331__auto___27508 = arguments.length;
var i__9332__auto___27510 = (0);
while(true){
if((i__9332__auto___27510 < len__9331__auto___27508)){
args27503.push((arguments[i__9332__auto___27510]));

var G__27521 = (i__9332__auto___27510 + (1));
i__9332__auto___27510 = G__27521;
continue;
} else {
}
break;
}

var G__27507 = args27503.length;
switch (G__27507) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27503.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__9338__auto__ = [];
var len__9331__auto___27533 = arguments.length;
var i__9332__auto___27534 = (0);
while(true){
if((i__9332__auto___27534 < len__9331__auto___27533)){
args__9338__auto__.push((arguments[i__9332__auto___27534]));

var G__27535 = (i__9332__auto___27534 + (1));
i__9332__auto___27534 = G__27535;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((0) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__9339__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27531){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27531));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__9338__auto__ = [];
var len__9331__auto___27540 = arguments.length;
var i__9332__auto___27541 = (0);
while(true){
if((i__9332__auto___27541 < len__9331__auto___27540)){
args__9338__auto__.push((arguments[i__9332__auto___27541]));

var G__27542 = (i__9332__auto___27541 + (1));
i__9332__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((0) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__9339__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27536){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27536));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27547){
var map__27550 = p__27547;
var map__27550__$1 = ((((!((map__27550 == null)))?((((map__27550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27550):map__27550);
var message = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__8110__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__8098__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__8098__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__8098__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19396__auto___27745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___27745,ch){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___27745,ch){
return (function (state_27700){
var state_val_27701 = (state_27700[(1)]);
if((state_val_27701 === (7))){
var inst_27696 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27702_27746 = state_27700__$1;
(statearr_27702_27746[(2)] = inst_27696);

(statearr_27702_27746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (1))){
var state_27700__$1 = state_27700;
var statearr_27703_27747 = state_27700__$1;
(statearr_27703_27747[(2)] = null);

(statearr_27703_27747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (4))){
var inst_27653 = (state_27700[(7)]);
var inst_27653__$1 = (state_27700[(2)]);
var state_27700__$1 = (function (){var statearr_27705 = state_27700;
(statearr_27705[(7)] = inst_27653__$1);

return statearr_27705;
})();
if(cljs.core.truth_(inst_27653__$1)){
var statearr_27706_27748 = state_27700__$1;
(statearr_27706_27748[(1)] = (5));

} else {
var statearr_27707_27749 = state_27700__$1;
(statearr_27707_27749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (15))){
var inst_27660 = (state_27700[(8)]);
var inst_27675 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27660);
var inst_27676 = cljs.core.first.call(null,inst_27675);
var inst_27677 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27676);
var inst_27678 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27677)].join('');
var inst_27679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27678);
var state_27700__$1 = state_27700;
var statearr_27709_27750 = state_27700__$1;
(statearr_27709_27750[(2)] = inst_27679);

(statearr_27709_27750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (13))){
var inst_27684 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27710_27751 = state_27700__$1;
(statearr_27710_27751[(2)] = inst_27684);

(statearr_27710_27751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (6))){
var state_27700__$1 = state_27700;
var statearr_27712_27756 = state_27700__$1;
(statearr_27712_27756[(2)] = null);

(statearr_27712_27756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (17))){
var inst_27682 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27713_27757 = state_27700__$1;
(statearr_27713_27757[(2)] = inst_27682);

(statearr_27713_27757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (3))){
var inst_27698 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27700__$1,inst_27698);
} else {
if((state_val_27701 === (12))){
var inst_27659 = (state_27700[(9)]);
var inst_27673 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27659,opts);
var state_27700__$1 = state_27700;
if(cljs.core.truth_(inst_27673)){
var statearr_27714_27758 = state_27700__$1;
(statearr_27714_27758[(1)] = (15));

} else {
var statearr_27719_27759 = state_27700__$1;
(statearr_27719_27759[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (2))){
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27700__$1,(4),ch);
} else {
if((state_val_27701 === (11))){
var inst_27660 = (state_27700[(8)]);
var inst_27665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27666 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27660);
var inst_27667 = cljs.core.async.timeout.call(null,(1000));
var inst_27668 = [inst_27666,inst_27667];
var inst_27669 = (new cljs.core.PersistentVector(null,2,(5),inst_27665,inst_27668,null));
var state_27700__$1 = state_27700;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27700__$1,(14),inst_27669);
} else {
if((state_val_27701 === (9))){
var inst_27660 = (state_27700[(8)]);
var inst_27686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27687 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27660);
var inst_27688 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27687);
var inst_27689 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27688)].join('');
var inst_27690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27689);
var state_27700__$1 = (function (){var statearr_27723 = state_27700;
(statearr_27723[(10)] = inst_27686);

return statearr_27723;
})();
var statearr_27725_27763 = state_27700__$1;
(statearr_27725_27763[(2)] = inst_27690);

(statearr_27725_27763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (5))){
var inst_27653 = (state_27700[(7)]);
var inst_27655 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27656 = (new cljs.core.PersistentArrayMap(null,2,inst_27655,null));
var inst_27657 = (new cljs.core.PersistentHashSet(null,inst_27656,null));
var inst_27658 = figwheel.client.focus_msgs.call(null,inst_27657,inst_27653);
var inst_27659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27658);
var inst_27660 = cljs.core.first.call(null,inst_27658);
var inst_27661 = figwheel.client.autoload_QMARK_.call(null);
var state_27700__$1 = (function (){var statearr_27727 = state_27700;
(statearr_27727[(9)] = inst_27659);

(statearr_27727[(8)] = inst_27660);

return statearr_27727;
})();
if(cljs.core.truth_(inst_27661)){
var statearr_27729_27764 = state_27700__$1;
(statearr_27729_27764[(1)] = (8));

} else {
var statearr_27730_27765 = state_27700__$1;
(statearr_27730_27765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (14))){
var inst_27671 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27732_27766 = state_27700__$1;
(statearr_27732_27766[(2)] = inst_27671);

(statearr_27732_27766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (16))){
var state_27700__$1 = state_27700;
var statearr_27733_27767 = state_27700__$1;
(statearr_27733_27767[(2)] = null);

(statearr_27733_27767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (10))){
var inst_27692 = (state_27700[(2)]);
var state_27700__$1 = (function (){var statearr_27734 = state_27700;
(statearr_27734[(11)] = inst_27692);

return statearr_27734;
})();
var statearr_27735_27770 = state_27700__$1;
(statearr_27735_27770[(2)] = null);

(statearr_27735_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (8))){
var inst_27659 = (state_27700[(9)]);
var inst_27663 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27659,opts);
var state_27700__$1 = state_27700;
if(cljs.core.truth_(inst_27663)){
var statearr_27736_27773 = state_27700__$1;
(statearr_27736_27773[(1)] = (11));

} else {
var statearr_27737_27774 = state_27700__$1;
(statearr_27737_27774[(1)] = (12));

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
});})(c__19396__auto___27745,ch))
;
return ((function (switch__17910__auto__,c__19396__auto___27745,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__17911__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__17911__auto____0 = (function (){
var statearr_27741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27741[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__17911__auto__);

(statearr_27741[(1)] = (1));

return statearr_27741;
});
var figwheel$client$file_reloader_plugin_$_state_machine__17911__auto____1 = (function (state_27700){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_27700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object)){
var ex__17914__auto__ = e27742;
var statearr_27743_27775 = state_27700;
(statearr_27743_27775[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27776 = state_27700;
state_27700 = G__27776;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__17911__auto__ = function(state_27700){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__17911__auto____1.call(this,state_27700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__17911__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__17911__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___27745,ch))
})();
var state__19398__auto__ = (function (){var statearr_27744 = f__19397__auto__.call(null);
(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___27745);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___27745,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27777_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27777_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27780 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27780){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e27779){if((e27779 instanceof Error)){
var e = e27779;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27780], null));
} else {
var e = e27779;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_27780))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27781){
var map__27790 = p__27781;
var map__27790__$1 = ((((!((map__27790 == null)))?((((map__27790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27790):map__27790);
var opts = map__27790__$1;
var build_id = cljs.core.get.call(null,map__27790__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27790,map__27790__$1,opts,build_id){
return (function (p__27792){
var vec__27793 = p__27792;
var seq__27794 = cljs.core.seq.call(null,vec__27793);
var first__27795 = cljs.core.first.call(null,seq__27794);
var seq__27794__$1 = cljs.core.next.call(null,seq__27794);
var map__27796 = first__27795;
var map__27796__$1 = ((((!((map__27796 == null)))?((((map__27796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);
var msg = map__27796__$1;
var msg_name = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27794__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27793,seq__27794,first__27795,seq__27794__$1,map__27796,map__27796__$1,msg,msg_name,_,map__27790,map__27790__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27793,seq__27794,first__27795,seq__27794__$1,map__27796,map__27796__$1,msg,msg_name,_,map__27790,map__27790__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27790,map__27790__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27807){
var vec__27808 = p__27807;
var seq__27809 = cljs.core.seq.call(null,vec__27808);
var first__27810 = cljs.core.first.call(null,seq__27809);
var seq__27809__$1 = cljs.core.next.call(null,seq__27809);
var map__27811 = first__27810;
var map__27811__$1 = ((((!((map__27811 == null)))?((((map__27811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27811):map__27811);
var msg = map__27811__$1;
var msg_name = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27809__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27816){
var map__27832 = p__27816;
var map__27832__$1 = ((((!((map__27832 == null)))?((((map__27832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27832):map__27832);
var on_compile_warning = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27832,map__27832__$1,on_compile_warning,on_compile_fail){
return (function (p__27838){
var vec__27839 = p__27838;
var seq__27840 = cljs.core.seq.call(null,vec__27839);
var first__27841 = cljs.core.first.call(null,seq__27840);
var seq__27840__$1 = cljs.core.next.call(null,seq__27840);
var map__27842 = first__27841;
var map__27842__$1 = ((((!((map__27842 == null)))?((((map__27842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27842):map__27842);
var msg = map__27842__$1;
var msg_name = cljs.core.get.call(null,map__27842__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27840__$1;
var pred__27845 = cljs.core._EQ_;
var expr__27846 = msg_name;
if(cljs.core.truth_(pred__27845.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27846))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27845.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27846))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27832,map__27832__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__,msg_hist,msg_names,msg){
return (function (state_28099){
var state_val_28100 = (state_28099[(1)]);
if((state_val_28100 === (7))){
var inst_28019 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28019)){
var statearr_28101_28158 = state_28099__$1;
(statearr_28101_28158[(1)] = (8));

} else {
var statearr_28102_28159 = state_28099__$1;
(statearr_28102_28159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (20))){
var inst_28093 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28103_28160 = state_28099__$1;
(statearr_28103_28160[(2)] = inst_28093);

(statearr_28103_28160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (27))){
var inst_28089 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28104_28161 = state_28099__$1;
(statearr_28104_28161[(2)] = inst_28089);

(statearr_28104_28161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (1))){
var inst_28012 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28012)){
var statearr_28105_28162 = state_28099__$1;
(statearr_28105_28162[(1)] = (2));

} else {
var statearr_28106_28163 = state_28099__$1;
(statearr_28106_28163[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (24))){
var inst_28091 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28107_28164 = state_28099__$1;
(statearr_28107_28164[(2)] = inst_28091);

(statearr_28107_28164[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (4))){
var inst_28097 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28099__$1,inst_28097);
} else {
if((state_val_28100 === (15))){
var inst_28095 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28108_28165 = state_28099__$1;
(statearr_28108_28165[(2)] = inst_28095);

(statearr_28108_28165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (21))){
var inst_28048 = (state_28099[(2)]);
var inst_28049 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28050 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28049);
var state_28099__$1 = (function (){var statearr_28109 = state_28099;
(statearr_28109[(7)] = inst_28048);

return statearr_28109;
})();
var statearr_28110_28166 = state_28099__$1;
(statearr_28110_28166[(2)] = inst_28050);

(statearr_28110_28166[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (31))){
var inst_28078 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28078)){
var statearr_28111_28167 = state_28099__$1;
(statearr_28111_28167[(1)] = (34));

} else {
var statearr_28112_28168 = state_28099__$1;
(statearr_28112_28168[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (32))){
var inst_28087 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28113_28169 = state_28099__$1;
(statearr_28113_28169[(2)] = inst_28087);

(statearr_28113_28169[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (33))){
var inst_28074 = (state_28099[(2)]);
var inst_28075 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28076 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28075);
var state_28099__$1 = (function (){var statearr_28114 = state_28099;
(statearr_28114[(8)] = inst_28074);

return statearr_28114;
})();
var statearr_28115_28170 = state_28099__$1;
(statearr_28115_28170[(2)] = inst_28076);

(statearr_28115_28170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (13))){
var inst_28033 = figwheel.client.heads_up.clear.call(null);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(16),inst_28033);
} else {
if((state_val_28100 === (22))){
var inst_28054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28055 = figwheel.client.heads_up.append_warning_message.call(null,inst_28054);
var state_28099__$1 = state_28099;
var statearr_28116_28171 = state_28099__$1;
(statearr_28116_28171[(2)] = inst_28055);

(statearr_28116_28171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (36))){
var inst_28085 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28117_28172 = state_28099__$1;
(statearr_28117_28172[(2)] = inst_28085);

(statearr_28117_28172[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (29))){
var inst_28065 = (state_28099[(2)]);
var inst_28066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28067 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28066);
var state_28099__$1 = (function (){var statearr_28118 = state_28099;
(statearr_28118[(9)] = inst_28065);

return statearr_28118;
})();
var statearr_28120_28173 = state_28099__$1;
(statearr_28120_28173[(2)] = inst_28067);

(statearr_28120_28173[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (6))){
var inst_28014 = (state_28099[(10)]);
var state_28099__$1 = state_28099;
var statearr_28122_28176 = state_28099__$1;
(statearr_28122_28176[(2)] = inst_28014);

(statearr_28122_28176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (28))){
var inst_28061 = (state_28099[(2)]);
var inst_28062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28063 = figwheel.client.heads_up.display_warning.call(null,inst_28062);
var state_28099__$1 = (function (){var statearr_28124 = state_28099;
(statearr_28124[(11)] = inst_28061);

return statearr_28124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(29),inst_28063);
} else {
if((state_val_28100 === (25))){
var inst_28059 = figwheel.client.heads_up.clear.call(null);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(28),inst_28059);
} else {
if((state_val_28100 === (34))){
var inst_28080 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(37),inst_28080);
} else {
if((state_val_28100 === (17))){
var inst_28039 = (state_28099[(2)]);
var inst_28040 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28041 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28040);
var state_28099__$1 = (function (){var statearr_28125 = state_28099;
(statearr_28125[(12)] = inst_28039);

return statearr_28125;
})();
var statearr_28126_28177 = state_28099__$1;
(statearr_28126_28177[(2)] = inst_28041);

(statearr_28126_28177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (3))){
var inst_28031 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28031)){
var statearr_28127_28179 = state_28099__$1;
(statearr_28127_28179[(1)] = (13));

} else {
var statearr_28128_28180 = state_28099__$1;
(statearr_28128_28180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (12))){
var inst_28027 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28129_28182 = state_28099__$1;
(statearr_28129_28182[(2)] = inst_28027);

(statearr_28129_28182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (2))){
var inst_28014 = (state_28099[(10)]);
var inst_28014__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28099__$1 = (function (){var statearr_28130 = state_28099;
(statearr_28130[(10)] = inst_28014__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28014__$1)){
var statearr_28131_28185 = state_28099__$1;
(statearr_28131_28185[(1)] = (5));

} else {
var statearr_28132_28187 = state_28099__$1;
(statearr_28132_28187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (23))){
var inst_28057 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28057)){
var statearr_28133_28190 = state_28099__$1;
(statearr_28133_28190[(1)] = (25));

} else {
var statearr_28134_28191 = state_28099__$1;
(statearr_28134_28191[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (35))){
var state_28099__$1 = state_28099;
var statearr_28136_28192 = state_28099__$1;
(statearr_28136_28192[(2)] = null);

(statearr_28136_28192[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (19))){
var inst_28052 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28052)){
var statearr_28139_28193 = state_28099__$1;
(statearr_28139_28193[(1)] = (22));

} else {
var statearr_28140_28194 = state_28099__$1;
(statearr_28140_28194[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (11))){
var inst_28023 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28141_28195 = state_28099__$1;
(statearr_28141_28195[(2)] = inst_28023);

(statearr_28141_28195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (9))){
var inst_28025 = figwheel.client.heads_up.clear.call(null);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(12),inst_28025);
} else {
if((state_val_28100 === (5))){
var inst_28016 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28099__$1 = state_28099;
var statearr_28142_28200 = state_28099__$1;
(statearr_28142_28200[(2)] = inst_28016);

(statearr_28142_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (14))){
var inst_28043 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28043)){
var statearr_28143_28201 = state_28099__$1;
(statearr_28143_28201[(1)] = (18));

} else {
var statearr_28144_28202 = state_28099__$1;
(statearr_28144_28202[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (26))){
var inst_28069 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28069)){
var statearr_28145_28203 = state_28099__$1;
(statearr_28145_28203[(1)] = (30));

} else {
var statearr_28146_28204 = state_28099__$1;
(statearr_28146_28204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (16))){
var inst_28035 = (state_28099[(2)]);
var inst_28036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28037 = figwheel.client.heads_up.display_exception.call(null,inst_28036);
var state_28099__$1 = (function (){var statearr_28147 = state_28099;
(statearr_28147[(13)] = inst_28035);

return statearr_28147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(17),inst_28037);
} else {
if((state_val_28100 === (30))){
var inst_28071 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28072 = figwheel.client.heads_up.display_warning.call(null,inst_28071);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(33),inst_28072);
} else {
if((state_val_28100 === (10))){
var inst_28029 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28148_28205 = state_28099__$1;
(statearr_28148_28205[(2)] = inst_28029);

(statearr_28148_28205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (18))){
var inst_28045 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28046 = figwheel.client.heads_up.display_exception.call(null,inst_28045);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(21),inst_28046);
} else {
if((state_val_28100 === (37))){
var inst_28082 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28149_28206 = state_28099__$1;
(statearr_28149_28206[(2)] = inst_28082);

(statearr_28149_28206[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (8))){
var inst_28021 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(11),inst_28021);
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
});})(c__19396__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__17910__auto__,c__19396__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto____0 = (function (){
var statearr_28153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28153[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto__);

(statearr_28153[(1)] = (1));

return statearr_28153;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto____1 = (function (state_28099){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_28099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e28154){if((e28154 instanceof Object)){
var ex__17914__auto__ = e28154;
var statearr_28155_28207 = state_28099;
(statearr_28155_28207[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28208 = state_28099;
state_28099 = G__28208;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto__ = function(state_28099){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto____1.call(this,state_28099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__,msg_hist,msg_names,msg))
})();
var state__19398__auto__ = (function (){var statearr_28156 = f__19397__auto__.call(null);
(statearr_28156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__,msg_hist,msg_names,msg))
);

return c__19396__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19396__auto___28278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___28278,ch){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___28278,ch){
return (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (1))){
var state_28257__$1 = state_28257;
var statearr_28259_28279 = state_28257__$1;
(statearr_28259_28279[(2)] = null);

(statearr_28259_28279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(4),ch);
} else {
if((state_val_28258 === (3))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (4))){
var inst_28245 = (state_28257[(7)]);
var inst_28245__$1 = (state_28257[(2)]);
var state_28257__$1 = (function (){var statearr_28260 = state_28257;
(statearr_28260[(7)] = inst_28245__$1);

return statearr_28260;
})();
if(cljs.core.truth_(inst_28245__$1)){
var statearr_28261_28281 = state_28257__$1;
(statearr_28261_28281[(1)] = (5));

} else {
var statearr_28262_28282 = state_28257__$1;
(statearr_28262_28282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (5))){
var inst_28245 = (state_28257[(7)]);
var inst_28247 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28245);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(8),inst_28247);
} else {
if((state_val_28258 === (6))){
var state_28257__$1 = state_28257;
var statearr_28264_28286 = state_28257__$1;
(statearr_28264_28286[(2)] = null);

(statearr_28264_28286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (7))){
var inst_28253 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28265_28287 = state_28257__$1;
(statearr_28265_28287[(2)] = inst_28253);

(statearr_28265_28287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28249 = (state_28257[(2)]);
var state_28257__$1 = (function (){var statearr_28266 = state_28257;
(statearr_28266[(8)] = inst_28249);

return statearr_28266;
})();
var statearr_28267_28288 = state_28257__$1;
(statearr_28267_28288[(2)] = null);

(statearr_28267_28288[(1)] = (2));


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
});})(c__19396__auto___28278,ch))
;
return ((function (switch__17910__auto__,c__19396__auto___28278,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__17911__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__17911__auto____0 = (function (){
var statearr_28271 = [null,null,null,null,null,null,null,null,null];
(statearr_28271[(0)] = figwheel$client$heads_up_plugin_$_state_machine__17911__auto__);

(statearr_28271[(1)] = (1));

return statearr_28271;
});
var figwheel$client$heads_up_plugin_$_state_machine__17911__auto____1 = (function (state_28257){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e28272){if((e28272 instanceof Object)){
var ex__17914__auto__ = e28272;
var statearr_28273_28294 = state_28257;
(statearr_28273_28294[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28295 = state_28257;
state_28257 = G__28295;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__17911__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__17911__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__17911__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__17911__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___28278,ch))
})();
var state__19398__auto__ = (function (){var statearr_28276 = f__19397__auto__.call(null);
(statearr_28276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___28278);

return statearr_28276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___28278,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_28324){
var state_val_28325 = (state_28324[(1)]);
if((state_val_28325 === (1))){
var inst_28319 = cljs.core.async.timeout.call(null,(3000));
var state_28324__$1 = state_28324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28324__$1,(2),inst_28319);
} else {
if((state_val_28325 === (2))){
var inst_28321 = (state_28324[(2)]);
var inst_28322 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28324__$1 = (function (){var statearr_28326 = state_28324;
(statearr_28326[(7)] = inst_28321);

return statearr_28326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28324__$1,inst_28322);
} else {
return null;
}
}
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__17911__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__17911__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__17911__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var figwheel$client$enforce_project_plugin_$_state_machine__17911__auto____1 = (function (state_28324){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_28324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__17914__auto__ = e28331;
var statearr_28332_28334 = state_28324;
(statearr_28332_28334[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28324;
state_28324 = G__28335;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__17911__auto__ = function(state_28324){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__17911__auto____1.call(this,state_28324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__17911__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__17911__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_28333 = f__19397__auto__.call(null);
(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__,figwheel_version,temp__5278__auto__){
return (function (state_28358){
var state_val_28359 = (state_28358[(1)]);
if((state_val_28359 === (1))){
var inst_28352 = cljs.core.async.timeout.call(null,(2000));
var state_28358__$1 = state_28358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28358__$1,(2),inst_28352);
} else {
if((state_val_28359 === (2))){
var inst_28354 = (state_28358[(2)]);
var inst_28355 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_28356 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28355);
var state_28358__$1 = (function (){var statearr_28360 = state_28358;
(statearr_28360[(7)] = inst_28354);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28358__$1,inst_28356);
} else {
return null;
}
}
});})(c__19396__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto____0 = (function (){
var statearr_28364 = [null,null,null,null,null,null,null,null];
(statearr_28364[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto__);

(statearr_28364[(1)] = (1));

return statearr_28364;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto____1 = (function (state_28358){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_28358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e28365){if((e28365 instanceof Object)){
var ex__17914__auto__ = e28365;
var statearr_28366_28371 = state_28358;
(statearr_28366_28371[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28372 = state_28358;
state_28358 = G__28372;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto__ = function(state_28358){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto____1.call(this,state_28358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__,figwheel_version,temp__5278__auto__))
})();
var state__19398__auto__ = (function (){var statearr_28367 = f__19397__auto__.call(null);
(statearr_28367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_28367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__,figwheel_version,temp__5278__auto__))
);

return c__19396__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28373){
var map__28377 = p__28373;
var map__28377__$1 = ((((!((map__28377 == null)))?((((map__28377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28377):map__28377);
var file = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28379 = "";
var G__28379__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28379),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28379);
var G__28379__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28379__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28379__$1);
if(cljs.core.truth_((function (){var and__8098__auto__ = line;
if(cljs.core.truth_(and__8098__auto__)){
return column;
} else {
return and__8098__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28379__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28379__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28380){
var map__28387 = p__28380;
var map__28387__$1 = ((((!((map__28387 == null)))?((((map__28387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);
var ed = map__28387__$1;
var formatted_exception = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28389_28393 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28390_28394 = null;
var count__28391_28395 = (0);
var i__28392_28396 = (0);
while(true){
if((i__28392_28396 < count__28391_28395)){
var msg_28397 = cljs.core._nth.call(null,chunk__28390_28394,i__28392_28396);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28397);

var G__28398 = seq__28389_28393;
var G__28399 = chunk__28390_28394;
var G__28400 = count__28391_28395;
var G__28401 = (i__28392_28396 + (1));
seq__28389_28393 = G__28398;
chunk__28390_28394 = G__28399;
count__28391_28395 = G__28400;
i__28392_28396 = G__28401;
continue;
} else {
var temp__5278__auto___28402 = cljs.core.seq.call(null,seq__28389_28393);
if(temp__5278__auto___28402){
var seq__28389_28403__$1 = temp__5278__auto___28402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28389_28403__$1)){
var c__9021__auto___28404 = cljs.core.chunk_first.call(null,seq__28389_28403__$1);
var G__28405 = cljs.core.chunk_rest.call(null,seq__28389_28403__$1);
var G__28406 = c__9021__auto___28404;
var G__28407 = cljs.core.count.call(null,c__9021__auto___28404);
var G__28408 = (0);
seq__28389_28393 = G__28405;
chunk__28390_28394 = G__28406;
count__28391_28395 = G__28407;
i__28392_28396 = G__28408;
continue;
} else {
var msg_28409 = cljs.core.first.call(null,seq__28389_28403__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28409);

var G__28410 = cljs.core.next.call(null,seq__28389_28403__$1);
var G__28411 = null;
var G__28412 = (0);
var G__28413 = (0);
seq__28389_28393 = G__28410;
chunk__28390_28394 = G__28411;
count__28391_28395 = G__28412;
i__28392_28396 = G__28413;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28414){
var map__28417 = p__28414;
var map__28417__$1 = ((((!((map__28417 == null)))?((((map__28417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28417):map__28417);
var w = map__28417__$1;
var message = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/anw/1nngns/public/main.out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"/home/pjago/.boot/cache/tmp/home/pjago/Documents/Github/uni-next/anw/1nngns/public/main.out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__8098__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__8098__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__8098__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28429 = cljs.core.seq.call(null,plugins);
var chunk__28430 = null;
var count__28431 = (0);
var i__28432 = (0);
while(true){
if((i__28432 < count__28431)){
var vec__28433 = cljs.core._nth.call(null,chunk__28430,i__28432);
var k = cljs.core.nth.call(null,vec__28433,(0),null);
var plugin = cljs.core.nth.call(null,vec__28433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28439 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28429,chunk__28430,count__28431,i__28432,pl_28439,vec__28433,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28439.call(null,msg_hist);
});})(seq__28429,chunk__28430,count__28431,i__28432,pl_28439,vec__28433,k,plugin))
);
} else {
}

var G__28440 = seq__28429;
var G__28441 = chunk__28430;
var G__28442 = count__28431;
var G__28443 = (i__28432 + (1));
seq__28429 = G__28440;
chunk__28430 = G__28441;
count__28431 = G__28442;
i__28432 = G__28443;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__28429);
if(temp__5278__auto__){
var seq__28429__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28429__$1)){
var c__9021__auto__ = cljs.core.chunk_first.call(null,seq__28429__$1);
var G__28444 = cljs.core.chunk_rest.call(null,seq__28429__$1);
var G__28445 = c__9021__auto__;
var G__28446 = cljs.core.count.call(null,c__9021__auto__);
var G__28447 = (0);
seq__28429 = G__28444;
chunk__28430 = G__28445;
count__28431 = G__28446;
i__28432 = G__28447;
continue;
} else {
var vec__28436 = cljs.core.first.call(null,seq__28429__$1);
var k = cljs.core.nth.call(null,vec__28436,(0),null);
var plugin = cljs.core.nth.call(null,vec__28436,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28448 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28429,chunk__28430,count__28431,i__28432,pl_28448,vec__28436,k,plugin,seq__28429__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28448.call(null,msg_hist);
});})(seq__28429,chunk__28430,count__28431,i__28432,pl_28448,vec__28436,k,plugin,seq__28429__$1,temp__5278__auto__))
);
} else {
}

var G__28449 = cljs.core.next.call(null,seq__28429__$1);
var G__28450 = null;
var G__28451 = (0);
var G__28452 = (0);
seq__28429 = G__28449;
chunk__28430 = G__28450;
count__28431 = G__28451;
i__28432 = G__28452;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28453 = [];
var len__9331__auto___28460 = arguments.length;
var i__9332__auto___28461 = (0);
while(true){
if((i__9332__auto___28461 < len__9331__auto___28460)){
args28453.push((arguments[i__9332__auto___28461]));

var G__28462 = (i__9332__auto___28461 + (1));
i__9332__auto___28461 = G__28462;
continue;
} else {
}
break;
}

var G__28455 = args28453.length;
switch (G__28455) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28453.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28456_28464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28457_28465 = null;
var count__28458_28466 = (0);
var i__28459_28467 = (0);
while(true){
if((i__28459_28467 < count__28458_28466)){
var msg_28468 = cljs.core._nth.call(null,chunk__28457_28465,i__28459_28467);
figwheel.client.socket.handle_incoming_message.call(null,msg_28468);

var G__28469 = seq__28456_28464;
var G__28470 = chunk__28457_28465;
var G__28471 = count__28458_28466;
var G__28472 = (i__28459_28467 + (1));
seq__28456_28464 = G__28469;
chunk__28457_28465 = G__28470;
count__28458_28466 = G__28471;
i__28459_28467 = G__28472;
continue;
} else {
var temp__5278__auto___28473 = cljs.core.seq.call(null,seq__28456_28464);
if(temp__5278__auto___28473){
var seq__28456_28474__$1 = temp__5278__auto___28473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28456_28474__$1)){
var c__9021__auto___28475 = cljs.core.chunk_first.call(null,seq__28456_28474__$1);
var G__28476 = cljs.core.chunk_rest.call(null,seq__28456_28474__$1);
var G__28477 = c__9021__auto___28475;
var G__28478 = cljs.core.count.call(null,c__9021__auto___28475);
var G__28479 = (0);
seq__28456_28464 = G__28476;
chunk__28457_28465 = G__28477;
count__28458_28466 = G__28478;
i__28459_28467 = G__28479;
continue;
} else {
var msg_28480 = cljs.core.first.call(null,seq__28456_28474__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28480);

var G__28481 = cljs.core.next.call(null,seq__28456_28474__$1);
var G__28482 = null;
var G__28483 = (0);
var G__28484 = (0);
seq__28456_28464 = G__28481;
chunk__28457_28465 = G__28482;
count__28458_28466 = G__28483;
i__28459_28467 = G__28484;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__9338__auto__ = [];
var len__9331__auto___28489 = arguments.length;
var i__9332__auto___28490 = (0);
while(true){
if((i__9332__auto___28490 < len__9331__auto___28489)){
args__9338__auto__.push((arguments[i__9332__auto___28490]));

var G__28491 = (i__9332__auto___28490 + (1));
i__9332__auto___28490 = G__28491;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((0) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__9339__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28486){
var map__28487 = p__28486;
var map__28487__$1 = ((((!((map__28487 == null)))?((((map__28487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28487):map__28487);
var opts = map__28487__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28485){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28485));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28493){if((e28493 instanceof Error)){
var e = e28493;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28493;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28497){
var map__28498 = p__28497;
var map__28498__$1 = ((((!((map__28498 == null)))?((((map__28498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28498):map__28498);
var msg_name = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map