// blogsData.js

// simple helper function to generate slugs from titles
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")   // replace spaces & non-alphanumeric with hyphens
    .replace(/(^-|-$)+/g, "");     // remove leading/trailing hyphens

export const blogsData = [
  {
    id: 1,
    title: "The Secret Behind Our Signature Fruit Blends",
    slug: slugify("The Secret Behind Our Signature Fruit Blends"),
    date: "23 July, 2025",
    author: "zussioberry",
    description: "At Zussioberry, every sip is a burst of natural goodness. But what makes our fruit blends truly special? It's the careful selection of fresh, seasonal fruits, combined with our in-house fruit pulp processing methods that preserve flavor and nutrition...",
    
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "At Zussioberry, every sip is a burst of natural goodness. But what makes our fruit blends truly special? It's the careful selection of fresh, seasonal fruits, combined with our in-house fruit pulp processing methods that preserve flavor and nutrition."
      },
      {
        type: "heading",
        text: "Top 7 Must-Try Drinks & Snacks at Zussioberry Café"
      },
      {
        type: "paragraph",
        text: "Looking for a place where fresh flavors meet fun vibes? Welcome to Zussioberry, your go-to café for juices, snacks, and happiness in a glass. Whether you are in the mood for something refreshing, creamy, or indulgent, our menu has something for everyone."
      },
      {
        type: "paragraph",
        text: "Here are 6 must-try drinks and snacks that make Zussioberry a favorite among food lovers:"
      },
      // Berry Blast Smoothie
     
      {
        type: "list",
        items: [
          "Berry Blast Smoothie - Packed with strawberries, blueberries, and a touch of honey, this smoothie is the ultimate antioxidant boost. A perfect mix of sweet and tangy, it's a glass of health and happiness."
        ]
      },
       {
        type: "image",
        src: "/assets/blogs/BerryBS.jpg", // Add your image path here
        alt: "Berry Blast Smoothie",
        caption: "Berry Blast Smoothie - Packed with antioxidants"
      },
      // Classic Falooda
      
      {
        type: "list",
        items: [
          "Classic Falooda - Layers of rose syrup, basil seeds, vermicelli, ice cream, and nuts -- our falooda is a deliciously rich treat for those who love indulgence."
        ]
      },
      {
        type: "image",
        src: "/assets/blogs/ClassicF.jpg", // Add your image path here
        alt: "Classic Falooda",
        caption: "Classic Falooda - A rich, indulgent treat"
      },
      // Mango Magic Shake
      
      {
        type: "list",
        items: [
          "Mango Magic Shake - Seasonal and sensational! Made with fresh mangoes, this creamy shake is the perfect summer delight."
        ]
      },
      {
        type: "image",
        src: "/assets/blogs/MangoS.jpg", // Add your image path here
        alt: "Mango Magic Shake",
        caption: "Mango Magic Shake - Perfect summer delight"
      },
      // Veg Loaded Sandwich
      
      {
        type: "list",
        items: [
          "Veg Loaded Sandwich - Pair your drink with our crunchy, cheesy, and veggie-loaded sandwich -- a wholesome snack that's both filling and tasty."
        ]
      },
      {
        type: "image",
        src: "/assets/blogs/Sandwich.jpg", // Add your image path here
        alt: "Veg Loaded Sandwich",
        caption: "Veg Loaded Sandwich - Wholesome and tasty"
      },
      // Tropical Cooler
      
      {
        type: "list",
        items: [
          "Tropical Cooler - A refreshing blend of pineapple, orange, and mint -- this drink is your tropical escape in every sip."
        ]
      },
      {
        type: "image",
        src: "/assets/blogs/TropicalC.jpg", // Add your image path here
        alt: "Tropical Cooler",
        caption: "Tropical Cooler - Refreshing blend"
      },
      // Nutty Delight Shake
      
      {
        type: "list",
        items: [
          "Nutty Delight Shake - For all nut-lovers, this shake combines almonds, cashews, and pistachios with smooth, creamy milk for a rich and satisfying drink."
        ]
      },
      {
        type: "image",
        src: "/assets/blogs/CS2.jpg", // Add your image path here
        alt: "Nutty Delight Shake",
        caption: "Nutty Delight Shake - Rich and satisfying"
      },
      // Additional item
      
    ]
  },
  {
    id: 2,
    title: "Why Fresh Juices & Smoothies Are the Perfect Everyday Boost",
    slug: slugify("Why Fresh Juices & Smoothies Are the Perfect Everyday Boost"),
    date: "24 July, 2025",
    author: "zussioberry",
    description: "In a fast-paced world, your body needs more than just coffee to keep up. That's where fresh juices and smoothies come in -- nature's way of giving you energy, immunity, and happiness in one sip...",
    image: "/assets/Blogs.png",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "In a fast-paced world, your body needs more than just coffee to keep up. That's where fresh juices and smoothies come in -- nature's way of giving you energy, immunity, and happiness in one sip. At Zussioberry, we bring you drinks that are as tasty as they are healthy."
      },
      // First image after banner
      {
        type: "image",
        src: "/assets/blogs/b2banner2.jpg", // Add your image path here
        alt: "Fresh Juices Benefits",
        caption: "Fresh juices provide natural energy without the crash"
      },
      {
        type: "image",
        src: "/assets/blogs/b2banner1.jpg", // Add your image path here
        alt: "Zussioberry Smoothie Collection",
        caption: "Our delicious smoothie collection at Zussioberry"
      },
      {
        type: "paragraph",
        text: "But why should you include them in your daily routine? Here's why:"
      },
      
      {
        type: "list",
        items: [
          "Packed with Nutrients - Freshly prepared juices and smoothies are loaded with vitamins, minerals, and antioxidants that help your body stay strong and healthy.",
          "Boosts Energy Naturally - Unlike caffeine or energy drinks, fresh juices provide a steady energy boost without the crash. Perfect for busy mornings or mid-day slumps.",
          "Great for Digestion & Detox - Fruits like pineapple, oranges, and berries are rich in fiber and enzymes, helping your body detox naturally and improving digestion.",
          "Supports Weight Management - Low in calories but high in nutrition, smoothies and juices can be a great snack or meal replacement for those focusing on fitness.",
          "Hydration with a Twist - Why drink plain water when you can hydrate with a burst of fruity flavors? Smoothies and juices keep you refreshed and satisfied."
        ]
      },
      // Second image in blog 2
      
      {
        type: "paragraph",
        text: "A daily dose of freshness can change the way you feel, look, and live. At Zussioberry, we blend taste and health in every glass, making your everyday boost a delicious one."
      }
    ]
  },
  {
    id: 3,
    title: "Zussioberry - Where Fresh Flavors Meet Happy Vibes",
    slug: slugify("Zussioberry - Where Fresh Flavors Meet Happy Vibes"),
    date: "25 July, 2025",
    author: "zussioberry",
    description: "In a world full of fast food and instant meals, finding a place that serves freshness in every bite and sip is rare. Welcome to Zussioberry, a café that blends taste, health, and happiness...",
    image: "/assets/Blogs.png",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "In a world full of fast food and instant meals, finding a place that serves freshness in every bite and sip is rare. Welcome to Zussioberry, a café that blends taste, health, and happiness. From refreshing juices and indulgent smoothies to wholesome snacks, Zussioberry is not just a café -- it's an experience."
      },
      {
        type: "heading",
        text: "The Zussioberry Vibe"
      },
      // Image 1 for blog 3
      
      {
        type: "paragraph",
        text: "Step into Zussioberry, and you'll be greeted by vibrant colors, cheerful ambiance, and the irresistible aroma of fresh ingredients. Whether you're catching up with friends, taking a work break, or simply craving something delicious, Zussioberry sets the perfect mood."
      },
      {
        type: "heading",
        text: "What's on the Menu?"
      },
      // Image 2 for blog 3
     
      {
        type: "paragraph",
        text: "Our menu celebrates variety -- from berry-loaded smoothies to tropical coolers, creamy shakes, and crunchy snacks. Every item is crafted to balance taste and nutrition, making sure your cravings are satisfied without compromising on health."
      },
      {
        type: "heading",
        text: "Why Choose Zussioberry?"
      },
      {
        type: "list",
        items: [
          "Freshness First: Only the best ingredients make it to your glass and plate.",
          "All-Season Menu: From summer coolers to winter specials, there's always something new to try.",
          "Perfect for Everyone: Health enthusiasts, foodies, or anyone who loves good vibes and great flavors."
        ]
      },
      // Image 3 for blog 3
      
      {
        type: "heading",
        text: "More Than Just a Café"
      },
      {
        type: "paragraph",
        text: "Zussioberry isn't just about food; it's about creating memories. Whether it's a quick snack, a refreshing drink after a workout, or a weekend treat, every visit is a little celebration of flavor and freshness."
      },
      // Image 4 for blog 3 (before footer)
      {
        type: "image",
        src: "/assets/blogs/b3-1.jpg", // Add your image path here
        alt: "Happy Customers at Zussioberry",
        caption: "Our happy customers enjoying their Zussioberry experience"
      },
       {
        type: "image",
        src: "/assets/blogs/b3-2.jpg", // Add your image path here
        alt: "Zussioberry Menu",
        caption: "Our diverse and delicious menu offerings"
      },
      {
        type: "image",
        src: "/assets/blogs/b3-3.jpg", // Add your image path here
        alt: "Fresh Ingredients",
        caption: "We use only the freshest ingredients"
      },
      {
        type: "image",
        src: "/assets/blogs/b3-4.jpeg", // Add your image path here
        alt: "Zussioberry Café Ambiance",
        caption: "Our vibrant and cheerful café ambiance"
      },
      {
        type: "paragraph",
        text: "At Zussioberry, we believe happiness is best served fresh. Come, sip, bite, and enjoy the little moments that make life delicious."
      }
    ]
  }
];

export const recentPosts = [
  {
    id: 1,
    title: "Sugarcane Juice over Refined Sugar",
    slug: slugify("Sugarcane Juice over Refined Sugar"),
    author: "zussioberry",
    date: "July 23, 2025",
    image: "/assets/Blogs.png",
  },
  {
    id: 2,
    title: "Sugarcane Juice over Refined Sugar",
    slug: slugify("Sugarcane Juice over Refined Sugar"),
    author: "zussioberry",
    date: "July 23, 2025",
    image: "/assets/Blogs.png",
  },
  {
    id: 3,
    title: "Sugarcane Juice over Refined Sugar",
    slug: slugify("Sugarcane Juice over Refined Sugar"),
    author: "zussioberry",
    date: "July 23, 2025",
    image: "/assets/Blogs.png",
  },
];