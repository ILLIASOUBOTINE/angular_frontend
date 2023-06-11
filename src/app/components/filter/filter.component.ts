import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/models/Filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() itemsFilter: Filter[];
  @Input() name: string;

  constructor(private filterService: FilterService ){}

}
