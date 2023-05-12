import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../Services/rick-and-morty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  selectedCharacter;

  constructor(private route:ActivatedRoute,private rickAndMortyService: RickAndMortyService,private router: Router) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.rickAndMortyService.getCharacterById(id).subscribe((response: any) => {
      this.selectedCharacter = response;
    });
  }
  goBackToParent() {
    this.router.navigate(['/CharacterList']);
  }
 
}
 