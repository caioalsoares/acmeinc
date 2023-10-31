/* eslint-disable @typescript-eslint/no-unused-vars */
let seedCounter = 0
const itemsQuantity = 15

export interface StoreItem {
    id: number
    img: string
    name: string
    description: string
    price: string
    favorite: boolean
}

let allowedVerbs = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
    "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
    "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
    "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
    "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero", "Vela de cera", "Quimono", "Bambolê", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte", "Canga"]

let allowedAdjectives = ["prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado", "louvável",
    "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo", "romântico",
    "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio", "zeloso",
    "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor", "perfeccionista",
    "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado", "exigente",
    "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado", "windsurfista",
    "verdadeiro", "melhor", "terno"]

const getName = () => {
    const randomVerbIndex = Math.floor(Math.random() * allowedVerbs.length)
    const randomAdjectiveIndex = Math.floor(Math.random() * allowedAdjectives.length)
    const generatedName = [allowedVerbs[randomVerbIndex], allowedAdjectives[randomAdjectiveIndex]].join(" ")

    allowedAdjectives = allowedAdjectives.filter((_adjective, index) => index != randomAdjectiveIndex)
    allowedVerbs = allowedVerbs.filter((_verb, index) => index != randomVerbIndex)

    return generatedName
}

const getDescriptions = async () => {
    const fetchDescriptions = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=30&format=json").then(data => data.json())

    return fetchDescriptions
}

const getImage = async () => {
    const seedName = "acmeinc" + seedCounter

    const imageURL = await fetch(`https://picsum.photos/seed/${seedName}/250`).then((data) => data.url)

    seedCounter++
    return imageURL
}

export const MountStore = async (): Promise<StoreItem[]> => {

    const descriptions = await getDescriptions()

    const store: StoreItem[] = []

    for (let i = 0; i < itemsQuantity; i++) {

        const id = i
        const img = await getImage()
        const name = getName()
        const description = descriptions.shift()
        const price = (Math.round(Math.abs(10 + name.length * ((500 - description.length) / (4 - name.length))) * 100) / 100).toFixed(2)

        const item: StoreItem = {
            id,
            img,
            name,
            description,
            price: price,
            favorite: false
        }

        store.push(item)
    }


    return store

}