(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"23Y9":function(e,n,o){"use strict";o.r(n);var t=o("3Pt+"),r=o("fXoL"),c=o("gP1p"),s=o("JqCM"),b=o("kmnG"),l=o("qFsG"),i=o("ofXK"),a=o("7EHt");function d(e,n){if(1&e){const e=r.Wb();r.Vb(0,"div",1),r.Vb(1,"mat-expansion-panel",2),r.dc("opened",(function(){return r.nc(e),1==r.fc().panelEstado})),r.Vb(2,"mat-expansion-panel-header"),r.Vb(3,"mat-panel-title"),r.vc(4," Datos Persona "),r.Ub(),r.Ub(),r.Vb(5,"div",1),r.Vb(6,"div",3),r.Vb(7,"label",4),r.Vb(8,"strong"),r.vc(9,"Apellidos y Nombres"),r.Ub(),r.Ub(),r.Vb(10,"label",5),r.vc(11),r.Ub(),r.Vb(12,"label",4),r.Vb(13,"strong"),r.vc(14,"Estado Civil"),r.Ub(),r.Ub(),r.Vb(15,"label",5),r.vc(16),r.Ub(),r.Vb(17,"label",4),r.Vb(18,"strong"),r.vc(19,"Direccion"),r.Ub(),r.Ub(),r.Vb(20,"label",5),r.vc(21),r.Ub(),r.Vb(22,"label",4),r.Vb(23,"strong"),r.vc(24,"Ubigeo"),r.Ub(),r.Ub(),r.Vb(25,"label",5),r.vc(26),r.Ub(),r.Vb(27,"label",4),r.Vb(28,"strong"),r.vc(29,"Restriccion"),r.Ub(),r.Ub(),r.Vb(30,"label",5),r.vc(31),r.Ub(),r.Ub(),r.Vb(32,"div",6),r.Vb(33,"div",7),r.Qb(34,"img",8),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()}if(2&e){const e=r.fc();r.Cb(11),r.zc("",e.persona.apPrimer," ",e.persona.apSegundo," ",e.persona.prenombres,""),r.Cb(5),r.wc(e.persona.estadoCivil),r.Cb(5),r.wc(e.persona.direccion),r.Cb(5),r.wc(e.persona.ubigeo),r.Cb(5),r.wc(e.persona.restriccion),r.Cb(3),r.ic("src",e.persona.foto,r.pc)}}let p=(()=>{class e{constructor(){this.panelEstado=!0}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["reniec-persona-detalle"]],inputs:{persona:"persona",panelEstado:"panelEstado"},decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[3,"opened"],[1,"col-sm-12","col-md-9","col-lg-9"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8","col-form-label"],[1,"col-sm-12","col-md-3","col-lg-3"],[1,"text-center"],[1,"img-fluid",3,"src"]],template:function(e,n){1&e&&r.uc(0,d,35,8,"div",0),2&e&&r.ic("ngIf",n.persona)},directives:[i.j,a.b,a.c,a.d],styles:[""]}),e})(),u=(()=>{class e{constructor(e,n){this._sReniec=e,this._spinner=n,this.dniConsultaForm=new t.d({dni:new t.b("",[t.l.required,t.l.maxLength(8),t.l.minLength(8)])})}ngOnInit(){}buscarPersona(){this._spinner.show(),this._sReniec.getPersonaPorDni(this.dniConsultaForm.get("dni").value).subscribe(e=>{e&&("0000"===e.coResultado?(this.persona=e.datosPersona,this.persona.foto="data:image/png;base64,"+this.persona.foto,this._spinner.hide()):(console.log(e.deResultado),this._spinner.hide()))},e=>{console.log(e),this._spinner.hide()})}}return e.\u0275fac=function(n){return new(n||e)(r.Pb(c.a),r.Pb(s.c))},e.\u0275cmp=r.Jb({type:e,selectors:[["reniec-consulta-persona"]],decls:19,vars:5,consts:[[1,"container","mt-3"],[1,"justify-content-center","bd-content"],[1,"row","text-center"],[1,"col-sm-12","col-md-12","col-lg-12"],[1,"title"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","my-3"],[1,"col-sm-12","col-md-6","col-lg-6"],[1,"full-input"],["matInput","","placeholder","","value","","formControlName","dni"],[1,"col-sm-12","col-md-3","col-lg-2"],["type","submit",1,"btn","btn-block","btn-mdy-azul",3,"disabled"],[3,"persona","panelEstado"],["bdColor","rgba(0, 0, 0, 0.8)","size","large","color","#fff","type","line-scale",3,"fullScreen"]],template:function(e,n){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Vb(4,"h2",4),r.vc(5,"CONSULTA PERSONA RENIEC"),r.Ub(),r.Ub(),r.Ub(),r.Vb(6,"form",5),r.dc("ngSubmit",(function(){return n.buscarPersona()})),r.Vb(7,"div",6),r.Vb(8,"div",7),r.Vb(9,"mat-form-field",8),r.Vb(10,"mat-label"),r.vc(11,"N\xfamero de DNI"),r.Ub(),r.Qb(12,"input",9),r.Ub(),r.Ub(),r.Vb(13,"div",10),r.Vb(14,"button",11),r.vc(15,"Buscar"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Qb(16,"hr"),r.Qb(17,"reniec-persona-detalle",12),r.Ub(),r.Ub(),r.Qb(18,"ngx-spinner",13)),2&e&&(r.Cb(6),r.ic("formGroup",n.dniConsultaForm),r.Cb(8),r.ic("disabled",!n.dniConsultaForm.valid),r.Cb(3),r.ic("persona",n.persona)("panelEstado",!0),r.Cb(1),r.ic("fullScreen",!0))},directives:[t.m,t.i,t.e,b.b,b.e,l.a,t.a,t.h,t.c,p,s.a],styles:[".centrar[_ngcontent-%COMP%]{margin:0 auto}.full-input[_ngcontent-%COMP%]{width:100%}.btn-mdy-azul[_ngcontent-%COMP%]{background-color:#0c1d7b;color:#fff}"]}),e})();var m=o("tyNb");const f=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-reniec"]],decls:1,vars:0,template:function(e,n){1&e&&r.Qb(0,"router-outlet")},directives:[m.e],styles:[""]}),e})(),children:[{path:"persona",component:u}]}];let v=(()=>{class e{}return e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({factory:function(n){return new(n||e)},imports:[[m.d.forChild(f)],m.d]}),e})();var g=o("bTqV");o.d(n,"ReniecModule",(function(){return U}));let U=(()=>{class e{}return e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({factory:function(n){return new(n||e)},providers:[],imports:[[a.a,l.b,g.b,t.f,t.k,i.b,v,s.b]]}),e})()}}]);