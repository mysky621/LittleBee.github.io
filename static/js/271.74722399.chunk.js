webpackJsonp([271],{TEEd:function(e,n,y){var d;d=function(){"use strict";return[{locale:"cy",pluralRuleFunction:function(e,n){return n?0==e||7==e||8==e||9==e?"zero":1==e?"one":2==e?"two":3==e||4==e?"few":5==e||6==e?"many":"other":0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},fields:{year:{displayName:"blwyddyn",relative:{0:"eleni",1:"blwyddyn nesaf","-1":"llynedd"},relativeTime:{future:{zero:"ymhen {0} mlynedd",one:"ymhen blwyddyn",two:"ymhen {0} flynedd",few:"ymhen {0} blynedd",many:"ymhen {0} blynedd",other:"ymhen {0} mlynedd"},past:{zero:"{0} o flynyddoedd yn \xf4l",one:"blwyddyn yn \xf4l",two:"{0} flynedd yn \xf4l",few:"{0} blynedd yn \xf4l",many:"{0} blynedd yn \xf4l",other:"{0} o flynyddoedd yn \xf4l"}}},"year-short":{displayName:"bl.",relative:{0:"eleni",1:"blwyddyn nesaf","-1":"llynedd"},relativeTime:{future:{zero:"ymhen {0} mlynedd",one:"ymhen blwyddyn",two:"ymhen {0} flynedd",few:"ymhen {0} blynedd",many:"ymhen {0} blynedd",other:"ymhen {0} mlynedd"},past:{zero:"{0} o flynyddoedd yn \xf4l",one:"blwyddyn yn \xf4l",two:"{0} flynedd yn \xf4l",few:"{0} blynedd yn \xf4l",many:"{0} blynedd yn \xf4l",other:"{0} o flynyddoedd yn \xf4l"}}},month:{displayName:"mis",relative:{0:"y mis hwn",1:"mis nesaf","-1":"mis diwethaf"},relativeTime:{future:{zero:"ymhen {0} mis",one:"ymhen mis",two:"ymhen deufis",few:"ymhen {0} mis",many:"ymhen {0} mis",other:"ymhen {0} mis"},past:{zero:"{0} mis yn \xf4l",one:"{0} mis yn \xf4l",two:"{0} fis yn \xf4l",few:"{0} mis yn \xf4l",many:"{0} mis yn \xf4l",other:"{0} mis yn \xf4l"}}},"month-short":{displayName:"mis",relative:{0:"y mis hwn",1:"mis nesaf","-1":"mis diwethaf"},relativeTime:{future:{zero:"ymhen {0} mis",one:"ymhen mis",two:"ymhen deufis",few:"ymhen {0} mis",many:"ymhen {0} mis",other:"ymhen {0} mis"},past:{zero:"{0} mis yn \xf4l",one:"{0} mis yn \xf4l",two:"deufis yn \xf4l",few:"{0} mis yn \xf4l",many:"{0} mis yn \xf4l",other:"{0} mis yn \xf4l"}}},day:{displayName:"diwrnod",relative:{0:"heddiw",1:"yfory",2:"drennydd","-2":"echdoe","-1":"ddoe"},relativeTime:{future:{zero:"ymhen {0} diwrnod",one:"ymhen diwrnod",two:"ymhen deuddydd",few:"ymhen {0} diwrnod",many:"ymhen {0} diwrnod",other:"ymhen {0} diwrnod"},past:{zero:"{0} diwrnod yn \xf4l",one:"{0} diwrnod yn \xf4l",two:"{0} ddiwrnod yn \xf4l",few:"{0} diwrnod yn \xf4l",many:"{0} diwrnod yn \xf4l",other:"{0} diwrnod yn \xf4l"}}},"day-short":{displayName:"diwrnod",relative:{0:"heddiw",1:"yfory",2:"drennydd","-2":"echdoe","-1":"ddoe"},relativeTime:{future:{zero:"ymhen {0} diwrnod",one:"ymhen diwrnod",two:"ymhen deuddydd",few:"ymhen {0} diwrnod",many:"ymhen {0} diwrnod",other:"ymhen {0} diwrnod"},past:{zero:"{0} diwrnod yn \xf4l",one:"{0} diwrnod yn \xf4l",two:"{0} ddiwrnod yn \xf4l",few:"{0} diwrnod yn \xf4l",many:"{0} diwrnod yn \xf4l",other:"{0} diwrnod yn \xf4l"}}},hour:{displayName:"awr",relative:{0:"yr awr hon"},relativeTime:{future:{zero:"ymhen {0} awr",one:"ymhen awr",two:"ymhen {0} awr",few:"ymhen {0} awr",many:"ymhen {0} awr",other:"ymhen {0} awr"},past:{zero:"{0} awr yn \xf4l",one:"{0} awr yn \xf4l",two:"{0} awr yn \xf4l",few:"{0} awr yn \xf4l",many:"{0} awr yn \xf4l",other:"{0} awr yn \xf4l"}}},"hour-short":{displayName:"awr",relative:{0:"yr awr hon"},relativeTime:{future:{zero:"ymhen {0} awr",one:"ymhen awr",two:"ymhen {0} awr",few:"ymhen {0} awr",many:"ymhen {0} awr",other:"ymhen {0} awr"},past:{zero:"{0} awr yn \xf4l",one:"awr yn \xf4l",two:"{0} awr yn \xf4l",few:"{0} awr yn \xf4l",many:"{0} awr yn \xf4l",other:"{0} awr yn \xf4l"}}},minute:{displayName:"munud",relative:{0:"y funud hon"},relativeTime:{future:{zero:"ymhen {0} munud",one:"ymhen {0} munud",two:"ymhen {0} munud",few:"ymhen {0} munud",many:"ymhen {0} munud",other:"ymhen {0} munud"},past:{zero:"{0} munud yn \xf4l",one:"{0} munud yn \xf4l",two:"{0} munud yn \xf4l",few:"{0} munud yn \xf4l",many:"{0} munud yn \xf4l",other:"{0} munud yn \xf4l"}}},"minute-short":{displayName:"mun.",relative:{0:"y funud hon"},relativeTime:{future:{zero:"ymhen {0} munud",one:"ymhen {0} mun.",two:"ymhen {0} fun.",few:"ymhen {0} munud",many:"ymhen {0} munud",other:"ymhen {0} munud"},past:{zero:"{0} munud yn \xf4l",one:"{0} munud yn \xf4l",two:"{0} fun. yn \xf4l",few:"{0} munud yn \xf4l",many:"{0} munud yn \xf4l",other:"{0} munud yn \xf4l"}}},second:{displayName:"eiliad",relative:{0:"nawr"},relativeTime:{future:{zero:"ymhen {0} eiliad",one:"ymhen {0} eiliad",two:"ymhen {0} eiliad",few:"ymhen {0} eiliad",many:"ymhen {0} eiliad",other:"ymhen {0} eiliad"},past:{zero:"{0} eiliad yn \xf4l",one:"{0} eiliad yn \xf4l",two:"{0} eiliad yn \xf4l",few:"{0} eiliad yn \xf4l",many:"{0} eiliad yn \xf4l",other:"{0} eiliad yn \xf4l"}}},"second-short":{displayName:"eiliad",relative:{0:"nawr"},relativeTime:{future:{zero:"ymhen {0} eiliad",one:"ymhen {0} eiliad",two:"ymhen {0} eiliad",few:"ymhen {0} eiliad",many:"ymhen {0} eiliad",other:"ymhen {0} eiliad"},past:{zero:"{0} eiliad yn \xf4l",one:"{0} eiliad yn \xf4l",two:"{0} eiliad yn \xf4l",few:"{0} eiliad yn \xf4l",many:"{0} eiliad yn \xf4l",other:"{0} eiliad yn \xf4l"}}}}}]},e.exports=d()}});