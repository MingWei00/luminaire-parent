<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>光明网</title>
        <link rel='stylesheet' href="/static/css/admin/login.css" />
        <script type="text/javascript" src="/static/js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="/static/js/admin/login.js"></script>
    </head>
    <body>    	
    	    <div class="form" style="position:relative">
		
		<!--注册表单-->
        <div class="form_register" style="position:absolute;height:0;">  
            <form action="#" method="post">
                <h1>注册</h1>
                <div class="form_item">
                    <label for="username">用户名：</label>
                    <input type="text" name="username" id="username" placeholder="请输入用户名" required >
                </div>
                <div class="form_item">
                    <label for="password">密码：</label>
                    <input type="password" name="password" id="password" placeholder="请输入密码名" required>
                </div>
                <div class="form_item">
                    <label for="captcha">验证码：</label>
                    <input type="text" name="captcha" id="captcha" placeholder="请输入验证码" required>
                </div>
                <div class="form_item">
                	<div class="left">
                    <img class="captcha" src="../../img/bg.jpg" />
                    <a href="">看不清，换一张</a>
                    </div>
                </div>
                <div class="form_item">
                	<input type="hidden" name="aid" />
                    <input type="submit" value="注册">
                </div>
            </form>
            <div class="info">已有账号？点击<span class="switch login_Btn">登录</span></div>
        </div>
		
		<!--登录表单-->
        <div class="form_login">
			
			<form action="#" method="post">
				<h1>登录</h1>
				<div class="form_item">
					<label for="username">用户名：</label>
					<input type="text" name="username" id="username" placeholder="请输入用户名" required>
				</div>
				<div class="form_item">
					<label for="password">密码：</label>
					<input type="password" name="password" id="password" placeholder="请输入密码名" required>
				</div>
				<div class="form_item">
					<label for="loginway">登录方式：</label>
					<select name="loginway" id="loginway">
						<option value="0">普通登录</option>
						<option value="1">管理登录</option>
					</select>
				</div>
				<div class="form_item">
					<input type="submit" value="登录">
				</div>
			</form>
			<div class="info">没有账号？点击<span class="switch register_Btn">注册账号</span></div>
		
       </div>
    </div>
 	</body>
</html>