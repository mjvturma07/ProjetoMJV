export default interface productProps{
    id: number,
    title:string,
    price:number,
    description:string,
    category: {
        id:string,
        name:string,
        image:string
    },
    images: [string],
}