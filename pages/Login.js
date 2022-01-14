import react, {useState} from 'react';
import { useRouter } from 'next/router'
import * as api from '../components/api';
import { Dialog } from '../components/dialog';
import Link from 'next/link';

export default function Login(props) {
    const router = useRouter();

    const [dialogInfo, setDialogInfo] = useState({
        show: false
    });
    const [state, setMainState] = useState({
            username: '',
            password:'',
    });

    const updateUser = () => {
        setMainState({
            ...state,
        })
    }

    const doLogin = () => {
        console.log('doLogin')
        console.log(state)
        api.login(state.username, state.password).then(res => {
            if (!res.error) {
                router.push('/dashboard');
            } else {
                setDialogInfo({
                    show: true,
                    title: 'Login Error',
                    body: res.error
                })
            }
            console.log(res);
        })
    };

    const commingSoon = e => {
        e.preventDefault();
        setDialogInfo({
            show: true,
            title: 'Not implemented',
            body: 'Comming Soon'
        })
    }
    return (<div className="bg-gradient-primary">
        <Dialog dialogInfo={dialogInfo} setDialogInfo={setDialogInfo}></Dialog>
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    name="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    value={state.username}
                                                    onChange={e => {
                                                        state.username = e.target.value;
                                                        updateUser();
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    name="exampleInputPassword" placeholder="Password"
                                                    value={state.password}
                                                    onChange={e => {
                                                        state.password = e.target.value;
                                                        updateUser();
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <a href="index.html" className="btn btn-primary btn-user btn-block"
                                                onClick={(e => {
                                                    e.preventDefault();
                                                    state.isLoggedIn = true;
                                                    updateUser();
                                                    doLogin();
                                                })}
                                            >
                                                Login
                                            </a>
                                            <hr />
                                            <a href="index.html" className="btn btn-google btn-user btn-block"
                                                onClick={commingSoon}
                                            >
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="#" className="btn btn-facebook btn-user btn-block"
                                                onClick={commingSoon}
                                            >
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link href="register">
                                                <a className="small" href="#">Create an Account!</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>        
    </div>)
}