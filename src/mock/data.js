const list = [
    {id:"01", name:"Fifa 2023", stock:10, price:25000, description:"FIFA 2023 para PS5 es la última entrega de la famosa franquicia de fútbol de EA Sports. Con gráficos impresionantes y una jugabilidad mejorada, vive la emoción del fútbol como nunca antes. Controla a tus equipos favoritos, compite en ligas y torneos, y disfruta de la experiencia en línea con jugadores de todo el mundo", img:"https://i.postimg.cc/fyWX30Fd/fifareact.jpg", category:"juegos"},
    {id:"02", name:"Final Fantasy XVI", stock:5, price:20000, description:"Final Fantasy XVI es el último juego de la legendaria serie de RPG de Square Enix. Sumérgete en un mundo de fantasía épico con gráficos impresionantes y combates emocionantes en tiempo real. Explora una narrativa cautivadora y personajes memorables en esta emocionante entrega de la saga", img:"https://i.postimg.cc/Gh5Y2tjB/finalfantasyreact.jpg", category:"juegos"},
    {id:"03", name:"Hogwarts Legacy", stock:2, price:30000, description:"Hogwarts Legacy es un emocionante juego de acción y aventura ambientado en el mundo mágico de Harry Potter. Sumérgete en la legendaria escuela de magia de Hogwarts y vive una experiencia única como estudiante de magia. Explora un vasto mundo abierto, aprende hechizos poderosos, enfrenta criaturas mágicas y desentraña secretos antiguos en esta emocionante aventura mágica", img:"https://i.postimg.cc/T2QgzCLJ/hogwartsreact.jpg", category:"juegos"},
    {id:"04", name:"Assasins Creed Valhalla", stock:20, price:25000, description:"Assassin's Creed Valhalla es un juego de acción y aventura que te lleva a la era vikinga. Encarna a Eivor, un feroz guerrero vikingo, y lidera a tu clan en una búsqueda épica por conquistar y asentarse en la Inglaterra del siglo IX. Combina sigilo, combate y exploración en un emocionante viaje lleno de intrigas, batallas y descubrimientos en un mundo abierto impresionante y detallado", img:"https://i.postimg.cc/RVFK4Kw5/valhallareact.jpg", category:"juegos"},
    {id:"05", name:"The Witcher III", stock:4, price:20000, description:"The Witcher 3: Wild Hunt es un emocionante juego de rol de mundo abierto protagonizado por Geralt de Rivia, un cazador de monstruos. Explora un vasto mundo de fantasía, toma decisiones impactantes y enfréntate a criaturas peligrosas en una emocionante aventura llena de magia y acción", img:"https://i.postimg.cc/k5rbQHzq/witcherreact.jpg", category:"juegos"},
    {id:"06", name:"Teclado Hyperx", stock:20, price:30000, description:"El teclado HyperX es una poderosa herramienta diseñada para los jugadores más exigentes. Con teclas mecánicas de respuesta rápida y retroiluminación LED brillante, te proporciona una experiencia de juego inigualable. Su construcción sólida y duradera asegura un rendimiento excepcional durante largas sesiones de juego. Además, cuenta con funciones personalizables y teclas multimedia dedicadas para un control completo. Si buscas un teclado de alto rendimiento y estilo para llevar tu juego al siguiente nivel, el teclado HyperX es la elección perfecta", img:"https://i.postimg.cc/y8Mt9FH2/083.jpg", category:"perifericos"},
    {id:"07", name:"Mouse Logitech", stock:50, price:20000, description:"El mouse Logitech es el compañero perfecto para tu computadora. Con un diseño ergonómico y cómodo, se adapta a tu mano para largas sesiones de trabajo o juego. Su precisión y respuesta suave te permiten navegar con facilidad y realizar clics precisos. Además, con botones programables y una rueda de desplazamiento rápida, puedes personalizarlo según tus necesidades. El mouse Logitech es confiable, duradero y te ofrece un control excepcional en cada movimiento", img:"https://mauricomputacion.com.ar/images/productos/22019.webp", category:"perifericos"},
    {id:"08", name:"Auriculares Sony", stock:10, price:90000, description:"Los auriculares Sony ofrecen una experiencia de sonido excepcional. Con una calidad de audio nítida y potente, te sumergirás en tu música, películas o juegos favoritos como nunca antes. Su diseño cómodo y ajustable garantiza horas de uso sin fatiga. Además, con tecnología inalámbrica Bluetooth, disfrutarás de la libertad de movimiento sin enredos de cables. Los auriculares Sony son la elección perfecta para aquellos que buscan un audio excepcional y comodidad durante todo el día", img:"https://http2.mlstatic.com/D_NQ_NP_720416-MLA52221299687_102022-O.webp", category:"perifericos"},
    {id:"09", name:"Home Theater Parlantes", stock:2, price:100000, description:"El Home Theater con parlantes es la solución ideal para una experiencia de entretenimiento inmersiva en casa. Con un conjunto de parlantes de alta calidad, experimentarás un sonido envolvente que te sumergirá en tus películas, series y música favoritas. Cada parlante está diseñado para proporcionar una reproducción de audio clara y detallada, y juntos crean un ambiente acústico impactante. Disfruta de un cine en casa como nunca antes, con un sistema de sonido que te hará sentir parte de la acción y la emoción en cada momento", img:"https://stylewatch.vtexassets.com/arquivos/ids/235052/home-theater-thonet-and-Vander-TVHK09603274_01.jpg?v=638219385512130000", category:"perifericos"},
]
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(()=>{
            if(error){
                reject("No hay data");
            }else{
                resolve(list);
            }
        }, 2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(list.find((item) => item.id === id))
        }, 2000)
    })
}