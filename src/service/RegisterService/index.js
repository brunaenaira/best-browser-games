const RegisterService = {
    registerUser(data) {
        let users = JSON.parse(localStorage.getItem("users")) ?? []
        if (!data) return null;
        try {
            let userNotExists = users.length === 0 || users.filter((user) => user.email === data.email) == null
           debugger
            if (userNotExists) {
                debugger
                users.push(data)
                localStorage.setItem("users", JSON.stringify(users))
                return data
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
export default RegisterService;