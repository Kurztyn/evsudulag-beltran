import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    this.renderRevenueChart();
    this.renderCategorySalesChart();
  }

  renderRevenueChart() {
    const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue ($)',
          data: [12000, 18000, 15000, 20000, 24000, 28000],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  renderCategorySalesChart() {
    const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Clothing', 'Groceries', 'Accessories', 'Others'],
        datasets: [{
          label: 'Sales Distribution',
          data: [5000, 7000, 12000, 4000, 3000],
          backgroundColor: ['#e74c3c', '#2ecc71', '#3498db', '#f39c12', '#9b59b6']
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}