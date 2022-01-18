export default function handler(req, res) {
    const codigo = req.query.codigo;
    
    res.status(200).json({
        id: codigo,
        nome: `José ${codigo}`,
        email: `carvalho.jose${codigo}@gmail.com`
    });

}