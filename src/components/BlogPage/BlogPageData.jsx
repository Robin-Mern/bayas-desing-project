import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogData = [
    {
        id: 1,
        title: "Simple Home Design Tips",
        date: "Apr 3, 2026",
        image: "/images/blog-img1.jpg",
        content: [
            {
                type: "text",
                value: "Homebuyers in 2026 are looking beyond square footage and polished finishes. They want homes that support the way they actually live: flexible work schedules, changing family needs, lower running costs, and more time spent at home."
            },
            {
                type: "text",
                value: "Smitha - Chavara is a thoughtfully designed residential interior project that brings together contemporary elegance, comfort, and everyday functionality. The design focuses on creating warm and inviting interiors with carefully selected materials, refined finishes, and a cohesive visual language. Each space was planned to reflect the character of the home while providing a comfortable environment for modern living."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "image",
                src: "/images/blog-detail-img.jpg",
                alt: "Simple Home Design Tips"
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
        ]
    },
    {
        id: 2,
        title: "Modern Interior Design Trends.",
        date: "Apr 3, 2026",
        image: "/images/blog-img2.jpg",
        content: [
            {
                type: "text",
                value: "Homebuyers in 2026 are looking beyond square footage and polished finishes. They want homes that support the way they actually live: flexible work schedules, changing family needs, lower running costs, and more time spent at home."
            },
            {
                type: "text",
                value: "Smitha - Chavara is a thoughtfully designed residential interior project that brings together contemporary elegance, comfort, and everyday functionality. The design focuses on creating warm and inviting interiors with carefully selected materials, refined finishes, and a cohesive visual language. Each space was planned to reflect the character of the home while providing a comfortable environment for modern living."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "image",
                src: "/images/blog-detail-img.jpg",
                alt: "Simple Home Design Tips"
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
        ]
    },
    {
        id: 3,
        title: "Simple Home Design Tips.",
        date: "Apr 3, 2026",
        image: "/images/blog-img3.jpg",
        content: [
            {
                type: "text",
                value: "Homebuyers in 2026 are looking beyond square footage and polished finishes. They want homes that support the way they actually live: flexible work schedules, changing family needs, lower running costs, and more time spent at home."
            },
            {
                type: "text",
                value: "Smitha - Chavara is a thoughtfully designed residential interior project that brings together contemporary elegance, comfort, and everyday functionality. The design focuses on creating warm and inviting interiors with carefully selected materials, refined finishes, and a cohesive visual language. Each space was planned to reflect the character of the home while providing a comfortable environment for modern living."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "image",
                src: "/images/blog-detail-img.jpg",
                alt: "Simple Home Design Tips"
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
        ]
    },
    {
        id: 4,
        title: "Modern Interior Design Trends.",
        date: "Apr 3, 2026",
        image: "/images/blog-img2.jpg",
        content: [
            {
                type: "text",
                value: "Homebuyers in 2026 are looking beyond square footage and polished finishes. They want homes that support the way they actually live: flexible work schedules, changing family needs, lower running costs, and more time spent at home."
            },
            {
                type: "text",
                value: "Smitha - Chavara is a thoughtfully designed residential interior project that brings together contemporary elegance, comfort, and everyday functionality. The design focuses on creating warm and inviting interiors with carefully selected materials, refined finishes, and a cohesive visual language. Each space was planned to reflect the character of the home while providing a comfortable environment for modern living."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "image",
                src: "/images/blog-detail-img.jpg",
                alt: "Simple Home Design Tips"
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
        ]
    },
    {
        id: 5,
        title: "Simple Home Design Tips",
        date: "Apr 3, 2026",
        image: "/images/blog-img3.jpg",
        content: [
            {
                type: "text",
                value: "Homebuyers in 2026 are looking beyond square footage and polished finishes. They want homes that support the way they actually live: flexible work schedules, changing family needs, lower running costs, and more time spent at home."
            },
            {
                type: "text",
                value: "Smitha - Chavara is a thoughtfully designed residential interior project that brings together contemporary elegance, comfort, and everyday functionality. The design focuses on creating warm and inviting interiors with carefully selected materials, refined finishes, and a cohesive visual language. Each space was planned to reflect the character of the home while providing a comfortable environment for modern living."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "image",
                src: "/images/blog-detail-img.jpg",
                alt: "Simple Home Design Tips"
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
        ]
    },
    {
        id: 6,
        title: "Simple Home Design Tips",
        date: "Apr 3, 2026",
        image: "/images/blog-img1.jpg",
        content: [
            {
                type: "text",
                value: "Homebuyers in 2026 are looking beyond square footage and polished finishes. They want homes that support the way they actually live: flexible work schedules, changing family needs, lower running costs, and more time spent at home."
            },
            {
                type: "text",
                value: "Smitha - Chavara is a thoughtfully designed residential interior project that brings together contemporary elegance, comfort, and everyday functionality. The design focuses on creating warm and inviting interiors with carefully selected materials, refined finishes, and a cohesive visual language. Each space was planned to reflect the character of the home while providing a comfortable environment for modern living."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "image",
                src: "/images/blog-detail-img.jpg",
                alt: "Simple Home Design Tips"
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
            {
                type: "text",
                value: "The client wanted a sophisticated yet comfortable home that balanced contemporary aesthetics with practical functionality. Key priorities included creating well-organized spaces, selecting elegant materials and finishes, maximizing natural light, and establishing a consistent design language throughout the interiors. The goal was to create a home that feels refined, welcoming, and personalized to the client's lifestyle."
            },
        ]
    },

];

export default blogData;