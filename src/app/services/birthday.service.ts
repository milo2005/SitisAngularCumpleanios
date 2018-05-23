import { Injectable } from '@angular/core';

@Injectable()
export class BirthdayService {

    loadWeek(): User[] {
        return [
            { name: 'Julian', day: 1 },
            { name: 'Pepito', day: 4 },
            { name: 'Alejandra', day: 0 }
        ];
    }

    loadPhotos(): Photo[] {
        return [
            {
                image: 'https://sumedico.com/wp-content/uploads/2017/12/por-qu%C3%A9-adoptar-un-gato.jpg',
                date: new Date(), name: 'Fulanita'
            },
            {
                image: 'https://www.petdarling.com/articulos/wp-content/uploads/2014/11/eliminar-pis-de-gato.jpg',
                date: new Date(), name: 'Juanito'
            },
            {
                image: 'https://www.rockandpop.cl/wp-content/uploads/2018/04/1-18.jpg',
                date: new Date(), name: 'Pepe'
            },
            {
                image: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/594954595bafe8a1a53c98d7/gato_0.jpg',
                date: new Date(), name: 'Juanita'
            },
            {
                image: 'http://d3u38kqreh4sel.cloudfront.net/media/wysiwyg/BlogImages/Junio2016/gato-feliz.jpg',
                date: new Date(), name: 'Pepa'
            },
            {
                image: 'https://www.rockandpop.cl/wp-content/uploads/2018/04/1-18.jpg',
                date: new Date(), name: 'Fulanita'
            }
        ];
    }

}

export class User {
    constructor(public name: string, public day: number) { }
}

export class Photo {
    constructor(public image: string, public date: Date, public name: string) { }
}
