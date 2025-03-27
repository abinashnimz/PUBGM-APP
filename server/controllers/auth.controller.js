export const signIn = async(req, res)=>{
    console.log(req.body);
    res.json({ message: "SignIn working" });
}

export const signOut = async(req, res)=>{
    res.json({ message: "SignOut working" });
    console.log(req.body);
}