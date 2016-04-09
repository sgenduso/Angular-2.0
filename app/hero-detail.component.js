System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var HeroDetailComponent;
    return {
        setters:[],
        execute: function() {
            ngOnInit();
            {
                var id = +this._routeParams.get('id');
                this._heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map