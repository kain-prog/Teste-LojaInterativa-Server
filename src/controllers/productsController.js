const db = require('../db/config');


async function createProduct(req, res) {
    const body = req.body;

    console.log('body aqui', body);

    const product = {
        name: body.name,
        maker: body.maker,
        category: body.category,
        quantity: body.quantity,
        price: body.price,
    };

    const insertQuery = `INSERT INTO public.products (name, maker, category, quantity, price, id)
                        VALUES ('${product.name}', '${product.maker}', '${product.category}', 
                            ${product.quantity}, ${product.price}, default)`

    result = await db.query(insertQuery);

    res.status(200).json(result);
}

async function getAllProducts(req, res) {

    const result = await db.query(`SELECT * FROM public.products`)

    return res.json(result);

}

async function getProductById(req, res) {

    const id = req.params.id;

    const result = await db.query(`SELECT * FROM public.products WHERE id=${id}`);

    return res.json(result);
}

async function updateProduct(req, res) {

    const body = req.body;

    const id = req.params.id;

    const result = await db.query(`UPDATE public.products SET name='${body.name}', maker='${body.maker}', category='${body.category}', quantity=${body.quantity}, price=${body.price}
                                    WHERE id=${id};`);

    return res.json(result);

}


async function deleteProduct(req, res) {

    const id = req.params.id;

    const result = await db.query(`DELETE FROM public.products WHERE id=${id};`);

    return res.json(result);
    
}


module.exports = {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct};