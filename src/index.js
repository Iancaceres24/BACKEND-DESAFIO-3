
import ProductManager from "./manager/managerProductos.js";
import express from "express"

const Manproductos = new ProductManager()

const eve = async() =>{

    let producto1=
        { 
        
        title: "Manzana",
        description: "Una Dulce Manzana",
        price: "$20",
        thumbnail: "url",
        code: "1435",
        stock:"100"
    }
    let producto2={ 
        
        title: "Pera",
        description: "Una Jugoza Pera",
        price: "$25",
        thumbnail: "url",
        code: "1436",
        stock:"50"
    }
    let producto3={ 
        
        title: "Banana",
        description: "Una Rica Banana",
        price: "$15",
        thumbnail: "url",
        code: "1437",
        stock:"35"
    }

    // let result = await Manproductos.addProduct(producto1)
    //     result = await Manproductos.addProduct(producto2)
    //     result = await Manproductos.addProduct(producto3)
        let productos =  await Manproductos.getProducts()
        const PORT = 8080;
        const app = express();
    
        app.listen(PORT, () => {
            console.log(`Servidor funcionando en el puerto: ${PORT}`);
        });
    
        app.get("/", async (req, res) => {
            const productos = await Manproductos.getProducts();
            res.json(productos);
        });
    
        

        app.use(express.urlencoded({extended:true}))
        app.get("/limit", async (req, res) => {
            const limite = parseInt(req.query.limite);
            const produlimit = productos.slice(0, limite);
            res.json(produlimit);
        });

        app.get("/:idProductos", async (req, res) => {
            const idProductos = req.params.idProductos;
            const produ = productos.find(pro =>{return pro.id == idProductos})
    
            if (!produ) {
                return res.json({
                    error: "Producto no encontrado"
                });
            } else {
                res.json({
                    producto: produ
                });
            }
        });
    };
        
eve()

