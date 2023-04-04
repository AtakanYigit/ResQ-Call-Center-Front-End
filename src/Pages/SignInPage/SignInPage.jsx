import axios from "axios"
import {Link} from "react-router-dom"
import Background from "../../Assets/BG.png"
import Logo from "../../Assets/Logo.svg"
import Conf from "../../Configurations"
import "./SignInPage.scss"

const SignInPage = () =>{
    const signInHandler = (e) =>{
        e.preventDefault();
        axios.post(Conf.signIn, {
            email: e.target[0].value,
            password: e.target[1].value
        }).then(res => {
            if(res.data.status === "success"){
                localStorage.setItem("token", res.data.token)
                window.location.href = "/"
            }else{
                alert(res.data.message)
            }
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <div className = "signInPage">
            <form className = "signInContainer" onSubmit={signInHandler}>
                <h1>Sign In</h1>
                <input type="email"    placeholder = "E-mail"   required/>
                <input type="password" placeholder = "Password" required/>
                <input type="submit"   value = "Sign In"/>
                <Link to = "/ForgotPassword">Forgot Password?</Link>
            </form>
            <div className = "imageContainer" style = {{backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className = "imageContainerInner">
                    <img src = {Logo} alt = ""/>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
