// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
cljs.core.enable_console_print_BANG_();
var c_14314 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var start__9344__auto___14315 = cljs.core.system_time();
var ret__9345__auto___14316 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9156__auto__ = ((function (start__9344__auto___14315,c_14314){
return (function app$main$iter__14310(s__14311){
return (new cljs.core.LazySeq(null,((function (start__9344__auto___14315,c_14314){
return (function (){
var s__14311__$1 = s__14311;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14311__$1);
if(temp__5457__auto__){
var s__14311__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14311__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__14311__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__14313 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__14312 = (0);
while(true){
if((i__14312 < size__9155__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__14312);
cljs.core.chunk_append(b__14313,cljs.core.reset_BANG_(c_14314,x));

var G__14317 = (i__14312 + (1));
i__14312 = G__14317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14313),app$main$iter__14310(cljs.core.chunk_rest(s__14311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14313),null);
}
} else {
var x = cljs.core.first(s__14311__$2);
return cljs.core.cons(cljs.core.reset_BANG_(c_14314,x),app$main$iter__14310(cljs.core.rest(s__14311__$2)));
}
} else {
return null;
}
break;
}
});})(start__9344__auto___14315,c_14314))
,null,null));
});})(start__9344__auto___14315,c_14314))
;
return iter__9156__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(1000)));
})());
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__9344__auto___14315).toFixed((6)))," msecs"].join('')], 0));

var a_14322 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var start__9344__auto___14323 = cljs.core.system_time();
var ret__9345__auto___14324 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9156__auto__ = ((function (start__9344__auto___14323,a_14322){
return (function app$main$iter__14318(s__14319){
return (new cljs.core.LazySeq(null,((function (start__9344__auto___14323,a_14322){
return (function (){
var s__14319__$1 = s__14319;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14319__$1);
if(temp__5457__auto__){
var s__14319__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14319__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__14319__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__14321 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__14320 = (0);
while(true){
if((i__14320 < size__9155__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__14320);
cljs.core.chunk_append(b__14321,cljs.core.reset_BANG_(a_14322,x));

var G__14325 = (i__14320 + (1));
i__14320 = G__14325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14321),app$main$iter__14318(cljs.core.chunk_rest(s__14319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14321),null);
}
} else {
var x = cljs.core.first(s__14319__$2);
return cljs.core.cons(cljs.core.reset_BANG_(a_14322,x),app$main$iter__14318(cljs.core.rest(s__14319__$2)));
}
} else {
return null;
}
break;
}
});})(start__9344__auto___14323,a_14322))
,null,null));
});})(start__9344__auto___14323,a_14322))
;
return iter__9156__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(1000)));
})());
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__9344__auto___14323).toFixed((6)))," msecs"].join('')], 0));

