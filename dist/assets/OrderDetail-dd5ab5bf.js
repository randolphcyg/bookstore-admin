import{_ as m,u as b,d as f,z as v,j as k,o as i,c as w,w as a,E as g,b as e,f as t,D as c,e as D,P as I,Q as S,p as x,a as y}from"./index-a28300c9.js";/* empty css                     *//* empty css                 *//* empty css                  *//* empty css             */const n=d=>(x("data-v-0fc1f7e8"),d=d(),y(),d),C={class:"data"},E=n(()=>e("div",{class:"card-header"},[e("span",null,"订单状态")],-1)),O=n(()=>e("div",{class:"card-header"},[e("span",null,"创建时间")],-1)),B=n(()=>e("div",{class:"card-header"},[e("span",null,"订单号")],-1)),N=["src"],T={__name:"OrderDetail",setup(d){const p=b(),{id:u}=p.query,o=f({data:{},tableData:[]});return v(()=>{k.get(`/orders/${u}`).then(s=>{console.log(s),o.data=s,o.tableData=s.bookStoreOrderItemVOS})}),(s,V)=>{const r=g,l=I,h=S;return i(),w(r,{class:"order-container"},{default:a(()=>[e("div",C,[t(r,{class:"data-item",shadow:"hover"},{header:a(()=>[E]),default:a(()=>[e("div",null,c(o.data.orderStatusString),1)]),_:1}),t(r,{class:"data-item",shadow:"hover"},{header:a(()=>[O]),default:a(()=>[e("div",null,c(o.data.createTime),1)]),_:1}),t(r,{class:"data-item",shadow:"hover"},{header:a(()=>[B]),default:a(()=>[e("div",null,c(o.data.orderNo),1)]),_:1})]),t(h,{data:o.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:a(()=>[t(l,{label:"图书图片"},{default:a(_=>[(i(),D("img",{style:{width:"100px"},key:_.row.booksId,src:s.$filters.prefix(_.row.booksCoverImg),alt:"图书主图"},null,8,N))]),_:1}),t(l,{prop:"booksId",label:"图书编号"}),t(l,{prop:"booksName",label:"图书名"}),t(l,{prop:"booksCount",label:"图书数量"}),t(l,{prop:"sellingPrice",label:"价格"})]),_:1},8,["data"])]),_:1})}}},M=m(T,[["__scopeId","data-v-0fc1f7e8"]]);export{M as default};
