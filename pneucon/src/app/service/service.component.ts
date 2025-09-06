import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  hovered: number | null = null;

  services = [
    {
      title: 'Maneuvering System',
      // desc: 'Servicing, Troubleshooting, Periodical Maintenance and Spare Part Supply. Makers: Nabco, Rexroth, Wabco. Includes 3/2, 5/2 Way Valve, Reversing Cylinder, EP Converter, Air Source Unit, Filter, Solenoid Valve, Manual Control Valves, Reducing Valve & more.',
      img: 'assets/images/maneuvering.png',
      route: '/services/mechanical'
    },
    {
      title: 'Electrical & Automation System',
      // desc: 'Servicing, Troubleshooting, Periodical Maintenance of Alarm Monitoring Systems, Main Switch Board, Air Circuit Breakers, Boiler Control Automation, KW/Ampere/Voltage Meters, and Pressure Gauge Calibration Services.',
      img: 'assets/images/electrical.png',
      route: '/services/electrical'
    },
    {
      title: 'Hydraulic System',
      // desc: 'Servicing, Troubleshooting, Periodical Maintenance and Spare Part Supply of Winches & Windlass Motor, Hydraulic Valves, Steering Gear System, Hydraulic Motors, and Hydraulic Hose.',
      img: 'assets/images/Hydraulic.png',
      route: '/services/hydraulic'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}