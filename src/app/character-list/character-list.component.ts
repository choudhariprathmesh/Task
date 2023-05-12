import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../Services/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any[] = [];
  selectedCharacter: any;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe((response: any) => {
      this.characters = response.results;
    });
  }

  selectCharacter(id: number) {
    this.rickAndMortyService.getCharacterById(id).subscribe((response: any) => {
      this.selectedCharacter = response;
    });
  }

}

