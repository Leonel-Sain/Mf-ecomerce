import ph from "../src/components/imagenes/imagenes"

const products = [

        {
            "id": "1",
            "name": "Detergente",
            "price": 5.99,
            "stock": 100,
            "img": ph.pic1,
            "description": "Detergente multiusos para limpieza profunda.",
            "categoryId": "Quimicos"
        },
        {
            "id": "2",
            "name": "Limpiavidrios",
            "price": 3.49,
            "stock": 120,
            "img": ph.pic2,
            "description": "Limpia cristales para ventanas y espejos.",
            "categoryId": "Accesorios"
        },
        {
            "id": "3",
            "name": "Desinfectante",
            "price": 4.99,
            "stock": 75,
            "img": ph.pic3,
            "description": "Desinfectante para eliminar gérmenes y bacterias.",
            "categoryId": "Accesorios"
        },
        {
            "id": "4",
            "name": "Escoba",
            "price": 9.99,
            "stock": 20,
            "img": ph.pic4,
            "description": "Escoba con cerdas resistentes para barrer todo tipo de suciedad.",
            "categoryId": "Accesorios"
        },
        {
            "id": "5",
            "name": "Trapo de piso",
            "price": 2.99,
            "stock": 200,
            "img": ph.pic5,
            "description": "Trapo absorbente para limpiar pisos de manera eficaz.",
            "categoryId": "Accesorios"
        },
        {
            "id": "6",
            "name": "Esponja",
            "price": 1.99,
            "stock": 150,
            "img": ph.pic6,
            "description": "Esponja de alta calidad para fregar utensilios y superficies.",
            "categoryId": "Accesorios"
        },
        {
            "id": "7",
            "name": "Guantes de limpieza",
            "price": 4.5,
            "stock": 80,
            "img": ph.pic7,
            "description": "Guantes resistentes al agua y químicos para proteger las manos durante la limpieza.",
            "categoryId": "Accesorios"
        },
        {
            "id": "8",
            "name": "Lavandina",
            "price": 3.29,
            "stock": 90,
            "img": ph.pic8,
            "description": "Lavandina concentrada para blanquear y desinfectar superficies.",
            "categoryId": "Quimicos"
        },
        {
            "id": "9",
            "name": "Cepillo de cerdas",
            "price": 2.79,
            "stock": 60,
            "img": ph.pic9,
            "description": "Cepillo con cerdas resistentes para limpiar áreas difíciles de alcanzar.",
            "categoryId": "Accesorios"
        },
        {
            "id": "10",
            "name": "Paño microfibra",
            "price": 2.49,
            "stock": 120,
            "img": ph.pic10,
            "description": "Paño suave y absorbente para limpiar sin dejar residuos.",
            "categoryId": "Accesorios"
        },
        {
            "id": "11",
            "name": "Jabón líquido Tide",
            "price": 7.99,
            "stock": 50,
            "img": ph.pic11,
            "description": "Jabón líquido para lavarropas con fragancia fresca y poder limpiador avanzado.",
            "categoryId": "Quimicos"
        },
        {
            "id": "12",
            "name": "Jabón líquido Skip",
            "price": 6.99,
            "stock": 45,
            "img": ph.pic12,
            "description": "Jabón líquido que ofrece una limpieza profunda y mantiene los colores vivos.",
            "categoryId": "Quimicos"
        },
        {
            "id": "13",
            "name": "Jabón líquido Ariel",
            "price": 8.99,
            "stock": 40,
            "img": ph.pic13,
            "description": "Jabón líquido concentrado que ofrece una limpieza impecable y frescura duradera.",
            "categoryId": "Quimicos"
        },
        {
            "id": "14",
            "name": "Perfume para piso",
            "price": 7.29,
            "stock": 55,
            "img": ph.pic14,
            "description": "Perfume para piso con diferentes",
            "categoryId": "Quimicos"
        }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
};

export const getProductsById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        }, 200)

    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoryId === categoryId));
        }, 200);
    });
};