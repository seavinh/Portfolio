import { Component, signal, HostListener, OnInit, Inject, PLATFORM_ID, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Hero, About, Projects, Contact, Footer]
})
export class App implements OnInit, AfterViewInit {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  skills = [
    'HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript',
    'Angular', 'React', 'Node.js',
    'TailwindCSS', 'Supabase', 'Dart', 'Flutter', 'Laravel',
    'Figma', 'Git'
  ];

  designSkills = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe InDesign'
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A collaborative e-commerce website featuring product management, shopping cart functionality, and order processing, developed as a university team project.',
      techs: ['javascript','css','html'],
      demo: 'https://9-shop.vercel.app/shoes',
      github: 'https://github.com/seavinh/9-shop',
      imageUrl: '/image/9shop.png'
    },
    {
      title: 'Inventory System',
      description: 'A web-based inventory management system for tracking products, managing stock, and monitoring sales efficiently.',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      demo: 'https://stock-inventory-frontend-eight.vercel.app/',
      github: 'https://github.com/seavinh/stock-inventory-frontend',
      imageUrl: '/image/Inventory.png'
    },
    {
      title: 'Weather Forecast App',
      description: 'A mobile weather application that provides real-time weather updates and 7-day forecasts using API integration.',
      techs: ['flutter', 'dart', 'Laravel'],
      demo: 'https://climate.seavinh.com',
      github: 'https://github.com/seavinh/Weather_app',
      imageUrl: '/image/weahter.png'
    },
    {
      title: 'Car Garage Management System',
      description: 'A management system for handling vehicle records, service appointments, repairs, and customer information efficiently.',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      demo: 'https://cargarage.seavinh.com',
      github: 'https://github.com/seavinh/CarGarage',
      imageUrl: '/image/CarGarage.png'
    },
    {
      title: 'Football Booking App',
      description: 'A mobile application that allows users to book football fields, manage reservations, and view available time slots.',
      techs: ['flutter', 'dart', 'supabase'],
      demo: 'https://football-booking-app.vercel.app/#/login',
      github: 'https://github.com/seavinh/football-booking',
      imageUrl: '/image/football-booking.png'
    },
    {
      title: 'Gym Management System',
      description: 'A management system for handling gym members, trainers, workout plans, and fitness tracking.',
      techs: ['Laravel', 'Angular', 'MySql'],
      demo: 'https://gym.seavinh.com',
      github: 'https://github.com/seavinh/gym',
      imageUrl: '/image/football-booking.png'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  private checkScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  private initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    const revealElements = this.elementRef.nativeElement.querySelectorAll('.reveal');
    revealElements.forEach((el: Element) => observer.observe(el));
  }
}
