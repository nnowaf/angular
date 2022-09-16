export class GetUserResponse{
    page!:        number;
    per_page!:    number;
    total!:       number;
    total_pages!: number;
    data!:        DataUser[];
}

export class DataUser {
    id!:         number;
    email!:      string;
    first_name!: string;
    last_name!:  string;
    avatar!:     string;
}

export class RequestBody {
    name!: string;
    job!: string;
}
