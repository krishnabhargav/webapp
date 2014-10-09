// Compiled by ClojureScript 0.0-2342
goog.provide('webapp.client');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:51143/7404/repl");
cljs.core.enable_console_print_BANG_.call(null);
webapp.client.by = (function by(id){return document.getElementById(id);
});
webapp.client.log = (function log(message){return console.log(message);
});
webapp.client.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lion","Zebra","Buffalo","Antelope"], null)], null));
om.core.root.call(null,(function (app,owner){if(typeof webapp.client.t6342 !== 'undefined')
{} else
{
/**
* @constructor
*/
webapp.client.t6342 = (function (owner,app,meta6343){
this.owner = owner;
this.app = app;
this.meta6343 = meta6343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webapp.client.t6342.cljs$lang$type = true;
webapp.client.t6342.cljs$lang$ctorStr = "webapp.client/t6342";
webapp.client.t6342.cljs$lang$ctorPrWriter = (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"webapp.client/t6342");
});
webapp.client.t6342.prototype.om$core$IRender$ = true;
webapp.client.t6342.prototype.om$core$IRender$render$arity$1 = (function (this__5225__auto__){var self__ = this;
var this__5225__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this__5225__auto____$1){
return (function (text){return React.DOM.li(null,text);
});})(this__5225__auto____$1))
,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
webapp.client.t6342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6344){var self__ = this;
var _6344__$1 = this;return self__.meta6343;
});
webapp.client.t6342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6344,meta6343__$1){var self__ = this;
var _6344__$1 = this;return (new webapp.client.t6342(self__.owner,self__.app,meta6343__$1));
});
webapp.client.__GT_t6342 = (function __GT_t6342(owner__$1,app__$1,meta6343){return (new webapp.client.t6342(owner__$1,app__$1,meta6343));
});
}
return (new webapp.client.t6342(owner,app,null));
}),webapp.client.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),webapp.client.by.call(null,"content")], null));
om.core.root.call(null,(function (app,owner){if(typeof webapp.client.t6345 !== 'undefined')
{} else
{
/**
* @constructor
*/
webapp.client.t6345 = (function (owner,app,meta6346){
this.owner = owner;
this.app = app;
this.meta6346 = meta6346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webapp.client.t6345.cljs$lang$type = true;
webapp.client.t6345.cljs$lang$ctorStr = "webapp.client/t6345";
webapp.client.t6345.cljs$lang$ctorPrWriter = (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"webapp.client/t6345");
});
webapp.client.t6345.prototype.om$core$IRender$ = true;
webapp.client.t6345.prototype.om$core$IRender$render$arity$1 = (function (this__5225__auto__){var self__ = this;
var this__5225__auto____$1 = this;return React.DOM.form({"className": "form-horizontal"},React.DOM.div({"className": "control-group"},React.DOM.label({"for": "input-email", "className": "control-label"},"Email"),React.DOM.div({"className": "controls"},om.dom.input.call(null,{"placeholder": "enter email", "id": "input-email", "type": "text"}))),React.DOM.div({"className": "control-group"},React.DOM.label({"for": "input-password", "className": "control-label"},"Password"),React.DOM.div({"className": "controls"},om.dom.input.call(null,{"placeholder": "enter password", "id": "input-password", "type": "password"}))));
});
webapp.client.t6345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6347){var self__ = this;
var _6347__$1 = this;return self__.meta6346;
});
webapp.client.t6345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6347,meta6346__$1){var self__ = this;
var _6347__$1 = this;return (new webapp.client.t6345(self__.owner,self__.app,meta6346__$1));
});
webapp.client.__GT_t6345 = (function __GT_t6345(owner__$1,app__$1,meta6346){return (new webapp.client.t6345(owner__$1,app__$1,meta6346));
});
}
return (new webapp.client.t6345(owner,app,null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),webapp.client.by.call(null,"content")], null));
