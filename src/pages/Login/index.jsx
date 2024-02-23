import React, {Component} from "react";
import AuthService from "../../service/AuthService";
import {Navigate} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", senha: "", loggedUser: null
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        let data = {
            email: this.state.email, senha: this.state.senha
        }
        try {
            let res = AuthService.authenticate(data)
            if (!res) {
                alert("Favor cadastrar user")
            } else {
                console.log("res", res)
                AuthService.setLoggedUser(res[0])
                this.setState({loggedUSer: AuthService.getLoggedUser()})
            }
        } catch (error) {
            console.log(error)
            alert(`Erro ao efetuar login.${error}`)
        }
    }

    componentDidMount() {
        this.setState({loggedUser: AuthService.getLoggedUser()})
    }

    render() {
        if (this.state.loggedUSer !== null) {
            return <Navigate to={"/best-games"}/>
        }
        return (<form onSubmit={this.handleLogin}>
            <h3>Login</h3>
            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    className="form-control"
                    placeholder="Insira o email"
                />
            </div>
            <div className="mb-3">
                <label>Senha</label>
                <input
                    type="password"
                    value={this.state.senha}
                    onChange={e => this.setState({senha: e.target.value})}
                    className="form-control"
                    placeholder="Insira a senha"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
            <p className="forgot-password text-right">
                Não possui cadastro? <a href="/sign-up">Cadastre-se</a>
            </p>
        </form>);
    }
}
