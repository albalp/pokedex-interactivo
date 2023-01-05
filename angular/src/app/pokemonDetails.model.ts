export interface pokemonDetails{
    id: number,
    name: string,
    imageUrl: string,
    stats: Stats[]
}

interface Stats {
    name: string,
    base_stat: number
}