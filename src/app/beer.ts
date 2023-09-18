export class Beer {
    constructor(
        public name: string,
        public style: string,
        public country: string,
        public alcohol: number,
        public imageUrl: string,
        public notes: string[]
    ){}
}
