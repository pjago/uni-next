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
var this__16674__auto__ = this;
React.Component.apply(this__16674__auto__,arguments);

if(!((this__16674__auto__.initLocalState == null))){
this__16674__auto__.state = this__16674__auto__.initLocalState();
} else {
this__16674__auto__.state = {};
}

return this__16674__auto__;
});

uni_next.ui.Blade.prototype = goog.object.clone(React.Component.prototype);

var x18953_18965 = uni_next.ui.Blade.prototype;
x18953_18965.componentWillUpdate = ((function (x18953_18965){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
if(((!((this__16517__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16517__auto__.om$next$Ident$)))?true:false):false)){
var ident__16521__auto___18966 = om.next.ident.call(null,this__16517__auto__,om.next.props.call(null,this__16517__auto__));
var next_ident__16522__auto___18967 = om.next.ident.call(null,this__16517__auto__,om.next._next_props.call(null,next_props__16518__auto__,this__16517__auto__));
if(cljs.core.not_EQ_.call(null,ident__16521__auto___18966,next_ident__16522__auto___18967)){
var idxr__16523__auto___18968 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16523__auto___18968 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16523__auto___18968),((function (idxr__16523__auto___18968,ident__16521__auto___18966,next_ident__16522__auto___18967,this__16517__auto__,x18953_18965){
return (function (indexes__16524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16521__auto___18966], null),cljs.core.disj,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16522__auto___18967], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16517__auto__);
});})(idxr__16523__auto___18968,ident__16521__auto___18966,next_ident__16522__auto___18967,this__16517__auto__,x18953_18965))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16517__auto__);
});})(x18953_18965))
;

x18953_18965.shouldComponentUpdate = ((function (x18953_18965){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
var next_children__16520__auto__ = next_props__16518__auto__.children;
var next_props__16518__auto____$1 = goog.object.get(next_props__16518__auto__,"omcljs$value");
var next_props__16518__auto____$2 = (function (){var G__18955 = next_props__16518__auto____$1;
if((next_props__16518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18955);
} else {
return G__18955;
}
})();
var or__8113__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16517__auto__),next_props__16518__auto____$2);
if(or__8113__auto__){
return or__8113__auto__;
} else {
var or__8113__auto____$1 = (function (){var and__8101__auto__ = this__16517__auto__.state;
if(cljs.core.truth_(and__8101__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16517__auto__.state,"omcljs$state"),goog.object.get(next_state__16519__auto__,"omcljs$state"));
} else {
return and__8101__auto__;
}
})();
if(cljs.core.truth_(or__8113__auto____$1)){
return or__8113__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16517__auto__.props.children,next_children__16520__auto__);
}
}
});})(x18953_18965))
;

x18953_18965.componentWillUnmount = ((function (x18953_18965){
return (function (){
var this__16517__auto__ = this;
var r__16528__auto__ = om.next.get_reconciler.call(null,this__16517__auto__);
var cfg__16529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16528__auto__);
var st__16530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
var indexer__16527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
if(cljs.core.truth_((function (){var and__8101__auto__ = !((st__16530__auto__ == null));
if(and__8101__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16517__auto__], null));
} else {
return and__8101__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16517__auto__);
} else {
}

if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x18953_18965))
;

x18953_18965.componentDidUpdate = ((function (x18953_18965){
return (function (prev_props__16525__auto__,prev_state__16526__auto__){
var this__16517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16517__auto__);
});})(x18953_18965))
;

x18953_18965.isMounted = ((function (x18953_18965){
return (function (){
var this__16517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18953_18965))
;

x18953_18965.componentWillMount = ((function (x18953_18965){
return (function (){
var this__16517__auto__ = this;
var indexer__16527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x18953_18965))
;

x18953_18965.render = ((function (x18953_18965){
return (function (){
var this__16516__auto__ = this;
var this$ = this__16516__auto__;
var _STAR_reconciler_STAR_18956 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18957 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18958 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18959 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18960 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16516__auto__);

om.next._STAR_parent_STAR_ = this__16516__auto__;

try{var map__18961 = om.next.props.call(null,this$);
var map__18961__$1 = ((((!((map__18961 == null)))?((((map__18961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18961):map__18961);
var geometry = cljs.core.get.call(null,map__18961__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math._SLASH_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(geometry),(2)),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18960;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18959;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18958;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18957;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18956;
}});})(x18953_18965))
;


uni_next.ui.Blade.prototype.constructor = uni_next.ui.Blade;

uni_next.ui.Blade.prototype.constructor.displayName = "uni-next.ui/Blade";

uni_next.ui.Blade.prototype.om$isComponent = true;

var x18963_18969 = uni_next.ui.Blade;
/** @nocollapse */
x18963_18969.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x18963_18969.om$next$IQuery$query$arity$1 = ((function (x18963_18969){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x18963_18969))
;


var x18964_18970 = uni_next.ui.Blade.prototype;

x18964_18970.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x18964_18970.om$next$IQuery$query$arity$1 = ((function (x18964_18970){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x18964_18970))
;


uni_next.ui.Blade.cljs$lang$type = true;

uni_next.ui.Blade.cljs$lang$ctorStr = "uni-next.ui/Blade";

uni_next.ui.Blade.cljs$lang$ctorPrWriter = (function (this__16677__auto__,writer__16678__auto__,opt__16679__auto__){
return cljs.core._write.call(null,writer__16678__auto__,"uni-next.ui/Blade");
});
uni_next.ui.blade = om.next.factory.call(null,uni_next.ui.Blade);
/**
 * @constructor
 */
uni_next.ui.Shaft = (function uni_next$ui$Shaft(){
var this__16674__auto__ = this;
React.Component.apply(this__16674__auto__,arguments);

if(!((this__16674__auto__.initLocalState == null))){
this__16674__auto__.state = this__16674__auto__.initLocalState();
} else {
this__16674__auto__.state = {};
}

return this__16674__auto__;
});

uni_next.ui.Shaft.prototype = goog.object.clone(React.Component.prototype);

var x18977_18989 = uni_next.ui.Shaft.prototype;
x18977_18989.componentWillUpdate = ((function (x18977_18989){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
if(((!((this__16517__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16517__auto__.om$next$Ident$)))?true:false):false)){
var ident__16521__auto___18990 = om.next.ident.call(null,this__16517__auto__,om.next.props.call(null,this__16517__auto__));
var next_ident__16522__auto___18991 = om.next.ident.call(null,this__16517__auto__,om.next._next_props.call(null,next_props__16518__auto__,this__16517__auto__));
if(cljs.core.not_EQ_.call(null,ident__16521__auto___18990,next_ident__16522__auto___18991)){
var idxr__16523__auto___18992 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16523__auto___18992 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16523__auto___18992),((function (idxr__16523__auto___18992,ident__16521__auto___18990,next_ident__16522__auto___18991,this__16517__auto__,x18977_18989){
return (function (indexes__16524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16521__auto___18990], null),cljs.core.disj,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16522__auto___18991], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16517__auto__);
});})(idxr__16523__auto___18992,ident__16521__auto___18990,next_ident__16522__auto___18991,this__16517__auto__,x18977_18989))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16517__auto__);
});})(x18977_18989))
;

x18977_18989.shouldComponentUpdate = ((function (x18977_18989){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
var next_children__16520__auto__ = next_props__16518__auto__.children;
var next_props__16518__auto____$1 = goog.object.get(next_props__16518__auto__,"omcljs$value");
var next_props__16518__auto____$2 = (function (){var G__18979 = next_props__16518__auto____$1;
if((next_props__16518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18979);
} else {
return G__18979;
}
})();
var or__8113__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16517__auto__),next_props__16518__auto____$2);
if(or__8113__auto__){
return or__8113__auto__;
} else {
var or__8113__auto____$1 = (function (){var and__8101__auto__ = this__16517__auto__.state;
if(cljs.core.truth_(and__8101__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16517__auto__.state,"omcljs$state"),goog.object.get(next_state__16519__auto__,"omcljs$state"));
} else {
return and__8101__auto__;
}
})();
if(cljs.core.truth_(or__8113__auto____$1)){
return or__8113__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16517__auto__.props.children,next_children__16520__auto__);
}
}
});})(x18977_18989))
;

x18977_18989.componentWillUnmount = ((function (x18977_18989){
return (function (){
var this__16517__auto__ = this;
var r__16528__auto__ = om.next.get_reconciler.call(null,this__16517__auto__);
var cfg__16529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16528__auto__);
var st__16530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
var indexer__16527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
if(cljs.core.truth_((function (){var and__8101__auto__ = !((st__16530__auto__ == null));
if(and__8101__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16517__auto__], null));
} else {
return and__8101__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16517__auto__);
} else {
}

if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x18977_18989))
;

x18977_18989.componentDidUpdate = ((function (x18977_18989){
return (function (prev_props__16525__auto__,prev_state__16526__auto__){
var this__16517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16517__auto__);
});})(x18977_18989))
;

x18977_18989.isMounted = ((function (x18977_18989){
return (function (){
var this__16517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18977_18989))
;

x18977_18989.componentWillMount = ((function (x18977_18989){
return (function (){
var this__16517__auto__ = this;
var indexer__16527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x18977_18989))
;

x18977_18989.render = ((function (x18977_18989){
return (function (){
var this__16516__auto__ = this;
var this$ = this__16516__auto__;
var _STAR_reconciler_STAR_18980 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18981 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18982 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18983 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18984 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16516__auto__);

om.next._STAR_parent_STAR_ = this__16516__auto__;

try{var map__18985 = om.next.props.call(null,this$);
var map__18985__$1 = ((((!((map__18985 == null)))?((((map__18985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18985):map__18985);
var props = map__18985__$1;
var blade = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"blade","blade",25118060));
var geometry = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var rotation = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var spacing = common.math._SLASH_.call(null,(360),cljs.core.count.call(null,blade));
return cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),rotation,(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),cljs.core.map_indexed.call(null,((function (map__18985,map__18985__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_18980,_STAR_depth_STAR_18981,_STAR_shared_STAR_18982,_STAR_instrument_STAR_18983,_STAR_parent_STAR_18984,this$,this__16516__auto__,x18977_18989){
return (function (p1__18971_SHARP_,p2__18972_SHARP_){
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),common.math._STAR_.call(null,p1__18971_SHARP_,spacing),(0)], null)], null),uni_next.ui.body.call(null,p2__18972_SHARP_));
});})(map__18985,map__18985__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_18980,_STAR_depth_STAR_18981,_STAR_shared_STAR_18982,_STAR_instrument_STAR_18983,_STAR_parent_STAR_18984,this$,this__16516__auto__,x18977_18989))
,blade));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18984;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18983;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18982;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18981;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18980;
}});})(x18977_18989))
;


uni_next.ui.Shaft.prototype.constructor = uni_next.ui.Shaft;

uni_next.ui.Shaft.prototype.constructor.displayName = "uni-next.ui/Shaft";

uni_next.ui.Shaft.prototype.om$isComponent = true;

var x18987_18993 = uni_next.ui.Shaft;
/** @nocollapse */
x18987_18993.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x18987_18993.om$next$IQuery$query$arity$1 = ((function (x18987_18993){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x18987_18993))
;


var x18988_18994 = uni_next.ui.Shaft.prototype;

x18988_18994.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x18988_18994.om$next$IQuery$query$arity$1 = ((function (x18988_18994){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x18988_18994))
;


uni_next.ui.Shaft.cljs$lang$type = true;

uni_next.ui.Shaft.cljs$lang$ctorStr = "uni-next.ui/Shaft";

uni_next.ui.Shaft.cljs$lang$ctorPrWriter = (function (this__16677__auto__,writer__16678__auto__,opt__16679__auto__){
return cljs.core._write.call(null,writer__16678__auto__,"uni-next.ui/Shaft");
});
uni_next.ui.shaft = om.next.factory.call(null,uni_next.ui.Shaft);
/**
 * @constructor
 */
uni_next.ui.Ir = (function uni_next$ui$Ir(){
var this__16674__auto__ = this;
React.Component.apply(this__16674__auto__,arguments);

if(!((this__16674__auto__.initLocalState == null))){
this__16674__auto__.state = this__16674__auto__.initLocalState();
} else {
this__16674__auto__.state = {};
}

return this__16674__auto__;
});

uni_next.ui.Ir.prototype = goog.object.clone(React.Component.prototype);

var x18999_19011 = uni_next.ui.Ir.prototype;
x18999_19011.componentWillUpdate = ((function (x18999_19011){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
if(((!((this__16517__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16517__auto__.om$next$Ident$)))?true:false):false)){
var ident__16521__auto___19012 = om.next.ident.call(null,this__16517__auto__,om.next.props.call(null,this__16517__auto__));
var next_ident__16522__auto___19013 = om.next.ident.call(null,this__16517__auto__,om.next._next_props.call(null,next_props__16518__auto__,this__16517__auto__));
if(cljs.core.not_EQ_.call(null,ident__16521__auto___19012,next_ident__16522__auto___19013)){
var idxr__16523__auto___19014 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16523__auto___19014 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16523__auto___19014),((function (idxr__16523__auto___19014,ident__16521__auto___19012,next_ident__16522__auto___19013,this__16517__auto__,x18999_19011){
return (function (indexes__16524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16521__auto___19012], null),cljs.core.disj,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16522__auto___19013], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16517__auto__);
});})(idxr__16523__auto___19014,ident__16521__auto___19012,next_ident__16522__auto___19013,this__16517__auto__,x18999_19011))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16517__auto__);
});})(x18999_19011))
;

x18999_19011.shouldComponentUpdate = ((function (x18999_19011){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
var next_children__16520__auto__ = next_props__16518__auto__.children;
var next_props__16518__auto____$1 = goog.object.get(next_props__16518__auto__,"omcljs$value");
var next_props__16518__auto____$2 = (function (){var G__19001 = next_props__16518__auto____$1;
if((next_props__16518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19001);
} else {
return G__19001;
}
})();
var or__8113__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16517__auto__),next_props__16518__auto____$2);
if(or__8113__auto__){
return or__8113__auto__;
} else {
var or__8113__auto____$1 = (function (){var and__8101__auto__ = this__16517__auto__.state;
if(cljs.core.truth_(and__8101__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16517__auto__.state,"omcljs$state"),goog.object.get(next_state__16519__auto__,"omcljs$state"));
} else {
return and__8101__auto__;
}
})();
if(cljs.core.truth_(or__8113__auto____$1)){
return or__8113__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16517__auto__.props.children,next_children__16520__auto__);
}
}
});})(x18999_19011))
;

x18999_19011.componentWillUnmount = ((function (x18999_19011){
return (function (){
var this__16517__auto__ = this;
var r__16528__auto__ = om.next.get_reconciler.call(null,this__16517__auto__);
var cfg__16529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16528__auto__);
var st__16530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
var indexer__16527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
if(cljs.core.truth_((function (){var and__8101__auto__ = !((st__16530__auto__ == null));
if(and__8101__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16517__auto__], null));
} else {
return and__8101__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16517__auto__);
} else {
}

if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x18999_19011))
;

x18999_19011.componentDidUpdate = ((function (x18999_19011){
return (function (prev_props__16525__auto__,prev_state__16526__auto__){
var this__16517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16517__auto__);
});})(x18999_19011))
;

x18999_19011.isMounted = ((function (x18999_19011){
return (function (){
var this__16517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18999_19011))
;

x18999_19011.componentWillMount = ((function (x18999_19011){
return (function (){
var this__16517__auto__ = this;
var indexer__16527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x18999_19011))
;

x18999_19011.componentDidMount = ((function (x18999_19011){
return (function (){
var this$ = this;
return om.dom.node.call(null,this$).addEventListener("raycaster-intersection-cleared",((function (this$,x18999_19011){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),(function (){var x__9047__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$))),new cljs.core.Keyword(null,"count","count",2139924085)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9047__auto__);
})())))], null));
});})(this$,x18999_19011))
);
});})(x18999_19011))
;

x18999_19011.render = ((function (x18999_19011){
return (function (){
var this__16516__auto__ = this;
var this$ = this__16516__auto__;
var _STAR_reconciler_STAR_19002 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19003 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19004 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19005 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19006 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16516__auto__);

om.next._STAR_parent_STAR_ = this__16516__auto__;

try{var map__19007 = om.next.props.call(null,this$);
var map__19007__$1 = ((((!((map__19007 == null)))?((((map__19007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19007):map__19007);
var selector = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
var relative = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword("position","scale","position/scale",1456884672));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),relative,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"far","far",85807546),(1),new cljs.core.Keyword(null,"interval","interval",1708495417),(15),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.Keyword(null,"objects","objects",2099713734),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(".\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"/","\\/"))].join(''),new cljs.core.Keyword(null,"showLine","showLine",157295694),true], null)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19006;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19005;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19004;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19003;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19002;
}});})(x18999_19011))
;


uni_next.ui.Ir.prototype.constructor = uni_next.ui.Ir;

uni_next.ui.Ir.prototype.constructor.displayName = "uni-next.ui/Ir";

uni_next.ui.Ir.prototype.om$isComponent = true;

var x19009_19015 = uni_next.ui.Ir;
/** @nocollapse */
x19009_19015.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19009_19015.om$next$IQuery$query$arity$1 = ((function (x19009_19015){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("position","scale","position/scale",1456884672),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19009_19015))
;


var x19010_19016 = uni_next.ui.Ir.prototype;

x19010_19016.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19010_19016.om$next$IQuery$query$arity$1 = ((function (x19010_19016){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("position","scale","position/scale",1456884672),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19010_19016))
;


uni_next.ui.Ir.cljs$lang$type = true;

uni_next.ui.Ir.cljs$lang$ctorStr = "uni-next.ui/Ir";

uni_next.ui.Ir.cljs$lang$ctorPrWriter = (function (this__16677__auto__,writer__16678__auto__,opt__16679__auto__){
return cljs.core._write.call(null,writer__16678__auto__,"uni-next.ui/Ir");
});
uni_next.ui.ir = om.next.factory.call(null,uni_next.ui.Ir);
/**
 * @constructor
 */
uni_next.ui.Fan = (function uni_next$ui$Fan(){
var this__16674__auto__ = this;
React.Component.apply(this__16674__auto__,arguments);

if(!((this__16674__auto__.initLocalState == null))){
this__16674__auto__.state = this__16674__auto__.initLocalState();
} else {
this__16674__auto__.state = {};
}

return this__16674__auto__;
});

uni_next.ui.Fan.prototype = goog.object.clone(React.Component.prototype);

var x19021_19035 = uni_next.ui.Fan.prototype;
x19021_19035.componentWillUpdate = ((function (x19021_19035){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
if(((!((this__16517__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16517__auto__.om$next$Ident$)))?true:false):false)){
var ident__16521__auto___19036 = om.next.ident.call(null,this__16517__auto__,om.next.props.call(null,this__16517__auto__));
var next_ident__16522__auto___19037 = om.next.ident.call(null,this__16517__auto__,om.next._next_props.call(null,next_props__16518__auto__,this__16517__auto__));
if(cljs.core.not_EQ_.call(null,ident__16521__auto___19036,next_ident__16522__auto___19037)){
var idxr__16523__auto___19038 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16523__auto___19038 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16523__auto___19038),((function (idxr__16523__auto___19038,ident__16521__auto___19036,next_ident__16522__auto___19037,this__16517__auto__,x19021_19035){
return (function (indexes__16524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16521__auto___19036], null),cljs.core.disj,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16522__auto___19037], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16517__auto__);
});})(idxr__16523__auto___19038,ident__16521__auto___19036,next_ident__16522__auto___19037,this__16517__auto__,x19021_19035))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16517__auto__);
});})(x19021_19035))
;

x19021_19035.shouldComponentUpdate = ((function (x19021_19035){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
var next_children__16520__auto__ = next_props__16518__auto__.children;
var next_props__16518__auto____$1 = goog.object.get(next_props__16518__auto__,"omcljs$value");
var next_props__16518__auto____$2 = (function (){var G__19023 = next_props__16518__auto____$1;
if((next_props__16518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19023);
} else {
return G__19023;
}
})();
var or__8113__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16517__auto__),next_props__16518__auto____$2);
if(or__8113__auto__){
return or__8113__auto__;
} else {
var or__8113__auto____$1 = (function (){var and__8101__auto__ = this__16517__auto__.state;
if(cljs.core.truth_(and__8101__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16517__auto__.state,"omcljs$state"),goog.object.get(next_state__16519__auto__,"omcljs$state"));
} else {
return and__8101__auto__;
}
})();
if(cljs.core.truth_(or__8113__auto____$1)){
return or__8113__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16517__auto__.props.children,next_children__16520__auto__);
}
}
});})(x19021_19035))
;

x19021_19035.componentWillUnmount = ((function (x19021_19035){
return (function (){
var this__16517__auto__ = this;
var r__16528__auto__ = om.next.get_reconciler.call(null,this__16517__auto__);
var cfg__16529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16528__auto__);
var st__16530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
var indexer__16527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
if(cljs.core.truth_((function (){var and__8101__auto__ = !((st__16530__auto__ == null));
if(and__8101__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16517__auto__], null));
} else {
return and__8101__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16517__auto__);
} else {
}

if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x19021_19035))
;

x19021_19035.componentDidUpdate = ((function (x19021_19035){
return (function (prev_props__16525__auto__,prev_state__16526__auto__){
var this__16517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16517__auto__);
});})(x19021_19035))
;

x19021_19035.isMounted = ((function (x19021_19035){
return (function (){
var this__16517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19021_19035))
;

x19021_19035.componentWillMount = ((function (x19021_19035){
return (function (){
var this__16517__auto__ = this;
var indexer__16527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x19021_19035))
;

x19021_19035.render = ((function (x19021_19035){
return (function (){
var this__16516__auto__ = this;
var this$ = this__16516__auto__;
var _STAR_reconciler_STAR_19024 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19025 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19026 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19027 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19028 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16516__auto__);

om.next._STAR_parent_STAR_ = this__16516__auto__;

try{var map__19029 = om.next.props.call(null,this$);
var map__19029__$1 = ((((!((map__19029 == null)))?((((map__19029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19029):map__19029);
var props = map__19029__$1;
var shaft = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
var position = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var geometry = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var map__19030 = geometry;
var map__19030__$1 = ((((!((map__19030 == null)))?((((map__19030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19030):map__19030);
var d = cljs.core.get.call(null,map__19030__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var h = cljs.core.get.call(null,map__19030__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w = cljs.core.get.call(null,map__19030__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3,new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,d], null)], null),cljs.core.map.call(null,uni_next.ui.body,ir)),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(0),(0)], null)], null),cljs.core.map.call(null,uni_next.ui.body,shaft)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19028;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19027;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19026;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19025;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19024;
}});})(x19021_19035))
;


uni_next.ui.Fan.prototype.constructor = uni_next.ui.Fan;

uni_next.ui.Fan.prototype.constructor.displayName = "uni-next.ui/Fan";

uni_next.ui.Fan.prototype.om$isComponent = true;

var x19033_19039 = uni_next.ui.Fan;
/** @nocollapse */
x19033_19039.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19033_19039.om$next$IQuery$query$arity$1 = ((function (x19033_19039){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x19033_19039))
;


var x19034_19040 = uni_next.ui.Fan.prototype;

x19034_19040.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19034_19040.om$next$IQuery$query$arity$1 = ((function (x19034_19040){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x19034_19040))
;


uni_next.ui.Fan.cljs$lang$type = true;

uni_next.ui.Fan.cljs$lang$ctorStr = "uni-next.ui/Fan";

uni_next.ui.Fan.cljs$lang$ctorPrWriter = (function (this__16677__auto__,writer__16678__auto__,opt__16679__auto__){
return cljs.core._write.call(null,writer__16678__auto__,"uni-next.ui/Fan");
});
uni_next.ui.fan = om.next.factory.call(null,uni_next.ui.Fan);
/**
 * @constructor
 */
uni_next.ui.Body = (function uni_next$ui$Body(){
var this__16674__auto__ = this;
React.Component.apply(this__16674__auto__,arguments);

if(!((this__16674__auto__.initLocalState == null))){
this__16674__auto__.state = this__16674__auto__.initLocalState();
} else {
this__16674__auto__.state = {};
}

return this__16674__auto__;
});

uni_next.ui.Body.prototype = goog.object.clone(React.Component.prototype);

var x19045_19057 = uni_next.ui.Body.prototype;
x19045_19057.componentWillUpdate = ((function (x19045_19057){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
if(((!((this__16517__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16517__auto__.om$next$Ident$)))?true:false):false)){
var ident__16521__auto___19058 = om.next.ident.call(null,this__16517__auto__,om.next.props.call(null,this__16517__auto__));
var next_ident__16522__auto___19059 = om.next.ident.call(null,this__16517__auto__,om.next._next_props.call(null,next_props__16518__auto__,this__16517__auto__));
if(cljs.core.not_EQ_.call(null,ident__16521__auto___19058,next_ident__16522__auto___19059)){
var idxr__16523__auto___19060 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16523__auto___19060 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16523__auto___19060),((function (idxr__16523__auto___19060,ident__16521__auto___19058,next_ident__16522__auto___19059,this__16517__auto__,x19045_19057){
return (function (indexes__16524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16521__auto___19058], null),cljs.core.disj,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16522__auto___19059], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16517__auto__);
});})(idxr__16523__auto___19060,ident__16521__auto___19058,next_ident__16522__auto___19059,this__16517__auto__,x19045_19057))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16517__auto__);
});})(x19045_19057))
;

x19045_19057.shouldComponentUpdate = ((function (x19045_19057){
return (function (next_props__16518__auto__,next_state__16519__auto__){
var this__16517__auto__ = this;
var next_children__16520__auto__ = next_props__16518__auto__.children;
var next_props__16518__auto____$1 = goog.object.get(next_props__16518__auto__,"omcljs$value");
var next_props__16518__auto____$2 = (function (){var G__19047 = next_props__16518__auto____$1;
if((next_props__16518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19047);
} else {
return G__19047;
}
})();
var or__8113__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16517__auto__),next_props__16518__auto____$2);
if(or__8113__auto__){
return or__8113__auto__;
} else {
var or__8113__auto____$1 = (function (){var and__8101__auto__ = this__16517__auto__.state;
if(cljs.core.truth_(and__8101__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16517__auto__.state,"omcljs$state"),goog.object.get(next_state__16519__auto__,"omcljs$state"));
} else {
return and__8101__auto__;
}
})();
if(cljs.core.truth_(or__8113__auto____$1)){
return or__8113__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16517__auto__.props.children,next_children__16520__auto__);
}
}
});})(x19045_19057))
;

x19045_19057.componentWillUnmount = ((function (x19045_19057){
return (function (){
var this__16517__auto__ = this;
var r__16528__auto__ = om.next.get_reconciler.call(null,this__16517__auto__);
var cfg__16529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16528__auto__);
var st__16530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
var indexer__16527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16529__auto__);
if(cljs.core.truth_((function (){var and__8101__auto__ = !((st__16530__auto__ == null));
if(and__8101__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16517__auto__], null));
} else {
return and__8101__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16517__auto__);
} else {
}

if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x19045_19057))
;

x19045_19057.componentDidUpdate = ((function (x19045_19057){
return (function (prev_props__16525__auto__,prev_state__16526__auto__){
var this__16517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16517__auto__);
});})(x19045_19057))
;

x19045_19057.isMounted = ((function (x19045_19057){
return (function (){
var this__16517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19045_19057))
;

x19045_19057.componentWillMount = ((function (x19045_19057){
return (function (){
var this__16517__auto__ = this;
var indexer__16527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16527__auto__,this__16517__auto__);
}
});})(x19045_19057))
;

x19045_19057.componentDidMount = ((function (x19045_19057){
return (function (){
var this$ = this;
var uid = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$)));
var G__19048 = om.dom.node.call(null,this$);
(G__19048["className"] = clojure.string.join.call(null," ",uni_next.parser.parents.call(null,uid)));

(G__19048["id"] = uid);

return G__19048;
});})(x19045_19057))
;

x19045_19057.render = ((function (x19045_19057){
return (function (){
var this__16516__auto__ = this;
var this$ = this__16516__auto__;
var _STAR_reconciler_STAR_19049 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19050 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19051 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19052 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19053 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16516__auto__);

om.next._STAR_parent_STAR_ = this__16516__auto__;

try{var props = om.next.props.call(null,this$);
return (function (){var G__19054 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
var G__19054__$1 = (((G__19054 instanceof cljs.core.Keyword))?G__19054.fqn:null);
switch (G__19054__$1) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19053;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19052;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19051;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19050;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19049;
}});})(x19045_19057))
;


uni_next.ui.Body.prototype.constructor = uni_next.ui.Body;

uni_next.ui.Body.prototype.constructor.displayName = "uni-next.ui/Body";

uni_next.ui.Body.prototype.om$isComponent = true;

var x19055_19062 = uni_next.ui.Body;
/** @nocollapse */
x19055_19062.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19055_19062.om$next$Ident$ident$arity$2 = ((function (x19055_19062){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x19055_19062))
;

/** @nocollapse */
x19055_19062.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19055_19062.om$next$IQuery$query$arity$1 = ((function (x19055_19062){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x19055_19062))
;


var x19056_19063 = uni_next.ui.Body.prototype;

x19056_19063.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x19056_19063.om$next$Ident$ident$arity$2 = ((function (x19056_19063){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x19056_19063))
;


x19056_19063.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19056_19063.om$next$IQuery$query$arity$1 = ((function (x19056_19063){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x19056_19063))
;


uni_next.ui.Body.cljs$lang$type = true;

uni_next.ui.Body.cljs$lang$ctorStr = "uni-next.ui/Body";

uni_next.ui.Body.cljs$lang$ctorPrWriter = (function (this__16677__auto__,writer__16678__auto__,opt__16679__auto__){
return cljs.core._write.call(null,writer__16678__auto__,"uni-next.ui/Body");
});
uni_next.ui.body = om.next.factory.call(null,uni_next.ui.Body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,cljs.core.str,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)),cljs.core.meta)], null));

//# sourceMappingURL=ui.js.map