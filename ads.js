var ads = [
  '<a href="https://grantcardone.com/?rfsn=853345.4464e" target="_blank"><img src="https://cdn.refersion.com/15398/creatives/04-06-17-03-17-36_store-728x90.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://grantcardone.com/products/grant-cardone-sales-training-university-2?rfsn=853345.4464e" target="_blank"><img src="https://cdn.refersion.com/15398/creatives/04-06-17-03-21-46_cu-13017-728x90.jpg" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.amazon.com/gp/gc?&tag=mikethedj4-20&camp=212333&creative=380405&linkCode=ur1&adid=1Y6QK5ZMYH1ZA2P9HXF0&" target="_blank"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2014/associates/generic/gc_gen_assoc-728x90.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.paypal.com/us/webapps/mpp/invite?token=kepXqLE2LN0" target="_blank"><img src="https://i.imgur.com/CZp3jX8.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://cash.me/app/HMRRQXC" target="_blank"><img src="https://i.imgur.com/E9jDZMA.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://www.taskrabbit.com/r/360a3/try" target="_blank"><img src="https://i.imgur.com/Hx2nwsB.png" style="max-width: 728px; width: 100%;"></a>',
  '<a href="https://get.uber.com/invite/michaels41699ue" target="_blank"><img src="https://i.imgur.com/6F9DSDj.png" style="max-width: 728px; width: 100%;"></a>'
]

var randomNumber = Math.floor(Math.random() * (ads.length));

function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

// example
var newEl = document.createElement('div');
newEl.innerHTML = ads[randomNumber];

var ref = document.querySelector('script#insertAds');

insertBefore(newEl, ref);
