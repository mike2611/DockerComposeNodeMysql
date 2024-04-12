import { Component } from '@angular/core';
import { RazaServiceService } from '../raza-service.service';
import { response } from 'express';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent {
  formData: any = { nombre: '', descripcion: '' };
  razas: any[] = [];

  constructor(private razaService: RazaServiceService) {}

  ngOnInit(): void {
    this.fetchRazas();
  }

  onSubmit() {
  this.razaService.postData(this.formData).subscribe({
    next: response => {
      console.log('Post request successful:', response);  
    }, error: error => {
      console.error('Error making post request: ', error);
    } 
  }).add(() => {
    this.formData.nombre = '';
    this.formData.descripcion = '';
  });
  }

  fetchRazas() {
    this.razaService.getAllData().subscribe({
      next: response => {
        this.razas =  response;
      }, error: error => {
        console.error('Error making get request: ', error);
      }
    })
  }

}

