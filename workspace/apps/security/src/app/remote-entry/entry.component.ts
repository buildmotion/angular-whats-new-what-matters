import { Component } from '@angular/core';

@Component({
  selector: 'buildmotion-security-entry',
  template: `<div class="remote-entry">
    <h2>security's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
