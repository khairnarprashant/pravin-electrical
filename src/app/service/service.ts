import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [CommonModule ],
  templateUrl: './service.html',
  styleUrl: './service.css'
})
export class Service {
 services = [
    {
      title: 'New Builds Electrical Contractors',
      icon: 'assets/building.png',
      description: '"New Builds Electrical Contractors delivers reliable, safe, and expert electrical solutions for residential, commercial, and industrial new construction projects"'
    },
    {
      title: 'Service & Maintenance',
      icon: 'assets/Generated.png',
      description: '"We provide expert electrical maintenance, fault diagnosis, repairs, inspections, and safety checks to ensure long-lasting, reliable performance and compliance"'
    },
    {
      title: 'Commercial Electrical Services',
      icon: 'assets/Commercial.png',
      description: '"We specialize in efficient, code-compliant electrical installations for offices, shops, and buildings with lighting, wiring, networking, and maintenance."'

    },
    {
      title: 'Industrial Electrical Services',
      icon: 'assets/Industrial.png',
      description: '"We provide robust electrical installations for factories and warehouses, including machinery wiring, control panels, power distribution, and safety systems."'
    },
    {
      title: 'Lighting Design & Installation',
      icon: 'assets/Commercial.png',
      description: '"We design and install efficient, modern lighting systems for homes, offices, and industrial spaces — enhancing safety, style, and energy savings."'
    },
    {
      title: 'Security & Monitoring Systems',
      icon: 'assets/security.png',
      description: '"We install advanced security systems including CCTV, access control, and alarm systems to protect homes, businesses, and industrial facilities."'
    }
  ];
}
