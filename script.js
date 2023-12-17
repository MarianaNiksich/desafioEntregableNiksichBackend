
class ProductManager {
    constructor() {
        this.products = []
    }
    static id = 0

    addProducts = (title, description, price, thumbnail, code, stock) => {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`el codigo ${code} ya ha sido ingresado`)
                break
            }
        }

        const newProduct = { title, description, price, thumbnail, code, stock, }

        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++
            this.products.push({ ...newProduct, id: ProductManager.id })
        } else {
            console.log("el producto no puede ser ingresado porque todos los campos son obligatorios")
        }

    }

    getProducts = () => {
        return this.products
    }

    existe = (id) => {

        return this.products.find((productos) => productos.id === id)
    }

    getElementsById = (id) => {
        !this.existe(id) ? console.log("not found") : console.log(this.existe(id))
    }

}

const productos = new ProductManager
//testing de array vacio
console.log(productos.getProducts())
//agregando productos
productos.addProducts("titulo1", "description1", 1000, "imagen1", "abc123", 5)
console.log(productos.getProducts())
//validacion del codigo 
productos.addProducts("titulo2", "description2", 2000, "imagen2", "abc123", 6)
console.log(productos.getProducts())
//validacion de campos obligatorios
productos.addProducts("titulo3", "description3", 3000, "imagen3", "abc123")
console.log(productos.getProducts())
//buscando producto por ID
productos.getElementsById(1)
productos.getElementsById(3)