export const getSignUp = (req, res) => res.render("signUp", {pageTitle:"Create Account"})
export const postSignUp = (req, res) => {
    console.log(req.body)
    res.end()
}
export const editUser = (req, res) => res.send("Edit User Page")
export const deleteUser = (req, res) => res.send("Delete User Page")
export const login = (req, res) => res.send("Login User Page")
export const logout = (req, res) => res.send("Logout User Page")
export const seeUser = (req, res) => res.send("See User Page")