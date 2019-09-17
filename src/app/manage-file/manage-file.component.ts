import { Component, OnInit } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-manage-file',
  templateUrl: './manage-file.component.html',
  styleUrls: ['./manage-file.component.scss']
})
export class ManageFileComponent implements OnInit {

  public uploadObj: UploaderComponent;
  public autoUpload: boolean = true;
  public path: Object = {
      saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };

  constructor() { }

  ngOnInit() {
  }

}
