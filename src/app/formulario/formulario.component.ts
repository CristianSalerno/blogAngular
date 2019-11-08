import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post-service'
import { Post } from '../models/post.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;


  constructor(private postService: PostService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.maxLength(50),
      ]),
      texto: new FormControl('', [
        Validators.maxLength(400),
      ]),
      autor: new FormControl('', [
        Validators.maxLength(30),
      ]),
      imagen: new FormControl('', [
        Validators.maxLength(400),
      ]),
      categoria: new FormControl('', [
        Validators.maxLength(400),
      ]),
      fecha: new FormControl(new Date(), [

      ])
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.postService.agregarPosts(this.formulario.value)
    this.postService.guardarPostLocalStor();
  }

}
