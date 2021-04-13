export class Config {

    public constructor(public readonly baseUrl: string,
                       public readonly path: string,
                       public readonly check: boolean = true,
                       public readonly name: string = 'token') {

    }

}
