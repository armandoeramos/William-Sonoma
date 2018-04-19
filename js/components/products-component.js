function renderProducts(products){
	var template = $('#products-template').html();
  	Mustache.parse(template);   // optional, speeds up future uses
  	var rendered = Mustache.render(template, {"products": products});
  	
  	$('.products').html(rendered);
}

function processProductsJson(data) {
	for(i in data.groups) {
		if (data.groups[i].images.length > 0) {
			data.groups[i].hasCarousel = true;
		}
	}

	return data.groups;
}

function initProducts(data){
	products = processProductsJson(data);
	renderProducts(products);
}