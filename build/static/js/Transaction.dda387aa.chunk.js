(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1348:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},1492:function(e,a,t){"use strict";t.d(a,"a",function(){return m});for(var n=t(156),l={},c=0,r=Object.keys(n.Transaction.Contract.ContractType);c<r.length;c++){var s=r[c];l[n.Transaction.Contract.ContractType[s]]=s}var m=l},2011:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(3),l=t(0),c=t.n(l);function r(e){var a=e.label,t=e.children;return c.a.createElement("tr",null,c.a.createElement("th",null,Object(n.c)(a)),c.a.createElement("td",null,t))}},2365:function(e,a,t){"use strict";t.d(a,"a",function(){return _});var n=t(0),l=t.n(n),c=t(6),r=t(18),s=t(2011),m=t(181),o=t(3),d=t(9),i=t(55),E=t(36),b=t(250),u=function(e){var a=e.contract_address,t=e.method,n=Object(o.c)("trigger_smart_contract"),r=Object(o.c)("normal_address_trigger_smart_contract");return c.x&&a===c.I.SIDECHAIN&&t.includes(c.N.WITHDRAW)&&(n=Object(o.c)("sign_trigger_smart_contract"),r=Object(o.c)("sign_normal_trigger_smart_contract")),l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),n,l.a.createElement("small",null,r))};function _(e){var a=e.contract,_=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(a.parameters)for(var f in a.parameters)for(var N in _)f===N&&(_[f],a.parameters[f]);console.log("contract",a);var v,p=[];if(p.push(a),p&&(v=Object(i.a)(p,"asset_name","amount")[0]),a.contractType)switch(a.contractType.toUpperCase()){case"TRANSFERCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("transfer_contract"),l.a.createElement("small",null,Object(o.c)("TRX_transfer_between_addresses")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"from"},l.a.createElement(r.a,{address:a.owner_address},a.owner_address)),l.a.createElement(s.a,{label:"to"},l.a.createElement(r.a,{address:a.to_address},a.to_address)),l.a.createElement(s.a,{label:"amount"},l.a.createElement(m.b,{amount:a.amount/c.F})),a.contract_note&&l.a.createElement(s.a,{label:"note"},decodeURIComponent(a.contract_note))))));case"TRANSFERASSETCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("transfer_asset_contract"),l.a.createElement("small",null,Object(o.c)("token_transfer_between_addresses")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"from"},l.a.createElement(r.a,{address:a.owner_address},a.owner_address)),l.a.createElement(s.a,{label:"to"},l.a.createElement(r.a,{address:a.to_address},a.to_address)),l.a.createElement(s.a,{label:"amount"},v.map_amount),l.a.createElement(s.a,{label:"token"},l.a.createElement(b.a,{value:a,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("participate_asset_issue_contract"),l.a.createElement("small",null,Object(o.c)("participate_token_between_addresses")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"to"},l.a.createElement(r.a,{address:a.owner_address},a.owner_address)),l.a.createElement(s.a,{label:"issuer"},l.a.createElement(r.a,{address:a.to_address},a.to_address)),l.a.createElement(s.a,{label:"amount"},a.amount/c.F),l.a.createElement(s.a,{label:"token"},l.a.createElement(b.a,{value:a,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("witness_update_contract"),l.a.createElement("small",null,Object(o.c)("updates_a_witness")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),l.a.createElement(s.a,{label:"URL"},a.url))));case"WITNESSCREATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("witness_create_contract"),l.a.createElement("small",null,Object(o.c)("create_a_witness")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),l.a.createElement(s.a,{label:"URL"},a.url))));case"ACCOUNTUPDATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("account_update_contract"),l.a.createElement("small",null,Object(o.c)("update_account_name")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),l.a.createElement(s.a,{label:"account_name"},Object(E.toUtf8)(a.account_name)))));case"ACCOUNTCREATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("account_create_contract"),l.a.createElement("small",null,Object(o.c)("account_create")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"create_from_address"},l.a.createElement(r.a,{address:a.owner_address})),l.a.createElement(s.a,{label:"create_to_address"},l.a.createElement(r.a,{address:a.account_address})))));case"WITHDRAWBALANCECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("withdraw_balance_contract"),l.a.createElement("small",null,Object(o.c)("withdraw_balance")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})))));case"FREEZEBALANCECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("freeze_balance_contract"),l.a.createElement("small",null,Object(o.c)("freeze_TRX")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),a.receiver_address&&l.a.createElement(s.a,{label:"receive_list"},l.a.createElement(r.a,{address:a.receiver_address})),a.resource?l.a.createElement(s.a,{label:"type"},a.resource):l.a.createElement(s.a,{label:"type"},"Bandwidth"),l.a.createElement(s.a,{label:"frozen_balance"},a.frozen_balance/c.F),l.a.createElement(s.a,{label:"frozen_days"},a.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("unfreeze_balance_contract"),l.a.createElement("small",null,Object(o.c)("unfreeze_TRX")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),a.receiver_address&&l.a.createElement(s.a,{label:"receive_list"},l.a.createElement(r.a,{address:a.receiver_address})))));case"VOTEWITNESSCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("vote_witness_contract"),l.a.createElement("small",null,Object(o.c)("vote_for_a_witness")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),l.a.createElement("tr",null,l.a.createElement("th",null,Object(o.c)("votes")),l.a.createElement("td",null,l.a.createElement("ul",null,a.votes.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(r.a,{address:e.vote_address,truncate:!1}),Object(o.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("asset_issue_contract"),l.a.createElement("small",null,Object(o.c)("issue_a_new_asset")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})),l.a.createElement(s.a,{label:"token_name"},Object(E.toUtf8)(a.name)),l.a.createElement(s.a,{label:"total_supply"},l.a.createElement(d.c,{value:a.total_supply/(a.precision?Math.pow(10,a.precision):1)})),l.a.createElement(s.a,{label:"TRX_exchange_rate"},a.trx_num/c.F," : ",a.num),l.a.createElement(s.a,{label:"start_time"},a.end_time-a.start_time>1e3?l.a.createElement(d.a,{value:a.start_time}):"-"),l.a.createElement(s.a,{label:"end_time"},a.end_time-a.start_time>1e3?l.a.createElement(d.a,{value:a.end_time}):"-"),l.a.createElement(s.a,{label:"description"},Object(E.toUtf8)(a.description)),l.a.createElement(s.a,{label:"URL"},l.a.createElement(r.d,{url:Object(E.toUtf8)(a.url)})))));case"PROPOSALCREATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("proposal_create_contract"),l.a.createElement("small",null,Object(o.c)("proposal_create")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})))));case"TRIGGERSMARTCONTRACT":a.method;var O=t(1348);return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},u(a)),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content_pos"},l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Basic_info")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_triggers_owner_address"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:a.owner_address},a.owner_address))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_address"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:a.contract_address,isContract:!0},a.contract_address))),l.a.createElement("div",{className:"d-flex content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("value"),":"),a.call_value?l.a.createElement(m.b,{amount:a.call_value/c.F}):l.a.createElement(m.b,{amount:0})))),a.tokenTransferInfo&&void 0!==a.tokenTransferInfo.decimals&&void 0!==a.tokenTransferInfo.symbol&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("TRC20_transfers")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("from"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:a.tokenTransferInfo.from_address},a.tokenTransferInfo.from_address))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("to"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:a.tokenTransferInfo.to_address},a.tokenTransferInfo.to_address))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("amount"),":"),l.a.createElement("div",{className:"flex1"},Number(a.tokenTransferInfo.amount_str)/Math.pow(10,a.tokenTransferInfo.decimals))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("token_txs_info"),":"),l.a.createElement("div",{className:"flex1"},a.tokenTransferInfo.contract_address==c.j||a.tokenTransferInfo.contract_address==c.k||a.tokenTransferInfo.contract_address==c.i?l.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},l.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,onError:function(e){e.target.onerror=null,e.target.src=O}}),l.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):l.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,style:{marginRight:5},onError:function(e){e.target.onerror=null,e.target.src=O}}),l.a.createElement(r.g,{name:a.tokenTransferInfo.name,address:a.tokenTransferInfo.contract_address,namePlus:a.tokenTransferInfo.name+" ("+a.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(a.internal_transactions)&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Internal_txns")),l.a.createElement("div",{className:"flex1"},Object.keys(a.internal_transactions).map(function(e,t){var n=[];return a.internal_transactions[e].map(function(e,a){var t=Object(i.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];n.push(l.a.createElement("div",{key:e.transaction_id,className:"d-flex align-items-center content_item"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"mr-1"},Object(o.c)("transfers")),l.a.createElement("div",{className:"mr-1"},t.map_amount+" "+t.map_token_name_abbr),l.a.createElement("div",{className:"mr-1"},Object(o.c)("from")),l.a.createElement("div",{className:"mr-1",style:{width:"150px"}},l.a.createElement(r.c,{address:e.caller_address},e.caller_address)),l.a.createElement("div",{className:"mr-1"},Object(o.c)("to")),l.a.createElement("div",{className:"mr-1",style:{width:"150px"}},l.a.createElement(r.c,{address:e.transfer_to_address},e.transfer_to_address)))))}),n}))),"{}"!=JSON.stringify(a.cost)&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Fee_Consumption")),l.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),l.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),l.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Method_calling")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_method"),":"),l.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name"},e,":"),l.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"UPDATEBROKERAGECONTRACT":a.method;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("trigger_smart_contract"),l.a.createElement("small",null,Object(o.c)("SR_set_brokerage_contract")))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content_pos"},l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Basic_info")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_triggers_owner_address"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:a.owner_address},a.owner_address))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_voting"},Object(o.c)("SR_set_brokerage"),":"),l.a.createElement("div",{className:"flex1"},a.brokerage?100-a.brokerage:100," %")),l.a.createElement("div",{className:"d-flex content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("value"),":"),a.call_value?l.a.createElement(m.b,{amount:a.call_value/c.F}):l.a.createElement(m.b,{amount:0})))),"{}"!=JSON.stringify(a.cost)&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Fee_Consumption")),l.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),l.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),l.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Method_calling")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_method"),":"),l.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name"},e,":"),l.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"SHIELDEDTRANSFERCONTRACT":var h=Object.keys(a),T=["cost","internal_transactions","map_token_name_abbr","map_token_id","map_token_precision","map_amount","map_amount_logo","map_token_name","contract_note","tokenTransferInfo"];return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),l.a.createElement("small",null,"SHIELDEDTRANSFERCONTRACT"))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,h.map(function(e){if(T.includes(e))return"";if("receive_description"==e){var t=a[e];return l.a.createElement(s.a,{label:e},t.map(function(e){return l.a.createElement("ul",{className:"mb-2"},l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"value_commitment:"),e&&e.value_commitment),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"note_commitment:"),e&&e.note_commitment),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"epk:"),e&&e.epk),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"c_enc:"),e&&e.c_enc),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"c_out:"),e&&e.c_out),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"zkproof:"),e&&e.zkproof))}))}if("spend_description"==e){var n=a[e];return l.a.createElement(s.a,{label:e},n.map(function(e){return l.a.createElement("ul",{className:"mb-2"},l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"value_commitment:"),e&&e.value_commitment),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"anchor:"),e&&e.anchor),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"nullifier:"),e&&e.nullifier),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"rk:"),e&&e.rk),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"zkproof:"),e&&e.zkproof),l.a.createElement("li",null,l.a.createElement("span",{className:"receive-item mr-2 text-muted"},"spend_authority_signature:"),e&&e.spend_authority_signature))}))}return"to_amount"==e||"from_amount"==e?l.a.createElement(s.a,{label:e},a[e]/c.F):l.a.createElement(s.a,{label:e},a[e])}))));default:return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",a.contractType)),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,a.owner_address?l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:a.owner_address})):"")))}return l.a.createElement("div",null,a.contractType&&l.a.createElement("div",{className:"card-body"},JSON.stringify(a)))}},3459:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),c=t(30),r=t(4),s=t(15),m=t(16),o=t(23),d=t(21),i=t(22),E=t(0),b=t.n(E),u=t(33),_=t(1300),f=t(375),N=t(13),v=t(3),p=t(9),O=t(18),h=t(617),T=t(81),g=t(24),x=t(2365),y=t(1492),j=t(12),A=t(20),k=t(255),C=t.n(k),w=t(364),R=t(6);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function I(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(t,!0).forEach(function(a){Object(c.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var F=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(d.a)(a).call(this))).state={loading:!0,notFound:!1,transaction:{hash:-1,timestamp:0},tabs:{contracts:{id:"contracts",icon:"fa fa-exchange-alt",path:"",label:b.a.createElement("span",null,Object(v.c)("contracts")),cmp:function(){return b.a.createElement(T.b,null)}}},resMessage:""},e}return Object(i.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){document.documentElement.scrollTop=0;var e=this.props,a=e.match,t=e.location,n=C.a.parse(t.search).lang;n&&this.props.setLanguage(n),this.load(a.params.hash)}},{key:"componentDidUpdate",value:function(e){var a=this.props.match;a.params.hash!==e.match.params.hash&&this.load(a.params.hash)}},{key:"load",value:function(){var e=Object(r.a)(l.a.mark(function e(a){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,transaction:{hash:a}}),e.next=3,N.a.getTransactionByHash(a);case 3:if((t=e.sent).hash){e.next=7;break}return this.setState({notFound:!0}),e.abrupt("return");case 7:if(!t||!R.v){e.next=12;break}return e.next=10,w.a.getTransactionInfo(a).catch(function(e){});case 10:(n=e.sent)&&this.setState({resMessage:n&&n.resMessage});case 12:this.setState({loading:!1,transaction:t,tabs:{contracts:{id:"contracts",icon:"fa fa-exchange-alt",path:"",label:b.a.createElement("span",null,Object(v.c)("contracts")),cmp:function(){return b.a.createElement(x.a,{contract:I({},{cost:t.cost},{},t.contractData,{},t.trigger_info,{},{internal_transactions:t.internal_transactions},{},{tokenTransferInfo:t.tokenTransferInfo},{},{contract_note:t.data},{contractType:y.a[t.contractType]})})}}}});case 13:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.transaction,t=e.tabs,n=e.loading,l=e.notFound,c=e.resMessage,r=this.props.match;return l?b.a.createElement("main",{className:"container header-overlap"},b.a.createElement(j.a,{color:"warning",className:"text-center"},Object(v.c)("transaction_not_found"))):b.a.createElement("main",{className:"container header-overlap"},n?b.a.createElement("div",{className:"card"},b.a.createElement(T.b,null,Object(v.c)("loading_transaction"))):b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-12"},b.a.createElement("div",{className:"card  list-style-header"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title m-0"},b.a.createElement("i",{className:"fa fa-hashtag mr-1"}),Object(v.c)("hash")," ",a.hash)),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table table-hover m-0"},b.a.createElement("tbody",null,a.hasOwnProperty("confirmed")&&b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("status"),":"),b.a.createElement("td",null,a.confirmed?b.a.createElement("span",{className:"badge badge-success text-uppercase"},Object(v.c)("Confirmed")):b.a.createElement("span",{className:"badge badge-danger text-uppercase"},Object(v.c)("Unconfirmed")))),a.hasOwnProperty("contractRet")&&b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("result"),":"),b.a.createElement("td",null,a.contractRet," ",R.v&&c?"(".concat(c,")"):"")),b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("hash"),":"),b.a.createElement("td",null,b.a.createElement(g.a,null,a.hash,b.a.createElement(h.a,{text:a.hash,className:"ml-1"})))),b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("block"),":"),b.a.createElement("td",null,b.a.createElement(O.b,{number:a.block}))),0!==a.timestamp&&b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("time"),":"),b.a.createElement("td",null,b.a.createElement(p.a,{value:a.timestamp}),"\xa0",b.a.createElement(p.e,{value:a.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0")))))),b.a.createElement("div",{className:"card mt-3  list-style-body"},b.a.createElement("div",{className:"card-body p-0  list-style-body__body",style:{overflow:"auto"}},b.a.createElement(_.a,null,Object.values(t).map(function(e){return b.a.createElement(f.a,{key:e.id,exact:!0,path:r.url+e.path,render:function(a){return b.a.createElement(e.cmp,null)}})})))))))}}]),a}(b.a.Component);var U={setLanguage:A.B};a.default=Object(u.connect)(function(e){return{}},U)(F)}}]);