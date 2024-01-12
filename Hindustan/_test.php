<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/authentication.js"></script>
    <link rel="stylesheet" href="css/signup.css">
</head>
<body>
    <form class="form-wrapper" id="form">
        <div class="inputgroup">
            <input type="text" name="username" id="username">
            <div class="result" id="result"></div>
        </div>
        <button type="button" onclick="sendRequest()" class="btn-signup">submit</button> 
    </form>
    
</body>
</html>