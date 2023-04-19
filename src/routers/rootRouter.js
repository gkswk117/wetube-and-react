import express from "express"
import {getSignUp, postSignUp, getLogin, postLogin} from "../controllers/userController"
import {home, searchVideo} from "../controllers/videoController"
import { publicOnlyMiddleware } from "../middlewares"

const rootRouter = express.Router()
rootRouter.get("/", home)
rootRouter.route("/signup").all(publicOnlyMiddleware).get(getSignUp).post(postSignUp)
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin)
//브라우저 주소창에 localhost:4000/login을 입력하고 엔터한다.
//-> 서버에 get request를 보낸다.
//-> 서버는 ​/로 get 요청이 들어오면 app.get("/login", getLogin)에 의해서 getLogin 함수를 시행한다
//-> getLogin함수에서 get request에 대한 response를 주면 요청이 종료 된다. reponse를 주지 않으면 영원히 대기한다. 보통은 response로 페이지 view를 (예를 들어 login.pug)를 넘겨준다.

//post는 form에서 method를 post라고 설정하고, submit을 누르면 발동.
//login.pug에 가보면 submit 이벤트 발생시 action에 있는 url로 post request를 보낸다.
//예를 들어, form(method="POST", action="/login")
//req.body에 사용자가 form 안의 input에 적은 내용들이 들어가 있다.
rootRouter.get("/search", searchVideo)

export default rootRouter