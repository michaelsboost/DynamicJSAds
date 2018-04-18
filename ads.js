var ads = [
  '<a href="https://grantcardone.com/?rfsn=853345.4464e" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/cardoneshop.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://grantcardone.com/products/grant-cardone-sales-training-university-2?rfsn=853345.4464e" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/cardoneuniversity.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.amazon.com/gp/gc?&tag=mikethedj4-20&camp=212333&creative=380405&linkCode=ur1&adid=1Y6QK5ZMYH1ZA2P9HXF0&" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/amazongiftcards.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="http://www.swagbucks.com/refer/justicerises" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/swagbucks.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.paypal.com/us/webapps/mpp/invite?token=kepXqLE2LN0" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/paypal.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://cash.me/app/HMRRQXC" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/squarecash.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.taskrabbit.com/r/360a3/try" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/taskrabbit.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://get.uber.com/invite/michaels41699ue" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/uber.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="http://animatron.com/wave?tap_a=19272-291192&tap_s=245506-aed048" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/animatronad.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.ebates.com/r/SCHWAR1559?eeid=28187"><img src="https://michaelsboost.github.io/DynamicJSAds/images/ebates.gif" style="max-width: 728px; width: 100%;"></a>',
  '<a href="http://www.vectorstock.com/a/4874110" target="_blank" title="VectorStock, the worlds best only vector graphics collection"><img src="http://www.vectorstock.com/img/banners/468x60_multi.gif" style="max-width: 468px; width: 100%;" /></a>',
  '<a href="https://webflow.com/?rfsn=1141243.a093a" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/webflow.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.doordash.com/consumer/referred/Michael-Schwartz-5023/" target="_blank" title="DoorDash, Claim Your $10 and Make the Order Now."><img src="https://michaelsboost.github.io/DynamicJSAds/images/doordash.svg" style="max-width: 728px; width: 100%;" /></a>',
  '<a href="https://bubble.is?ref=LDALCB3L" target="_blank" title="Bubble.is: Bubble introduces a new way to build a web application. It’s a point-and-click programming tool, entirely without code. Bubble hosts all applications on its cloud platform."><img src="https://michaelsboost.github.io/DynamicJSAds/images/bubble.svg" style="max-width: 728px; width: 100%;" /></a>'
]

var randomNumber = Math.floor(Math.random() * (ads.length));

function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

// Handler that holds images
var newEl = document.createElement('div');
newEl.className = "ads-section";
newEl.style.textAlign = "center";
newEl.innerHTML = ads[randomNumber];

var ref = document.querySelector('script#insertAds');

insertBefore(newEl, ref);