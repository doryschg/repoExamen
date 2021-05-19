const jwt = require('jsonwebtoken')

export function autenticacion(req, res)
{
    if(req.body.usuario === "dorys" && req.body.contrasena === "123456") {
  const payload = {
   check:  true,
   nombreUsuario: req.body.usuario,
   usuarioId:12
  };
  const token = jwt.sign(payload, "llave", {
   expiresIn: 1440
  });
  res.json({
   mensaje: 'Autenticación correcta',
   token: token
  });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
  }



  
