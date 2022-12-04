import User from "../models/User"
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
    await User.create({
        name, username, email, password, location,
    })
    return res.redirect("/login")
}


export const editUser = (req, res) => res.send("Edit User Page")
export const deleteUser = (req, res) => res.send("Delete User Page")
export const login = (req, res) => res.send("Login User Page")
export const logout = (req, res) => res.send("Logout User Page")
export const seeUser = (req, res) => res.send("See User Page")