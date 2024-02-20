const AuthService = {
    authenticate(data) {
        let users = JSON.parse(localStorage.getItem("users"));
        if (!data || !users) return null;
        try {
            return users.filter((user) => (user.email === data.email) && (user.senha === data.senha))
        } catch (error) {
            console.log(error)
            return null

        }
    }, logoff() {
        localStorage.setItem("loggedUser", null)
    }, // Função para salvar o usuário logado no local storage
    setLoggedUser(data) {
        let parsedData = JSON.stringify(data)
        localStorage.setItem("loggedUser", parsedData)
    },

// Função responsável por recuperar o usuário logado do local storage
    getLoggedUser() {
        let data = localStorage.getItem("loggedUser");
        if (!data) return null;
        try {
            return JSON.parse(data)
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default AuthService;