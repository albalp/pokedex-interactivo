export interface pokemonDetails{
    id: number,
    name: string,
    imageUrl: string,
    stats: Stats[]
}

interface Stats {
stat: any
    name: string,
    base_stat: number
}