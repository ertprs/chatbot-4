var PREFIX_XMLEDITOR="XMLEDITOR";function initXmlEditorInputHtml(e,d,a,b,c,g){if(!checkAjaxProcessing(PREFIX_XMLEDITOR+a)){var f=makeXmlEditorPostBody(c);0>=f.lastIndexOf(c)&&(f+="&");c=escape(g);f+=a+"="+c;e=e+"create_xmleditor_html.aspx?tid="+escape(b)+"&xeaid="+escape(d)+"&xrfn="+escape(a)+"&isxe=true&iswi=true";setAjaxProcessing(PREFIX_XMLEDITOR+a);executeSetHtmlAjaxMethodEx(d,e,"post",f,!1,!1,function(){clearAjaxProcessing(PREFIX_XMLEDITOR+a)})}}
function refleshXmlEditorInputArea(e,d,a,b,c,g,f,h){g=document.getElementsByName(g+a)[0];g.value==f?(g.value=h,createXmlEditorInputHtml(e,d,a,b,c,!0)):showErrorMessage("...\u51e6\u7406\u4e2d\u3067\u3059.\u3057\u3070\u3089\u304f\u305f\u3063\u3066\u304b\u3089\u518d\u5ea6\u5b9f\u884c\u3057\u3066\u4e0b\u3055\u3044\u3002")}
function addXmlEditorInputArea(e,d,a,b,c,g,f,h,k){f=document.getElementsByName(f+a)[0];f.value==h?(f.value=k,h=document.getElementsByName(g)[0].value,""==h&&(h=1),document.getElementsByName(g)[0].value=h-0+1,createXmlEditorInputHtml(e,d,a,b,c,!0)):showErrorMessage("...\u51e6\u7406\u4e2d\u3067\u3059.\u3057\u3070\u3089\u304f\u305f\u3063\u3066\u304b\u3089\u518d\u5ea6\u5b9f\u884c\u3057\u3066\u4e0b\u3055\u3044\u3002")}
function delXmlEditorInputArea(e,d,a,b,c,g,f,h,k){f=document.getElementsByName(f+a)[0];f.value==h?(f.value=k,h=document.getElementsByName(g)[0].value,""==h&&(h=1),document.getElementsByName(g)[0].value=h-0-1,createXmlEditorInputHtml(e,d,a,b,c,!0)):showErrorMessage("...\u51e6\u7406\u4e2d\u3067\u3059.\u3057\u3070\u3089\u304f\u305f\u3063\u3066\u304b\u3089\u518d\u5ea6\u5b9f\u884c\u3057\u3066\u4e0b\u3055\u3044\u3002")}
function makeXmlEditorPostBody(e){var d="",a=document.getElementsByTagName("INPUT");for(i=0;i<a.length;i++){var b=a[i];if(0==b.name.indexOf(e,0))switch(b.type){case "hidden":case "text":case "password":var c=escape(b.value);d+=b.name+"="+c+"&";break;case "checkbox":c="";b.checked&&(c=escape(b.value));d+=b.name+"="+c+"&";break;case "radio":b.checked&&(c=escape(b.value),d+=b.name+"="+c+"&")}}a=document.getElementsByTagName("SELECT");for(i=0;i<a.length;i++)b=a[i],0==b.name.indexOf(e,0)&&(c=escape(b.value),
d+=b.name+"="+c+"&");a=document.getElementsByTagName("TEXTAREA");for(i=0;i<a.length;i++)b=a[i],0==b.name.indexOf(e,0)&&(c=escape(b.value),d+=b.name+"="+c+"&");return d}
function createXmlEditorInputHtml(e,d,a,b,c,g){checkAjaxProcessing(PREFIX_XMLEDITOR+a)||(c=makeXmlEditorPostBody(c),e=e+"create_xmleditor_html.aspx?tid="+escape(b)+"&xeaid="+escape(d)+"&xrfn="+escape(a)+"&isxe="+escape(g),setAjaxProcessing(PREFIX_XMLEDITOR+a),executeSetHtmlAjaxMethodEx(d,e,"post",c,!1,!1,function(){clearAjaxProcessing(PREFIX_XMLEDITOR+a)}))}
function changeContentsBodyArea(e,d){"ON"==e?document.getElementById(d).style.display="inline":document.getElementById(d).style.display="none"};