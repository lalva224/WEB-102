import React from "react"
import Event from "./Event"

const Cards = (props) =>{
    return(
    <table>
        <tbody>
            <tr>
                <td><Event website = "https://www.movienight.com/" image = "images/movie-night.jpg" title = "Outdoor movie night" content="Come by 8th st and 107 for a thrilling movie experience"></Event></td>
                
                <td><Event website = "https://cleanmiamibeach.org/"image="images/BeachCleaning.jpg" title = "Beach cleanup" content="beach cleanup at virginia key beach"></Event></td>
                <td><Event image ="images/community-garden.jpg"title = "Community Garden project" content="Foster community bonds while nurturing gardens and promoting healthy living"></Event></td>
            </tr>
            <tr>
            <td><Event image="images/pet-parade.jpg" title = "Pet Parade" content="Connect with fellow pet lovers by showcasing your furry friends in a delightful pet parade."></Event></td>
            <td><Event website = "https://www.perfectpotluck.com/"image="images/potluck.jpg" title = "Neighborhood Potluck Picnic" content=" Bring your favorite dish to share and connect with your neighbors over delicious food at our potluck picnic in the park"></Event></td>
            <td><Event website = "https://myfunrun.com/" image="images/funrun.jpg" title = "Charity Fun Run" content=" Lace up your sneakers and run for a cause at our charity fun run, raising funds for local charities and promoting fitness."></Event></td>
            </tr>
            <tr>
            <td><Event website = "https://petsmartcharities.org/adopt-a-pet/adoption-events" image = "images/pet-adoption.jpg"title = "Pet Adoption Fair" content="Find your new furry friend and support local animal shelters at our pet adoption fair featuring adorable pets in need of loving homes."></Event></td>
            <td><Event website = "https://healthandwellnessexpo.com/"image = "images/health-wellness.jpg"title = "Health and Wellness Expo" content="Explore the latest in health and wellness trends, with free fitness classes, nutrition workshops, and wellness vendors."></Event></td>
            <td><Event  website = "https://www.eventbrite.com/e/suncoasts-largest-food-truck-festival-40-tickets-688030446587"image = "images/foodtruck-festival.jpg" title = "Food Truck Festival" content="Indulge in a variety of delicious cuisines from local food trucks and enjoy live music at our food truck festival."></Event></td>
            </tr>
            
        </tbody>
    </table>
    )
}

export default Cards;