export const loggerMiddleware=(req,res,next)=>{
    console.log("페이지 새로고침------------------------------------------>")
    console.log(`Someone is going to "${req.url}" with method {${req.method}}`)
    next();
}
export const localsMiddleware = (req, res, next)=>{
    res.locals.loggedIn = Boolean(req.session.loggedIn)
    res.locals.siteName="Wetube"
    res.locals.loggedInUser = req.session.user || {};
    next()
}
export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    } else {
        console.log("You are not a loggedIn user.")
        return res.redirect("/login");
    }
  };

export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        console.log("You are not a public user.")
        return res.redirect("/");
    }
};