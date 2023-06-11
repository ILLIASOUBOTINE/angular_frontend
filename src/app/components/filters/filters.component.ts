import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/Filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categories: Filter[];

  constructor(private filterService: FilterService){}

  ngOnInit(): void {
    this.filterService.getCategories().subscribe((categories)=>{
      this.categories = categories;
    })
  }

}
