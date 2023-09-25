export class Beer {
    constructor(
        public beerId: string,
        public name: string,
        public category: string,
        public style: string,
        public country: string,
        public alcohol: number,
        public imageUrl: string,
        public color: string,
        public description: string,
        public notes: string[]
    ){}
}
