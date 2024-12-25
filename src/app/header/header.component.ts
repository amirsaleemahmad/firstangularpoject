import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private searchService: SearchService) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchService.searchUsers(this.searchQuery).subscribe({
        next: (response) => {
          this.searchResults = response.users; 
          console.log(this.searchResults);
        },
        error: (err) => {
          console.error('Error fetching search results:', err);
        }
      });
    }
  }

}
