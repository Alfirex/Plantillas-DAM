import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-edit-user',
  templateUrl: './tab3-edit-user.page.html',
  styleUrls: ['./tab3-edit-user.page.scss'],
})
export class Tab3EditUserPage implements OnInit {
  public new_user: any;

  constructor() {
      this.new_user = {
          'name': '',
          'surname': '',
          'lvlAcademic': '',
          'phone': '',
          'teacher': '',
          'bank': '',
          'password': '',
          'rpassword': ''
      };
  }

  ngOnInit() {
  }
    /**
     * Esta Función la creamos para cuando el formulario de Click a enviar
     */
    onSubmit() {
        // Mostramos la información que hemos creado en consola
        console.log(this.new_user);
    }
}
