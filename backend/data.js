import bcrypt from 'bcryptjs';

const data = {

    users: [
          {
              name: "admin",
              email:"admin@example.com",
              password: bcrypt.hashSync("1234", 8),
              isAdmin: true,

          },
          {
              name: "john",
              email: "john@gmail.com",
              password: bcrypt.hashSync("1234", 8),
              isAdmin: false,
          },
    ],
   
    products:[
        {
          
            name: "Nike Slim Shirt",
            category: "Shirts",
            image:"/images/p1.jpg",
            price:120,
            countInStock: 10,
            Brand: "Nike",
            size: "0",
            rating: 1.5,
            numReviews: 6,
            description: "high quality product"
        },
        {
            
            name: "Nike Shirt",
            category: "Shirts",
            image:"/images/p1.jpg",
            price:130,
            countInStock: 8,
            Brand: "Nike",
            size: "0",
            rating: 3.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
           
            name: "Nike Slim t",
            category: "Shirts",
            image:"/images/p1.jpg",
            price:110,
            countInStock: 5,
            Brand: "Nike",
            size: "0",
            rating: 4.5,
            numReviews: 7,
            description: "high quality product"
        },
        {
           
            name: "Slim Shirt",
            category: "Shirts",
            image:"/images/p1.jpg",
            price:13,
            countInStock: 6,
            Brand: "Nike",
            size: "0",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
           
            name: "Nike Slim jeans",
            category: "Shirts",
            image:"/images/p1.jpg",
            price:150,
            countInStock: 5,
            Brand: "Nike",
            size: "0",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
          
            name: "Nike Slim socks",
            category: "Shirts",
            image:"/images/p1.jpg",
            price:220,
            countInStock: 0,
            Brand: "Nike",
            size: "0",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
    ]
}

export default data;