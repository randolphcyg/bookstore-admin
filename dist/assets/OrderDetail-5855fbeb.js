import{_ as m,u as b,d as v,z as f,j as k,o as i,c as w,w as e,E as g,b as a,f as t,D as c,e as D,P as I,Q as S,p as x,a as y}from"./index-7206ec31.js";/* empty css                     *//* empty css                 *//* empty css                  *//* empty css             */const n=d=>(x("data-v-69d41a25"),d=d(),y(),d),C={class:"data"},E=n(()=>a("div",{class:"card-header"},[a("span",null,"订单状态")],-1)),O=n(()=>a("div",{class:"card-header"},[a("span",null,"创建时间")],-1)),B=n(()=>a("div",{class:"card-header"},[a("span",null,"订单号")],-1)),N=["src"],T={__name:"OrderDetail",setup(d){const p=b(),{id:u}=p.query,o=v({data:{},tableData:[]});return f(()=>{k.get(`/orders/${u}`).then(s=>{console.log(s),o.data=s,o.tableData=s.bookStoreOrderItemVOS})}),(s,V)=>{const r=g,l=I,h=S;return i(),w(r,{class:"order-container"},{default:e(()=>[a("div",C,[t(r,{class:"data-item",shadow:"hover"},{header:e(()=>[E]),default:e(()=>[a("div",null,c(o.data.orderStatusString),1)]),_:1}),t(r,{class:"data-item",shadow:"hover"},{header:e(()=>[O]),default:e(()=>[a("div",null,c(o.data.createTime),1)]),_:1}),t(r,{class:"data-item",shadow:"hover"},{header:e(()=>[B]),default:e(()=>[a("div",null,c(o.data.orderNo),1)]),_:1})]),t(h,{data:o.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:e(()=>[t(l,{label:"图书图片"},{default:e(_=>[(i(),D("img",{style:{width:"100px"},key:_.row.booksId,src:s.$filters.prefix(_.row.booksCoverImg),alt:"图书主图"},null,8,N))]),_:1}),t(l,{prop:"booksId",label:"图书编号"}),t(l,{prop:"booksName",label:"图书名"}),t(l,{prop:"booksCount",label:"图书数量"}),t(l,{prop:"sellingPrice",label:"价格"})]),_:1},8,["data"])]),_:1})}}},M=m(T,[["__scopeId","data-v-69d41a25"]]);export{M as default};