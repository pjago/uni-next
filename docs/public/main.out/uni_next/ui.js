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
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.ui.Blade.prototype = goog.object.clone(React.Component.prototype);

var x18975_18987 = uni_next.ui.Blade.prototype;
x18975_18987.componentWillUpdate = ((function (x18975_18987){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___18988 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___18989 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___18988,next_ident__16544__auto___18989)){
var idxr__16545__auto___18990 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___18990 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___18990),((function (idxr__16545__auto___18990,ident__16543__auto___18988,next_ident__16544__auto___18989,this__16539__auto__,x18975_18987){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___18988], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___18989], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___18990,ident__16543__auto___18988,next_ident__16544__auto___18989,this__16539__auto__,x18975_18987))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x18975_18987))
;

x18975_18987.shouldComponentUpdate = ((function (x18975_18987){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__18977 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18977);
} else {
return G__18977;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x18975_18987))
;

x18975_18987.componentWillUnmount = ((function (x18975_18987){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x18975_18987))
;

x18975_18987.componentDidUpdate = ((function (x18975_18987){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x18975_18987))
;

x18975_18987.isMounted = ((function (x18975_18987){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18975_18987))
;

x18975_18987.componentWillMount = ((function (x18975_18987){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x18975_18987))
;

x18975_18987.render = ((function (x18975_18987){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_18978 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18979 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18980 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18981 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18982 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__18983 = om.next.props.call(null,this$);
var map__18983__$1 = ((((!((map__18983 == null)))?((((map__18983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18983):map__18983);
var geometry = cljs.core.get.call(null,map__18983__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math._SLASH_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(geometry),(2)),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18982;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18981;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18980;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18979;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18978;
}});})(x18975_18987))
;


uni_next.ui.Blade.prototype.constructor = uni_next.ui.Blade;

uni_next.ui.Blade.prototype.constructor.displayName = "uni-next.ui/Blade";

uni_next.ui.Blade.prototype.om$isComponent = true;

var x18985_18991 = uni_next.ui.Blade;
/** @nocollapse */
x18985_18991.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x18985_18991.om$next$IQuery$query$arity$1 = ((function (x18985_18991){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x18985_18991))
;


var x18986_18992 = uni_next.ui.Blade.prototype;

x18986_18992.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x18986_18992.om$next$IQuery$query$arity$1 = ((function (x18986_18992){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x18986_18992))
;


uni_next.ui.Blade.cljs$lang$type = true;

uni_next.ui.Blade.cljs$lang$ctorStr = "uni-next.ui/Blade";

uni_next.ui.Blade.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.ui/Blade");
});
uni_next.ui.blade = om.next.factory.call(null,uni_next.ui.Blade);
/**
 * @constructor
 */
uni_next.ui.Shaft = (function uni_next$ui$Shaft(){
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.ui.Shaft.prototype = goog.object.clone(React.Component.prototype);

var x18999_19011 = uni_next.ui.Shaft.prototype;
x18999_19011.componentWillUpdate = ((function (x18999_19011){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19012 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19013 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19012,next_ident__16544__auto___19013)){
var idxr__16545__auto___19014 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19014 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19014),((function (idxr__16545__auto___19014,ident__16543__auto___19012,next_ident__16544__auto___19013,this__16539__auto__,x18999_19011){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19012], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19013], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19014,ident__16543__auto___19012,next_ident__16544__auto___19013,this__16539__auto__,x18999_19011))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x18999_19011))
;

x18999_19011.shouldComponentUpdate = ((function (x18999_19011){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19001 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19001);
} else {
return G__19001;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x18999_19011))
;

x18999_19011.componentWillUnmount = ((function (x18999_19011){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x18999_19011))
;

x18999_19011.componentDidUpdate = ((function (x18999_19011){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x18999_19011))
;

x18999_19011.isMounted = ((function (x18999_19011){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18999_19011))
;

x18999_19011.componentWillMount = ((function (x18999_19011){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x18999_19011))
;

x18999_19011.render = ((function (x18999_19011){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19002 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19003 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19004 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19005 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19006 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__19007 = om.next.props.call(null,this$);
var map__19007__$1 = ((((!((map__19007 == null)))?((((map__19007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19007):map__19007);
var props = map__19007__$1;
var blade = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword(null,"blade","blade",25118060));
var geometry = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var rotation = cljs.core.get.call(null,map__19007__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var spacing = common.math._SLASH_.call(null,(360),cljs.core.count.call(null,blade));
return cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),rotation,(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),cljs.core.map_indexed.call(null,((function (map__19007,map__19007__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_19002,_STAR_depth_STAR_19003,_STAR_shared_STAR_19004,_STAR_instrument_STAR_19005,_STAR_parent_STAR_19006,this$,this__16538__auto__,x18999_19011){
return (function (p1__18993_SHARP_,p2__18994_SHARP_){
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),common.math._STAR_.call(null,p1__18993_SHARP_,spacing),(0)], null)], null),uni_next.ui.body.call(null,p2__18994_SHARP_));
});})(map__19007,map__19007__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_19002,_STAR_depth_STAR_19003,_STAR_shared_STAR_19004,_STAR_instrument_STAR_19005,_STAR_parent_STAR_19006,this$,this__16538__auto__,x18999_19011))
,blade));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19006;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19005;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19004;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19003;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19002;
}});})(x18999_19011))
;


uni_next.ui.Shaft.prototype.constructor = uni_next.ui.Shaft;

uni_next.ui.Shaft.prototype.constructor.displayName = "uni-next.ui/Shaft";

uni_next.ui.Shaft.prototype.om$isComponent = true;

var x19009_19015 = uni_next.ui.Shaft;
/** @nocollapse */
x19009_19015.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19009_19015.om$next$IQuery$query$arity$1 = ((function (x19009_19015){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x19009_19015))
;


var x19010_19016 = uni_next.ui.Shaft.prototype;

x19010_19016.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19010_19016.om$next$IQuery$query$arity$1 = ((function (x19010_19016){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x19010_19016))
;


uni_next.ui.Shaft.cljs$lang$type = true;

uni_next.ui.Shaft.cljs$lang$ctorStr = "uni-next.ui/Shaft";

uni_next.ui.Shaft.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.ui/Shaft");
});
uni_next.ui.shaft = om.next.factory.call(null,uni_next.ui.Shaft);
/**
 * @constructor
 */
uni_next.ui.Ir = (function uni_next$ui$Ir(){
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.ui.Ir.prototype = goog.object.clone(React.Component.prototype);

var x19021_19033 = uni_next.ui.Ir.prototype;
x19021_19033.componentWillUpdate = ((function (x19021_19033){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19034 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19035 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19034,next_ident__16544__auto___19035)){
var idxr__16545__auto___19036 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19036 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19036),((function (idxr__16545__auto___19036,ident__16543__auto___19034,next_ident__16544__auto___19035,this__16539__auto__,x19021_19033){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19034], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19035], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19036,ident__16543__auto___19034,next_ident__16544__auto___19035,this__16539__auto__,x19021_19033))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x19021_19033))
;

x19021_19033.shouldComponentUpdate = ((function (x19021_19033){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19023 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19023);
} else {
return G__19023;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x19021_19033))
;

x19021_19033.componentWillUnmount = ((function (x19021_19033){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19021_19033))
;

x19021_19033.componentDidUpdate = ((function (x19021_19033){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x19021_19033))
;

x19021_19033.isMounted = ((function (x19021_19033){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19021_19033))
;

x19021_19033.componentWillMount = ((function (x19021_19033){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19021_19033))
;

x19021_19033.componentDidMount = ((function (x19021_19033){
return (function (){
var this$ = this;
return om.dom.node.call(null,this$).addEventListener("raycaster-intersection-cleared",((function (this$,x19021_19033){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),(function (){var x__9044__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$))),new cljs.core.Keyword(null,"count","count",2139924085)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(this$,x19021_19033))
);
});})(x19021_19033))
;

x19021_19033.render = ((function (x19021_19033){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19024 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19025 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19026 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19027 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19028 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__19029 = om.next.props.call(null,this$);
var map__19029__$1 = ((((!((map__19029 == null)))?((((map__19029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19029):map__19029);
var selector = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
var relative = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword("position","scale","position/scale",1456884672));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),relative,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"far","far",85807546),(1),new cljs.core.Keyword(null,"interval","interval",1708495417),(15),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.Keyword(null,"objects","objects",2099713734),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(".\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"/","\\/"))].join(''),new cljs.core.Keyword(null,"showLine","showLine",157295694),true], null)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19028;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19027;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19026;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19025;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19024;
}});})(x19021_19033))
;


uni_next.ui.Ir.prototype.constructor = uni_next.ui.Ir;

uni_next.ui.Ir.prototype.constructor.displayName = "uni-next.ui/Ir";

uni_next.ui.Ir.prototype.om$isComponent = true;

var x19031_19037 = uni_next.ui.Ir;
/** @nocollapse */
x19031_19037.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19031_19037.om$next$IQuery$query$arity$1 = ((function (x19031_19037){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("position","scale","position/scale",1456884672),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19031_19037))
;


var x19032_19038 = uni_next.ui.Ir.prototype;

x19032_19038.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19032_19038.om$next$IQuery$query$arity$1 = ((function (x19032_19038){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("position","scale","position/scale",1456884672),new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x19032_19038))
;


uni_next.ui.Ir.cljs$lang$type = true;

uni_next.ui.Ir.cljs$lang$ctorStr = "uni-next.ui/Ir";

uni_next.ui.Ir.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.ui/Ir");
});
uni_next.ui.ir = om.next.factory.call(null,uni_next.ui.Ir);
/**
 * @constructor
 */
uni_next.ui.Fan = (function uni_next$ui$Fan(){
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.ui.Fan.prototype = goog.object.clone(React.Component.prototype);

var x19043_19057 = uni_next.ui.Fan.prototype;
x19043_19057.componentWillUpdate = ((function (x19043_19057){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19058 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19059 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19058,next_ident__16544__auto___19059)){
var idxr__16545__auto___19060 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19060 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19060),((function (idxr__16545__auto___19060,ident__16543__auto___19058,next_ident__16544__auto___19059,this__16539__auto__,x19043_19057){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19058], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19059], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19060,ident__16543__auto___19058,next_ident__16544__auto___19059,this__16539__auto__,x19043_19057))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x19043_19057))
;

x19043_19057.shouldComponentUpdate = ((function (x19043_19057){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19045 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19045);
} else {
return G__19045;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x19043_19057))
;

x19043_19057.componentWillUnmount = ((function (x19043_19057){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19043_19057))
;

x19043_19057.componentDidUpdate = ((function (x19043_19057){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x19043_19057))
;

x19043_19057.isMounted = ((function (x19043_19057){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19043_19057))
;

x19043_19057.componentWillMount = ((function (x19043_19057){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19043_19057))
;

x19043_19057.render = ((function (x19043_19057){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19046 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19047 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19048 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19049 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19050 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var map__19051 = om.next.props.call(null,this$);
var map__19051__$1 = ((((!((map__19051 == null)))?((((map__19051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19051):map__19051);
var props = map__19051__$1;
var shaft = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
var position = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var geometry = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var map__19052 = geometry;
var map__19052__$1 = ((((!((map__19052 == null)))?((((map__19052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19052):map__19052);
var d = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var h = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3,new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,d], null)], null),cljs.core.map.call(null,uni_next.ui.body,ir)),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(0),(0)], null)], null),cljs.core.map.call(null,uni_next.ui.body,shaft)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19050;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19049;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19048;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19047;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19046;
}});})(x19043_19057))
;


uni_next.ui.Fan.prototype.constructor = uni_next.ui.Fan;

uni_next.ui.Fan.prototype.constructor.displayName = "uni-next.ui/Fan";

uni_next.ui.Fan.prototype.om$isComponent = true;

var x19055_19061 = uni_next.ui.Fan;
/** @nocollapse */
x19055_19061.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19055_19061.om$next$IQuery$query$arity$1 = ((function (x19055_19061){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x19055_19061))
;


var x19056_19062 = uni_next.ui.Fan.prototype;

x19056_19062.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19056_19062.om$next$IQuery$query$arity$1 = ((function (x19056_19062){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x19056_19062))
;


uni_next.ui.Fan.cljs$lang$type = true;

uni_next.ui.Fan.cljs$lang$ctorStr = "uni-next.ui/Fan";

uni_next.ui.Fan.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.ui/Fan");
});
uni_next.ui.fan = om.next.factory.call(null,uni_next.ui.Fan);
/**
 * @constructor
 */
uni_next.ui.Body = (function uni_next$ui$Body(){
var this__16696__auto__ = this;
React.Component.apply(this__16696__auto__,arguments);

if(!((this__16696__auto__.initLocalState == null))){
this__16696__auto__.state = this__16696__auto__.initLocalState();
} else {
this__16696__auto__.state = {};
}

return this__16696__auto__;
});

uni_next.ui.Body.prototype = goog.object.clone(React.Component.prototype);

var x19067_19079 = uni_next.ui.Body.prototype;
x19067_19079.componentWillUpdate = ((function (x19067_19079){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
if(((!((this__16539__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16539__auto__.om$next$Ident$)))?true:false):false)){
var ident__16543__auto___19080 = om.next.ident.call(null,this__16539__auto__,om.next.props.call(null,this__16539__auto__));
var next_ident__16544__auto___19081 = om.next.ident.call(null,this__16539__auto__,om.next._next_props.call(null,next_props__16540__auto__,this__16539__auto__));
if(cljs.core.not_EQ_.call(null,ident__16543__auto___19080,next_ident__16544__auto___19081)){
var idxr__16545__auto___19082 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16545__auto___19082 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16545__auto___19082),((function (idxr__16545__auto___19082,ident__16543__auto___19080,next_ident__16544__auto___19081,this__16539__auto__,x19067_19079){
return (function (indexes__16546__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16546__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16543__auto___19080], null),cljs.core.disj,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16544__auto___19081], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16539__auto__);
});})(idxr__16545__auto___19082,ident__16543__auto___19080,next_ident__16544__auto___19081,this__16539__auto__,x19067_19079))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16539__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16539__auto__);
});})(x19067_19079))
;

x19067_19079.shouldComponentUpdate = ((function (x19067_19079){
return (function (next_props__16540__auto__,next_state__16541__auto__){
var this__16539__auto__ = this;
var next_children__16542__auto__ = next_props__16540__auto__.children;
var next_props__16540__auto____$1 = goog.object.get(next_props__16540__auto__,"omcljs$value");
var next_props__16540__auto____$2 = (function (){var G__19069 = next_props__16540__auto____$1;
if((next_props__16540__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19069);
} else {
return G__19069;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16539__auto__),next_props__16540__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__16539__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16539__auto__.state,"omcljs$state"),goog.object.get(next_state__16541__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16539__auto__.props.children,next_children__16542__auto__);
}
}
});})(x19067_19079))
;

x19067_19079.componentWillUnmount = ((function (x19067_19079){
return (function (){
var this__16539__auto__ = this;
var r__16550__auto__ = om.next.get_reconciler.call(null,this__16539__auto__);
var cfg__16551__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16550__auto__);
var st__16552__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
var indexer__16549__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16551__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__16552__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16552__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16539__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16552__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16539__auto__);
} else {
}

if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19067_19079))
;

x19067_19079.componentDidUpdate = ((function (x19067_19079){
return (function (prev_props__16547__auto__,prev_state__16548__auto__){
var this__16539__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16539__auto__);
});})(x19067_19079))
;

x19067_19079.isMounted = ((function (x19067_19079){
return (function (){
var this__16539__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16539__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19067_19079))
;

x19067_19079.componentWillMount = ((function (x19067_19079){
return (function (){
var this__16539__auto__ = this;
var indexer__16549__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16549__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16549__auto__,this__16539__auto__);
}
});})(x19067_19079))
;

x19067_19079.componentDidMount = ((function (x19067_19079){
return (function (){
var this$ = this;
var uid = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$)));
var G__19070 = om.dom.node.call(null,this$);
(G__19070["className"] = clojure.string.join.call(null," ",uni_next.parser.parents.call(null,uid)));

(G__19070["id"] = uid);

return G__19070;
});})(x19067_19079))
;

x19067_19079.render = ((function (x19067_19079){
return (function (){
var this__16538__auto__ = this;
var this$ = this__16538__auto__;
var _STAR_reconciler_STAR_19071 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19072 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19073 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19074 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19075 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16538__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16538__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16538__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16538__auto__);

om.next._STAR_parent_STAR_ = this__16538__auto__;

try{var props = om.next.props.call(null,this$);
return (function (){var G__19076 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
var G__19076__$1 = (((G__19076 instanceof cljs.core.Keyword))?G__19076.fqn:null);
switch (G__19076__$1) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19075;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19074;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19073;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19072;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19071;
}});})(x19067_19079))
;


uni_next.ui.Body.prototype.constructor = uni_next.ui.Body;

uni_next.ui.Body.prototype.constructor.displayName = "uni-next.ui/Body";

uni_next.ui.Body.prototype.om$isComponent = true;

var x19077_19084 = uni_next.ui.Body;
/** @nocollapse */
x19077_19084.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19077_19084.om$next$Ident$ident$arity$2 = ((function (x19077_19084){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x19077_19084))
;

/** @nocollapse */
x19077_19084.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x19077_19084.om$next$IQuery$query$arity$1 = ((function (x19077_19084){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x19077_19084))
;


var x19078_19085 = uni_next.ui.Body.prototype;

x19078_19085.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x19078_19085.om$next$Ident$ident$arity$2 = ((function (x19078_19085){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x19078_19085))
;


x19078_19085.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x19078_19085.om$next$IQuery$query$arity$1 = ((function (x19078_19085){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x19078_19085))
;


uni_next.ui.Body.cljs$lang$type = true;

uni_next.ui.Body.cljs$lang$ctorStr = "uni-next.ui/Body";

uni_next.ui.Body.cljs$lang$ctorPrWriter = (function (this__16699__auto__,writer__16700__auto__,opt__16701__auto__){
return cljs.core._write.call(null,writer__16700__auto__,"uni-next.ui/Body");
});
uni_next.ui.body = om.next.factory.call(null,uni_next.ui.Body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,cljs.core.str,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)),cljs.core.meta)], null));

//# sourceMappingURL=ui.js.map