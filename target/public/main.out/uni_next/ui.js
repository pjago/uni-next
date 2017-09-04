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
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.ui.Blade.prototype = goog.object.clone(React.Component.prototype);

var x29720_29732 = uni_next.ui.Blade.prototype;
x29720_29732.componentWillUpdate = ((function (x29720_29732){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___29733 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___29734 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___29733,next_ident__18213__auto___29734)){
var idxr__18214__auto___29735 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___29735 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___29735),((function (idxr__18214__auto___29735,ident__18212__auto___29733,next_ident__18213__auto___29734,this__18208__auto__,x29720_29732){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___29733], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___29734], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___29735,ident__18212__auto___29733,next_ident__18213__auto___29734,this__18208__auto__,x29720_29732))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x29720_29732))
;

x29720_29732.shouldComponentUpdate = ((function (x29720_29732){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__29722 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29722);
} else {
return G__29722;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x29720_29732))
;

x29720_29732.componentWillUnmount = ((function (x29720_29732){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29720_29732))
;

x29720_29732.componentDidUpdate = ((function (x29720_29732){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x29720_29732))
;

x29720_29732.isMounted = ((function (x29720_29732){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29720_29732))
;

x29720_29732.componentWillMount = ((function (x29720_29732){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29720_29732))
;

x29720_29732.render = ((function (x29720_29732){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_29723 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29724 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29725 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29726 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29727 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__29728 = om.next.props.call(null,this$);
var map__29728__$1 = ((((!((map__29728 == null)))?((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);
var geometry = cljs.core.get.call(null,map__29728__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [common.math._SLASH_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(geometry),(2)),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29727;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29726;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29725;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29724;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29723;
}});})(x29720_29732))
;


uni_next.ui.Blade.prototype.constructor = uni_next.ui.Blade;

uni_next.ui.Blade.prototype.constructor.displayName = "uni-next.ui/Blade";

uni_next.ui.Blade.prototype.om$isComponent = true;

var x29730_29736 = uni_next.ui.Blade;
/** @nocollapse */
x29730_29736.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x29730_29736.om$next$IQuery$query$arity$1 = ((function (x29730_29736){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x29730_29736))
;


var x29731_29737 = uni_next.ui.Blade.prototype;

x29731_29737.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x29731_29737.om$next$IQuery$query$arity$1 = ((function (x29731_29737){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blade","blade",25118060)], null)], null);
});})(x29731_29737))
;


uni_next.ui.Blade.cljs$lang$type = true;

uni_next.ui.Blade.cljs$lang$ctorStr = "uni-next.ui/Blade";

uni_next.ui.Blade.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.ui/Blade");
});
uni_next.ui.blade = om.next.factory.call(null,uni_next.ui.Blade);
/**
 * @constructor
 */
uni_next.ui.Shaft = (function uni_next$ui$Shaft(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.ui.Shaft.prototype = goog.object.clone(React.Component.prototype);

var x29744_29756 = uni_next.ui.Shaft.prototype;
x29744_29756.componentWillUpdate = ((function (x29744_29756){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___29757 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___29758 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___29757,next_ident__18213__auto___29758)){
var idxr__18214__auto___29759 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___29759 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___29759),((function (idxr__18214__auto___29759,ident__18212__auto___29757,next_ident__18213__auto___29758,this__18208__auto__,x29744_29756){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___29757], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___29758], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___29759,ident__18212__auto___29757,next_ident__18213__auto___29758,this__18208__auto__,x29744_29756))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x29744_29756))
;

x29744_29756.shouldComponentUpdate = ((function (x29744_29756){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__29746 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29746);
} else {
return G__29746;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x29744_29756))
;

x29744_29756.componentWillUnmount = ((function (x29744_29756){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29744_29756))
;

x29744_29756.componentDidUpdate = ((function (x29744_29756){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x29744_29756))
;

x29744_29756.isMounted = ((function (x29744_29756){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29744_29756))
;

x29744_29756.componentWillMount = ((function (x29744_29756){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29744_29756))
;

x29744_29756.render = ((function (x29744_29756){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_29747 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29748 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29749 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29750 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29751 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__29752 = om.next.props.call(null,this$);
var map__29752__$1 = ((((!((map__29752 == null)))?((((map__29752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29752):map__29752);
var props = map__29752__$1;
var blade = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"blade","blade",25118060));
var geometry = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var rotation = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var spacing = common.math._SLASH_.call(null,(360),cljs.core.count.call(null,blade));
return cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),rotation,(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),cljs.core.map_indexed.call(null,((function (map__29752,map__29752__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_29747,_STAR_depth_STAR_29748,_STAR_shared_STAR_29749,_STAR_instrument_STAR_29750,_STAR_parent_STAR_29751,this$,this__18207__auto__,x29744_29756){
return (function (p1__29738_SHARP_,p2__29739_SHARP_){
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),common.math._STAR_.call(null,p1__29738_SHARP_,spacing),(0)], null)], null),uni_next.ui.body.call(null,p2__29739_SHARP_));
});})(map__29752,map__29752__$1,props,blade,geometry,rotation,spacing,_STAR_reconciler_STAR_29747,_STAR_depth_STAR_29748,_STAR_shared_STAR_29749,_STAR_instrument_STAR_29750,_STAR_parent_STAR_29751,this$,this__18207__auto__,x29744_29756))
,blade));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29751;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29750;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29749;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29748;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29747;
}});})(x29744_29756))
;


uni_next.ui.Shaft.prototype.constructor = uni_next.ui.Shaft;

uni_next.ui.Shaft.prototype.constructor.displayName = "uni-next.ui/Shaft";

uni_next.ui.Shaft.prototype.om$isComponent = true;

var x29754_29760 = uni_next.ui.Shaft;
/** @nocollapse */
x29754_29760.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x29754_29760.om$next$IQuery$query$arity$1 = ((function (x29754_29760){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x29754_29760))
;


var x29755_29761 = uni_next.ui.Shaft.prototype;

x29755_29761.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x29755_29761.om$next$IQuery$query$arity$1 = ((function (x29755_29761){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blade","blade",25118060),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null);
});})(x29755_29761))
;


uni_next.ui.Shaft.cljs$lang$type = true;

uni_next.ui.Shaft.cljs$lang$ctorStr = "uni-next.ui/Shaft";

uni_next.ui.Shaft.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.ui/Shaft");
});
uni_next.ui.shaft = om.next.factory.call(null,uni_next.ui.Shaft);
/**
 * @constructor
 */
uni_next.ui.Ir = (function uni_next$ui$Ir(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.ui.Ir.prototype = goog.object.clone(React.Component.prototype);

var x29766_29778 = uni_next.ui.Ir.prototype;
x29766_29778.componentWillUpdate = ((function (x29766_29778){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___29779 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___29780 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___29779,next_ident__18213__auto___29780)){
var idxr__18214__auto___29781 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___29781 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___29781),((function (idxr__18214__auto___29781,ident__18212__auto___29779,next_ident__18213__auto___29780,this__18208__auto__,x29766_29778){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___29779], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___29780], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___29781,ident__18212__auto___29779,next_ident__18213__auto___29780,this__18208__auto__,x29766_29778))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x29766_29778))
;

x29766_29778.shouldComponentUpdate = ((function (x29766_29778){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__29768 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29768);
} else {
return G__29768;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x29766_29778))
;

x29766_29778.componentWillUnmount = ((function (x29766_29778){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29766_29778))
;

x29766_29778.componentDidUpdate = ((function (x29766_29778){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x29766_29778))
;

x29766_29778.isMounted = ((function (x29766_29778){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29766_29778))
;

x29766_29778.componentWillMount = ((function (x29766_29778){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29766_29778))
;

x29766_29778.componentDidMount = ((function (x29766_29778){
return (function (){
var this$ = this;
return om.dom.node.call(null,this$).addEventListener("raycaster-intersection-cleared",((function (this$,x29766_29778){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),(function (){var x__9044__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rpm","rpm",279796767),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$))),new cljs.core.Keyword(null,"count","count",2139924085)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9044__auto__);
})())))], null));
});})(this$,x29766_29778))
);
});})(x29766_29778))
;

x29766_29778.render = ((function (x29766_29778){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_29769 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29770 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29771 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29772 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29773 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__29774 = om.next.props.call(null,this$);
var map__29774__$1 = ((((!((map__29774 == null)))?((((map__29774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29774):map__29774);
var selector = cljs.core.get.call(null,map__29774__$1,new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
return common.web.a_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"far","far",85807546),(1),new cljs.core.Keyword(null,"interval","interval",1708495417),(15),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"objects","objects",2099713734),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(".\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"/","\\/"))].join(''),new cljs.core.Keyword(null,"showLine","showLine",157295694),true], null)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29773;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29772;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29771;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29770;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29769;
}});})(x29766_29778))
;


uni_next.ui.Ir.prototype.constructor = uni_next.ui.Ir;

uni_next.ui.Ir.prototype.constructor.displayName = "uni-next.ui/Ir";

uni_next.ui.Ir.prototype.om$isComponent = true;

var x29776_29782 = uni_next.ui.Ir;
/** @nocollapse */
x29776_29782.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x29776_29782.om$next$IQuery$query$arity$1 = ((function (x29776_29782){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x29776_29782))
;


var x29777_29783 = uni_next.ui.Ir.prototype;

x29777_29783.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x29777_29783.om$next$IQuery$query$arity$1 = ((function (x29777_29783){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923)], null);
});})(x29777_29783))
;


uni_next.ui.Ir.cljs$lang$type = true;

uni_next.ui.Ir.cljs$lang$ctorStr = "uni-next.ui/Ir";

uni_next.ui.Ir.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.ui/Ir");
});
uni_next.ui.ir = om.next.factory.call(null,uni_next.ui.Ir);
/**
 * @constructor
 */
uni_next.ui.Fan = (function uni_next$ui$Fan(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.ui.Fan.prototype = goog.object.clone(React.Component.prototype);

var x29788_29802 = uni_next.ui.Fan.prototype;
x29788_29802.componentWillUpdate = ((function (x29788_29802){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___29803 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___29804 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___29803,next_ident__18213__auto___29804)){
var idxr__18214__auto___29805 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___29805 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___29805),((function (idxr__18214__auto___29805,ident__18212__auto___29803,next_ident__18213__auto___29804,this__18208__auto__,x29788_29802){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___29803], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___29804], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___29805,ident__18212__auto___29803,next_ident__18213__auto___29804,this__18208__auto__,x29788_29802))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x29788_29802))
;

x29788_29802.shouldComponentUpdate = ((function (x29788_29802){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__29790 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29790);
} else {
return G__29790;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x29788_29802))
;

x29788_29802.componentWillUnmount = ((function (x29788_29802){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29788_29802))
;

x29788_29802.componentDidUpdate = ((function (x29788_29802){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x29788_29802))
;

x29788_29802.isMounted = ((function (x29788_29802){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29788_29802))
;

x29788_29802.componentWillMount = ((function (x29788_29802){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29788_29802))
;

x29788_29802.render = ((function (x29788_29802){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_29791 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29792 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29793 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29794 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29795 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var map__29796 = om.next.props.call(null,this$);
var map__29796__$1 = ((((!((map__29796 == null)))?((((map__29796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29796):map__29796);
var props = map__29796__$1;
var shaft = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"shaft","shaft",-278047141));
var ir = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"ir","ir",-1141752677));
var position = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var geometry = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var map__29797 = geometry;
var map__29797__$1 = ((((!((map__29797 == null)))?((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var d = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var h = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),geometry,new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)], null),cljs.core.apply.call(null,common.web.a_entity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),common.math._SLASH_.call(null,h,(2)),common.math._SLASH_.call(null,d,(3))], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),common.math._.call(null,h),(1)], null)], null),cljs.core.map.call(null,uni_next.ui.body,ir)),cljs.core.map.call(null,uni_next.ui.body,shaft));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29795;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29794;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29793;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29792;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29791;
}});})(x29788_29802))
;


uni_next.ui.Fan.prototype.constructor = uni_next.ui.Fan;

uni_next.ui.Fan.prototype.constructor.displayName = "uni-next.ui/Fan";

uni_next.ui.Fan.prototype.om$isComponent = true;

var x29800_29806 = uni_next.ui.Fan;
/** @nocollapse */
x29800_29806.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x29800_29806.om$next$IQuery$query$arity$1 = ((function (x29800_29806){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x29800_29806))
;


var x29801_29807 = uni_next.ui.Fan.prototype;

x29801_29807.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x29801_29807.om$next$IQuery$query$arity$1 = ((function (x29801_29807){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shaft","shaft",-278047141),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ir","ir",-1141752677),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"geometry","geometry",-405034994)], null);
});})(x29801_29807))
;


uni_next.ui.Fan.cljs$lang$type = true;

uni_next.ui.Fan.cljs$lang$ctorStr = "uni-next.ui/Fan";

uni_next.ui.Fan.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.ui/Fan");
});
uni_next.ui.fan = om.next.factory.call(null,uni_next.ui.Fan);
/**
 * @constructor
 */
uni_next.ui.Body = (function uni_next$ui$Body(){
var this__18365__auto__ = this;
React.Component.apply(this__18365__auto__,arguments);

if(!((this__18365__auto__.initLocalState == null))){
this__18365__auto__.state = this__18365__auto__.initLocalState();
} else {
this__18365__auto__.state = {};
}

return this__18365__auto__;
});

uni_next.ui.Body.prototype = goog.object.clone(React.Component.prototype);

var x29812_29824 = uni_next.ui.Body.prototype;
x29812_29824.componentWillUpdate = ((function (x29812_29824){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
if(((!((this__18208__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18208__auto__.om$next$Ident$)))?true:false):false)){
var ident__18212__auto___29825 = om.next.ident.call(null,this__18208__auto__,om.next.props.call(null,this__18208__auto__));
var next_ident__18213__auto___29826 = om.next.ident.call(null,this__18208__auto__,om.next._next_props.call(null,next_props__18209__auto__,this__18208__auto__));
if(cljs.core.not_EQ_.call(null,ident__18212__auto___29825,next_ident__18213__auto___29826)){
var idxr__18214__auto___29827 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18214__auto___29827 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18214__auto___29827),((function (idxr__18214__auto___29827,ident__18212__auto___29825,next_ident__18213__auto___29826,this__18208__auto__,x29812_29824){
return (function (indexes__18215__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18215__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18212__auto___29825], null),cljs.core.disj,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18213__auto___29826], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18208__auto__);
});})(idxr__18214__auto___29827,ident__18212__auto___29825,next_ident__18213__auto___29826,this__18208__auto__,x29812_29824))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18208__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18208__auto__);
});})(x29812_29824))
;

x29812_29824.shouldComponentUpdate = ((function (x29812_29824){
return (function (next_props__18209__auto__,next_state__18210__auto__){
var this__18208__auto__ = this;
var next_children__18211__auto__ = next_props__18209__auto__.children;
var next_props__18209__auto____$1 = goog.object.get(next_props__18209__auto__,"omcljs$value");
var next_props__18209__auto____$2 = (function (){var G__29814 = next_props__18209__auto____$1;
if((next_props__18209__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29814);
} else {
return G__29814;
}
})();
var or__8110__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18208__auto__),next_props__18209__auto____$2);
if(or__8110__auto__){
return or__8110__auto__;
} else {
var or__8110__auto____$1 = (function (){var and__8098__auto__ = this__18208__auto__.state;
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18208__auto__.state,"omcljs$state"),goog.object.get(next_state__18210__auto__,"omcljs$state"));
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(or__8110__auto____$1)){
return or__8110__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18208__auto__.props.children,next_children__18211__auto__);
}
}
});})(x29812_29824))
;

x29812_29824.componentWillUnmount = ((function (x29812_29824){
return (function (){
var this__18208__auto__ = this;
var r__18219__auto__ = om.next.get_reconciler.call(null,this__18208__auto__);
var cfg__18220__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18219__auto__);
var st__18221__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
var indexer__18218__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18220__auto__);
if(cljs.core.truth_((function (){var and__8098__auto__ = !((st__18221__auto__ == null));
if(and__8098__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18221__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18208__auto__], null));
} else {
return and__8098__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18221__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18208__auto__);
} else {
}

if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29812_29824))
;

x29812_29824.componentDidUpdate = ((function (x29812_29824){
return (function (prev_props__18216__auto__,prev_state__18217__auto__){
var this__18208__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18208__auto__);
});})(x29812_29824))
;

x29812_29824.isMounted = ((function (x29812_29824){
return (function (){
var this__18208__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18208__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29812_29824))
;

x29812_29824.componentWillMount = ((function (x29812_29824){
return (function (){
var this__18208__auto__ = this;
var indexer__18218__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18208__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18218__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18218__auto__,this__18208__auto__);
}
});})(x29812_29824))
;

x29812_29824.componentDidMount = ((function (x29812_29824){
return (function (){
var this$ = this;
var uid = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,om.next.props.call(null,this$)));
var G__29815 = om.dom.node.call(null,this$);
(G__29815["className"] = clojure.string.join.call(null," ",uni_next.parser.parents.call(null,uid)));

(G__29815["id"] = uid);

return G__29815;
});})(x29812_29824))
;

x29812_29824.render = ((function (x29812_29824){
return (function (){
var this__18207__auto__ = this;
var this$ = this__18207__auto__;
var _STAR_reconciler_STAR_29816 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29817 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29818 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29819 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29820 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18207__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18207__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18207__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18207__auto__);

om.next._STAR_parent_STAR_ = this__18207__auto__;

try{var props = om.next.props.call(null,this$);
return (function (){var G__29821 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
var G__29821__$1 = (((G__29821 instanceof cljs.core.Keyword))?G__29821.fqn:null);
switch (G__29821__$1) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29820;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29819;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29818;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29817;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29816;
}});})(x29812_29824))
;


uni_next.ui.Body.prototype.constructor = uni_next.ui.Body;

uni_next.ui.Body.prototype.constructor.displayName = "uni-next.ui/Body";

uni_next.ui.Body.prototype.om$isComponent = true;

var x29822_29829 = uni_next.ui.Body;
/** @nocollapse */
x29822_29829.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x29822_29829.om$next$Ident$ident$arity$2 = ((function (x29822_29829){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x29822_29829))
;

/** @nocollapse */
x29822_29829.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x29822_29829.om$next$IQuery$query$arity$1 = ((function (x29822_29829){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x29822_29829))
;


var x29823_29830 = uni_next.ui.Body.prototype;

x29823_29830.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x29823_29830.om$next$Ident$ident$arity$2 = ((function (x29823_29830){
return (function (this$,props){
var this$__$1 = this;
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)).call(null,cljs.core.meta.call(null,props));
});})(x29823_29830))
;


x29823_29830.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x29823_29830.om$next$IQuery$query$arity$1 = ((function (x29823_29830){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fan","fan",-1339826021),om.next.get_query.call(null,uni_next.ui.Fan),new cljs.core.Keyword(null,"shaft","shaft",-278047141),om.next.get_query.call(null,uni_next.ui.Shaft),new cljs.core.Keyword(null,"blade","blade",25118060),om.next.get_query.call(null,uni_next.ui.Blade),new cljs.core.Keyword(null,"ir","ir",-1141752677),om.next.get_query.call(null,uni_next.ui.Ir)], null);
});})(x29823_29830))
;


uni_next.ui.Body.cljs$lang$type = true;

uni_next.ui.Body.cljs$lang$ctorStr = "uni-next.ui/Body";

uni_next.ui.Body.cljs$lang$ctorPrWriter = (function (this__18368__auto__,writer__18369__auto__,opt__18370__auto__){
return cljs.core._write.call(null,writer__18369__auto__,"uni-next.ui/Body");
});
uni_next.ui.body = om.next.factory.call(null,uni_next.ui.Body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,cljs.core.str,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uid","uid",-1447769400)),cljs.core.meta)], null));

//# sourceMappingURL=ui.js.map