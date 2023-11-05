/* 
https://i.ibb.co/2s61p0G/Fourth-Wing.jpg
https://i.ibb.co/sqMGsbr/Battle-Ground.jpg
https://i.ibb.co/858XcP7/The-Olympian-Affair.jpg
https://i.ibb.co/RvBYByH/Princeps-Fury.jpg
https://i.ibb.co/NCgJ8zt/Furies-of-Calderon.jpg
https://i.ibb.co/b1gL08g/qdqs-Vz0-Ky0-IC.jpg
https://i.ibb.co/pRcgQnM/cj-NG2jh6-GQYC.jpg
https://i.ibb.co/qdzKChs/78-Kz-EAAAQBAJ.jpg
*/
interface IBook {
    title: string;
    img: string;
    published: string;
    description: string;
    author: string;
    price: number;
    rating: number;
    reviews: number;
    category: string;
    _id: number;
}

export const books: IBook[] = [
    {
        title: "The Fourth Wing",
        img: "https://i.ibb.co/2s61p0G/Fourth-Wing.jpg",
        published: "2021-04-01",
        description: "The Fourth Wing is the first book in the epic fantasy series, The Damned King. If you like morally gray characters, epic battles, and intricate world-building, then you’ll love J.R. Mandryk’s gritty tale.",
        author: "J.R. Mandryk",
        price: 2.99,
        rating: 4.5,
        reviews: 10,
        category: "Fantasy",
        _id: 1
    },
    {
        title: "Battle Ground",
        img: "https://i.ibb.co/sqMGsbr/Battle-Ground.jpg",
        published: "2020-09-29",
        description: "THINGS ARE ABOUT TO GET SERIOUS FOR HARRY DRESDEN, CHICAGO’S ONLY PROFESSIONAL WIZARD, in the next entry in the #1 New York Times bestselling Dresden Files.",
        author: "Jim Butcher",
        price: 2.99,
        rating: 4.5,
        reviews: 10,
        category: "Fantasy",
        _id: 2
    },
    {
        title: "The Olympian Affair",
        img: "https://i.ibb.co/858XcP7/The-Olympian-Affair.jpg",
        published: "2021-03-02",
        description: "The Olympian Affair is the second book in the epic fantasy series, The Damned King. If you like morally gray characters, epic battles, and intricate world-building, then you’ll love J.R. Mandryk’s gritty tale.",
        author: "J.R. Mandryk",
        price: 2.99,
        rating: 4.5
        ,
        reviews: 10,
        category: "Fantasy",
        _id: 3
    },
    {
        title: "Princeps' Fury",
        img: "https://i.ibb.co/RvBYByH/Princeps-Fury.jpg",
        published: "2008-11-25",
        description: "In the acclaimed Codex Alera novels, #1 New York Times bestselling author Jim Butcher has created a fascinating world in which the powerful forces of nature take physical form. But even magic cannot sway the corruption that threatens to destroy the realm of Alera once and for all.",
        author: "Jim Butcher",
        price: 2.99,
        rating: 4.5,
        reviews: 10,
        category: "Fantasy",
        _id: 4
    },
    // {
    //     title: "Furies of Calderon",
    //     img: "https://i.ibb.co/NCgJ8zt/Furies-of-Calderon.jpg",
    //     published: "2005-06-28",
    //     description: 'Furies of Calderon is the first novel in the high fantasy series Codex Alera by Jim Butcher. The novel was first released by Ace Books in the United States as a Hardcover edition on October 5, 2004, followed by a Paperback edition on June 26, 2005.',
    //     author: "Jim Butcher",
    //     price: 2.99,
    //     rating: 4.5,
    //     reviews: 10,
    //     category: "Fantasy",
    //     _id: 5
    // }
]


