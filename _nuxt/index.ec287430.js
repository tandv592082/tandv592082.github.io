import{a as h,o,f as n,i as t,t as i,r as w,j as _,k as $,F as u,l as y,m as g,p as c,u as l,w as f,q as j,s as b,v as C,x,c as S,y as V}from"./entry.8a436c0e.js";import{u as q}from"./useSavePDF.d4ec7377.js";const D={class:"w-full"},I={class:"text-xl font-semibold text-dark-500 dark:text-light-800"},T=t("div",{class:"w-full h-3px bg-dark-50"},null,-1),E={class:"pt-2"},N=h({__name:"CVTitle",props:{title:{type:String,required:!0}},setup(p){const e=p;return(a,d)=>(o(),n("div",D,[t("p",I,i(e.title.toUpperCase()),1),T,t("div",E,[w(a.$slots,"default")])]))}}),L={class:"flex flex-wrap items-center"},P=["href"],W=["href"],B=["href"],H={key:3},R={key:4,class:"mx-2 h-1/2 w-2px bg-dark-50"},A=h({__name:"CVContactInfo",props:{info:{type:String,required:!0,default:""},type:{type:String,require:!1},text:{type:String,required:!1},hasRightDivider:{type:Boolean,default:!0}},setup(p){const e=p;return(a,d)=>(o(),n("div",L,[e.type==="email"?(o(),n("a",{key:0,class:"flex-1 dark:text-white",target:"_blank",rel:"noopener",href:`mailto:${e.info}`},i(e.info),9,P)):e.type==="phone"?(o(),n("a",{key:1,class:"flex-1 dark:text-white",target:"_blank",rel:"noopener",href:`tel:${e.info}`},i(e.info),9,W)):e.type==="link"?(o(),n("a",{key:2,class:"flex-1 dark:text-white",target:"_blank",rel:"noopener",href:e.info},i(e.text||e.info),9,B)):(o(),n("p",H,i(e.info),1)),e.hasRightDivider?(o(),n("div",R)):_("",!0)]))}}),F={class:"flex flex-col items-start w-full"},K={class:"flex justify-between w-full my-1 text-dark-500 dark:text-gray-200"},U={class:"font-semibold"},z={key:0,class:"font-semibold"},G={class:"flex justify-between w-full"},J=["href","target"],M={key:1,class:"italic"},O={class:"italic"},Q={key:0,class:"mt-3"},X={class:"font-semibold"},Y={class:"list-disc ml-8"},Z={class:"mt-1"},ee={class:"font-semibold"},te={class:"mt-1"},se={class:"font-semibold"},ie={class:"mt-1"},oe={class:"font-semibold"},ne={class:"list-circle ml-8"},le=t("p",null,null,-1),re=h({__name:"CVWorkInfo",props:{companyName:{type:String,require:!0},companyLink:{type:String,require:!1},companyAddress:{type:String,require:!0},workPosition:{type:String,require:!0},workPeriod:{type:String,require:!1},projectName:{type:String,require:!0},projectDescription:{type:String,require:!0},projectTechnologies:{type:String,require:!0},projectResponsibilities:{type:Array,require:!0}},setup(p){const e=p;return(a,d)=>(o(),n("div",F,[t("div",K,[t("p",U,i(e.workPosition),1),e.workPeriod?(o(),n("p",z,i(e.workPeriod),1)):_("",!0)]),t("div",G,[e.companyLink?(o(),n("a",{key:0,href:e.companyLink,class:"dark:text-white italic",target:e.companyLink==="#"?"_self":"_blank",rel:"noopener"},i(e.companyName),9,J)):(o(),n("p",M,i(e.companyName),1)),t("p",O,i(e.companyAddress),1)]),e.projectName?(o(),n("div",Q,[t("p",null,[t("span",X,i(a.$t("system.CVWorkDetails.project"))+": ",1),$(" "+i(e.projectName),1)]),t("ul",Y,[t("li",Z,[t("p",null,[t("span",ee,i(a.$t("system.CVWorkDetails.description"))+": ",1),$(" "+i(e.projectDescription),1)])]),t("li",te,[t("p",null,[t("span",se,i(a.$t("system.CVWorkDetails.technologies"))+": ",1),$(" "+i(e.projectTechnologies),1)])]),t("li",ie,[t("p",oe,i(a.$t("system.CVWorkDetails.responsibilities"))+":",1),t("ul",ne,[(o(!0),n(u,null,y(e.projectResponsibilities,(v,k)=>(o(),n("li",{key:k,class:g(k&&"mt-1")},[$(i(v)+" ",1),le],2))),128))])])])])):_("",!0)]))}}),ae={class:"flex mb-1"},ce={key:0,class:"font-semibold"},pe={class:"ml-1"},de=h({__name:"CVSkillDetails",props:{skillTitle:{type:String,require:!1},skillDetails:{type:String,require:!0}},setup(p){const e=p;return(a,d)=>(o(),n("div",ae,[e.skillTitle?(o(),n("p",ce,i(`${e.skillTitle}: `),1)):_("",!0),t("p",pe,i(` ${e.skillDetails}`),1)]))}}),me=()=>new Date().toLocaleString(),ue={class:"mb-8"},fe={class:"text-center text-3xl font-medium text-black dark:text-white"},ye={class:"text-center text-xl font-medium"},_e={class:"w-full flex justify-center mt-2"},he={class:"w-full"},ke={class:"list-disc pl-6"},$e={class:"flex justify-end mt-4"},ve={class:"text-sm"},ge={key:0,class:"text-sm flex justify-between mt-10"},Ce=h({__name:"index",setup(p){const e=N,a=A,d=re,v=de,{isLoading:k}=q();return(s,we)=>(o(),n(u,null,[t("div",ue,[t("p",fe,i(s.$t("cv.persionalInfo.fullname")),1),t("p",ye,i(s.$t("cv.persionalInfo.position")),1),t("div",_e,[c(l(a),{type:"email",info:s.$t("cv.persionalInfo.email")},null,8,["info"]),c(l(a),{type:"phone",info:s.$t("cv.persionalInfo.phone")},null,8,["info"]),c(l(a),{type:"link",text:"LinkedIn",info:s.$t("cv.persionalInfo.linkedin"),"has-right-divider":!1},null,8,["info"])])]),t("div",he,[c(l(e),{title:s.$t("system.CVHeaderTitle.summary")},{default:f(()=>[t("div",null,[(o(!0),n(u,null,y(l(j)(),(r,m)=>(o(),n("p",{key:m,class:g(m&&"mt-2")},i(s.$t(`cv.summary.${r}`)),3))),128))])]),_:1},8,["title"]),c(l(e),{title:s.$t("system.CVHeaderTitle.skills"),class:"mt-4"},{default:f(()=>[t("ul",ke,[(o(!0),n(u,null,y(l(b)(),(r,m)=>(o(),n("li",{key:m},[c(l(v),{"skill-title":s.$t(`cv.skills.${r}.title`).startsWith("cv.skills")?void 0:s.$t(`cv.skills.${r}.title`),"skill-details":s.$t(`cv.skills.${r}.details`)},null,8,["skill-title","skill-details"])]))),128))])]),_:1},8,["title"]),c(l(e),{title:s.$t("system.CVHeaderTitle.experience"),class:"mt-4"},{default:f(()=>[(o(!0),n(u,null,y(l(C)(),(r,m)=>(o(),S(l(d),{"company-link":s.$t(`cv.workExperience.${r}.company.link`),"company-name":s.$t(`cv.workExperience.${r}.company.name`),"company-address":s.$t(`cv.workExperience.${r}.company.address`),"work-position":s.$t(`cv.workExperience.${r}.job.position`),"work-period":s.$t(`cv.workExperience.${r}.job.period`),"project-name":s.$t(`cv.workExperience.${r}.project.title`),"project-description":s.$t(`cv.workExperience.${r}.project.description`),"project-technologies":s.$t(`cv.workExperience.${r}.project.technologies`),"project-responsibilities":l(V)(r,s.$t),class:g(m&&"mt-4")},null,8,["company-link","company-name","company-address","work-position","work-period","project-name","project-description","project-technologies","project-responsibilities","class"]))),256))]),_:1},8,["title"]),c(l(e),{title:s.$t("system.CVHeaderTitle.education"),class:"mt-4"},{default:f(()=>[c(l(d),{"company-name":s.$t("cv.education.university.name"),"company-address":s.$t("cv.education.university.address"),"work-position":s.$t("cv.education.information.degree"),"work-period":s.$t("cv.education.information.period")},null,8,["company-name","company-address","work-position","work-period"])]),_:1},8,["title"]),c(l(e),{title:s.$t("system.CVHeaderTitle.additionalInformation"),class:"mt-4"},{default:f(()=>[(o(!0),n(u,null,y(l(x)(),r=>(o(),n("p",null,i(s.$t(`cv.additionalInformation.${r}`)),1))),256))]),_:1},8,["title"]),t("div",$e,[t("p",ve,i(s.$t("system.lastUpdate")),1)]),l(k)?(o(),n("div",ge,[t("p",null,i(l(me)()),1),t("p",null,i(s.$t("system.messages.savePDF.autogen")),1)])):_("",!0)])],64))}});export{Ce as default};