// Compiled by ClojureScript 0.0-2342
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13992 = (function (f,fn_handler,meta13993){
this.f = f;
this.fn_handler = fn_handler;
this.meta13993 = meta13993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13992.cljs$lang$type = true;
cljs.core.async.t13992.cljs$lang$ctorStr = "cljs.core.async/t13992";
cljs.core.async.t13992.cljs$lang$ctorPrWriter = (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t13992");
});
cljs.core.async.t13992.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13994){var self__ = this;
var _13994__$1 = this;return self__.meta13993;
});
cljs.core.async.t13992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13994,meta13993__$1){var self__ = this;
var _13994__$1 = this;return (new cljs.core.async.t13992(self__.f,self__.fn_handler,meta13993__$1));
});
cljs.core.async.__GT_t13992 = (function __GT_t13992(f__$1,fn_handler__$1,meta13993){return (new cljs.core.async.t13992(f__$1,fn_handler__$1,meta13993));
});
}
return (new cljs.core.async.t13992(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13996 = buff;if(G__13996)
{var bit__9221__auto__ = null;if(cljs.core.truth_((function (){var or__8558__auto__ = bit__9221__auto__;if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{return G__13996.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13996.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13996);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13996);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13997 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13997);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13997,ret){
return (function (){return fn1.call(null,val_13997);
});})(val_13997,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9427__auto___13998 = n;var x_13999 = (0);while(true){
if((x_13999 < n__9427__auto___13998))
{(a[x_13999] = (0));
{
var G__14000 = (x_13999 + (1));
x_13999 = G__14000;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14001 = (i + (1));
i = G__14001;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14005 = (function (flag,alt_flag,meta14006){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14006 = meta14006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14005.cljs$lang$type = true;
cljs.core.async.t14005.cljs$lang$ctorStr = "cljs.core.async/t14005";
cljs.core.async.t14005.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t14005");
});})(flag))
;
cljs.core.async.t14005.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14007){var self__ = this;
var _14007__$1 = this;return self__.meta14006;
});})(flag))
;
cljs.core.async.t14005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14007,meta14006__$1){var self__ = this;
var _14007__$1 = this;return (new cljs.core.async.t14005(self__.flag,self__.alt_flag,meta14006__$1));
});})(flag))
;
cljs.core.async.__GT_t14005 = ((function (flag){
return (function __GT_t14005(flag__$1,alt_flag__$1,meta14006){return (new cljs.core.async.t14005(flag__$1,alt_flag__$1,meta14006));
});})(flag))
;
}
return (new cljs.core.async.t14005(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14011 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14011 = (function (cb,flag,alt_handler,meta14012){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14012 = meta14012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14011.cljs$lang$type = true;
cljs.core.async.t14011.cljs$lang$ctorStr = "cljs.core.async/t14011";
cljs.core.async.t14011.cljs$lang$ctorPrWriter = (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t14011");
});
cljs.core.async.t14011.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14013){var self__ = this;
var _14013__$1 = this;return self__.meta14012;
});
cljs.core.async.t14011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14013,meta14012__$1){var self__ = this;
var _14013__$1 = this;return (new cljs.core.async.t14011(self__.cb,self__.flag,self__.alt_handler,meta14012__$1));
});
cljs.core.async.__GT_t14011 = (function __GT_t14011(cb__$1,flag__$1,alt_handler__$1,meta14012){return (new cljs.core.async.t14011(cb__$1,flag__$1,alt_handler__$1,meta14012));
});
}
return (new cljs.core.async.t14011(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14014_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14014_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14015_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14015_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8558__auto__ = wport;if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14016 = (i + (1));
i = G__14016;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8558__auto__ = ret;if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__8546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14017){var map__14019 = p__14017;var map__14019__$1 = ((cljs.core.seq_QMARK_.call(null,map__14019))?cljs.core.apply.call(null,cljs.core.hash_map,map__14019):map__14019);var opts = map__14019__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__14017 = null;if (arguments.length > 1) {
  p__14017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14017);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14020){
var ports = cljs.core.first(arglist__14020);
var p__14017 = cljs.core.rest(arglist__14020);
return alts_BANG___delegate(ports,p__14017);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14028 = (function (ch,f,map_LT_,meta14029){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14029 = meta14029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14028.cljs$lang$type = true;
cljs.core.async.t14028.cljs$lang$ctorStr = "cljs.core.async/t14028";
cljs.core.async.t14028.cljs$lang$ctorPrWriter = (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t14028");
});
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14031 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14031 = (function (fn1,_,meta14029,ch,f,map_LT_,meta14032){
this.fn1 = fn1;
this._ = _;
this.meta14029 = meta14029;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14032 = meta14032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14031.cljs$lang$type = true;
cljs.core.async.t14031.cljs$lang$ctorStr = "cljs.core.async/t14031";
cljs.core.async.t14031.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t14031");
});})(___$1))
;
cljs.core.async.t14031.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14031.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14021_SHARP_){return f1.call(null,(((p1__14021_SHARP_ == null))?null:self__.f.call(null,p1__14021_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14033){var self__ = this;
var _14033__$1 = this;return self__.meta14032;
});})(___$1))
;
cljs.core.async.t14031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14033,meta14032__$1){var self__ = this;
var _14033__$1 = this;return (new cljs.core.async.t14031(self__.fn1,self__._,self__.meta14029,self__.ch,self__.f,self__.map_LT_,meta14032__$1));
});})(___$1))
;
cljs.core.async.__GT_t14031 = ((function (___$1){
return (function __GT_t14031(fn1__$1,___$2,meta14029__$1,ch__$2,f__$2,map_LT___$2,meta14032){return (new cljs.core.async.t14031(fn1__$1,___$2,meta14029__$1,ch__$2,f__$2,map_LT___$2,meta14032));
});})(___$1))
;
}
return (new cljs.core.async.t14031(fn1,___$1,self__.meta14029,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8546__auto__ = ret;if(cljs.core.truth_(and__8546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14030){var self__ = this;
var _14030__$1 = this;return self__.meta14029;
});
cljs.core.async.t14028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14030,meta14029__$1){var self__ = this;
var _14030__$1 = this;return (new cljs.core.async.t14028(self__.ch,self__.f,self__.map_LT_,meta14029__$1));
});
cljs.core.async.__GT_t14028 = (function __GT_t14028(ch__$1,f__$1,map_LT___$1,meta14029){return (new cljs.core.async.t14028(ch__$1,f__$1,map_LT___$1,meta14029));
});
}
return (new cljs.core.async.t14028(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14037 = (function (ch,f,map_GT_,meta14038){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14038 = meta14038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14037.cljs$lang$type = true;
cljs.core.async.t14037.cljs$lang$ctorStr = "cljs.core.async/t14037";
cljs.core.async.t14037.cljs$lang$ctorPrWriter = (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t14037");
});
cljs.core.async.t14037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14037.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14039){var self__ = this;
var _14039__$1 = this;return self__.meta14038;
});
cljs.core.async.t14037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14039,meta14038__$1){var self__ = this;
var _14039__$1 = this;return (new cljs.core.async.t14037(self__.ch,self__.f,self__.map_GT_,meta14038__$1));
});
cljs.core.async.__GT_t14037 = (function __GT_t14037(ch__$1,f__$1,map_GT___$1,meta14038){return (new cljs.core.async.t14037(ch__$1,f__$1,map_GT___$1,meta14038));
});
}
return (new cljs.core.async.t14037(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14043 = (function (ch,p,filter_GT_,meta14044){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14044 = meta14044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14043.cljs$lang$type = true;
cljs.core.async.t14043.cljs$lang$ctorStr = "cljs.core.async/t14043";
cljs.core.async.t14043.cljs$lang$ctorPrWriter = (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t14043");
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14043.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14045){var self__ = this;
var _14045__$1 = this;return self__.meta14044;
});
cljs.core.async.t14043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14045,meta14044__$1){var self__ = this;
var _14045__$1 = this;return (new cljs.core.async.t14043(self__.ch,self__.p,self__.filter_GT_,meta14044__$1));
});
cljs.core.async.__GT_t14043 = (function __GT_t14043(ch__$1,p__$1,filter_GT___$1,meta14044){return (new cljs.core.async.t14043(ch__$1,p__$1,filter_GT___$1,meta14044));
});
}
return (new cljs.core.async.t14043(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10989__auto___14128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___14128,out){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___14128,out){
return (function (state_14107){var state_val_14108 = (state_14107[(1)]);if((state_val_14108 === (7)))
{var inst_14103 = (state_14107[(2)]);var state_14107__$1 = state_14107;var statearr_14109_14129 = state_14107__$1;(statearr_14109_14129[(2)] = inst_14103);
(statearr_14109_14129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (1)))
{var state_14107__$1 = state_14107;var statearr_14110_14130 = state_14107__$1;(statearr_14110_14130[(2)] = null);
(statearr_14110_14130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (4)))
{var inst_14089 = (state_14107[(7)]);var inst_14089__$1 = (state_14107[(2)]);var inst_14090 = (inst_14089__$1 == null);var state_14107__$1 = (function (){var statearr_14111 = state_14107;(statearr_14111[(7)] = inst_14089__$1);
return statearr_14111;
})();if(cljs.core.truth_(inst_14090))
{var statearr_14112_14131 = state_14107__$1;(statearr_14112_14131[(1)] = (5));
} else
{var statearr_14113_14132 = state_14107__$1;(statearr_14113_14132[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (6)))
{var inst_14089 = (state_14107[(7)]);var inst_14094 = p.call(null,inst_14089);var state_14107__$1 = state_14107;if(cljs.core.truth_(inst_14094))
{var statearr_14114_14133 = state_14107__$1;(statearr_14114_14133[(1)] = (8));
} else
{var statearr_14115_14134 = state_14107__$1;(statearr_14115_14134[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (3)))
{var inst_14105 = (state_14107[(2)]);var state_14107__$1 = state_14107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14107__$1,inst_14105);
} else
{if((state_val_14108 === (2)))
{var state_14107__$1 = state_14107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14107__$1,(4),ch);
} else
{if((state_val_14108 === (11)))
{var inst_14097 = (state_14107[(2)]);var state_14107__$1 = state_14107;var statearr_14116_14135 = state_14107__$1;(statearr_14116_14135[(2)] = inst_14097);
(statearr_14116_14135[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (9)))
{var state_14107__$1 = state_14107;var statearr_14117_14136 = state_14107__$1;(statearr_14117_14136[(2)] = null);
(statearr_14117_14136[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (5)))
{var inst_14092 = cljs.core.async.close_BANG_.call(null,out);var state_14107__$1 = state_14107;var statearr_14118_14137 = state_14107__$1;(statearr_14118_14137[(2)] = inst_14092);
(statearr_14118_14137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (10)))
{var inst_14100 = (state_14107[(2)]);var state_14107__$1 = (function (){var statearr_14119 = state_14107;(statearr_14119[(8)] = inst_14100);
return statearr_14119;
})();var statearr_14120_14138 = state_14107__$1;(statearr_14120_14138[(2)] = null);
(statearr_14120_14138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14108 === (8)))
{var inst_14089 = (state_14107[(7)]);var state_14107__$1 = state_14107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14107__$1,(11),out,inst_14089);
} else
{return null;
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
});})(c__10989__auto___14128,out))
;return ((function (switch__10924__auto__,c__10989__auto___14128,out){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_14124 = [null,null,null,null,null,null,null,null,null];(statearr_14124[(0)] = state_machine__10925__auto__);
(statearr_14124[(1)] = (1));
return statearr_14124;
});
var state_machine__10925__auto____1 = (function (state_14107){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_14107);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e14125){if((e14125 instanceof Object))
{var ex__10928__auto__ = e14125;var statearr_14126_14139 = state_14107;(statearr_14126_14139[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14140 = state_14107;
state_14107 = G__14140;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_14107){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_14107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___14128,out))
})();var state__10991__auto__ = (function (){var statearr_14127 = f__10990__auto__.call(null);(statearr_14127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___14128);
return statearr_14127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___14128,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto__){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto__){
return (function (state_14306){var state_val_14307 = (state_14306[(1)]);if((state_val_14307 === (7)))
{var inst_14302 = (state_14306[(2)]);var state_14306__$1 = state_14306;var statearr_14308_14349 = state_14306__$1;(statearr_14308_14349[(2)] = inst_14302);
(statearr_14308_14349[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (20)))
{var inst_14272 = (state_14306[(7)]);var inst_14283 = (state_14306[(2)]);var inst_14284 = cljs.core.next.call(null,inst_14272);var inst_14258 = inst_14284;var inst_14259 = null;var inst_14260 = (0);var inst_14261 = (0);var state_14306__$1 = (function (){var statearr_14309 = state_14306;(statearr_14309[(8)] = inst_14260);
(statearr_14309[(9)] = inst_14258);
(statearr_14309[(10)] = inst_14283);
(statearr_14309[(11)] = inst_14259);
(statearr_14309[(12)] = inst_14261);
return statearr_14309;
})();var statearr_14310_14350 = state_14306__$1;(statearr_14310_14350[(2)] = null);
(statearr_14310_14350[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (1)))
{var state_14306__$1 = state_14306;var statearr_14311_14351 = state_14306__$1;(statearr_14311_14351[(2)] = null);
(statearr_14311_14351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (4)))
{var inst_14247 = (state_14306[(13)]);var inst_14247__$1 = (state_14306[(2)]);var inst_14248 = (inst_14247__$1 == null);var state_14306__$1 = (function (){var statearr_14312 = state_14306;(statearr_14312[(13)] = inst_14247__$1);
return statearr_14312;
})();if(cljs.core.truth_(inst_14248))
{var statearr_14313_14352 = state_14306__$1;(statearr_14313_14352[(1)] = (5));
} else
{var statearr_14314_14353 = state_14306__$1;(statearr_14314_14353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (15)))
{var state_14306__$1 = state_14306;var statearr_14318_14354 = state_14306__$1;(statearr_14318_14354[(2)] = null);
(statearr_14318_14354[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (21)))
{var state_14306__$1 = state_14306;var statearr_14319_14355 = state_14306__$1;(statearr_14319_14355[(2)] = null);
(statearr_14319_14355[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (13)))
{var inst_14260 = (state_14306[(8)]);var inst_14258 = (state_14306[(9)]);var inst_14259 = (state_14306[(11)]);var inst_14261 = (state_14306[(12)]);var inst_14268 = (state_14306[(2)]);var inst_14269 = (inst_14261 + (1));var tmp14315 = inst_14260;var tmp14316 = inst_14258;var tmp14317 = inst_14259;var inst_14258__$1 = tmp14316;var inst_14259__$1 = tmp14317;var inst_14260__$1 = tmp14315;var inst_14261__$1 = inst_14269;var state_14306__$1 = (function (){var statearr_14320 = state_14306;(statearr_14320[(14)] = inst_14268);
(statearr_14320[(8)] = inst_14260__$1);
(statearr_14320[(9)] = inst_14258__$1);
(statearr_14320[(11)] = inst_14259__$1);
(statearr_14320[(12)] = inst_14261__$1);
return statearr_14320;
})();var statearr_14321_14356 = state_14306__$1;(statearr_14321_14356[(2)] = null);
(statearr_14321_14356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (22)))
{var state_14306__$1 = state_14306;var statearr_14322_14357 = state_14306__$1;(statearr_14322_14357[(2)] = null);
(statearr_14322_14357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (6)))
{var inst_14247 = (state_14306[(13)]);var inst_14256 = f.call(null,inst_14247);var inst_14257 = cljs.core.seq.call(null,inst_14256);var inst_14258 = inst_14257;var inst_14259 = null;var inst_14260 = (0);var inst_14261 = (0);var state_14306__$1 = (function (){var statearr_14323 = state_14306;(statearr_14323[(8)] = inst_14260);
(statearr_14323[(9)] = inst_14258);
(statearr_14323[(11)] = inst_14259);
(statearr_14323[(12)] = inst_14261);
return statearr_14323;
})();var statearr_14324_14358 = state_14306__$1;(statearr_14324_14358[(2)] = null);
(statearr_14324_14358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (17)))
{var inst_14272 = (state_14306[(7)]);var inst_14276 = cljs.core.chunk_first.call(null,inst_14272);var inst_14277 = cljs.core.chunk_rest.call(null,inst_14272);var inst_14278 = cljs.core.count.call(null,inst_14276);var inst_14258 = inst_14277;var inst_14259 = inst_14276;var inst_14260 = inst_14278;var inst_14261 = (0);var state_14306__$1 = (function (){var statearr_14325 = state_14306;(statearr_14325[(8)] = inst_14260);
(statearr_14325[(9)] = inst_14258);
(statearr_14325[(11)] = inst_14259);
(statearr_14325[(12)] = inst_14261);
return statearr_14325;
})();var statearr_14326_14359 = state_14306__$1;(statearr_14326_14359[(2)] = null);
(statearr_14326_14359[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (3)))
{var inst_14304 = (state_14306[(2)]);var state_14306__$1 = state_14306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14306__$1,inst_14304);
} else
{if((state_val_14307 === (12)))
{var inst_14292 = (state_14306[(2)]);var state_14306__$1 = state_14306;var statearr_14327_14360 = state_14306__$1;(statearr_14327_14360[(2)] = inst_14292);
(statearr_14327_14360[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (2)))
{var state_14306__$1 = state_14306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14306__$1,(4),in$);
} else
{if((state_val_14307 === (23)))
{var inst_14300 = (state_14306[(2)]);var state_14306__$1 = state_14306;var statearr_14328_14361 = state_14306__$1;(statearr_14328_14361[(2)] = inst_14300);
(statearr_14328_14361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (19)))
{var inst_14287 = (state_14306[(2)]);var state_14306__$1 = state_14306;var statearr_14329_14362 = state_14306__$1;(statearr_14329_14362[(2)] = inst_14287);
(statearr_14329_14362[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (11)))
{var inst_14272 = (state_14306[(7)]);var inst_14258 = (state_14306[(9)]);var inst_14272__$1 = cljs.core.seq.call(null,inst_14258);var state_14306__$1 = (function (){var statearr_14330 = state_14306;(statearr_14330[(7)] = inst_14272__$1);
return statearr_14330;
})();if(inst_14272__$1)
{var statearr_14331_14363 = state_14306__$1;(statearr_14331_14363[(1)] = (14));
} else
{var statearr_14332_14364 = state_14306__$1;(statearr_14332_14364[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (9)))
{var inst_14294 = (state_14306[(2)]);var inst_14295 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14306__$1 = (function (){var statearr_14333 = state_14306;(statearr_14333[(15)] = inst_14294);
return statearr_14333;
})();if(cljs.core.truth_(inst_14295))
{var statearr_14334_14365 = state_14306__$1;(statearr_14334_14365[(1)] = (21));
} else
{var statearr_14335_14366 = state_14306__$1;(statearr_14335_14366[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (5)))
{var inst_14250 = cljs.core.async.close_BANG_.call(null,out);var state_14306__$1 = state_14306;var statearr_14336_14367 = state_14306__$1;(statearr_14336_14367[(2)] = inst_14250);
(statearr_14336_14367[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (14)))
{var inst_14272 = (state_14306[(7)]);var inst_14274 = cljs.core.chunked_seq_QMARK_.call(null,inst_14272);var state_14306__$1 = state_14306;if(inst_14274)
{var statearr_14337_14368 = state_14306__$1;(statearr_14337_14368[(1)] = (17));
} else
{var statearr_14338_14369 = state_14306__$1;(statearr_14338_14369[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (16)))
{var inst_14290 = (state_14306[(2)]);var state_14306__$1 = state_14306;var statearr_14339_14370 = state_14306__$1;(statearr_14339_14370[(2)] = inst_14290);
(statearr_14339_14370[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14307 === (10)))
{var inst_14259 = (state_14306[(11)]);var inst_14261 = (state_14306[(12)]);var inst_14266 = cljs.core._nth.call(null,inst_14259,inst_14261);var state_14306__$1 = state_14306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14306__$1,(13),out,inst_14266);
} else
{if((state_val_14307 === (18)))
{var inst_14272 = (state_14306[(7)]);var inst_14281 = cljs.core.first.call(null,inst_14272);var state_14306__$1 = state_14306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14306__$1,(20),out,inst_14281);
} else
{if((state_val_14307 === (8)))
{var inst_14260 = (state_14306[(8)]);var inst_14261 = (state_14306[(12)]);var inst_14263 = (inst_14261 < inst_14260);var inst_14264 = inst_14263;var state_14306__$1 = state_14306;if(cljs.core.truth_(inst_14264))
{var statearr_14340_14371 = state_14306__$1;(statearr_14340_14371[(1)] = (10));
} else
{var statearr_14341_14372 = state_14306__$1;(statearr_14341_14372[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto__))
;return ((function (switch__10924__auto__,c__10989__auto__){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_14345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14345[(0)] = state_machine__10925__auto__);
(statearr_14345[(1)] = (1));
return statearr_14345;
});
var state_machine__10925__auto____1 = (function (state_14306){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_14306);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e14346){if((e14346 instanceof Object))
{var ex__10928__auto__ = e14346;var statearr_14347_14373 = state_14306;(statearr_14347_14373[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14346;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14374 = state_14306;
state_14306 = G__14374;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_14306){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_14306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto__))
})();var state__10991__auto__ = (function (){var statearr_14348 = f__10990__auto__.call(null);(statearr_14348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto__);
return statearr_14348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto__))
);
return c__10989__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10989__auto___14469 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___14469){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___14469){
return (function (state_14445){var state_val_14446 = (state_14445[(1)]);if((state_val_14446 === (7)))
{var inst_14441 = (state_14445[(2)]);var state_14445__$1 = state_14445;var statearr_14447_14470 = state_14445__$1;(statearr_14447_14470[(2)] = inst_14441);
(statearr_14447_14470[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (1)))
{var state_14445__$1 = state_14445;var statearr_14448_14471 = state_14445__$1;(statearr_14448_14471[(2)] = null);
(statearr_14448_14471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (4)))
{var inst_14424 = (state_14445[(7)]);var inst_14424__$1 = (state_14445[(2)]);var inst_14425 = (inst_14424__$1 == null);var state_14445__$1 = (function (){var statearr_14449 = state_14445;(statearr_14449[(7)] = inst_14424__$1);
return statearr_14449;
})();if(cljs.core.truth_(inst_14425))
{var statearr_14450_14472 = state_14445__$1;(statearr_14450_14472[(1)] = (5));
} else
{var statearr_14451_14473 = state_14445__$1;(statearr_14451_14473[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (13)))
{var state_14445__$1 = state_14445;var statearr_14452_14474 = state_14445__$1;(statearr_14452_14474[(2)] = null);
(statearr_14452_14474[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (6)))
{var inst_14424 = (state_14445[(7)]);var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14445__$1,(11),to,inst_14424);
} else
{if((state_val_14446 === (3)))
{var inst_14443 = (state_14445[(2)]);var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14445__$1,inst_14443);
} else
{if((state_val_14446 === (12)))
{var state_14445__$1 = state_14445;var statearr_14453_14475 = state_14445__$1;(statearr_14453_14475[(2)] = null);
(statearr_14453_14475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (2)))
{var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14445__$1,(4),from);
} else
{if((state_val_14446 === (11)))
{var inst_14434 = (state_14445[(2)]);var state_14445__$1 = state_14445;if(cljs.core.truth_(inst_14434))
{var statearr_14454_14476 = state_14445__$1;(statearr_14454_14476[(1)] = (12));
} else
{var statearr_14455_14477 = state_14445__$1;(statearr_14455_14477[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (9)))
{var state_14445__$1 = state_14445;var statearr_14456_14478 = state_14445__$1;(statearr_14456_14478[(2)] = null);
(statearr_14456_14478[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (5)))
{var state_14445__$1 = state_14445;if(cljs.core.truth_(close_QMARK_))
{var statearr_14457_14479 = state_14445__$1;(statearr_14457_14479[(1)] = (8));
} else
{var statearr_14458_14480 = state_14445__$1;(statearr_14458_14480[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (14)))
{var inst_14439 = (state_14445[(2)]);var state_14445__$1 = state_14445;var statearr_14459_14481 = state_14445__$1;(statearr_14459_14481[(2)] = inst_14439);
(statearr_14459_14481[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (10)))
{var inst_14431 = (state_14445[(2)]);var state_14445__$1 = state_14445;var statearr_14460_14482 = state_14445__$1;(statearr_14460_14482[(2)] = inst_14431);
(statearr_14460_14482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (8)))
{var inst_14428 = cljs.core.async.close_BANG_.call(null,to);var state_14445__$1 = state_14445;var statearr_14461_14483 = state_14445__$1;(statearr_14461_14483[(2)] = inst_14428);
(statearr_14461_14483[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___14469))
;return ((function (switch__10924__auto__,c__10989__auto___14469){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_14465 = [null,null,null,null,null,null,null,null];(statearr_14465[(0)] = state_machine__10925__auto__);
(statearr_14465[(1)] = (1));
return statearr_14465;
});
var state_machine__10925__auto____1 = (function (state_14445){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_14445);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e14466){if((e14466 instanceof Object))
{var ex__10928__auto__ = e14466;var statearr_14467_14484 = state_14445;(statearr_14467_14484[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14466;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14485 = state_14445;
state_14445 = G__14485;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_14445){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_14445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___14469))
})();var state__10991__auto__ = (function (){var statearr_14468 = f__10990__auto__.call(null);(statearr_14468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___14469);
return statearr_14468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___14469))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10989__auto___14586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___14586,tc,fc){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___14586,tc,fc){
return (function (state_14561){var state_val_14562 = (state_14561[(1)]);if((state_val_14562 === (7)))
{var inst_14557 = (state_14561[(2)]);var state_14561__$1 = state_14561;var statearr_14563_14587 = state_14561__$1;(statearr_14563_14587[(2)] = inst_14557);
(statearr_14563_14587[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (1)))
{var state_14561__$1 = state_14561;var statearr_14564_14588 = state_14561__$1;(statearr_14564_14588[(2)] = null);
(statearr_14564_14588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (4)))
{var inst_14538 = (state_14561[(7)]);var inst_14538__$1 = (state_14561[(2)]);var inst_14539 = (inst_14538__$1 == null);var state_14561__$1 = (function (){var statearr_14565 = state_14561;(statearr_14565[(7)] = inst_14538__$1);
return statearr_14565;
})();if(cljs.core.truth_(inst_14539))
{var statearr_14566_14589 = state_14561__$1;(statearr_14566_14589[(1)] = (5));
} else
{var statearr_14567_14590 = state_14561__$1;(statearr_14567_14590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (13)))
{var state_14561__$1 = state_14561;var statearr_14568_14591 = state_14561__$1;(statearr_14568_14591[(2)] = null);
(statearr_14568_14591[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (6)))
{var inst_14538 = (state_14561[(7)]);var inst_14544 = p.call(null,inst_14538);var state_14561__$1 = state_14561;if(cljs.core.truth_(inst_14544))
{var statearr_14569_14592 = state_14561__$1;(statearr_14569_14592[(1)] = (9));
} else
{var statearr_14570_14593 = state_14561__$1;(statearr_14570_14593[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (3)))
{var inst_14559 = (state_14561[(2)]);var state_14561__$1 = state_14561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14561__$1,inst_14559);
} else
{if((state_val_14562 === (12)))
{var state_14561__$1 = state_14561;var statearr_14571_14594 = state_14561__$1;(statearr_14571_14594[(2)] = null);
(statearr_14571_14594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (2)))
{var state_14561__$1 = state_14561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14561__$1,(4),ch);
} else
{if((state_val_14562 === (11)))
{var inst_14538 = (state_14561[(7)]);var inst_14548 = (state_14561[(2)]);var state_14561__$1 = state_14561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14561__$1,(8),inst_14548,inst_14538);
} else
{if((state_val_14562 === (9)))
{var state_14561__$1 = state_14561;var statearr_14572_14595 = state_14561__$1;(statearr_14572_14595[(2)] = tc);
(statearr_14572_14595[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (5)))
{var inst_14541 = cljs.core.async.close_BANG_.call(null,tc);var inst_14542 = cljs.core.async.close_BANG_.call(null,fc);var state_14561__$1 = (function (){var statearr_14573 = state_14561;(statearr_14573[(8)] = inst_14541);
return statearr_14573;
})();var statearr_14574_14596 = state_14561__$1;(statearr_14574_14596[(2)] = inst_14542);
(statearr_14574_14596[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (14)))
{var inst_14555 = (state_14561[(2)]);var state_14561__$1 = state_14561;var statearr_14575_14597 = state_14561__$1;(statearr_14575_14597[(2)] = inst_14555);
(statearr_14575_14597[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (10)))
{var state_14561__$1 = state_14561;var statearr_14576_14598 = state_14561__$1;(statearr_14576_14598[(2)] = fc);
(statearr_14576_14598[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14562 === (8)))
{var inst_14550 = (state_14561[(2)]);var state_14561__$1 = state_14561;if(cljs.core.truth_(inst_14550))
{var statearr_14577_14599 = state_14561__$1;(statearr_14577_14599[(1)] = (12));
} else
{var statearr_14578_14600 = state_14561__$1;(statearr_14578_14600[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___14586,tc,fc))
;return ((function (switch__10924__auto__,c__10989__auto___14586,tc,fc){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_14582 = [null,null,null,null,null,null,null,null,null];(statearr_14582[(0)] = state_machine__10925__auto__);
(statearr_14582[(1)] = (1));
return statearr_14582;
});
var state_machine__10925__auto____1 = (function (state_14561){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_14561);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object))
{var ex__10928__auto__ = e14583;var statearr_14584_14601 = state_14561;(statearr_14584_14601[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14602 = state_14561;
state_14561 = G__14602;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_14561){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_14561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___14586,tc,fc))
})();var state__10991__auto__ = (function (){var statearr_14585 = f__10990__auto__.call(null);(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___14586);
return statearr_14585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___14586,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto__){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto__){
return (function (state_14649){var state_val_14650 = (state_14649[(1)]);if((state_val_14650 === (7)))
{var inst_14645 = (state_14649[(2)]);var state_14649__$1 = state_14649;var statearr_14651_14667 = state_14649__$1;(statearr_14651_14667[(2)] = inst_14645);
(statearr_14651_14667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14650 === (6)))
{var inst_14638 = (state_14649[(7)]);var inst_14635 = (state_14649[(8)]);var inst_14642 = f.call(null,inst_14635,inst_14638);var inst_14635__$1 = inst_14642;var state_14649__$1 = (function (){var statearr_14652 = state_14649;(statearr_14652[(8)] = inst_14635__$1);
return statearr_14652;
})();var statearr_14653_14668 = state_14649__$1;(statearr_14653_14668[(2)] = null);
(statearr_14653_14668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14650 === (5)))
{var inst_14635 = (state_14649[(8)]);var state_14649__$1 = state_14649;var statearr_14654_14669 = state_14649__$1;(statearr_14654_14669[(2)] = inst_14635);
(statearr_14654_14669[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14650 === (4)))
{var inst_14638 = (state_14649[(7)]);var inst_14638__$1 = (state_14649[(2)]);var inst_14639 = (inst_14638__$1 == null);var state_14649__$1 = (function (){var statearr_14655 = state_14649;(statearr_14655[(7)] = inst_14638__$1);
return statearr_14655;
})();if(cljs.core.truth_(inst_14639))
{var statearr_14656_14670 = state_14649__$1;(statearr_14656_14670[(1)] = (5));
} else
{var statearr_14657_14671 = state_14649__$1;(statearr_14657_14671[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14650 === (3)))
{var inst_14647 = (state_14649[(2)]);var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14649__$1,inst_14647);
} else
{if((state_val_14650 === (2)))
{var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14649__$1,(4),ch);
} else
{if((state_val_14650 === (1)))
{var inst_14635 = init;var state_14649__$1 = (function (){var statearr_14658 = state_14649;(statearr_14658[(8)] = inst_14635);
return statearr_14658;
})();var statearr_14659_14672 = state_14649__$1;(statearr_14659_14672[(2)] = null);
(statearr_14659_14672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10989__auto__))
;return ((function (switch__10924__auto__,c__10989__auto__){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_14663 = [null,null,null,null,null,null,null,null,null];(statearr_14663[(0)] = state_machine__10925__auto__);
(statearr_14663[(1)] = (1));
return statearr_14663;
});
var state_machine__10925__auto____1 = (function (state_14649){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_14649);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e14664){if((e14664 instanceof Object))
{var ex__10928__auto__ = e14664;var statearr_14665_14673 = state_14649;(statearr_14665_14673[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14664;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14674 = state_14649;
state_14649 = G__14674;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_14649){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_14649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto__))
})();var state__10991__auto__ = (function (){var statearr_14666 = f__10990__auto__.call(null);(statearr_14666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto__);
return statearr_14666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto__))
);
return c__10989__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto__){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto__){
return (function (state_14748){var state_val_14749 = (state_14748[(1)]);if((state_val_14749 === (7)))
{var inst_14730 = (state_14748[(2)]);var state_14748__$1 = state_14748;var statearr_14750_14773 = state_14748__$1;(statearr_14750_14773[(2)] = inst_14730);
(statearr_14750_14773[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (1)))
{var inst_14724 = cljs.core.seq.call(null,coll);var inst_14725 = inst_14724;var state_14748__$1 = (function (){var statearr_14751 = state_14748;(statearr_14751[(7)] = inst_14725);
return statearr_14751;
})();var statearr_14752_14774 = state_14748__$1;(statearr_14752_14774[(2)] = null);
(statearr_14752_14774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (4)))
{var inst_14725 = (state_14748[(7)]);var inst_14728 = cljs.core.first.call(null,inst_14725);var state_14748__$1 = state_14748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14748__$1,(7),ch,inst_14728);
} else
{if((state_val_14749 === (13)))
{var inst_14742 = (state_14748[(2)]);var state_14748__$1 = state_14748;var statearr_14753_14775 = state_14748__$1;(statearr_14753_14775[(2)] = inst_14742);
(statearr_14753_14775[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (6)))
{var inst_14733 = (state_14748[(2)]);var state_14748__$1 = state_14748;if(cljs.core.truth_(inst_14733))
{var statearr_14754_14776 = state_14748__$1;(statearr_14754_14776[(1)] = (8));
} else
{var statearr_14755_14777 = state_14748__$1;(statearr_14755_14777[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (3)))
{var inst_14746 = (state_14748[(2)]);var state_14748__$1 = state_14748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14748__$1,inst_14746);
} else
{if((state_val_14749 === (12)))
{var state_14748__$1 = state_14748;var statearr_14756_14778 = state_14748__$1;(statearr_14756_14778[(2)] = null);
(statearr_14756_14778[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (2)))
{var inst_14725 = (state_14748[(7)]);var state_14748__$1 = state_14748;if(cljs.core.truth_(inst_14725))
{var statearr_14757_14779 = state_14748__$1;(statearr_14757_14779[(1)] = (4));
} else
{var statearr_14758_14780 = state_14748__$1;(statearr_14758_14780[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (11)))
{var inst_14739 = cljs.core.async.close_BANG_.call(null,ch);var state_14748__$1 = state_14748;var statearr_14759_14781 = state_14748__$1;(statearr_14759_14781[(2)] = inst_14739);
(statearr_14759_14781[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (9)))
{var state_14748__$1 = state_14748;if(cljs.core.truth_(close_QMARK_))
{var statearr_14760_14782 = state_14748__$1;(statearr_14760_14782[(1)] = (11));
} else
{var statearr_14761_14783 = state_14748__$1;(statearr_14761_14783[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (5)))
{var inst_14725 = (state_14748[(7)]);var state_14748__$1 = state_14748;var statearr_14762_14784 = state_14748__$1;(statearr_14762_14784[(2)] = inst_14725);
(statearr_14762_14784[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (10)))
{var inst_14744 = (state_14748[(2)]);var state_14748__$1 = state_14748;var statearr_14763_14785 = state_14748__$1;(statearr_14763_14785[(2)] = inst_14744);
(statearr_14763_14785[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14749 === (8)))
{var inst_14725 = (state_14748[(7)]);var inst_14735 = cljs.core.next.call(null,inst_14725);var inst_14725__$1 = inst_14735;var state_14748__$1 = (function (){var statearr_14764 = state_14748;(statearr_14764[(7)] = inst_14725__$1);
return statearr_14764;
})();var statearr_14765_14786 = state_14748__$1;(statearr_14765_14786[(2)] = null);
(statearr_14765_14786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto__))
;return ((function (switch__10924__auto__,c__10989__auto__){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_14769 = [null,null,null,null,null,null,null,null];(statearr_14769[(0)] = state_machine__10925__auto__);
(statearr_14769[(1)] = (1));
return statearr_14769;
});
var state_machine__10925__auto____1 = (function (state_14748){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_14748);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e14770){if((e14770 instanceof Object))
{var ex__10928__auto__ = e14770;var statearr_14771_14787 = state_14748;(statearr_14771_14787[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14770;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14788 = state_14748;
state_14748 = G__14788;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_14748){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_14748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto__))
})();var state__10991__auto__ = (function (){var statearr_14772 = f__10990__auto__.call(null);(statearr_14772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto__);
return statearr_14772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto__))
);
return c__10989__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14790 = {};return obj14790;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8546__auto__ = _;if(and__8546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9194__auto__ = (((_ == null))?null:_);return (function (){var or__8558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14792 = {};return obj14792;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15014 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15014 = (function (cs,ch,mult,meta15015){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15015 = meta15015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15014.cljs$lang$type = true;
cljs.core.async.t15014.cljs$lang$ctorStr = "cljs.core.async/t15014";
cljs.core.async.t15014.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t15014");
});})(cs))
;
cljs.core.async.t15014.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15014.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15016){var self__ = this;
var _15016__$1 = this;return self__.meta15015;
});})(cs))
;
cljs.core.async.t15014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15016,meta15015__$1){var self__ = this;
var _15016__$1 = this;return (new cljs.core.async.t15014(self__.cs,self__.ch,self__.mult,meta15015__$1));
});})(cs))
;
cljs.core.async.__GT_t15014 = ((function (cs){
return (function __GT_t15014(cs__$1,ch__$1,mult__$1,meta15015){return (new cljs.core.async.t15014(cs__$1,ch__$1,mult__$1,meta15015));
});})(cs))
;
}
return (new cljs.core.async.t15014(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10989__auto___15235 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___15235,cs,m,dchan,dctr,done){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___15235,cs,m,dchan,dctr,done){
return (function (state_15147){var state_val_15148 = (state_15147[(1)]);if((state_val_15148 === (7)))
{var inst_15143 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15149_15236 = state_15147__$1;(statearr_15149_15236[(2)] = inst_15143);
(statearr_15149_15236[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (20)))
{var inst_15048 = (state_15147[(7)]);var inst_15058 = cljs.core.first.call(null,inst_15048);var inst_15059 = cljs.core.nth.call(null,inst_15058,(0),null);var inst_15060 = cljs.core.nth.call(null,inst_15058,(1),null);var state_15147__$1 = (function (){var statearr_15150 = state_15147;(statearr_15150[(8)] = inst_15059);
return statearr_15150;
})();if(cljs.core.truth_(inst_15060))
{var statearr_15151_15237 = state_15147__$1;(statearr_15151_15237[(1)] = (22));
} else
{var statearr_15152_15238 = state_15147__$1;(statearr_15152_15238[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (27)))
{var inst_15019 = (state_15147[(9)]);var inst_15095 = (state_15147[(10)]);var inst_15088 = (state_15147[(11)]);var inst_15090 = (state_15147[(12)]);var inst_15095__$1 = cljs.core._nth.call(null,inst_15088,inst_15090);var inst_15096 = cljs.core.async.put_BANG_.call(null,inst_15095__$1,inst_15019,done);var state_15147__$1 = (function (){var statearr_15153 = state_15147;(statearr_15153[(10)] = inst_15095__$1);
return statearr_15153;
})();if(cljs.core.truth_(inst_15096))
{var statearr_15154_15239 = state_15147__$1;(statearr_15154_15239[(1)] = (30));
} else
{var statearr_15155_15240 = state_15147__$1;(statearr_15155_15240[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (1)))
{var state_15147__$1 = state_15147;var statearr_15156_15241 = state_15147__$1;(statearr_15156_15241[(2)] = null);
(statearr_15156_15241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (24)))
{var inst_15048 = (state_15147[(7)]);var inst_15065 = (state_15147[(2)]);var inst_15066 = cljs.core.next.call(null,inst_15048);var inst_15028 = inst_15066;var inst_15029 = null;var inst_15030 = (0);var inst_15031 = (0);var state_15147__$1 = (function (){var statearr_15157 = state_15147;(statearr_15157[(13)] = inst_15028);
(statearr_15157[(14)] = inst_15065);
(statearr_15157[(15)] = inst_15030);
(statearr_15157[(16)] = inst_15029);
(statearr_15157[(17)] = inst_15031);
return statearr_15157;
})();var statearr_15158_15242 = state_15147__$1;(statearr_15158_15242[(2)] = null);
(statearr_15158_15242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (39)))
{var state_15147__$1 = state_15147;var statearr_15162_15243 = state_15147__$1;(statearr_15162_15243[(2)] = null);
(statearr_15162_15243[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (4)))
{var inst_15019 = (state_15147[(9)]);var inst_15019__$1 = (state_15147[(2)]);var inst_15020 = (inst_15019__$1 == null);var state_15147__$1 = (function (){var statearr_15163 = state_15147;(statearr_15163[(9)] = inst_15019__$1);
return statearr_15163;
})();if(cljs.core.truth_(inst_15020))
{var statearr_15164_15244 = state_15147__$1;(statearr_15164_15244[(1)] = (5));
} else
{var statearr_15165_15245 = state_15147__$1;(statearr_15165_15245[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (15)))
{var inst_15028 = (state_15147[(13)]);var inst_15030 = (state_15147[(15)]);var inst_15029 = (state_15147[(16)]);var inst_15031 = (state_15147[(17)]);var inst_15044 = (state_15147[(2)]);var inst_15045 = (inst_15031 + (1));var tmp15159 = inst_15028;var tmp15160 = inst_15030;var tmp15161 = inst_15029;var inst_15028__$1 = tmp15159;var inst_15029__$1 = tmp15161;var inst_15030__$1 = tmp15160;var inst_15031__$1 = inst_15045;var state_15147__$1 = (function (){var statearr_15166 = state_15147;(statearr_15166[(13)] = inst_15028__$1);
(statearr_15166[(15)] = inst_15030__$1);
(statearr_15166[(16)] = inst_15029__$1);
(statearr_15166[(18)] = inst_15044);
(statearr_15166[(17)] = inst_15031__$1);
return statearr_15166;
})();var statearr_15167_15246 = state_15147__$1;(statearr_15167_15246[(2)] = null);
(statearr_15167_15246[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (21)))
{var inst_15069 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15171_15247 = state_15147__$1;(statearr_15171_15247[(2)] = inst_15069);
(statearr_15171_15247[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (31)))
{var inst_15095 = (state_15147[(10)]);var inst_15099 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15100 = cljs.core.async.untap_STAR_.call(null,m,inst_15095);var state_15147__$1 = (function (){var statearr_15172 = state_15147;(statearr_15172[(19)] = inst_15099);
return statearr_15172;
})();var statearr_15173_15248 = state_15147__$1;(statearr_15173_15248[(2)] = inst_15100);
(statearr_15173_15248[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (32)))
{var inst_15087 = (state_15147[(20)]);var inst_15088 = (state_15147[(11)]);var inst_15089 = (state_15147[(21)]);var inst_15090 = (state_15147[(12)]);var inst_15102 = (state_15147[(2)]);var inst_15103 = (inst_15090 + (1));var tmp15168 = inst_15087;var tmp15169 = inst_15088;var tmp15170 = inst_15089;var inst_15087__$1 = tmp15168;var inst_15088__$1 = tmp15169;var inst_15089__$1 = tmp15170;var inst_15090__$1 = inst_15103;var state_15147__$1 = (function (){var statearr_15174 = state_15147;(statearr_15174[(20)] = inst_15087__$1);
(statearr_15174[(22)] = inst_15102);
(statearr_15174[(11)] = inst_15088__$1);
(statearr_15174[(21)] = inst_15089__$1);
(statearr_15174[(12)] = inst_15090__$1);
return statearr_15174;
})();var statearr_15175_15249 = state_15147__$1;(statearr_15175_15249[(2)] = null);
(statearr_15175_15249[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (40)))
{var inst_15115 = (state_15147[(23)]);var inst_15119 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15120 = cljs.core.async.untap_STAR_.call(null,m,inst_15115);var state_15147__$1 = (function (){var statearr_15176 = state_15147;(statearr_15176[(24)] = inst_15119);
return statearr_15176;
})();var statearr_15177_15250 = state_15147__$1;(statearr_15177_15250[(2)] = inst_15120);
(statearr_15177_15250[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (33)))
{var inst_15106 = (state_15147[(25)]);var inst_15108 = cljs.core.chunked_seq_QMARK_.call(null,inst_15106);var state_15147__$1 = state_15147;if(inst_15108)
{var statearr_15178_15251 = state_15147__$1;(statearr_15178_15251[(1)] = (36));
} else
{var statearr_15179_15252 = state_15147__$1;(statearr_15179_15252[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (13)))
{var inst_15038 = (state_15147[(26)]);var inst_15041 = cljs.core.async.close_BANG_.call(null,inst_15038);var state_15147__$1 = state_15147;var statearr_15180_15253 = state_15147__$1;(statearr_15180_15253[(2)] = inst_15041);
(statearr_15180_15253[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (22)))
{var inst_15059 = (state_15147[(8)]);var inst_15062 = cljs.core.async.close_BANG_.call(null,inst_15059);var state_15147__$1 = state_15147;var statearr_15181_15254 = state_15147__$1;(statearr_15181_15254[(2)] = inst_15062);
(statearr_15181_15254[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (36)))
{var inst_15106 = (state_15147[(25)]);var inst_15110 = cljs.core.chunk_first.call(null,inst_15106);var inst_15111 = cljs.core.chunk_rest.call(null,inst_15106);var inst_15112 = cljs.core.count.call(null,inst_15110);var inst_15087 = inst_15111;var inst_15088 = inst_15110;var inst_15089 = inst_15112;var inst_15090 = (0);var state_15147__$1 = (function (){var statearr_15182 = state_15147;(statearr_15182[(20)] = inst_15087);
(statearr_15182[(11)] = inst_15088);
(statearr_15182[(21)] = inst_15089);
(statearr_15182[(12)] = inst_15090);
return statearr_15182;
})();var statearr_15183_15255 = state_15147__$1;(statearr_15183_15255[(2)] = null);
(statearr_15183_15255[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (41)))
{var inst_15106 = (state_15147[(25)]);var inst_15122 = (state_15147[(2)]);var inst_15123 = cljs.core.next.call(null,inst_15106);var inst_15087 = inst_15123;var inst_15088 = null;var inst_15089 = (0);var inst_15090 = (0);var state_15147__$1 = (function (){var statearr_15184 = state_15147;(statearr_15184[(20)] = inst_15087);
(statearr_15184[(27)] = inst_15122);
(statearr_15184[(11)] = inst_15088);
(statearr_15184[(21)] = inst_15089);
(statearr_15184[(12)] = inst_15090);
return statearr_15184;
})();var statearr_15185_15256 = state_15147__$1;(statearr_15185_15256[(2)] = null);
(statearr_15185_15256[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (43)))
{var state_15147__$1 = state_15147;var statearr_15186_15257 = state_15147__$1;(statearr_15186_15257[(2)] = null);
(statearr_15186_15257[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (29)))
{var inst_15131 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15187_15258 = state_15147__$1;(statearr_15187_15258[(2)] = inst_15131);
(statearr_15187_15258[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (44)))
{var inst_15140 = (state_15147[(2)]);var state_15147__$1 = (function (){var statearr_15188 = state_15147;(statearr_15188[(28)] = inst_15140);
return statearr_15188;
})();var statearr_15189_15259 = state_15147__$1;(statearr_15189_15259[(2)] = null);
(statearr_15189_15259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (6)))
{var inst_15079 = (state_15147[(29)]);var inst_15078 = cljs.core.deref.call(null,cs);var inst_15079__$1 = cljs.core.keys.call(null,inst_15078);var inst_15080 = cljs.core.count.call(null,inst_15079__$1);var inst_15081 = cljs.core.reset_BANG_.call(null,dctr,inst_15080);var inst_15086 = cljs.core.seq.call(null,inst_15079__$1);var inst_15087 = inst_15086;var inst_15088 = null;var inst_15089 = (0);var inst_15090 = (0);var state_15147__$1 = (function (){var statearr_15190 = state_15147;(statearr_15190[(20)] = inst_15087);
(statearr_15190[(29)] = inst_15079__$1);
(statearr_15190[(11)] = inst_15088);
(statearr_15190[(30)] = inst_15081);
(statearr_15190[(21)] = inst_15089);
(statearr_15190[(12)] = inst_15090);
return statearr_15190;
})();var statearr_15191_15260 = state_15147__$1;(statearr_15191_15260[(2)] = null);
(statearr_15191_15260[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (28)))
{var inst_15087 = (state_15147[(20)]);var inst_15106 = (state_15147[(25)]);var inst_15106__$1 = cljs.core.seq.call(null,inst_15087);var state_15147__$1 = (function (){var statearr_15192 = state_15147;(statearr_15192[(25)] = inst_15106__$1);
return statearr_15192;
})();if(inst_15106__$1)
{var statearr_15193_15261 = state_15147__$1;(statearr_15193_15261[(1)] = (33));
} else
{var statearr_15194_15262 = state_15147__$1;(statearr_15194_15262[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (25)))
{var inst_15089 = (state_15147[(21)]);var inst_15090 = (state_15147[(12)]);var inst_15092 = (inst_15090 < inst_15089);var inst_15093 = inst_15092;var state_15147__$1 = state_15147;if(cljs.core.truth_(inst_15093))
{var statearr_15195_15263 = state_15147__$1;(statearr_15195_15263[(1)] = (27));
} else
{var statearr_15196_15264 = state_15147__$1;(statearr_15196_15264[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (34)))
{var state_15147__$1 = state_15147;var statearr_15197_15265 = state_15147__$1;(statearr_15197_15265[(2)] = null);
(statearr_15197_15265[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (17)))
{var state_15147__$1 = state_15147;var statearr_15198_15266 = state_15147__$1;(statearr_15198_15266[(2)] = null);
(statearr_15198_15266[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (3)))
{var inst_15145 = (state_15147[(2)]);var state_15147__$1 = state_15147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15147__$1,inst_15145);
} else
{if((state_val_15148 === (12)))
{var inst_15074 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15199_15267 = state_15147__$1;(statearr_15199_15267[(2)] = inst_15074);
(statearr_15199_15267[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (2)))
{var state_15147__$1 = state_15147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15147__$1,(4),ch);
} else
{if((state_val_15148 === (23)))
{var state_15147__$1 = state_15147;var statearr_15200_15268 = state_15147__$1;(statearr_15200_15268[(2)] = null);
(statearr_15200_15268[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (35)))
{var inst_15129 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15201_15269 = state_15147__$1;(statearr_15201_15269[(2)] = inst_15129);
(statearr_15201_15269[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (19)))
{var inst_15048 = (state_15147[(7)]);var inst_15052 = cljs.core.chunk_first.call(null,inst_15048);var inst_15053 = cljs.core.chunk_rest.call(null,inst_15048);var inst_15054 = cljs.core.count.call(null,inst_15052);var inst_15028 = inst_15053;var inst_15029 = inst_15052;var inst_15030 = inst_15054;var inst_15031 = (0);var state_15147__$1 = (function (){var statearr_15202 = state_15147;(statearr_15202[(13)] = inst_15028);
(statearr_15202[(15)] = inst_15030);
(statearr_15202[(16)] = inst_15029);
(statearr_15202[(17)] = inst_15031);
return statearr_15202;
})();var statearr_15203_15270 = state_15147__$1;(statearr_15203_15270[(2)] = null);
(statearr_15203_15270[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (11)))
{var inst_15028 = (state_15147[(13)]);var inst_15048 = (state_15147[(7)]);var inst_15048__$1 = cljs.core.seq.call(null,inst_15028);var state_15147__$1 = (function (){var statearr_15204 = state_15147;(statearr_15204[(7)] = inst_15048__$1);
return statearr_15204;
})();if(inst_15048__$1)
{var statearr_15205_15271 = state_15147__$1;(statearr_15205_15271[(1)] = (16));
} else
{var statearr_15206_15272 = state_15147__$1;(statearr_15206_15272[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (9)))
{var inst_15076 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15207_15273 = state_15147__$1;(statearr_15207_15273[(2)] = inst_15076);
(statearr_15207_15273[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (5)))
{var inst_15026 = cljs.core.deref.call(null,cs);var inst_15027 = cljs.core.seq.call(null,inst_15026);var inst_15028 = inst_15027;var inst_15029 = null;var inst_15030 = (0);var inst_15031 = (0);var state_15147__$1 = (function (){var statearr_15208 = state_15147;(statearr_15208[(13)] = inst_15028);
(statearr_15208[(15)] = inst_15030);
(statearr_15208[(16)] = inst_15029);
(statearr_15208[(17)] = inst_15031);
return statearr_15208;
})();var statearr_15209_15274 = state_15147__$1;(statearr_15209_15274[(2)] = null);
(statearr_15209_15274[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (14)))
{var state_15147__$1 = state_15147;var statearr_15210_15275 = state_15147__$1;(statearr_15210_15275[(2)] = null);
(statearr_15210_15275[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (45)))
{var inst_15137 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15211_15276 = state_15147__$1;(statearr_15211_15276[(2)] = inst_15137);
(statearr_15211_15276[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (26)))
{var inst_15079 = (state_15147[(29)]);var inst_15133 = (state_15147[(2)]);var inst_15134 = cljs.core.seq.call(null,inst_15079);var state_15147__$1 = (function (){var statearr_15212 = state_15147;(statearr_15212[(31)] = inst_15133);
return statearr_15212;
})();if(inst_15134)
{var statearr_15213_15277 = state_15147__$1;(statearr_15213_15277[(1)] = (42));
} else
{var statearr_15214_15278 = state_15147__$1;(statearr_15214_15278[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (16)))
{var inst_15048 = (state_15147[(7)]);var inst_15050 = cljs.core.chunked_seq_QMARK_.call(null,inst_15048);var state_15147__$1 = state_15147;if(inst_15050)
{var statearr_15215_15279 = state_15147__$1;(statearr_15215_15279[(1)] = (19));
} else
{var statearr_15216_15280 = state_15147__$1;(statearr_15216_15280[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (38)))
{var inst_15126 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15217_15281 = state_15147__$1;(statearr_15217_15281[(2)] = inst_15126);
(statearr_15217_15281[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (30)))
{var state_15147__$1 = state_15147;var statearr_15218_15282 = state_15147__$1;(statearr_15218_15282[(2)] = null);
(statearr_15218_15282[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (10)))
{var inst_15029 = (state_15147[(16)]);var inst_15031 = (state_15147[(17)]);var inst_15037 = cljs.core._nth.call(null,inst_15029,inst_15031);var inst_15038 = cljs.core.nth.call(null,inst_15037,(0),null);var inst_15039 = cljs.core.nth.call(null,inst_15037,(1),null);var state_15147__$1 = (function (){var statearr_15219 = state_15147;(statearr_15219[(26)] = inst_15038);
return statearr_15219;
})();if(cljs.core.truth_(inst_15039))
{var statearr_15220_15283 = state_15147__$1;(statearr_15220_15283[(1)] = (13));
} else
{var statearr_15221_15284 = state_15147__$1;(statearr_15221_15284[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (18)))
{var inst_15072 = (state_15147[(2)]);var state_15147__$1 = state_15147;var statearr_15222_15285 = state_15147__$1;(statearr_15222_15285[(2)] = inst_15072);
(statearr_15222_15285[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (42)))
{var state_15147__$1 = state_15147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15147__$1,(45),dchan);
} else
{if((state_val_15148 === (37)))
{var inst_15019 = (state_15147[(9)]);var inst_15106 = (state_15147[(25)]);var inst_15115 = (state_15147[(23)]);var inst_15115__$1 = cljs.core.first.call(null,inst_15106);var inst_15116 = cljs.core.async.put_BANG_.call(null,inst_15115__$1,inst_15019,done);var state_15147__$1 = (function (){var statearr_15223 = state_15147;(statearr_15223[(23)] = inst_15115__$1);
return statearr_15223;
})();if(cljs.core.truth_(inst_15116))
{var statearr_15224_15286 = state_15147__$1;(statearr_15224_15286[(1)] = (39));
} else
{var statearr_15225_15287 = state_15147__$1;(statearr_15225_15287[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15148 === (8)))
{var inst_15030 = (state_15147[(15)]);var inst_15031 = (state_15147[(17)]);var inst_15033 = (inst_15031 < inst_15030);var inst_15034 = inst_15033;var state_15147__$1 = state_15147;if(cljs.core.truth_(inst_15034))
{var statearr_15226_15288 = state_15147__$1;(statearr_15226_15288[(1)] = (10));
} else
{var statearr_15227_15289 = state_15147__$1;(statearr_15227_15289[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___15235,cs,m,dchan,dctr,done))
;return ((function (switch__10924__auto__,c__10989__auto___15235,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_15231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15231[(0)] = state_machine__10925__auto__);
(statearr_15231[(1)] = (1));
return statearr_15231;
});
var state_machine__10925__auto____1 = (function (state_15147){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_15147);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e15232){if((e15232 instanceof Object))
{var ex__10928__auto__ = e15232;var statearr_15233_15290 = state_15147;(statearr_15233_15290[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15232;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15291 = state_15147;
state_15147 = G__15291;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_15147){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_15147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___15235,cs,m,dchan,dctr,done))
})();var state__10991__auto__ = (function (){var statearr_15234 = f__10990__auto__.call(null);(statearr_15234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___15235);
return statearr_15234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___15235,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15293 = {};return obj15293;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8546__auto__ = m;if(and__8546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9194__auto__ = (((m == null))?null:m);return (function (){var or__8558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15413 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15413 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15414){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15414 = meta15414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15413.cljs$lang$type = true;
cljs.core.async.t15413.cljs$lang$ctorStr = "cljs.core.async/t15413";
cljs.core.async.t15413.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t15413");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15413.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15415){var self__ = this;
var _15415__$1 = this;return self__.meta15414;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15415,meta15414__$1){var self__ = this;
var _15415__$1 = this;return (new cljs.core.async.t15413(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15414__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15413 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15413(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15414){return (new cljs.core.async.t15413(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15414));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15413(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10989__auto___15532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___15532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___15532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15485){var state_val_15486 = (state_15485[(1)]);if((state_val_15486 === (7)))
{var inst_15429 = (state_15485[(7)]);var inst_15434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15429);var state_15485__$1 = state_15485;var statearr_15487_15533 = state_15485__$1;(statearr_15487_15533[(2)] = inst_15434);
(statearr_15487_15533[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (20)))
{var inst_15444 = (state_15485[(8)]);var state_15485__$1 = state_15485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15485__$1,(23),out,inst_15444);
} else
{if((state_val_15486 === (1)))
{var inst_15419 = (state_15485[(9)]);var inst_15419__$1 = calc_state.call(null);var inst_15420 = cljs.core.seq_QMARK_.call(null,inst_15419__$1);var state_15485__$1 = (function (){var statearr_15488 = state_15485;(statearr_15488[(9)] = inst_15419__$1);
return statearr_15488;
})();if(inst_15420)
{var statearr_15489_15534 = state_15485__$1;(statearr_15489_15534[(1)] = (2));
} else
{var statearr_15490_15535 = state_15485__$1;(statearr_15490_15535[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (24)))
{var inst_15437 = (state_15485[(10)]);var inst_15429 = inst_15437;var state_15485__$1 = (function (){var statearr_15491 = state_15485;(statearr_15491[(7)] = inst_15429);
return statearr_15491;
})();var statearr_15492_15536 = state_15485__$1;(statearr_15492_15536[(2)] = null);
(statearr_15492_15536[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (4)))
{var inst_15419 = (state_15485[(9)]);var inst_15425 = (state_15485[(2)]);var inst_15426 = cljs.core.get.call(null,inst_15425,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15427 = cljs.core.get.call(null,inst_15425,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15428 = cljs.core.get.call(null,inst_15425,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15429 = inst_15419;var state_15485__$1 = (function (){var statearr_15493 = state_15485;(statearr_15493[(11)] = inst_15427);
(statearr_15493[(7)] = inst_15429);
(statearr_15493[(12)] = inst_15426);
(statearr_15493[(13)] = inst_15428);
return statearr_15493;
})();var statearr_15494_15537 = state_15485__$1;(statearr_15494_15537[(2)] = null);
(statearr_15494_15537[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (15)))
{var state_15485__$1 = state_15485;var statearr_15495_15538 = state_15485__$1;(statearr_15495_15538[(2)] = null);
(statearr_15495_15538[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (21)))
{var inst_15437 = (state_15485[(10)]);var inst_15429 = inst_15437;var state_15485__$1 = (function (){var statearr_15496 = state_15485;(statearr_15496[(7)] = inst_15429);
return statearr_15496;
})();var statearr_15497_15539 = state_15485__$1;(statearr_15497_15539[(2)] = null);
(statearr_15497_15539[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (13)))
{var inst_15481 = (state_15485[(2)]);var state_15485__$1 = state_15485;var statearr_15498_15540 = state_15485__$1;(statearr_15498_15540[(2)] = inst_15481);
(statearr_15498_15540[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (22)))
{var inst_15479 = (state_15485[(2)]);var state_15485__$1 = state_15485;var statearr_15499_15541 = state_15485__$1;(statearr_15499_15541[(2)] = inst_15479);
(statearr_15499_15541[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (6)))
{var inst_15483 = (state_15485[(2)]);var state_15485__$1 = state_15485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15485__$1,inst_15483);
} else
{if((state_val_15486 === (25)))
{var state_15485__$1 = state_15485;var statearr_15500_15542 = state_15485__$1;(statearr_15500_15542[(2)] = null);
(statearr_15500_15542[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (17)))
{var inst_15459 = (state_15485[(14)]);var state_15485__$1 = state_15485;var statearr_15501_15543 = state_15485__$1;(statearr_15501_15543[(2)] = inst_15459);
(statearr_15501_15543[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (3)))
{var inst_15419 = (state_15485[(9)]);var state_15485__$1 = state_15485;var statearr_15502_15544 = state_15485__$1;(statearr_15502_15544[(2)] = inst_15419);
(statearr_15502_15544[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (12)))
{var inst_15445 = (state_15485[(15)]);var inst_15459 = (state_15485[(14)]);var inst_15440 = (state_15485[(16)]);var inst_15459__$1 = inst_15440.call(null,inst_15445);var state_15485__$1 = (function (){var statearr_15503 = state_15485;(statearr_15503[(14)] = inst_15459__$1);
return statearr_15503;
})();if(cljs.core.truth_(inst_15459__$1))
{var statearr_15504_15545 = state_15485__$1;(statearr_15504_15545[(1)] = (17));
} else
{var statearr_15505_15546 = state_15485__$1;(statearr_15505_15546[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (2)))
{var inst_15419 = (state_15485[(9)]);var inst_15422 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15419);var state_15485__$1 = state_15485;var statearr_15506_15547 = state_15485__$1;(statearr_15506_15547[(2)] = inst_15422);
(statearr_15506_15547[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (23)))
{var inst_15470 = (state_15485[(2)]);var state_15485__$1 = state_15485;if(cljs.core.truth_(inst_15470))
{var statearr_15507_15548 = state_15485__$1;(statearr_15507_15548[(1)] = (24));
} else
{var statearr_15508_15549 = state_15485__$1;(statearr_15508_15549[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (19)))
{var inst_15467 = (state_15485[(2)]);var state_15485__$1 = state_15485;if(cljs.core.truth_(inst_15467))
{var statearr_15509_15550 = state_15485__$1;(statearr_15509_15550[(1)] = (20));
} else
{var statearr_15510_15551 = state_15485__$1;(statearr_15510_15551[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (11)))
{var inst_15444 = (state_15485[(8)]);var inst_15450 = (inst_15444 == null);var state_15485__$1 = state_15485;if(cljs.core.truth_(inst_15450))
{var statearr_15511_15552 = state_15485__$1;(statearr_15511_15552[(1)] = (14));
} else
{var statearr_15512_15553 = state_15485__$1;(statearr_15512_15553[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (9)))
{var inst_15437 = (state_15485[(10)]);var inst_15437__$1 = (state_15485[(2)]);var inst_15438 = cljs.core.get.call(null,inst_15437__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15439 = cljs.core.get.call(null,inst_15437__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15440 = cljs.core.get.call(null,inst_15437__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15485__$1 = (function (){var statearr_15513 = state_15485;(statearr_15513[(17)] = inst_15439);
(statearr_15513[(16)] = inst_15440);
(statearr_15513[(10)] = inst_15437__$1);
return statearr_15513;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15485__$1,(10),inst_15438);
} else
{if((state_val_15486 === (5)))
{var inst_15429 = (state_15485[(7)]);var inst_15432 = cljs.core.seq_QMARK_.call(null,inst_15429);var state_15485__$1 = state_15485;if(inst_15432)
{var statearr_15514_15554 = state_15485__$1;(statearr_15514_15554[(1)] = (7));
} else
{var statearr_15515_15555 = state_15485__$1;(statearr_15515_15555[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (14)))
{var inst_15445 = (state_15485[(15)]);var inst_15452 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15445);var state_15485__$1 = state_15485;var statearr_15516_15556 = state_15485__$1;(statearr_15516_15556[(2)] = inst_15452);
(statearr_15516_15556[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (26)))
{var inst_15475 = (state_15485[(2)]);var state_15485__$1 = state_15485;var statearr_15517_15557 = state_15485__$1;(statearr_15517_15557[(2)] = inst_15475);
(statearr_15517_15557[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (16)))
{var inst_15455 = (state_15485[(2)]);var inst_15456 = calc_state.call(null);var inst_15429 = inst_15456;var state_15485__$1 = (function (){var statearr_15518 = state_15485;(statearr_15518[(7)] = inst_15429);
(statearr_15518[(18)] = inst_15455);
return statearr_15518;
})();var statearr_15519_15558 = state_15485__$1;(statearr_15519_15558[(2)] = null);
(statearr_15519_15558[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (10)))
{var inst_15444 = (state_15485[(8)]);var inst_15445 = (state_15485[(15)]);var inst_15443 = (state_15485[(2)]);var inst_15444__$1 = cljs.core.nth.call(null,inst_15443,(0),null);var inst_15445__$1 = cljs.core.nth.call(null,inst_15443,(1),null);var inst_15446 = (inst_15444__$1 == null);var inst_15447 = cljs.core._EQ_.call(null,inst_15445__$1,change);var inst_15448 = (inst_15446) || (inst_15447);var state_15485__$1 = (function (){var statearr_15520 = state_15485;(statearr_15520[(8)] = inst_15444__$1);
(statearr_15520[(15)] = inst_15445__$1);
return statearr_15520;
})();if(cljs.core.truth_(inst_15448))
{var statearr_15521_15559 = state_15485__$1;(statearr_15521_15559[(1)] = (11));
} else
{var statearr_15522_15560 = state_15485__$1;(statearr_15522_15560[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (18)))
{var inst_15439 = (state_15485[(17)]);var inst_15445 = (state_15485[(15)]);var inst_15440 = (state_15485[(16)]);var inst_15462 = cljs.core.empty_QMARK_.call(null,inst_15440);var inst_15463 = inst_15439.call(null,inst_15445);var inst_15464 = cljs.core.not.call(null,inst_15463);var inst_15465 = (inst_15462) && (inst_15464);var state_15485__$1 = state_15485;var statearr_15523_15561 = state_15485__$1;(statearr_15523_15561[(2)] = inst_15465);
(statearr_15523_15561[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15486 === (8)))
{var inst_15429 = (state_15485[(7)]);var state_15485__$1 = state_15485;var statearr_15524_15562 = state_15485__$1;(statearr_15524_15562[(2)] = inst_15429);
(statearr_15524_15562[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___15532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10924__auto__,c__10989__auto___15532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_15528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15528[(0)] = state_machine__10925__auto__);
(statearr_15528[(1)] = (1));
return statearr_15528;
});
var state_machine__10925__auto____1 = (function (state_15485){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_15485);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e15529){if((e15529 instanceof Object))
{var ex__10928__auto__ = e15529;var statearr_15530_15563 = state_15485;(statearr_15530_15563[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15564 = state_15485;
state_15485 = G__15564;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_15485){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_15485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___15532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10991__auto__ = (function (){var statearr_15531 = f__10990__auto__.call(null);(statearr_15531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___15532);
return statearr_15531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___15532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15566 = {};return obj15566;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8546__auto__ = p;if(and__8546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9194__auto__ = (((p == null))?null:p);return (function (){var or__8558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8546__auto__ = p;if(and__8546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9194__auto__ = (((p == null))?null:p);return (function (){var or__8558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8546__auto__ = p;if(and__8546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9194__auto__ = (((p == null))?null:p);return (function (){var or__8558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8546__auto__ = p;if(and__8546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9194__auto__ = (((p == null))?null:p);return (function (){var or__8558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9194__auto__)]);if(or__8558__auto__)
{return or__8558__auto__;
} else
{var or__8558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8558__auto____$1)
{return or__8558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8558__auto__,mults){
return (function (p1__15567_SHARP_){if(cljs.core.truth_(p1__15567_SHARP_.call(null,topic)))
{return p1__15567_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15567_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15682 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15683){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15683 = meta15683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15682.cljs$lang$type = true;
cljs.core.async.t15682.cljs$lang$ctorStr = "cljs.core.async/t15682";
cljs.core.async.t15682.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9134__auto__,writer__9135__auto__,opt__9136__auto__){return cljs.core._write.call(null,writer__9135__auto__,"cljs.core.async/t15682");
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15682.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15684){var self__ = this;
var _15684__$1 = this;return self__.meta15683;
});})(mults,ensure_mult))
;
cljs.core.async.t15682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15684,meta15683__$1){var self__ = this;
var _15684__$1 = this;return (new cljs.core.async.t15682(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15683__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15682 = ((function (mults,ensure_mult){
return (function __GT_t15682(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15683){return (new cljs.core.async.t15682(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15683));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15682(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10989__auto___15796 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___15796,mults,ensure_mult,p){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___15796,mults,ensure_mult,p){
return (function (state_15752){var state_val_15753 = (state_15752[(1)]);if((state_val_15753 === (7)))
{var inst_15748 = (state_15752[(2)]);var state_15752__$1 = state_15752;var statearr_15754_15797 = state_15752__$1;(statearr_15754_15797[(2)] = inst_15748);
(statearr_15754_15797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (20)))
{var state_15752__$1 = state_15752;var statearr_15755_15798 = state_15752__$1;(statearr_15755_15798[(2)] = null);
(statearr_15755_15798[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (1)))
{var state_15752__$1 = state_15752;var statearr_15756_15799 = state_15752__$1;(statearr_15756_15799[(2)] = null);
(statearr_15756_15799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (4)))
{var inst_15687 = (state_15752[(7)]);var inst_15687__$1 = (state_15752[(2)]);var inst_15688 = (inst_15687__$1 == null);var state_15752__$1 = (function (){var statearr_15757 = state_15752;(statearr_15757[(7)] = inst_15687__$1);
return statearr_15757;
})();if(cljs.core.truth_(inst_15688))
{var statearr_15758_15800 = state_15752__$1;(statearr_15758_15800[(1)] = (5));
} else
{var statearr_15759_15801 = state_15752__$1;(statearr_15759_15801[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (15)))
{var inst_15729 = (state_15752[(2)]);var state_15752__$1 = state_15752;var statearr_15760_15802 = state_15752__$1;(statearr_15760_15802[(2)] = inst_15729);
(statearr_15760_15802[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (21)))
{var inst_15735 = (state_15752[(8)]);var inst_15743 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15735);var state_15752__$1 = state_15752;var statearr_15761_15803 = state_15752__$1;(statearr_15761_15803[(2)] = inst_15743);
(statearr_15761_15803[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (13)))
{var inst_15711 = (state_15752[(9)]);var inst_15713 = cljs.core.chunked_seq_QMARK_.call(null,inst_15711);var state_15752__$1 = state_15752;if(inst_15713)
{var statearr_15762_15804 = state_15752__$1;(statearr_15762_15804[(1)] = (16));
} else
{var statearr_15763_15805 = state_15752__$1;(statearr_15763_15805[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (22)))
{var inst_15745 = (state_15752[(2)]);var state_15752__$1 = (function (){var statearr_15764 = state_15752;(statearr_15764[(10)] = inst_15745);
return statearr_15764;
})();var statearr_15765_15806 = state_15752__$1;(statearr_15765_15806[(2)] = null);
(statearr_15765_15806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (6)))
{var inst_15735 = (state_15752[(8)]);var inst_15687 = (state_15752[(7)]);var inst_15735__$1 = topic_fn.call(null,inst_15687);var inst_15736 = cljs.core.deref.call(null,mults);var inst_15737 = cljs.core.get.call(null,inst_15736,inst_15735__$1);var inst_15738 = cljs.core.async.muxch_STAR_.call(null,inst_15737);var state_15752__$1 = (function (){var statearr_15766 = state_15752;(statearr_15766[(8)] = inst_15735__$1);
return statearr_15766;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15752__$1,(19),inst_15738,inst_15687);
} else
{if((state_val_15753 === (17)))
{var inst_15711 = (state_15752[(9)]);var inst_15720 = cljs.core.first.call(null,inst_15711);var inst_15721 = cljs.core.async.muxch_STAR_.call(null,inst_15720);var inst_15722 = cljs.core.async.close_BANG_.call(null,inst_15721);var inst_15723 = cljs.core.next.call(null,inst_15711);var inst_15697 = inst_15723;var inst_15698 = null;var inst_15699 = (0);var inst_15700 = (0);var state_15752__$1 = (function (){var statearr_15767 = state_15752;(statearr_15767[(11)] = inst_15699);
(statearr_15767[(12)] = inst_15722);
(statearr_15767[(13)] = inst_15700);
(statearr_15767[(14)] = inst_15697);
(statearr_15767[(15)] = inst_15698);
return statearr_15767;
})();var statearr_15768_15807 = state_15752__$1;(statearr_15768_15807[(2)] = null);
(statearr_15768_15807[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (3)))
{var inst_15750 = (state_15752[(2)]);var state_15752__$1 = state_15752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15752__$1,inst_15750);
} else
{if((state_val_15753 === (12)))
{var inst_15731 = (state_15752[(2)]);var state_15752__$1 = state_15752;var statearr_15769_15808 = state_15752__$1;(statearr_15769_15808[(2)] = inst_15731);
(statearr_15769_15808[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (2)))
{var state_15752__$1 = state_15752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15752__$1,(4),ch);
} else
{if((state_val_15753 === (19)))
{var inst_15740 = (state_15752[(2)]);var state_15752__$1 = state_15752;if(cljs.core.truth_(inst_15740))
{var statearr_15770_15809 = state_15752__$1;(statearr_15770_15809[(1)] = (20));
} else
{var statearr_15771_15810 = state_15752__$1;(statearr_15771_15810[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (11)))
{var inst_15697 = (state_15752[(14)]);var inst_15711 = (state_15752[(9)]);var inst_15711__$1 = cljs.core.seq.call(null,inst_15697);var state_15752__$1 = (function (){var statearr_15772 = state_15752;(statearr_15772[(9)] = inst_15711__$1);
return statearr_15772;
})();if(inst_15711__$1)
{var statearr_15773_15811 = state_15752__$1;(statearr_15773_15811[(1)] = (13));
} else
{var statearr_15774_15812 = state_15752__$1;(statearr_15774_15812[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (9)))
{var inst_15733 = (state_15752[(2)]);var state_15752__$1 = state_15752;var statearr_15775_15813 = state_15752__$1;(statearr_15775_15813[(2)] = inst_15733);
(statearr_15775_15813[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (5)))
{var inst_15694 = cljs.core.deref.call(null,mults);var inst_15695 = cljs.core.vals.call(null,inst_15694);var inst_15696 = cljs.core.seq.call(null,inst_15695);var inst_15697 = inst_15696;var inst_15698 = null;var inst_15699 = (0);var inst_15700 = (0);var state_15752__$1 = (function (){var statearr_15776 = state_15752;(statearr_15776[(11)] = inst_15699);
(statearr_15776[(13)] = inst_15700);
(statearr_15776[(14)] = inst_15697);
(statearr_15776[(15)] = inst_15698);
return statearr_15776;
})();var statearr_15777_15814 = state_15752__$1;(statearr_15777_15814[(2)] = null);
(statearr_15777_15814[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (14)))
{var state_15752__$1 = state_15752;var statearr_15781_15815 = state_15752__$1;(statearr_15781_15815[(2)] = null);
(statearr_15781_15815[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (16)))
{var inst_15711 = (state_15752[(9)]);var inst_15715 = cljs.core.chunk_first.call(null,inst_15711);var inst_15716 = cljs.core.chunk_rest.call(null,inst_15711);var inst_15717 = cljs.core.count.call(null,inst_15715);var inst_15697 = inst_15716;var inst_15698 = inst_15715;var inst_15699 = inst_15717;var inst_15700 = (0);var state_15752__$1 = (function (){var statearr_15782 = state_15752;(statearr_15782[(11)] = inst_15699);
(statearr_15782[(13)] = inst_15700);
(statearr_15782[(14)] = inst_15697);
(statearr_15782[(15)] = inst_15698);
return statearr_15782;
})();var statearr_15783_15816 = state_15752__$1;(statearr_15783_15816[(2)] = null);
(statearr_15783_15816[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (10)))
{var inst_15699 = (state_15752[(11)]);var inst_15700 = (state_15752[(13)]);var inst_15697 = (state_15752[(14)]);var inst_15698 = (state_15752[(15)]);var inst_15705 = cljs.core._nth.call(null,inst_15698,inst_15700);var inst_15706 = cljs.core.async.muxch_STAR_.call(null,inst_15705);var inst_15707 = cljs.core.async.close_BANG_.call(null,inst_15706);var inst_15708 = (inst_15700 + (1));var tmp15778 = inst_15699;var tmp15779 = inst_15697;var tmp15780 = inst_15698;var inst_15697__$1 = tmp15779;var inst_15698__$1 = tmp15780;var inst_15699__$1 = tmp15778;var inst_15700__$1 = inst_15708;var state_15752__$1 = (function (){var statearr_15784 = state_15752;(statearr_15784[(16)] = inst_15707);
(statearr_15784[(11)] = inst_15699__$1);
(statearr_15784[(13)] = inst_15700__$1);
(statearr_15784[(14)] = inst_15697__$1);
(statearr_15784[(15)] = inst_15698__$1);
return statearr_15784;
})();var statearr_15785_15817 = state_15752__$1;(statearr_15785_15817[(2)] = null);
(statearr_15785_15817[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (18)))
{var inst_15726 = (state_15752[(2)]);var state_15752__$1 = state_15752;var statearr_15786_15818 = state_15752__$1;(statearr_15786_15818[(2)] = inst_15726);
(statearr_15786_15818[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15753 === (8)))
{var inst_15699 = (state_15752[(11)]);var inst_15700 = (state_15752[(13)]);var inst_15702 = (inst_15700 < inst_15699);var inst_15703 = inst_15702;var state_15752__$1 = state_15752;if(cljs.core.truth_(inst_15703))
{var statearr_15787_15819 = state_15752__$1;(statearr_15787_15819[(1)] = (10));
} else
{var statearr_15788_15820 = state_15752__$1;(statearr_15788_15820[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___15796,mults,ensure_mult,p))
;return ((function (switch__10924__auto__,c__10989__auto___15796,mults,ensure_mult,p){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_15792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15792[(0)] = state_machine__10925__auto__);
(statearr_15792[(1)] = (1));
return statearr_15792;
});
var state_machine__10925__auto____1 = (function (state_15752){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_15752);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e15793){if((e15793 instanceof Object))
{var ex__10928__auto__ = e15793;var statearr_15794_15821 = state_15752;(statearr_15794_15821[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15822 = state_15752;
state_15752 = G__15822;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_15752){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_15752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___15796,mults,ensure_mult,p))
})();var state__10991__auto__ = (function (){var statearr_15795 = f__10990__auto__.call(null);(statearr_15795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___15796);
return statearr_15795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___15796,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10989__auto___15959 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___15959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___15959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15929){var state_val_15930 = (state_15929[(1)]);if((state_val_15930 === (7)))
{var state_15929__$1 = state_15929;var statearr_15931_15960 = state_15929__$1;(statearr_15931_15960[(2)] = null);
(statearr_15931_15960[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (1)))
{var state_15929__$1 = state_15929;var statearr_15932_15961 = state_15929__$1;(statearr_15932_15961[(2)] = null);
(statearr_15932_15961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (4)))
{var inst_15893 = (state_15929[(7)]);var inst_15895 = (inst_15893 < cnt);var state_15929__$1 = state_15929;if(cljs.core.truth_(inst_15895))
{var statearr_15933_15962 = state_15929__$1;(statearr_15933_15962[(1)] = (6));
} else
{var statearr_15934_15963 = state_15929__$1;(statearr_15934_15963[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (15)))
{var inst_15925 = (state_15929[(2)]);var state_15929__$1 = state_15929;var statearr_15935_15964 = state_15929__$1;(statearr_15935_15964[(2)] = inst_15925);
(statearr_15935_15964[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (13)))
{var inst_15918 = cljs.core.async.close_BANG_.call(null,out);var state_15929__$1 = state_15929;var statearr_15936_15965 = state_15929__$1;(statearr_15936_15965[(2)] = inst_15918);
(statearr_15936_15965[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (6)))
{var state_15929__$1 = state_15929;var statearr_15937_15966 = state_15929__$1;(statearr_15937_15966[(2)] = null);
(statearr_15937_15966[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (3)))
{var inst_15927 = (state_15929[(2)]);var state_15929__$1 = state_15929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15929__$1,inst_15927);
} else
{if((state_val_15930 === (12)))
{var inst_15915 = (state_15929[(8)]);var inst_15915__$1 = (state_15929[(2)]);var inst_15916 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15915__$1);var state_15929__$1 = (function (){var statearr_15938 = state_15929;(statearr_15938[(8)] = inst_15915__$1);
return statearr_15938;
})();if(cljs.core.truth_(inst_15916))
{var statearr_15939_15967 = state_15929__$1;(statearr_15939_15967[(1)] = (13));
} else
{var statearr_15940_15968 = state_15929__$1;(statearr_15940_15968[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (2)))
{var inst_15892 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15893 = (0);var state_15929__$1 = (function (){var statearr_15941 = state_15929;(statearr_15941[(7)] = inst_15893);
(statearr_15941[(9)] = inst_15892);
return statearr_15941;
})();var statearr_15942_15969 = state_15929__$1;(statearr_15942_15969[(2)] = null);
(statearr_15942_15969[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (11)))
{var inst_15893 = (state_15929[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15929,(10),Object,null,(9));var inst_15902 = chs__$1.call(null,inst_15893);var inst_15903 = done.call(null,inst_15893);var inst_15904 = cljs.core.async.take_BANG_.call(null,inst_15902,inst_15903);var state_15929__$1 = state_15929;var statearr_15943_15970 = state_15929__$1;(statearr_15943_15970[(2)] = inst_15904);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15929__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (9)))
{var inst_15893 = (state_15929[(7)]);var inst_15906 = (state_15929[(2)]);var inst_15907 = (inst_15893 + (1));var inst_15893__$1 = inst_15907;var state_15929__$1 = (function (){var statearr_15944 = state_15929;(statearr_15944[(7)] = inst_15893__$1);
(statearr_15944[(10)] = inst_15906);
return statearr_15944;
})();var statearr_15945_15971 = state_15929__$1;(statearr_15945_15971[(2)] = null);
(statearr_15945_15971[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (5)))
{var inst_15913 = (state_15929[(2)]);var state_15929__$1 = (function (){var statearr_15946 = state_15929;(statearr_15946[(11)] = inst_15913);
return statearr_15946;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15929__$1,(12),dchan);
} else
{if((state_val_15930 === (14)))
{var inst_15915 = (state_15929[(8)]);var inst_15920 = cljs.core.apply.call(null,f,inst_15915);var state_15929__$1 = state_15929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15929__$1,(16),out,inst_15920);
} else
{if((state_val_15930 === (16)))
{var inst_15922 = (state_15929[(2)]);var state_15929__$1 = (function (){var statearr_15947 = state_15929;(statearr_15947[(12)] = inst_15922);
return statearr_15947;
})();var statearr_15948_15972 = state_15929__$1;(statearr_15948_15972[(2)] = null);
(statearr_15948_15972[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (10)))
{var inst_15897 = (state_15929[(2)]);var inst_15898 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15929__$1 = (function (){var statearr_15949 = state_15929;(statearr_15949[(13)] = inst_15897);
return statearr_15949;
})();var statearr_15950_15973 = state_15929__$1;(statearr_15950_15973[(2)] = inst_15898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15929__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15930 === (8)))
{var inst_15911 = (state_15929[(2)]);var state_15929__$1 = state_15929;var statearr_15951_15974 = state_15929__$1;(statearr_15951_15974[(2)] = inst_15911);
(statearr_15951_15974[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___15959,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10924__auto__,c__10989__auto___15959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_15955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15955[(0)] = state_machine__10925__auto__);
(statearr_15955[(1)] = (1));
return statearr_15955;
});
var state_machine__10925__auto____1 = (function (state_15929){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_15929);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e15956){if((e15956 instanceof Object))
{var ex__10928__auto__ = e15956;var statearr_15957_15975 = state_15929;(statearr_15957_15975[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15956;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15976 = state_15929;
state_15929 = G__15976;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_15929){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_15929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___15959,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10991__auto__ = (function (){var statearr_15958 = f__10990__auto__.call(null);(statearr_15958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___15959);
return statearr_15958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___15959,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10989__auto___16084 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___16084,out){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___16084,out){
return (function (state_16060){var state_val_16061 = (state_16060[(1)]);if((state_val_16061 === (7)))
{var inst_16039 = (state_16060[(7)]);var inst_16040 = (state_16060[(8)]);var inst_16039__$1 = (state_16060[(2)]);var inst_16040__$1 = cljs.core.nth.call(null,inst_16039__$1,(0),null);var inst_16041 = cljs.core.nth.call(null,inst_16039__$1,(1),null);var inst_16042 = (inst_16040__$1 == null);var state_16060__$1 = (function (){var statearr_16062 = state_16060;(statearr_16062[(7)] = inst_16039__$1);
(statearr_16062[(9)] = inst_16041);
(statearr_16062[(8)] = inst_16040__$1);
return statearr_16062;
})();if(cljs.core.truth_(inst_16042))
{var statearr_16063_16085 = state_16060__$1;(statearr_16063_16085[(1)] = (8));
} else
{var statearr_16064_16086 = state_16060__$1;(statearr_16064_16086[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (1)))
{var inst_16031 = cljs.core.vec.call(null,chs);var inst_16032 = inst_16031;var state_16060__$1 = (function (){var statearr_16065 = state_16060;(statearr_16065[(10)] = inst_16032);
return statearr_16065;
})();var statearr_16066_16087 = state_16060__$1;(statearr_16066_16087[(2)] = null);
(statearr_16066_16087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (4)))
{var inst_16032 = (state_16060[(10)]);var state_16060__$1 = state_16060;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16060__$1,(7),inst_16032);
} else
{if((state_val_16061 === (6)))
{var inst_16056 = (state_16060[(2)]);var state_16060__$1 = state_16060;var statearr_16067_16088 = state_16060__$1;(statearr_16067_16088[(2)] = inst_16056);
(statearr_16067_16088[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (3)))
{var inst_16058 = (state_16060[(2)]);var state_16060__$1 = state_16060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16060__$1,inst_16058);
} else
{if((state_val_16061 === (2)))
{var inst_16032 = (state_16060[(10)]);var inst_16034 = cljs.core.count.call(null,inst_16032);var inst_16035 = (inst_16034 > (0));var state_16060__$1 = state_16060;if(cljs.core.truth_(inst_16035))
{var statearr_16069_16089 = state_16060__$1;(statearr_16069_16089[(1)] = (4));
} else
{var statearr_16070_16090 = state_16060__$1;(statearr_16070_16090[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (11)))
{var inst_16032 = (state_16060[(10)]);var inst_16049 = (state_16060[(2)]);var tmp16068 = inst_16032;var inst_16032__$1 = tmp16068;var state_16060__$1 = (function (){var statearr_16071 = state_16060;(statearr_16071[(10)] = inst_16032__$1);
(statearr_16071[(11)] = inst_16049);
return statearr_16071;
})();var statearr_16072_16091 = state_16060__$1;(statearr_16072_16091[(2)] = null);
(statearr_16072_16091[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (9)))
{var inst_16040 = (state_16060[(8)]);var state_16060__$1 = state_16060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16060__$1,(11),out,inst_16040);
} else
{if((state_val_16061 === (5)))
{var inst_16054 = cljs.core.async.close_BANG_.call(null,out);var state_16060__$1 = state_16060;var statearr_16073_16092 = state_16060__$1;(statearr_16073_16092[(2)] = inst_16054);
(statearr_16073_16092[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (10)))
{var inst_16052 = (state_16060[(2)]);var state_16060__$1 = state_16060;var statearr_16074_16093 = state_16060__$1;(statearr_16074_16093[(2)] = inst_16052);
(statearr_16074_16093[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16061 === (8)))
{var inst_16039 = (state_16060[(7)]);var inst_16032 = (state_16060[(10)]);var inst_16041 = (state_16060[(9)]);var inst_16040 = (state_16060[(8)]);var inst_16044 = (function (){var c = inst_16041;var v = inst_16040;var vec__16037 = inst_16039;var cs = inst_16032;return ((function (c,v,vec__16037,cs,inst_16039,inst_16032,inst_16041,inst_16040,state_val_16061,c__10989__auto___16084,out){
return (function (p1__15977_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15977_SHARP_);
});
;})(c,v,vec__16037,cs,inst_16039,inst_16032,inst_16041,inst_16040,state_val_16061,c__10989__auto___16084,out))
})();var inst_16045 = cljs.core.filterv.call(null,inst_16044,inst_16032);var inst_16032__$1 = inst_16045;var state_16060__$1 = (function (){var statearr_16075 = state_16060;(statearr_16075[(10)] = inst_16032__$1);
return statearr_16075;
})();var statearr_16076_16094 = state_16060__$1;(statearr_16076_16094[(2)] = null);
(statearr_16076_16094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___16084,out))
;return ((function (switch__10924__auto__,c__10989__auto___16084,out){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_16080 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16080[(0)] = state_machine__10925__auto__);
(statearr_16080[(1)] = (1));
return statearr_16080;
});
var state_machine__10925__auto____1 = (function (state_16060){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_16060);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e16081){if((e16081 instanceof Object))
{var ex__10928__auto__ = e16081;var statearr_16082_16095 = state_16060;(statearr_16082_16095[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16060);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16081;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16096 = state_16060;
state_16060 = G__16096;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_16060){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_16060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___16084,out))
})();var state__10991__auto__ = (function (){var statearr_16083 = f__10990__auto__.call(null);(statearr_16083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___16084);
return statearr_16083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___16084,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10989__auto___16189 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___16189,out){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___16189,out){
return (function (state_16166){var state_val_16167 = (state_16166[(1)]);if((state_val_16167 === (7)))
{var inst_16148 = (state_16166[(7)]);var inst_16148__$1 = (state_16166[(2)]);var inst_16149 = (inst_16148__$1 == null);var inst_16150 = cljs.core.not.call(null,inst_16149);var state_16166__$1 = (function (){var statearr_16168 = state_16166;(statearr_16168[(7)] = inst_16148__$1);
return statearr_16168;
})();if(inst_16150)
{var statearr_16169_16190 = state_16166__$1;(statearr_16169_16190[(1)] = (8));
} else
{var statearr_16170_16191 = state_16166__$1;(statearr_16170_16191[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (1)))
{var inst_16143 = (0);var state_16166__$1 = (function (){var statearr_16171 = state_16166;(statearr_16171[(8)] = inst_16143);
return statearr_16171;
})();var statearr_16172_16192 = state_16166__$1;(statearr_16172_16192[(2)] = null);
(statearr_16172_16192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (4)))
{var state_16166__$1 = state_16166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16166__$1,(7),ch);
} else
{if((state_val_16167 === (6)))
{var inst_16161 = (state_16166[(2)]);var state_16166__$1 = state_16166;var statearr_16173_16193 = state_16166__$1;(statearr_16173_16193[(2)] = inst_16161);
(statearr_16173_16193[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (3)))
{var inst_16163 = (state_16166[(2)]);var inst_16164 = cljs.core.async.close_BANG_.call(null,out);var state_16166__$1 = (function (){var statearr_16174 = state_16166;(statearr_16174[(9)] = inst_16163);
return statearr_16174;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16166__$1,inst_16164);
} else
{if((state_val_16167 === (2)))
{var inst_16143 = (state_16166[(8)]);var inst_16145 = (inst_16143 < n);var state_16166__$1 = state_16166;if(cljs.core.truth_(inst_16145))
{var statearr_16175_16194 = state_16166__$1;(statearr_16175_16194[(1)] = (4));
} else
{var statearr_16176_16195 = state_16166__$1;(statearr_16176_16195[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (11)))
{var inst_16143 = (state_16166[(8)]);var inst_16153 = (state_16166[(2)]);var inst_16154 = (inst_16143 + (1));var inst_16143__$1 = inst_16154;var state_16166__$1 = (function (){var statearr_16177 = state_16166;(statearr_16177[(10)] = inst_16153);
(statearr_16177[(8)] = inst_16143__$1);
return statearr_16177;
})();var statearr_16178_16196 = state_16166__$1;(statearr_16178_16196[(2)] = null);
(statearr_16178_16196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (9)))
{var state_16166__$1 = state_16166;var statearr_16179_16197 = state_16166__$1;(statearr_16179_16197[(2)] = null);
(statearr_16179_16197[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (5)))
{var state_16166__$1 = state_16166;var statearr_16180_16198 = state_16166__$1;(statearr_16180_16198[(2)] = null);
(statearr_16180_16198[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (10)))
{var inst_16158 = (state_16166[(2)]);var state_16166__$1 = state_16166;var statearr_16181_16199 = state_16166__$1;(statearr_16181_16199[(2)] = inst_16158);
(statearr_16181_16199[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16167 === (8)))
{var inst_16148 = (state_16166[(7)]);var state_16166__$1 = state_16166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16166__$1,(11),out,inst_16148);
} else
{return null;
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
});})(c__10989__auto___16189,out))
;return ((function (switch__10924__auto__,c__10989__auto___16189,out){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_16185 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16185[(0)] = state_machine__10925__auto__);
(statearr_16185[(1)] = (1));
return statearr_16185;
});
var state_machine__10925__auto____1 = (function (state_16166){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_16166);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e16186){if((e16186 instanceof Object))
{var ex__10928__auto__ = e16186;var statearr_16187_16200 = state_16166;(statearr_16187_16200[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16201 = state_16166;
state_16166 = G__16201;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_16166){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_16166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___16189,out))
})();var state__10991__auto__ = (function (){var statearr_16188 = f__10990__auto__.call(null);(statearr_16188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___16189);
return statearr_16188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___16189,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10989__auto___16298 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___16298,out){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___16298,out){
return (function (state_16273){var state_val_16274 = (state_16273[(1)]);if((state_val_16274 === (7)))
{var inst_16268 = (state_16273[(2)]);var state_16273__$1 = state_16273;var statearr_16275_16299 = state_16273__$1;(statearr_16275_16299[(2)] = inst_16268);
(statearr_16275_16299[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (1)))
{var inst_16250 = null;var state_16273__$1 = (function (){var statearr_16276 = state_16273;(statearr_16276[(7)] = inst_16250);
return statearr_16276;
})();var statearr_16277_16300 = state_16273__$1;(statearr_16277_16300[(2)] = null);
(statearr_16277_16300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (4)))
{var inst_16253 = (state_16273[(8)]);var inst_16253__$1 = (state_16273[(2)]);var inst_16254 = (inst_16253__$1 == null);var inst_16255 = cljs.core.not.call(null,inst_16254);var state_16273__$1 = (function (){var statearr_16278 = state_16273;(statearr_16278[(8)] = inst_16253__$1);
return statearr_16278;
})();if(inst_16255)
{var statearr_16279_16301 = state_16273__$1;(statearr_16279_16301[(1)] = (5));
} else
{var statearr_16280_16302 = state_16273__$1;(statearr_16280_16302[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (6)))
{var state_16273__$1 = state_16273;var statearr_16281_16303 = state_16273__$1;(statearr_16281_16303[(2)] = null);
(statearr_16281_16303[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (3)))
{var inst_16270 = (state_16273[(2)]);var inst_16271 = cljs.core.async.close_BANG_.call(null,out);var state_16273__$1 = (function (){var statearr_16282 = state_16273;(statearr_16282[(9)] = inst_16270);
return statearr_16282;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16273__$1,inst_16271);
} else
{if((state_val_16274 === (2)))
{var state_16273__$1 = state_16273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16273__$1,(4),ch);
} else
{if((state_val_16274 === (11)))
{var inst_16253 = (state_16273[(8)]);var inst_16262 = (state_16273[(2)]);var inst_16250 = inst_16253;var state_16273__$1 = (function (){var statearr_16283 = state_16273;(statearr_16283[(10)] = inst_16262);
(statearr_16283[(7)] = inst_16250);
return statearr_16283;
})();var statearr_16284_16304 = state_16273__$1;(statearr_16284_16304[(2)] = null);
(statearr_16284_16304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (9)))
{var inst_16253 = (state_16273[(8)]);var state_16273__$1 = state_16273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16273__$1,(11),out,inst_16253);
} else
{if((state_val_16274 === (5)))
{var inst_16253 = (state_16273[(8)]);var inst_16250 = (state_16273[(7)]);var inst_16257 = cljs.core._EQ_.call(null,inst_16253,inst_16250);var state_16273__$1 = state_16273;if(inst_16257)
{var statearr_16286_16305 = state_16273__$1;(statearr_16286_16305[(1)] = (8));
} else
{var statearr_16287_16306 = state_16273__$1;(statearr_16287_16306[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (10)))
{var inst_16265 = (state_16273[(2)]);var state_16273__$1 = state_16273;var statearr_16288_16307 = state_16273__$1;(statearr_16288_16307[(2)] = inst_16265);
(statearr_16288_16307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16274 === (8)))
{var inst_16250 = (state_16273[(7)]);var tmp16285 = inst_16250;var inst_16250__$1 = tmp16285;var state_16273__$1 = (function (){var statearr_16289 = state_16273;(statearr_16289[(7)] = inst_16250__$1);
return statearr_16289;
})();var statearr_16290_16308 = state_16273__$1;(statearr_16290_16308[(2)] = null);
(statearr_16290_16308[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___16298,out))
;return ((function (switch__10924__auto__,c__10989__auto___16298,out){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_16294 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16294[(0)] = state_machine__10925__auto__);
(statearr_16294[(1)] = (1));
return statearr_16294;
});
var state_machine__10925__auto____1 = (function (state_16273){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_16273);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e16295){if((e16295 instanceof Object))
{var ex__10928__auto__ = e16295;var statearr_16296_16309 = state_16273;(statearr_16296_16309[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16295;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16310 = state_16273;
state_16273 = G__16310;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_16273){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_16273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___16298,out))
})();var state__10991__auto__ = (function (){var statearr_16297 = f__10990__auto__.call(null);(statearr_16297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___16298);
return statearr_16297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___16298,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10989__auto___16445 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___16445,out){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___16445,out){
return (function (state_16415){var state_val_16416 = (state_16415[(1)]);if((state_val_16416 === (7)))
{var inst_16411 = (state_16415[(2)]);var state_16415__$1 = state_16415;var statearr_16417_16446 = state_16415__$1;(statearr_16417_16446[(2)] = inst_16411);
(statearr_16417_16446[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (1)))
{var inst_16378 = (new Array(n));var inst_16379 = inst_16378;var inst_16380 = (0);var state_16415__$1 = (function (){var statearr_16418 = state_16415;(statearr_16418[(7)] = inst_16380);
(statearr_16418[(8)] = inst_16379);
return statearr_16418;
})();var statearr_16419_16447 = state_16415__$1;(statearr_16419_16447[(2)] = null);
(statearr_16419_16447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (4)))
{var inst_16383 = (state_16415[(9)]);var inst_16383__$1 = (state_16415[(2)]);var inst_16384 = (inst_16383__$1 == null);var inst_16385 = cljs.core.not.call(null,inst_16384);var state_16415__$1 = (function (){var statearr_16420 = state_16415;(statearr_16420[(9)] = inst_16383__$1);
return statearr_16420;
})();if(inst_16385)
{var statearr_16421_16448 = state_16415__$1;(statearr_16421_16448[(1)] = (5));
} else
{var statearr_16422_16449 = state_16415__$1;(statearr_16422_16449[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (15)))
{var inst_16405 = (state_16415[(2)]);var state_16415__$1 = state_16415;var statearr_16423_16450 = state_16415__$1;(statearr_16423_16450[(2)] = inst_16405);
(statearr_16423_16450[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (13)))
{var state_16415__$1 = state_16415;var statearr_16424_16451 = state_16415__$1;(statearr_16424_16451[(2)] = null);
(statearr_16424_16451[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (6)))
{var inst_16380 = (state_16415[(7)]);var inst_16401 = (inst_16380 > (0));var state_16415__$1 = state_16415;if(cljs.core.truth_(inst_16401))
{var statearr_16425_16452 = state_16415__$1;(statearr_16425_16452[(1)] = (12));
} else
{var statearr_16426_16453 = state_16415__$1;(statearr_16426_16453[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (3)))
{var inst_16413 = (state_16415[(2)]);var state_16415__$1 = state_16415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16415__$1,inst_16413);
} else
{if((state_val_16416 === (12)))
{var inst_16379 = (state_16415[(8)]);var inst_16403 = cljs.core.vec.call(null,inst_16379);var state_16415__$1 = state_16415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16415__$1,(15),out,inst_16403);
} else
{if((state_val_16416 === (2)))
{var state_16415__$1 = state_16415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16415__$1,(4),ch);
} else
{if((state_val_16416 === (11)))
{var inst_16395 = (state_16415[(2)]);var inst_16396 = (new Array(n));var inst_16379 = inst_16396;var inst_16380 = (0);var state_16415__$1 = (function (){var statearr_16427 = state_16415;(statearr_16427[(10)] = inst_16395);
(statearr_16427[(7)] = inst_16380);
(statearr_16427[(8)] = inst_16379);
return statearr_16427;
})();var statearr_16428_16454 = state_16415__$1;(statearr_16428_16454[(2)] = null);
(statearr_16428_16454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (9)))
{var inst_16379 = (state_16415[(8)]);var inst_16393 = cljs.core.vec.call(null,inst_16379);var state_16415__$1 = state_16415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16415__$1,(11),out,inst_16393);
} else
{if((state_val_16416 === (5)))
{var inst_16383 = (state_16415[(9)]);var inst_16380 = (state_16415[(7)]);var inst_16388 = (state_16415[(11)]);var inst_16379 = (state_16415[(8)]);var inst_16387 = (inst_16379[inst_16380] = inst_16383);var inst_16388__$1 = (inst_16380 + (1));var inst_16389 = (inst_16388__$1 < n);var state_16415__$1 = (function (){var statearr_16429 = state_16415;(statearr_16429[(12)] = inst_16387);
(statearr_16429[(11)] = inst_16388__$1);
return statearr_16429;
})();if(cljs.core.truth_(inst_16389))
{var statearr_16430_16455 = state_16415__$1;(statearr_16430_16455[(1)] = (8));
} else
{var statearr_16431_16456 = state_16415__$1;(statearr_16431_16456[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (14)))
{var inst_16408 = (state_16415[(2)]);var inst_16409 = cljs.core.async.close_BANG_.call(null,out);var state_16415__$1 = (function (){var statearr_16433 = state_16415;(statearr_16433[(13)] = inst_16408);
return statearr_16433;
})();var statearr_16434_16457 = state_16415__$1;(statearr_16434_16457[(2)] = inst_16409);
(statearr_16434_16457[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (10)))
{var inst_16399 = (state_16415[(2)]);var state_16415__$1 = state_16415;var statearr_16435_16458 = state_16415__$1;(statearr_16435_16458[(2)] = inst_16399);
(statearr_16435_16458[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16416 === (8)))
{var inst_16388 = (state_16415[(11)]);var inst_16379 = (state_16415[(8)]);var tmp16432 = inst_16379;var inst_16379__$1 = tmp16432;var inst_16380 = inst_16388;var state_16415__$1 = (function (){var statearr_16436 = state_16415;(statearr_16436[(7)] = inst_16380);
(statearr_16436[(8)] = inst_16379__$1);
return statearr_16436;
})();var statearr_16437_16459 = state_16415__$1;(statearr_16437_16459[(2)] = null);
(statearr_16437_16459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___16445,out))
;return ((function (switch__10924__auto__,c__10989__auto___16445,out){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_16441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16441[(0)] = state_machine__10925__auto__);
(statearr_16441[(1)] = (1));
return statearr_16441;
});
var state_machine__10925__auto____1 = (function (state_16415){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_16415);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e16442){if((e16442 instanceof Object))
{var ex__10928__auto__ = e16442;var statearr_16443_16460 = state_16415;(statearr_16443_16460[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16442;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16461 = state_16415;
state_16415 = G__16461;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_16415){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_16415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___16445,out))
})();var state__10991__auto__ = (function (){var statearr_16444 = f__10990__auto__.call(null);(statearr_16444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___16445);
return statearr_16444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___16445,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10989__auto___16604 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto___16604,out){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto___16604,out){
return (function (state_16574){var state_val_16575 = (state_16574[(1)]);if((state_val_16575 === (7)))
{var inst_16570 = (state_16574[(2)]);var state_16574__$1 = state_16574;var statearr_16576_16605 = state_16574__$1;(statearr_16576_16605[(2)] = inst_16570);
(statearr_16576_16605[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (1)))
{var inst_16533 = [];var inst_16534 = inst_16533;var inst_16535 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16574__$1 = (function (){var statearr_16577 = state_16574;(statearr_16577[(7)] = inst_16535);
(statearr_16577[(8)] = inst_16534);
return statearr_16577;
})();var statearr_16578_16606 = state_16574__$1;(statearr_16578_16606[(2)] = null);
(statearr_16578_16606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (4)))
{var inst_16538 = (state_16574[(9)]);var inst_16538__$1 = (state_16574[(2)]);var inst_16539 = (inst_16538__$1 == null);var inst_16540 = cljs.core.not.call(null,inst_16539);var state_16574__$1 = (function (){var statearr_16579 = state_16574;(statearr_16579[(9)] = inst_16538__$1);
return statearr_16579;
})();if(inst_16540)
{var statearr_16580_16607 = state_16574__$1;(statearr_16580_16607[(1)] = (5));
} else
{var statearr_16581_16608 = state_16574__$1;(statearr_16581_16608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (15)))
{var inst_16564 = (state_16574[(2)]);var state_16574__$1 = state_16574;var statearr_16582_16609 = state_16574__$1;(statearr_16582_16609[(2)] = inst_16564);
(statearr_16582_16609[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (13)))
{var state_16574__$1 = state_16574;var statearr_16583_16610 = state_16574__$1;(statearr_16583_16610[(2)] = null);
(statearr_16583_16610[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (6)))
{var inst_16534 = (state_16574[(8)]);var inst_16559 = inst_16534.length;var inst_16560 = (inst_16559 > (0));var state_16574__$1 = state_16574;if(cljs.core.truth_(inst_16560))
{var statearr_16584_16611 = state_16574__$1;(statearr_16584_16611[(1)] = (12));
} else
{var statearr_16585_16612 = state_16574__$1;(statearr_16585_16612[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (3)))
{var inst_16572 = (state_16574[(2)]);var state_16574__$1 = state_16574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16574__$1,inst_16572);
} else
{if((state_val_16575 === (12)))
{var inst_16534 = (state_16574[(8)]);var inst_16562 = cljs.core.vec.call(null,inst_16534);var state_16574__$1 = state_16574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16574__$1,(15),out,inst_16562);
} else
{if((state_val_16575 === (2)))
{var state_16574__$1 = state_16574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16574__$1,(4),ch);
} else
{if((state_val_16575 === (11)))
{var inst_16542 = (state_16574[(10)]);var inst_16538 = (state_16574[(9)]);var inst_16552 = (state_16574[(2)]);var inst_16553 = [];var inst_16554 = inst_16553.push(inst_16538);var inst_16534 = inst_16553;var inst_16535 = inst_16542;var state_16574__$1 = (function (){var statearr_16586 = state_16574;(statearr_16586[(11)] = inst_16552);
(statearr_16586[(7)] = inst_16535);
(statearr_16586[(8)] = inst_16534);
(statearr_16586[(12)] = inst_16554);
return statearr_16586;
})();var statearr_16587_16613 = state_16574__$1;(statearr_16587_16613[(2)] = null);
(statearr_16587_16613[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (9)))
{var inst_16534 = (state_16574[(8)]);var inst_16550 = cljs.core.vec.call(null,inst_16534);var state_16574__$1 = state_16574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16574__$1,(11),out,inst_16550);
} else
{if((state_val_16575 === (5)))
{var inst_16542 = (state_16574[(10)]);var inst_16538 = (state_16574[(9)]);var inst_16535 = (state_16574[(7)]);var inst_16542__$1 = f.call(null,inst_16538);var inst_16543 = cljs.core._EQ_.call(null,inst_16542__$1,inst_16535);var inst_16544 = cljs.core.keyword_identical_QMARK_.call(null,inst_16535,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16545 = (inst_16543) || (inst_16544);var state_16574__$1 = (function (){var statearr_16588 = state_16574;(statearr_16588[(10)] = inst_16542__$1);
return statearr_16588;
})();if(cljs.core.truth_(inst_16545))
{var statearr_16589_16614 = state_16574__$1;(statearr_16589_16614[(1)] = (8));
} else
{var statearr_16590_16615 = state_16574__$1;(statearr_16590_16615[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (14)))
{var inst_16567 = (state_16574[(2)]);var inst_16568 = cljs.core.async.close_BANG_.call(null,out);var state_16574__$1 = (function (){var statearr_16592 = state_16574;(statearr_16592[(13)] = inst_16567);
return statearr_16592;
})();var statearr_16593_16616 = state_16574__$1;(statearr_16593_16616[(2)] = inst_16568);
(statearr_16593_16616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (10)))
{var inst_16557 = (state_16574[(2)]);var state_16574__$1 = state_16574;var statearr_16594_16617 = state_16574__$1;(statearr_16594_16617[(2)] = inst_16557);
(statearr_16594_16617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16575 === (8)))
{var inst_16542 = (state_16574[(10)]);var inst_16538 = (state_16574[(9)]);var inst_16534 = (state_16574[(8)]);var inst_16547 = inst_16534.push(inst_16538);var tmp16591 = inst_16534;var inst_16534__$1 = tmp16591;var inst_16535 = inst_16542;var state_16574__$1 = (function (){var statearr_16595 = state_16574;(statearr_16595[(14)] = inst_16547);
(statearr_16595[(7)] = inst_16535);
(statearr_16595[(8)] = inst_16534__$1);
return statearr_16595;
})();var statearr_16596_16618 = state_16574__$1;(statearr_16596_16618[(2)] = null);
(statearr_16596_16618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10989__auto___16604,out))
;return ((function (switch__10924__auto__,c__10989__auto___16604,out){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_16600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16600[(0)] = state_machine__10925__auto__);
(statearr_16600[(1)] = (1));
return statearr_16600;
});
var state_machine__10925__auto____1 = (function (state_16574){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_16574);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e16601){if((e16601 instanceof Object))
{var ex__10928__auto__ = e16601;var statearr_16602_16619 = state_16574;(statearr_16602_16619[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16601;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16620 = state_16574;
state_16574 = G__16620;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_16574){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_16574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto___16604,out))
})();var state__10991__auto__ = (function (){var statearr_16603 = f__10990__auto__.call(null);(statearr_16603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto___16604);
return statearr_16603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto___16604,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
