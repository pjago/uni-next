// Compiled by ClojureScript 1.9.542 {}
goog.provide('uni_next.ui');
goog.require('cljs.core');
goog.require('common.math');
goog.require('clojure.string');
goog.require('common.web');
goog.require('om.next');
goog.require('om.dom');
goog.require('uni_next.parser');
/**
 * @constructor
 */
uni_next.ui.Blade = (function uni_next$ui$Blade(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.ui.Blade.prototype = goog.object.clone(React.Component.prototype);

var x18950_18962 = uni_next.ui.Blade.prototype;
x18950_18962.componentWillUpdate = ((function (x18950_18962){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___18963 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___18964 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___18963,next_ident__16519__auto___18964)){
var idxr__16520__auto___18965 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___18965 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___18965),((function (idxr__16520__auto___18965,ident__16518__auto___18963,next_ident__16519__auto___18964,this__16514__auto__,x18950_18962){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___18963], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___18964], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___18965,ident__16518__auto___18963,next_ident__16519__auto___18964,this__16514__auto__,x18950_18962))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x18950_18962))
;

x18950_18962.shouldComponentUpdate = ((function (x18950_18962){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__18952 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18952);
} else {
return G__18952;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x18950_18962))
;

x18950_18962.componentWillUnmount = ((function (x18950_18962){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x18950_18962))
;

x18950_18962.componentDidUpdate = ((function (x18950_18962){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x18950_18962))
;

x18950_18962.isMounted = ((function (x18950_18962){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18950_18962))
;

x18950_18962.componentWillMount = ((function (x18950_18962){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x18950_18962))
;

x18950_18962.render = ((function (x18950_18962){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_18953 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18954 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18955 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18956 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18957 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__18958 = om.next.props.call(null,this$);
var map__18958__$1 = ((((!((map__18958 == null)))?((((map__18958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18958):map__18958);
var geometry = cljs.core.get.call(null,map__18958__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math._SLASH_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(geometry),(2)),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18957;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18956;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18955;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18954;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18953;
}});})(x18950_18962))
;


uni_next.ui.Blade.prototype.constructor = uni_next.ui.Blade;

uni_next.ui.Blade.prototype.constructor.displayName = "uni-next.ui/Blade";

uni_next.ui.Blade.prototype.om$isComponent = true;

var x18960_18966 = uni_next.ui.Blade;
/** @nocollapse */
x18960_18966.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x18960_18966.om$next$IQuery$query$arity$1 = ((function (x18960_18966){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x18960_18966))
;


var x18961_18967 = uni_next.ui.Blade.prototype;

x18961_18967.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x18961_18967.om$next$IQuery$query$arity$1 = ((function (x18961_18967){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x18961_18967))
;


uni_next.ui.Blade.cljs$lang$type = true;

uni_next.ui.Blade.cljs$lang$ctorStr = "uni-next.ui/Blade";

uni_next.ui.Blade.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.ui/Blade");
});
uni_next.ui.blade = om.next.factory.call(null,uni_next.ui.Blade);
/**
 * @constructor
 */
uni_next.ui.Shaft = (function uni_next$ui$Shaft(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.ui.Shaft.prototype = goog.object.clone(React.Component.prototype);

var x18974_18986 = uni_next.ui.Shaft.prototype;
x18974_18986.componentWillUpdate = ((function (x18974_18986){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___18987 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___18988 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___18987,next_ident__16519__auto___18988)){
var idxr__16520__auto___18989 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___18989 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___18989),((function (idxr__16520__auto___18989,ident__16518__auto___18987,next_ident__16519__auto___18988,this__16514__auto__,x18974_18986){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___18987], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___18988], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___18989,ident__16518__auto___18987,next_ident__16519__auto___18988,this__16514__auto__,x18974_18986))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x18974_18986))
;

x18974_18986.shouldComponentUpdate = ((function (x18974_18986){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__18976 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18976);
} else {
return G__18976;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x18974_18986))
;

x18974_18986.componentWillUnmount = ((function (x18974_18986){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x18974_18986))
;

x18974_18986.componentDidUpdate = ((function (x18974_18986){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x18974_18986))
;

x18974_18986.isMounted = ((function (x18974_18986){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18974_18986))
;

x18974_18986.componentWillMount = ((function (x18974_18986){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x18974_18986))
;

x18974_18986.render = ((function (x18974_18986){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_18977 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18978 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18979 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18980 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18981 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__18982 = om.next.props.call(null,this$);
var map__18982__$1 = ((((!((map__18982 == null)))?((((map__18982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18982):map__18982);
var props = map__18982__$1;
var blade = cljs.core.get.call(null,map__18982__$1,new cljs.core.Keyword(null,"blade","blade",25118060));
var geometry = cljs.core.get.call(null,map__18982__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var rotation = cljs.core.get.call(null,map__18982__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var spacing = common.math._SLASH_.call(null,(360),cljs.core.count.call(null,blade));
return cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),rotation,(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),cljs.core.map_indexed.call(null,((function (map__18982,map__18982__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_18977,_STAR_depth_STAR_18978,_STAR_shared_STAR_18979,_STAR_instrument_STAR_18980,_STAR_parent_STAR_18981,this$,this__16513__auto__,x18974_18986){
return (function (p1__18968_SHARP_,p2__18969_SHARP_){
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),common.math._STAR_.call(null,p1__18968_SHARP_,spacing),(0)], null)], null),uni_next.ui.body.call(null,p2__18969_SHARP_));
});})(map__18982,map__18982__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_18977,_STAR_depth_STAR_18978,_STAR_shared_STAR_18979,_STAR_instrument_STAR_18980,_STAR_parent_STAR_18981,this$,this__16513__auto__,x18974_18986))
,blade));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18981;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18980;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18979;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18978;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18977;
}});})(x18974_18986))
;


uni_next.ui.Shaft.prototype.constructor = uni_next.ui.Shaft;

uni_next.ui.Shaft.prototype.constructor.displayName = "uni-next.ui/Shaft";

uni_next.ui.Shaft.prototype.om$isComponent = true;

var x18984_18990 = uni_next.ui.Shaft;
/** @nocollapse */
x18984_18990.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x18984_18990.om$next$IQuery$query$arity$1 = ((function (x18984_18990){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x18984_18990))
;


var x18985_18991 = uni_next.ui.Shaft.prototype;

x18985_18991.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x18985_18991.om$next$IQuery$query$arity$1 = ((function (x18985_18991){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x18985_18991))
;


uni_next.ui.Shaft.cljs$lang$type = true;

uni_next.ui.Shaft.cljs$lang$ctorStr = "uni-next.ui/Shaft";

uni_next.ui.Shaft.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.ui/Shaft");
});
uni_next.ui.shaft = om.next.factory.call(null,uni_next.ui.Shaft);
/**
 * @constructor
 */
uni_next.ui.Ir = (function uni_next$ui$Ir(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.ui.Ir.prototype = goog.object.clone(React.Component.prototype);

var x18996_19008 = uni_next.ui.Ir.prototype;
x18996_19008.componentWillUpdate = ((function (x18996_19008){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___19009 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___19010 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___19009,next_ident__16519__auto___19010)){
var idxr__16520__auto___19011 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___19011 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___19011),((function (idxr__16520__auto___19011,ident__16518__auto___19009,next_ident__16519__auto___19010,this__16514__auto__,x18996_19008){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___19009], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___19010], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___19011,ident__16518__auto___19009,next_ident__16519__auto___19010,this__16514__auto__,x18996_19008))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x18996_19008))
;

x18996_19008.shouldComponentUpdate = ((function (x18996_19008){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__18998 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18998);
} else {
return G__18998;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x18996_19008))
;

x18996_19008.componentWillUnmount = ((function (x18996_19008){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x18996_19008))
;

x18996_19008.componentDidUpdate = ((function (x18996_19008){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x18996_19008))
;

x18996_19008.isMounted = ((function (x18996_19008){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18996_19008))
;

x18996_19008.componentWillMount = ((function (x18996_19008){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x18996_19008))
;

x18996_19008.componentDidMount = ((function (x18996_19008){
return (function (){
var this$ = this;
return om.dom.node.call(null,this$).addEventListener("raycaster-intersection-cleared",((function (this$,x18996_19008){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),(function (){var x__9044__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$))),new cljs.core.Keyword(null,"count","count",2139924085)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(this$,x18996_19008))
);
});})(x18996_19008))
;

x18996_19008.render = ((function (x18996_19008){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_18999 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19000 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19001 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19002 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19003 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__19004 = om.next.props.call(null,this$);
var map__19004__$1 = ((((!((map__19004 == null)))?((((map__19004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19004):map__19004);
var selector = cljs.core.get.call(null,map__19004__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"far","far",85807546),(1),new cljs.core.Keyword(null,"interval","interval",1708495417),(15),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"objects","objects",2099713734),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(".\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"/","\\/"))].join(''),new cljs.core.Keyword(null,"showLine","showLine",157295694),true], null)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19003;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19002;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19001;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19000;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18999;
}});})(x18996_19008))
;


uni_next.ui.Ir.prototype.constructor = uni_next.ui.Ir;

uni_next.ui.Ir.prototype.constructor.displayName = "uni-next.ui/Ir";

uni_next.ui.Ir.prototype.om$isComponent = true;

var x19006_19012 = uni_next.ui.Ir;
/** @nocollapse */
x19006_19012.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19006_19012.om$next$IQuery$query$arity$1 = ((function (x19006_19012){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19006_19012))
;


var x19007_19013 = uni_next.ui.Ir.prototype;

x19007_19013.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19007_19013.om$next$IQuery$query$arity$1 = ((function (x19007_19013){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19007_19013))
;


uni_next.ui.Ir.cljs$lang$type = true;

uni_next.ui.Ir.cljs$lang$ctorStr = "uni-next.ui/Ir";

uni_next.ui.Ir.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.ui/Ir");
});
uni_next.ui.ir = om.next.factory.call(null,uni_next.ui.Ir);
/**
 * @constructor
 */
uni_next.ui.Fan = (function uni_next$ui$Fan(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.ui.Fan.prototype = goog.object.clone(React.Component.prototype);

var x19018_19032 = uni_next.ui.Fan.prototype;
x19018_19032.componentWillUpdate = ((function (x19018_19032){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___19033 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___19034 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___19033,next_ident__16519__auto___19034)){
var idxr__16520__auto___19035 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___19035 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___19035),((function (idxr__16520__auto___19035,ident__16518__auto___19033,next_ident__16519__auto___19034,this__16514__auto__,x19018_19032){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___19033], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___19034], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___19035,ident__16518__auto___19033,next_ident__16519__auto___19034,this__16514__auto__,x19018_19032))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x19018_19032))
;

x19018_19032.shouldComponentUpdate = ((function (x19018_19032){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__19020 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19020);
} else {
return G__19020;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x19018_19032))
;

x19018_19032.componentWillUnmount = ((function (x19018_19032){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19018_19032))
;

x19018_19032.componentDidUpdate = ((function (x19018_19032){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x19018_19032))
;

x19018_19032.isMounted = ((function (x19018_19032){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19018_19032))
;

x19018_19032.componentWillMount = ((function (x19018_19032){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19018_19032))
;

x19018_19032.render = ((function (x19018_19032){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_19021 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19022 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19023 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19024 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19025 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var map__19026 = om.next.props.call(null,this$);
var map__19026__$1 = ((((!((map__19026 == null)))?((((map__19026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19026):map__19026);
var props = map__19026__$1;
var shaft = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
var position = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var geometry = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var map__19027 = geometry;
var map__19027__$1 = ((((!((map__19027 == null)))?((((map__19027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19027):map__19027);
var d = cljs.core.get.call(null,map__19027__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var h = cljs.core.get.call(null,map__19027__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),common.math._SLASH_.call(null,h,(2)),common.math._SLASH_.call(null,d,(3))], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),common.math._.call(null,h),(1)], null)], null),cljs.core.map.call(null,uni_next.ui.body,ir)),cljs.core.map.call(null,uni_next.ui.body,shaft));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19025;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19024;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19023;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19022;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19021;
}});})(x19018_19032))
;


uni_next.ui.Fan.prototype.constructor = uni_next.ui.Fan;

uni_next.ui.Fan.prototype.constructor.displayName = "uni-next.ui/Fan";

uni_next.ui.Fan.prototype.om$isComponent = true;

var x19030_19036 = uni_next.ui.Fan;
/** @nocollapse */
x19030_19036.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19030_19036.om$next$IQuery$query$arity$1 = ((function (x19030_19036){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x19030_19036))
;


var x19031_19037 = uni_next.ui.Fan.prototype;

x19031_19037.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19031_19037.om$next$IQuery$query$arity$1 = ((function (x19031_19037){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x19031_19037))
;


uni_next.ui.Fan.cljs$lang$type = true;

uni_next.ui.Fan.cljs$lang$ctorStr = "uni-next.ui/Fan";

uni_next.ui.Fan.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.ui/Fan");
});
uni_next.ui.fan = om.next.factory.call(null,uni_next.ui.Fan);
/**
 * @constructor
 */
uni_next.ui.Body = (function uni_next$ui$Body(){
var this__16671__auto__ = this;
React.Component.apply(this__16671__auto__,arguments);

if(!((this__16671__auto__.initLocalState == null))){
this__16671__auto__.state = this__16671__auto__.initLocalState();
} else {
this__16671__auto__.state = {};
}

return this__16671__auto__;
});

uni_next.ui.Body.prototype = goog.object.clone(React.Component.prototype);

var x19042_19054 = uni_next.ui.Body.prototype;
x19042_19054.componentWillUpdate = ((function (x19042_19054){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
if(((!((this__16514__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16514__auto__.om$next$Ident$)))?true:false):false)){
var ident__16518__auto___19055 = om.next.ident.call(null,this__16514__auto__,om.next.props.call(null,this__16514__auto__));
var next_ident__16519__auto___19056 = om.next.ident.call(null,this__16514__auto__,om.next._next_props.call(null,next_props__16515__auto__,this__16514__auto__));
if(cljs.core.not_EQ_.call(null,ident__16518__auto___19055,next_ident__16519__auto___19056)){
var idxr__16520__auto___19057 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16520__auto___19057 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16520__auto___19057),((function (idxr__16520__auto___19057,ident__16518__auto___19055,next_ident__16519__auto___19056,this__16514__auto__,x19042_19054){
return (function (indexes__16521__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16521__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16518__auto___19055], null),cljs.core.disj,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16519__auto___19056], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16514__auto__);
});})(idxr__16520__auto___19057,ident__16518__auto___19055,next_ident__16519__auto___19056,this__16514__auto__,x19042_19054))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16514__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16514__auto__);
});})(x19042_19054))
;

x19042_19054.shouldComponentUpdate = ((function (x19042_19054){
return (function (next_props__16515__auto__,next_state__16516__auto__){
var this__16514__auto__ = this;
var next_children__16517__auto__ = next_props__16515__auto__.children;
var next_props__16515__auto____$1 = goog.object.get(next_props__16515__auto__,"omcljs$value");
var next_props__16515__auto____$2 = (function (){var G__19044 = next_props__16515__auto____$1;
if((next_props__16515__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19044);
} else {
return G__19044;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16514__auto__),next_props__16515__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16514__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16514__auto__.state,"omcljs$state"),goog.object.get(next_state__16516__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16514__auto__.props.children,next_children__16517__auto__);
}
}
});})(x19042_19054))
;

x19042_19054.componentWillUnmount = ((function (x19042_19054){
return (function (){
var this__16514__auto__ = this;
var r__16525__auto__ = om.next.get_reconciler.call(null,this__16514__auto__);
var cfg__16526__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16525__auto__);
var st__16527__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
var indexer__16524__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16526__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16527__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16527__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16514__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16527__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16514__auto__);
} else {
}

if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19042_19054))
;

x19042_19054.componentDidUpdate = ((function (x19042_19054){
return (function (prev_props__16522__auto__,prev_state__16523__auto__){
var this__16514__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16514__auto__);
});})(x19042_19054))
;

x19042_19054.isMounted = ((function (x19042_19054){
return (function (){
var this__16514__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16514__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19042_19054))
;

x19042_19054.componentWillMount = ((function (x19042_19054){
return (function (){
var this__16514__auto__ = this;
var indexer__16524__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16524__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16524__auto__,this__16514__auto__);
}
});})(x19042_19054))
;

x19042_19054.componentDidMount = ((function (x19042_19054){
return (function (){
var this$ = this;
var uid = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$)));
var G__19045 = om.dom.node.call(null,this$);
(G__19045["className"] = clojure.string.join.call(null," ",uni_next.parser.parents.call(null,uid)));

(G__19045["id"] = uid);

return G__19045;
});})(x19042_19054))
;

x19042_19054.render = ((function (x19042_19054){
return (function (){
var this__16513__auto__ = this;
var this$ = this__16513__auto__;
var _STAR_reconciler_STAR_19046 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19047 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19048 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19049 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19050 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16513__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16513__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16513__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16513__auto__);

om.next._STAR_parent_STAR_ = this__16513__auto__;

try{var props = om.next.props.call(null,this$);
return (function (){var G__19051 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
var G__19051__$1 = (((G__19051 instanceof cljs.core.Keyword))?G__19051.fqn:null);
switch (G__19051__$1) {
case "fan":
return uni_next.ui.fan;

break;
case "shaft":
return uni_next.ui.shaft;

break;
case "blade":
return uni_next.ui.blade;

break;
case "ir":
return uni_next.ui.ir;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)))].join('')));

}
})().call(null,props);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19050;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19049;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19048;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19047;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19046;
}});})(x19042_19054))
;


uni_next.ui.Body.prototype.constructor = uni_next.ui.Body;

uni_next.ui.Body.prototype.constructor.displayName = "uni-next.ui/Body";

uni_next.ui.Body.prototype.om$isComponent = true;

var x19052_19059 = uni_next.ui.Body;
/** @nocollapse */
x19052_19059.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19052_19059.om$next$Ident$ident$arity$2 = ((function (x19052_19059){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x19052_19059))
;

/** @nocollapse */
x19052_19059.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19052_19059.om$next$IQuery$query$arity$1 = ((function (x19052_19059){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x19052_19059))
;


var x19053_19060 = uni_next.ui.Body.prototype;

x19053_19060.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x19053_19060.om$next$Ident$ident$arity$2 = ((function (x19053_19060){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x19053_19060))
;


x19053_19060.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19053_19060.om$next$IQuery$query$arity$1 = ((function (x19053_19060){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x19053_19060))
;


uni_next.ui.Body.cljs$lang$type = true;

uni_next.ui.Body.cljs$lang$ctorStr = "uni-next.ui/Body";

uni_next.ui.Body.cljs$lang$ctorPrWriter = (function (this__16674__auto__,writer__16675__auto__,opt__16676__auto__){
return cljs.core._write.call(null,writer__16675__auto__,"uni-next.ui/Body");
});
uni_next.ui.body = om.next.factory.call(null,uni_next.ui.Body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,cljs.core.str,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)),cljs.core.meta)], null));

//# sourceMappingURL=ui.js.map