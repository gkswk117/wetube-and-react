import User from "../models/User"
import bcrypt from "bcrypt"

let link = 1
export const getSignUp = (req, res) => res.render("signUp", {pageTitle:"Create Account", link}) 
export const postSignUp = async(req, res) => {
    const { name, username, email, password, password2, location } = req.body;
    const pageTitle = "signUp";
    if (password !== password2) {
      return res.render("signUp", {
        pageTitle,
        errorMessage: "Password confirmation does not match.",
      });
    }
    const exists = await User.exists({ $or: [{ username }, { email }] });
    if (exists) {
      return res.render("signUp", {
        pageTitle,
        errorMessage: "This username/email is already taken.",
      });
    }
    try{
      await User.create({
        name, username, email, password, location,
      })
    }catch (error) {
      console.log(error)
      return res.status(400).render("signUp", {
        pageTitle: "Failed",
        errorMessage: error._message,
      });
    }
    return res.redirect("/login")
}
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true
  req.session.user = user
  return res.redirect("/");
};

export const getEdit = (req, res) => {
  return res.render("edit-profile", {pageTitle:"Edit Profile"})
}
export const postEdit = async (req, res) => {
  // const _id = req.session.user._id;
  // const {name,email,username,location} = req.body
  const { session:{user:_id}, body:{name,email,username,location} } = req
  await User.findByIdAndUpdate(_id, {name,email,username,location})
  return res.redirect("/")
}
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/")
}

export const deleteUser = (req, res) => res.send("Delete User Page")

export const seeUser = (req, res) => res.send("See User Page")