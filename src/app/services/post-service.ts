import { Injectable } from '@angular/core';
import { Post } from '../models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[];

  constructor() {
    //Almacenarlo en una cookie
    if (localStorage.getItem('postBlog')) {
      this.arrPosts = JSON.parse(localStorage.getItem('postBlog'))
    } else {
      this.arrPosts = [
        new Post(
          'Hola',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ', 'Cristian Salerno',
          'https://aspblogs.blob.core.windows.net/media/dwahlin/Media/JavaScript-logo.png',
          new Date(),
          'humor'),
        new Post('Adios', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Cristian Salerno', 'https://cdn.scotch.io/1/MoEeQfUOQKqR1yDZEhIZ_Sl6v75Q.png', new Date(), 'humor'),
        new Post('Nos vemos ', 're are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Cristian Salerno', 'https://uploads.toptal.io/blog/image/125395/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff.png', new Date(), 'humor'),
        new Post('Nos vemos ', 're are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Cristian Salerno', 'https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/media/1/NQ9wdTPDQnmbZgNlcnao_my-first-angular-site.jpg', new Date(), 'humor'),
        new Post('Nos vemos ', 're are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Cristian Salerno', 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png', new Date(), 'coding'),
        new Post('Nos vemos ', 're are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Cristian Salerno', 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png', new Date(), 'coding'),
      ]
    }

  }

  //Agregar un nuevo posteo
  agregarPosts(pNuevoPosteo) {
    this.arrPosts.push(pNuevoPosteo)
  }

  //con promesas 
  AgregarPostProm(pNuevoPosteo) {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pNuevoPosteo);
      resolve('Inserccion correcta');
    })
  }

  //Obtener todos los posts
  getAll() {
    return this.arrPosts;
  }

  //Obtener todos los posts del Array con Promesas
  getAllProm() {
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts);
    })
  }

  //Filtrar por categoria
  filtrarCategoria(pCategoria) {
    const blogfiltrado = this.arrPosts.filter((item) => {
      console.log(item.categoria, pCategoria);
      if (item.categoria === pCategoria) {
        return true;
      } else {
        return false;
      }
    })
    return blogfiltrado;
  }
  //Filtrar por Categoria con Promesas.
  fitrarCatProm(pCategoria) {
    return new Promise<Post[]>((resolve, reject) => {
      const blogfiltrado = this.arrPosts.filter((item) => {
        return item.categoria === pCategoria;
      })
      resolve(blogfiltrado);
    })
  }

  guardarPostLocalStor() {
    localStorage.setItem('postBlog', JSON.stringify(this.arrPosts))
  }


}
