export class Kategori {
    katId!: number 
    deptId!: number
    katName!: string
    desc!: string
    depName = new Department()
}

export class Department {
    depTDID!: number
    depName!: string
    descDep!: string
}


