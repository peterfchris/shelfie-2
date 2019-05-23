module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then((inventory) => {
            res.status(200).send(inventory)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {$name, $price, $image_url} = req.body
        db.add_product()
        .then(($name, $price, $image_url) => {
            res.status(200).send($name, $price, $image_url)
        })
    }
}