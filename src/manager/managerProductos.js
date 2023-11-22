import fs from "fs";


export default class ProductManager{
    constructor(){
        this.path = "./src/files/productos.json"
    }

    
    getProducts = async () => {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path,"utf-8")
            const product = JSON.parse(data)
            return product
        }else{
            return []        
        }

        }
    
        addProduct = async(productos)=>{
            const product = await this.getProducts();
            if(product.length === 0){
                productos.id = 1 
            }else{
                productos.id = product[product.length-1].id + 1
            }
            product.push(productos);
            await fs.promises.writeFile(this.path,JSON.stringify(product,null,"\t"))
            return product
        }

        
        
}
    



