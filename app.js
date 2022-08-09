let phone = [// ojbject trong arr .
    {
        name: "Sony Xperia XZ Premium ",
        brand: "Sony",
        price:"4428",
        color:"While",
        category:"Phone",

    },
    {
        name: "OPPO F3 Plus",
        brand: "OPPO",
        price:"5487",
        color:"Black",
        category:"Phone",
    },

    {
        name: "IPhone 13 Pro max",
        brand: "Apple",
        price:"21490",
        color:"Gray",
        category:"Phone",

    },
    {
        name: "Samsung Galaxy S8",
        brand: "Samsung",
        price:"8490",
        color:"Blue",
        category:"change",
    }
]
//1.1
// for(i=0; i<=phone.length-1;i++){
//     console.log(`name : ${phone[i].name}`);
//    console.log(`price : ${phone[i].price}`);
//    console.log('=========================');
// }
//1.2Viết script in / đăng xuất sản phẩm với số của chúng, sau đó in / đăng
// xuất thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhập
// let userInput = Number(prompt('nhập vào số bạn muốn xem thông tin'));
// console.log(`name : ${phone[userInput-1].name}`);
// console.log(`brand : ${phone[userInput-1].brand}`);
// console.log(`price : ${phone[userInput-1].price}`);
// console.log(`color : ${phone[userInput-1].color}`);
// console.log(`category: ${phone[userInput].category}`);
// console.log(`===========================================`);

//1.3Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập
// let userInput= prompt('mời bạn nhập category');
// for(i=0;i<=phone.length-1; i++){
//     if(userInput===phone[i].category){
//         console.log(`name : ${phone[i].name}`);
//         console.log(`brand :${phone[i].brand}`);
//         console.log(`price: ${phone[i].price}`);
//         console.log(`color : ${phone[i].color}`);
//         console.log(`category:${phone[i].category}`);
//         console.log(`==============================`);
//     }
// }

//1.4 , 1.5
phone[0].providers="Phukienso";
phone[1].providers="Tgdd";
phone[2].providers="Tgdd";
phone[3].providers="Tgdd";
console.log(phone);
let userInput = prompt("sản phẩm nhà cung cấp mong muốn");
for (let i = 0; i < phone.length; i++) {
    if (userInput == phone[i].providers) {
        console.log(`Name: ${phone[i].name}`);
        console.log(`Brand: ${phone[i].brand}`);
        console.log(`Price: ${phone[i].price}`);
        console.log(`Color: ${phone[i].color}`);
        console.log(`Category: ${phone[i].category}`);
        console.log(`Providers: ${phone[i].providers}`);
        console.log("--------------------------------");

    }
}


