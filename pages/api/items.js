// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            title: "Figurita octocat",
            price: 100,
            image: "http://localhost:3000/img/octocat.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 2,
            title: "Gorra",
            price: 200,
            image: "http://localhost:3000/img/hat.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 3,
            title: "Sudadera Halo",
            price: 200,
            image: "http://localhost:3000/img/shirt.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 4,
            title: "Introvert T-shirt",
            price: 200,
            image: "http://localhost:3000/img/prayge.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 5,
            title: "Invertocat 2.0 Coasters",
            price: 30,
            image: "http://localhost:3000/img/hoodie.webp",
            description:
                "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand.",
        },
        {
            id: 6,
            title: "Glow in the Dark Sticker Pack",
            price: 5,
            image: "http://localhost:3000/img/npm.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 7,
            title: "Adventure Sticker Pack",
            price: 10,
            image: "http://localhost:3000/img/sticky.webp",
            description:
                "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
        },
        {
            id: 8,
            title: "Invertocat Pullover Hoodie",
            price: 10,
            image: "http://localhost:3000/img/backpack.webp",
            description:
                "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!).",
        },
    ])
}
