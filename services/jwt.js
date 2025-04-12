import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';


export function generarToken( email, rol ) {

    return jsonwebtoken.sign({ email, rol }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1hr'});
}