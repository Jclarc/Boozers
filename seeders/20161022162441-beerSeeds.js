"use strict";

module.exports = {
    up: function(queryInterface, Sequelize) {


        return queryInterface.bulkInsert('beer_names', [{
                name: 'Ace Pineapple Cider',
                aroma: 'pineapple',
                style: 'cider',
                abv: '5.0',
                color: 'light',
                key_notes: 'pineapple'
            }, {
                name: 'Woodchuck Pear Cider',
                aroma: 'pear',
                style: 'cider',
                abv: '4.0',
                color: 'light',
                key_notes: 'pear'
            },
        {
            name: 'Cigar City Homemade Apple Pie',
            aroma: 'cinnamon',
            style: 'cider',
            abv: '6.9',
            color: 'light',
            key_notes: 'apple'
        }, {
            name: 'Boulevard Tell Tale Tart',
            aroma: 'raspberry',
            style: 'american sour',
            abv: '6.2',
            color: 'pale',
            key_notes: 'raspberry'
        }, {
            name: 'Fat Heads Bumble Berry Honey Blueberry',
            aroma: 'blueberry',
            style: 'fruit beer',
            abv: '5.3',
            color: 'light',
            key_notes: 'blueberry'
        }, {
            name: 'Lost Coast Tangerine Wheat',
            aroma: 'tangerine',
            style: 'fruit beer',
            abv: '5.0',
            color: 'wheat',
            key_notes: 'tangerine'
        }, {
            name: 'Sam Adams Cherry Wheat',
            aroma: 'cherry',
            style: 'fruit beer',
            abv: '5.4',
            color: 'wheat',
            key_notes: 'cherry'
        }, {
            name: 'Stupid Silly Sour',
            aroma: 'cherry',
            style: 'belgian sour',
            abv: '5.5',
            color: 'amber',
            key_notes: 'orange'
        }, {
            name: 'Uinta Ready Set Gose',
            aroma: 'lemon',
            style: 'gose',
            abv: '4.0',
            color: 'pale',
            key_notes: 'lemon'
        }, {
            name: 'Blue Point Toasted Lager',
            aroma: 'malt',
            style: 'amber lager',
            abv: '5.5',
            color: 'amber',
            key_notes: 'hops'
        }, {
            name: 'Crooked Can McSwaggers Own Amber',
            aroma: 'fruity',
            style: 'amber ale',
            abv: '6.0',
            color: 'amber',
            key_notes: 'malt'
        }, {
            name: 'Laughing Skull Amber',
            aroma: 'malt',
            style: 'amber ale',
            abv: '5.7',
            color: 'amber',
            key_notes: 'caramel'
        }, {
            name: 'Ballast Point Sculpin',
            aroma: 'fruity',
            style: 'india pale ale',
            abv: '7.0',
            color: 'light',
            key_notes: 'apricot'
        }, {
            name: 'Cigar City Jai Alai',
            aroma: 'citrus',
            style: 'india pale ale',
            abv: '7.5',
            color: 'light',
            key_notes: 'caramel'
        }, {
            name: 'Dogfish Head 90 Minute',
            aroma: 'malt',
            style: 'imperial ipa',
            abv: '9.0',
            color: 'amber',
            key_notes: 'hops'
        }, {
            name: 'Funky Buddha Hop Gun',
            aroma: 'citrus',
            style: 'india pale ale',
            abv: '7.2',
            color: 'pale',
            key_notes: 'caramel'
        }, {
            name: 'Tampa Bay Reef Donkey',
            aroma: 'citrus',
            style: 'american pale ale',
            abv: '5.5',
            color: 'pale',
            key_notes: 'fruity'
        }, {
            name: 'Wynwood Magic City',
            aroma: 'malt',
            style: 'american pale ale',
            abv: '5.6',
            color: 'pale',
            key_notes: 'malt'
        }, {
            name: 'Kasteel Barista Chocolate Quad',
            aroma: 'chocolate',
            style: 'belgian quadrupel',
            abv: '11.0',
            color: 'dark',
            key_notes: 'espresso'
        }, {
            name: 'Kentucky Bourbon Barrel',
            aroma: 'bourbon',
            style: 'strong ale',
            abv: '8.2',
            color: 'dark',
            key_notes: 'vanilla'
        }, {
            name: 'Kona Big Wave Golden',
            aroma: 'fruity',
            style: 'blonde ale',
            abv: '4.4',
            color: 'light',
            key_notes: 'honey'
        }, {
            name: 'Miami Big Rod Coconut Ale',
            aroma: 'coconut',
            style: 'blonde ale',
            abv: '5.3',
            color: 'light',
            key_notes: 'coconut'
        }, {
            name: 'Orange Blosson Pilsner',
            aroma: 'honey',
            style: 'honey beer',
            abv: '5.5',
            color: 'light',
            key_notes: 'orange'
        }, {
            name: 'Pilsner Urquell',
            aroma: 'malts',
            style: 'pilsner',
            abv: '4.4',
            color: 'light',
            key_notes: 'hops'
        }, {
            name: 'Guiness Blonde American Lager',
            aroma: 'citrus',
            style: 'pale lager',
            abv: '5.0',
            color: 'pale',
            key_notes: 'hops'
        }, {
            name: 'Cigar City Florida Cracker',
            aroma: 'orange',
            style: 'white ale',
            abv: '5.0',
            color: 'wheat',
            key_notes: 'coriander'
        }, {
            name: 'Konig Ludwig Weissbier Dunkel',
            aroma: 'vanilla',
            style: 'dunkelweizen',
            abv: '5.5',
            color: 'amber',
            key_notes: 'malts'
        }, {
            name: 'Funky Buddha Floridian',
            aroma: 'citrus',
            style: 'american wheat',
            abv: '5.6',
            color: 'wheat',
            key_notes: 'orange'
        }, {
            name: 'Schneider Aventinus',
            aroma: 'clove',
            style: 'weizenbock',
            abv: '8.2',
            color: 'amber',
            key_notes: 'caramel'
        }, {
            name: 'Breckenridge Nitro Vanilla Porter',
            aroma: 'vanilla',
            style: 'porter',
            abv: '4.7',
            color: 'dark',
            key_notes: 'vanilla'
        }, {
            name: 'Rogue Hazelnut Brown Nectar',
            aroma: 'hazelnut',
            style: 'american brown',
            abv: '6.0',
            color: 'dark',
            key_notes: 'chocolate'
        }, {
            name: 'Left Hand Nitro Milk Stout',
            aroma: 'vanilla',
            style: 'sweet stout',
            abv: '6.0',
            color: 'dark',
            key_notes: 'coffee'
        }, {
            name: 'Saison Dupont',
            aroma: 'fruity',
            style: 'saison',
            abv: '6.5',
            color: 'amber',
            key_notes: 'spiced'
        }

        ]);
}
    


    //     down: function(queryInterface, Sequelize) {

    //     return queryInterface.bulkDelete('beer_names', null);

    // }

}