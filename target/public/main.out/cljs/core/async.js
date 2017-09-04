// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19549 = [];
var len__9331__auto___19562 = arguments.length;
var i__9332__auto___19563 = (0);
while(true){
if((i__9332__auto___19563 < len__9331__auto___19562)){
args19549.push((arguments[i__9332__auto___19563]));

var G__19564 = (i__9332__auto___19563 + (1));
i__9332__auto___19563 = G__19564;
continue;
} else {
}
break;
}

var G__19554 = args19549.length;
switch (G__19554) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19549.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19555 = (function (f,blockable,meta19556){
this.f = f;
this.blockable = blockable;
this.meta19556 = meta19556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19557,meta19556__$1){
var self__ = this;
var _19557__$1 = this;
return (new cljs.core.async.t_cljs$core$async19555(self__.f,self__.blockable,meta19556__$1));
});


cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19557){
var self__ = this;
var _19557__$1 = this;
return self__.meta19556;
});


cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19556","meta19556",-1790235977,null)], null);
});

cljs.core.async.t_cljs$core$async19555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19555";

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async19555");
});

cljs.core.async.__GT_t_cljs$core$async19555 = (function cljs$core$async$__GT_t_cljs$core$async19555(f__$1,blockable__$1,meta19556){
return (new cljs.core.async.t_cljs$core$async19555(f__$1,blockable__$1,meta19556));
});

}

return (new cljs.core.async.t_cljs$core$async19555(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19585 = [];
var len__9331__auto___19588 = arguments.length;
var i__9332__auto___19589 = (0);
while(true){
if((i__9332__auto___19589 < len__9331__auto___19588)){
args19585.push((arguments[i__9332__auto___19589]));

var G__19613 = (i__9332__auto___19589 + (1));
i__9332__auto___19589 = G__19613;
continue;
} else {
}
break;
}

var G__19587 = args19585.length;
switch (G__19587) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19585.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19633 = [];
var len__9331__auto___19698 = arguments.length;
var i__9332__auto___19699 = (0);
while(true){
if((i__9332__auto___19699 < len__9331__auto___19698)){
args19633.push((arguments[i__9332__auto___19699]));

var G__19734 = (i__9332__auto___19699 + (1));
i__9332__auto___19699 = G__19734;
continue;
} else {
}
break;
}

var G__19685 = args19633.length;
switch (G__19685) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19633.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19737 = [];
var len__9331__auto___19740 = arguments.length;
var i__9332__auto___19741 = (0);
while(true){
if((i__9332__auto___19741 < len__9331__auto___19740)){
args19737.push((arguments[i__9332__auto___19741]));

var G__19742 = (i__9332__auto___19741 + (1));
i__9332__auto___19741 = G__19742;
continue;
} else {
}
break;
}

var G__19739 = args19737.length;
switch (G__19739) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19737.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19744 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19744);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19744,ret){
return (function (){
return fn1.call(null,val_19744);
});})(val_19744,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19746 = [];
var len__9331__auto___19772 = arguments.length;
var i__9332__auto___19773 = (0);
while(true){
if((i__9332__auto___19773 < len__9331__auto___19772)){
args19746.push((arguments[i__9332__auto___19773]));

var G__19774 = (i__9332__auto___19773 + (1));
i__9332__auto___19773 = G__19774;
continue;
} else {
}
break;
}

var G__19758 = args19746.length;
switch (G__19758) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19746.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9131__auto___19786 = n;
var x_19787 = (0);
while(true){
if((x_19787 < n__9131__auto___19786)){
(a[x_19787] = (0));

var G__19788 = (x_19787 + (1));
x_19787 = G__19788;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19789 = (i + (1));
i = G__19789;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19793 = (function (flag,meta19794){
this.flag = flag;
this.meta19794 = meta19794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19795,meta19794__$1){
var self__ = this;
var _19795__$1 = this;
return (new cljs.core.async.t_cljs$core$async19793(self__.flag,meta19794__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19795){
var self__ = this;
var _19795__$1 = this;
return self__.meta19794;
});})(flag))
;


cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19793.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19794","meta19794",2117482948,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19793";

cljs.core.async.t_cljs$core$async19793.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async19793");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19793 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19793(flag__$1,meta19794){
return (new cljs.core.async.t_cljs$core$async19793(flag__$1,meta19794));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19793(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19802 = (function (flag,cb,meta19803){
this.flag = flag;
this.cb = cb;
this.meta19803 = meta19803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async19802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19804,meta19803__$1){
var self__ = this;
var _19804__$1 = this;
return (new cljs.core.async.t_cljs$core$async19802(self__.flag,self__.cb,meta19803__$1));
});


cljs.core.async.t_cljs$core$async19802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19804){
var self__ = this;
var _19804__$1 = this;
return self__.meta19803;
});


cljs.core.async.t_cljs$core$async19802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async19802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async19802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async19802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19803","meta19803",1218378015,null)], null);
});

cljs.core.async.t_cljs$core$async19802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19802";

cljs.core.async.t_cljs$core$async19802.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async19802");
});

cljs.core.async.__GT_t_cljs$core$async19802 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19802(flag__$1,cb__$1,meta19803){
return (new cljs.core.async.t_cljs$core$async19802(flag__$1,cb__$1,meta19803));
});

}

return (new cljs.core.async.t_cljs$core$async19802(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19805_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19805_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19806_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19806_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8110__auto__ = wport;
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19807 = (i + (1));
i = G__19807;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8110__auto__ = ret;
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__8098__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8098__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8098__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9338__auto__ = [];
var len__9331__auto___19820 = arguments.length;
var i__9332__auto___19821 = (0);
while(true){
if((i__9332__auto___19821 < len__9331__auto___19820)){
args__9338__auto__.push((arguments[i__9332__auto___19821]));

var G__19822 = (i__9332__auto___19821 + (1));
i__9332__auto___19821 = G__19822;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((1) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9339__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19817){
var map__19818 = p__19817;
var map__19818__$1 = ((((!((map__19818 == null)))?((((map__19818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19818):map__19818);
var opts = map__19818__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19811){
var G__19812 = cljs.core.first.call(null,seq19811);
var seq19811__$1 = cljs.core.next.call(null,seq19811);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19812,seq19811__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19823 = [];
var len__9331__auto___19894 = arguments.length;
var i__9332__auto___19895 = (0);
while(true){
if((i__9332__auto___19895 < len__9331__auto___19894)){
args19823.push((arguments[i__9332__auto___19895]));

var G__19898 = (i__9332__auto___19895 + (1));
i__9332__auto___19895 = G__19898;
continue;
} else {
}
break;
}

var G__19825 = args19823.length;
switch (G__19825) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19823.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19396__auto___19900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___19900){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___19900){
return (function (state_19856){
var state_val_19857 = (state_19856[(1)]);
if((state_val_19857 === (7))){
var inst_19852 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19870_19903 = state_19856__$1;
(statearr_19870_19903[(2)] = inst_19852);

(statearr_19870_19903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (1))){
var state_19856__$1 = state_19856;
var statearr_19871_19904 = state_19856__$1;
(statearr_19871_19904[(2)] = null);

(statearr_19871_19904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (4))){
var inst_19835 = (state_19856[(7)]);
var inst_19835__$1 = (state_19856[(2)]);
var inst_19836 = (inst_19835__$1 == null);
var state_19856__$1 = (function (){var statearr_19874 = state_19856;
(statearr_19874[(7)] = inst_19835__$1);

return statearr_19874;
})();
if(cljs.core.truth_(inst_19836)){
var statearr_19875_19910 = state_19856__$1;
(statearr_19875_19910[(1)] = (5));

} else {
var statearr_19876_19911 = state_19856__$1;
(statearr_19876_19911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (13))){
var state_19856__$1 = state_19856;
var statearr_19877_19912 = state_19856__$1;
(statearr_19877_19912[(2)] = null);

(statearr_19877_19912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (6))){
var inst_19835 = (state_19856[(7)]);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19856__$1,(11),to,inst_19835);
} else {
if((state_val_19857 === (3))){
var inst_19854 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19856__$1,inst_19854);
} else {
if((state_val_19857 === (12))){
var state_19856__$1 = state_19856;
var statearr_19878_19913 = state_19856__$1;
(statearr_19878_19913[(2)] = null);

(statearr_19878_19913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (2))){
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19856__$1,(4),from);
} else {
if((state_val_19857 === (11))){
var inst_19845 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
if(cljs.core.truth_(inst_19845)){
var statearr_19879_19916 = state_19856__$1;
(statearr_19879_19916[(1)] = (12));

} else {
var statearr_19880_19917 = state_19856__$1;
(statearr_19880_19917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (9))){
var state_19856__$1 = state_19856;
var statearr_19881_19918 = state_19856__$1;
(statearr_19881_19918[(2)] = null);

(statearr_19881_19918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (5))){
var state_19856__$1 = state_19856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19882_19919 = state_19856__$1;
(statearr_19882_19919[(1)] = (8));

} else {
var statearr_19883_19920 = state_19856__$1;
(statearr_19883_19920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (14))){
var inst_19850 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19884_19921 = state_19856__$1;
(statearr_19884_19921[(2)] = inst_19850);

(statearr_19884_19921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (10))){
var inst_19842 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19885_19922 = state_19856__$1;
(statearr_19885_19922[(2)] = inst_19842);

(statearr_19885_19922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (8))){
var inst_19839 = cljs.core.async.close_BANG_.call(null,to);
var state_19856__$1 = state_19856;
var statearr_19886_19923 = state_19856__$1;
(statearr_19886_19923[(2)] = inst_19839);

(statearr_19886_19923[(1)] = (10));


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
});})(c__19396__auto___19900))
;
return ((function (switch__17910__auto__,c__19396__auto___19900){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_19890 = [null,null,null,null,null,null,null,null];
(statearr_19890[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_19890[(1)] = (1));

return statearr_19890;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_19856){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_19856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e19891){if((e19891 instanceof Object)){
var ex__17914__auto__ = e19891;
var statearr_19892_19934 = state_19856;
(statearr_19892_19934[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19935 = state_19856;
state_19856 = G__19935;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_19856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_19856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___19900))
})();
var state__19398__auto__ = (function (){var statearr_19893 = f__19397__auto__.call(null);
(statearr_19893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___19900);

return statearr_19893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___19900))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20158){
var vec__20159 = p__20158;
var v = cljs.core.nth.call(null,vec__20159,(0),null);
var p = cljs.core.nth.call(null,vec__20159,(1),null);
var job = vec__20159;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19396__auto___20349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___20349,res,vec__20159,v,p,job,jobs,results){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___20349,res,vec__20159,v,p,job,jobs,results){
return (function (state_20166){
var state_val_20167 = (state_20166[(1)]);
if((state_val_20167 === (1))){
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20166__$1,(2),res,v);
} else {
if((state_val_20167 === (2))){
var inst_20163 = (state_20166[(2)]);
var inst_20164 = cljs.core.async.close_BANG_.call(null,res);
var state_20166__$1 = (function (){var statearr_20168 = state_20166;
(statearr_20168[(7)] = inst_20163);

return statearr_20168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20166__$1,inst_20164);
} else {
return null;
}
}
});})(c__19396__auto___20349,res,vec__20159,v,p,job,jobs,results))
;
return ((function (switch__17910__auto__,c__19396__auto___20349,res,vec__20159,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0 = (function (){
var statearr_20173 = [null,null,null,null,null,null,null,null];
(statearr_20173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__);

(statearr_20173[(1)] = (1));

return statearr_20173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1 = (function (state_20166){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20174){if((e20174 instanceof Object)){
var ex__17914__auto__ = e20174;
var statearr_20175_20354 = state_20166;
(statearr_20175_20354[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20355 = state_20166;
state_20166 = G__20355;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = function(state_20166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1.call(this,state_20166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___20349,res,vec__20159,v,p,job,jobs,results))
})();
var state__19398__auto__ = (function (){var statearr_20176 = f__19397__auto__.call(null);
(statearr_20176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___20349);

return statearr_20176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___20349,res,vec__20159,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20177){
var vec__20178 = p__20177;
var v = cljs.core.nth.call(null,vec__20178,(0),null);
var p = cljs.core.nth.call(null,vec__20178,(1),null);
var job = vec__20178;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9131__auto___20356 = n;
var __20357 = (0);
while(true){
if((__20357 < n__9131__auto___20356)){
var G__20181_20358 = type;
var G__20181_20359__$1 = (((G__20181_20358 instanceof cljs.core.Keyword))?G__20181_20358.fqn:null);
switch (G__20181_20359__$1) {
case "compute":
var c__19396__auto___20361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20357,c__19396__auto___20361,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (__20357,c__19396__auto___20361,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async){
return (function (state_20194){
var state_val_20195 = (state_20194[(1)]);
if((state_val_20195 === (1))){
var state_20194__$1 = state_20194;
var statearr_20196_20363 = state_20194__$1;
(statearr_20196_20363[(2)] = null);

(statearr_20196_20363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (2))){
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20194__$1,(4),jobs);
} else {
if((state_val_20195 === (3))){
var inst_20192 = (state_20194[(2)]);
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20194__$1,inst_20192);
} else {
if((state_val_20195 === (4))){
var inst_20184 = (state_20194[(2)]);
var inst_20185 = process.call(null,inst_20184);
var state_20194__$1 = state_20194;
if(cljs.core.truth_(inst_20185)){
var statearr_20197_20364 = state_20194__$1;
(statearr_20197_20364[(1)] = (5));

} else {
var statearr_20198_20365 = state_20194__$1;
(statearr_20198_20365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (5))){
var state_20194__$1 = state_20194;
var statearr_20199_20366 = state_20194__$1;
(statearr_20199_20366[(2)] = null);

(statearr_20199_20366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (6))){
var state_20194__$1 = state_20194;
var statearr_20200_20367 = state_20194__$1;
(statearr_20200_20367[(2)] = null);

(statearr_20200_20367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (7))){
var inst_20190 = (state_20194[(2)]);
var state_20194__$1 = state_20194;
var statearr_20201_20368 = state_20194__$1;
(statearr_20201_20368[(2)] = inst_20190);

(statearr_20201_20368[(1)] = (3));


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
});})(__20357,c__19396__auto___20361,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async))
;
return ((function (__20357,switch__17910__auto__,c__19396__auto___20361,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0 = (function (){
var statearr_20205 = [null,null,null,null,null,null,null];
(statearr_20205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__);

(statearr_20205[(1)] = (1));

return statearr_20205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1 = (function (state_20194){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20206){if((e20206 instanceof Object)){
var ex__17914__auto__ = e20206;
var statearr_20207_20369 = state_20194;
(statearr_20207_20369[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20370 = state_20194;
state_20194 = G__20370;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = function(state_20194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1.call(this,state_20194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__;
})()
;})(__20357,switch__17910__auto__,c__19396__auto___20361,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async))
})();
var state__19398__auto__ = (function (){var statearr_20208 = f__19397__auto__.call(null);
(statearr_20208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___20361);

return statearr_20208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(__20357,c__19396__auto___20361,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async))
);


break;
case "async":
var c__19396__auto___20371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20357,c__19396__auto___20371,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (__20357,c__19396__auto___20371,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async){
return (function (state_20221){
var state_val_20222 = (state_20221[(1)]);
if((state_val_20222 === (1))){
var state_20221__$1 = state_20221;
var statearr_20223_20372 = state_20221__$1;
(statearr_20223_20372[(2)] = null);

(statearr_20223_20372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (2))){
var state_20221__$1 = state_20221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20221__$1,(4),jobs);
} else {
if((state_val_20222 === (3))){
var inst_20219 = (state_20221[(2)]);
var state_20221__$1 = state_20221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20221__$1,inst_20219);
} else {
if((state_val_20222 === (4))){
var inst_20211 = (state_20221[(2)]);
var inst_20212 = async.call(null,inst_20211);
var state_20221__$1 = state_20221;
if(cljs.core.truth_(inst_20212)){
var statearr_20224_20373 = state_20221__$1;
(statearr_20224_20373[(1)] = (5));

} else {
var statearr_20225_20374 = state_20221__$1;
(statearr_20225_20374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (5))){
var state_20221__$1 = state_20221;
var statearr_20226_20375 = state_20221__$1;
(statearr_20226_20375[(2)] = null);

(statearr_20226_20375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (6))){
var state_20221__$1 = state_20221;
var statearr_20227_20376 = state_20221__$1;
(statearr_20227_20376[(2)] = null);

(statearr_20227_20376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (7))){
var inst_20217 = (state_20221[(2)]);
var state_20221__$1 = state_20221;
var statearr_20228_20377 = state_20221__$1;
(statearr_20228_20377[(2)] = inst_20217);

(statearr_20228_20377[(1)] = (3));


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
});})(__20357,c__19396__auto___20371,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async))
;
return ((function (__20357,switch__17910__auto__,c__19396__auto___20371,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0 = (function (){
var statearr_20232 = [null,null,null,null,null,null,null];
(statearr_20232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__);

(statearr_20232[(1)] = (1));

return statearr_20232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1 = (function (state_20221){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20233){if((e20233 instanceof Object)){
var ex__17914__auto__ = e20233;
var statearr_20234_20378 = state_20221;
(statearr_20234_20378[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20379 = state_20221;
state_20221 = G__20379;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = function(state_20221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1.call(this,state_20221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__;
})()
;})(__20357,switch__17910__auto__,c__19396__auto___20371,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async))
})();
var state__19398__auto__ = (function (){var statearr_20235 = f__19397__auto__.call(null);
(statearr_20235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___20371);

return statearr_20235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(__20357,c__19396__auto___20371,G__20181_20358,G__20181_20359__$1,n__9131__auto___20356,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__20380 = (__20357 + (1));
__20357 = G__20380;
continue;
} else {
}
break;
}

var c__19396__auto___20381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___20381,jobs,results,process,async){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___20381,jobs,results,process,async){
return (function (state_20257){
var state_val_20258 = (state_20257[(1)]);
if((state_val_20258 === (1))){
var state_20257__$1 = state_20257;
var statearr_20259_20382 = state_20257__$1;
(statearr_20259_20382[(2)] = null);

(statearr_20259_20382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20258 === (2))){
var state_20257__$1 = state_20257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20257__$1,(4),from);
} else {
if((state_val_20258 === (3))){
var inst_20255 = (state_20257[(2)]);
var state_20257__$1 = state_20257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20257__$1,inst_20255);
} else {
if((state_val_20258 === (4))){
var inst_20238 = (state_20257[(7)]);
var inst_20238__$1 = (state_20257[(2)]);
var inst_20239 = (inst_20238__$1 == null);
var state_20257__$1 = (function (){var statearr_20260 = state_20257;
(statearr_20260[(7)] = inst_20238__$1);

return statearr_20260;
})();
if(cljs.core.truth_(inst_20239)){
var statearr_20261_20387 = state_20257__$1;
(statearr_20261_20387[(1)] = (5));

} else {
var statearr_20262_20388 = state_20257__$1;
(statearr_20262_20388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20258 === (5))){
var inst_20241 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20257__$1 = state_20257;
var statearr_20263_20389 = state_20257__$1;
(statearr_20263_20389[(2)] = inst_20241);

(statearr_20263_20389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20258 === (6))){
var inst_20238 = (state_20257[(7)]);
var inst_20243 = (state_20257[(8)]);
var inst_20243__$1 = cljs.core.async.chan.call(null,(1));
var inst_20244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20245 = [inst_20238,inst_20243__$1];
var inst_20246 = (new cljs.core.PersistentVector(null,2,(5),inst_20244,inst_20245,null));
var state_20257__$1 = (function (){var statearr_20264 = state_20257;
(statearr_20264[(8)] = inst_20243__$1);

return statearr_20264;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20257__$1,(8),jobs,inst_20246);
} else {
if((state_val_20258 === (7))){
var inst_20253 = (state_20257[(2)]);
var state_20257__$1 = state_20257;
var statearr_20265_20390 = state_20257__$1;
(statearr_20265_20390[(2)] = inst_20253);

(statearr_20265_20390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20258 === (8))){
var inst_20243 = (state_20257[(8)]);
var inst_20248 = (state_20257[(2)]);
var state_20257__$1 = (function (){var statearr_20266 = state_20257;
(statearr_20266[(9)] = inst_20248);

return statearr_20266;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20257__$1,(9),results,inst_20243);
} else {
if((state_val_20258 === (9))){
var inst_20250 = (state_20257[(2)]);
var state_20257__$1 = (function (){var statearr_20267 = state_20257;
(statearr_20267[(10)] = inst_20250);

return statearr_20267;
})();
var statearr_20268_20394 = state_20257__$1;
(statearr_20268_20394[(2)] = null);

(statearr_20268_20394[(1)] = (2));


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
});})(c__19396__auto___20381,jobs,results,process,async))
;
return ((function (switch__17910__auto__,c__19396__auto___20381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0 = (function (){
var statearr_20272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__);

(statearr_20272[(1)] = (1));

return statearr_20272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1 = (function (state_20257){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20273){if((e20273 instanceof Object)){
var ex__17914__auto__ = e20273;
var statearr_20274_20395 = state_20257;
(statearr_20274_20395[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20396 = state_20257;
state_20257 = G__20396;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = function(state_20257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1.call(this,state_20257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___20381,jobs,results,process,async))
})();
var state__19398__auto__ = (function (){var statearr_20275 = f__19397__auto__.call(null);
(statearr_20275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___20381);

return statearr_20275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___20381,jobs,results,process,async))
);


var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__,jobs,results,process,async){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__,jobs,results,process,async){
return (function (state_20313){
var state_val_20314 = (state_20313[(1)]);
if((state_val_20314 === (7))){
var inst_20309 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20315_20398 = state_20313__$1;
(statearr_20315_20398[(2)] = inst_20309);

(statearr_20315_20398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (20))){
var state_20313__$1 = state_20313;
var statearr_20316_20399 = state_20313__$1;
(statearr_20316_20399[(2)] = null);

(statearr_20316_20399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (1))){
var state_20313__$1 = state_20313;
var statearr_20317_20400 = state_20313__$1;
(statearr_20317_20400[(2)] = null);

(statearr_20317_20400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (4))){
var inst_20278 = (state_20313[(7)]);
var inst_20278__$1 = (state_20313[(2)]);
var inst_20279 = (inst_20278__$1 == null);
var state_20313__$1 = (function (){var statearr_20318 = state_20313;
(statearr_20318[(7)] = inst_20278__$1);

return statearr_20318;
})();
if(cljs.core.truth_(inst_20279)){
var statearr_20319_20401 = state_20313__$1;
(statearr_20319_20401[(1)] = (5));

} else {
var statearr_20320_20402 = state_20313__$1;
(statearr_20320_20402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (15))){
var inst_20291 = (state_20313[(8)]);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20313__$1,(18),to,inst_20291);
} else {
if((state_val_20314 === (21))){
var inst_20304 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20321_20403 = state_20313__$1;
(statearr_20321_20403[(2)] = inst_20304);

(statearr_20321_20403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (13))){
var inst_20306 = (state_20313[(2)]);
var state_20313__$1 = (function (){var statearr_20322 = state_20313;
(statearr_20322[(9)] = inst_20306);

return statearr_20322;
})();
var statearr_20323_20404 = state_20313__$1;
(statearr_20323_20404[(2)] = null);

(statearr_20323_20404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (6))){
var inst_20278 = (state_20313[(7)]);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20313__$1,(11),inst_20278);
} else {
if((state_val_20314 === (17))){
var inst_20299 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
if(cljs.core.truth_(inst_20299)){
var statearr_20324_20405 = state_20313__$1;
(statearr_20324_20405[(1)] = (19));

} else {
var statearr_20325_20406 = state_20313__$1;
(statearr_20325_20406[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (3))){
var inst_20311 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20313__$1,inst_20311);
} else {
if((state_val_20314 === (12))){
var inst_20288 = (state_20313[(10)]);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20313__$1,(14),inst_20288);
} else {
if((state_val_20314 === (2))){
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20313__$1,(4),results);
} else {
if((state_val_20314 === (19))){
var state_20313__$1 = state_20313;
var statearr_20326_20407 = state_20313__$1;
(statearr_20326_20407[(2)] = null);

(statearr_20326_20407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (11))){
var inst_20288 = (state_20313[(2)]);
var state_20313__$1 = (function (){var statearr_20327 = state_20313;
(statearr_20327[(10)] = inst_20288);

return statearr_20327;
})();
var statearr_20328_20408 = state_20313__$1;
(statearr_20328_20408[(2)] = null);

(statearr_20328_20408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (9))){
var state_20313__$1 = state_20313;
var statearr_20329_20409 = state_20313__$1;
(statearr_20329_20409[(2)] = null);

(statearr_20329_20409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (5))){
var state_20313__$1 = state_20313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20330_20410 = state_20313__$1;
(statearr_20330_20410[(1)] = (8));

} else {
var statearr_20331_20411 = state_20313__$1;
(statearr_20331_20411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (14))){
var inst_20291 = (state_20313[(8)]);
var inst_20293 = (state_20313[(11)]);
var inst_20291__$1 = (state_20313[(2)]);
var inst_20292 = (inst_20291__$1 == null);
var inst_20293__$1 = cljs.core.not.call(null,inst_20292);
var state_20313__$1 = (function (){var statearr_20332 = state_20313;
(statearr_20332[(8)] = inst_20291__$1);

(statearr_20332[(11)] = inst_20293__$1);

return statearr_20332;
})();
if(inst_20293__$1){
var statearr_20333_20412 = state_20313__$1;
(statearr_20333_20412[(1)] = (15));

} else {
var statearr_20334_20413 = state_20313__$1;
(statearr_20334_20413[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (16))){
var inst_20293 = (state_20313[(11)]);
var state_20313__$1 = state_20313;
var statearr_20335_20414 = state_20313__$1;
(statearr_20335_20414[(2)] = inst_20293);

(statearr_20335_20414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (10))){
var inst_20285 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20336_20415 = state_20313__$1;
(statearr_20336_20415[(2)] = inst_20285);

(statearr_20336_20415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (18))){
var inst_20296 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20337_20416 = state_20313__$1;
(statearr_20337_20416[(2)] = inst_20296);

(statearr_20337_20416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (8))){
var inst_20282 = cljs.core.async.close_BANG_.call(null,to);
var state_20313__$1 = state_20313;
var statearr_20338_20417 = state_20313__$1;
(statearr_20338_20417[(2)] = inst_20282);

(statearr_20338_20417[(1)] = (10));


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
}
}
}
}
});})(c__19396__auto__,jobs,results,process,async))
;
return ((function (switch__17910__auto__,c__19396__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0 = (function (){
var statearr_20342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__);

(statearr_20342[(1)] = (1));

return statearr_20342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1 = (function (state_20313){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20343){if((e20343 instanceof Object)){
var ex__17914__auto__ = e20343;
var statearr_20344_20421 = state_20313;
(statearr_20344_20421[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20422 = state_20313;
state_20313 = G__20422;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__ = function(state_20313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1.call(this,state_20313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__,jobs,results,process,async))
})();
var state__19398__auto__ = (function (){var statearr_20345 = f__19397__auto__.call(null);
(statearr_20345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_20345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__,jobs,results,process,async))
);

return c__19396__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20424 = [];
var len__9331__auto___20430 = arguments.length;
var i__9332__auto___20431 = (0);
while(true){
if((i__9332__auto___20431 < len__9331__auto___20430)){
args20424.push((arguments[i__9332__auto___20431]));

var G__20432 = (i__9332__auto___20431 + (1));
i__9332__auto___20431 = G__20432;
continue;
} else {
}
break;
}

var G__20426 = args20424.length;
switch (G__20426) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20424.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20434 = [];
var len__9331__auto___20438 = arguments.length;
var i__9332__auto___20439 = (0);
while(true){
if((i__9332__auto___20439 < len__9331__auto___20438)){
args20434.push((arguments[i__9332__auto___20439]));

var G__20440 = (i__9332__auto___20439 + (1));
i__9332__auto___20439 = G__20440;
continue;
} else {
}
break;
}

var G__20437 = args20434.length;
switch (G__20437) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20434.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20442 = [];
var len__9331__auto___20499 = arguments.length;
var i__9332__auto___20500 = (0);
while(true){
if((i__9332__auto___20500 < len__9331__auto___20499)){
args20442.push((arguments[i__9332__auto___20500]));

var G__20501 = (i__9332__auto___20500 + (1));
i__9332__auto___20500 = G__20501;
continue;
} else {
}
break;
}

var G__20444 = args20442.length;
switch (G__20444) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20442.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19396__auto___20503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___20503,tc,fc){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___20503,tc,fc){
return (function (state_20470){
var state_val_20471 = (state_20470[(1)]);
if((state_val_20471 === (7))){
var inst_20466 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
var statearr_20472_20507 = state_20470__$1;
(statearr_20472_20507[(2)] = inst_20466);

(statearr_20472_20507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (1))){
var state_20470__$1 = state_20470;
var statearr_20473_20508 = state_20470__$1;
(statearr_20473_20508[(2)] = null);

(statearr_20473_20508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (4))){
var inst_20447 = (state_20470[(7)]);
var inst_20447__$1 = (state_20470[(2)]);
var inst_20448 = (inst_20447__$1 == null);
var state_20470__$1 = (function (){var statearr_20474 = state_20470;
(statearr_20474[(7)] = inst_20447__$1);

return statearr_20474;
})();
if(cljs.core.truth_(inst_20448)){
var statearr_20475_20509 = state_20470__$1;
(statearr_20475_20509[(1)] = (5));

} else {
var statearr_20476_20510 = state_20470__$1;
(statearr_20476_20510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (13))){
var state_20470__$1 = state_20470;
var statearr_20477_20511 = state_20470__$1;
(statearr_20477_20511[(2)] = null);

(statearr_20477_20511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (6))){
var inst_20447 = (state_20470[(7)]);
var inst_20453 = p.call(null,inst_20447);
var state_20470__$1 = state_20470;
if(cljs.core.truth_(inst_20453)){
var statearr_20478_20512 = state_20470__$1;
(statearr_20478_20512[(1)] = (9));

} else {
var statearr_20479_20513 = state_20470__$1;
(statearr_20479_20513[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (3))){
var inst_20468 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20470__$1,inst_20468);
} else {
if((state_val_20471 === (12))){
var state_20470__$1 = state_20470;
var statearr_20480_20514 = state_20470__$1;
(statearr_20480_20514[(2)] = null);

(statearr_20480_20514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (2))){
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20470__$1,(4),ch);
} else {
if((state_val_20471 === (11))){
var inst_20447 = (state_20470[(7)]);
var inst_20457 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20470__$1,(8),inst_20457,inst_20447);
} else {
if((state_val_20471 === (9))){
var state_20470__$1 = state_20470;
var statearr_20481_20516 = state_20470__$1;
(statearr_20481_20516[(2)] = tc);

(statearr_20481_20516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (5))){
var inst_20450 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20451 = cljs.core.async.close_BANG_.call(null,fc);
var state_20470__$1 = (function (){var statearr_20482 = state_20470;
(statearr_20482[(8)] = inst_20450);

return statearr_20482;
})();
var statearr_20483_20517 = state_20470__$1;
(statearr_20483_20517[(2)] = inst_20451);

(statearr_20483_20517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (14))){
var inst_20464 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
var statearr_20484_20518 = state_20470__$1;
(statearr_20484_20518[(2)] = inst_20464);

(statearr_20484_20518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (10))){
var state_20470__$1 = state_20470;
var statearr_20485_20519 = state_20470__$1;
(statearr_20485_20519[(2)] = fc);

(statearr_20485_20519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (8))){
var inst_20459 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
if(cljs.core.truth_(inst_20459)){
var statearr_20486_20520 = state_20470__$1;
(statearr_20486_20520[(1)] = (12));

} else {
var statearr_20487_20521 = state_20470__$1;
(statearr_20487_20521[(1)] = (13));

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
});})(c__19396__auto___20503,tc,fc))
;
return ((function (switch__17910__auto__,c__19396__auto___20503,tc,fc){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_20494 = [null,null,null,null,null,null,null,null,null];
(statearr_20494[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_20494[(1)] = (1));

return statearr_20494;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_20470){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20495){if((e20495 instanceof Object)){
var ex__17914__auto__ = e20495;
var statearr_20496_20522 = state_20470;
(statearr_20496_20522[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20523 = state_20470;
state_20470 = G__20523;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_20470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_20470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___20503,tc,fc))
})();
var state__19398__auto__ = (function (){var statearr_20497 = f__19397__auto__.call(null);
(statearr_20497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___20503);

return statearr_20497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___20503,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_20587){
var state_val_20588 = (state_20587[(1)]);
if((state_val_20588 === (7))){
var inst_20583 = (state_20587[(2)]);
var state_20587__$1 = state_20587;
var statearr_20589_20612 = state_20587__$1;
(statearr_20589_20612[(2)] = inst_20583);

(statearr_20589_20612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (1))){
var inst_20567 = init;
var state_20587__$1 = (function (){var statearr_20590 = state_20587;
(statearr_20590[(7)] = inst_20567);

return statearr_20590;
})();
var statearr_20591_20613 = state_20587__$1;
(statearr_20591_20613[(2)] = null);

(statearr_20591_20613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (4))){
var inst_20570 = (state_20587[(8)]);
var inst_20570__$1 = (state_20587[(2)]);
var inst_20571 = (inst_20570__$1 == null);
var state_20587__$1 = (function (){var statearr_20592 = state_20587;
(statearr_20592[(8)] = inst_20570__$1);

return statearr_20592;
})();
if(cljs.core.truth_(inst_20571)){
var statearr_20593_20614 = state_20587__$1;
(statearr_20593_20614[(1)] = (5));

} else {
var statearr_20594_20615 = state_20587__$1;
(statearr_20594_20615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (6))){
var inst_20574 = (state_20587[(9)]);
var inst_20567 = (state_20587[(7)]);
var inst_20570 = (state_20587[(8)]);
var inst_20574__$1 = f.call(null,inst_20567,inst_20570);
var inst_20575 = cljs.core.reduced_QMARK_.call(null,inst_20574__$1);
var state_20587__$1 = (function (){var statearr_20595 = state_20587;
(statearr_20595[(9)] = inst_20574__$1);

return statearr_20595;
})();
if(inst_20575){
var statearr_20596_20616 = state_20587__$1;
(statearr_20596_20616[(1)] = (8));

} else {
var statearr_20597_20617 = state_20587__$1;
(statearr_20597_20617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (3))){
var inst_20585 = (state_20587[(2)]);
var state_20587__$1 = state_20587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20587__$1,inst_20585);
} else {
if((state_val_20588 === (2))){
var state_20587__$1 = state_20587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20587__$1,(4),ch);
} else {
if((state_val_20588 === (9))){
var inst_20574 = (state_20587[(9)]);
var inst_20567 = inst_20574;
var state_20587__$1 = (function (){var statearr_20598 = state_20587;
(statearr_20598[(7)] = inst_20567);

return statearr_20598;
})();
var statearr_20599_20618 = state_20587__$1;
(statearr_20599_20618[(2)] = null);

(statearr_20599_20618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (5))){
var inst_20567 = (state_20587[(7)]);
var state_20587__$1 = state_20587;
var statearr_20600_20619 = state_20587__$1;
(statearr_20600_20619[(2)] = inst_20567);

(statearr_20600_20619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (10))){
var inst_20581 = (state_20587[(2)]);
var state_20587__$1 = state_20587;
var statearr_20601_20620 = state_20587__$1;
(statearr_20601_20620[(2)] = inst_20581);

(statearr_20601_20620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20588 === (8))){
var inst_20574 = (state_20587[(9)]);
var inst_20577 = cljs.core.deref.call(null,inst_20574);
var state_20587__$1 = state_20587;
var statearr_20602_20621 = state_20587__$1;
(statearr_20602_20621[(2)] = inst_20577);

(statearr_20602_20621[(1)] = (10));


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
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17911__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17911__auto____0 = (function (){
var statearr_20606 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20606[(0)] = cljs$core$async$reduce_$_state_machine__17911__auto__);

(statearr_20606[(1)] = (1));

return statearr_20606;
});
var cljs$core$async$reduce_$_state_machine__17911__auto____1 = (function (state_20587){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20609){if((e20609 instanceof Object)){
var ex__17914__auto__ = e20609;
var statearr_20610_20622 = state_20587;
(statearr_20610_20622[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20623 = state_20587;
state_20587 = G__20623;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17911__auto__ = function(state_20587){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17911__auto____1.call(this,state_20587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17911__auto____0;
cljs$core$async$reduce_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17911__auto____1;
return cljs$core$async$reduce_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_20611 = f__19397__auto__.call(null);
(statearr_20611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_20611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__,f__$1){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__,f__$1){
return (function (state_20647){
var state_val_20648 = (state_20647[(1)]);
if((state_val_20648 === (1))){
var inst_20642 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20647__$1,(2),inst_20642);
} else {
if((state_val_20648 === (2))){
var inst_20644 = (state_20647[(2)]);
var inst_20645 = f__$1.call(null,inst_20644);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20647__$1,inst_20645);
} else {
return null;
}
}
});})(c__19396__auto__,f__$1))
;
return ((function (switch__17910__auto__,c__19396__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17911__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17911__auto____0 = (function (){
var statearr_20654 = [null,null,null,null,null,null,null];
(statearr_20654[(0)] = cljs$core$async$transduce_$_state_machine__17911__auto__);

(statearr_20654[(1)] = (1));

return statearr_20654;
});
var cljs$core$async$transduce_$_state_machine__17911__auto____1 = (function (state_20647){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20655){if((e20655 instanceof Object)){
var ex__17914__auto__ = e20655;
var statearr_20656_20661 = state_20647;
(statearr_20656_20661[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20662 = state_20647;
state_20647 = G__20662;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17911__auto__ = function(state_20647){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17911__auto____1.call(this,state_20647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17911__auto____0;
cljs$core$async$transduce_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17911__auto____1;
return cljs$core$async$transduce_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__,f__$1))
})();
var state__19398__auto__ = (function (){var statearr_20657 = f__19397__auto__.call(null);
(statearr_20657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_20657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__,f__$1))
);

return c__19396__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20663 = [];
var len__9331__auto___20715 = arguments.length;
var i__9332__auto___20716 = (0);
while(true){
if((i__9332__auto___20716 < len__9331__auto___20715)){
args20663.push((arguments[i__9332__auto___20716]));

var G__20717 = (i__9332__auto___20716 + (1));
i__9332__auto___20716 = G__20717;
continue;
} else {
}
break;
}

var G__20665 = args20663.length;
switch (G__20665) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20663.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_20690){
var state_val_20691 = (state_20690[(1)]);
if((state_val_20691 === (7))){
var inst_20672 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20692_20732 = state_20690__$1;
(statearr_20692_20732[(2)] = inst_20672);

(statearr_20692_20732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (1))){
var inst_20666 = cljs.core.seq.call(null,coll);
var inst_20667 = inst_20666;
var state_20690__$1 = (function (){var statearr_20693 = state_20690;
(statearr_20693[(7)] = inst_20667);

return statearr_20693;
})();
var statearr_20694_20737 = state_20690__$1;
(statearr_20694_20737[(2)] = null);

(statearr_20694_20737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (4))){
var inst_20667 = (state_20690[(7)]);
var inst_20670 = cljs.core.first.call(null,inst_20667);
var state_20690__$1 = state_20690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20690__$1,(7),ch,inst_20670);
} else {
if((state_val_20691 === (13))){
var inst_20684 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20695_20743 = state_20690__$1;
(statearr_20695_20743[(2)] = inst_20684);

(statearr_20695_20743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (6))){
var inst_20675 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
if(cljs.core.truth_(inst_20675)){
var statearr_20696_20745 = state_20690__$1;
(statearr_20696_20745[(1)] = (8));

} else {
var statearr_20697_20746 = state_20690__$1;
(statearr_20697_20746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (3))){
var inst_20688 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20690__$1,inst_20688);
} else {
if((state_val_20691 === (12))){
var state_20690__$1 = state_20690;
var statearr_20698_20748 = state_20690__$1;
(statearr_20698_20748[(2)] = null);

(statearr_20698_20748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (2))){
var inst_20667 = (state_20690[(7)]);
var state_20690__$1 = state_20690;
if(cljs.core.truth_(inst_20667)){
var statearr_20699_20753 = state_20690__$1;
(statearr_20699_20753[(1)] = (4));

} else {
var statearr_20700_20754 = state_20690__$1;
(statearr_20700_20754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (11))){
var inst_20681 = cljs.core.async.close_BANG_.call(null,ch);
var state_20690__$1 = state_20690;
var statearr_20701_20755 = state_20690__$1;
(statearr_20701_20755[(2)] = inst_20681);

(statearr_20701_20755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (9))){
var state_20690__$1 = state_20690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20702_20756 = state_20690__$1;
(statearr_20702_20756[(1)] = (11));

} else {
var statearr_20703_20757 = state_20690__$1;
(statearr_20703_20757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (5))){
var inst_20667 = (state_20690[(7)]);
var state_20690__$1 = state_20690;
var statearr_20704_20758 = state_20690__$1;
(statearr_20704_20758[(2)] = inst_20667);

(statearr_20704_20758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (10))){
var inst_20686 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20705_20759 = state_20690__$1;
(statearr_20705_20759[(2)] = inst_20686);

(statearr_20705_20759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (8))){
var inst_20667 = (state_20690[(7)]);
var inst_20677 = cljs.core.next.call(null,inst_20667);
var inst_20667__$1 = inst_20677;
var state_20690__$1 = (function (){var statearr_20706 = state_20690;
(statearr_20706[(7)] = inst_20667__$1);

return statearr_20706;
})();
var statearr_20707_20760 = state_20690__$1;
(statearr_20707_20760[(2)] = null);

(statearr_20707_20760[(1)] = (2));


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
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_20711 = [null,null,null,null,null,null,null,null];
(statearr_20711[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_20711[(1)] = (1));

return statearr_20711;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_20690){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_20690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e20712){if((e20712 instanceof Object)){
var ex__17914__auto__ = e20712;
var statearr_20713_20761 = state_20690;
(statearr_20713_20761[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20762 = state_20690;
state_20690 = G__20762;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_20690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_20690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_20714 = f__19397__auto__.call(null);
(statearr_20714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_20714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8828__auto__ = (((_ == null))?null:_);
var m__8829__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,_);
} else {
var m__8829__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8829__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m,ch);
} else {
var m__8829__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m);
} else {
var m__8829__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21037 = (function (ch,cs,meta21038){
this.ch = ch;
this.cs = cs;
this.meta21038 = meta21038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21039,meta21038__$1){
var self__ = this;
var _21039__$1 = this;
return (new cljs.core.async.t_cljs$core$async21037(self__.ch,self__.cs,meta21038__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21039){
var self__ = this;
var _21039__$1 = this;
return self__.meta21038;
});})(cs))
;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async21037.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21037.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21038","meta21038",-382648950,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21037";

cljs.core.async.t_cljs$core$async21037.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async21037");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21037 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21037(ch__$1,cs__$1,meta21038){
return (new cljs.core.async.t_cljs$core$async21037(ch__$1,cs__$1,meta21038));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21037(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19396__auto___21286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___21286,cs,m,dchan,dctr,done){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___21286,cs,m,dchan,dctr,done){
return (function (state_21186){
var state_val_21187 = (state_21186[(1)]);
if((state_val_21187 === (7))){
var inst_21182 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21188_21287 = state_21186__$1;
(statearr_21188_21287[(2)] = inst_21182);

(statearr_21188_21287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (20))){
var inst_21085 = (state_21186[(7)]);
var inst_21097 = cljs.core.first.call(null,inst_21085);
var inst_21098 = cljs.core.nth.call(null,inst_21097,(0),null);
var inst_21099 = cljs.core.nth.call(null,inst_21097,(1),null);
var state_21186__$1 = (function (){var statearr_21189 = state_21186;
(statearr_21189[(8)] = inst_21098);

return statearr_21189;
})();
if(cljs.core.truth_(inst_21099)){
var statearr_21190_21289 = state_21186__$1;
(statearr_21190_21289[(1)] = (22));

} else {
var statearr_21191_21290 = state_21186__$1;
(statearr_21191_21290[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (27))){
var inst_21129 = (state_21186[(9)]);
var inst_21127 = (state_21186[(10)]);
var inst_21134 = (state_21186[(11)]);
var inst_21054 = (state_21186[(12)]);
var inst_21134__$1 = cljs.core._nth.call(null,inst_21127,inst_21129);
var inst_21135 = cljs.core.async.put_BANG_.call(null,inst_21134__$1,inst_21054,done);
var state_21186__$1 = (function (){var statearr_21192 = state_21186;
(statearr_21192[(11)] = inst_21134__$1);

return statearr_21192;
})();
if(cljs.core.truth_(inst_21135)){
var statearr_21193_21294 = state_21186__$1;
(statearr_21193_21294[(1)] = (30));

} else {
var statearr_21194_21295 = state_21186__$1;
(statearr_21194_21295[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (1))){
var state_21186__$1 = state_21186;
var statearr_21195_21297 = state_21186__$1;
(statearr_21195_21297[(2)] = null);

(statearr_21195_21297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (24))){
var inst_21085 = (state_21186[(7)]);
var inst_21104 = (state_21186[(2)]);
var inst_21105 = cljs.core.next.call(null,inst_21085);
var inst_21063 = inst_21105;
var inst_21064 = null;
var inst_21065 = (0);
var inst_21066 = (0);
var state_21186__$1 = (function (){var statearr_21196 = state_21186;
(statearr_21196[(13)] = inst_21064);

(statearr_21196[(14)] = inst_21063);

(statearr_21196[(15)] = inst_21066);

(statearr_21196[(16)] = inst_21065);

(statearr_21196[(17)] = inst_21104);

return statearr_21196;
})();
var statearr_21197_21298 = state_21186__$1;
(statearr_21197_21298[(2)] = null);

(statearr_21197_21298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (39))){
var state_21186__$1 = state_21186;
var statearr_21201_21299 = state_21186__$1;
(statearr_21201_21299[(2)] = null);

(statearr_21201_21299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (4))){
var inst_21054 = (state_21186[(12)]);
var inst_21054__$1 = (state_21186[(2)]);
var inst_21055 = (inst_21054__$1 == null);
var state_21186__$1 = (function (){var statearr_21202 = state_21186;
(statearr_21202[(12)] = inst_21054__$1);

return statearr_21202;
})();
if(cljs.core.truth_(inst_21055)){
var statearr_21203_21300 = state_21186__$1;
(statearr_21203_21300[(1)] = (5));

} else {
var statearr_21204_21301 = state_21186__$1;
(statearr_21204_21301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (15))){
var inst_21064 = (state_21186[(13)]);
var inst_21063 = (state_21186[(14)]);
var inst_21066 = (state_21186[(15)]);
var inst_21065 = (state_21186[(16)]);
var inst_21081 = (state_21186[(2)]);
var inst_21082 = (inst_21066 + (1));
var tmp21198 = inst_21064;
var tmp21199 = inst_21063;
var tmp21200 = inst_21065;
var inst_21063__$1 = tmp21199;
var inst_21064__$1 = tmp21198;
var inst_21065__$1 = tmp21200;
var inst_21066__$1 = inst_21082;
var state_21186__$1 = (function (){var statearr_21205 = state_21186;
(statearr_21205[(13)] = inst_21064__$1);

(statearr_21205[(14)] = inst_21063__$1);

(statearr_21205[(15)] = inst_21066__$1);

(statearr_21205[(16)] = inst_21065__$1);

(statearr_21205[(18)] = inst_21081);

return statearr_21205;
})();
var statearr_21206_21302 = state_21186__$1;
(statearr_21206_21302[(2)] = null);

(statearr_21206_21302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (21))){
var inst_21108 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21210_21305 = state_21186__$1;
(statearr_21210_21305[(2)] = inst_21108);

(statearr_21210_21305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (31))){
var inst_21134 = (state_21186[(11)]);
var inst_21138 = done.call(null,null);
var inst_21139 = cljs.core.async.untap_STAR_.call(null,m,inst_21134);
var state_21186__$1 = (function (){var statearr_21211 = state_21186;
(statearr_21211[(19)] = inst_21138);

return statearr_21211;
})();
var statearr_21212_21318 = state_21186__$1;
(statearr_21212_21318[(2)] = inst_21139);

(statearr_21212_21318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (32))){
var inst_21129 = (state_21186[(9)]);
var inst_21127 = (state_21186[(10)]);
var inst_21126 = (state_21186[(20)]);
var inst_21128 = (state_21186[(21)]);
var inst_21141 = (state_21186[(2)]);
var inst_21142 = (inst_21129 + (1));
var tmp21207 = inst_21127;
var tmp21208 = inst_21126;
var tmp21209 = inst_21128;
var inst_21126__$1 = tmp21208;
var inst_21127__$1 = tmp21207;
var inst_21128__$1 = tmp21209;
var inst_21129__$1 = inst_21142;
var state_21186__$1 = (function (){var statearr_21213 = state_21186;
(statearr_21213[(22)] = inst_21141);

(statearr_21213[(9)] = inst_21129__$1);

(statearr_21213[(10)] = inst_21127__$1);

(statearr_21213[(20)] = inst_21126__$1);

(statearr_21213[(21)] = inst_21128__$1);

return statearr_21213;
})();
var statearr_21214_21321 = state_21186__$1;
(statearr_21214_21321[(2)] = null);

(statearr_21214_21321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (40))){
var inst_21154 = (state_21186[(23)]);
var inst_21158 = done.call(null,null);
var inst_21159 = cljs.core.async.untap_STAR_.call(null,m,inst_21154);
var state_21186__$1 = (function (){var statearr_21217 = state_21186;
(statearr_21217[(24)] = inst_21158);

return statearr_21217;
})();
var statearr_21218_21324 = state_21186__$1;
(statearr_21218_21324[(2)] = inst_21159);

(statearr_21218_21324[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (33))){
var inst_21145 = (state_21186[(25)]);
var inst_21147 = cljs.core.chunked_seq_QMARK_.call(null,inst_21145);
var state_21186__$1 = state_21186;
if(inst_21147){
var statearr_21219_21326 = state_21186__$1;
(statearr_21219_21326[(1)] = (36));

} else {
var statearr_21220_21327 = state_21186__$1;
(statearr_21220_21327[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (13))){
var inst_21075 = (state_21186[(26)]);
var inst_21078 = cljs.core.async.close_BANG_.call(null,inst_21075);
var state_21186__$1 = state_21186;
var statearr_21221_21328 = state_21186__$1;
(statearr_21221_21328[(2)] = inst_21078);

(statearr_21221_21328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (22))){
var inst_21098 = (state_21186[(8)]);
var inst_21101 = cljs.core.async.close_BANG_.call(null,inst_21098);
var state_21186__$1 = state_21186;
var statearr_21222_21329 = state_21186__$1;
(statearr_21222_21329[(2)] = inst_21101);

(statearr_21222_21329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (36))){
var inst_21145 = (state_21186[(25)]);
var inst_21149 = cljs.core.chunk_first.call(null,inst_21145);
var inst_21150 = cljs.core.chunk_rest.call(null,inst_21145);
var inst_21151 = cljs.core.count.call(null,inst_21149);
var inst_21126 = inst_21150;
var inst_21127 = inst_21149;
var inst_21128 = inst_21151;
var inst_21129 = (0);
var state_21186__$1 = (function (){var statearr_21223 = state_21186;
(statearr_21223[(9)] = inst_21129);

(statearr_21223[(10)] = inst_21127);

(statearr_21223[(20)] = inst_21126);

(statearr_21223[(21)] = inst_21128);

return statearr_21223;
})();
var statearr_21224_21330 = state_21186__$1;
(statearr_21224_21330[(2)] = null);

(statearr_21224_21330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (41))){
var inst_21145 = (state_21186[(25)]);
var inst_21161 = (state_21186[(2)]);
var inst_21162 = cljs.core.next.call(null,inst_21145);
var inst_21126 = inst_21162;
var inst_21127 = null;
var inst_21128 = (0);
var inst_21129 = (0);
var state_21186__$1 = (function (){var statearr_21225 = state_21186;
(statearr_21225[(9)] = inst_21129);

(statearr_21225[(10)] = inst_21127);

(statearr_21225[(20)] = inst_21126);

(statearr_21225[(27)] = inst_21161);

(statearr_21225[(21)] = inst_21128);

return statearr_21225;
})();
var statearr_21226_21334 = state_21186__$1;
(statearr_21226_21334[(2)] = null);

(statearr_21226_21334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (43))){
var state_21186__$1 = state_21186;
var statearr_21227_21336 = state_21186__$1;
(statearr_21227_21336[(2)] = null);

(statearr_21227_21336[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (29))){
var inst_21170 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21228_21337 = state_21186__$1;
(statearr_21228_21337[(2)] = inst_21170);

(statearr_21228_21337[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (44))){
var inst_21179 = (state_21186[(2)]);
var state_21186__$1 = (function (){var statearr_21229 = state_21186;
(statearr_21229[(28)] = inst_21179);

return statearr_21229;
})();
var statearr_21230_21338 = state_21186__$1;
(statearr_21230_21338[(2)] = null);

(statearr_21230_21338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (6))){
var inst_21118 = (state_21186[(29)]);
var inst_21117 = cljs.core.deref.call(null,cs);
var inst_21118__$1 = cljs.core.keys.call(null,inst_21117);
var inst_21119 = cljs.core.count.call(null,inst_21118__$1);
var inst_21120 = cljs.core.reset_BANG_.call(null,dctr,inst_21119);
var inst_21125 = cljs.core.seq.call(null,inst_21118__$1);
var inst_21126 = inst_21125;
var inst_21127 = null;
var inst_21128 = (0);
var inst_21129 = (0);
var state_21186__$1 = (function (){var statearr_21231 = state_21186;
(statearr_21231[(9)] = inst_21129);

(statearr_21231[(30)] = inst_21120);

(statearr_21231[(10)] = inst_21127);

(statearr_21231[(20)] = inst_21126);

(statearr_21231[(29)] = inst_21118__$1);

(statearr_21231[(21)] = inst_21128);

return statearr_21231;
})();
var statearr_21232_21342 = state_21186__$1;
(statearr_21232_21342[(2)] = null);

(statearr_21232_21342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (28))){
var inst_21145 = (state_21186[(25)]);
var inst_21126 = (state_21186[(20)]);
var inst_21145__$1 = cljs.core.seq.call(null,inst_21126);
var state_21186__$1 = (function (){var statearr_21233 = state_21186;
(statearr_21233[(25)] = inst_21145__$1);

return statearr_21233;
})();
if(inst_21145__$1){
var statearr_21234_21346 = state_21186__$1;
(statearr_21234_21346[(1)] = (33));

} else {
var statearr_21235_21347 = state_21186__$1;
(statearr_21235_21347[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (25))){
var inst_21129 = (state_21186[(9)]);
var inst_21128 = (state_21186[(21)]);
var inst_21131 = (inst_21129 < inst_21128);
var inst_21132 = inst_21131;
var state_21186__$1 = state_21186;
if(cljs.core.truth_(inst_21132)){
var statearr_21236_21352 = state_21186__$1;
(statearr_21236_21352[(1)] = (27));

} else {
var statearr_21237_21353 = state_21186__$1;
(statearr_21237_21353[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (34))){
var state_21186__$1 = state_21186;
var statearr_21238_21354 = state_21186__$1;
(statearr_21238_21354[(2)] = null);

(statearr_21238_21354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (17))){
var state_21186__$1 = state_21186;
var statearr_21239_21355 = state_21186__$1;
(statearr_21239_21355[(2)] = null);

(statearr_21239_21355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (3))){
var inst_21184 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21186__$1,inst_21184);
} else {
if((state_val_21187 === (12))){
var inst_21113 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21240_21357 = state_21186__$1;
(statearr_21240_21357[(2)] = inst_21113);

(statearr_21240_21357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (2))){
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(4),ch);
} else {
if((state_val_21187 === (23))){
var state_21186__$1 = state_21186;
var statearr_21241_21358 = state_21186__$1;
(statearr_21241_21358[(2)] = null);

(statearr_21241_21358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (35))){
var inst_21168 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21242_21359 = state_21186__$1;
(statearr_21242_21359[(2)] = inst_21168);

(statearr_21242_21359[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (19))){
var inst_21085 = (state_21186[(7)]);
var inst_21089 = cljs.core.chunk_first.call(null,inst_21085);
var inst_21090 = cljs.core.chunk_rest.call(null,inst_21085);
var inst_21091 = cljs.core.count.call(null,inst_21089);
var inst_21063 = inst_21090;
var inst_21064 = inst_21089;
var inst_21065 = inst_21091;
var inst_21066 = (0);
var state_21186__$1 = (function (){var statearr_21243 = state_21186;
(statearr_21243[(13)] = inst_21064);

(statearr_21243[(14)] = inst_21063);

(statearr_21243[(15)] = inst_21066);

(statearr_21243[(16)] = inst_21065);

return statearr_21243;
})();
var statearr_21244_21360 = state_21186__$1;
(statearr_21244_21360[(2)] = null);

(statearr_21244_21360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (11))){
var inst_21085 = (state_21186[(7)]);
var inst_21063 = (state_21186[(14)]);
var inst_21085__$1 = cljs.core.seq.call(null,inst_21063);
var state_21186__$1 = (function (){var statearr_21245 = state_21186;
(statearr_21245[(7)] = inst_21085__$1);

return statearr_21245;
})();
if(inst_21085__$1){
var statearr_21246_21361 = state_21186__$1;
(statearr_21246_21361[(1)] = (16));

} else {
var statearr_21247_21362 = state_21186__$1;
(statearr_21247_21362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (9))){
var inst_21115 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21248_21363 = state_21186__$1;
(statearr_21248_21363[(2)] = inst_21115);

(statearr_21248_21363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (5))){
var inst_21061 = cljs.core.deref.call(null,cs);
var inst_21062 = cljs.core.seq.call(null,inst_21061);
var inst_21063 = inst_21062;
var inst_21064 = null;
var inst_21065 = (0);
var inst_21066 = (0);
var state_21186__$1 = (function (){var statearr_21249 = state_21186;
(statearr_21249[(13)] = inst_21064);

(statearr_21249[(14)] = inst_21063);

(statearr_21249[(15)] = inst_21066);

(statearr_21249[(16)] = inst_21065);

return statearr_21249;
})();
var statearr_21250_21364 = state_21186__$1;
(statearr_21250_21364[(2)] = null);

(statearr_21250_21364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (14))){
var state_21186__$1 = state_21186;
var statearr_21253_21365 = state_21186__$1;
(statearr_21253_21365[(2)] = null);

(statearr_21253_21365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (45))){
var inst_21176 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21256_21369 = state_21186__$1;
(statearr_21256_21369[(2)] = inst_21176);

(statearr_21256_21369[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (26))){
var inst_21118 = (state_21186[(29)]);
var inst_21172 = (state_21186[(2)]);
var inst_21173 = cljs.core.seq.call(null,inst_21118);
var state_21186__$1 = (function (){var statearr_21257 = state_21186;
(statearr_21257[(31)] = inst_21172);

return statearr_21257;
})();
if(inst_21173){
var statearr_21258_21370 = state_21186__$1;
(statearr_21258_21370[(1)] = (42));

} else {
var statearr_21259_21371 = state_21186__$1;
(statearr_21259_21371[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (16))){
var inst_21085 = (state_21186[(7)]);
var inst_21087 = cljs.core.chunked_seq_QMARK_.call(null,inst_21085);
var state_21186__$1 = state_21186;
if(inst_21087){
var statearr_21260_21374 = state_21186__$1;
(statearr_21260_21374[(1)] = (19));

} else {
var statearr_21261_21375 = state_21186__$1;
(statearr_21261_21375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (38))){
var inst_21165 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21262_21377 = state_21186__$1;
(statearr_21262_21377[(2)] = inst_21165);

(statearr_21262_21377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (30))){
var state_21186__$1 = state_21186;
var statearr_21263_21378 = state_21186__$1;
(statearr_21263_21378[(2)] = null);

(statearr_21263_21378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (10))){
var inst_21064 = (state_21186[(13)]);
var inst_21066 = (state_21186[(15)]);
var inst_21074 = cljs.core._nth.call(null,inst_21064,inst_21066);
var inst_21075 = cljs.core.nth.call(null,inst_21074,(0),null);
var inst_21076 = cljs.core.nth.call(null,inst_21074,(1),null);
var state_21186__$1 = (function (){var statearr_21264 = state_21186;
(statearr_21264[(26)] = inst_21075);

return statearr_21264;
})();
if(cljs.core.truth_(inst_21076)){
var statearr_21265_21379 = state_21186__$1;
(statearr_21265_21379[(1)] = (13));

} else {
var statearr_21266_21380 = state_21186__$1;
(statearr_21266_21380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (18))){
var inst_21111 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21267_21381 = state_21186__$1;
(statearr_21267_21381[(2)] = inst_21111);

(statearr_21267_21381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (42))){
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(45),dchan);
} else {
if((state_val_21187 === (37))){
var inst_21145 = (state_21186[(25)]);
var inst_21054 = (state_21186[(12)]);
var inst_21154 = (state_21186[(23)]);
var inst_21154__$1 = cljs.core.first.call(null,inst_21145);
var inst_21155 = cljs.core.async.put_BANG_.call(null,inst_21154__$1,inst_21054,done);
var state_21186__$1 = (function (){var statearr_21268 = state_21186;
(statearr_21268[(23)] = inst_21154__$1);

return statearr_21268;
})();
if(cljs.core.truth_(inst_21155)){
var statearr_21269_21385 = state_21186__$1;
(statearr_21269_21385[(1)] = (39));

} else {
var statearr_21270_21386 = state_21186__$1;
(statearr_21270_21386[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (8))){
var inst_21066 = (state_21186[(15)]);
var inst_21065 = (state_21186[(16)]);
var inst_21068 = (inst_21066 < inst_21065);
var inst_21069 = inst_21068;
var state_21186__$1 = state_21186;
if(cljs.core.truth_(inst_21069)){
var statearr_21271_21388 = state_21186__$1;
(statearr_21271_21388[(1)] = (10));

} else {
var statearr_21272_21389 = state_21186__$1;
(statearr_21272_21389[(1)] = (11));

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
});})(c__19396__auto___21286,cs,m,dchan,dctr,done))
;
return ((function (switch__17910__auto__,c__19396__auto___21286,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17911__auto__ = null;
var cljs$core$async$mult_$_state_machine__17911__auto____0 = (function (){
var statearr_21276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21276[(0)] = cljs$core$async$mult_$_state_machine__17911__auto__);

(statearr_21276[(1)] = (1));

return statearr_21276;
});
var cljs$core$async$mult_$_state_machine__17911__auto____1 = (function (state_21186){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_21186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e21280){if((e21280 instanceof Object)){
var ex__17914__auto__ = e21280;
var statearr_21281_21390 = state_21186;
(statearr_21281_21390[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21394 = state_21186;
state_21186 = G__21394;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17911__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17911__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17911__auto____0;
cljs$core$async$mult_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17911__auto____1;
return cljs$core$async$mult_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___21286,cs,m,dchan,dctr,done))
})();
var state__19398__auto__ = (function (){var statearr_21282 = f__19397__auto__.call(null);
(statearr_21282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___21286);

return statearr_21282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___21286,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21395 = [];
var len__9331__auto___21398 = arguments.length;
var i__9332__auto___21399 = (0);
while(true){
if((i__9332__auto___21399 < len__9331__auto___21398)){
args21395.push((arguments[i__9332__auto___21399]));

var G__21401 = (i__9332__auto___21399 + (1));
i__9332__auto___21399 = G__21401;
continue;
} else {
}
break;
}

var G__21397 = args21395.length;
switch (G__21397) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21395.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m,ch);
} else {
var m__8829__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m,ch);
} else {
var m__8829__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m);
} else {
var m__8829__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m,state_map);
} else {
var m__8829__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8828__auto__ = (((m == null))?null:m);
var m__8829__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,m,mode);
} else {
var m__8829__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9338__auto__ = [];
var len__9331__auto___21419 = arguments.length;
var i__9332__auto___21420 = (0);
while(true){
if((i__9332__auto___21420 < len__9331__auto___21419)){
args__9338__auto__.push((arguments[i__9332__auto___21420]));

var G__21421 = (i__9332__auto___21420 + (1));
i__9332__auto___21420 = G__21421;
continue;
} else {
}
break;
}

var argseq__9339__auto__ = ((((3) < args__9338__auto__.length))?(new cljs.core.IndexedSeq(args__9338__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9339__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21413){
var map__21414 = p__21413;
var map__21414__$1 = ((((!((map__21414 == null)))?((((map__21414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21414):map__21414);
var opts = map__21414__$1;
var statearr_21416_21422 = state;
(statearr_21416_21422[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__21414,map__21414__$1,opts){
return (function (val){
var statearr_21417_21423 = state;
(statearr_21417_21423[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21414,map__21414__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_21418_21427 = state;
(statearr_21418_21427[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21403){
var G__21404 = cljs.core.first.call(null,seq21403);
var seq21403__$1 = cljs.core.next.call(null,seq21403);
var G__21405 = cljs.core.first.call(null,seq21403__$1);
var seq21403__$2 = cljs.core.next.call(null,seq21403__$1);
var G__21406 = cljs.core.first.call(null,seq21403__$2);
var seq21403__$3 = cljs.core.next.call(null,seq21403__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21404,G__21405,G__21406,seq21403__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21600 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta21601){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta21601 = meta21601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21602,meta21601__$1){
var self__ = this;
var _21602__$1 = this;
return (new cljs.core.async.t_cljs$core$async21600(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta21601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21602){
var self__ = this;
var _21602__$1 = this;
return self__.meta21601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async21600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21600.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta21601","meta21601",2086909939,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21600";

cljs.core.async.t_cljs$core$async21600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async21600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21600(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21601){
return (new cljs.core.async.t_cljs$core$async21600(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21600(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19396__auto___21813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___21813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___21813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21732){
var state_val_21733 = (state_21732[(1)]);
if((state_val_21733 === (7))){
var inst_21644 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
var statearr_21737_21814 = state_21732__$1;
(statearr_21737_21814[(2)] = inst_21644);

(statearr_21737_21814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (20))){
var inst_21656 = (state_21732[(7)]);
var state_21732__$1 = state_21732;
var statearr_21738_21815 = state_21732__$1;
(statearr_21738_21815[(2)] = inst_21656);

(statearr_21738_21815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (27))){
var state_21732__$1 = state_21732;
var statearr_21739_21816 = state_21732__$1;
(statearr_21739_21816[(2)] = null);

(statearr_21739_21816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (1))){
var inst_21631 = (state_21732[(8)]);
var inst_21631__$1 = calc_state.call(null);
var inst_21633 = (inst_21631__$1 == null);
var inst_21634 = cljs.core.not.call(null,inst_21633);
var state_21732__$1 = (function (){var statearr_21740 = state_21732;
(statearr_21740[(8)] = inst_21631__$1);

return statearr_21740;
})();
if(inst_21634){
var statearr_21741_21817 = state_21732__$1;
(statearr_21741_21817[(1)] = (2));

} else {
var statearr_21742_21818 = state_21732__$1;
(statearr_21742_21818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (24))){
var inst_21689 = (state_21732[(9)]);
var inst_21703 = (state_21732[(10)]);
var inst_21680 = (state_21732[(11)]);
var inst_21703__$1 = inst_21680.call(null,inst_21689);
var state_21732__$1 = (function (){var statearr_21743 = state_21732;
(statearr_21743[(10)] = inst_21703__$1);

return statearr_21743;
})();
if(cljs.core.truth_(inst_21703__$1)){
var statearr_21744_21819 = state_21732__$1;
(statearr_21744_21819[(1)] = (29));

} else {
var statearr_21745_21820 = state_21732__$1;
(statearr_21745_21820[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (4))){
var inst_21647 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21647)){
var statearr_21746_21821 = state_21732__$1;
(statearr_21746_21821[(1)] = (8));

} else {
var statearr_21747_21822 = state_21732__$1;
(statearr_21747_21822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (15))){
var inst_21674 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21674)){
var statearr_21748_21823 = state_21732__$1;
(statearr_21748_21823[(1)] = (19));

} else {
var statearr_21749_21824 = state_21732__$1;
(statearr_21749_21824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (21))){
var inst_21679 = (state_21732[(12)]);
var inst_21679__$1 = (state_21732[(2)]);
var inst_21680 = cljs.core.get.call(null,inst_21679__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21681 = cljs.core.get.call(null,inst_21679__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21682 = cljs.core.get.call(null,inst_21679__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21732__$1 = (function (){var statearr_21750 = state_21732;
(statearr_21750[(12)] = inst_21679__$1);

(statearr_21750[(13)] = inst_21681);

(statearr_21750[(11)] = inst_21680);

return statearr_21750;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21732__$1,(22),inst_21682);
} else {
if((state_val_21733 === (31))){
var inst_21711 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21711)){
var statearr_21751_21825 = state_21732__$1;
(statearr_21751_21825[(1)] = (32));

} else {
var statearr_21752_21826 = state_21732__$1;
(statearr_21752_21826[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (32))){
var inst_21688 = (state_21732[(14)]);
var state_21732__$1 = state_21732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21732__$1,(35),out,inst_21688);
} else {
if((state_val_21733 === (33))){
var inst_21679 = (state_21732[(12)]);
var inst_21656 = inst_21679;
var state_21732__$1 = (function (){var statearr_21753 = state_21732;
(statearr_21753[(7)] = inst_21656);

return statearr_21753;
})();
var statearr_21754_21827 = state_21732__$1;
(statearr_21754_21827[(2)] = null);

(statearr_21754_21827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (13))){
var inst_21656 = (state_21732[(7)]);
var inst_21663 = inst_21656.cljs$lang$protocol_mask$partition0$;
var inst_21664 = (inst_21663 & (64));
var inst_21665 = inst_21656.cljs$core$ISeq$;
var inst_21666 = (cljs.core.PROTOCOL_SENTINEL === inst_21665);
var inst_21667 = (inst_21664) || (inst_21666);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21667)){
var statearr_21755_21828 = state_21732__$1;
(statearr_21755_21828[(1)] = (16));

} else {
var statearr_21756_21829 = state_21732__$1;
(statearr_21756_21829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (22))){
var inst_21689 = (state_21732[(9)]);
var inst_21688 = (state_21732[(14)]);
var inst_21687 = (state_21732[(2)]);
var inst_21688__$1 = cljs.core.nth.call(null,inst_21687,(0),null);
var inst_21689__$1 = cljs.core.nth.call(null,inst_21687,(1),null);
var inst_21690 = (inst_21688__$1 == null);
var inst_21691 = cljs.core._EQ_.call(null,inst_21689__$1,change);
var inst_21692 = (inst_21690) || (inst_21691);
var state_21732__$1 = (function (){var statearr_21757 = state_21732;
(statearr_21757[(9)] = inst_21689__$1);

(statearr_21757[(14)] = inst_21688__$1);

return statearr_21757;
})();
if(cljs.core.truth_(inst_21692)){
var statearr_21758_21830 = state_21732__$1;
(statearr_21758_21830[(1)] = (23));

} else {
var statearr_21759_21831 = state_21732__$1;
(statearr_21759_21831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (36))){
var inst_21679 = (state_21732[(12)]);
var inst_21656 = inst_21679;
var state_21732__$1 = (function (){var statearr_21760 = state_21732;
(statearr_21760[(7)] = inst_21656);

return statearr_21760;
})();
var statearr_21761_21832 = state_21732__$1;
(statearr_21761_21832[(2)] = null);

(statearr_21761_21832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (29))){
var inst_21703 = (state_21732[(10)]);
var state_21732__$1 = state_21732;
var statearr_21762_21833 = state_21732__$1;
(statearr_21762_21833[(2)] = inst_21703);

(statearr_21762_21833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (6))){
var state_21732__$1 = state_21732;
var statearr_21763_21834 = state_21732__$1;
(statearr_21763_21834[(2)] = false);

(statearr_21763_21834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (28))){
var inst_21699 = (state_21732[(2)]);
var inst_21700 = calc_state.call(null);
var inst_21656 = inst_21700;
var state_21732__$1 = (function (){var statearr_21764 = state_21732;
(statearr_21764[(7)] = inst_21656);

(statearr_21764[(15)] = inst_21699);

return statearr_21764;
})();
var statearr_21765_21835 = state_21732__$1;
(statearr_21765_21835[(2)] = null);

(statearr_21765_21835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (25))){
var inst_21725 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
var statearr_21766_21836 = state_21732__$1;
(statearr_21766_21836[(2)] = inst_21725);

(statearr_21766_21836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (34))){
var inst_21723 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
var statearr_21767_21837 = state_21732__$1;
(statearr_21767_21837[(2)] = inst_21723);

(statearr_21767_21837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (17))){
var state_21732__$1 = state_21732;
var statearr_21768_21838 = state_21732__$1;
(statearr_21768_21838[(2)] = false);

(statearr_21768_21838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (3))){
var state_21732__$1 = state_21732;
var statearr_21770_21839 = state_21732__$1;
(statearr_21770_21839[(2)] = false);

(statearr_21770_21839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (12))){
var inst_21727 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21732__$1,inst_21727);
} else {
if((state_val_21733 === (2))){
var inst_21631 = (state_21732[(8)]);
var inst_21636 = inst_21631.cljs$lang$protocol_mask$partition0$;
var inst_21637 = (inst_21636 & (64));
var inst_21638 = inst_21631.cljs$core$ISeq$;
var inst_21639 = (cljs.core.PROTOCOL_SENTINEL === inst_21638);
var inst_21640 = (inst_21637) || (inst_21639);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21640)){
var statearr_21771_21840 = state_21732__$1;
(statearr_21771_21840[(1)] = (5));

} else {
var statearr_21772_21841 = state_21732__$1;
(statearr_21772_21841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (23))){
var inst_21688 = (state_21732[(14)]);
var inst_21694 = (inst_21688 == null);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21694)){
var statearr_21773_21842 = state_21732__$1;
(statearr_21773_21842[(1)] = (26));

} else {
var statearr_21774_21843 = state_21732__$1;
(statearr_21774_21843[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (35))){
var inst_21714 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21714)){
var statearr_21775_21844 = state_21732__$1;
(statearr_21775_21844[(1)] = (36));

} else {
var statearr_21776_21845 = state_21732__$1;
(statearr_21776_21845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (19))){
var inst_21656 = (state_21732[(7)]);
var inst_21676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21656);
var state_21732__$1 = state_21732;
var statearr_21777_21846 = state_21732__$1;
(statearr_21777_21846[(2)] = inst_21676);

(statearr_21777_21846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (11))){
var inst_21656 = (state_21732[(7)]);
var inst_21660 = (inst_21656 == null);
var inst_21661 = cljs.core.not.call(null,inst_21660);
var state_21732__$1 = state_21732;
if(inst_21661){
var statearr_21778_21847 = state_21732__$1;
(statearr_21778_21847[(1)] = (13));

} else {
var statearr_21779_21848 = state_21732__$1;
(statearr_21779_21848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (9))){
var inst_21631 = (state_21732[(8)]);
var state_21732__$1 = state_21732;
var statearr_21781_21849 = state_21732__$1;
(statearr_21781_21849[(2)] = inst_21631);

(statearr_21781_21849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (5))){
var state_21732__$1 = state_21732;
var statearr_21782_21850 = state_21732__$1;
(statearr_21782_21850[(2)] = true);

(statearr_21782_21850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (14))){
var state_21732__$1 = state_21732;
var statearr_21783_21851 = state_21732__$1;
(statearr_21783_21851[(2)] = false);

(statearr_21783_21851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (26))){
var inst_21689 = (state_21732[(9)]);
var inst_21696 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21689);
var state_21732__$1 = state_21732;
var statearr_21784_21852 = state_21732__$1;
(statearr_21784_21852[(2)] = inst_21696);

(statearr_21784_21852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (16))){
var state_21732__$1 = state_21732;
var statearr_21785_21853 = state_21732__$1;
(statearr_21785_21853[(2)] = true);

(statearr_21785_21853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (38))){
var inst_21719 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
var statearr_21786_21854 = state_21732__$1;
(statearr_21786_21854[(2)] = inst_21719);

(statearr_21786_21854[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (30))){
var inst_21689 = (state_21732[(9)]);
var inst_21681 = (state_21732[(13)]);
var inst_21680 = (state_21732[(11)]);
var inst_21706 = cljs.core.empty_QMARK_.call(null,inst_21680);
var inst_21707 = inst_21681.call(null,inst_21689);
var inst_21708 = cljs.core.not.call(null,inst_21707);
var inst_21709 = (inst_21706) && (inst_21708);
var state_21732__$1 = state_21732;
var statearr_21787_21859 = state_21732__$1;
(statearr_21787_21859[(2)] = inst_21709);

(statearr_21787_21859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (10))){
var inst_21631 = (state_21732[(8)]);
var inst_21652 = (state_21732[(2)]);
var inst_21653 = cljs.core.get.call(null,inst_21652,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21654 = cljs.core.get.call(null,inst_21652,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21655 = cljs.core.get.call(null,inst_21652,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21656 = inst_21631;
var state_21732__$1 = (function (){var statearr_21788 = state_21732;
(statearr_21788[(16)] = inst_21654);

(statearr_21788[(7)] = inst_21656);

(statearr_21788[(17)] = inst_21655);

(statearr_21788[(18)] = inst_21653);

return statearr_21788;
})();
var statearr_21789_21863 = state_21732__$1;
(statearr_21789_21863[(2)] = null);

(statearr_21789_21863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (18))){
var inst_21671 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
var statearr_21790_21864 = state_21732__$1;
(statearr_21790_21864[(2)] = inst_21671);

(statearr_21790_21864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (37))){
var state_21732__$1 = state_21732;
var statearr_21791_21865 = state_21732__$1;
(statearr_21791_21865[(2)] = null);

(statearr_21791_21865[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (8))){
var inst_21631 = (state_21732[(8)]);
var inst_21649 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21631);
var state_21732__$1 = state_21732;
var statearr_21792_21866 = state_21732__$1;
(statearr_21792_21866[(2)] = inst_21649);

(statearr_21792_21866[(1)] = (10));


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
});})(c__19396__auto___21813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17910__auto__,c__19396__auto___21813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17911__auto__ = null;
var cljs$core$async$mix_$_state_machine__17911__auto____0 = (function (){
var statearr_21796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21796[(0)] = cljs$core$async$mix_$_state_machine__17911__auto__);

(statearr_21796[(1)] = (1));

return statearr_21796;
});
var cljs$core$async$mix_$_state_machine__17911__auto____1 = (function (state_21732){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_21732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e21797){if((e21797 instanceof Object)){
var ex__17914__auto__ = e21797;
var statearr_21798_21867 = state_21732;
(statearr_21798_21867[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21868 = state_21732;
state_21732 = G__21868;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17911__auto__ = function(state_21732){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17911__auto____1.call(this,state_21732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17911__auto____0;
cljs$core$async$mix_$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17911__auto____1;
return cljs$core$async$mix_$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___21813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19398__auto__ = (function (){var statearr_21799 = f__19397__auto__.call(null);
(statearr_21799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___21813);

return statearr_21799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___21813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8828__auto__ = (((p == null))?null:p);
var m__8829__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8829__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8828__auto__ = (((p == null))?null:p);
var m__8829__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,p,v,ch);
} else {
var m__8829__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21876 = [];
var len__9331__auto___21879 = arguments.length;
var i__9332__auto___21880 = (0);
while(true){
if((i__9332__auto___21880 < len__9331__auto___21879)){
args21876.push((arguments[i__9332__auto___21880]));

var G__21881 = (i__9332__auto___21880 + (1));
i__9332__auto___21880 = G__21881;
continue;
} else {
}
break;
}

var G__21878 = args21876.length;
switch (G__21878) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21876.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8828__auto__ = (((p == null))?null:p);
var m__8829__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,p);
} else {
var m__8829__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8828__auto__ = (((p == null))?null:p);
var m__8829__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8828__auto__)]);
if(!((m__8829__auto__ == null))){
return m__8829__auto__.call(null,p,v);
} else {
var m__8829__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8829__auto____$1 == null))){
return m__8829__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21884 = [];
var len__9331__auto___22069 = arguments.length;
var i__9332__auto___22070 = (0);
while(true){
if((i__9332__auto___22070 < len__9331__auto___22069)){
args21884.push((arguments[i__9332__auto___22070]));

var G__22071 = (i__9332__auto___22070 + (1));
i__9332__auto___22070 = G__22071;
continue;
} else {
}
break;
}

var G__21889 = args21884.length;
switch (G__21889) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21884.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8110__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8110__auto__)){
return or__8110__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8110__auto__,mults){
return (function (p1__21883_SHARP_){
if(cljs.core.truth_(p1__21883_SHARP_.call(null,topic))){
return p1__21883_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21883_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8110__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21893 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21894){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21894 = meta21894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21895,meta21894__$1){
var self__ = this;
var _21895__$1 = this;
return (new cljs.core.async.t_cljs$core$async21893(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21894__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21895){
var self__ = this;
var _21895__$1 = this;
return self__.meta21894;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async21893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21893.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21894","meta21894",1816470630,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21893";

cljs.core.async.t_cljs$core$async21893.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async21893");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21893 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21894){
return (new cljs.core.async.t_cljs$core$async21893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21894));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21893(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19396__auto___22086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___22086,mults,ensure_mult,p){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___22086,mults,ensure_mult,p){
return (function (state_21989){
var state_val_21990 = (state_21989[(1)]);
if((state_val_21990 === (7))){
var inst_21985 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_21991_22090 = state_21989__$1;
(statearr_21991_22090[(2)] = inst_21985);

(statearr_21991_22090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (20))){
var state_21989__$1 = state_21989;
var statearr_21992_22091 = state_21989__$1;
(statearr_21992_22091[(2)] = null);

(statearr_21992_22091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (1))){
var state_21989__$1 = state_21989;
var statearr_21993_22095 = state_21989__$1;
(statearr_21993_22095[(2)] = null);

(statearr_21993_22095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (24))){
var inst_21968 = (state_21989[(7)]);
var inst_21977 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21968);
var state_21989__$1 = state_21989;
var statearr_21994_22096 = state_21989__$1;
(statearr_21994_22096[(2)] = inst_21977);

(statearr_21994_22096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (4))){
var inst_21903 = (state_21989[(8)]);
var inst_21903__$1 = (state_21989[(2)]);
var inst_21904 = (inst_21903__$1 == null);
var state_21989__$1 = (function (){var statearr_21998 = state_21989;
(statearr_21998[(8)] = inst_21903__$1);

return statearr_21998;
})();
if(cljs.core.truth_(inst_21904)){
var statearr_21999_22097 = state_21989__$1;
(statearr_21999_22097[(1)] = (5));

} else {
var statearr_22000_22098 = state_21989__$1;
(statearr_22000_22098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (15))){
var inst_21962 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_22001_22099 = state_21989__$1;
(statearr_22001_22099[(2)] = inst_21962);

(statearr_22001_22099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (21))){
var inst_21982 = (state_21989[(2)]);
var state_21989__$1 = (function (){var statearr_22002 = state_21989;
(statearr_22002[(9)] = inst_21982);

return statearr_22002;
})();
var statearr_22006_22100 = state_21989__$1;
(statearr_22006_22100[(2)] = null);

(statearr_22006_22100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (13))){
var inst_21930 = (state_21989[(10)]);
var inst_21932 = cljs.core.chunked_seq_QMARK_.call(null,inst_21930);
var state_21989__$1 = state_21989;
if(inst_21932){
var statearr_22007_22101 = state_21989__$1;
(statearr_22007_22101[(1)] = (16));

} else {
var statearr_22008_22102 = state_21989__$1;
(statearr_22008_22102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (22))){
var inst_21974 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
if(cljs.core.truth_(inst_21974)){
var statearr_22009_22103 = state_21989__$1;
(statearr_22009_22103[(1)] = (23));

} else {
var statearr_22010_22104 = state_21989__$1;
(statearr_22010_22104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (6))){
var inst_21968 = (state_21989[(7)]);
var inst_21903 = (state_21989[(8)]);
var inst_21970 = (state_21989[(11)]);
var inst_21968__$1 = topic_fn.call(null,inst_21903);
var inst_21969 = cljs.core.deref.call(null,mults);
var inst_21970__$1 = cljs.core.get.call(null,inst_21969,inst_21968__$1);
var state_21989__$1 = (function (){var statearr_22011 = state_21989;
(statearr_22011[(7)] = inst_21968__$1);

(statearr_22011[(11)] = inst_21970__$1);

return statearr_22011;
})();
if(cljs.core.truth_(inst_21970__$1)){
var statearr_22012_22108 = state_21989__$1;
(statearr_22012_22108[(1)] = (19));

} else {
var statearr_22013_22109 = state_21989__$1;
(statearr_22013_22109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (25))){
var inst_21979 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_22014_22113 = state_21989__$1;
(statearr_22014_22113[(2)] = inst_21979);

(statearr_22014_22113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (17))){
var inst_21930 = (state_21989[(10)]);
var inst_21953 = cljs.core.first.call(null,inst_21930);
var inst_21954 = cljs.core.async.muxch_STAR_.call(null,inst_21953);
var inst_21955 = cljs.core.async.close_BANG_.call(null,inst_21954);
var inst_21956 = cljs.core.next.call(null,inst_21930);
var inst_21913 = inst_21956;
var inst_21914 = null;
var inst_21915 = (0);
var inst_21916 = (0);
var state_21989__$1 = (function (){var statearr_22015 = state_21989;
(statearr_22015[(12)] = inst_21913);

(statearr_22015[(13)] = inst_21914);

(statearr_22015[(14)] = inst_21915);

(statearr_22015[(15)] = inst_21955);

(statearr_22015[(16)] = inst_21916);

return statearr_22015;
})();
var statearr_22016_22114 = state_21989__$1;
(statearr_22016_22114[(2)] = null);

(statearr_22016_22114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (3))){
var inst_21987 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21989__$1,inst_21987);
} else {
if((state_val_21990 === (12))){
var inst_21964 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_22017_22115 = state_21989__$1;
(statearr_22017_22115[(2)] = inst_21964);

(statearr_22017_22115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (2))){
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21989__$1,(4),ch);
} else {
if((state_val_21990 === (23))){
var state_21989__$1 = state_21989;
var statearr_22018_22116 = state_21989__$1;
(statearr_22018_22116[(2)] = null);

(statearr_22018_22116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (19))){
var inst_21903 = (state_21989[(8)]);
var inst_21970 = (state_21989[(11)]);
var inst_21972 = cljs.core.async.muxch_STAR_.call(null,inst_21970);
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21989__$1,(22),inst_21972,inst_21903);
} else {
if((state_val_21990 === (11))){
var inst_21913 = (state_21989[(12)]);
var inst_21930 = (state_21989[(10)]);
var inst_21930__$1 = cljs.core.seq.call(null,inst_21913);
var state_21989__$1 = (function (){var statearr_22019 = state_21989;
(statearr_22019[(10)] = inst_21930__$1);

return statearr_22019;
})();
if(inst_21930__$1){
var statearr_22020_22117 = state_21989__$1;
(statearr_22020_22117[(1)] = (13));

} else {
var statearr_22024_22118 = state_21989__$1;
(statearr_22024_22118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (9))){
var inst_21966 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_22028_22119 = state_21989__$1;
(statearr_22028_22119[(2)] = inst_21966);

(statearr_22028_22119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (5))){
var inst_21910 = cljs.core.deref.call(null,mults);
var inst_21911 = cljs.core.vals.call(null,inst_21910);
var inst_21912 = cljs.core.seq.call(null,inst_21911);
var inst_21913 = inst_21912;
var inst_21914 = null;
var inst_21915 = (0);
var inst_21916 = (0);
var state_21989__$1 = (function (){var statearr_22029 = state_21989;
(statearr_22029[(12)] = inst_21913);

(statearr_22029[(13)] = inst_21914);

(statearr_22029[(14)] = inst_21915);

(statearr_22029[(16)] = inst_21916);

return statearr_22029;
})();
var statearr_22033_22132 = state_21989__$1;
(statearr_22033_22132[(2)] = null);

(statearr_22033_22132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (14))){
var state_21989__$1 = state_21989;
var statearr_22040_22133 = state_21989__$1;
(statearr_22040_22133[(2)] = null);

(statearr_22040_22133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (16))){
var inst_21930 = (state_21989[(10)]);
var inst_21934 = cljs.core.chunk_first.call(null,inst_21930);
var inst_21935 = cljs.core.chunk_rest.call(null,inst_21930);
var inst_21936 = cljs.core.count.call(null,inst_21934);
var inst_21913 = inst_21935;
var inst_21914 = inst_21934;
var inst_21915 = inst_21936;
var inst_21916 = (0);
var state_21989__$1 = (function (){var statearr_22041 = state_21989;
(statearr_22041[(12)] = inst_21913);

(statearr_22041[(13)] = inst_21914);

(statearr_22041[(14)] = inst_21915);

(statearr_22041[(16)] = inst_21916);

return statearr_22041;
})();
var statearr_22042_22146 = state_21989__$1;
(statearr_22042_22146[(2)] = null);

(statearr_22042_22146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (10))){
var inst_21913 = (state_21989[(12)]);
var inst_21914 = (state_21989[(13)]);
var inst_21915 = (state_21989[(14)]);
var inst_21916 = (state_21989[(16)]);
var inst_21924 = cljs.core._nth.call(null,inst_21914,inst_21916);
var inst_21925 = cljs.core.async.muxch_STAR_.call(null,inst_21924);
var inst_21926 = cljs.core.async.close_BANG_.call(null,inst_21925);
var inst_21927 = (inst_21916 + (1));
var tmp22037 = inst_21913;
var tmp22038 = inst_21914;
var tmp22039 = inst_21915;
var inst_21913__$1 = tmp22037;
var inst_21914__$1 = tmp22038;
var inst_21915__$1 = tmp22039;
var inst_21916__$1 = inst_21927;
var state_21989__$1 = (function (){var statearr_22043 = state_21989;
(statearr_22043[(12)] = inst_21913__$1);

(statearr_22043[(13)] = inst_21914__$1);

(statearr_22043[(14)] = inst_21915__$1);

(statearr_22043[(17)] = inst_21926);

(statearr_22043[(16)] = inst_21916__$1);

return statearr_22043;
})();
var statearr_22046_22147 = state_21989__$1;
(statearr_22046_22147[(2)] = null);

(statearr_22046_22147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (18))){
var inst_21959 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_22047_22148 = state_21989__$1;
(statearr_22047_22148[(2)] = inst_21959);

(statearr_22047_22148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (8))){
var inst_21915 = (state_21989[(14)]);
var inst_21916 = (state_21989[(16)]);
var inst_21921 = (inst_21916 < inst_21915);
var inst_21922 = inst_21921;
var state_21989__$1 = state_21989;
if(cljs.core.truth_(inst_21922)){
var statearr_22054_22149 = state_21989__$1;
(statearr_22054_22149[(1)] = (10));

} else {
var statearr_22055_22150 = state_21989__$1;
(statearr_22055_22150[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19396__auto___22086,mults,ensure_mult,p))
;
return ((function (switch__17910__auto__,c__19396__auto___22086,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_22059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22059[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_22059[(1)] = (1));

return statearr_22059;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_21989){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_21989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e22060){if((e22060 instanceof Object)){
var ex__17914__auto__ = e22060;
var statearr_22061_22151 = state_21989;
(statearr_22061_22151[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22152 = state_21989;
state_21989 = G__22152;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_21989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_21989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___22086,mults,ensure_mult,p))
})();
var state__19398__auto__ = (function (){var statearr_22062 = f__19397__auto__.call(null);
(statearr_22062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___22086);

return statearr_22062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___22086,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22158 = [];
var len__9331__auto___22161 = arguments.length;
var i__9332__auto___22165 = (0);
while(true){
if((i__9332__auto___22165 < len__9331__auto___22161)){
args22158.push((arguments[i__9332__auto___22165]));

var G__22173 = (i__9332__auto___22165 + (1));
i__9332__auto___22165 = G__22173;
continue;
} else {
}
break;
}

var G__22160 = args22158.length;
switch (G__22160) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22158.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22181 = [];
var len__9331__auto___22200 = arguments.length;
var i__9332__auto___22201 = (0);
while(true){
if((i__9332__auto___22201 < len__9331__auto___22200)){
args22181.push((arguments[i__9332__auto___22201]));

var G__22202 = (i__9332__auto___22201 + (1));
i__9332__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var G__22196 = args22181.length;
switch (G__22196) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22181.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22204 = [];
var len__9331__auto___22315 = arguments.length;
var i__9332__auto___22322 = (0);
while(true){
if((i__9332__auto___22322 < len__9331__auto___22315)){
args22204.push((arguments[i__9332__auto___22322]));

var G__22323 = (i__9332__auto___22322 + (1));
i__9332__auto___22322 = G__22323;
continue;
} else {
}
break;
}

var G__22210 = args22204.length;
switch (G__22210) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22204.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19396__auto___22325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___22325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___22325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22273){
var state_val_22274 = (state_22273[(1)]);
if((state_val_22274 === (7))){
var state_22273__$1 = state_22273;
var statearr_22275_22326 = state_22273__$1;
(statearr_22275_22326[(2)] = null);

(statearr_22275_22326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (1))){
var state_22273__$1 = state_22273;
var statearr_22276_22327 = state_22273__$1;
(statearr_22276_22327[(2)] = null);

(statearr_22276_22327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (4))){
var inst_22237 = (state_22273[(7)]);
var inst_22239 = (inst_22237 < cnt);
var state_22273__$1 = state_22273;
if(cljs.core.truth_(inst_22239)){
var statearr_22277_22328 = state_22273__$1;
(statearr_22277_22328[(1)] = (6));

} else {
var statearr_22278_22329 = state_22273__$1;
(statearr_22278_22329[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (15))){
var inst_22269 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22279_22330 = state_22273__$1;
(statearr_22279_22330[(2)] = inst_22269);

(statearr_22279_22330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (13))){
var inst_22262 = cljs.core.async.close_BANG_.call(null,out);
var state_22273__$1 = state_22273;
var statearr_22280_22340 = state_22273__$1;
(statearr_22280_22340[(2)] = inst_22262);

(statearr_22280_22340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (6))){
var state_22273__$1 = state_22273;
var statearr_22281_22341 = state_22273__$1;
(statearr_22281_22341[(2)] = null);

(statearr_22281_22341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (3))){
var inst_22271 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22273__$1,inst_22271);
} else {
if((state_val_22274 === (12))){
var inst_22259 = (state_22273[(8)]);
var inst_22259__$1 = (state_22273[(2)]);
var inst_22260 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22259__$1);
var state_22273__$1 = (function (){var statearr_22287 = state_22273;
(statearr_22287[(8)] = inst_22259__$1);

return statearr_22287;
})();
if(cljs.core.truth_(inst_22260)){
var statearr_22288_22342 = state_22273__$1;
(statearr_22288_22342[(1)] = (13));

} else {
var statearr_22289_22352 = state_22273__$1;
(statearr_22289_22352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (2))){
var inst_22236 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22237 = (0);
var state_22273__$1 = (function (){var statearr_22290 = state_22273;
(statearr_22290[(7)] = inst_22237);

(statearr_22290[(9)] = inst_22236);

return statearr_22290;
})();
var statearr_22291_22353 = state_22273__$1;
(statearr_22291_22353[(2)] = null);

(statearr_22291_22353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (11))){
var inst_22237 = (state_22273[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22273,(10),Object,null,(9));
var inst_22246 = chs__$1.call(null,inst_22237);
var inst_22247 = done.call(null,inst_22237);
var inst_22248 = cljs.core.async.take_BANG_.call(null,inst_22246,inst_22247);
var state_22273__$1 = state_22273;
var statearr_22292_22354 = state_22273__$1;
(statearr_22292_22354[(2)] = inst_22248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (9))){
var inst_22237 = (state_22273[(7)]);
var inst_22250 = (state_22273[(2)]);
var inst_22251 = (inst_22237 + (1));
var inst_22237__$1 = inst_22251;
var state_22273__$1 = (function (){var statearr_22293 = state_22273;
(statearr_22293[(7)] = inst_22237__$1);

(statearr_22293[(10)] = inst_22250);

return statearr_22293;
})();
var statearr_22294_22355 = state_22273__$1;
(statearr_22294_22355[(2)] = null);

(statearr_22294_22355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (5))){
var inst_22257 = (state_22273[(2)]);
var state_22273__$1 = (function (){var statearr_22295 = state_22273;
(statearr_22295[(11)] = inst_22257);

return statearr_22295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22273__$1,(12),dchan);
} else {
if((state_val_22274 === (14))){
var inst_22259 = (state_22273[(8)]);
var inst_22264 = cljs.core.apply.call(null,f,inst_22259);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22273__$1,(16),out,inst_22264);
} else {
if((state_val_22274 === (16))){
var inst_22266 = (state_22273[(2)]);
var state_22273__$1 = (function (){var statearr_22296 = state_22273;
(statearr_22296[(12)] = inst_22266);

return statearr_22296;
})();
var statearr_22297_22356 = state_22273__$1;
(statearr_22297_22356[(2)] = null);

(statearr_22297_22356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (10))){
var inst_22241 = (state_22273[(2)]);
var inst_22242 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22273__$1 = (function (){var statearr_22298 = state_22273;
(statearr_22298[(13)] = inst_22241);

return statearr_22298;
})();
var statearr_22299_22357 = state_22273__$1;
(statearr_22299_22357[(2)] = inst_22242);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (8))){
var inst_22255 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22300_22361 = state_22273__$1;
(statearr_22300_22361[(2)] = inst_22255);

(statearr_22300_22361[(1)] = (5));


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
});})(c__19396__auto___22325,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17910__auto__,c__19396__auto___22325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_22305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22305[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_22305[(1)] = (1));

return statearr_22305;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_22273){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_22273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e22312){if((e22312 instanceof Object)){
var ex__17914__auto__ = e22312;
var statearr_22313_22365 = state_22273;
(statearr_22313_22365[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22366 = state_22273;
state_22273 = G__22366;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_22273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_22273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___22325,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19398__auto__ = (function (){var statearr_22314 = f__19397__auto__.call(null);
(statearr_22314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___22325);

return statearr_22314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___22325,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22374 = [];
var len__9331__auto___22444 = arguments.length;
var i__9332__auto___22445 = (0);
while(true){
if((i__9332__auto___22445 < len__9331__auto___22444)){
args22374.push((arguments[i__9332__auto___22445]));

var G__22446 = (i__9332__auto___22445 + (1));
i__9332__auto___22445 = G__22446;
continue;
} else {
}
break;
}

var G__22376 = args22374.length;
switch (G__22376) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22374.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19396__auto___22448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___22448,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___22448,out){
return (function (state_22414){
var state_val_22415 = (state_22414[(1)]);
if((state_val_22415 === (7))){
var inst_22388 = (state_22414[(7)]);
var inst_22387 = (state_22414[(8)]);
var inst_22387__$1 = (state_22414[(2)]);
var inst_22388__$1 = cljs.core.nth.call(null,inst_22387__$1,(0),null);
var inst_22389 = cljs.core.nth.call(null,inst_22387__$1,(1),null);
var inst_22390 = (inst_22388__$1 == null);
var state_22414__$1 = (function (){var statearr_22416 = state_22414;
(statearr_22416[(9)] = inst_22389);

(statearr_22416[(7)] = inst_22388__$1);

(statearr_22416[(8)] = inst_22387__$1);

return statearr_22416;
})();
if(cljs.core.truth_(inst_22390)){
var statearr_22417_22455 = state_22414__$1;
(statearr_22417_22455[(1)] = (8));

} else {
var statearr_22418_22456 = state_22414__$1;
(statearr_22418_22456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (1))){
var inst_22377 = cljs.core.vec.call(null,chs);
var inst_22378 = inst_22377;
var state_22414__$1 = (function (){var statearr_22419 = state_22414;
(statearr_22419[(10)] = inst_22378);

return statearr_22419;
})();
var statearr_22420_22457 = state_22414__$1;
(statearr_22420_22457[(2)] = null);

(statearr_22420_22457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (4))){
var inst_22378 = (state_22414[(10)]);
var state_22414__$1 = state_22414;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22414__$1,(7),inst_22378);
} else {
if((state_val_22415 === (6))){
var inst_22410 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
var statearr_22421_22458 = state_22414__$1;
(statearr_22421_22458[(2)] = inst_22410);

(statearr_22421_22458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (3))){
var inst_22412 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22414__$1,inst_22412);
} else {
if((state_val_22415 === (2))){
var inst_22378 = (state_22414[(10)]);
var inst_22380 = cljs.core.count.call(null,inst_22378);
var inst_22381 = (inst_22380 > (0));
var state_22414__$1 = state_22414;
if(cljs.core.truth_(inst_22381)){
var statearr_22423_22459 = state_22414__$1;
(statearr_22423_22459[(1)] = (4));

} else {
var statearr_22430_22460 = state_22414__$1;
(statearr_22430_22460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (11))){
var inst_22378 = (state_22414[(10)]);
var inst_22403 = (state_22414[(2)]);
var tmp22422 = inst_22378;
var inst_22378__$1 = tmp22422;
var state_22414__$1 = (function (){var statearr_22431 = state_22414;
(statearr_22431[(11)] = inst_22403);

(statearr_22431[(10)] = inst_22378__$1);

return statearr_22431;
})();
var statearr_22432_22461 = state_22414__$1;
(statearr_22432_22461[(2)] = null);

(statearr_22432_22461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (9))){
var inst_22388 = (state_22414[(7)]);
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22414__$1,(11),out,inst_22388);
} else {
if((state_val_22415 === (5))){
var inst_22408 = cljs.core.async.close_BANG_.call(null,out);
var state_22414__$1 = state_22414;
var statearr_22433_22462 = state_22414__$1;
(statearr_22433_22462[(2)] = inst_22408);

(statearr_22433_22462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (10))){
var inst_22406 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
var statearr_22434_22463 = state_22414__$1;
(statearr_22434_22463[(2)] = inst_22406);

(statearr_22434_22463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (8))){
var inst_22389 = (state_22414[(9)]);
var inst_22388 = (state_22414[(7)]);
var inst_22387 = (state_22414[(8)]);
var inst_22378 = (state_22414[(10)]);
var inst_22395 = (function (){var cs = inst_22378;
var vec__22383 = inst_22387;
var v = inst_22388;
var c = inst_22389;
return ((function (cs,vec__22383,v,c,inst_22389,inst_22388,inst_22387,inst_22378,state_val_22415,c__19396__auto___22448,out){
return (function (p1__22373_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22373_SHARP_);
});
;})(cs,vec__22383,v,c,inst_22389,inst_22388,inst_22387,inst_22378,state_val_22415,c__19396__auto___22448,out))
})();
var inst_22396 = cljs.core.filterv.call(null,inst_22395,inst_22378);
var inst_22378__$1 = inst_22396;
var state_22414__$1 = (function (){var statearr_22435 = state_22414;
(statearr_22435[(10)] = inst_22378__$1);

return statearr_22435;
})();
var statearr_22436_22464 = state_22414__$1;
(statearr_22436_22464[(2)] = null);

(statearr_22436_22464[(1)] = (2));


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
});})(c__19396__auto___22448,out))
;
return ((function (switch__17910__auto__,c__19396__auto___22448,out){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_22440 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22440[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_22440[(1)] = (1));

return statearr_22440;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_22414){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_22414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e22441){if((e22441 instanceof Object)){
var ex__17914__auto__ = e22441;
var statearr_22442_22471 = state_22414;
(statearr_22442_22471[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22475 = state_22414;
state_22414 = G__22475;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_22414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_22414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___22448,out))
})();
var state__19398__auto__ = (function (){var statearr_22443 = f__19397__auto__.call(null);
(statearr_22443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___22448);

return statearr_22443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___22448,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22482 = [];
var len__9331__auto___22531 = arguments.length;
var i__9332__auto___22532 = (0);
while(true){
if((i__9332__auto___22532 < len__9331__auto___22531)){
args22482.push((arguments[i__9332__auto___22532]));

var G__22533 = (i__9332__auto___22532 + (1));
i__9332__auto___22532 = G__22533;
continue;
} else {
}
break;
}

var G__22484 = args22482.length;
switch (G__22484) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22482.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19396__auto___22537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___22537,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___22537,out){
return (function (state_22508){
var state_val_22509 = (state_22508[(1)]);
if((state_val_22509 === (7))){
var inst_22490 = (state_22508[(7)]);
var inst_22490__$1 = (state_22508[(2)]);
var inst_22491 = (inst_22490__$1 == null);
var inst_22492 = cljs.core.not.call(null,inst_22491);
var state_22508__$1 = (function (){var statearr_22510 = state_22508;
(statearr_22510[(7)] = inst_22490__$1);

return statearr_22510;
})();
if(inst_22492){
var statearr_22511_22541 = state_22508__$1;
(statearr_22511_22541[(1)] = (8));

} else {
var statearr_22512_22542 = state_22508__$1;
(statearr_22512_22542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (1))){
var inst_22485 = (0);
var state_22508__$1 = (function (){var statearr_22513 = state_22508;
(statearr_22513[(8)] = inst_22485);

return statearr_22513;
})();
var statearr_22514_22543 = state_22508__$1;
(statearr_22514_22543[(2)] = null);

(statearr_22514_22543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (4))){
var state_22508__$1 = state_22508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22508__$1,(7),ch);
} else {
if((state_val_22509 === (6))){
var inst_22503 = (state_22508[(2)]);
var state_22508__$1 = state_22508;
var statearr_22515_22547 = state_22508__$1;
(statearr_22515_22547[(2)] = inst_22503);

(statearr_22515_22547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (3))){
var inst_22505 = (state_22508[(2)]);
var inst_22506 = cljs.core.async.close_BANG_.call(null,out);
var state_22508__$1 = (function (){var statearr_22516 = state_22508;
(statearr_22516[(9)] = inst_22505);

return statearr_22516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22508__$1,inst_22506);
} else {
if((state_val_22509 === (2))){
var inst_22485 = (state_22508[(8)]);
var inst_22487 = (inst_22485 < n);
var state_22508__$1 = state_22508;
if(cljs.core.truth_(inst_22487)){
var statearr_22517_22548 = state_22508__$1;
(statearr_22517_22548[(1)] = (4));

} else {
var statearr_22518_22549 = state_22508__$1;
(statearr_22518_22549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (11))){
var inst_22485 = (state_22508[(8)]);
var inst_22495 = (state_22508[(2)]);
var inst_22496 = (inst_22485 + (1));
var inst_22485__$1 = inst_22496;
var state_22508__$1 = (function (){var statearr_22519 = state_22508;
(statearr_22519[(8)] = inst_22485__$1);

(statearr_22519[(10)] = inst_22495);

return statearr_22519;
})();
var statearr_22520_22550 = state_22508__$1;
(statearr_22520_22550[(2)] = null);

(statearr_22520_22550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (9))){
var state_22508__$1 = state_22508;
var statearr_22521_22551 = state_22508__$1;
(statearr_22521_22551[(2)] = null);

(statearr_22521_22551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (5))){
var state_22508__$1 = state_22508;
var statearr_22522_22552 = state_22508__$1;
(statearr_22522_22552[(2)] = null);

(statearr_22522_22552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (10))){
var inst_22500 = (state_22508[(2)]);
var state_22508__$1 = state_22508;
var statearr_22523_22556 = state_22508__$1;
(statearr_22523_22556[(2)] = inst_22500);

(statearr_22523_22556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (8))){
var inst_22490 = (state_22508[(7)]);
var state_22508__$1 = state_22508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22508__$1,(11),out,inst_22490);
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
});})(c__19396__auto___22537,out))
;
return ((function (switch__17910__auto__,c__19396__auto___22537,out){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_22527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22527[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_22527[(1)] = (1));

return statearr_22527;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_22508){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_22508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e22528){if((e22528 instanceof Object)){
var ex__17914__auto__ = e22528;
var statearr_22529_22566 = state_22508;
(statearr_22529_22566[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22567 = state_22508;
state_22508 = G__22567;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_22508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_22508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___22537,out))
})();
var state__19398__auto__ = (function (){var statearr_22530 = f__19397__auto__.call(null);
(statearr_22530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___22537);

return statearr_22530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___22537,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22583 = (function (f,ch,meta22584){
this.f = f;
this.ch = ch;
this.meta22584 = meta22584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22585,meta22584__$1){
var self__ = this;
var _22585__$1 = this;
return (new cljs.core.async.t_cljs$core$async22583(self__.f,self__.ch,meta22584__$1));
});


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22585){
var self__ = this;
var _22585__$1 = this;
return self__.meta22584;
});


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22591 = (function (f,ch,meta22584,_,fn1,meta22592){
this.f = f;
this.ch = ch;
this.meta22584 = meta22584;
this._ = _;
this.fn1 = fn1;
this.meta22592 = meta22592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22593,meta22592__$1){
var self__ = this;
var _22593__$1 = this;
return (new cljs.core.async.t_cljs$core$async22591(self__.f,self__.ch,self__.meta22584,self__._,self__.fn1,meta22592__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22593){
var self__ = this;
var _22593__$1 = this;
return self__.meta22592;
});})(___$1))
;


cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22571_SHARP_){
return f1.call(null,(((p1__22571_SHARP_ == null))?null:self__.f.call(null,p1__22571_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22584","meta22584",1342113203,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22583","cljs.core.async/t_cljs$core$async22583",-1103708840,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22592","meta22592",334346932,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22591";

cljs.core.async.t_cljs$core$async22591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async22591");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22591(f__$1,ch__$1,meta22584__$1,___$2,fn1__$1,meta22592){
return (new cljs.core.async.t_cljs$core$async22591(f__$1,ch__$1,meta22584__$1,___$2,fn1__$1,meta22592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22591(self__.f,self__.ch,self__.meta22584,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8098__auto__ = ret;
if(cljs.core.truth_(and__8098__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8098__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22584","meta22584",1342113203,null)], null);
});

cljs.core.async.t_cljs$core$async22583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22583";

cljs.core.async.t_cljs$core$async22583.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async22583");
});

cljs.core.async.__GT_t_cljs$core$async22583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22583(f__$1,ch__$1,meta22584){
return (new cljs.core.async.t_cljs$core$async22583(f__$1,ch__$1,meta22584));
});

}

return (new cljs.core.async.t_cljs$core$async22583(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22624 = (function (f,ch,meta22625){
this.f = f;
this.ch = ch;
this.meta22625 = meta22625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22626,meta22625__$1){
var self__ = this;
var _22626__$1 = this;
return (new cljs.core.async.t_cljs$core$async22624(self__.f,self__.ch,meta22625__$1));
});


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22626){
var self__ = this;
var _22626__$1 = this;
return self__.meta22625;
});


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22625","meta22625",-2125609587,null)], null);
});

cljs.core.async.t_cljs$core$async22624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22624";

cljs.core.async.t_cljs$core$async22624.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async22624");
});

cljs.core.async.__GT_t_cljs$core$async22624 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22624(f__$1,ch__$1,meta22625){
return (new cljs.core.async.t_cljs$core$async22624(f__$1,ch__$1,meta22625));
});

}

return (new cljs.core.async.t_cljs$core$async22624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22644 = (function (p,ch,meta22645){
this.p = p;
this.ch = ch;
this.meta22645 = meta22645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22646,meta22645__$1){
var self__ = this;
var _22646__$1 = this;
return (new cljs.core.async.t_cljs$core$async22644(self__.p,self__.ch,meta22645__$1));
});


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22646){
var self__ = this;
var _22646__$1 = this;
return self__.meta22645;
});


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22645","meta22645",31547275,null)], null);
});

cljs.core.async.t_cljs$core$async22644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22644";

cljs.core.async.t_cljs$core$async22644.cljs$lang$ctorPrWriter = (function (this__8767__auto__,writer__8768__auto__,opt__8769__auto__){
return cljs.core._write.call(null,writer__8768__auto__,"cljs.core.async/t_cljs$core$async22644");
});

cljs.core.async.__GT_t_cljs$core$async22644 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22644(p__$1,ch__$1,meta22645){
return (new cljs.core.async.t_cljs$core$async22644(p__$1,ch__$1,meta22645));
});

}

return (new cljs.core.async.t_cljs$core$async22644(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22653 = [];
var len__9331__auto___22709 = arguments.length;
var i__9332__auto___22710 = (0);
while(true){
if((i__9332__auto___22710 < len__9331__auto___22709)){
args22653.push((arguments[i__9332__auto___22710]));

var G__22711 = (i__9332__auto___22710 + (1));
i__9332__auto___22710 = G__22711;
continue;
} else {
}
break;
}

var G__22658 = args22653.length;
switch (G__22658) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22653.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19396__auto___22713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___22713,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___22713,out){
return (function (state_22682){
var state_val_22683 = (state_22682[(1)]);
if((state_val_22683 === (7))){
var inst_22678 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22687_22714 = state_22682__$1;
(statearr_22687_22714[(2)] = inst_22678);

(statearr_22687_22714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (1))){
var state_22682__$1 = state_22682;
var statearr_22688_22715 = state_22682__$1;
(statearr_22688_22715[(2)] = null);

(statearr_22688_22715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (4))){
var inst_22661 = (state_22682[(7)]);
var inst_22661__$1 = (state_22682[(2)]);
var inst_22662 = (inst_22661__$1 == null);
var state_22682__$1 = (function (){var statearr_22692 = state_22682;
(statearr_22692[(7)] = inst_22661__$1);

return statearr_22692;
})();
if(cljs.core.truth_(inst_22662)){
var statearr_22693_22716 = state_22682__$1;
(statearr_22693_22716[(1)] = (5));

} else {
var statearr_22694_22717 = state_22682__$1;
(statearr_22694_22717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (6))){
var inst_22661 = (state_22682[(7)]);
var inst_22666 = p.call(null,inst_22661);
var state_22682__$1 = state_22682;
if(cljs.core.truth_(inst_22666)){
var statearr_22695_22718 = state_22682__$1;
(statearr_22695_22718[(1)] = (8));

} else {
var statearr_22696_22719 = state_22682__$1;
(statearr_22696_22719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (3))){
var inst_22680 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22682__$1,inst_22680);
} else {
if((state_val_22683 === (2))){
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22682__$1,(4),ch);
} else {
if((state_val_22683 === (11))){
var inst_22672 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22697_22720 = state_22682__$1;
(statearr_22697_22720[(2)] = inst_22672);

(statearr_22697_22720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (9))){
var state_22682__$1 = state_22682;
var statearr_22698_22721 = state_22682__$1;
(statearr_22698_22721[(2)] = null);

(statearr_22698_22721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (5))){
var inst_22664 = cljs.core.async.close_BANG_.call(null,out);
var state_22682__$1 = state_22682;
var statearr_22699_22725 = state_22682__$1;
(statearr_22699_22725[(2)] = inst_22664);

(statearr_22699_22725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (10))){
var inst_22675 = (state_22682[(2)]);
var state_22682__$1 = (function (){var statearr_22700 = state_22682;
(statearr_22700[(8)] = inst_22675);

return statearr_22700;
})();
var statearr_22701_22726 = state_22682__$1;
(statearr_22701_22726[(2)] = null);

(statearr_22701_22726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (8))){
var inst_22661 = (state_22682[(7)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22682__$1,(11),out,inst_22661);
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
});})(c__19396__auto___22713,out))
;
return ((function (switch__17910__auto__,c__19396__auto___22713,out){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_22705 = [null,null,null,null,null,null,null,null,null];
(statearr_22705[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_22705[(1)] = (1));

return statearr_22705;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_22682){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_22682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e22706){if((e22706 instanceof Object)){
var ex__17914__auto__ = e22706;
var statearr_22707_22733 = state_22682;
(statearr_22707_22733[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22734 = state_22682;
state_22682 = G__22734;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_22682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_22682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___22713,out))
})();
var state__19398__auto__ = (function (){var statearr_22708 = f__19397__auto__.call(null);
(statearr_22708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___22713);

return statearr_22708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___22713,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22738 = [];
var len__9331__auto___22741 = arguments.length;
var i__9332__auto___22742 = (0);
while(true){
if((i__9332__auto___22742 < len__9331__auto___22741)){
args22738.push((arguments[i__9332__auto___22742]));

var G__22743 = (i__9332__auto___22742 + (1));
i__9332__auto___22742 = G__22743;
continue;
} else {
}
break;
}

var G__22740 = args22738.length;
switch (G__22740) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22738.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto__){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto__){
return (function (state_22922){
var state_val_22923 = (state_22922[(1)]);
if((state_val_22923 === (7))){
var inst_22918 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22924_22969 = state_22922__$1;
(statearr_22924_22969[(2)] = inst_22918);

(statearr_22924_22969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (20))){
var inst_22888 = (state_22922[(7)]);
var inst_22899 = (state_22922[(2)]);
var inst_22900 = cljs.core.next.call(null,inst_22888);
var inst_22874 = inst_22900;
var inst_22875 = null;
var inst_22876 = (0);
var inst_22877 = (0);
var state_22922__$1 = (function (){var statearr_22925 = state_22922;
(statearr_22925[(8)] = inst_22899);

(statearr_22925[(9)] = inst_22877);

(statearr_22925[(10)] = inst_22874);

(statearr_22925[(11)] = inst_22876);

(statearr_22925[(12)] = inst_22875);

return statearr_22925;
})();
var statearr_22926_22974 = state_22922__$1;
(statearr_22926_22974[(2)] = null);

(statearr_22926_22974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (1))){
var state_22922__$1 = state_22922;
var statearr_22927_22975 = state_22922__$1;
(statearr_22927_22975[(2)] = null);

(statearr_22927_22975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (4))){
var inst_22863 = (state_22922[(13)]);
var inst_22863__$1 = (state_22922[(2)]);
var inst_22864 = (inst_22863__$1 == null);
var state_22922__$1 = (function (){var statearr_22928 = state_22922;
(statearr_22928[(13)] = inst_22863__$1);

return statearr_22928;
})();
if(cljs.core.truth_(inst_22864)){
var statearr_22929_22976 = state_22922__$1;
(statearr_22929_22976[(1)] = (5));

} else {
var statearr_22930_22977 = state_22922__$1;
(statearr_22930_22977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (15))){
var state_22922__$1 = state_22922;
var statearr_22934_22983 = state_22922__$1;
(statearr_22934_22983[(2)] = null);

(statearr_22934_22983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (21))){
var state_22922__$1 = state_22922;
var statearr_22935_22984 = state_22922__$1;
(statearr_22935_22984[(2)] = null);

(statearr_22935_22984[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (13))){
var inst_22877 = (state_22922[(9)]);
var inst_22874 = (state_22922[(10)]);
var inst_22876 = (state_22922[(11)]);
var inst_22875 = (state_22922[(12)]);
var inst_22884 = (state_22922[(2)]);
var inst_22885 = (inst_22877 + (1));
var tmp22931 = inst_22874;
var tmp22932 = inst_22876;
var tmp22933 = inst_22875;
var inst_22874__$1 = tmp22931;
var inst_22875__$1 = tmp22933;
var inst_22876__$1 = tmp22932;
var inst_22877__$1 = inst_22885;
var state_22922__$1 = (function (){var statearr_22936 = state_22922;
(statearr_22936[(9)] = inst_22877__$1);

(statearr_22936[(10)] = inst_22874__$1);

(statearr_22936[(14)] = inst_22884);

(statearr_22936[(11)] = inst_22876__$1);

(statearr_22936[(12)] = inst_22875__$1);

return statearr_22936;
})();
var statearr_22937_22988 = state_22922__$1;
(statearr_22937_22988[(2)] = null);

(statearr_22937_22988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (22))){
var state_22922__$1 = state_22922;
var statearr_22938_22991 = state_22922__$1;
(statearr_22938_22991[(2)] = null);

(statearr_22938_22991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (6))){
var inst_22863 = (state_22922[(13)]);
var inst_22872 = f.call(null,inst_22863);
var inst_22873 = cljs.core.seq.call(null,inst_22872);
var inst_22874 = inst_22873;
var inst_22875 = null;
var inst_22876 = (0);
var inst_22877 = (0);
var state_22922__$1 = (function (){var statearr_22939 = state_22922;
(statearr_22939[(9)] = inst_22877);

(statearr_22939[(10)] = inst_22874);

(statearr_22939[(11)] = inst_22876);

(statearr_22939[(12)] = inst_22875);

return statearr_22939;
})();
var statearr_22941_22997 = state_22922__$1;
(statearr_22941_22997[(2)] = null);

(statearr_22941_22997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (17))){
var inst_22888 = (state_22922[(7)]);
var inst_22892 = cljs.core.chunk_first.call(null,inst_22888);
var inst_22893 = cljs.core.chunk_rest.call(null,inst_22888);
var inst_22894 = cljs.core.count.call(null,inst_22892);
var inst_22874 = inst_22893;
var inst_22875 = inst_22892;
var inst_22876 = inst_22894;
var inst_22877 = (0);
var state_22922__$1 = (function (){var statearr_22942 = state_22922;
(statearr_22942[(9)] = inst_22877);

(statearr_22942[(10)] = inst_22874);

(statearr_22942[(11)] = inst_22876);

(statearr_22942[(12)] = inst_22875);

return statearr_22942;
})();
var statearr_22944_22998 = state_22922__$1;
(statearr_22944_22998[(2)] = null);

(statearr_22944_22998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (3))){
var inst_22920 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22922__$1,inst_22920);
} else {
if((state_val_22923 === (12))){
var inst_22908 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22945_23001 = state_22922__$1;
(statearr_22945_23001[(2)] = inst_22908);

(statearr_22945_23001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (2))){
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22922__$1,(4),in$);
} else {
if((state_val_22923 === (23))){
var inst_22916 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22946_23002 = state_22922__$1;
(statearr_22946_23002[(2)] = inst_22916);

(statearr_22946_23002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (19))){
var inst_22903 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22947_23003 = state_22922__$1;
(statearr_22947_23003[(2)] = inst_22903);

(statearr_22947_23003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (11))){
var inst_22874 = (state_22922[(10)]);
var inst_22888 = (state_22922[(7)]);
var inst_22888__$1 = cljs.core.seq.call(null,inst_22874);
var state_22922__$1 = (function (){var statearr_22948 = state_22922;
(statearr_22948[(7)] = inst_22888__$1);

return statearr_22948;
})();
if(inst_22888__$1){
var statearr_22949_23004 = state_22922__$1;
(statearr_22949_23004[(1)] = (14));

} else {
var statearr_22950_23005 = state_22922__$1;
(statearr_22950_23005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (9))){
var inst_22910 = (state_22922[(2)]);
var inst_22911 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22922__$1 = (function (){var statearr_22951 = state_22922;
(statearr_22951[(15)] = inst_22910);

return statearr_22951;
})();
if(cljs.core.truth_(inst_22911)){
var statearr_22952_23006 = state_22922__$1;
(statearr_22952_23006[(1)] = (21));

} else {
var statearr_22953_23013 = state_22922__$1;
(statearr_22953_23013[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (5))){
var inst_22866 = cljs.core.async.close_BANG_.call(null,out);
var state_22922__$1 = state_22922;
var statearr_22954_23026 = state_22922__$1;
(statearr_22954_23026[(2)] = inst_22866);

(statearr_22954_23026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (14))){
var inst_22888 = (state_22922[(7)]);
var inst_22890 = cljs.core.chunked_seq_QMARK_.call(null,inst_22888);
var state_22922__$1 = state_22922;
if(inst_22890){
var statearr_22955_23042 = state_22922__$1;
(statearr_22955_23042[(1)] = (17));

} else {
var statearr_22956_23043 = state_22922__$1;
(statearr_22956_23043[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (16))){
var inst_22906 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22957_23053 = state_22922__$1;
(statearr_22957_23053[(2)] = inst_22906);

(statearr_22957_23053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (10))){
var inst_22877 = (state_22922[(9)]);
var inst_22875 = (state_22922[(12)]);
var inst_22882 = cljs.core._nth.call(null,inst_22875,inst_22877);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22922__$1,(13),out,inst_22882);
} else {
if((state_val_22923 === (18))){
var inst_22888 = (state_22922[(7)]);
var inst_22897 = cljs.core.first.call(null,inst_22888);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22922__$1,(20),out,inst_22897);
} else {
if((state_val_22923 === (8))){
var inst_22877 = (state_22922[(9)]);
var inst_22876 = (state_22922[(11)]);
var inst_22879 = (inst_22877 < inst_22876);
var inst_22880 = inst_22879;
var state_22922__$1 = state_22922;
if(cljs.core.truth_(inst_22880)){
var statearr_22959_23054 = state_22922__$1;
(statearr_22959_23054[(1)] = (10));

} else {
var statearr_22960_23055 = state_22922__$1;
(statearr_22960_23055[(1)] = (11));

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
}
}
}
}
}
}
});})(c__19396__auto__))
;
return ((function (switch__17910__auto__,c__19396__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17911__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17911__auto____0 = (function (){
var statearr_22965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22965[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17911__auto__);

(statearr_22965[(1)] = (1));

return statearr_22965;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17911__auto____1 = (function (state_22922){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_22922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e22966){if((e22966 instanceof Object)){
var ex__17914__auto__ = e22966;
var statearr_22967_23056 = state_22922;
(statearr_22967_23056[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23057 = state_22922;
state_22922 = G__23057;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17911__auto__ = function(state_22922){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17911__auto____1.call(this,state_22922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17911__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17911__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto__))
})();
var state__19398__auto__ = (function (){var statearr_22968 = f__19397__auto__.call(null);
(statearr_22968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto__);

return statearr_22968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto__))
);

return c__19396__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23061 = [];
var len__9331__auto___23064 = arguments.length;
var i__9332__auto___23065 = (0);
while(true){
if((i__9332__auto___23065 < len__9331__auto___23064)){
args23061.push((arguments[i__9332__auto___23065]));

var G__23066 = (i__9332__auto___23065 + (1));
i__9332__auto___23065 = G__23066;
continue;
} else {
}
break;
}

var G__23063 = args23061.length;
switch (G__23063) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23061.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23071 = [];
var len__9331__auto___23080 = arguments.length;
var i__9332__auto___23081 = (0);
while(true){
if((i__9332__auto___23081 < len__9331__auto___23080)){
args23071.push((arguments[i__9332__auto___23081]));

var G__23082 = (i__9332__auto___23081 + (1));
i__9332__auto___23081 = G__23082;
continue;
} else {
}
break;
}

var G__23079 = args23071.length;
switch (G__23079) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23071.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23084 = [];
var len__9331__auto___23141 = arguments.length;
var i__9332__auto___23142 = (0);
while(true){
if((i__9332__auto___23142 < len__9331__auto___23141)){
args23084.push((arguments[i__9332__auto___23142]));

var G__23143 = (i__9332__auto___23142 + (1));
i__9332__auto___23142 = G__23143;
continue;
} else {
}
break;
}

var G__23092 = args23084.length;
switch (G__23092) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23084.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19396__auto___23145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___23145,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___23145,out){
return (function (state_23116){
var state_val_23117 = (state_23116[(1)]);
if((state_val_23117 === (7))){
var inst_23111 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23118_23146 = state_23116__$1;
(statearr_23118_23146[(2)] = inst_23111);

(statearr_23118_23146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (1))){
var inst_23093 = null;
var state_23116__$1 = (function (){var statearr_23119 = state_23116;
(statearr_23119[(7)] = inst_23093);

return statearr_23119;
})();
var statearr_23120_23147 = state_23116__$1;
(statearr_23120_23147[(2)] = null);

(statearr_23120_23147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (4))){
var inst_23096 = (state_23116[(8)]);
var inst_23096__$1 = (state_23116[(2)]);
var inst_23097 = (inst_23096__$1 == null);
var inst_23098 = cljs.core.not.call(null,inst_23097);
var state_23116__$1 = (function (){var statearr_23121 = state_23116;
(statearr_23121[(8)] = inst_23096__$1);

return statearr_23121;
})();
if(inst_23098){
var statearr_23122_23148 = state_23116__$1;
(statearr_23122_23148[(1)] = (5));

} else {
var statearr_23123_23149 = state_23116__$1;
(statearr_23123_23149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (6))){
var state_23116__$1 = state_23116;
var statearr_23124_23150 = state_23116__$1;
(statearr_23124_23150[(2)] = null);

(statearr_23124_23150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (3))){
var inst_23113 = (state_23116[(2)]);
var inst_23114 = cljs.core.async.close_BANG_.call(null,out);
var state_23116__$1 = (function (){var statearr_23125 = state_23116;
(statearr_23125[(9)] = inst_23113);

return statearr_23125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23116__$1,inst_23114);
} else {
if((state_val_23117 === (2))){
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23116__$1,(4),ch);
} else {
if((state_val_23117 === (11))){
var inst_23096 = (state_23116[(8)]);
var inst_23105 = (state_23116[(2)]);
var inst_23093 = inst_23096;
var state_23116__$1 = (function (){var statearr_23126 = state_23116;
(statearr_23126[(7)] = inst_23093);

(statearr_23126[(10)] = inst_23105);

return statearr_23126;
})();
var statearr_23127_23154 = state_23116__$1;
(statearr_23127_23154[(2)] = null);

(statearr_23127_23154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (9))){
var inst_23096 = (state_23116[(8)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(11),out,inst_23096);
} else {
if((state_val_23117 === (5))){
var inst_23096 = (state_23116[(8)]);
var inst_23093 = (state_23116[(7)]);
var inst_23100 = cljs.core._EQ_.call(null,inst_23096,inst_23093);
var state_23116__$1 = state_23116;
if(inst_23100){
var statearr_23129_23159 = state_23116__$1;
(statearr_23129_23159[(1)] = (8));

} else {
var statearr_23130_23160 = state_23116__$1;
(statearr_23130_23160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (10))){
var inst_23108 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23131_23163 = state_23116__$1;
(statearr_23131_23163[(2)] = inst_23108);

(statearr_23131_23163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (8))){
var inst_23093 = (state_23116[(7)]);
var tmp23128 = inst_23093;
var inst_23093__$1 = tmp23128;
var state_23116__$1 = (function (){var statearr_23132 = state_23116;
(statearr_23132[(7)] = inst_23093__$1);

return statearr_23132;
})();
var statearr_23133_23165 = state_23116__$1;
(statearr_23133_23165[(2)] = null);

(statearr_23133_23165[(1)] = (2));


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
});})(c__19396__auto___23145,out))
;
return ((function (switch__17910__auto__,c__19396__auto___23145,out){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_23137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23137[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_23137[(1)] = (1));

return statearr_23137;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_23116){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_23116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e23138){if((e23138 instanceof Object)){
var ex__17914__auto__ = e23138;
var statearr_23139_23166 = state_23116;
(statearr_23139_23166[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23167 = state_23116;
state_23116 = G__23167;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_23116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_23116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___23145,out))
})();
var state__19398__auto__ = (function (){var statearr_23140 = f__19397__auto__.call(null);
(statearr_23140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___23145);

return statearr_23140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___23145,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23168 = [];
var len__9331__auto___23238 = arguments.length;
var i__9332__auto___23239 = (0);
while(true){
if((i__9332__auto___23239 < len__9331__auto___23238)){
args23168.push((arguments[i__9332__auto___23239]));

var G__23240 = (i__9332__auto___23239 + (1));
i__9332__auto___23239 = G__23240;
continue;
} else {
}
break;
}

var G__23170 = args23168.length;
switch (G__23170) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23168.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19396__auto___23242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___23242,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___23242,out){
return (function (state_23208){
var state_val_23209 = (state_23208[(1)]);
if((state_val_23209 === (7))){
var inst_23204 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23210_23243 = state_23208__$1;
(statearr_23210_23243[(2)] = inst_23204);

(statearr_23210_23243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (1))){
var inst_23171 = (new Array(n));
var inst_23172 = inst_23171;
var inst_23173 = (0);
var state_23208__$1 = (function (){var statearr_23211 = state_23208;
(statearr_23211[(7)] = inst_23172);

(statearr_23211[(8)] = inst_23173);

return statearr_23211;
})();
var statearr_23212_23244 = state_23208__$1;
(statearr_23212_23244[(2)] = null);

(statearr_23212_23244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (4))){
var inst_23176 = (state_23208[(9)]);
var inst_23176__$1 = (state_23208[(2)]);
var inst_23177 = (inst_23176__$1 == null);
var inst_23178 = cljs.core.not.call(null,inst_23177);
var state_23208__$1 = (function (){var statearr_23213 = state_23208;
(statearr_23213[(9)] = inst_23176__$1);

return statearr_23213;
})();
if(inst_23178){
var statearr_23214_23245 = state_23208__$1;
(statearr_23214_23245[(1)] = (5));

} else {
var statearr_23215_23246 = state_23208__$1;
(statearr_23215_23246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (15))){
var inst_23198 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23216_23247 = state_23208__$1;
(statearr_23216_23247[(2)] = inst_23198);

(statearr_23216_23247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (13))){
var state_23208__$1 = state_23208;
var statearr_23217_23248 = state_23208__$1;
(statearr_23217_23248[(2)] = null);

(statearr_23217_23248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (6))){
var inst_23173 = (state_23208[(8)]);
var inst_23194 = (inst_23173 > (0));
var state_23208__$1 = state_23208;
if(cljs.core.truth_(inst_23194)){
var statearr_23218_23249 = state_23208__$1;
(statearr_23218_23249[(1)] = (12));

} else {
var statearr_23219_23250 = state_23208__$1;
(statearr_23219_23250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (3))){
var inst_23206 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23208__$1,inst_23206);
} else {
if((state_val_23209 === (12))){
var inst_23172 = (state_23208[(7)]);
var inst_23196 = cljs.core.vec.call(null,inst_23172);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23208__$1,(15),out,inst_23196);
} else {
if((state_val_23209 === (2))){
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23208__$1,(4),ch);
} else {
if((state_val_23209 === (11))){
var inst_23188 = (state_23208[(2)]);
var inst_23189 = (new Array(n));
var inst_23172 = inst_23189;
var inst_23173 = (0);
var state_23208__$1 = (function (){var statearr_23220 = state_23208;
(statearr_23220[(7)] = inst_23172);

(statearr_23220[(8)] = inst_23173);

(statearr_23220[(10)] = inst_23188);

return statearr_23220;
})();
var statearr_23221_23251 = state_23208__$1;
(statearr_23221_23251[(2)] = null);

(statearr_23221_23251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (9))){
var inst_23172 = (state_23208[(7)]);
var inst_23186 = cljs.core.vec.call(null,inst_23172);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23208__$1,(11),out,inst_23186);
} else {
if((state_val_23209 === (5))){
var inst_23181 = (state_23208[(11)]);
var inst_23176 = (state_23208[(9)]);
var inst_23172 = (state_23208[(7)]);
var inst_23173 = (state_23208[(8)]);
var inst_23180 = (inst_23172[inst_23173] = inst_23176);
var inst_23181__$1 = (inst_23173 + (1));
var inst_23182 = (inst_23181__$1 < n);
var state_23208__$1 = (function (){var statearr_23222 = state_23208;
(statearr_23222[(11)] = inst_23181__$1);

(statearr_23222[(12)] = inst_23180);

return statearr_23222;
})();
if(cljs.core.truth_(inst_23182)){
var statearr_23223_23252 = state_23208__$1;
(statearr_23223_23252[(1)] = (8));

} else {
var statearr_23224_23254 = state_23208__$1;
(statearr_23224_23254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (14))){
var inst_23201 = (state_23208[(2)]);
var inst_23202 = cljs.core.async.close_BANG_.call(null,out);
var state_23208__$1 = (function (){var statearr_23226 = state_23208;
(statearr_23226[(13)] = inst_23201);

return statearr_23226;
})();
var statearr_23227_23261 = state_23208__$1;
(statearr_23227_23261[(2)] = inst_23202);

(statearr_23227_23261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (10))){
var inst_23192 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23228_23262 = state_23208__$1;
(statearr_23228_23262[(2)] = inst_23192);

(statearr_23228_23262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (8))){
var inst_23181 = (state_23208[(11)]);
var inst_23172 = (state_23208[(7)]);
var tmp23225 = inst_23172;
var inst_23172__$1 = tmp23225;
var inst_23173 = inst_23181;
var state_23208__$1 = (function (){var statearr_23229 = state_23208;
(statearr_23229[(7)] = inst_23172__$1);

(statearr_23229[(8)] = inst_23173);

return statearr_23229;
})();
var statearr_23230_23263 = state_23208__$1;
(statearr_23230_23263[(2)] = null);

(statearr_23230_23263[(1)] = (2));


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
});})(c__19396__auto___23242,out))
;
return ((function (switch__17910__auto__,c__19396__auto___23242,out){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_23234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23234[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_23234[(1)] = (1));

return statearr_23234;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_23208){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_23208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e23235){if((e23235 instanceof Object)){
var ex__17914__auto__ = e23235;
var statearr_23236_23264 = state_23208;
(statearr_23236_23264[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23265 = state_23208;
state_23208 = G__23265;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_23208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_23208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___23242,out))
})();
var state__19398__auto__ = (function (){var statearr_23237 = f__19397__auto__.call(null);
(statearr_23237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___23242);

return statearr_23237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___23242,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23273 = [];
var len__9331__auto___23355 = arguments.length;
var i__9332__auto___23356 = (0);
while(true){
if((i__9332__auto___23356 < len__9331__auto___23355)){
args23273.push((arguments[i__9332__auto___23356]));

var G__23357 = (i__9332__auto___23356 + (1));
i__9332__auto___23356 = G__23357;
continue;
} else {
}
break;
}

var G__23275 = args23273.length;
switch (G__23275) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23273.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19396__auto___23359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19396__auto___23359,out){
return (function (){
var f__19397__auto__ = (function (){var switch__17910__auto__ = ((function (c__19396__auto___23359,out){
return (function (state_23317){
var state_val_23318 = (state_23317[(1)]);
if((state_val_23318 === (7))){
var inst_23313 = (state_23317[(2)]);
var state_23317__$1 = state_23317;
var statearr_23319_23360 = state_23317__$1;
(statearr_23319_23360[(2)] = inst_23313);

(statearr_23319_23360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (1))){
var inst_23276 = [];
var inst_23277 = inst_23276;
var inst_23278 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23317__$1 = (function (){var statearr_23324 = state_23317;
(statearr_23324[(7)] = inst_23277);

(statearr_23324[(8)] = inst_23278);

return statearr_23324;
})();
var statearr_23325_23361 = state_23317__$1;
(statearr_23325_23361[(2)] = null);

(statearr_23325_23361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (4))){
var inst_23281 = (state_23317[(9)]);
var inst_23281__$1 = (state_23317[(2)]);
var inst_23282 = (inst_23281__$1 == null);
var inst_23283 = cljs.core.not.call(null,inst_23282);
var state_23317__$1 = (function (){var statearr_23326 = state_23317;
(statearr_23326[(9)] = inst_23281__$1);

return statearr_23326;
})();
if(inst_23283){
var statearr_23327_23367 = state_23317__$1;
(statearr_23327_23367[(1)] = (5));

} else {
var statearr_23331_23368 = state_23317__$1;
(statearr_23331_23368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (15))){
var inst_23307 = (state_23317[(2)]);
var state_23317__$1 = state_23317;
var statearr_23333_23373 = state_23317__$1;
(statearr_23333_23373[(2)] = inst_23307);

(statearr_23333_23373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (13))){
var state_23317__$1 = state_23317;
var statearr_23334_23380 = state_23317__$1;
(statearr_23334_23380[(2)] = null);

(statearr_23334_23380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (6))){
var inst_23277 = (state_23317[(7)]);
var inst_23302 = inst_23277.length;
var inst_23303 = (inst_23302 > (0));
var state_23317__$1 = state_23317;
if(cljs.core.truth_(inst_23303)){
var statearr_23335_23393 = state_23317__$1;
(statearr_23335_23393[(1)] = (12));

} else {
var statearr_23336_23394 = state_23317__$1;
(statearr_23336_23394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (3))){
var inst_23315 = (state_23317[(2)]);
var state_23317__$1 = state_23317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23317__$1,inst_23315);
} else {
if((state_val_23318 === (12))){
var inst_23277 = (state_23317[(7)]);
var inst_23305 = cljs.core.vec.call(null,inst_23277);
var state_23317__$1 = state_23317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23317__$1,(15),out,inst_23305);
} else {
if((state_val_23318 === (2))){
var state_23317__$1 = state_23317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23317__$1,(4),ch);
} else {
if((state_val_23318 === (11))){
var inst_23285 = (state_23317[(10)]);
var inst_23281 = (state_23317[(9)]);
var inst_23295 = (state_23317[(2)]);
var inst_23296 = [];
var inst_23297 = inst_23296.push(inst_23281);
var inst_23277 = inst_23296;
var inst_23278 = inst_23285;
var state_23317__$1 = (function (){var statearr_23337 = state_23317;
(statearr_23337[(7)] = inst_23277);

(statearr_23337[(11)] = inst_23297);

(statearr_23337[(12)] = inst_23295);

(statearr_23337[(8)] = inst_23278);

return statearr_23337;
})();
var statearr_23338_23405 = state_23317__$1;
(statearr_23338_23405[(2)] = null);

(statearr_23338_23405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (9))){
var inst_23277 = (state_23317[(7)]);
var inst_23293 = cljs.core.vec.call(null,inst_23277);
var state_23317__$1 = state_23317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23317__$1,(11),out,inst_23293);
} else {
if((state_val_23318 === (5))){
var inst_23285 = (state_23317[(10)]);
var inst_23281 = (state_23317[(9)]);
var inst_23278 = (state_23317[(8)]);
var inst_23285__$1 = f.call(null,inst_23281);
var inst_23286 = cljs.core._EQ_.call(null,inst_23285__$1,inst_23278);
var inst_23287 = cljs.core.keyword_identical_QMARK_.call(null,inst_23278,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23288 = (inst_23286) || (inst_23287);
var state_23317__$1 = (function (){var statearr_23339 = state_23317;
(statearr_23339[(10)] = inst_23285__$1);

return statearr_23339;
})();
if(cljs.core.truth_(inst_23288)){
var statearr_23340_23430 = state_23317__$1;
(statearr_23340_23430[(1)] = (8));

} else {
var statearr_23341_23431 = state_23317__$1;
(statearr_23341_23431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (14))){
var inst_23310 = (state_23317[(2)]);
var inst_23311 = cljs.core.async.close_BANG_.call(null,out);
var state_23317__$1 = (function (){var statearr_23343 = state_23317;
(statearr_23343[(13)] = inst_23310);

return statearr_23343;
})();
var statearr_23344_23432 = state_23317__$1;
(statearr_23344_23432[(2)] = inst_23311);

(statearr_23344_23432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (10))){
var inst_23300 = (state_23317[(2)]);
var state_23317__$1 = state_23317;
var statearr_23345_23433 = state_23317__$1;
(statearr_23345_23433[(2)] = inst_23300);

(statearr_23345_23433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23318 === (8))){
var inst_23285 = (state_23317[(10)]);
var inst_23277 = (state_23317[(7)]);
var inst_23281 = (state_23317[(9)]);
var inst_23290 = inst_23277.push(inst_23281);
var tmp23342 = inst_23277;
var inst_23277__$1 = tmp23342;
var inst_23278 = inst_23285;
var state_23317__$1 = (function (){var statearr_23346 = state_23317;
(statearr_23346[(7)] = inst_23277__$1);

(statearr_23346[(14)] = inst_23290);

(statearr_23346[(8)] = inst_23278);

return statearr_23346;
})();
var statearr_23347_23434 = state_23317__$1;
(statearr_23347_23434[(2)] = null);

(statearr_23347_23434[(1)] = (2));


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
});})(c__19396__auto___23359,out))
;
return ((function (switch__17910__auto__,c__19396__auto___23359,out){
return (function() {
var cljs$core$async$state_machine__17911__auto__ = null;
var cljs$core$async$state_machine__17911__auto____0 = (function (){
var statearr_23351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23351[(0)] = cljs$core$async$state_machine__17911__auto__);

(statearr_23351[(1)] = (1));

return statearr_23351;
});
var cljs$core$async$state_machine__17911__auto____1 = (function (state_23317){
while(true){
var ret_value__17912__auto__ = (function (){try{while(true){
var result__17913__auto__ = switch__17910__auto__.call(null,state_23317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17913__auto__;
}
break;
}
}catch (e23352){if((e23352 instanceof Object)){
var ex__17914__auto__ = e23352;
var statearr_23353_23435 = state_23317;
(statearr_23353_23435[(5)] = ex__17914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23437 = state_23317;
state_23317 = G__23437;
continue;
} else {
return ret_value__17912__auto__;
}
break;
}
});
cljs$core$async$state_machine__17911__auto__ = function(state_23317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17911__auto____1.call(this,state_23317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17911__auto____0;
cljs$core$async$state_machine__17911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17911__auto____1;
return cljs$core$async$state_machine__17911__auto__;
})()
;})(switch__17910__auto__,c__19396__auto___23359,out))
})();
var state__19398__auto__ = (function (){var statearr_23354 = f__19397__auto__.call(null);
(statearr_23354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19396__auto___23359);

return statearr_23354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19398__auto__);
});})(c__19396__auto___23359,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map