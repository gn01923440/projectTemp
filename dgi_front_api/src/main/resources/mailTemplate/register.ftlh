<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Spring Boot Email using FreeMarker</title>
</head>
<body>
<div style="margin-top: 10px"><b>${ obj.mailContact }</b>  您好:</div>
<br/>
<div id='mailContent'>${ obj.mailContent }</div>
<br/>
<div>綠電供電平台網址: <a href="${ obj.webURL }">申請連結</a></div>

<br/>
<div>綠電供電平台團隊 敬上</div>
<div>*注意:本郵件是由綠電供電平台自動發送，請勿直接回覆。</div>
</body>
</html>