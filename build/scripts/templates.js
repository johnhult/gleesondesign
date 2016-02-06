this["GD"] = this["GD"] || {};
this["GD"]["templates"] = this["GD"]["templates"] || {};
this["GD"]["templates"]["aboutMe"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"top-header\">\n	<h1>Hello!</h1>\n	<div class=\"image-holder\">\n		<img src=\"img/gleeson/face.jpg\">\n	</div>\n	<h2>my name is Christoffer Gleeson</h2>\n</div>";
},"useData":true});
this["GD"]["templates"]["architecture"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "			<article class=\"chair-or-stuff\">\n				"
    + ((stack1 = ((helper = (helper = helpers.articleName || (depth0 != null ? depth0.articleName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n				"
    + ((stack1 = ((helper = (helper = helpers.articleText || (depth0 != null ? depth0.articleText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n			</article>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"architecture-main\">\n	<aside class=\"left-sidebar\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.architectureArticle : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</aside>\n	<section class=\"image-preview\">\n		<div class=\"left-step-wrapper\">\n			<div class=\"left-step-button\">\n				<div class=\"left-step-image\"></div>\n			</div>\n		</div>\n		<div class=\"art1-images art-image\">\n			<div class=\"art1-image-content image-content\"></div>\n		</div>\n		<div class=\"art2-images art-image\">\n			<div class=\"art2-image-content image-content\"></div>\n		</div>\n		<div class=\"art3-images art-image\">\n			<div class=\"art3-image-content image-content\"></div>\n		</div>\n		<div class=\"art4-images art-image\">\n			<div class=\"art4-image-content image-content\"></div>			\n		</div>\n		<div class=\"right-step-wrapper\">\n			<div class=\"right-step-button\">\n				<div class=\"right-step-image\"></div>\n			</div>\n		</div>\n	</section>\n</section>";
},"useData":true});
this["GD"]["templates"]["frontPage"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"two-page\">\n	<section class=\"furniture half-two\">\n		<div class=\"front-header-wrapper\">\n			<h1>FRN</h1>\n			<div class=\"front-header-seperator\"></div>\n			<h2>furniture</h2>\n		</div>\n		<a class=\"inner-furniture-link\" href=\"#/furniture\">\n			<div class=\"inner-overlay-fade\"></div>\n			<div class=\"inner-furniture\"></div>\n		</a>\n	</section>\n	<section class=\"architecture half-two\">\n		<div class=\"front-header-wrapper\">\n			<h1>ARC</h1>\n			<div class=\"front-header-seperator\"></div>\n			<h2>architecture</h2>\n		</div>\n		<a class=\"inner-architecture-link\" href=\"#/architecture\">\n			<div class=\"inner-overlay-fade\"></div>\n			<div class=\"inner-architecture\"></div>\n		</a>\n	</section>\n</section>";
},"useData":true});
this["GD"]["templates"]["furniture"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "			<article class=\"chair-or-stuff\">\n				"
    + ((stack1 = ((helper = (helper = helpers.articleName || (depth0 != null ? depth0.articleName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n				<div class=\"article-seperator\"></div>\n				"
    + ((stack1 = ((helper = (helper = helpers.articleText || (depth0 != null ? depth0.articleText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n			</article>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"furniture-main\">\n	<div class=\"bg-logo-wrapper\">\n		<img class=\"bg-logo svg\" src=\"img/icons/gd-logo-icon.svg\">\n	</div>\n	<aside class=\"left-sidebar\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.furnitureArticle : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</aside>\n	<section class=\"image-preview furniture-images\">\n		<div class=\"left-step-wrapper\">\n			<div class=\"left-step-button\">\n				<img class=\"svg\" src=\"img/icons/arrow-pointer.svg\">\n				<div class=\"left-step-image\"></div>\n			</div>\n		</div>\n		<div class=\"art1-images art-image\">\n			<div class=\"art1-image-content image-content shown-img\"></div>\n		</div>\n		<div class=\"art2-images art-image\">\n			<div class=\"art2-image-content image-content\"></div>\n		</div>\n		<div class=\"art3-images art-image\">\n			<div class=\"art3-image-content image-content\"></div>\n		</div>\n		<div class=\"art4-images art-image\">\n			<div class=\"art4-image-content image-content\"></div>			\n		</div>\n		<div class=\"right-step-wrapper\">\n			<div class=\"right-step-button\">\n				<img class=\"svg\" src=\"img/icons/arrow-pointer.svg\">\n				<div class=\"right-step-image\"></div>\n			</div>\n		</div>\n	</section>\n</section>";
},"useData":true});