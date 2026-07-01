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
      description: 'A full-featured digital storefront with real-time inventory management,Project in school with classmate .',
      techs: ['javascript','css','html'],
      demo: 'https://9-shop.vercel.app/shoes',
      github: 'https://github.com/seavinh/9-shop',
      imageUrl: '/image/9shop.png'
    },
    {
      title: 'Inventory System',
      description: 'This project demonstrates my skills in full-stack web development, database design, CRUD operations, authentication, and deploying web applications to a hosting environment.',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      demo: 'https://stock-inventory-frontend-eight.vercel.app/',
      github: 'https://github.com/seavinh/stock-inventory-frontend',
      imageUrl: '/image/Inventory.png'
    },
    {
      title: 'Weather Forecast App',
      description: 'A sleek productivity tool aiding teams in organizing tasks, matching milestones, and collaborating efficiently across diverse geographic locations.',
      techs: ['flutter', 'dart', 'Laravel'],
      demo: 'https://weather-app-two-neon-76.vercel.app/',
      github: 'https://github.com/seavinh/Weather_app',
      imageUrl: '/image/weahter.png'
    },
    {
      title: 'Car Garage Management System',
      description: 'A sleek productivity tool aiding teams in organizing tasks, matching milestones, and collaborating efficiently across diverse geographic locations.',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      demo: 'https://car-garage-ecru.vercel.app/',
      github: 'https://github.com/seavinh/CarGarage',
      imageUrl: '/image/CarGarage.png'
    },
    {
      title: 'Football Booking App',
      description: 'A sleek productivity tool aiding teams in organizing tasks, matching milestones, and collaborating efficiently across diverse geographic locations.',
      techs: ['flutter', 'dart', 'supabase'],
      demo: 'https://football-booking-app.vercel.app/#/login',
      github: 'https://github.com/seavinh/football-booking',
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
