export interface sizes{
    label:string;
    value:string;
    price:number
}

export interface dataProp {
    id:string;
    name:string;
    theme:string;
    price:number;
    image:any;
    size: sizes[];
}

export interface SectionListProp {
    title: string;
    data: dataProp[];
}

export const Title = ['All','Abstract', 'Anime','Animal','Car','Nature'];

export interface CartDataProp {
    id:string;
    image?:any;
    name?:string;
    price?:number;
    size:string;
    quantity:number;
    theme?:string;
}

export const cartData: CartDataProp[]=[]

const sections: SectionListProp[] = [
    {
        title: 'Abstract',
        
        data: [
            {
                id: 'abstract_1',
                name: 'Cosmic Dawn',
                theme: 'Abstract',
                price: 19.99,
                image: require('../assets/abstract/abstract_1.png'),
                size: [
                    { label: 'Small', value: 'S', price: 19.99 },
                    { label: 'Medium', value: 'M', price: 24.99 },
                    { label: 'Large', value: 'L', price: 29.99 },
                    { label: 'Extra Large', value: 'XL', price: 34.99 },
                ],
            },
            {
                id: 'abstract_2',
                name: 'Neon Pulse',
                theme: 'Abstract',
                price: 21.99,
                image: require('../assets/abstract/abstract_2.png'),
                size: [
                    { label: 'Small', value: 'S', price: 21.99 },
                    { label: 'Medium', value: 'M', price: 26.99 },
                    { label: 'Large', value: 'L', price: 31.99 },
                    { label: 'Extra Large', value: 'XL', price: 36.99 },
                ],
            },
            {
                id: 'abstract_3',
                name: 'Aurora Flow',
                theme: 'Abstract',
                price: 23.99,
                image: require('../assets/abstract/abstract_3.png'),
                size: [
                    { label: 'Small', value: 'S', price: 23.99 },
                    { label: 'Medium', value: 'M', price: 28.99 },
                    { label: 'Large', value: 'L', price: 33.99 },
                    { label: 'Extra Large', value: 'XL', price: 38.99 },
                ],
            },
            {
                id: 'abstract_4',
                name: 'Midnight Bloom',
                theme: 'Abstract',
                price: 25.99,
                image: require('../assets/abstract/abstract_4.png'),
                size: [
                    { label: 'Small', value: 'S', price: 25.99 },
                    { label: 'Medium', value: 'M', price: 30.99 },
                    { label: 'Large', value: 'L', price: 35.99 },
                    { label: 'Extra Large', value: 'XL', price: 40.99 },
                ],
            },
        ],
    },
    {
        title: 'Animal',
        
        data: [
            {
                id: 'animal_1',
                name: 'Wild Wolf',
                theme: 'Animal',
                price: 19.99,
                image: require('../assets/animal/animal_1.png'),
                size: [
                    { label: 'Small', value: 'S', price: 19.99 },
                    { label: 'Medium', value: 'M', price: 24.99 },
                    { label: 'Large', value: 'L', price: 29.99 },
                    { label: 'Extra Large', value: 'XL', price: 34.99 },
                ],
            },
            {
                id: 'animal_2',
                name: 'Forest Fox',
                theme: 'Animal',
                price: 21.99,
                image: require('../assets/animal/animal_2.png'),
                size: [
                    { label: 'Small', value: 'S', price: 21.99 },
                    { label: 'Medium', value: 'M', price: 26.99 },
                    { label: 'Large', value: 'L', price: 31.99 },
                    { label: 'Extra Large', value: 'XL', price: 36.99 },
                ],
            },
            {
                id: 'animal_3',
                name: 'Ocean Dolphin',
                theme: 'Animal',
                price: 23.99,
                image: require('../assets/animal/animal_3.png'),
                size: [
                    { label: 'Small', value: 'S', price: 23.99 },
                    { label: 'Medium', value: 'M', price: 28.99 },
                    { label: 'Large', value: 'L', price: 33.99 },
                    { label: 'Extra Large', value: 'XL', price: 38.99 },
                ],
            },
            {
                id: 'animal_4',
                name: 'Golden Eagle',
                theme: 'Animal',
                price: 25.99,
                image: require('../assets/animal/animal_4.png'),
                size: [
                    { label: 'Small', value: 'S', price: 25.99 },
                    { label: 'Medium', value: 'M', price: 30.99 },
                    { label: 'Large', value: 'L', price: 35.99 },
                    { label: 'Extra Large', value: 'XL', price: 40.99 },
                ],
            },
        ],
    },
    {
        title: 'Anime',
       
        data: [
            {
                id: 'anime_1',
                name: 'Samurai Spirit',
                theme: 'Anime',
                price: 19.99,
                image: require('../assets/anime/anime_1.png'),
                size: [
                    { label: 'Small', value: 'S', price: 19.99 },
                    { label: 'Medium', value: 'M', price: 24.99 },
                    { label: 'Large', value: 'L', price: 29.99 },
                    { label: 'Extra Large', value: 'XL', price: 34.99 },
                ],
            },
            {
                id: 'anime_2',
                name: 'Starlight Hero',
                theme: 'Anime',
                price: 21.99,
                image: require('../assets/anime/anime_2.png'),
                size: [
                    { label: 'Small', value: 'S', price: 21.99 },
                    { label: 'Medium', value: 'M', price: 26.99 },
                    { label: 'Large', value: 'L', price: 31.99 },
                    { label: 'Extra Large', value: 'XL', price: 36.99 },
                ],
            },
            {
                id: 'anime_3',
                name: 'Mystic Guardian',
                theme: 'Anime',
                price: 23.99,
                image: require('../assets/anime/anime_3.png'),
                size: [
                    { label: 'Small', value: 'S', price: 23.99 },
                    { label: 'Medium', value: 'M', price: 28.99 },
                    { label: 'Large', value: 'L', price: 33.99 },
                    { label: 'Extra Large', value: 'XL', price: 38.99 },
                ],
            },
            {
                id: 'anime_4',
                name: 'Cyber Ninja',
                theme: 'Anime',
                price: 25.99,
                image: require('../assets/anime/anime_4.png'),
                size: [
                    { label: 'Small', value: 'S', price: 25.99 },
                    { label: 'Medium', value: 'M', price: 30.99 },
                    { label: 'Large', value: 'L', price: 35.99 },
                    { label: 'Extra Large', value: 'XL', price: 40.99 },
                ],
            },
        ],
    },
    {
        title: 'Car',
       
        data: [
            {
                id: 'car_1',
                name: 'Sport Sedan',
                theme: 'Car',
                price: 19.99,
                image: require('../assets/car/car_1.png'),
                size: [
                    { label: 'Small', value: 'S', price: 19.99 },
                    { label: 'Medium', value: 'M', price: 24.99 },
                    { label: 'Large', value: 'L', price: 29.99 },
                    { label: 'Extra Large', value: 'XL', price: 34.99 },
                ],
            },
            {
                id: 'car_2',
                name: 'Classic Coupe',
                theme: 'Car',
                price: 21.99,
                image: require('../assets/car/car_2.png'),
                size: [
                    { label: 'Small', value: 'S', price: 21.99 },
                    { label: 'Medium', value: 'M', price: 26.99 },
                    { label: 'Large', value: 'L', price: 31.99 },
                    { label: 'Extra Large', value: 'XL', price: 36.99 },
                ],
            },
            {
                id: 'car_3',
                name: 'Luxury SUV',
                theme: 'Car',
                price: 23.99,
                image: require('../assets/car/car_3.png'),
                size: [
                    { label: 'Small', value: 'S', price: 23.99 },
                    { label: 'Medium', value: 'M', price: 28.99 },
                    { label: 'Large', value: 'L', price: 33.99 },
                    { label: 'Extra Large', value: 'XL', price: 38.99 },
                ],
            },
            {
                id: 'car_4',
                name: 'Racing Beast',
                theme: 'Car',
                price: 25.99,
                image: require('../assets/car/car_4.png'),
                size: [
                    { label: 'Small', value: 'S', price: 25.99 },
                    { label: 'Medium', value: 'M', price: 30.99 },
                    { label: 'Large', value: 'L', price: 35.99 },
                    { label: 'Extra Large', value: 'XL', price: 40.99 },
                ],
            },
        ],
    },
    {
        title: 'Nature',
        
        data: [
            {
                id: 'nature_1',
                name: 'Mountain Sunrise',
                theme: 'Nature',
                price: 19.99,
                image: require('../assets/nature/nature_1.png'),
                size: [
                    { label: 'Small', value: 'S', price: 19.99 },
                    { label: 'Medium', value: 'M', price: 24.99 },
                    { label: 'Large', value: 'L', price: 29.99 },
                    { label: 'Extra Large', value: 'XL', price: 34.99 },
                ],
            },
            {
                id: 'nature_2',
                name: 'Ocean Breeze',
                theme: 'Nature',
                price: 21.99,
                image: require('../assets/nature/nature_2.png'),
                size: [
                    { label: 'Small', value: 'S', price: 21.99 },
                    { label: 'Medium', value: 'M', price: 26.99 },
                    { label: 'Large', value: 'L', price: 31.99 },
                    { label: 'Extra Large', value: 'XL', price: 36.99 },
                ],
            },
            {
                id: 'nature_3',
                name: 'Forest Mist',
                theme: 'Nature',
                price: 23.99,
                image: require('../assets/nature/nature_3.png'),
                size: [
                    { label: 'Small', value: 'S', price: 23.99 },
                    { label: 'Medium', value: 'M', price: 28.99 },
                    { label: 'Large', value: 'L', price: 33.99 },
                    { label: 'Extra Large', value: 'XL', price: 38.99 },
                ],
            },
            {
                id: 'nature_4',
                name: 'Desert Sunset',
                theme: 'Nature',
                price: 25.99,
                image: require('../assets/nature/nature_4.png'),
                size: [
                    { label: 'Small', value: 'S', price: 25.99 },
                    { label: 'Medium', value: 'M', price: 30.99 },
                    { label: 'Large', value: 'L', price: 35.99 },
                    { label: 'Extra Large', value: 'XL', price: 40.99 },
                ],
            },
        ],
    },
];

export default sections;