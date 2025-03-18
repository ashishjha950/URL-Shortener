import jwt from 'jsonwebtoken'
const verification = (req, res) => {
  try {
    const token = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if (token) {
        return res.status(200).end('authorized')
    }
  } catch (err) {
    res.status(401).end('unauthorized')
  }
}

const logout = (req,res)=>{
    return res.cookie('token','',{ httpOnly: true,expires: new Date(0)}).status(200).end('Logout Successfully')
}

export {verification,logout}
