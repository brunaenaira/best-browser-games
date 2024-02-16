import React, {Component} from "react";

export default class Login extends Component {
    render() {
        return (<form>
            <h3>Login</h3>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Insira o email"
                />
            </div>
            <div className="mb-3">
                <label>Senha</label>
                <input
                    type="password"
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