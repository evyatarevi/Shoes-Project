// structure:
//             MainLayout:
//                         Nave
//                         outlet:
//                                 Home
//                                 Add
//                                 NotFound
//                                 Shoes:
//                                         Shoe:
//                                                 update / delete


// Context:
//         products
//         loading ?
//         error ?

// MainLayout:
//             return:
//                     Nav
//                     outlet

// Nav:
//     return:
//             NavLink -> to: /
//             NavLink -> to: /shoes
//             NavLink -> to: /add

// Shoes:
//         return:
//                 Cards


// Cards:
//         state: context products
//         return:
//                 section:
//                         products.map(product -> Card)

// Card:
//     func:

//     return:
//             img
//             label
//             btn -> choose | Link to: '/shoes/${id}'


// EditShoe:
//         state:
//                 img: img
//                 label: label
//         func: 
//             useParam: {id} -> {img, label} = find(id) -> 

//         return:
//                 Form

// Form:
//         input img: value = img, onChange: handel input change
//         input label: value = label, onChange: handelInputChange
//         btn update: handelSubmit(): await axios.put -> if success: set(context products = {...products, {img, label}})
//         btn delete: handelDelete(): await axios.delete -> if success: set(context products.filter = product.id !== id)




// import { useParams } from 'react-router-dom';

// const ProductPage = ({ products }) => {
//     const { id } = useParams();
//     const product = products.find(p => p.id === parseInt(id));

//     if (!product) {
//         return <div>Product not found</div>;
//     }