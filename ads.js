var ads = [
  '<a href="https://grantcardone.com/?rfsn=853345.4464e" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/cardoneshop.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://grantcardone.com/products/grant-cardone-sales-training-university-2?rfsn=853345.4464e" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/cardoneuniversity.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.amazon.com/gp/gc?&tag=mikethedj4-20&camp=212333&creative=380405&linkCode=ur1&adid=1Y6QK5ZMYH1ZA2P9HXF0&" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/amazongiftcards.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="http://www.swagbucks.com/refer/justicerises" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/swagbucks.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.paypal.com/us/webapps/mpp/invite?token=kepXqLE2LN0" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/paypal.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://cash.me/app/HMRRQXC" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/squarecash.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.taskrabbit.com/r/360a3/try" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/taskrabbit.svg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://get.uber.com/invite/michaels41699ue" target="_blank"><img src="https://michaelsboost.github.io/DynamicJSAds/images/uber.svg" style="max-width: 728px; width: 100%;"></a>'
]

var randomNumber = Math.floor(Math.random() * (ads.length));

function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

// Handler that holds images
var newEl = document.createElement('div.ads-section');
newEl.style.textAlign = "center";
newEl.innerHTML = ads[randomNumber];

var ref = document.querySelector('script#insertAds');

insertBefore(newEl, ref);