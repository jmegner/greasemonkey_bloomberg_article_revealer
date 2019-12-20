// ==UserScript==
// @name        bloomberg_article_revealer
// @namespace   JacobEgner
// @version     0.1
// @description Reveals article when blocked by "To continue reading this article, you must..."
// @match       https://www.bloomberg.com/view/articles/*
// @run-at document-end
// ==/UserScript==

/*

the bloomberg page has an embedded script that assigns window._fence
to a function that does the modification of elements to hide the article
and put up the paywall notice;

<div class="middle-column">
  <div class="body-copy-v2 fence-body">
    <p>THIS PARAGRAPH IS VISIBLE</p>
    <p style="display: none;">THIS PARAGRAPH IS INVISIBLE</p>
  </div>
  <div class="paywall-inline-tout inlineTout__3bf4d347 ">paywall stuff...</div>
</div>
*/

console.log("jme begin");
unsafeWindow._fence = undefined;

/*
var paras = document.getElementsByTagName('p');
var numParasWithStyle = 0;

for(var paraIdx = 0; paraIdx < paras.length; paraIdx++)
{
  paras[paraIdx].removeAttribute("style");
  numParasWithStyle++;
}

console.info("numParas: " + paras.length);
console.info("numParasWithStyle: " + numParasWithStyle);
*/
