

const admin_token_key = "token"
const admin_user_name_key = "username"


class Auth {

    constructor(){
        // this.front_token = null
        // this.front_username = null
        this.admin_token = localStorage.getItem(admin_token_key)?localStorage.getItem(admin_token_key):""
        this.admin_user_name = localStorage.getItem(admin_user_name_key)?localStorage.getItem(admin_user_name_key):""
    }


    setAdminAuth(token,username){
        this.admin_token = token
        this.admin_user_name = username
        localStorage.setItem(admin_token_key,token)
        localStorage.setItem(admin_user_name_key,username)

    }

    // 删除token、用户信息，用来做用户登出
  
    delAdminAuth(){
        this.admin_token = null
        this.admin_user_name = null
        localStorage.removeItem(admin_token_key)
        localStorage.removeItem(admin_user_name_key)

    }


}

// 单例
const auth = new Auth()
export default auth