import jwt from 'jsonwebtoken'
const authentication =(req,res,next)=>{
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'Unauthorized' })
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(403).json({ message: 'Forbidden' })
    }

}

export default authentication;