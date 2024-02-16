import React, {Component} from "react";
import authService from "../../service/AuthService";
import {redirect} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", senha: ""
        }
    }

    handleLogin = async (event) => {
        event.preventDefault();
        let data = {
            email: this.state.email, senha: this.state.senha, redirectTo: null
        }
        try {
            let res = await authService.authenticate(data)
            if (!res) {
                alert("Favor cadastrar user")
            } else {
                console.log("res", res.data)
                authService.setLoggedUser(res.data)
                this.setState({redirectTo: "/best-games"})
            }
        } catch (error) {
            console.log(error)
            debugger
            alert("Erro ao efetuar login.")
        }
    }

    render() {
        if (this.state.redirectTo) {
            return redirect(this.state.redirectTo)
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
            {/*<div className="mb-3">*/}
            {/*    <div className="custom-control custom-checkbox">*/}
            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            className="custom-control-input"*/}
            {/*            id="customCheck1"*/}
            {/*        />*/}
            {/*        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
            <p className="forgot-password text-right">
                Não possui cadastro? <a href="/sign-up">Cadastre-se</a>
            </p>
            {/*<p className="forgot-password text-right">*/}
            {/*    Forgot <a href="#">password?</a>*/}
            {/*</p>*/}
        </form>);
    }
}