import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
    <input
      #inputSearch
      autofocus
      type="search"
      class="form-control form-control-dark text-white bg-dark"
      aria-label="Search"
      placeholder="Search..."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input {width:100%}'],
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}