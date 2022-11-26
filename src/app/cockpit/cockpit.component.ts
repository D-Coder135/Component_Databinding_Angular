import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})

  }

}
