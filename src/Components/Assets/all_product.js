import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "The Midnight Duchess",
    category: "women",
    image: p1_img,
    new_price: 5000,
    old_price: 8000,
  },
  {
    id: 2,
    name: " Overlap Collar  Blouse",
    category: "women",
    image: p2_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 3,
    name: "Flutter Sleeve Hem Blouse",
    category: "women",
    image: p3_img,
    new_price: 6000,
    old_price: 10000,
  },
  {
    id: 4,
    name: "Striped Collar Blouse",
    category: "women",
    image: p4_img,
    new_price: 10000,
    old_price: 15000,
  },
  {
    id: 5,
    name: "Striped Flutter Hem Blouse",
    category: "women",
    image: p5_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 6,
    name: "Striped  Overlap  Blouse",
    category: "women",
    image: p6_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 7,
    name: "Striped Onitsha Blouse",
    category: "women",
    image: p7_img,
    new_price: 6000,
    old_price: 10000,
  },
  {
    id: 8,
    name: "Blue Striped Blouse",
    category: "women",
    image: p8_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 9,
    name: "Flutter Sleeve Hem Blouse",
    category: "women",
    image: p9_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 10,
    name: "Maroon Magic Hoodie",
    category: "women",
    image: p10_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 11,
    name: "Velvet Crimson Crop-top",
    category: "women",
    image: p11_img,
    new_price: 5000,
    old_price: 6000,
  },
  {
    id: 12,
    name: "Ruby Hooded Delight",
    category: "women",
    image: p12_img,
    new_price: 8500,
    old_price: 12000,
  },
  {
    id: 13,
    name: "Forest Green Hoodie",
    category: "men",
    image: p13_img,
    new_price: 5500,
    old_price: 8000,
  },
  {
    id: 14,
    name: "Emerald Zip-Up",
    category: "men",
    image: p14_img,
    new_price: 9000,
    old_price: 12000,
  },
  {
    id: 15,
    name: "Jade Green Hoodie",
    category: "men",
    image: p15_img,
    new_price: 8000,
    old_price: 10000,
  },
  {
    id: 16,
    name: "Sage Sports Jacket",
    category: "men",
    image: p16_img,
    new_price: 4500,
    old_price: 10000,
  },
  {
    id: 17,
    name: "Mint Green Activewear",
    category: "men",
    image: p17_img,
    new_price: 3550,
    old_price: 12000,
  },
  {
    id: 18,
    name: "Hunter Green Zip Hoodie",
    category: "men",
    image: p18_img,
    new_price: 8500,
    old_price: 11000,
  },
  {
    id: 19,
    name: "Pistachio Zip-Up",
    category: "men",
    image: p19_img,
    new_price: 8200,
    old_price: 11500,
  },
  {
    id: 20,
    name: "Envy Green Hoodie",
    category: "men",
    image: p20_img,
    new_price: 8500,
    old_price: 11560,
  },
  {
    id: 21,
    name: "Alpine Adventure Jacket",
    category: "men",
    image: p21_img,
    new_price: 4000,
    old_price: 8000,
  },
  {
    id: 22,
    name: "Verdant Zip-Up",
    category: "men",
    image: p22_img,
    new_price: 12000,
    old_price: 13000,
  },
  {
    id: 23,
    name: "Evergreen Essential",
    category: "men",
    image: p23_img,
    new_price: 7000,
    old_price: 12000,
  },
  {
    id: 24,
    name: "Basil Green Sweatshirt",
    category: "men",
    image: p24_img,
    new_price: 8500,
    old_price: 10000,
  },
  {
    id: 25,
    name: "Lemon Splash Hoodie",
    category: "kid",
    image: p25_img,
    new_price: 6900,
    old_price: 11000,
  },
  {
    id: 26,
    name: "Soccer Silhouette Hoodie",
    category: "kid",
    image: p26_img,
    new_price: 7500,
    old_price: 12000,
  },
  {
    id: 27,
    name: "Goal Scorer Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 8700,
    old_price: 14000,
  },
  {
    id: 28,
    name: "Soccer Action Hoodie",
    category: "kid",
    image: p28_img,
    new_price: 7000,
    old_price: 10000,
  },
  {
    id: 29,
    name: "Dribble Design Hoodie",
    category: "kid",
    image: p29_img,
    new_price: 4550,
    old_price: 6550,
  },
  {
    id: 30,
    name: "Footballer Pullover",
    category: "kid",
    image: p30_img,
    new_price: 4500,
    old_price: 9500,
  },
  {
    id: 31,
    name: "Black Soccer Hoodie",
    category: "kid",
    image: p31_img,
    new_price: 12000,
    old_price: 14000,
  },
  {
    id: 32,
    name: "Playmaker Hoodie",
    category: "kid",
    image: p32_img,
    new_price: 9000,
    old_price: 13000,
  },
  {
    id: 33,
    name: "Soccer Hero Pullover",
    category: "kid",
    image: p33_img,
    new_price: 6000,
    old_price: 8000,
  },
  {
    id: 34,
    name: "Ultimate Striker Hoodie",
    category: "kid",
    image: p34_img,
    new_price: 8500,
    old_price: 10000,
  },
  {
    id: 35,
    name: "Game Changer Hoodie",
    category: "kid",
    image: p35_img,
    new_price: 7500,
    old_price: 12000,
  },
  {
    id: 36,
    name: "Midfield Maestro Hoodie",
    category: "kid",
    image: p36_img,
    new_price: 8500,
    old_price: 12000,
  },
];

export default all_product;
