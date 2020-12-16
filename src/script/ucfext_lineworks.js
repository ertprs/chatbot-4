Ext.ucf.lineworks=function(){return{showConfigPanel:function(b,c){b="panel_area_"+b;var d=c.channel_config;c=Ext.ucf.lineworks.createConfigPanel("undefined"!=typeof d?d.data_mapping:{},_vurl+"config/xtpictureupload?picture_id=boticon",c.csrf_token,c.webhook_url);(new Ext.Panel({html:c,layout:"fit",frame:!1,border:!1,bodyStyle:"background-color:white;padding:5px; font-size:12px;"})).render(Ext.get(b));Ext.ucf.lineworks.appendDataConfigPanel(d)},appendDataConfigPanel:function(b){var c=b?b.domain_id:
"";Ext.ucf.field.createTextField2("domain_id","domain_id",c,"",150,Ext.ucf.delegateCheckValidation).render("FIELD_domain_id_area");c&&Ext.getCmp("domain_id").disable();c=b?b.tenant_id:"";Ext.ucf.field.createTextField2("tenant_id","tenant_id",c,"",150,Ext.ucf.delegateCheckValidation).render("FIELD_tenant_id_area");c&&Ext.getCmp("tenant_id").disable();Ext.ucf.field.createTextField2("open_api_id","open_api_id",b?b.open_api_id:"","",300,Ext.ucf.delegateCheckValidation).render("FIELD_open_api_id_area");
Ext.ucf.field.createTextField2("consumer_key","consumer_key",b?b.consumer_key:"","",300,Ext.ucf.delegateCheckValidation).render("FIELD_consumer_key_area");Ext.ucf.field.createTextField2("server_id","server_id",b?b.server_id:"","",300,Ext.ucf.delegateCheckValidation).render("FIELD_server_id_area");Ext.ucf.field.createTextAreaField("priv_key","priv_key",b?b.priv_key:"","",480,Ext.ucf.delegateCheckValidation).render("FIELD_priv_key_area");Ext.ucf.field.createTextField2("bot_no","bot_no",b?b.bot_no:"",
"",80,Ext.ucf.delegateCheckValidation).render("FIELD_bot_no_area");$("#bot_no").attr("disabled","disabled");b&&b.bot_no||($("#FIELD_bot_no_area").css("display","none"),$("#none_bot").css("display",""));b&&(c=function(b){b=jQuery.parseJSON(b.responseText);var c=b.code;0!=c?""==b.msg?Ext.ucf.dispSysErrMsg(c):Ext.ucf.flowMsg(_msg.VMSG_MSG_ERROR,b.msg):(b=b.bot_vo,$("#input_bot_name").val(b.bot_name),$("#input_bot_description").text(b.bot_description),$("#input_bot_manager").val(b.bot_manager),$("#input_bot_photourl").val(b.bot_photourl),
"undefined"!=typeof b.bot_photourl&&""!=b.bot_photourl&&($("#img_bot_icon").attr("src",b.bot_photourl),$("#img_bot_icon").css("display","block"),$("#img_bot_icon_noupload_msg").css("display","none")),"undefined"!=typeof b.bot_manager&&""!=b.bot_manager&&$("#input_bot_manager").attr("disabled","disabled"))},Ext.Ajax.request({url:_vurl+"lineworksbot/xtgetdetail",method:"POST",params:b,success:c,failure:c}))},createConfigPanel:function(b,c,d,e){var f="undefined"!=typeof b.sender?b.sender:"/source/accountId";
b="undefined"!=typeof b.sender_type?b.sender_type:"lineworks_id";var a='<div class="channel_panel" ><table><tr><td>'+('<span class="section_description" >'+_msg.EXP_LINEWORKSAPI_CONFIG2+"</span>");a=a+'</td></tr><tr><td style="text-align:left;"><table><tr>'+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_DOMAIN_ID)+":&nbsp;</th>");a=a+'<td><div id="FIELD_domain_id_area" ></div>'+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_OPEN_API_ID+"</span>");a=a+"</td></tr><tr>"+
('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_TENANT_ID)+":&nbsp;</th>");a=a+'<td><div id="FIELD_tenant_id_area" ></div>'+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_OPEN_API_ID+"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_OPEN_API_ID)+":&nbsp;</th>");a=a+'<td><div id="FIELD_open_api_id_area" ></div>'+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_OPEN_API_ID+"</span>");
a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_CONSUMER_KEY)+":&nbsp;</th>");a=a+'<td><div id="FIELD_consumer_key_area" ></div>'+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_CONSUMER_KEY+"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_SERVER_ID)+":&nbsp;</th>");a=a+'<td><div id="FIELD_server_id_area" ></div>'+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_SERVER_ID+
"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_PRIV_KEY)+":&nbsp;</th>");a=a+'<td><div id="FIELD_priv_key_area" ></div>'+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_PRIV_KEY+"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKSAPI_BOT_NO)+":&nbsp;</th>");a=a+'<td><table><tr><td><div id="FIELD_bot_no_area" style="margin-top:-1%;" ></div>'+('<div id="none_bot" style="display:none"><label style="margin-left:-1.5%;" >'+
_msg.LINEWORKS_BOT_NOT_YET_SETTING+"</label></div>");a=a+"</td><td>&nbsp;&nbsp;</td><td></td></tr></table>"+('<span class="description" >'+_msg.EXP_LINEWORKSAPI_BOT_NO+"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKS_BOT_NAME)+':&nbsp;<font size="2" color="red" >*</font></th>');a=a+'<td><input type="text" id="input_bot_name" style="width:292px;" class="x-form-text x-form-field"><br>'+('<span class="description" >'+_msg.EXP_LINEWORKS_BOT_NAME+
"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKS_BOT_DESCRIPTION)+':&nbsp;<font size="2" color="red" >*</font></th>');a=a+'<td><textarea id="input_bot_description" style="width:472px; height:50px;" class="x-form-textarea x-form-field" ></textarea><br>'+('<span class="description" >'+_msg.EXP_LINEWORKS_BOT_DESCRIPTION+"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKS_BOT_MANAGER)+
':&nbsp;<font size="2" color="red" >*</font></th>');a=a+'<td><input type="text" id="input_bot_manager" style="width:292px;" class="x-form-text x-form-field" ><br>'+('<span class="description" >'+_msg.EXP_LINEWORKS_BOT_MANAGER+"</span>");a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left;">'+Ext.ucf.htmlEscape(_msg.LINEWORKS_BOT_URL)+":&nbsp;</th>");a+="<td>";a=e?a+('<input type="text" id="input_bot_url" style="width:472px;" class="x-form-text x-form-field" value="'+e+'" disabled >'):
a+('<input type="text" id="input_bot_url" style="width:472px;" class="x-form-text x-form-field" placeholder="'+_msg.EXPLAIN_CALLBACK_URL_AUTO_DISPLAY+'" disabled >');a=a+"</td></tr><tr>"+('<th style="font-size:13px; text-align:left; padding-top:15px;">'+Ext.ucf.htmlEscape(_msg.LINEWORKS_BOT_ICON)+':&nbsp;<font size="2" color="red" >*</font></th>');a=a+'<td><table><tr><td nowrap style="width: 15%"><img src="" width="88px" height="88px" border="0" id="img_bot_icon" style="display: none"/><input type="hidden" id="input_bot_icon_key" >'+
('<span id="img_bot_icon_noupload_msg" >'+_msg.LINEWORKS_BOT_ICON_NOUPLOAD+"</span>");a=a+'</td><td style="vertical-align:bottom;">'+('<label for="input_bot_icon" style="height:20px; margin-left:30px; box-shadow:inset 0px 1px 0px 0px #ffffff; background:linear-gradient(to bottom, #f3f3f3 5%, #dddddd 100%); border-radius:3px; border:1px solid #dcdcdc; display:inline-block; cursor:pointer; color:#000000; text-decoration:none; text-shadow:0px 1px 0px #ffffff;">&nbsp;&nbsp;&nbsp;'+_msg.LINEWORKS_BOT_ICON_UPLOAD+
"&nbsp;&nbsp;&nbsp;</label>");a=a+('<input type="file" id="input_bot_icon" class="x-btn-text" style="display:none; margin:0 0 30px 30px; width:90px; color:transparent;" onChange="Ext.ucf.lineworks.changeBotIcon(\'input_bot_icon\', \''+c+"', '"+d+"', '"+e+"');\">")+"</td></tr>";a+="<tr>";a+='<td colspan="2" >';a+='<span class="description" >'+_msg.VMSG_LINEWORKS_BOT_ICON+"</span>";a+="</td>";a+="</tr>";a+="<tr>";a+='<td colspan="2" style="height:5px;" >';a+="</td>";a+="</tr>";a+="<tr>";a+='<th class="detail_name" nowrap style="text-align:left; font-size:12px; padding-left:3px;">';
a+=_msg.LINEWORKS_BOT_PHOTOURL+"\uff1a";a+="</th>";a+='<td class="detail_value">';a+='<input type="text" id="input_bot_photourl" class="x-form-text x-form-field" style="width:337px; margin-left:20px" placeholder="'+_msg.EXPLAIN_IMAGE_URL_AUTO_DISPLAY+'" disabled>';a+="</td>";a+="</tr>";a+="<tr>";a+='<td colspan="2" style="height:5px;" >';a+="</td>";a+="</table>";a+="</td>";a+="</tr>";a+="</table>";a+="</td>";a+="</tr>";a+="</table>";a+='<input type="hidden" id="data_mapping_sender" value="'+Ext.ucf.htmlEscape(f)+
'" />';a+='<input type="hidden" id="data_mapping_sender_type" value="'+Ext.ucf.htmlEscape(b)+'" />';return a+="</div>"},changeBotIcon:function(b,c,d,e){data=new FormData;data.append("input_bot_icon",$("#input_bot_icon")[0].files[0]);data.append("file_id",b);data.append("token",d);$("#input_bot_icon").attr("disabled","disabled");$.ajax({url:c,type:"POST",data:data,enctype:"multipart/form-data",processData:!1,contentType:!1}).done(function(b){var a="";b&&(a=JSON.parse(b).data_key)&&($("#input_bot_icon_key").val(a),
e.split("/"),$("#input_bot_photourl").val(_my_site_url+_vurl+"picture/boticon/"+a),function(){$("#img_bot_icon").attr("src",_vurl+"picture/boticon/"+a+"?uc=n")}.defer(1E3),$("#img_bot_icon").attr("src",_vurl+"picture/boticon/"+a+"?uc=n"),$("#img_bot_icon").css("display","block"),$("#input_bot_icon").css("margin-bottom","30px"),$("#img_bot_icon_noupload_msg").css("display","none"),$("#input_bot_icon").removeAttr("disabled"))})},createConfigJson:function(){var b="undefined"!=typeof this.channel_config?
this.channel_config:{};b.data_mapping={sender:$("#data_mapping_sender").val(),sender_type:$("#data_mapping_sender_type").val()};b.open_api_id=Ext.getCmp("open_api_id").getValue();b.consumer_key=Ext.getCmp("consumer_key").getValue();b.server_id=Ext.getCmp("server_id").getValue();b.priv_key=Ext.getCmp("priv_key").getValue();b.bot_no=Ext.getCmp("bot_no")?parseInt(Ext.getCmp("bot_no").getValue()):"";b.domain_id=Ext.getCmp("domain_id").getValue();b.tenant_id=Ext.getCmp("tenant_id").getValue();return b},
checkLineWorksStatus2:function(){var b=function(a){void 0!=a.responseText&&""!=a.responseText&&0==jQuery.parseJSON(a.responseText).code&&Ext.getCmp("btnLineWorks").enable()},c=Ext.ucf.getElementValue("open_api_id"),d=Ext.ucf.getElementValue("consumer_key"),e=Ext.ucf.getElementValue("server_id"),f=Ext.ucf.getElementValue("priv_key"),a=Ext.ucf.getElementValue("bot_no"),g=Ext.ucf.getElementValue("domain_id"),h=Ext.ucf.getElementValue("tenant_id");c&&d&&e&&f&&g&&h?Ext.Ajax.request({url:_vurl+"lineworksbot/xtgetdetail",
method:"POST",params:{open_api_id:c,consumer_key:d,server_id:e,priv_key:f,bot_no:a},success:b,failure:b}):Ext.getCmp("btnLineWorks").disable()},checkLineWorksStatus:function(){var b=function(a){void 0!=a.responseText&&""!=a.responseText&&0==jQuery.parseJSON(a.responseText).code&&Ext.getCmp("btnLineWorks").enable()},c=Ext.ucf.getElementValue("open_api_id"),d=Ext.ucf.getElementValue("consumer_key"),e=Ext.ucf.getElementValue("server_id"),f=Ext.ucf.getElementValue("priv_key"),a=Ext.ucf.getElementValue("bot_no"),
g=Ext.ucf.getElementValue("domain_id"),h=Ext.ucf.getElementValue("tenant_id");c&&d&&e&&f&&g&&h?c&&d&&e&&f&&g&&h&&(a?Ext.Ajax.request({url:_vurl+"lineworksbot/xtgetdetail",method:"POST",params:{open_api_id:c,consumer_key:d,server_id:e,priv_key:f,bot_no:a},success:b,failure:b}):Ext.getCmp("btnLineWorks").enable()):Ext.getCmp("btnLineWorks").disable()},init:function(){}}}();