"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[421],{7421:(Y,C,u)=>{u.r(C),u.d(C,{ProductsModule:()=>l});var i=u(6895),c=u(3060),h=u(8505),t=u(4650),x=u(773),v=u(529);class d{constructor(){this.title=""}toUpper(){return this.title.toUpperCase()}toLower(){return this.title.toLowerCase()}}d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["custom-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"product-title"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._uU(1),t.qZA()),2&o&&(t.xp6(1),t.Oqu(n.title))},styles:[".product-title[_ngcontent-%COMP%]{font-size:18px;font-family:MullerBold,sans-serif;color:#382400}"]});class p{constructor(){this.count=0}}p.\u0275fac=function(o){return new(o||p)},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac});class s{transform(o,n){let r=o;return n.forEach(q=>{r=r.replace(new RegExp("[\u0410-\u042f\u0430-\u044f]*"+q+"[\u0430-\u044f]*","g"),z=>z.toUpperCase())}),r}}s.\u0275fac=function(o){return new(o||s)},s.\u0275pipe=t.Yjl({name:"wordUpper",type:s,pure:!0});const P=["elem"];function Z(e,o){if(1&e&&(t.TgZ(0,"div",8),t._UZ(1,"img",9),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.s9C("src",n.product.image,t.LSH)}}const y=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},M=function(e){return{product:e}},_=function(e){return["/products",e]};class m{constructor(o){this.CartProductService=o,this.addToCartEvent=new t.vpe,this.product={id:0,image:"",title:"",description:"",datetime:""}}}function O(e,o){1&e&&t._UZ(0,"product-card",6),2&e&&t.Q6J("product",o.$implicit)}function T(e,o){1&e&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}m.\u0275fac=function(o){return new(o||m)(t.Y36(p))},m.\u0275cmp=t.Xpm({type:m,selectors:[["product-card"]],viewQuery:function(o,n){if(1&o&&(t.Gf(d,5),t.Gf(P,5)),2&o){let r;t.iGM(r=t.CRH())&&(n.titleComponent=r.first),t.iGM(r=t.CRH())&&(n.elem=r.first)}},inputs:{product:"product"},outputs:{addToCartEvent:"addToCartEvent"},features:[t._Bn([p])],decls:13,vars:15,consts:[[1,"product"],["class","product-image",4,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"btn","btn-add-to-cart",3,"queryParams"],[1,"btn","btn-white",3,"routerLink"],[1,"product-image"],[3,"src"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.YNc(1,Z,2,1,"div",1),t._UZ(2,"custom-title",2),t.ALo(3,"uppercase"),t.TgZ(4,"div",3),t._uU(5),t.ALo(6,"wordUpper"),t.qZA(),t.TgZ(7,"div",4,5)(9,"a",6),t._uU(10,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA(),t.TgZ(11,"a",7),t._uU(12,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("ngIf",n.product.image),t.xp6(1),t.Q6J("title",t.lcZ(3,5,n.product.title)),t.xp6(3),t.Oqu(t.xi3(6,7,n.product.description,t.DdM(10,y))),t.xp6(4),t.Q6J("queryParams",t.VKq(11,M,n.product.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(13,_,n.product.id)))},dependencies:[i.O5,c.rH,d,i.gd,s],styles:[".product[_ngcontent-%COMP%]{padding:80px 0 120px}.product[_ngcontent-%COMP%]{width:282px;background-color:#fff;box-shadow:0 3px 13.8px 1.2px #98989833;text-align:center;padding:15px 20px;box-sizing:border-box;margin-top:24px}.product-image[_ngcontent-%COMP%]{height:180px;display:flex;align-items:center;justify-content:center}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.product-text[_ngcontent-%COMP%]{font-size:14px;color:#181a1a;line-height:1.286;height:49px;margin:14px 0 15px}.product-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:242px;height:50px;padding:17px}.product-action[_ngcontent-%COMP%]   .btn.btn-white[_ngcontent-%COMP%]{margin-top:10px}.product-action[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media screen and (max-width: 1229px){.products-items[_ngcontent-%COMP%]{justify-content:center}.product[_ngcontent-%COMP%]{margin:12px}}@media screen and (max-width: 1023px){.products[_ngcontent-%COMP%]{padding-top:0;padding-bottom:40px}}"]});class g{constructor(o,n,r){this.productService=o,this.http=n,this.router=r,this.products=[],this.loading=!1}ngOnInit(){this.loading=!0,this.productService.getProducts().pipe((0,h.b)(()=>{this.loading=!1})).subscribe({next:o=>{this.products=o,console.log("next")},error:o=>{console.log(o),this.router.navigate(["/"])}})}}function U(e,o){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.s9C("src",n.product.image,t.LSH)}}g.\u0275fac=function(o){return new(o||g)(t.Y36(x.M),t.Y36(v.eN),t.Y36(c.F0))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-products"]],decls:7,vars:2,consts:[["id","products",1,"products"],[1,"container"],["id","products-title",1,"products-title"],[1,"products-items"],[3,"product",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[3,"product"],[1,"loader-bg"],[1,"loader"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3," \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043f\u0438\u0446\u0446\u0443 "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,O,1,1,"product-card",4),t.qZA(),t.YNc(6,T,2,0,"div",5),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",n.loading))},dependencies:[i.sg,i.O5,m]});const A=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},w=function(e){return{product:e}};class f{constructor(o,n,r){this.activatedRoute=o,this.productService=n,this.router=r,this.product={id:0,image:"",title:"",description:"",datetime:""}}ngOnInit(){this.activatedRoute.params.subscribe(o=>{o.id&&this.productService.getProduct(+o.id).subscribe({next:n=>{this.product=n},error:n=>{this.router.navigate(["/"])}})})}}f.\u0275fac=function(o){return new(o||f)(t.Y36(c.gz),t.Y36(x.M),t.Y36(c.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-product"]],decls:15,vars:12,consts:[[1,"products"],[1,"container"],[1,"products-title"],[1,"product-item"],["class","product-image",4,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"btn","btn-add-to-cart",3,"queryParams"],[1,"product-image"],[3,"src"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3," \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0438\u0446\u0446\u044b "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,U,2,1,"div",4),t._UZ(6,"custom-title",5),t.ALo(7,"uppercase"),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"wordUpper"),t.qZA(),t.TgZ(11,"div",7,8)(13,"a",9),t._uU(14,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()),2&o&&(t.xp6(5),t.Q6J("ngIf",n.product.image),t.xp6(1),t.Q6J("title",t.lcZ(7,4,n.product.title)),t.xp6(3),t.Oqu(t.xi3(10,6,n.product.description,t.DdM(9,A))),t.xp6(4),t.Q6J("queryParams",t.VKq(10,w,n.product.title)))},dependencies:[i.O5,d,c.rH,i.gd,s],styles:[".product-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.product-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-top:10px}"]});const b=[{path:"",component:g},{path:":id",component:f}];class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]});var E=u(4466),F=u(2992);class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[i.ez,E.m,c.Bz,a,F.u]})}}]);