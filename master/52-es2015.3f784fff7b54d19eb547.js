(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{L25F:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { map, startWith, tap } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-keyword">interface</span> Model {\n  readonly player: <span class="hljs-built_in">string</span>;\n  readonly sport: <span class="hljs-built_in">string</span>;\n  readonly team: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: Partial&lt;Model&gt; = { sport: <span class="hljs-string">\'1\'</span> };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n        ],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'team\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Team\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function"><span class="hljs-params">field</span> =&gt;</span> {\n          <span class="hljs-keyword">const</span> teams = [\n            { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Real Madrid\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Cleveland\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Miami\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n          ];\n          <span class="hljs-keyword">const</span> sportControl = <span class="hljs-keyword">this</span>.form.get(<span class="hljs-string">\'sport\'</span>);\n          field.templateOptions.options = sportControl.valueChanges.pipe(\n            startWith(sportControl.value),\n            map(<span class="hljs-function"><span class="hljs-params">sportId</span> =&gt;</span> teams.filter(<span class="hljs-function"><span class="hljs-params">team</span> =&gt;</span> team.sportId === sportId)),\n            tap(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> field.formControl.setValue(<span class="hljs-literal">null</span>)),\n          );\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'player\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Player\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function"><span class="hljs-params">field</span> =&gt;</span> {\n          <span class="hljs-keyword">const</span> players = [\n            { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 1)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 2)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 1)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 2)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'5\'</span>, name: <span class="hljs-string">\'Cleveland (Player 1)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n            { id: <span class="hljs-string">\'6\'</span>, name: <span class="hljs-string">\'Cleveland (Player 2)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n            { id: <span class="hljs-string">\'7\'</span>, name: <span class="hljs-string">\'Miami (Player 1)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n            { id: <span class="hljs-string">\'8\'</span>, name: <span class="hljs-string">\'Miami (Player 2)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n          ];\n          <span class="hljs-keyword">const</span> teamControl = <span class="hljs-keyword">this</span>.form.get(<span class="hljs-string">\'team\'</span>);\n          field.templateOptions.options = teamControl.valueChanges.pipe(\n            startWith(teamControl.value),\n            map(<span class="hljs-function"><span class="hljs-params">teamId</span> =&gt;</span> players.filter(<span class="hljs-function"><span class="hljs-params">player</span> =&gt;</span> player.teamId === teamId)),\n            tap(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> field.formControl.setValue(<span class="hljs-literal">null</span>)),\n          );\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"VbF+":function(s,n,a){"use strict";a.r(n),n.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],\n  declarations: [AppComponent],\n})\nexport class AppModule {}\n"},Xi1j:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},dOWw:function(s,n,a){"use strict";a.r(n);var l=a("Mlb/"),e=a("QZuW"),p=a("Y8if"),t=a("O6Zd"),o=a("vfyW");class r{constructor(){this.form=new e.FormGroup({}),this.model={sport:"1"},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},hooks:{onInit:s=>{const n=[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}],a=this.form.get("sport");s.templateOptions.options=a.valueChanges.pipe(Object(p.a)(a.value),Object(t.a)(s=>n.filter(n=>n.sportId===s)),Object(o.a)(()=>s.formControl.setValue(null)))}}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},hooks:{onInit:s=>{const n=[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}],a=this.form.get("team");s.templateOptions.options=a.valueChanges.pipe(Object(p.a)(a.value),Object(t.a)(s=>n.filter(n=>n.teamId===s)),Object(o.a)(()=>s.formControl.setValue(null)))}}}]}submit(){alert(JSON.stringify(this.model))}}const m={examples:[{title:"Cascaded Select (using observable)",description:"",component:r,files:[{file:"app.component.html",content:a("Xi1j"),filecontent:a("ry7/")},{file:"app.component.ts",content:a("L25F"),filecontent:a("iAle")},{file:"app.module.ts",content:a("vwYG"),filecontent:a("VbF+")}]}]};class i{}var d=a("n91+"),c=a("aUi8"),u=a("xRU+"),h=a("l9Gt"),g=a("tb2p"),f=a("5swT"),j=a("rGUg"),y=a("qEw3"),b=a("KL5v"),v=a("WPgD"),C=a("wR1y"),k=a("fYis"),M=a("mSm0"),I=a("g/x9"),w=a("Ea/l"),P=a("kY9M"),F=a("cXvR"),R=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(s,n,a){var e=!0,p=s.component;return"submit"===n&&(e=!1!==l["\u0275nov"](s,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==l["\u0275nov"](s,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==p.submit()&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,I.b,I.a)),l["\u0275prd"](512,null,w.a,w.a,[P.b,l.ComponentFactoryResolver,l.Injector,[2,e.FormGroupDirective]]),l["\u0275did"](7,966656,null,0,F.a,[w.a,P.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],(function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields)}),(function(s,n){var a=n.component;s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending),s(n,8,0,!a.form.valid)}))}function O(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,R)),l["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)}var _=l["\u0275ccf"]("formly-app-example",r,O,{},{},[]),S=a("vk2e"),B=a("o3+a"),N=a("9b0e"),G=a("6YJn"),W=a("dvHj"),A=a("C0xW"),L=a("W9sv"),V=a("m6lo"),T=a("S6Ld"),U=a("cTZo"),D=a("Kfqh"),J=a("Ienz"),Y=a("KuLc"),K=a("Z7++"),X=a("2lML"),Z=a("pgVP"),q=a("pk7F"),z=a("T8+l"),E=a("0hby"),H=a("tVba"),Q=a("XX7/"),$=a("pLrJ"),ss=a("U5/R"),ns=a("TqxR"),as=a("soK0"),ls=a("1k+g"),es=a("pAed"),ps=a("VtvF"),ts=a("lN7U"),os=a("NPi3"),rs=a("PCNd"),ms=a("WCiw"),is=a("Vtge"),ds=a("+5Wd"),cs=a("+R4m"),us=a("SSYk"),hs=a("KJU8"),gs=a("eTA3"),fs=a("o12O"),js=a("iWYX"),ys=a("h18T");class bs{}var vs=a("qk26"),Cs=a("P+xK");a.d(n,"ConfigModuleNgFactory",(function(){return ks}));var ks=l["\u0275cmf"](i,[],(function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,c.a,u.a,h.a,g.a,f.a,j.a,y.a,b.a,v.a,C.a,k.a,M.a,_]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[l.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,B.c,B.c,[]),l["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,l.ComponentFactoryResolver,N.h,N.f,l.Injector,l.NgZone,S.DOCUMENT,G.b,[2,S.Location]]),l["\u0275mpd"](5120,N.j,N.k,[N.c]),l["\u0275mpd"](5120,W.b,W.c,[N.c]),l["\u0275mpd"](4608,A.e,L.c,[[2,L.g],[2,L.l]]),l["\u0275mpd"](5120,V.c,V.j,[N.c]),l["\u0275mpd"](4608,T.a,T.a,[]),l["\u0275mpd"](4608,U.a,U.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,w.a,w.a,[P.b,l.ComponentFactoryResolver,l.Injector,[2,e.FormGroupDirective]]),l["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),l["\u0275mpd"](1073742336,D.b,D.b,[]),l["\u0275mpd"](1073742336,B.d,B.d,[]),l["\u0275mpd"](1073742336,J.a,J.a,[]),l["\u0275mpd"](1073742336,G.a,G.a,[]),l["\u0275mpd"](1073742336,Y.g,Y.g,[]),l["\u0275mpd"](1073742336,K.ScrollingModule,K.ScrollingModule,[]),l["\u0275mpd"](1073742336,N.g,N.g,[]),l["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,A.f]]),l["\u0275mpd"](1073742336,W.e,W.e,[]),l["\u0275mpd"](1073742336,L.v,L.v,[]),l["\u0275mpd"](1073742336,X.j,X.j,[]),l["\u0275mpd"](1073742336,V.i,V.i,[]),l["\u0275mpd"](1073742336,V.f,V.f,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,q.c,q.c,[]),l["\u0275mpd"](1073742336,z.b,z.b,[]),l["\u0275mpd"](512,P.b,P.b,[]),l["\u0275mpd"](1024,P.a,(function(s){return[{wrappers:[{name:"form-field",component:E.a}]},{types:[{name:"input",component:H.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:$.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:ss.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:ns.a,wrappers:["form-field"]}]},{types:[{name:"select",component:as.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ls.a}],extensions:[{name:"addons",extension:{postPopulate:es.a}}]},ps.b(s),{}]}),[P.b]),l["\u0275mpd"](1073742336,ps.a,ps.a,[P.b,[2,P.a]]),l["\u0275mpd"](1073742336,ts.h,ts.h,[]),l["\u0275mpd"](1073742336,os.b,os.b,[]),l["\u0275mpd"](1073742336,rs.a,rs.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,is.a,is.a,[]),l["\u0275mpd"](1073742336,ds.a,ds.a,[]),l["\u0275mpd"](1073742336,cs.a,cs.a,[]),l["\u0275mpd"](1073742336,us.a,us.a,[]),l["\u0275mpd"](1073742336,hs.a,hs.a,[]),l["\u0275mpd"](1073742336,gs.a,gs.a,[]),l["\u0275mpd"](1073742336,fs.a,fs.a,[]),l["\u0275mpd"](1073742336,js.a,js.a,[]),l["\u0275mpd"](1073742336,ys.a,ys.a,[]),l["\u0275mpd"](1073742336,bs,bs,[]),l["\u0275mpd"](1073742336,vs.t,vs.t,[[2,vs.y],[2,vs.p]]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](1024,vs.n,(function(){return[[{path:"",component:Cs.a,data:m}]]}),[])])}))},iAle:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFieldConfig } from '@ngx-formly/core';\nimport { map, startWith, tap } from 'rxjs/operators';\n\ninterface Model {\n  readonly player: string;\n  readonly sport: string;\n  readonly team: string;\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: Partial<Model> = { sport: '1' };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: [\n          { id: '1', name: 'Soccer' },\n          { id: '2', name: 'Basketball' },\n        ],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n    {\n      key: 'team',\n      type: 'select',\n      templateOptions: {\n        label: 'Team',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      hooks: {\n        onInit: field => {\n          const teams = [\n            { id: '1', name: 'Bayern Munich', sportId: '1' },\n            { id: '2', name: 'Real Madrid', sportId: '1' },\n            { id: '3', name: 'Cleveland', sportId: '2' },\n            { id: '4', name: 'Miami', sportId: '2' },\n          ];\n          const sportControl = this.form.get('sport');\n          field.templateOptions.options = sportControl.valueChanges.pipe(\n            startWith(sportControl.value),\n            map(sportId => teams.filter(team => team.sportId === sportId)),\n            tap(() => field.formControl.setValue(null)),\n          );\n        },\n      },\n    },\n    {\n      key: 'player',\n      type: 'select',\n      templateOptions: {\n        label: 'Player',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      hooks: {\n        onInit: field => {\n          const players = [\n            { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },\n            { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },\n            { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },\n            { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },\n            { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },\n            { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },\n            { id: '7', name: 'Miami (Player 1)', teamId: '4' },\n            { id: '8', name: 'Miami (Player 2)', teamId: '4' },\n          ];\n          const teamControl = this.form.get('team');\n          field.templateOptions.options = teamControl.valueChanges.pipe(\n            startWith(teamControl.value),\n            map(teamId => players.filter(player => player.teamId === teamId)),\n            tap(() => field.formControl.setValue(null)),\n          );\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},"ry7/":function(s,n,a){"use strict";a.r(n),n.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary" [disabled]="!form.valid">Submit</button>\n</form>\n'},vwYG:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],\n  declarations: [AppComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'}}]);