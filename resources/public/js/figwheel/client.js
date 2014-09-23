// Compiled by ClojureScript 0.0-2342
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13602,args){var map__13604 = p__13602;var map__13604__$1 = ((cljs.core.seq_QMARK_.call(null,map__13604))?cljs.core.apply.call(null,cljs.core.hash_map,map__13604):map__13604);var debug = cljs.core.get.call(null,map__13604__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13602,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13602,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13605){
var p__13602 = cljs.core.first(arglist__13605);
var args = cljs.core.rest(arglist__13605);
return log__delegate(p__13602,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13606){var map__13608 = p__13606;var map__13608__$1 = ((cljs.core.seq_QMARK_.call(null,map__13608))?cljs.core.apply.call(null,cljs.core.hash_map,map__13608):map__13608);var websocket_url = cljs.core.get.call(null,map__13608__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13609,callback){var map__13611 = p__13609;var map__13611__$1 = ((cljs.core.seq_QMARK_.call(null,map__13611))?cljs.core.apply.call(null,cljs.core.hash_map,map__13611):map__13611);var msg = map__13611__$1;var dependency_file = cljs.core.get.call(null,map__13611__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__13611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__13611__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__8558__auto__ = dependency_file;if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13611,map__13611__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13611,map__13611__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13612,p__13613){var map__13616 = p__13612;var map__13616__$1 = ((cljs.core.seq_QMARK_.call(null,map__13616))?cljs.core.apply.call(null,cljs.core.hash_map,map__13616):map__13616);var opts = map__13616__$1;var url_rewriter = cljs.core.get.call(null,map__13616__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__13617 = p__13613;var map__13617__$1 = ((cljs.core.seq_QMARK_.call(null,map__13617))?cljs.core.apply.call(null,cljs.core.hash_map,map__13617):map__13617);var d = map__13617__$1;var file = cljs.core.get.call(null,map__13617__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13618,p__13619){var map__13661 = p__13618;var map__13661__$1 = ((cljs.core.seq_QMARK_.call(null,map__13661))?cljs.core.apply.call(null,cljs.core.hash_map,map__13661):map__13661);var opts = map__13661__$1;var on_jsload = cljs.core.get.call(null,map__13661__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__13661__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__13662 = p__13619;var map__13662__$1 = ((cljs.core.seq_QMARK_.call(null,map__13662))?cljs.core.apply.call(null,cljs.core.hash_map,map__13662):map__13662);var files = cljs.core.get.call(null,map__13662__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__10989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto__,map__13661,map__13661__$1,opts,on_jsload,before_jsload,map__13662,map__13662__$1,files){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto__,map__13661,map__13661__$1,opts,on_jsload,before_jsload,map__13662,map__13662__$1,files){
return (function (state_13685){var state_val_13686 = (state_13685[(1)]);if((state_val_13686 === (6)))
{var inst_13667 = (state_13685[(7)]);var inst_13676 = (state_13685[(2)]);var inst_13677 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13678 = [inst_13667];var inst_13679 = (new cljs.core.PersistentVector(null,1,(5),inst_13677,inst_13678,null));var inst_13680 = cljs.core.apply.call(null,on_jsload,inst_13679);var state_13685__$1 = (function (){var statearr_13687 = state_13685;(statearr_13687[(8)] = inst_13676);
return statearr_13687;
})();var statearr_13688_13702 = state_13685__$1;(statearr_13688_13702[(2)] = inst_13680);
(statearr_13688_13702[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13686 === (5)))
{var inst_13683 = (state_13685[(2)]);var state_13685__$1 = state_13685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13685__$1,inst_13683);
} else
{if((state_val_13686 === (4)))
{var state_13685__$1 = state_13685;var statearr_13689_13703 = state_13685__$1;(statearr_13689_13703[(2)] = null);
(statearr_13689_13703[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13686 === (3)))
{var inst_13667 = (state_13685[(7)]);var inst_13670 = console.debug("Figwheel: loaded these files");var inst_13671 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13667);var inst_13672 = cljs.core.prn_str.call(null,inst_13671);var inst_13673 = console.log(inst_13672);var inst_13674 = cljs.core.async.timeout.call(null,(10));var state_13685__$1 = (function (){var statearr_13690 = state_13685;(statearr_13690[(9)] = inst_13670);
(statearr_13690[(10)] = inst_13673);
return statearr_13690;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13685__$1,(6),inst_13674);
} else
{if((state_val_13686 === (2)))
{var inst_13667 = (state_13685[(7)]);var inst_13667__$1 = (state_13685[(2)]);var inst_13668 = cljs.core.not_empty.call(null,inst_13667__$1);var state_13685__$1 = (function (){var statearr_13691 = state_13685;(statearr_13691[(7)] = inst_13667__$1);
return statearr_13691;
})();if(cljs.core.truth_(inst_13668))
{var statearr_13692_13704 = state_13685__$1;(statearr_13692_13704[(1)] = (3));
} else
{var statearr_13693_13705 = state_13685__$1;(statearr_13693_13705[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13686 === (1)))
{var inst_13663 = before_jsload.call(null,files);var inst_13664 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13665 = figwheel.client.load_all_js_files.call(null,inst_13664);var state_13685__$1 = (function (){var statearr_13694 = state_13685;(statearr_13694[(11)] = inst_13663);
return statearr_13694;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13685__$1,(2),inst_13665);
} else
{return null;
}
}
}
}
}
}
});})(c__10989__auto__,map__13661,map__13661__$1,opts,on_jsload,before_jsload,map__13662,map__13662__$1,files))
;return ((function (switch__10924__auto__,c__10989__auto__,map__13661,map__13661__$1,opts,on_jsload,before_jsload,map__13662,map__13662__$1,files){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_13698 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13698[(0)] = state_machine__10925__auto__);
(statearr_13698[(1)] = (1));
return statearr_13698;
});
var state_machine__10925__auto____1 = (function (state_13685){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_13685);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e13699){if((e13699 instanceof Object))
{var ex__10928__auto__ = e13699;var statearr_13700_13706 = state_13685;(statearr_13700_13706[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13699;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13707 = state_13685;
state_13685 = G__13707;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_13685){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_13685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto__,map__13661,map__13661__$1,opts,on_jsload,before_jsload,map__13662,map__13662__$1,files))
})();var state__10991__auto__ = (function (){var statearr_13701 = f__10990__auto__.call(null);(statearr_13701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto__);
return statearr_13701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto__,map__13661,map__13661__$1,opts,on_jsload,before_jsload,map__13662,map__13662__$1,files))
);
return c__10989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13708,link_href){var map__13710 = p__13708;var map__13710__$1 = ((cljs.core.seq_QMARK_.call(null,map__13710))?cljs.core.apply.call(null,cljs.core.hash_map,map__13710):map__13710);var request_url = cljs.core.get.call(null,map__13710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto__,parent){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto__,parent){
return (function (state_13731){var state_val_13732 = (state_13731[(1)]);if((state_val_13732 === (2)))
{var inst_13728 = (state_13731[(2)]);var inst_13729 = parent.removeChild(orig_link);var state_13731__$1 = (function (){var statearr_13733 = state_13731;(statearr_13733[(7)] = inst_13728);
return statearr_13733;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13731__$1,inst_13729);
} else
{if((state_val_13732 === (1)))
{var inst_13726 = cljs.core.async.timeout.call(null,(200));var state_13731__$1 = state_13731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13731__$1,(2),inst_13726);
} else
{return null;
}
}
});})(c__10989__auto__,parent))
;return ((function (switch__10924__auto__,c__10989__auto__,parent){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_13737 = [null,null,null,null,null,null,null,null];(statearr_13737[(0)] = state_machine__10925__auto__);
(statearr_13737[(1)] = (1));
return statearr_13737;
});
var state_machine__10925__auto____1 = (function (state_13731){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_13731);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e13738){if((e13738 instanceof Object))
{var ex__10928__auto__ = e13738;var statearr_13739_13741 = state_13731;(statearr_13739_13741[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13738;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13742 = state_13731;
state_13731 = G__13742;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_13731){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_13731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto__,parent))
})();var state__10991__auto__ = (function (){var statearr_13740 = f__10990__auto__.call(null);(statearr_13740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto__);
return statearr_13740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto__,parent))
);
return c__10989__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13743){var map__13745 = p__13743;var map__13745__$1 = ((cljs.core.seq_QMARK_.call(null,map__13745))?cljs.core.apply.call(null,cljs.core.hash_map,map__13745):map__13745);var f_data = map__13745__$1;var request_url = cljs.core.get.call(null,map__13745__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13746,files_msg){var map__13768 = p__13746;var map__13768__$1 = ((cljs.core.seq_QMARK_.call(null,map__13768))?cljs.core.apply.call(null,cljs.core.hash_map,map__13768):map__13768);var opts = map__13768__$1;var on_cssload = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13769_13789 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13770_13790 = null;var count__13771_13791 = (0);var i__13772_13792 = (0);while(true){
if((i__13772_13792 < count__13771_13791))
{var f_13793 = cljs.core._nth.call(null,chunk__13770_13790,i__13772_13792);figwheel.client.reload_css_file.call(null,f_13793);
{
var G__13794 = seq__13769_13789;
var G__13795 = chunk__13770_13790;
var G__13796 = count__13771_13791;
var G__13797 = (i__13772_13792 + (1));
seq__13769_13789 = G__13794;
chunk__13770_13790 = G__13795;
count__13771_13791 = G__13796;
i__13772_13792 = G__13797;
continue;
}
} else
{var temp__4126__auto___13798 = cljs.core.seq.call(null,seq__13769_13789);if(temp__4126__auto___13798)
{var seq__13769_13799__$1 = temp__4126__auto___13798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13769_13799__$1))
{var c__9327__auto___13800 = cljs.core.chunk_first.call(null,seq__13769_13799__$1);{
var G__13801 = cljs.core.chunk_rest.call(null,seq__13769_13799__$1);
var G__13802 = c__9327__auto___13800;
var G__13803 = cljs.core.count.call(null,c__9327__auto___13800);
var G__13804 = (0);
seq__13769_13789 = G__13801;
chunk__13770_13790 = G__13802;
count__13771_13791 = G__13803;
i__13772_13792 = G__13804;
continue;
}
} else
{var f_13805 = cljs.core.first.call(null,seq__13769_13799__$1);figwheel.client.reload_css_file.call(null,f_13805);
{
var G__13806 = cljs.core.next.call(null,seq__13769_13799__$1);
var G__13807 = null;
var G__13808 = (0);
var G__13809 = (0);
seq__13769_13789 = G__13806;
chunk__13770_13790 = G__13807;
count__13771_13791 = G__13808;
i__13772_13792 = G__13809;
continue;
}
}
} else
{}
}
break;
}
var c__10989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10989__auto__,map__13768,map__13768__$1,opts,on_cssload){
return (function (){var f__10990__auto__ = (function (){var switch__10924__auto__ = ((function (c__10989__auto__,map__13768,map__13768__$1,opts,on_cssload){
return (function (state_13779){var state_val_13780 = (state_13779[(1)]);if((state_val_13780 === (2)))
{var inst_13775 = (state_13779[(2)]);var inst_13776 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13777 = on_cssload.call(null,inst_13776);var state_13779__$1 = (function (){var statearr_13781 = state_13779;(statearr_13781[(7)] = inst_13775);
return statearr_13781;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13779__$1,inst_13777);
} else
{if((state_val_13780 === (1)))
{var inst_13773 = cljs.core.async.timeout.call(null,(100));var state_13779__$1 = state_13779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13779__$1,(2),inst_13773);
} else
{return null;
}
}
});})(c__10989__auto__,map__13768,map__13768__$1,opts,on_cssload))
;return ((function (switch__10924__auto__,c__10989__auto__,map__13768,map__13768__$1,opts,on_cssload){
return (function() {
var state_machine__10925__auto__ = null;
var state_machine__10925__auto____0 = (function (){var statearr_13785 = [null,null,null,null,null,null,null,null];(statearr_13785[(0)] = state_machine__10925__auto__);
(statearr_13785[(1)] = (1));
return statearr_13785;
});
var state_machine__10925__auto____1 = (function (state_13779){while(true){
var ret_value__10926__auto__ = (function (){try{while(true){
var result__10927__auto__ = switch__10924__auto__.call(null,state_13779);if(cljs.core.keyword_identical_QMARK_.call(null,result__10927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10927__auto__;
}
break;
}
}catch (e13786){if((e13786 instanceof Object))
{var ex__10928__auto__ = e13786;var statearr_13787_13810 = state_13779;(statearr_13787_13810[(5)] = ex__10928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13779);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13811 = state_13779;
state_13779 = G__13811;
continue;
}
} else
{return ret_value__10926__auto__;
}
break;
}
});
state_machine__10925__auto__ = function(state_13779){
switch(arguments.length){
case 0:
return state_machine__10925__auto____0.call(this);
case 1:
return state_machine__10925__auto____1.call(this,state_13779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10925__auto____0;
state_machine__10925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10925__auto____1;
return state_machine__10925__auto__;
})()
;})(switch__10924__auto__,c__10989__auto__,map__13768,map__13768__$1,opts,on_cssload))
})();var state__10991__auto__ = (function (){var statearr_13788 = f__10990__auto__.call(null);(statearr_13788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10989__auto__);
return statearr_13788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10991__auto__);
});})(c__10989__auto__,map__13768,map__13768__$1,opts,on_cssload))
);
return c__10989__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13812){var map__13817 = p__13812;var map__13817__$1 = ((cljs.core.seq_QMARK_.call(null,map__13817))?cljs.core.apply.call(null,cljs.core.hash_map,map__13817):map__13817);var opts = map__13817__$1;var on_compile_fail = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13817__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13818 = cljs.core._EQ_;var expr__13819 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13818.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13819)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13818.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13819)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13818.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13819)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13817,map__13817__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13824 = {"detail":url};return obj13824;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13825){var map__13827 = p__13825;var map__13827__$1 = ((cljs.core.seq_QMARK_.call(null,map__13827))?cljs.core.apply.call(null,cljs.core.hash_map,map__13827):map__13827);var class$ = cljs.core.get.call(null,map__13827__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13827__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13828){var map__13834 = p__13828;var map__13834__$1 = ((cljs.core.seq_QMARK_.call(null,map__13834))?cljs.core.apply.call(null,cljs.core.hash_map,map__13834):map__13834);var ed = map__13834__$1;var exception_data = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__13835_13839 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13836_13840 = null;var count__13837_13841 = (0);var i__13838_13842 = (0);while(true){
if((i__13838_13842 < count__13837_13841))
{var msg_13843 = cljs.core._nth.call(null,chunk__13836_13840,i__13838_13842);console.log(msg_13843);
{
var G__13844 = seq__13835_13839;
var G__13845 = chunk__13836_13840;
var G__13846 = count__13837_13841;
var G__13847 = (i__13838_13842 + (1));
seq__13835_13839 = G__13844;
chunk__13836_13840 = G__13845;
count__13837_13841 = G__13846;
i__13838_13842 = G__13847;
continue;
}
} else
{var temp__4126__auto___13848 = cljs.core.seq.call(null,seq__13835_13839);if(temp__4126__auto___13848)
{var seq__13835_13849__$1 = temp__4126__auto___13848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13835_13849__$1))
{var c__9327__auto___13850 = cljs.core.chunk_first.call(null,seq__13835_13849__$1);{
var G__13851 = cljs.core.chunk_rest.call(null,seq__13835_13849__$1);
var G__13852 = c__9327__auto___13850;
var G__13853 = cljs.core.count.call(null,c__9327__auto___13850);
var G__13854 = (0);
seq__13835_13839 = G__13851;
chunk__13836_13840 = G__13852;
count__13837_13841 = G__13853;
i__13838_13842 = G__13854;
continue;
}
} else
{var msg_13855 = cljs.core.first.call(null,seq__13835_13849__$1);console.log(msg_13855);
{
var G__13856 = cljs.core.next.call(null,seq__13835_13849__$1);
var G__13857 = null;
var G__13858 = (0);
var G__13859 = (0);
seq__13835_13839 = G__13856;
chunk__13836_13840 = G__13857;
count__13837_13841 = G__13858;
i__13838_13842 = G__13859;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__8558__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13860){var map__13862 = p__13860;var map__13862__$1 = ((cljs.core.seq_QMARK_.call(null,map__13862))?cljs.core.apply.call(null,cljs.core.hash_map,map__13862):map__13862);var opts = map__13862__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13860 = null;if (arguments.length > 0) {
  p__13860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13860);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13863){
var p__13860 = cljs.core.seq(arglist__13863);
return watch_and_reload__delegate(p__13860);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
