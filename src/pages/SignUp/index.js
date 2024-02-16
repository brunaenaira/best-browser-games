import React, {Component} from 'react'

export default class SignUp extends Component {
    render() {
        return (<form className="m-auto">
            <h3>Cadastro</h3>

            <div className="mb-2">
                <label>Nome Completo</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome completo"
                />
            </div>
            <div className="mb-2">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu email"
                />
            </div>
            <div className="mb-2">
                <label>Senha</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Digite sua senha"
                />
            </div>
            <div className="mb-2">
                <label>Data de Nascimento</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="Data de nascimento"
                />
            </div>
            <div className="mb-2">
                <label>Estado</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu estado"
                />
            </div>
            <div className="mb-2">
                <label>País</label>
                <input
                    type="text"
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