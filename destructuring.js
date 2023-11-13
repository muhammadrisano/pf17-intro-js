const product = {
  name: "indomie ayam bawang",
  description: "indomie seleraku",
  price: 3500,
  stock: 10,
  distributor: {
    perusahaan: "PT. DEF Mandiri",
    alamat: "jl. bla bla padang",
    app: [
      {
        name: "IndoApp",
        link: "http://bbla",
      },
      {
        name: "MieApp",
        link: "http://bbla",
      },
    ],
  },
};

const name ="risano"

const {name:namaProduct, description} = product
// tanpa descructuring
// const name = product.name
// const price = product.price

// menggunakan descructuring
// const {nama, price, stock, distributor[0]} = product

// const {perusahaan, alamat} = product.distributor
// const { link } = product.distributor.app;
// const {name} = product.distributor.app[1]

// console.log(namaProduct);


// descrukturing array

const hobi = ['goding', 'joging', 'gaming']

const [hobi1, hobi2, hobi3] = hobi

console.log(hobi2);