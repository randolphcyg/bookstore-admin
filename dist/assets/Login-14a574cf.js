import{_ as g,r as v,d as b,o as h,e as w,b as d,f as t,w as l,g as F,h as V,i as n,j as k,l as y,k as x,m as E,n as I,q as N,p as S,a as B}from"./index-616b87c3.js";/* empty css                  *//* empty css                 *//* empty css              */import{m as C}from"./md5-2d55ed6d.js";const U=a=>(S("data-v-686db486"),a=a(),B(),a),q={class:"login-body"},L={class:"login-container"},M=F('<div class="head" data-v-686db486><img class="logo" src="https://s.yezgea02.com/1582958061265/mlogo.png" data-v-686db486><div class="name" data-v-686db486><div class="title" data-v-686db486>先锋书店</div><div class="tips" data-v-686db486>管理系统</div></div></div>',1),j=U(()=>d("div",{style:{color:"#333"}},[n("登录表示您已同意"),d("a",null,"《服务条款》")],-1)),z=n("立即登录"),T=n("下次自动登录"),$={__name:"Login",setup(a){const m=v(null),e=b({ruleForm:{username:"",password:""},checked:!0,rules:{username:[{required:"true",message:"账户不能为空",trigger:"blur"}],password:[{required:"true",message:"密码不能为空",trigger:"blur"}]}}),c=async()=>{m.value.validate(i=>{if(i)k.post("/adminUser/login",{userName:e.ruleForm.username||"",passwordMd5:C(e.ruleForm.password)}).then(o=>{y("token",o),window.location.href="/"});else return console.log("error submit!!"),!1})};return(i,o)=>{const u=x,r=E,p=I,_=N,f=V;return h(),w("div",q,[d("div",L,[M,t(f,{"label-position":"top",rules:e.rules,model:e.ruleForm,ref_key:"loginForm",ref:m,class:"login-form"},{default:l(()=>[t(r,{label:"账号",prop:"username"},{default:l(()=>[t(u,{type:"text",modelValue:e.ruleForm.username,"onUpdate:modelValue":o[0]||(o[0]=s=>e.ruleForm.username=s),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(r,{label:"密码",prop:"password"},{default:l(()=>[t(u,{type:"password",modelValue:e.ruleForm.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ruleForm.password=s),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(r,null,{default:l(()=>[j,t(p,{style:{width:"100%"},type:"primary",onClick:c},{default:l(()=>[z]),_:1}),t(_,{modelValue:e.checked,"onUpdate:modelValue":o[2]||(o[2]=s=>e.checked=s),onChange:o[3]||(o[3]=s=>!e.checked)},{default:l(()=>[T]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])])])}}},K=g($,[["__scopeId","data-v-686db486"]]);export{K as default};
