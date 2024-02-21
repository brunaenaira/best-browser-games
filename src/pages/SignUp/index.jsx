import React, {Component} from 'react'
import registerService from "../../service/RegisterService";
import {Navigate} from "react-router-dom";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "", email: "", senha: "", dtNascimento: "", state: "", country: "", redirectTo: null
        }
    }

    handleRegister = (event) => {
        event.preventDefault();
        let data = {
            fullName: this.state.fullName,
            email: this.state.email,
            senha: this.state.senha,
            dtNascimento: this.state.dtNascimento,
            state: this.state.state,
            country: this.state.country
        }
        try {
            let res = registerService.registerUser(data)
            if (res == null) {
                alert("Usuario ja cadastrado")
            } else {
                console.log("res", res)
                this.setState({redirectTo: "/sign-in"})
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao efetuar cadastro.")
        }
    }

    render() {
        if (this.state.redirectTo) {
            return <Navigate to="/sign-in"/>
        }
        return (<form className="m-auto" onSubmit={this.handleRegister}>
            <h3>Cadastro</h3>

            <div className="mb-2">
                <label>Nome Completo</label>
                <input
                    type="text" value={this.state.fullName}
                    onChange={e => this.setState({fullName: e.target.value})}

                    className="form-control"
                    placeholder="Digite seu nome completo"
                />
            </div>
            <div className="mb-2">
                <label>Email</label>
                <input
                    type="email" value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}

                    className="form-control"
                    placeholder="Digite seu email"
                />
            </div>
            <div className="mb-2">
                <label>Senha</label>
                <input
                    type="password" value={this.state.senha}
                    onChange={e => this.setState({senha: e.target.value})}
                    className="form-control"
                    placeholder="Digite sua senha"
                />
            </div>
            <div className="mb-2">
                <label>Data de Nascimento</label>
                <input
                    type="date" value={this.state.dtNascimento}
                    onChange={e => this.setState({dtNascimento: e.target.value})}

                    className="form-control"
                    placeholder="Data de nascimento"
                />
            </div>
            <div className="mb-2">
                <label>Estado</label>
                <input
                    type="text" value={this.state.state}
                    onChange={e => this.setState({state: e.target.value})}
                    className="form-control"
                    placeholder="Digite seu estado"
                />
            </div>
            <div className="mb-2">
                <label>País</label>
                <input
                    type="text" value={this.state.country}
                    onChange={e => this.setState({country: e.target.value})}
                    className="form-control"
                    placeholder="Digite seu país"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
            </div>
            <p className="forgot-password text-right">
                Já possui cadsatro? <a href="/sign-in">Entrar</a>
            </p>
        </form>)
    }
}
