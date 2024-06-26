import { Injectable } from "@angular/core";
import { Product } from "../Models/Product";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
    products: Product[] = [

        new Product(1, 'Djembe', 'Mali', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
            'C# Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" }, "SAInstruments", "Drums",
            158.37, 170, true, 3, "../../assets/images/african-drums-9hl.png", false),
        new Product(2, 'Kora', 'Mali', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
            'C Major', { wood: "Birch", skin: "Goatskin", string: "Nylon" }, "AMInstruments", "String",
            209.99, 170, true, 6, "../../assets/images/Kora.png", true),
        new Product(3, 'Kabosy', 'Madagascar', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
            'G Major', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
             "SAInstruments", "String", 149.99, 170, true, 4, 
             "../../assets/images/African_Kabosy.png", false),
        new Product(4, 'Gasba', 'Algeria', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
             'A Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
              "SAInstruments", "Woodwing", 249.99, 170, true, 2, 
              "../../assets/images/Gasba.png", false),
        new Product(5, 'Balafon', 'Mali', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
              'Bb Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
               "SAInstruments", "Idiophone", 399.99, 170, true, 1, 
               "../../assets/images/Balafon.png", true),
        new Product(6, 'Kundi', 'Uganda', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
               'F# Major', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                "AMInstruments", "String", 512.99, 170, true, 2, 
                "../../assets/images/African-Kundi.png", true),
        new Product(7, 'Kankangui', 'Benin', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
               'D Major', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                "AMInstruments", "Woodwing", 77.99, 170, true, 5, 
                "../../assets/images/KanKanGui.png", false),
        new Product(8, 'Udu', 'Niger', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
               'C Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                "AMInstruments", "Idiophone", 67.99, 32, true, 11, 
                "../../assets/images/Udu.png", true),
        new Product(9, 'Akonting', 'Senegal', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
                'C Major', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                 "AMInstruments", "String", 249.99, 190, true, 8, 
                 "../../assets/images/Akonting.png", false),
        new Product(10, 'Kalimba', 'Zimbabwe', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
                 'F# Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                  "AMInstruments", "Percussive", 49.99, 19, true, 24, 
                  "../../assets/images/Kalimba.png", false),
        new Product(11, 'Iron Bells', 'Zimbabwe', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
                  'F# Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                   "AMInstruments", "Percussive", 49.99, 13, false, 15, 
                   "../../assets/images/Iron---Bells.png", false),
        new Product(12, 'Bell Rattle', 'Zimbabwe', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
                  'F# Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                   "AMInstruments", "Percussive", 69.99, 13, false, 15, 
                   "../../assets/images/African_Y_Shape_Rattle.png", false),
        new Product(13, 'Ndongo', 'Zimbabwe', 'Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.',
                  'F# Minor', { wood: "Birch", skin: "Goatskin", string: "Nylon" },
                   "AMInstruments", "Percussive", 29.99, 13, false, 10, 
                   "../../assets/images/_NdongoBells.png", false),         
    ]


getAllProducts(){
    return new Observable((sub) =>{
        setTimeout(() => {
            sub.next(this.products)
        }, 3555)
    })
}



}


