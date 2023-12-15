import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
district:any = [
  {
    id:1,
    title:"Alappuzha",
    image:"../../../assets/images/kl1.jpg",
    description:"Alappuzha is a district of immense natural beauty. It is embraced by the Arabian Sea in the west and has a network of lakes, lagoons and freshwater rivers criss-crossing it.",},
    {
      id:2,
      title:"Ernakulam",
      image:"../../../assets/images/d2.jpg",
      description:"The eastern part of Kochi city is mainly known as Ernakulam, while the western part of it after the Venduruthy Bridge is called as Western Kochi. Many major establishments, including the Kerala High Court, the office of the Kochi Municipal Corporation and the Cochin Shipyard are situated in Ernakulam.",},
      {
        id:3,
        title:"Idukki",
        image:"../../../assets/images/d3.jpg",
        description:"Idukki is a district in Kerala, India. It's the second largest district in the state by area, but has the lowest population density. Idukki is known as the spice garden of Kerala.",},
        {
          id:4,
          title:"Kannur",
          image:"../../../assets/images/d4.jpg",
          description:"Kannur is believed to have got its name from being the land of Kannan or Krishna. True to the legend there are many famous temples in the region. The district is also famous for many alluring spots of interest including Payyambalam and Muzhuppilangadi beach, Arakkal museum, St. Angelo's Fort..",},  {
            id:5,
            title:"Kasaragod",
            image:"../../../assets/images/d5.jpg",
            description:"Kasaragod is famous for its handlooms and its 293 kilometre long coastline. With its cultural uniqueness, the place is known as the land of gods. Rich in history, Kasaragod is home to the largest and best preserved fort in the State - Bekal.",},
            {
              id:6,
              title:"Kollam",
              image:"../../../assets/images/d6.jpg",
              description:"Kollam (erstwhile Quilon) is a southern district of Kerala, located 70 km north of the state's capital Thiruvananthapuram. It is flanked by the Arabian sea on the west, Tamil Nadu on the east, Alapuzha and Pathanamthitta districts on the north and Thiruvananthapuram district on the south.",},
              {
                id:7,
                title:"Pathanamthitta",
                image:"../../../assets/images/d7.jpg",
                description:"Pathanamthitta has a tropical monsoon climate that borders a tropical rainforest climate. It's a predominantly agricultural district with major crops including: Coconut, Rubber, Paddy, Pepper, Tea.",},
                {
                  id:8,
                  title:"Thiruvananthapuram",
                  image:"../../../assets/images/d8.jpg",
                  description:"Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala.",},
  ];
  }







































































  