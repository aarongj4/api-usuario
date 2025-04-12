import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';


// export function generarToken( email, rol ) {

//     return jsonwebtoken.sign({ email, rol }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1hr'});
// }

export function verificarToken( req, res, next ){


    const token = req.header('Authorization')?.replace('Bearer ','');

    if (!token) {
        return res.status(401).json({ error: 'Token requerido'});
        
    }

    try {

        const dataToken = jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
        req.user = dataToken;
        next();
        
        
    } catch (error) {
        
        return res.status(401).json({ error: 'Token. no valido'});
    }



}

export function permitirRoles(...rolesPermitidos) {
    return (req, res, next) => {
        const rol = req.user?.rol;


        if (!rol || !rolesPermitidos.includes(rol)) {
            return res.status(403).json({ error: 'Acceso denegado. Rol no autorizado.' });
        }

        next();
    };
}